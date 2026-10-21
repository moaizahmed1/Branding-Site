import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { packages } from "@/lib/content";
import { routes } from "@/lib/routes";

export function Packages() {
  return (
    <Section tone="ink-2" id="packages">
      <Container className="flex flex-col items-center gap-12">
        <div className="flex max-w-[560px] flex-col items-center gap-2 text-center">
          <p className="text-eyebrow">{packages.eyebrow}</p>
          <h2 className="text-display">{packages.title}</h2>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {packages.plans.map((p, i) => (
            <article
              key={p.name}
              className={cn(
                "flex min-h-[460px] flex-col justify-between gap-8 rounded-3xl",
                p.featured
                  ? "bg-accent p-6 text-on-accent shadow-[4px_10px_5px_rgb(0_0_0/0.03)]"
                  : "border border-line bg-surface px-4 py-5 md:px-6",
              )}
            >
              <div className="flex flex-col gap-6">
                <span
                  className={cn(
                    "text-step",
                    p.featured && "!text-on-accent/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[28px] font-medium leading-9 tracking-[-0.03em]">
                    {p.name}
                  </h3>
                  <p
                    className={cn(
                      "pt-1 text-base leading-[25.6px]",
                      p.featured ? "text-on-accent/70" : "text-muted",
                    )}
                  >
                    {p.tagline}
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] leading-6">
                      <Check
                        size={16}
                        aria-hidden
                        className={cn(
                          "mt-1 shrink-0",
                          p.featured ? "text-on-accent" : "text-accent",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href={routes.getStarted}
                full
                variant={p.featured ? "dark" : "accent"}
                className={cn("py-[15px]", p.featured && "!bg-[#070707]")}
                aria-label={`${packages.cta}: ${p.name}`}
              >
                {packages.cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
