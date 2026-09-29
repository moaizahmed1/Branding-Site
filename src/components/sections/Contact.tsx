import { MessagesSquare, PhoneCall } from "lucide-react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";

export function Contact() {
  return (
    <Section id="contact">
      <Container className="flex flex-col gap-10">
        <div className="flex max-w-[615px] flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-eyebrow">Contact</p>
            <h2 className="text-display">Let’s build your plan together!</h2>
          </div>
          <p className="text-base leading-[25.6px] tracking-[-0.01em]">
            Have a question about training, nutrition, or which programme fits
            you best?<br className="hidden md:block" /> Reach out — we’ll help
            you find your next step forward.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[544fr_560fr]">
          <div className="grid gap-6 md:grid-rows-2">
            <Card className="flex min-h-[200px] flex-col justify-between">
              <MessagesSquare
                size={32}
                strokeWidth={1.25}
                className="text-muted"
                aria-hidden
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                  Chat
                </h3>
                <p className="text-base leading-[25.6px] tracking-[-0.01em] text-muted">
                  Chat directly with our experts
                </p>
              </div>
            </Card>
            <Card className="flex min-h-[200px] flex-col justify-between">
              <PhoneCall
                size={32}
                strokeWidth={1.25}
                className="text-muted"
                aria-hidden
              />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
                  Call us
                </h3>
                <p className="text-base leading-[25.6px] tracking-[-0.01em] text-muted">
                  Mon - Fri, 8:00 - 17:00 (CET)
                </p>
              </div>
            </Card>
          </div>

          <EnquiryForm />
        </div>
      </Container>
    </Section>
  );
}
