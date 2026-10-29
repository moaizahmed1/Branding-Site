import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { hero, images } from "@/lib/content";
import { routes } from "@/lib/routes";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-ink md:min-h-[778px]">
      <Media
        src={images.hero}
        alt=""
        position="50% 60%"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${images.hero}), radial-gradient(60% 50% at 55% 20%, #2a2a2a 0%, #0b0b0b 100%)`,
        }}
      />
      {/* Legibility scrims: darken the text side and the bottom edge so copy stays readable over the bright sunset. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10 md:from-black/75 md:via-black/45"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-b from-transparent from-[20%] via-[#0b0b0b]/70 to-[#0e0e0e]"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pb-16 pt-40 md:flex-row md:items-end md:justify-between md:px-10 md:pb-[90px]">
        <div className="flex max-w-[842px] flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex h-10 items-center rounded-full bg-ink-2/80 px-4 text-sm backdrop-blur-[5px]">
              {hero.pill}
            </span>
            <p className="font-mono text-[12px] uppercase leading-[18px] tracking-[0.16em] text-accent">
              {hero.tagline}
            </p>
          </div>
          <h1 className="max-w-[760px] text-[clamp(2.5rem,1.6rem+3.6vw,3.5rem)] font-medium leading-[1.14] tracking-[-0.034em]">
            {hero.title}
          </h1>
          <div className="flex max-w-[680px] flex-col gap-4 font-inter text-base leading-6 tracking-[0.01em]">
            {hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="text-sm text-muted">{hero.note}</p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:shrink-0">
          <Button href={routes.packages} font="mono">
            Get Your Blueprint
          </Button>
          <Button href={routes.services} font="mono" variant="ghost">
            Explore our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
