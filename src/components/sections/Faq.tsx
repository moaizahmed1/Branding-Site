"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { CTA_LABEL, faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <Section tone="ink-2" id="faq">
      <Container className="grid gap-12 md:grid-cols-[400px_1fr] md:gap-20">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-eyebrow">FAQ</p>
            <h2 className="text-display">Frequently Asked Questions</h2>
          </div>
          <p className="text-base leading-[26px] text-muted">
            If you&apos;re new here or wondering what to expect, these answers
            will guide you through how coaching works, what&apos;s included, and
            how we tailor every plan to your needs.
          </p>
          <Button href="#contact" font="mono">
            {CTA_LABEL}
          </Button>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            const buttonId = `${baseId}-button-${i}`;
            return (
              <div
                key={f.q}
                className={cn(
                  "border-line",
                  i < faqs.length - 1 && "border-b",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left text-[18px] font-medium leading-6"
                  >
                    {f.q}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-accent transition group-hover:border-accent/60">
                      <Plus
                        size={16}
                        aria-hidden
                        className={cn(
                          "transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[560px] pb-6 text-base leading-[26px] text-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
