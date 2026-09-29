import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { reportExcerpts, reportScores } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Example Blueprint" };

const chip =
  "inline-flex rounded-lg border border-accent/30 bg-accent/15 px-3 py-1.5 font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent";

export default function ExampleBlueprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blueprint"
        title="Example Blueprint"
        subtitle="See exactly what you will receive — a real, professional-standard player analysis report."
      />

      <Section tone="ink-2">
        <Container className="grid items-center gap-12 md:grid-cols-[480px_1fr] md:gap-20">
          <div>
            <SectionTitle>What Your Blueprint Contains</SectionTitle>
            <p className="pt-6 text-base leading-[26px] text-muted">
              Every Blueprint is a professionally formatted, fully personalised
              player analysis document. Structured around six pillars of
              development, it reads like something produced for a professional
              club — because our methodology is built on exactly that standard.
            </p>
            <p className="pt-4 text-base leading-[26px] text-muted">
              Typically 12–20 pages, your Blueprint includes scored analysis,
              written assessments, video-referenced observations, and a clear
              development plan to take forward.
            </p>
          </div>

          <div
            className="flex flex-col gap-6 rounded-3xl border border-line bg-surface px-4 py-5 md:justify-between"
            role="group"
            aria-label="Sample player analysis report"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <p className="text-base font-medium tracking-[-0.02em]">BLUEPRINT XI</p>
              <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
                Player Analysis Report
              </p>
            </div>

            <div className="border-b border-white/[0.08] pb-5">
              <p className="text-[28px] font-medium leading-8 tracking-[-0.03em]">
                James Richardson
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {["Midfielder", "Age 19", "Academy Level"].map((t) => (
                  <span key={t} className={chip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <dl className="flex flex-col gap-3.5 border-b border-white/[0.08] pb-6">
              {reportScores.map((s) => (
                <div key={s.label}>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em]">
                    <dt className="text-muted">{s.label}</dt>
                    <dd className="text-accent">{s.value}%</dd>
                  </div>
                  <div
                    className="mt-1.5 h-1.5 rounded-full bg-white/5"
                    role="progressbar"
                    aria-valuenow={s.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${s.label} score`}
                  >
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-x-6 gap-y-4">
              <div>
                <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
                  Top Strength
                </p>
                <p className="pt-1 text-sm">Tactical awareness</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
                  Priority Development Area
                </p>
                <p className="pt-1 text-sm">Attacking third movement</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>From the Report</SectionTitle>
          <ul className="grid gap-4 pt-14 md:grid-cols-3 md:gap-6">
            {reportExcerpts.map((e) => (
              <li
                key={e.title}
                className="flex min-h-[287px] flex-col gap-12 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className={chip + " self-start"}>{e.tag}</span>
                <div>
                  <h3 className="text-[18px] font-medium leading-6">{e.title}</h3>
                  <p className="pt-[19px] text-sm leading-[22px] text-muted">
                    {e.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="flex flex-col items-center text-center">
          <SectionTitle align="center">Ready for Your Own Blueprint?</SectionTitle>
          <p className="max-w-[560px] pt-6 text-[18px] leading-7 text-muted">
            Submit your footage and profile today and receive your personalised
            analysis report within 7–10 working days.
          </p>
          <div className="flex flex-col gap-4 pt-10 sm:flex-row">
            <Button href={routes.getBlueprint} font="mono">
              Get Your Blueprint
            </Button>
            <Button href={routes.packages} font="mono" variant="ghost" className="!text-[11px]">
              View Packages
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
