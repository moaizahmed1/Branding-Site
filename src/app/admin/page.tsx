import Link from "next/link";
import { Download, ExternalLink, LogOut, Mail, Search } from "lucide-react";
import { deleteSubmission, logout, saveNotes, setStatus } from "@/app/admin/actions";
import { Wordmark } from "@/components/layout/Wordmark";
import { requireAdmin } from "@/lib/admin-auth";
import { cn } from "@/lib/cn";
import {
  list,
  STATUS_LABEL,
  STATUSES,
  type Status,
  type Submission,
} from "@/lib/submissions";

export const dynamic = "force-dynamic";

type Params = { status?: string; q?: string; id?: string };

const TZ = "Europe/London";
const fmtFull = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: TZ,
});

function ago(iso: string) {
  const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 7) return `${Math.floor(s / 86400)}d ago`;
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: TZ }).format(new Date(iso));
}

const badge: Record<Status, string> = {
  new: "border-accent/40 bg-accent/15 text-accent",
  in_progress: "border-sky-400/30 bg-sky-400/10 text-sky-300",
  resolved: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  archived: "border-white/15 bg-white/5 text-muted",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase leading-[15px] tracking-[0.08em]",
        badge[status],
      )}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function href(base: Params, patch: Partial<Params>) {
  const next = { ...base, ...patch };
  const sp = new URLSearchParams();
  if (next.status && next.status !== "all") sp.set("status", next.status);
  if (next.q) sp.set("q", next.q);
  if (next.id) sp.set("id", next.id);
  const qs = sp.toString();
  return qs ? `/admin?${qs}` : "/admin";
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  await requireAdmin();
  const params = await searchParams;
  const status = STATUSES.includes(params.status as Status) ? (params.status as Status) : "all";
  const q = (params.q ?? "").trim().slice(0, 100);

  const all = await list();
  const count = (s: Status) => all.filter((x) => x.status === s).length;

  const needle = q.toLowerCase();
  const rows = all.filter(
    (x) =>
      (status === "all" || x.status === status) &&
      (!needle ||
        [x.name, x.email, x.interest, x.message, x.position, x.level]
          .join(" ")
          .toLowerCase()
          .includes(needle)),
  );

  const selected: Submission | undefined = params.id
    ? all.find((x) => x.id === params.id)
    : undefined;
  const base: Params = { status: status === "all" ? undefined : status, q: q || undefined };
  const here = href({ ...base, id: selected?.id }, {});

  const stats = [
    { label: "Total enquiries", value: all.length, accent: false },
    { label: "New", value: count("new"), accent: true },
    { label: "In progress", value: count("in_progress"), accent: false },
    { label: "Resolved", value: count("resolved"), accent: false },
  ];

  const tabs: { key: string; label: string; n: number }[] = [
    { key: "all", label: "All", n: all.length },
    ...STATUSES.map((s) => ({ key: s, label: STATUS_LABEL[s], n: count(s) })),
  ];

  return (
    <>
      <header className="border-b border-line bg-ink-2">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <Wordmark className="text-sm sm:text-base" />
            <span className="rounded-md border border-line px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.1em] text-muted">
              Admin
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-sm sm:gap-2">
            <Link
              href="/"
              target="_blank"
              className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-muted transition-colors hover:bg-white/5 hover:text-white sm:inline-flex"
            >
              View site <ExternalLink size={14} aria-hidden />
            </Link>
            <a
              href="/admin/export.csv"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-cream transition-colors hover:border-white/30"
            >
              <Download size={14} aria-hidden />
              <span className="hidden sm:inline">Export CSV</span>
              <span className="sm:hidden">CSV</span>
            </a>
            <form action={logout}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                <LogOut size={14} aria-hidden />
                <span className="hidden sm:inline">Sign out</span>
                <span className="sr-only sm:hidden">Sign out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-5 py-10 md:px-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-medium leading-10 tracking-[-0.03em]">Enquiries</h1>
          <p className="text-sm text-muted">
            Everything submitted through the website, newest first.
          </p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-surface px-5 py-4"
            >
              <dt className="text-mono-eyebrow">{s.label}</dt>
              <dd
                className={cn(
                  "pt-2 text-[36px] font-medium leading-10 tracking-[-0.03em]",
                  s.accent && s.value > 0 && "text-accent",
                )}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Filter by status" className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Link
                key={t.key}
                href={href(base, { status: t.key, id: undefined })}
                aria-current={status === t.key ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  status === t.key
                    ? "border-accent bg-accent text-on-accent"
                    : "border-line text-cream/80 hover:border-white/30",
                )}
              >
                {t.label}
                <span
                  className={cn(
                    "font-mono text-[11px]",
                    status === t.key ? "text-on-accent/70" : "text-muted",
                  )}
                >
                  {t.n}
                </span>
              </Link>
            ))}
          </nav>

          <form action="/admin" className="relative w-full lg:w-[320px]" role="search">
            {status !== "all" && <input type="hidden" name="status" value={status} />}
            <Search
              size={16}
              aria-hidden
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search name, email, message…"
              aria-label="Search enquiries"
              className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </form>
        </div>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_440px]">
          {/* List */}
          <section aria-label="Enquiries">
            {rows.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-line px-6 py-16 text-center">
                <p className="text-base font-medium">
                  {all.length === 0 ? "No enquiries yet" : "Nothing matches those filters"}
                </p>
                <p className="pt-1 text-sm text-muted">
                  {all.length === 0
                    ? "New messages from the website will appear here."
                    : "Try a different status or search term."}
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-2">
                {rows.map((r) => {
                  const active = r.id === selected?.id;
                  return (
                    <li key={r.id}>
                      <Link
                        href={href(base, { id: r.id })}
                        aria-current={active ? "true" : undefined}
                        className={cn(
                          "block rounded-2xl border px-5 py-4 transition-colors",
                          active
                            ? "border-accent/60 bg-surface"
                            : "border-line bg-ink-2 hover:border-white/25 hover:bg-surface",
                        )}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-2.5">
                            {r.status === "new" && (
                              <span
                                aria-label="New"
                                className="size-2 shrink-0 rounded-full bg-accent"
                              />
                            )}
                            <p className="truncate text-[15px] font-medium">{r.name}</p>
                            <span className="hidden truncate text-sm text-muted sm:inline">
                              {r.email}
                            </span>
                          </div>
                          <span className="shrink-0 text-xs text-muted">{ago(r.createdAt)}</span>
                        </div>
                        <p className="line-clamp-2 pt-2 text-sm leading-5 text-cream/70">
                          {r.message || <span className="text-muted">No message</span>}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-3">
                          <StatusBadge status={r.status} />
                          <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-cream/80">
                            {r.interest}
                          </span>
                          {r.position && (
                            <span className="text-xs text-muted">{r.position}</span>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          {/* Detail */}
          <aside
            aria-label="Enquiry details"
            className={cn(
              "rounded-3xl border border-line bg-surface p-6 lg:sticky lg:top-6",
              // On phones: show the open enquiry above the list; hide the empty placeholder.
              selected ? "order-first lg:order-none" : "hidden lg:block",
            )}
          >
            {!selected ? (
              <div className="py-14 text-center">
                <p className="text-base font-medium">Select an enquiry</p>
                <p className="pt-1 text-sm text-muted">
                  Choose one from the list to read it, reply and update its status.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-[24px] font-medium leading-8 tracking-[-0.03em]">
                      {selected.name}
                    </h2>
                    <StatusBadge status={selected.status} />
                  </div>
                  <a
                    href={`mailto:${selected.email}`}
                    className="text-sm text-accent hover:underline"
                  >
                    {selected.email}
                  </a>
                  <p className="pt-1 text-xs text-muted">
                    Received {fmtFull.format(new Date(selected.createdAt))}
                  </p>
                </div>

                <dl className="grid grid-cols-3 gap-3 border-y border-line py-4 text-sm">
                  {[
                    ["Interested in", selected.interest],
                    ["Position", selected.position || "—"],
                    ["Level", selected.level || "—"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-mono-eyebrow">{k}</dt>
                      <dd className="pt-1 leading-5">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div>
                  <p className="text-mono-eyebrow">Message</p>
                  <p className="whitespace-pre-wrap break-words pt-2 text-[15px] leading-6">
                    {selected.message || <span className="text-muted">No message provided.</span>}
                  </p>
                </div>

                <a
                  href={`mailto:${selected.email}?subject=${encodeURIComponent("Your Blueprint XI enquiry")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-base text-on-accent transition hover:brightness-110"
                >
                  <Mail size={16} aria-hidden /> Reply by email
                </a>

                <div>
                  <p className="text-mono-eyebrow">Status</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {STATUSES.map((s) => (
                      <form key={s} action={setStatus}>
                        <input type="hidden" name="id" value={selected.id} />
                        <input type="hidden" name="status" value={s} />
                        <input type="hidden" name="returnTo" value={here} />
                        <button
                          type="submit"
                          aria-pressed={selected.status === s}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                            selected.status === s
                              ? "border-accent bg-accent text-on-accent"
                              : "border-line text-cream/80 hover:border-white/30",
                          )}
                        >
                          {STATUS_LABEL[s]}
                        </button>
                      </form>
                    ))}
                  </div>
                </div>

                <form action={saveNotes} className="flex flex-col gap-2">
                  <input type="hidden" name="id" value={selected.id} />
                  <input type="hidden" name="returnTo" value={here} />
                  <label htmlFor="notes" className="text-mono-eyebrow">
                    Private notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    defaultValue={selected.notes}
                    placeholder="Only visible to you…"
                    className="w-full resize-y rounded-xl border border-line bg-ink-2 px-4 py-3 text-sm leading-5 text-white placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="self-start rounded-lg border border-line px-4 py-2 text-sm text-cream transition-colors hover:border-white/30"
                  >
                    Save notes
                  </button>
                </form>

                <details className="border-t border-line pt-4">
                  <summary className="cursor-pointer text-sm text-muted transition-colors hover:text-[#f08a7e]">
                    Delete this enquiry…
                  </summary>
                  <form action={deleteSubmission} className="flex items-center gap-3 pt-3">
                    <input type="hidden" name="id" value={selected.id} />
                    <input type="hidden" name="returnTo" value={here} />
                    <button
                      type="submit"
                      className="rounded-lg bg-[#f08a7e] px-4 py-2 text-sm font-medium text-[#2a0d09] hover:brightness-110"
                    >
                      Yes, delete permanently
                    </button>
                    <span className="text-xs text-muted">This can’t be undone.</span>
                  </form>
                </details>
              </div>
            )}
          </aside>
        </div>
      </main>
    </>
  );
}
