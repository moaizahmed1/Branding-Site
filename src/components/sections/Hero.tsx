import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { CTA_LABEL, images } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-ink md:min-h-[778px]">
      <Media
        src={images.hero}
        alt=""
        position="50% 8%"
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url(${images.hero}), radial-gradient(60% 50% at 55% 20%, #2a2a2a 0%, #0b0b0b 100%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[62%] bg-gradient-to-b from-transparent from-[35%] to-[#0e0e0e]"
      />

      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pb-16 pt-40 md:flex-row md:items-end md:justify-between md:px-10 md:pb-[90px]">
        <div className="flex max-w-[842px] flex-col items-start gap-6">
          <span className="inline-flex h-10 items-center rounded-full bg-ink-2/80 px-4 text-sm backdrop-blur-[5px]">
            BLUEPRINT XI
          </span>
          <h1 className="text-[clamp(2.5rem,1.6rem+3.6vw,3.5rem)] font-medium leading-[1.14] tracking-[-0.034em]">
            Every footballer has a
            <br className="hidden sm:block" /> unique journey.
          </h1>
          <p className="max-w-[640px] font-inter text-base leading-6 tracking-[0.01em]">
            We use professional scouting to assess your game, identify your
            strengths, and create your personalised Blueprint for development.
            <br className="hidden md:block" /> For selected players, we also
            provide professional representation and career management to help
            you progress.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:shrink-0">
          <Button href="#contact" font="mono">
            {CTA_LABEL}
          </Button>
          <Button href="#about" font="mono" variant="ghost">
            Discover Blueprint XI
          </Button>
        </div>
      </div>
    </section>
  );
}
