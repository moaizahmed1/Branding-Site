import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

/**
 * Submission store.
 *
 * With DATABASE_URL set (Neon / Vercel Postgres) enquiries are stored in
 * Postgres — required on serverless hosting such as Vercel, where the
 * filesystem is ephemeral. Without it, they persist to a JSON file
 * (`.data/submissions.json`, override with DATA_DIR) for local development.
 * The rest of the app only calls `list`, `get`, `add`, `update` and `remove`.
 */

export const STATUSES = ["new", "in_progress", "resolved", "archived"] as const;
export type Status = (typeof STATUSES)[number];

export const STATUS_LABEL: Record<Status, string> = {
  new: "New",
  in_progress: "In progress",
  resolved: "Resolved",
  archived: "Archived",
};

export type Submission = {
  id: string;
  createdAt: string; // ISO
  name: string;
  email: string;
  position: string;
  level: string;
  interest: string;
  message: string;
  status: Status;
  notes: string;
};

export type NewSubmission = Omit<Submission, "id" | "createdAt" | "status" | "notes">;

const dir = process.env.DATA_DIR ?? path.join(process.cwd(), ".data");
const file = path.join(dir, "submissions.json");

// Serialise writes so concurrent requests can't clobber each other.
let queue: Promise<unknown> = Promise.resolve();
function exclusive<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => undefined);
  return run;
}

async function read(): Promise<Submission[]> {
  try {
    const raw = await readFile(file, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? (data as Submission[]) : [];
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
}

async function write(items: Submission[]) {
  await mkdir(dir, { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(items, null, 2), "utf8");
  await rename(tmp, file);
}

/** Newest first. */
async function fileList(): Promise<Submission[]> {
  const items = await read();
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

async function fileGet(id: string): Promise<Submission | undefined> {
  return (await read()).find((s) => s.id === id);
}

function fileAdd(input: NewSubmission): Promise<Submission> {
  return exclusive(async () => {
    const items = await read();
    const item: Submission = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      status: "new",
      notes: "",
    };
    items.push(item);
    await write(items);
    return item;
  });
}

function fileUpdate(
  id: string,
  patch: Partial<Pick<Submission, "status" | "notes">>,
): Promise<Submission | undefined> {
  return exclusive(async () => {
    const items = await read();
    const item = items.find((s) => s.id === id);
    if (!item) return undefined;
    if (patch.status) item.status = patch.status;
    if (patch.notes !== undefined) item.notes = patch.notes;
    await write(items);
    return item;
  });
}

function fileRemove(id: string): Promise<boolean> {
  return exclusive(async () => {
    const items = await read();
    const next = items.filter((s) => s.id !== id);
    if (next.length === items.length) return false;
    await write(next);
    return true;
  });
}

/* ---------- Postgres backend ---------- */

type Row = {
  id: string;
  created_at: string | Date;
  name: string;
  email: string;
  position: string;
  level: string;
  interest: string;
  message: string;
  status: Status;
  notes: string;
};

const toSubmission = (r: Row): Submission => ({
  id: r.id,
  createdAt: new Date(r.created_at).toISOString(),
  name: r.name,
  email: r.email,
  position: r.position,
  level: r.level,
  interest: r.interest,
  message: r.message,
  status: r.status,
  notes: r.notes,
});

let sqlClient: ReturnType<typeof neon> | undefined;
let ready: Promise<unknown> | undefined;

/** Lazily connects and creates the table on first use. */
async function db() {
  sqlClient ??= neon(process.env.DATABASE_URL!);
  const sql = sqlClient;
  ready ??= sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id          uuid PRIMARY KEY,
      created_at  timestamptz NOT NULL DEFAULT now(),
      name        text NOT NULL,
      email       text NOT NULL,
      position    text NOT NULL DEFAULT '',
      level       text NOT NULL DEFAULT '',
      interest    text NOT NULL DEFAULT '',
      message     text NOT NULL DEFAULT '',
      status      text NOT NULL DEFAULT 'new',
      notes       text NOT NULL DEFAULT ''
    )`.catch((e) => {
    ready = undefined;
    throw e;
  });
  await ready;
  return sql;
}

async function pgList(): Promise<Submission[]> {
  const sql = await db();
  const rows = (await sql`SELECT * FROM submissions ORDER BY created_at DESC`) as Row[];
  return rows.map(toSubmission);
}

async function pgGet(id: string): Promise<Submission | undefined> {
  const sql = await db();
  const rows = (await sql`SELECT * FROM submissions WHERE id::text = ${id}`) as Row[];
  return rows[0] && toSubmission(rows[0]);
}

async function pgAdd(i: NewSubmission): Promise<Submission> {
  const sql = await db();
  const rows = (await sql`
    INSERT INTO submissions (id, name, email, position, level, interest, message)
    VALUES (${randomUUID()}, ${i.name}, ${i.email}, ${i.position}, ${i.level}, ${i.interest}, ${i.message})
    RETURNING *`) as Row[];
  return toSubmission(rows[0]);
}

async function pgUpdate(
  id: string,
  patch: Partial<Pick<Submission, "status" | "notes">>,
): Promise<Submission | undefined> {
  const sql = await db();
  const rows = (await sql`
    UPDATE submissions
    SET status = COALESCE(${patch.status ?? null}, status),
        notes  = COALESCE(${patch.notes ?? null}, notes)
    WHERE id::text = ${id}
    RETURNING *`) as Row[];
  return rows[0] && toSubmission(rows[0]);
}

async function pgRemove(id: string): Promise<boolean> {
  const sql = await db();
  const rows = (await sql`DELETE FROM submissions WHERE id::text = ${id} RETURNING id`) as unknown[];
  return rows.length > 0;
}

/* ---------- Public API ---------- */

const usePg = Boolean(process.env.DATABASE_URL);

export const list = (): Promise<Submission[]> => (usePg ? pgList() : fileList());
export const get = (id: string) => (usePg ? pgGet(id) : fileGet(id));
export const add = (i: NewSubmission) => (usePg ? pgAdd(i) : fileAdd(i));
export const update = (id: string, patch: Partial<Pick<Submission, "status" | "notes">>) =>
  usePg ? pgUpdate(id, patch) : fileUpdate(id, patch);
export const remove = (id: string) => (usePg ? pgRemove(id) : fileRemove(id));
