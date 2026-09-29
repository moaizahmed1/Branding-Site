import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { beliefs, milestones, stats } from "@/lib/pages";

export const metadata: Metadata = { title: "Our Story" };

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Story"
        subtitle="Founded on a belief that every player deserves the same level of professional insight — regardless of who they are or where they play."
      />

      <Section tone="ink-2">
        <Container className="grid items-start gap-12 md:grid-cols-[544fr_496fr] md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-mono-eyebrow">The beginning</p>
            <h2 className="text-display">Where It Started</h2>
            <p className="text-base leading-[26px] text-muted">
              BLUEPRINT XI was founded by former players and analysts who had
              seen firsthand how much the gap between elite and grassroots
              development affected a player’s trajectory. At the top level,
              players receive regular, structured feedback — video analysis,
              positional coaching, career planning. Everywhere else, that
              guidance is largely absent.
            </p>
            <p className="text-base leading-[26px] text-muted">
              We believed that was wrong. No player should be left without
              professional guidance simply because they play at a lower level or
              haven’t yet been spotted by a club. The Blueprint was built to
              close that gap — to give every player access to the kind of
              honest, structured, data-backed development insight that
              previously only existed inside professional environments.
            </p>
            <p className="text-base leading-[26px] text-muted">
              From a single report delivered to a single player in 2022, the
              work has grown — but the founding principle has never changed.
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-surface px-4 py-5">
            <p className="pb-8 text-mono-eyebrow">Milestones</p>
            <ol>
              {milestones.map((m) => (
                <li
                  key={m.year}
                  className="flex gap-6 border-b border-white/[0.08] py-6"
                >
                  <span className="pt-0.5 font-mono text-[13px] leading-[19.5px] tracking-[0.085em] text-accent">
                    {m.year}
                  </span>
                  <p className="text-[15px] leading-[22px]">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section>
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

      <Section tone="ink-2">
        <Container>
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex min-h-[129px] flex-col justify-between rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <dd className="text-[48px] font-medium leading-[52.8px] tracking-[-0.03em]">
                  {s.value}
                </dd>
                <dt className="text-mono-eyebrow">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
