import Link from "next/link";
import { Wordmark } from "@/components/layout/Wordmark";
import { footerColumns } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="bg-ink-2 px-4 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-[1344px] rounded-3xl border border-line bg-surface px-6 py-10 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[447fr_745fr] lg:gap-14">
          <div className="flex flex-col">
            <Wordmark className="text-[24px] leading-8" />
            <p className="max-w-[320px] pt-5 text-sm leading-[22.75px] text-faint">
              Your game. Your blueprint. Personalised football development and
              player representation for ambitious players.
            </p>
            <div
              aria-hidden
              className="mt-8 h-px w-24 bg-gradient-to-r from-[#c5ab84] to-transparent"
            />
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-4"
          >
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="text-xs leading-[16.32px] text-faint">
                  {col.title}
                </h2>
                <ul className="flex flex-col gap-3 pt-5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm leading-5 text-faint transition-colors hover:text-cream"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs uppercase leading-4 tracking-[0.14em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Blueprint XI</p>
          <p>Assess · Understand · Develop · Progress</p>
        </div>
      </div>
    </footer>
  );
}
