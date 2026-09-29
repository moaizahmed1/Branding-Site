import type { Metadata } from "next";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { eventList } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Upcoming Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Camps & Events"
        title="Upcoming Events"
        subtitle="From showcase days to specialist sessions — find the right event for your development."
      />

      <Section tone="ink-2">
        <Container>
          <ul className="flex flex-col gap-4">
            {eventList.map((e) => (
              <li
                key={e.title}
                className="flex min-h-[127px] flex-col justify-between gap-5 rounded-3xl border border-line bg-surface px-4 py-5 md:flex-row md:items-center"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                  <p className="font-mono text-[13px] leading-[19.5px] tracking-[0.085em] text-accent md:w-[140px]">
                    {e.date}
                  </p>
                  <div>
                    <h2 className="text-[24px] font-medium leading-9">{e.title}</h2>
                    <p className="pt-1.5 text-sm leading-5 text-muted">{e.place}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <span className="rounded-full border border-white/15 px-3 py-[5px] font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">
                    {e.badge}
                  </span>
                  {e.action ? (
                    <Button href={routes.enquiry} className="!px-[22px] !py-3 !text-[15px]">
                      {e.action}
                    </Button>
                  ) : (
                    <span className="text-sm text-muted">{e.note}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-display max-w-[760px] text-balance">
              Get Notified About New Events
            </h2>
            <p className="max-w-[480px] text-base leading-[27.2px] text-muted">
              Be the first to hear about new camps, showcase days, and
              specialist sessions.
            </p>
          </div>
          <SubscribeForm variant="underline" cta="Notify Me" />
        </Container>
      </Section>
    </>
  );
}
