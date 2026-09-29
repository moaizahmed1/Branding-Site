import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "accent" | "ghost" | "dark";
type Type = "mono" | "sans";

type Props = {
  variant?: Variant;
  /** mono = uppercase JetBrains Mono label (hero/section CTAs); sans = 16px label */
  font?: Type;
  full?: boolean;
} & (
  | ({ href: string } & ComponentPropsWithoutRef<"a">)
  | ({ href?: undefined } & ComponentPropsWithoutRef<"button">)
);

const variants: Record<Variant, string> = {
  accent: "bg-accent text-on-accent hover:brightness-110",
  ghost:
    "border border-cream/15 bg-white/10 text-cream hover:bg-white/15 hover:border-cream/30",
  dark: "border border-line bg-ink-2 text-white hover:bg-ink hover:border-white/30",
};

export function Button({
  variant = "accent",
  font = "sans",
  full,
  className,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-[26px] transition duration-200 active:scale-[0.99]",
    font === "mono"
      ? "py-[15px] font-mono text-[14px] uppercase tracking-[0.08em] leading-[16.5px]"
      : "py-3 text-base tracking-[-0.01em]",
    variants[variant],
    full && "w-full",
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as ComponentPropsWithoutRef<"a"> & {
      href: string;
    };
    return <a href={href} className={classes} {...rest} />;
  }
  return (
    <button
      className={classes}
      {...(props as ComponentPropsWithoutRef<"button">)}
    />
  );
}
