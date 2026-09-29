import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { posts } from "@/lib/content";

export function Insights() {
  return (
    <Section id="insights">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <p className="text-eyebrow">Football Development Insights</p>
          <h2 className="text-display">Stay Ahead of The Game</h2>
        </div>

        <ul className="grid gap-x-6 gap-y-10 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.title}>
              <article className="group flex flex-col">
                <div className="relative overflow-hidden rounded-3xl bg-ink-3">
                  <Media
                    src={p.image}
                    alt=""
                    className="h-[186px] opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-line/60 to-transparent to-50%"
                  />
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm leading-5 text-muted">
                      {p.date}
                    </span>
                    <span className="rounded bg-accent-soft px-2 py-[3px] font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-5 text-white/70">{p.body}</p>
                  <a
                    href="#insights"
                    className="mt-1 inline-flex items-center gap-2 pt-1 text-sm text-accent transition-[gap] duration-200 hover:gap-3"
                  >
                    Read more
                    <ArrowRight size={16} aria-hidden />
                    <span className="sr-only">: {p.title}</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
