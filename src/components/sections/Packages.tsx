import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { packages } from "@/lib/content";

export function Packages() {
  return (
    <Section id="packages">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex max-w-[560px] flex-col items-center gap-3 text-center">
          <div className="flex flex-col items-center">
            <p className="text-eyebrow">BluePrint Packages</p>
            <h2 className="text-display">Choose Your Blueprint</h2>
          </div>
          <p className="text-base leading-[25.6px] tracking-[-0.01em]">
            Find the right level of support for your football journey.
          </p>
        </div>

        <div className="grid w-full items-start gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={cn(
                "relative flex flex-col justify-between gap-8 rounded-3xl",
                p.featured
                  ? "min-h-[484px] bg-accent p-5 text-black"
                  : "min-h-[448px] border border-line bg-surface p-6",
              )}
            >
              <div className="flex flex-col gap-[14px]">
                <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="flex items-end leading-10">
                  <span className="text-[40px] font-semibold tracking-[-0.01em]">
                    {p.price}
                  </span>
                  <span className="text-sm leading-5">/month</span>
                </p>
                <p
                  className={cn(
                    "max-w-[318px] leading-5",
                    p.featured ? "text-sm" : "text-[13px] leading-[21px]",
                  )}
                >
                  {p.blurb}
                </p>
                {p.featured && (
                  <span className="absolute right-5 top-5 rounded-md bg-ink-2 px-3 py-2 text-sm leading-5 text-white">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2 opacity-80">
                <h4 className="text-base leading-[25.6px] tracking-[-0.01em]">
                  What&apos;s included
                </h4>
                <ul
                  className={cn(
                    "pl-7",
                    p.featured
                      ? "text-base leading-[25.6px]"
                      : "text-[15px] leading-[26px]",
                  )}
                >
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <Button
                href="#contact"
                full
                variant={p.featured ? "dark" : "accent"}
                className={p.featured ? "py-3" : undefined}
              >
                {p.cta}
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
