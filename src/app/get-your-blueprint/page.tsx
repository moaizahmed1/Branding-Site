import type { Metadata } from "next";
import { GetBlueprintForm } from "@/components/forms/GetBlueprintForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container, Section } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Get Your Blueprint" };

export default function GetYourBlueprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Your Blueprint"
        title="Start Your Journey"
        subtitle="Submit your details and footage link below. We’ll review and confirm your Blueprint within 24 hours."
      />
      <Section tone="ink-2">
        <Container>
          <GetBlueprintForm />
        </Container>
      </Section>
    </>
  );
}
