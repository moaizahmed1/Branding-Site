import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("whitespace-nowrap font-medium leading-none", className)}>
      <span className="uppercase tracking-[0.14em] text-cream-2">
        Blueprint
      </span>{" "}
      <span className="bg-gradient-to-br from-[#decfb6] via-[#c5ab84] to-[#a68d71] bg-clip-text tracking-[-0.035em] text-transparent">
        XI
      </span>
    </span>
  );
}
