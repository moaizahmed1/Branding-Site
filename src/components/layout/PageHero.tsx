import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { routes } from "@/lib/routes";

const DEFAULT_HERO = "/images/hero-page.jpg";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  /**
   * Path under /public. Defaults to the standard stadium portrait.
   * Exports from Figma already carry any layer opacity, so none is applied here.
   */
  image?: string;
  imagePosition?: string;
};

/** Shared inner-page hero: 702px, bottom-aligned copy, two CTAs on the right. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = DEFAULT_HERO,
  imagePosition = "50% 20%",
}: Props) {
  return (
    <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-ink md:min-h-[702px]">
      <Media
        src={image}
        fallback={image === DEFAULT_HERO ? "/images/hero.jpg" : undefined}
        alt=""
        position={imagePosition}
        className="absolute inset-0 -z-20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[65%] bg-gradient-to-b from-transparent from-[35%] to-[#0e0e0e]"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pb-16 pt-40 md:flex-row md:items-end md:justify-between md:px-10 md:pb-[90px]">
        <div className="flex max-w-[842px] flex-col items-start gap-6">
          <span className="inline-flex h-10 items-center rounded-full bg-ink-2/80 px-4 font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted backdrop-blur-[5px]">
            {eyebrow}
          </span>
          <h1 className="text-display">{title}</h1>
          <p className="max-w-[811px] text-[18px] leading-7 text-muted">
            {subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:shrink-0">
          <Button href={routes.getBlueprint} font="mono">
            Get Your Blueprint
          </Button>
          <Button href={routes.story} font="mono" variant="ghost">
            Discover Blueprint XI
          </Button>
        </div>
      </div>
    </section>
  );
}
