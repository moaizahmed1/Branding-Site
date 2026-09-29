"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { boxedField, underlineField } from "@/components/forms/primitives";
import { cn } from "@/lib/cn";

type Props = {
  variant: "underline" | "boxed";
  cta: string;
  className?: string;
};

/** Email capture: underline (events "Notify Me") or boxed (insights "Subscribe"). */
export function SubscribeForm({ variant, cta, className }: Props) {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a newsletter provider.
    setDone(true);
  }

  if (done) {
    return (
      <p role="status" className={cn("text-base text-muted", className)}>
        Thanks — you’re on the list.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row",
        variant === "underline" ? "max-w-[540px] sm:gap-4" : "max-w-[520px]",
        className,
      )}
    >
      <label className="sr-only" htmlFor={`sub-${variant}`}>
        Email address
      </label>
      <input
        id={`sub-${variant}`}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Your email address"
        className={cn(
          "flex-1",
          variant === "underline"
            ? cn(underlineField, "h-12")
            : cn(boxedField, "h-14 !bg-line"),
        )}
      />
      <Button type="submit" className={variant === "underline" ? "" : "py-[15px]"}>
        {cta}
      </Button>
    </form>
  );
}
