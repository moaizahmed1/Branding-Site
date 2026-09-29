"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/layout/Wordmark";
import { footerColumns, navLinks, routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

/** Floating glass navigation pill that sits over each page hero. */
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-4 z-50 px-4 md:top-10 md:px-5">
      <div className="mx-auto max-w-[1130px]">
        <div className="flex items-center justify-between gap-4 rounded-[30px] bg-black/20 py-2 pl-2 pr-4 backdrop-blur-[8px] md:pr-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full text-white transition hover:bg-white/10"
            >
              {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            </button>
            <Link href={routes.home} aria-label="Blueprint XI — home">
              <Wordmark className="text-base" />
            </Link>
          </div>

          <div className="flex items-center gap-8 xl:gap-[66px]">
            <nav
              aria-label="Primary"
              className="hidden items-center gap-9 lg:flex"
            >
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-xs text-cream/70 transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <Link
              href={routes.getBlueprint}
              className="whitespace-nowrap rounded-md bg-accent px-3 py-2.5 font-mono sm:px-4 text-[12px] uppercase tracking-[0.08em] text-[#0d0d0f] transition hover:brightness-110 md:px-5 md:text-[14px]"
            >
              <span className="sm:hidden">Get Blueprint</span>
              <span className="hidden sm:inline">Get Your Blueprint</span>
            </Link>
          </div>
        </div>

        <div
          id="site-menu"
          hidden={!open}
          className={cn(
            "mt-2 rounded-3xl border border-white/10 bg-ink-2/95 p-6 backdrop-blur-xl",
          )}
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs text-faint">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-cream/85 transition-colors hover:text-accent"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
