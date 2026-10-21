"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, Select, underlineField } from "@/components/forms/primitives";
import { getStarted, levels, positions } from "@/lib/content";

/** Get-in-touch form. Front-end shell only — wire `onSubmit` to a backend or form service. */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to a backend / form service.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col justify-center gap-3 rounded-3xl border border-line bg-surface p-8"
      >
        <h3 className="text-[24px] font-medium leading-8 tracking-[-0.035em]">
          Message received
        </h3>
        <p className="text-base leading-[25.6px] text-muted">
          Thanks — we’ll be in touch shortly to talk about your development.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-8">
      <Field label="Full Name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={underlineField}
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
          className={underlineField}
        />
      </Field>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
        <Field label="Position" htmlFor="position">
          <Select
            id="position"
            name="position"
            placeholder="Select position"
            options={positions}
            required={false}
          />
        </Field>
        <Field label="Current Level" htmlFor="level">
          <Select
            id="level"
            name="level"
            placeholder="Select level"
            options={levels}
            required={false}
          />
        </Field>
      </div>

      <Field label="How can we help?" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us a little about your game and what you’d like to work on."
          className={`${underlineField} resize-none leading-6`}
        />
      </Field>

      <Button type="submit" full className="py-[15px]">
        {getStarted.cta}
      </Button>
    </form>
  );
}
