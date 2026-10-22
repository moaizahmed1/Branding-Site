import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { founder, images } from "@/lib/content";

export function Founder() {
  return (
    <Section tone="ink-2" id="founder">
      <Container className="grid items-center gap-12 md:grid-cols-[480fr_600fr] md:gap-20">
        <Media
          src={images.founder}
          alt={`${founder.name}, founder of Blueprint XI`}
          position="50% 20%"
          className="aspect-[4/5] w-full rounded-3xl bg-line md:aspect-auto md:h-[560px]"
        />

        <figure className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{founder.eyebrow}</p>
            <h2 className="text-display">{founder.name}</h2>
            <p className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-accent">
              {founder.role}
            </p>
          </div>

          <blockquote className="border-l-2 border-accent/60 pl-6 font-inter text-[clamp(1.375rem,1rem+1.4vw,2rem)] font-medium leading-[1.3] tracking-[0.004em]">
            <span aria-hidden>“</span>
            {founder.quote}
            <span aria-hidden>”</span>
          </blockquote>

          <figcaption className="text-base leading-[25.6px] text-muted">
            {founder.name}, Founder of Blueprint XI
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
