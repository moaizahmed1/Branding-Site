import { Anchor, Route, Target, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { CTA_LABEL, images, philosophy } from "@/lib/content";

const icons: Record<(typeof philosophy)[number]["icon"], LucideIcon> = {
  anchor: Anchor,
  route: Route,
  target: Target,
};

export function About() {
  return (
    <Section tone="ink-2" id="about">
      <Container className="grid items-center gap-10 md:grid-cols-[600fr_480fr]">
        <Media
          src={images.about}
          alt="A Blueprint XI player seen from behind, looking out over a floodlit stadium"
          position="center"
          className="aspect-[6/7] w-full rounded-3xl bg-line md:aspect-auto md:h-[709px]"
        />

        <div className="flex flex-col justify-between gap-12 md:h-[679px]">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <p className="text-eyebrow">About Blueprint XI</p>
                <h2 className="text-display">
                  Developing Players, Building Pathways
                </h2>
              </div>
              <p className="max-w-[347px] text-base leading-[25.6px] tracking-[-0.01em]">
                We help ambitious football players understand their strengths,
                improve their weaknesses, and create a clearer path forward.
              </p>
            </div>
            <Button href="#contact" font="mono" className="mt-2">
              {CTA_LABEL}
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
              Our Philosophy
            </h3>
            <ul className="grid grid-cols-3 gap-3 md:gap-4">
              {philosophy.map(({ icon, label }) => {
                const Icon = icons[icon];
                return (
                  <li
                    key={label}
                    className="flex min-h-[200px] flex-col justify-between rounded-3xl border border-line bg-surface px-4 py-5 md:h-[220px]"
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.25}
                      className="text-muted"
                      aria-hidden
                    />
                    <span className="max-w-[100px] text-sm">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
