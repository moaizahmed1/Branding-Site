import { Section, Container } from "@/components/ui/Container";

export function Quote() {
  return (
    <Section>
      <Container>
        <figure className="mx-auto flex max-w-[888px] flex-col gap-6">
          <blockquote className="font-inter text-[clamp(1.5rem,4.4vw,2.5rem)] font-medium leading-[1.25] tracking-[0.004em]">
            <span aria-hidden className="mr-2 align-top text-[0.9em]">
              “
            </span>
            Every player has potential. The difference is understanding what
            comes next
            <span aria-hidden className="ml-2 align-top text-[0.9em]">
              ”
            </span>
          </blockquote>

          <figcaption className="flex items-center gap-4">
            <span className="size-16 shrink-0 rounded-full bg-muted/90" aria-hidden />
            <span className="flex flex-col">
              <span className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                Ben Dickson
              </span>
              <span className="text-base leading-[25.6px] tracking-[-0.01em] text-muted">
                Postnatal Reboot - November 2025
              </span>
            </span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
