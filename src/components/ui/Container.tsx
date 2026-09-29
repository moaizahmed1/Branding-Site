import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** 1200px page container with 40px gutters (20px on mobile). */
export function Container({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-10", className)}
      {...props}
    />
  );
}

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: "ink" | "ink-2";
};

/** Full-bleed section with the design's 96px vertical rhythm. */
export function Section({
  tone = "ink",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        tone === "ink" ? "bg-ink" : "bg-ink-2",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
