import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import { roster } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Our Players" };

export default function OurPlayersPage() {
  return (
    <>
      <PageHero
        eyebrow="Representation"
        title="Our Players"
        subtitle="A select group of players we believe in — each on their own journey, all with a clear direction."
        image="/images/hero-players.png"
        imagePosition="50% 30%"
      />

      <Section tone="ink-2">
        <Container className="flex flex-col items-center gap-10 !px-5 lg:!px-0">
          <div className="max-w-[760px] text-center">
            <h2 className="text-display">Our Roster</h2>
            <p className="pt-3 text-base leading-[27.2px] text-muted">
              We represent a small, carefully selected group of players. Each
              player receives focused attention — we do not spread ourselves
              thin.
            </p>
          </div>

          <ul className="grid w-full auto-rows-[217px] grid-cols-2 gap-4 lg:grid-cols-4">
            {roster.map((p) => (
              <li
                key={p.name}
                className={cn("flex flex-col", p.tall && "row-span-2")}
              >
                <Media
                  src={p.image}
                  alt={`${p.name}, ${p.role}`}
                  position={p.position}
                  className="min-h-0 flex-1 rounded-2xl"
                />
                <div className="flex h-[41px] shrink-0 items-center justify-between gap-2">
                  <p className="text-base font-medium leading-[27px]">{p.name}</p>
                  <span className="rounded-full border border-accent px-2.5 py-1 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em]">
                    {p.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-display">Interested in Representation?</h2>
          <p className="max-w-[750px] text-base leading-[27.2px] text-muted">
            We accept enquiries from players who meet our criteria. Every
            application is reviewed personally. We reply within 5 working days.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={routes.enquiry}>Submit an Enquiry</Button>
            <Button
              href={routes.approach}
              variant="ghost"
              className="!border-white/20 !bg-transparent !text-white"
            >
              Learn About Our Approach
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
