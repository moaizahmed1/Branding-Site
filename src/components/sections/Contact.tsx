"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown, MessagesSquare, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Section } from "@/components/ui/Container";
import { levels, positions } from "@/lib/content";

const field =
  "w-full border-0 border-b-2 border-line bg-transparent pb-3 text-base text-white placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em] text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  name,
  placeholder,
  options,
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue=""
        className={`${field} cursor-pointer appearance-none pr-6 invalid:text-muted`}
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface text-white">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        aria-hidden
        className="pointer-events-none absolute right-0 top-1 text-white"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a backend / form service. Front-end shell only for now.
    setSent(true);
  }

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
            you best?<br className="hidden md:block" /> Reach out — we’ll help you find your next step forward.
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

          {sent ? (
            <div
              role="status"
              className="flex flex-col justify-center gap-3 rounded-3xl border border-line bg-surface p-8"
            >
              <h3 className="text-[24px] font-medium leading-8 tracking-[-0.035em]">
                Enquiry received
              </h3>
              <p className="text-base leading-[25.6px] text-muted">
                Thanks — we’ll be in touch shortly to talk through your
                Blueprint.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-8">
              <Field label="Full Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={field}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={field}
                />
              </Field>
              <Field label="Age" htmlFor="age">
                <input
                  id="age"
                  name="age"
                  type="number"
                  inputMode="numeric"
                  min={5}
                  max={60}
                  placeholder="16"
                  className={field}
                />
              </Field>
              <Field label="Current Club" htmlFor="club">
                <input
                  id="club"
                  name="club"
                  placeholder="Club name"
                  className={field}
                />
              </Field>

              <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
                <Field label="Position" htmlFor="position">
                  <Select
                    id="position"
                    name="position"
                    placeholder="Select position"
                    options={positions}
                  />
                </Field>
                <Field label="Current Level" htmlFor="level">
                  <Select
                    id="level"
                    name="level"
                    placeholder="Select Level"
                    options={levels}
                  />
                </Field>
              </div>

              <Field label="Your Career Goal" htmlFor="goal">
                <textarea
                  id="goal"
                  name="goal"
                  rows={2}
                  placeholder="Where do you want to be in 3–5 years?"
                  className={`${field} resize-none leading-6`}
                />
              </Field>
              <Field label="Why BLUEPRINT XI?" htmlFor="why">
                <textarea
                  id="why"
                  name="why"
                  rows={2}
                  placeholder="Why do you feel BLUEPRINT XI is the right fit for you?"
                  className={`${field} resize-none leading-6`}
                />
              </Field>

              <Button type="submit" full className="py-[15px]">
                Submit Enquiry
              </Button>
            </form>
          )}
        </div>
      </Container>
    </Section>
  );
}
