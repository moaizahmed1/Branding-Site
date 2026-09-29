import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Mono eyebrow. When omitted the design's empty 24px slot is kept. */
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Inner-page section heading: 24px eyebrow slot, then the 48px display title. */
export function SectionTitle({
  eyebrow,
  children,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p className="text-mono-eyebrow flex h-6 items-start">{eyebrow}</p>
      <h2 className="text-display pt-4">{children}</h2>
    </div>
  );
}
