import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-line bg-surface p-6",
        className,
      )}
      {...props}
    />
  );
}

/** Numbered step card: gold index top-left, title + copy pinned bottom. */
export function StepCard({
  index,
  title,
  children,
  className,
  media,
}: {
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
  media?: ReactNode;
}) {
  return (
    <Card className={cn("flex flex-col justify-between gap-4", className)}>
      <span className="text-step">{index}</span>
      {media}
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-medium leading-6 tracking-[-0.02em]">
          {title}
        </h3>
        <p className="text-sm leading-5 opacity-70">{children}</p>
      </div>
    </Card>
  );
}
