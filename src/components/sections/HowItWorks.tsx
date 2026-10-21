import { StepCard } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <p className="text-eyebrow">{howItWorks.eyebrow}</p>
          <h2 className="text-display">{howItWorks.title}</h2>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {howItWorks.steps.map((s, i) => (
            <li key={s.title}>
              <StepCard
                index={String(i + 1).padStart(2, "0")}
                title={s.title}
                className="h-full min-h-[240px] lg:h-[280px]"
              >
                {s.body}
              </StepCard>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
