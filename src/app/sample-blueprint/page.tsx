import type { Metadata } from "next";
import { ReportCard } from "@/components/blueprint/ReportCard";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { images } from "@/lib/content";
import { reportSections } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Sample Blueprint",
  description:
    "See exactly what you will receive — a real, professional-standard player analysis report.",
};

export default function SampleBlueprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Example Blueprint"
        title="Sample Blueprint"
        subtitle="See exactly what you will receive — a real, professional-standard player analysis report."
        image={images.sampleHero}
      />

      <Section tone="ink-2">
        <Container className="grid items-center gap-12 md:grid-cols-[480px_1fr] md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-eyebrow">Your report</p>
            <h2 className="text-display">What Your Blueprint Contains</h2>
            <p className="text-base leading-[26px] text-muted">
              Every Blueprint is a personalised player assessment built from
              professional scouting and analysis. It shows what sets you apart,
              where to improve and how to progress — the same three questions
              every player asks.
            </p>
            <p className="text-base leading-[26px] text-muted">
              This sample belongs to a fictional player and shows the structure,
              scoring and level of detail you will receive.
            </p>
          </div>
          <ReportCard />
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <p className="text-eyebrow">From the report</p>
            <h2 className="text-display">Strengths, Development, Next Steps.</h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {reportSections.map((s) => (
              <li
                key={s.title}
                className="flex min-h-[287px] flex-col gap-12 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="inline-flex self-start rounded-lg border border-accent/30 bg-accent/15 px-3 py-1.5 font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent">
                  {s.tag}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium leading-6">{s.title}</h3>
                  <p className="pt-[19px] text-sm leading-[22px] text-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-display text-balance">
            Ready for Your Own Blueprint?
          </h2>
          <p className="max-w-[560px] text-[18px] leading-7 text-muted">
            Choose your package and send us your match footage — we’ll take it
            from there.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={routes.packages} font="mono">
              Get Your Blueprint
            </Button>
            <Button href={routes.home} font="mono" variant="ghost">
              Back to Home
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
