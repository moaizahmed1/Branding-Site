"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminConfigured,
  createSession,
  destroySession,
  passwordMatches,
  requireAdmin,
} from "@/lib/admin-auth";
import { remove, STATUSES, update, type Status } from "@/lib/submissions";

/** Only ever redirect back into /admin (guards against open redirects). */
function safeReturn(value: FormDataEntryValue | null) {
  const v = typeof value === "string" ? value : "";
  return v.startsWith("/admin") && !v.startsWith("//") ? v : "/admin";
}

export async function login(formData: FormData) {
  if (!adminConfigured()) redirect("/admin/login?error=config");
  const password = String(formData.get("password") ?? "");
  if (!passwordMatches(password)) {
    // Slow down guessing.
    await new Promise((r) => setTimeout(r, 800));
    redirect("/admin/login?error=1");
  }
  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}

export async function setStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as Status;
  if (id && STATUSES.includes(status)) await update(id, { status });
  revalidatePath("/admin");
  redirect(safeReturn(formData.get("returnTo")));
}

export async function saveNotes(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const notes = String(formData.get("notes") ?? "").slice(0, 4000);
  if (id) await update(id, { notes });
  revalidatePath("/admin");
  redirect(safeReturn(formData.get("returnTo")));
}

export async function deleteSubmission(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (id) await remove(id);
  revalidatePath("/admin");
  // Drop the ?id= of the deleted item from the return path.
  const back = new URL(safeReturn(formData.get("returnTo")), "http://x");
  back.searchParams.delete("id");
  redirect(back.pathname + (back.search || ""));
}
