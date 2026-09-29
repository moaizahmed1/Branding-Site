import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { beliefs, inPractice } from "@/lib/pages";

export const metadata: Metadata = { title: "Our Philosophy" };

export default function OurPhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Philosophy"
        subtitle="Three principles that govern every Blueprint, every camp, every conversation."
      />

      <Section tone="ink-2">
        <Container>
          <SectionTitle eyebrow="Principles">What We Believe</SectionTitle>
          <ol className="pt-14">
            {beliefs.map((b, i) => (
              <li
                key={b.title}
                className="flex gap-6 border-b border-white/[0.08] py-12 md:gap-16"
              >
                <span className="w-14 shrink-0 text-[44px] font-medium leading-[44px] tracking-[-0.05em] text-accent-decor md:w-20 md:text-[80px] md:leading-[80px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-4 pt-2">
                  <h3 className="text-[22px] font-medium leading-8 tracking-[-0.02em] md:text-[28px] md:leading-9">
                    {b.title}
                  </h3>
                  <p className="max-w-[600px] text-base leading-[26px] text-muted">{b.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-[400px_1fr] md:gap-20">
            <div className="flex flex-col gap-4">
              <p className="text-mono-eyebrow">Application</p>
              <h2 className="text-display">In Practice</h2>
            </div>
            <p className="pt-4 text-base leading-[26px] text-muted">
              Philosophy only means something when it shows up in the work. Here
              is how our three principles translate into the way we actually
              conduct each Blueprint assessment.
            </p>
          </div>
          <dl className="pt-14">
            {inPractice.map((p) => (
              <div
                key={p.label}
                className="flex flex-col gap-2 border-b border-white/[0.08] py-8 md:flex-row md:gap-12"
              >
                <dt className="pt-[3px] font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-accent md:w-[140px] md:shrink-0">
                  {p.label}
                </dt>
                <dd className="text-base leading-[26px]">{p.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
