import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { articles, featuredArticle } from "@/lib/pages";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: "Football Development Insights" };

const tag =
  "inline-flex self-start rounded-md border border-accent/25 bg-accent/[0.12] font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Football Development Insights"
        subtitle="Explore expert articles covering football player development, scouting analysis, academy football, player improvement, football career advice, and technical and tactical development. Helping players and families better understand the modern football pathway."
      />

      <Section tone="ink-2">
        <Container>
          <p className="text-mono-eyebrow">Featured</p>
          <article className="mt-10 grid overflow-hidden rounded-3xl bg-line shadow-[4px_10px_10.77px_rgb(0_0_0/0.03)] md:min-h-[380px] md:grid-cols-2">
            <Media
              src="/images/featured-article.png"
              fallback="/images/team-member.png"
              alt="A football at the feet of a player on a pristine pitch"
              className="min-h-[240px]"
            />
            <div className="flex flex-col justify-center gap-4 rounded-b-3xl border border-line bg-surface px-6 py-8 md:rounded-b-none md:rounded-r-3xl md:px-10">
              <span className={`${tag} px-2.5 py-[5px]`}>{featuredArticle.tag}</span>
              <h2 className="text-[24px] font-medium leading-[30px] tracking-[-0.02em] md:text-[28px] md:leading-[34px]">
                {featuredArticle.title}
              </h2>
              <p className="text-[15px] leading-6 text-muted">{featuredArticle.body}</p>
              <Link
                href={routes.insights}
                className="inline-flex items-center gap-2 text-[15px] text-accent transition-[gap] hover:gap-3"
              >
                Read Article <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </article>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle eyebrow="All articles">Latest from BLUEPRINT XI</SectionTitle>
          <ul className="grid gap-6 pt-12 md:grid-cols-3">
            {articles.map((a) => (
              <li key={a.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-line shadow-[4px_10px_10.77px_rgb(0_0_0/0.03)]">
                  <div className="relative">
                    <Media
                      src={a.image}
                      alt=""
                      className="h-[180px] bg-[#1e1e1e] transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent/80 to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 rounded-b-3xl border border-line bg-surface px-4 py-5">
                    <p className="text-xs leading-[18px] text-muted">{a.date}</p>
                    <span className={`${tag} px-2 py-1`}>{a.tag}</span>
                    <h3 className="text-[18px] font-medium leading-6 tracking-[-0.02em]">
                      {a.title}
                    </h3>
                    <p className="flex-1 text-sm leading-5 text-muted">{a.body}</p>
                    <Link
                      href={routes.insights}
                      className="inline-flex items-center gap-2 pt-1 text-sm text-accent transition-[gap] hover:gap-3"
                    >
                      Read more <ArrowRight size={15} aria-hidden />
                      <span className="sr-only">: {a.title}</span>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ink-2">
        <Container className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <p className="text-mono-eyebrow">Newsletter</p>
            <h2 className="text-display">Stay Informed</h2>
            <p className="max-w-[480px] text-[18px] leading-7 text-muted">
              New articles on development, scouting and the game — straight to
              your inbox.
            </p>
          </div>
          <SubscribeForm variant="boxed" cta="Subscribe" />
        </Container>
      </Section>
    </>
  );
}
