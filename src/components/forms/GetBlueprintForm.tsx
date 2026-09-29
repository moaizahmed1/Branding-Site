"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { boxedField, Field, Select, underlineField } from "@/components/forms/primitives";
import { levels, positions } from "@/lib/content";
import { getStartedPackages, whatHappensNext } from "@/lib/pages";
import { cn } from "@/lib/cn";

/** Two-step order form: choose a package, then submit details + footage link. */
export function GetBlueprintForm() {
  const [pkg, setPkg] = useState("Development");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a backend / payment flow.
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="mx-auto flex max-w-[560px] flex-col gap-3 rounded-3xl border border-line bg-surface p-8 text-center"
      >
        <h3 className="text-[24px] font-medium leading-8 tracking-[-0.035em]">
          Request received
        </h3>
        <p className="text-base leading-[25.6px] text-muted">
          Thanks — we’ll review your submission and confirm your {pkg} Blueprint
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-16 md:grid-cols-[480px_1fr] md:gap-20"
    >
      {/* Step 1 */}
      <div className="flex flex-col">
        <p className="text-mono-eyebrow flex h-6 items-start">Step 1</p>
        <h2 className="pt-3 text-[32px] font-medium leading-[38px] tracking-[-0.025em]">
          Choose Your Package
        </h2>

        <fieldset className="mt-8 flex flex-col gap-4">
          <legend className="sr-only">Package</legend>
          {getStartedPackages.map((p) => {
            const selected = pkg === p.name;
            return (
              <label
                key={p.name}
                className={cn(
                  "flex min-h-[98px] cursor-pointer flex-col justify-between rounded-3xl border bg-surface px-4 py-5 transition-colors",
                  selected
                    ? "border-accent"
                    : "border-line hover:border-white/25",
                )}
              >
                <input
                  type="radio"
                  name="package"
                  value={p.name}
                  checked={selected}
                  onChange={() => setPkg(p.name)}
                  className="sr-only"
                />
                <span className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-[11px] uppercase leading-[16.5px] tracking-[0.1em]",
                      selected ? "text-accent" : "text-muted",
                    )}
                  >
                    {p.name}
                  </span>
                  <span className="text-[20px] font-medium leading-[30px]">
                    {p.price}
                  </span>
                </span>
                <span className="pt-1.5 text-[13px] leading-5 text-muted">
                  {p.blurb}
                </span>
              </label>
            );
          })}
        </fieldset>

        <div className="mt-10 rounded-2xl border border-white/[0.08] p-5">
          <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
            What happens next
          </p>
          <ul className="flex flex-col gap-2.5 pt-3">
            {whatHappensNext.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-[13px] leading-5 text-muted">
                <Check size={16} aria-hidden className="mt-px shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col">
        <p className="text-mono-eyebrow flex h-6 items-start">Step 2</p>
        <h2 className="pt-3 text-[32px] font-medium leading-[38px] tracking-[-0.025em]">
          Your Details
        </h2>

        <div className="flex flex-col gap-8 pt-8">
          <Field label="Full Name" htmlFor="gb-name" size="sm">
            <input
              id="gb-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your full name"
              className={underlineField}
            />
          </Field>
          <Field label="Email Address" htmlFor="gb-email" size="sm">
            <input
              id="gb-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className={underlineField}
            />
          </Field>

          <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
            <Field label="Age" htmlFor="gb-age" size="sm">
              <input
                id="gb-age"
                name="age"
                type="number"
                inputMode="numeric"
                min={5}
                max={60}
                placeholder="e.g. 19"
                className={underlineField}
              />
            </Field>
            <Field label="Position" htmlFor="gb-position" size="sm">
              <Select
                id="gb-position"
                name="position"
                placeholder="Select position"
                options={positions}
                variant="boxed"
              />
            </Field>
          </div>

          <Field label="Current Level" htmlFor="gb-level" size="sm">
            <Select
              id="gb-level"
              name="level"
              placeholder="Select your current level"
              options={levels}
              variant="boxed"
            />
          </Field>
          <Field label="Footage Link" htmlFor="gb-footage" size="sm">
            <input
              id="gb-footage"
              name="footage"
              type="url"
              placeholder="Paste YouTube, Vimeo or Google Drive link"
              className={underlineField}
            />
          </Field>
          <Field label="Tell Us About Your Goals" htmlFor="gb-goals" size="sm">
            <textarea
              id="gb-goals"
              name="goals"
              rows={5}
              placeholder="What do you want to achieve? What areas do you want us to focus on?"
              className={cn(boxedField, "min-h-[134px] resize-none rounded-xl px-4 py-3.5 leading-[26px]")}
            />
          </Field>

          <Button type="submit" full className="py-[15px]">
            Submit My Blueprint Request
          </Button>
        </div>
      </div>
    </form>
  );
}
