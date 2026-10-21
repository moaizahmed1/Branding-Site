import { Handshake, Tent, UserRound, Video, type LucideIcon } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { beyond } from "@/lib/content";

const icons: Record<(typeof beyond.services)[number]["icon"], LucideIcon> = {
  coaching: UserRound,
  video: Video,
  camps: Tent,
  mentoring: Handshake,
};

export function Beyond() {
  return (
    <Section id="services">
      <Container className="grid items-start gap-12 md:grid-cols-[480fr_600fr] md:gap-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex h-10 items-center rounded-full border border-line bg-ink-2 px-4 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">
            {beyond.tag}
          </span>
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{beyond.eyebrow}</p>
            <h2 className="text-display text-balance">{beyond.title}</h2>
          </div>
          <p className="max-w-[440px] text-base leading-[25.6px] tracking-[-0.01em]">
            {beyond.body}
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {beyond.services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                className="flex min-h-[240px] flex-col justify-between gap-8 rounded-3xl border border-line bg-surface p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-accent/30 bg-accent/15">
                  <Icon size={22} strokeWidth={1.5} aria-hidden className="text-accent" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-5 opacity-70">{s.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
