import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Single-admin password auth.
 *
 * Set in the environment:
 *   ADMIN_PASSWORD        the password you log in with
 *   ADMIN_SESSION_SECRET  a long random string used to sign the session cookie
 *
 * If either is missing the admin area stays locked (nobody can log in).
 */

export const COOKIE = "bp_admin";
const MAX_AGE = 60 * 60 * 8; // 8 hours

export function adminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

const sign = (value: string) =>
  createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "").update(value).digest("hex");

function safeEqual(a: string, b: string) {
  // Hash both so lengths match and comparison is constant-time.
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function passwordMatches(input: string) {
  if (!adminConfigured()) return false;
  return safeEqual(input, process.env.ADMIN_PASSWORD as string);
}

export async function createSession() {
  const expires = Date.now() + MAX_AGE * 1000;
  const value = `${expires}.${sign(String(expires))}`;
  (await cookies()).set(COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: MAX_AGE,
  });
}

export async function destroySession() {
  (await cookies()).delete({ name: COOKIE, path: "/admin" });
}

export async function isAdmin(): Promise<boolean> {
  if (!adminConfigured()) return false;
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return false;
  const [expires, sig] = raw.split(".");
  if (!expires || !sig) return false;
  if (!safeEqual(sig, sign(expires))) return false;
  return Number(expires) > Date.now();
}

/** Call at the top of every admin page, action and route. The proxy is only a convenience redirect. */
export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin/login");
}
