import type { Metadata } from "next";
import { CalendarDays, MapPin, PoundSterling, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { campAudience, campDays, campDetails } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Blueprint Development Camps" };

const detailIcons = {
  calendar: { Icon: CalendarDays, className: "text-white" },
  pin: { Icon: MapPin, className: "text-accent-decor" },
  team: { Icon: Users, className: "text-accent-decor" },
  pound: { Icon: PoundSterling, className: "text-accent-decor" },
} as const;

export default function CampsPage() {
  return (
    <>
      <PageHero
        eyebrow="Camps & Events"
        title="Blueprint Development Camps"
        subtitle="Three days of intensive football development — individual analysis, position-specific coaching, and professional standards throughout."
      />

      <Section tone="ink-2">
        <Container className="grid items-center gap-12 md:grid-cols-[544fr_496fr] md:gap-20">
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-display">What is a Blueprint Camp?</h2>
            <p className="text-base leading-[27.2px]">
              A Blueprint Development Camp is a three-day intensive experience
              designed to give every player a genuine development breakthrough.
              With a maximum of 24 players, we keep numbers small intentionally
              — individual assessment is built into every session. Our
              professional coaching staff run position-specific work, tactical
              sessions, and deliver a personal Blueprint feedback report to
              every attendee.
            </p>
            <Button href={routes.enquiry}>Reserve Your Place</Button>
          </div>
          <Media
            src="/images/camp-intro.png"
            fallback="/images/post-pathway.png"
            alt="Players in red and yellow kits competing for the ball during a camp match"
            className="h-[420px] rounded-3xl shadow-[4px_10px_10.77px_rgb(0_0_0/0.03)] md:h-[500px]"
          />
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-12">
          <h2 className="text-display">Camp Structure — 3 Days</h2>
          <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
            {campDays.map((d) => (
              <li
                key={d.day}
                className="flex min-h-[256px] flex-col justify-between gap-6 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="font-mono text-[30px] leading-[45px] tracking-[-0.087em] text-accent-decor">
                  {d.day}
                </span>
                <div>
                  <h3 className="text-[20px] font-medium leading-[30px]">{d.title}</h3>
                  <p className="pt-4 text-[15px] leading-[25.5px] text-muted">{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="flex flex-col gap-12">
          <h2 className="text-display">Who is it For?</h2>
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {campAudience.map((a, i) => (
              <li
                key={a.title}
                className="flex min-h-[224px] flex-col justify-between gap-5 rounded-3xl border border-line bg-surface px-4 py-5"
              >
                <span className="font-mono text-[30px] leading-[45px] tracking-[-0.087em] text-accent-decor">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium leading-[27px]">{a.title}</h3>
                  <p className="pt-3 text-sm leading-[23.8px] text-muted">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-12">
          <h2 className="text-display">Camp Details</h2>
          <dl className="grid gap-4 md:grid-cols-2">
            {campDetails.map((d) => {
              const { Icon, className } = detailIcons[d.icon];
              return (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-3xl border border-line bg-surface px-4 py-5"
                >
                  <Icon size={28} strokeWidth={1.5} aria-hidden className={className} />
                  <div>
                    <dt className="text-mono-eyebrow">{d.label}</dt>
                    <dd className="pt-2 text-[18px] font-medium leading-[27px]">{d.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Container>
      </Section>
    </>
  );
}
