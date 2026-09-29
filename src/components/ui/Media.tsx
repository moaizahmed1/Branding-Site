import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Path under /public, e.g. "/images/hero.jpg" */
  src: string;
  /** Optional stand-in shown while `src` doesn't exist yet */
  fallback?: string;
  alt: string;
  className?: string;
  /** CSS background-position, e.g. "50% 20%" */
  position?: string;
  style?: CSSProperties;
};

/**
 * Photo slot. Images are CSS backgrounds layered over a dark placeholder,
 * so a missing file degrades to the fallback / placeholder instead of a
 * broken image.
 */
export function Media({
  src,
  fallback,
  alt,
  className,
  position = "center",
  style,
}: Props) {
  const layers = [
    `url(${src})`,
    fallback ? `url(${fallback})` : null,
    "linear-gradient(135deg, #262626 0%, #141414 100%)",
  ].filter(Boolean);

  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={cn("bg-cover bg-no-repeat", className)}
      style={{
        backgroundImage: layers.join(", "),
        backgroundPosition: position,
        ...style,
      }}
    />
  );
}
