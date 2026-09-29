import { Button } from "@/components/ui/Button";
import { StepCard } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { CTA_LABEL } from "@/lib/content";

/** The 4-card masonry (01/03 left, 02/04 right) shared with /our-approach. */
export function RepresentationCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <StepCard
          index="01"
          title="Player Support"
          className="min-h-[300px] sm:h-[375px]"
        >
          Understand your current level. Match analysis, technical review and
          tactical evaluation.
        </StepCard>
        <StepCard
          index="03"
          title="Club Connections"
          className="min-h-[200px] sm:h-[200px]"
        >
          Tailored guidance to support your training and daily routine.
        </StepCard>
      </div>
      <div className="flex flex-col gap-4 md:gap-6">
        <StepCard
          index="02"
          title="Career Management"
          className="min-h-[200px] sm:h-[200px]"
        >
          Flexible sessions from anywhere — your programme, your schedule.
        </StepCard>
        <StepCard
          index="04"
          title="Contract Guidance"
          className="min-h-[300px] sm:h-[375px]"
        >
          Understand your current level. Match analysis, technical review and
          tactical evaluation.
        </StepCard>
      </div>
    </div>
  );
}

export function Representation() {
  return (
    <Section id="representation">
      <Container className="grid gap-12 md:grid-cols-[540fr_548fr] md:gap-10">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <p className="text-eyebrow">How it works</p>
              <h2 className="text-display">More than Representation.</h2>
            </div>
            <p className="max-w-[478px] text-base leading-[25.6px] tracking-[-0.01em]">
              Football careers are built through the right decisions, guidance
              and opportunities. BLUEPRINT XI supports selected athletes through
              career management, development and trusted relationships.
            </p>
          </div>
          <Button href="#contact" font="mono">
            {CTA_LABEL}
          </Button>
        </div>

        <RepresentationCards />
      </Container>
    </Section>
  );
}
