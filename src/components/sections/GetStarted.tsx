import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container, Section } from "@/components/ui/Container";
import { getStarted } from "@/lib/content";

export function GetStarted() {
  return (
    <Section tone="ink-2" id="get-started">
      <Container className="grid items-start gap-12 md:grid-cols-[480fr_560fr] md:gap-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex h-10 items-center rounded-full border border-line bg-ink px-4 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted">
            {getStarted.tag}
          </span>
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow">{getStarted.eyebrow}</p>
            <h2 className="text-display text-balance">{getStarted.title}</h2>
          </div>
          <p className="max-w-[440px] text-base leading-[25.6px] tracking-[-0.01em]">
            {getStarted.body}
          </p>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </Container>
    </Section>
  );
}
