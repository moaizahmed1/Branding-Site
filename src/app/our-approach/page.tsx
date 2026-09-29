import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RepresentationCards } from "@/components/sections/Representation";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { principles, representationSteps } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Our Approach" };

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Representation"
        title="Our Approach"
        subtitle="Football careers are built through the right decisions, guidance and trusted relationships."
      />

      <Section tone="ink-2">
        <Container className="grid items-center gap-12 md:grid-cols-[544fr_548fr] md:gap-20">
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-display">
              More than <br className="hidden sm:block" />
              Representation.
            </h2>
            <p className="text-base leading-[27.2px]">
              BLUEPRINT XI supports a select group of athletes through every
              dimension of their career — from daily development to long-term
              career management. We build lasting relationships with players,
              clubs, and coaches to ensure the right doors open at the right
              time. Our approach is built on trust, professional standards, and
              a genuine understanding of what it takes to succeed in modern
              football.
            </p>
            <Button href={routes.enquiry}>Start a Conversation</Button>
          </div>
          <RepresentationCards />
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-12">
          <h2 className="text-display">Our Principles</h2>
          <ol className="flex flex-col gap-4">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="flex min-h-[134px] gap-4 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="w-[60px] shrink-0 font-mono text-[30px] leading-[45px] tracking-[-0.087em] text-accent-decor">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[20px] font-medium leading-[30px]">{p.title}</h3>
                  <p className="pt-3 text-base leading-[27.2px] text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="grid items-center gap-12 md:grid-cols-[544fr_542fr] md:gap-8">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-display">The Representation Process</h2>
              <div className="max-w-[476px] space-y-[25.6px] text-base leading-[25.6px] tracking-[-0.01em]">
                <p>
                  A Blueprint offers an in-depth look at your performance
                  metrics. It highlights areas where you excel and those that
                  need enhancement.
                </p>
                <p>
                  By analyzing this information, you can pinpoint specific
                  actions to take for improvement. This structured approach
                  helps you focus on what truly matters for your growth.
                  Ultimately, it serves as a roadmap to elevate your
                  performance.
                </p>
              </div>
            </div>
            <Button href={routes.getBlueprint} font="mono">
              Get Your Blueprint
            </Button>
          </div>

          <ol className="relative flex flex-col gap-6 border-l border-line py-6 pl-14">
            {representationSteps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-3xl border border-line bg-surface p-6 before:absolute before:-left-14 before:top-[52px] before:h-px before:w-14 before:bg-line"
              >
                <span
                  aria-hidden
                  className="absolute -left-[3px] top-[50px] size-1 rounded-full bg-muted/50"
                />
                <span className="text-step block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="pt-3.5 text-[20px] font-medium leading-6 tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="pt-2 text-base leading-[1.4] tracking-[-0.01em] text-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  );
}
