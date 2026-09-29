import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { events } from "@/lib/content";

export function Events() {
  return (
    <Section tone="ink-2" id="events">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-eyebrow">Camps &amp; Events</p>
              <h2 className="text-display max-w-[720px] text-balance">
                Train, Develop &amp; Experience more
              </h2>
            </div>
            <p className="text-base leading-[25.6px] tracking-[-0.01em]">
              Football experiences designed to improve ability, confidence and
              understanding.
            </p>
          </div>
          <Button href="#contact">View all events</Button>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {events.map((e) => (
            <li key={e.title}>
              <article className="group flex h-full flex-col">
                <Media
                  src={e.image}
                  alt={e.title}
                  position={e.position}
                  className="h-[186px] rounded-3xl transition duration-300 group-hover:brightness-110"
                />
                <div className="flex flex-col gap-2 px-5 pb-5 pt-[27px]">
                  <p className="text-base text-white/60">{e.date}</p>
                  <h3 className="pt-1 text-[20px] font-medium leading-6 tracking-[-0.02em]">
                    {e.title}
                  </h3>
                  <p className="max-w-[260px] text-sm leading-5 text-white/70">
                    {e.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
