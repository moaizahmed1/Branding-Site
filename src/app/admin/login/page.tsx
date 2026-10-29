import { redirect } from "next/navigation";
import { login } from "@/app/admin/actions";
import { Wordmark } from "@/components/layout/Wordmark";
import { Button } from "@/components/ui/Button";
import { adminConfigured, isAdmin } from "@/lib/admin-auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdmin()) redirect("/admin");
  const { error } = await searchParams;
  const configured = adminConfigured();

  return (
    <main className="grid min-h-screen place-items-center px-5 py-16">
      <div className="w-full max-w-[400px] rounded-3xl border border-line bg-surface p-8">
        <Wordmark className="text-[20px]" />
        <h1 className="pt-8 text-[28px] font-medium leading-9 tracking-[-0.03em]">
          Admin sign in
        </h1>
        <p className="pt-2 text-sm leading-5 text-muted">
          Enter the admin password to view submitted enquiries.
        </p>

        {!configured ? (
          <p
            role="alert"
            className="mt-6 rounded-xl border border-[#f08a7e]/30 bg-[#f08a7e]/10 p-4 text-sm leading-5 text-[#f4b0a7]"
          >
            The admin area is locked. Set <code>ADMIN_PASSWORD</code> and{" "}
            <code>ADMIN_SESSION_SECRET</code> in the server environment, then
            restart.
          </p>
        ) : (
          <form action={login} className="flex flex-col gap-6 pt-8">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-mono-eyebrow"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoFocus
                autoComplete="current-password"
                className="w-full border-0 border-b-2 border-line bg-transparent pb-3 text-base text-white transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            {error && (
              <p role="alert" className="text-sm text-[#f08a7e]">
                {error === "config"
                  ? "The admin area isn't configured."
                  : "Incorrect password."}
              </p>
            )}
            <Button type="submit" full className="py-[15px]">
              Sign in
            </Button>
          </form>
        )}
      </div>
    </main>
  );
}
