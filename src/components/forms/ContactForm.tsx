"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Field, Select, underlineField } from "@/components/forms/primitives";
import { getStarted, levels, positions } from "@/lib/content";
import { interests } from "@/lib/interests";

/** Get-in-touch form. Submissions are saved and appear in /admin. */
export function ContactForm() {
  const params = useSearchParams();
  const fromLink = params.get("interest") ?? "";
  const [interest, setInterest] = useState(
    interests.includes(fromLink) ? fromLink : "General enquiry",
  );
  // If the visitor arrives via a different "Buy Now" link, follow it.
  const [lastLink, setLastLink] = useState(fromLink);
  if (fromLink !== lastLink) {
    setLastLink(fromLink);
    if (interests.includes(fromLink)) setInterest(fromLink);
  }

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("idle");
    }
  }

  if (status === "sent") {
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
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Full Name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          maxLength={100}
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
          maxLength={200}
          autoComplete="email"
          placeholder="your@email.com"
          className={underlineField}
        />
      </Field>

      <Field label="I’m interested in" htmlFor="interest">
        <Select
          id="interest"
          name="interest"
          placeholder="Select an option"
          options={interests}
          value={interest}
          onChange={setInterest}
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
          maxLength={2000}
          placeholder="Tell us a little about your game and what you’d like to work on."
          className={`${underlineField} resize-none leading-6`}
        />
      </Field>

      {error && (
        <p role="alert" className="text-sm text-[#f08a7e]">
          {error}
        </p>
      )}

      <Button type="submit" full className="py-[15px]" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : getStarted.cta}
      </Button>
    </form>
  );
}
