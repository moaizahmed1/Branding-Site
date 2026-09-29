import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { analysisSteps, CTA_LABEL } from "@/lib/content";

export function Analysis() {
  return (
    <Section tone="ink-2" id="analysis">
      <Container className="grid items-center gap-12 md:grid-cols-[544fr_540fr] md:gap-8">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p className="text-eyebrow">Example Blueprints</p>
              <h2 className="text-display">See the analysis</h2>
            </div>
            <div className="max-w-[476px] space-y-[25.6px] text-base leading-[25.6px] tracking-[-0.01em]">
              <p>
                A Blueprint offers an in-depth look at your performance
                metrics. It highlights areas where you excel and those that need
                enhancement.
              </p>
              <p>
                By analyzing this information, you can pinpoint specific actions
                to take for improvement. This structured approach helps you
                focus on what truly matters for your growth. Ultimately, it
                serves as a roadmap to elevate your performance.
              </p>
            </div>
          </div>
          <Button href="#contact" font="mono">
            {CTA_LABEL}
          </Button>
        </div>

        <ol
          tabIndex={0}
          aria-label="Example Blueprint steps"
          className="scrollbar-thin-dark flex max-h-[477px] flex-col gap-6 overflow-y-auto pr-1 [mask-image:linear-gradient(to_bottom,#000_82%,transparent)] focus-visible:rounded-3xl"
        >
          {analysisSteps.map((s, i) => (
            <li key={s.title}>
              <Card className="flex min-h-[170px] flex-col justify-between gap-6">
                <span className="text-step">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="text-base leading-[1.4] tracking-[-0.01em] text-muted">
                    {s.body}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
