import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReportCard } from "@/components/blueprint/ReportCard";
import { Button } from "@/components/ui/Button";
import { StepCard } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { whatIs } from "@/lib/content";
import { routes } from "@/lib/routes";

export function WhatIsBlueprint() {
  return (
    <Section id="what-is-a-blueprint">
      <Container className="flex flex-col gap-24">
        {/* Intro + the three pillars */}
        <div className="flex flex-col items-center gap-12">
          <div className="flex max-w-[740px] flex-col items-center gap-4 text-center">
            <p className="text-eyebrow">{whatIs.eyebrow}</p>
            <h2 className="text-display text-balance">{whatIs.title}</h2>
            <div className="flex max-w-[640px] flex-col gap-4 text-base leading-[25.6px] tracking-[-0.01em] opacity-70">
              {whatIs.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <ul className="grid w-full gap-4 md:grid-cols-3 md:gap-6">
            {whatIs.pillars.map((p, i) => (
              <li key={p.title}>
                <StepCard
                  index={String(i + 1).padStart(2, "0")}
                  title={p.title}
                  className="h-full min-h-[220px] md:h-[280px]"
                >
                  {p.body}
                </StepCard>
              </li>
            ))}
          </ul>
        </div>

        {/* Example Blueprint preview */}
        <div className="grid items-center gap-12 border-t border-line pt-24 md:grid-cols-[480px_1fr] md:gap-20">
          <div className="flex flex-col items-start gap-6">
            <p className="text-mono-eyebrow">{whatIs.example.eyebrow}</p>
            <h3 className="text-display text-balance">{whatIs.example.title}</h3>
            <Button href={routes.sampleBlueprint} font="mono">
              {whatIs.example.cta}
              <ArrowRight size={16} aria-hidden className="ml-3" />
            </Button>
          </div>

          <Link
            href={routes.sampleBlueprint}
            aria-label="Open the full sample Blueprint"
            className="group block rounded-3xl transition duration-300 hover:-translate-y-1"
          >
            <ReportCard className="transition-colors group-hover:border-accent/40" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
