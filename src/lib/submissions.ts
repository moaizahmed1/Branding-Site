import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

/**
 * Submission store.
 *
 * Persists to a JSON file (`.data/submissions.json`, override with DATA_DIR).
 * That is fine for local use and for a single long-lived server, but NOT for
 * serverless hosting (Vercel etc.) where the filesystem is ephemeral. To go to
 * production, replace the four functions below (`list`, `add`, `update`,
 * `remove`) with a database — the rest of the app only calls these.
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
export async function list(): Promise<Submission[]> {
  const items = await read();
  return items.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function get(id: string): Promise<Submission | undefined> {
  return (await read()).find((s) => s.id === id);
}

export function add(input: NewSubmission): Promise<Submission> {
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

export function update(
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

export function remove(id: string): Promise<boolean> {
  return exclusive(async () => {
    const items = await read();
    const next = items.filter((s) => s.id !== id);
    if (next.length === items.length) return false;
    await write(next);
    return true;
  });
}
