import type { Metadata } from "next";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { pillars, processSteps } from "@/lib/pages";

export const metadata: Metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blueprint"
        title="How It Works"
        subtitle="A clear, structured process from first submission to final Blueprint every step built around your game."
        image="/images/hero-how-it-works.png"
        imagePosition="50% 40%"
      />

      <Section tone="ink-2">
        <Container>
          <SectionTitle>The Blueprint Process</SectionTitle>
          <ol className="grid gap-4 pt-14 sm:grid-cols-2 sm:gap-6">
            {processSteps.map((s, i) => (
              <li
                key={s.title}
                className="flex min-h-[200px] flex-col justify-between rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="text-[30px] font-medium leading-[30px] tracking-[-0.087em] text-accent-decor">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium leading-6">{s.title}</h3>
                  <p className="pt-2 text-sm leading-5 text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="grid items-center gap-10 md:grid-cols-[560fr_480fr] md:gap-20">
          <div>
            <SectionTitle>What We Look For</SectionTitle>
            <p className="max-w-[560px] pt-6 text-base leading-[26px] text-muted">
              Every Blueprint analysis is structured around six core pillars of
              player development — the same criteria used by professional scouts
              and coaching staff at the highest levels of the game.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-3 gap-y-[11px] md:max-w-[480px]">
            {pillars.map((p) => (
              <li
                key={p}
                className="rounded-full border border-accent/30 bg-accent/15 px-4 py-2.5 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-accent"
              >
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Faq />
    </>
  );
}
