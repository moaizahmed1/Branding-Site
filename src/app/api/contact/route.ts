import { NextResponse } from "next/server";
import { add } from "@/lib/submissions";
import { levels, positions } from "@/lib/content";
import { interests } from "@/lib/interests";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

// Tiny in-memory limiter: 5 submissions / 10 min / IP. Replace with a shared
// store (Redis etc.) if you run more than one server instance.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success to bots.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { error: "Too many messages — please try again in a few minutes." },
      { status: 429 },
    );
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const message = clean(body.message, 2000);
  const position = clean(body.position, 40);
  const level = clean(body.level, 40);
  const interest = clean(body.interest, 60);

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });

  await add({
    name,
    email,
    message,
    position: positions.includes(position) ? position : "",
    level: levels.includes(level) ? level : "",
    interest: interests.includes(interest) ? interest : "General enquiry",
  });

  return NextResponse.json({ ok: true });
}
