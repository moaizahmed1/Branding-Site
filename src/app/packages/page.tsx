import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/cn";
import { compareRows, everyPackage, packagePlans } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Packages" };

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blueprint"
        title="Choose Your Package"
        subtitle="Three tiers of support — from your first analysis to a complete long-term development partnership."
      />

      <Section tone="ink-2">
        <Container className="grid gap-6 md:grid-cols-3">
          {packagePlans.map((p) => (
            <article
              key={p.name}
              className={cn(
                "flex min-h-[539px] flex-col justify-between gap-8 rounded-3xl",
                p.featured
                  ? "bg-accent p-6 text-on-accent shadow-[4px_10px_5px_rgb(0_0_0/0.03),1px_2px_1px_rgb(0_0_0/0.06)]"
                  : "border border-line bg-surface px-4 py-5",
              )}
            >
              <div>
                <div className="flex h-6 items-center justify-between">
                  <p
                    className={cn(
                      "font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em]",
                      p.featured ? "text-on-accent" : "text-muted",
                    )}
                  >
                    {p.name}
                  </p>
                  {p.featured && (
                    <span className="rounded-md bg-[#070707] px-2.5 py-1 font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                <p
                  className={cn(
                    "pt-2 text-[48px] font-medium leading-[52.8px] tracking-[-0.03em]",
                    !p.featured && "text-white",
                  )}
                >
                  {p.price}
                </p>
                <p
                  className={cn(
                    "pt-3 text-sm leading-[22px]",
                    p.featured ? "text-on-accent/70" : "text-muted",
                  )}
                >
                  {p.blurb}
                </p>
              </div>

              <ul className="flex flex-1 flex-col gap-3 pb-8 pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm leading-5">
                    <Check
                      size={16}
                      aria-hidden
                      className={p.featured ? "text-on-accent" : "text-accent"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href={routes.getBlueprint}
                full
                variant={p.featured ? "dark" : "accent"}
                className={p.featured ? "!bg-[#070707] py-[15px]" : "py-[15px]"}
              >
                {p.cta}
              </Button>
            </article>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>What’s Included in Every Package</SectionTitle>
          <ul className="grid gap-4 pt-14 md:grid-cols-3 md:gap-6">
            {everyPackage.map((c) => (
              <li
                key={c.title}
                className="flex min-h-[150px] flex-col justify-between gap-4 rounded-3xl border border-line bg-surface p-6"
              >
                <h3 className="text-[18px] font-medium leading-6">{c.title}</h3>
                <p className="text-sm leading-[22px] text-muted">{c.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container>
          <SectionTitle>Compare Packages</SectionTitle>
          <div className="mt-14 overflow-x-auto rounded-3xl border border-line bg-surface">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="px-8 py-5" scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  {["Entry", "Development", "Performance"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="px-4 py-5 text-center font-mono text-[11px] font-normal uppercase leading-[16.5px] tracking-[0.1em] text-muted"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr
                    key={r.label}
                    className={cn(
                      i < compareRows.length - 1 && "border-b border-white/5",
                    )}
                  >
                    <th
                      scope="row"
                      className="px-8 py-5 text-[15px] font-normal leading-[22.5px]"
                    >
                      {r.label}
                    </th>
                    {r.values.map((v, j) => (
                      <td key={j} className="px-4 py-5 text-center">
                        {v ? (
                          <Check
                            size={20}
                            aria-label="Included"
                            className="mx-auto text-accent"
                          />
                        ) : (
                          <X
                            size={20}
                            aria-label="Not included"
                            className="mx-auto text-muted"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </>
  );
}
