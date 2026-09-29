import { Container, Section } from "@/components/ui/Container";
import { StepCard } from "@/components/ui/Card";
import { why } from "@/lib/content";

export function Why() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-[740px] flex-col items-center gap-4 text-center">
          <p className="text-eyebrow">Why BlueprintXI</p>
          <h2 className="text-display text-balance">
            Development built around the individual
          </h2>
          <p className="max-w-[640px] text-base leading-[25.6px] tracking-[-0.01em] opacity-70">
            We combine professional scouting principles, detailed match
            analysis, and personalised development planning to create a pathway
            built around your strengths, ambitions, and goals.
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-3 md:gap-6">
          {why.map((item, i) => (
            <StepCard
              key={item.title}
              index={String(i + 1).padStart(2, "0")}
              title={item.title}
              className="min-h-[220px] md:h-[280px]"
            >
              <span className="block max-w-[220px]">{item.body}</span>
            </StepCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
