import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type Props = {
  /** Path under /public, e.g. "/images/hero.jpg" */
  src: string;
  alt: string;
  className?: string;
  /** CSS background-position, e.g. "50% 20%" */
  position?: string;
  style?: CSSProperties;
};

/**
 * Photo slot. The image is a CSS background layered over a dark placeholder,
 * so a missing file degrades to the placeholder instead of a broken image.
 */
export function Media({ src, alt, className, position = "center", style }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("bg-cover bg-no-repeat", className)}
      style={{
        backgroundImage: `url(${src}), linear-gradient(135deg, #262626 0%, #141414 100%)`,
        backgroundPosition: position,
        ...style,
      }}
    />
  );
}
