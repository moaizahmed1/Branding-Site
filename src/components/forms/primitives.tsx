import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

/** Underline text input (Figma "Text Input"). */
export const underlineField =
  "w-full border-0 border-b-2 border-line bg-transparent pb-3 text-base text-white placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

/** Boxed input used by the Get Your Blueprint + newsletter forms. */
export const boxedField =
  "w-full rounded-lg border border-white/10 bg-ink-3 px-5 py-3 text-base text-white placeholder:text-muted transition-colors focus:border-accent focus:outline-none";

export function Field({
  label,
  htmlFor,
  children,
  className,
  size = "md",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
  /** md = 11px label (enquiry), sm = 10px label (get-started) */
  size?: "md" | "sm";
}) {
  return (
    <div className={cn("flex flex-col", size === "md" ? "gap-1" : "gap-3", className)}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "font-mono uppercase tracking-[0.1em] text-muted",
          size === "md" ? "text-[11px] leading-[16.5px]" : "text-[10px] leading-[15px]",
        )}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function Select({
  id,
  name,
  placeholder,
  options,
  variant = "underline",
  required = true,
}: {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  variant?: "underline" | "boxed";
  required?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        defaultValue=""
        required={required}
        className={cn(
          variant === "underline" ? underlineField : boxedField,
          "cursor-pointer appearance-none pr-8 invalid:text-muted",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface text-white">
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        aria-hidden
        className={cn(
          "pointer-events-none absolute text-white",
          variant === "underline" ? "right-0 top-1" : "right-4 top-1/2 -translate-y-1/2",
        )}
      />
    </div>
  );
}
