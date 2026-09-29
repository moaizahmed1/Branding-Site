import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { credentials, openRoles, teamMembers } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Our Team" };

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Our Team"
        subtitle="Analysts, coaches and former players — united by a belief in professional development for every player."
      />

      <Section tone="ink-2">
        <Container>
          <SectionTitle eyebrow="The people" align="center">
            The People Behind the Blueprint
          </SectionTitle>
          <ul className="grid gap-6 pt-14 md:grid-cols-2">
            {teamMembers.map((m) => (
              <li
                key={m.name}
                className="overflow-hidden rounded-3xl bg-line shadow-[4px_10px_10.77px_rgb(0_0_0/0.03)]"
              >
                <Media
                  src="/images/team-member.png"
                  fallback="/images/post-scouts.png"
                  alt={`Portrait of ${m.name}`}
                  className="h-[240px] bg-[#1e1e1e]"
                />
                <div className="flex min-h-[165px] flex-col items-start gap-3 rounded-b-3xl border border-line bg-surface px-4 py-5">
                  <h3 className="text-[20px] font-medium leading-[26px]">{m.name}</h3>
                  <span className="rounded-md border border-accent/25 bg-accent/[0.12] px-2.5 py-[5px] font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent">
                    {m.role}
                  </span>
                  <p className="text-sm leading-[22px] text-muted">{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle eyebrow="Credentials">Our Background in Football</SectionTitle>
          <ul className="grid gap-4 pt-14 md:grid-cols-3 md:gap-6">
            {credentials.map((c) => (
              <li
                key={c.title}
                className="flex min-h-[250px] flex-col gap-4 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="grid size-10 place-items-center rounded-[10px] border border-accent/30 bg-accent/15">
                  <Check size={20} aria-hidden className="text-accent" />
                </span>
                <h3 className="text-[20px] font-medium leading-[26px]">{c.title}</h3>
                <p className="text-sm leading-[22px] text-muted">{c.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="grid gap-12 md:grid-cols-[480px_1fr] md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-mono-eyebrow">Join the team</p>
            <h2 className="text-display">Work With Us</h2>
            <p className="text-base leading-[26px] text-muted">
              We are always looking for experienced analysts, coaches and scouts
              who share our commitment to professional development at every
              level of the game. If you believe in what we are building, we
              would like to hear from you.
            </p>
            <p className="text-base leading-[26px] text-muted">
              Open positions are listed here. Speculative applications are also
              welcome — send your CV and a short note to our team.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {openRoles.map((r) => (
              <li
                key={r.title}
                className="flex min-h-[140px] flex-col justify-center gap-4 rounded-3xl border border-line bg-surface px-4 py-5 sm:flex-row sm:items-start"
              >
                <div className="flex-1">
                  <h3 className="text-[18px] font-medium leading-6">{r.title}</h3>
                  <p className="pt-2 text-sm leading-[22px] text-muted">{r.body}</p>
                </div>
                <Button href={routes.contact} className="!px-5 !py-2.5 !text-sm">
                  Apply
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
