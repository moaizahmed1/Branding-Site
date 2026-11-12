import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { packages } from "@/lib/content";

export function Packages() {
  return (
    <Section tone="ink-2" id="packages">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-[560px] flex-col items-center gap-2 text-center">
          <p className="text-eyebrow">{packages.eyebrow}</p>
          <h2 className="text-display">{packages.title}</h2>
        </div>

        <div className="grid w-full items-stretch gap-6 lg:grid-cols-3">
          {packages.plans.map((p, i) => {
            const muted = p.featured ? "text-on-accent/70" : "text-muted";
            return (
              <article
                key={p.name}
                className={cn(
                  "flex flex-col justify-between gap-10 rounded-3xl p-6 md:p-8",
                  p.featured
                    ? "bg-accent text-on-accent shadow-[4px_10px_5px_rgb(0_0_0/0.03)]"
                    : "border border-line bg-surface",
                )}
              >
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <span className={cn("text-step", p.featured && "!text-on-accent/60")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[28px] font-medium leading-9 tracking-[-0.03em]">
                        {p.name}
                      </h3>
                      <p className="flex flex-col">
                        <span className="text-[40px] font-medium leading-[1.1] tracking-[-0.04em]">
                          {p.price}
                        </span>
                        <span className={cn("pt-1 text-sm", muted)}>{p.priceNote}</span>
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-medium leading-6 tracking-[-0.02em]">
                        {p.tagline}
                      </p>
                      <p className={cn("text-[15px] leading-6", muted)}>{p.intro}</p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col gap-4 border-t pt-6",
                      p.featured ? "border-on-accent/20" : "border-line",
                    )}
                  >
                    <p
                      className={cn(
                        "font-mono text-[11px] uppercase leading-4 tracking-[0.1em]",
                        p.featured ? "text-on-accent/60" : "text-accent",
                      )}
                    >
                      {packages.includedLabel}
                    </p>
                    <ul className="flex flex-col gap-4">
                      {p.features.map((f) => (
                        <li key={f.title} className="flex items-start gap-2.5 text-[15px] leading-6">
                          <Check
                            size={16}
                            aria-hidden
                            className={cn(
                              "mt-1 shrink-0",
                              p.featured ? "text-on-accent" : "text-accent",
                            )}
                          />
                          <span>
                            <strong className="font-medium">{f.title}</strong>
                            <span className={cn("block", muted)}>{f.body}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button
                  href={`/?interest=${encodeURIComponent(p.name)}#get-started`}
                  full
                  variant={p.featured ? "dark" : "accent"}
                  className={cn("py-[15px]", p.featured && "!bg-[#070707]")}
                >
                  {p.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
