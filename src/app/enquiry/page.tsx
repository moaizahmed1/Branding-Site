import type { Metadata } from "next";
import { Check } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { beforeYouApply } from "@/lib/pages";

export const metadata: Metadata = { title: "Representation Enquiry" };

export default function EnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Representation"
        title="Representation Enquiry"
        subtitle="Not every player is right for representation — and not every agency is right for every player. Tell us about yourself."
      />

      <Section tone="ink-2">
        <Container className="grid items-start gap-12 md:grid-cols-[480px_1fr] md:gap-20">
          <aside className="flex min-h-[337px] flex-col justify-between rounded-3xl border border-line bg-surface px-4 py-5">
            <h2 className="text-[24px] font-medium leading-9">Before You Apply</h2>
            <ul className="flex flex-col gap-4 pt-6">
              {beforeYouApply.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-6">
                  <Check size={20} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="pt-8 text-[13px] leading-[20.8px] text-muted">
              We review every enquiry carefully. We will reply within 5 working
              days.
            </p>
          </aside>
          <EnquiryForm />
        </Container>
      </Section>
    </>
  );
}
