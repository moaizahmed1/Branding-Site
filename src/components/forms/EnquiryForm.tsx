"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { levels, positions } from "@/lib/content";
import { Field, Select, underlineField } from "@/components/forms/primitives";

/** Representation enquiry form (home contact + /enquiry). Front-end shell only. */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a backend / form service.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col justify-center gap-3 rounded-3xl border border-line bg-surface p-8"
      >
        <h3 className="text-[24px] font-medium leading-8 tracking-[-0.035em]">
          Enquiry received
        </h3>
        <p className="text-base leading-[25.6px] text-muted">
          Thanks — we’ll be in touch shortly to talk through your Blueprint.
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
      <Field label="Age" htmlFor="age">
        <input
          id="age"
          name="age"
          type="number"
          inputMode="numeric"
          min={5}
          max={60}
          placeholder="16"
          className={underlineField}
        />
      </Field>
      <Field label="Current Club" htmlFor="club">
        <input
          id="club"
          name="club"
          placeholder="Club name"
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
          className={`${underlineField} resize-none leading-6`}
        />
      </Field>
      <Field label="Why BLUEPRINT XI?" htmlFor="why">
        <textarea
          id="why"
          name="why"
          rows={2}
          placeholder="Why do you feel BLUEPRINT XI is the right fit for you?"
          className={`${underlineField} resize-none leading-6`}
        />
      </Field>

      <Button type="submit" full className="py-[15px]">
        Submit Enquiry
      </Button>
    </form>
  );
}
