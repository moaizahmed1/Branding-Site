import { Button } from "@/components/ui/Button";
import { Card, StepCard } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { CTA_LABEL, images } from "@/lib/content";

export function Process() {
  return (
    <Section tone="ink-2" id="process">
      <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="text-eyebrow !text-white">Blueprint Process</p>
              <h2 className="text-display">Your path to better performance</h2>
            </div>
            <p className="max-w-[432px] text-[18px] leading-[28.8px] tracking-[-0.01em]">
              A personalised process designed around your ability, goals and
              playing style.
            </p>
          </div>
          <Button href="#contact" font="mono">
            {CTA_LABEL}
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[200px]">
          <StepCard
            index="01"
            title="Assess"
            className="sm:row-span-2"
            media={
              <Media
                src={images.processAssess}
                alt="A coach briefing players on a floodlit pitch at dusk"
                className="min-h-[160px] flex-1 rounded-2xl"
              />
            }
          >
            Understand your current level. Match analysis, technical review and
            tactical evaluation.
          </StepCard>

          <StepCard index="02" title="Understand">
            Flexible sessions from anywhere your programme, your schedule.
          </StepCard>

          <StepCard index="03" title="Develop">
            Tailored guidance to support your training and daily routine.
          </StepCard>

          <Card className="flex min-h-[416px] gap-6 overflow-hidden sm:col-span-2 sm:row-span-2">
            <div className="flex flex-1 basis-0 flex-col justify-between">
              <span className="text-step">04</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                  Progress
                </h3>
                <p className="text-sm leading-5 opacity-70">
                  Designed for teams or partners who want shared motivation and
                  accountability.
                </p>
              </div>
            </div>
            <Media
              src={images.processProgress}
              alt="A player pausing thoughtfully during a training session"
              position="60% 30%"
              className="flex-1 basis-0 rounded-2xl"
            />
          </Card>
        </div>
      </Container>
    </Section>
  );
}
