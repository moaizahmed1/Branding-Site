import { reportScores } from "@/lib/pages";
import { cn } from "@/lib/cn";

const chip =
  "inline-flex rounded-lg border border-accent/30 bg-accent/15 px-3 py-1.5 font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-accent";

/** Snapshot of a player analysis report. Shared by the home preview and /sample-blueprint. */
export function ReportCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-3xl border border-line bg-surface px-4 py-5",
        className,
      )}
      role="group"
      aria-label="Sample player analysis report"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <p className="text-base font-medium tracking-[-0.02em]">BLUEPRINT XI</p>
        <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
          Player Analysis Report
        </p>
      </div>

      <div className="border-b border-white/[0.08] pb-5">
        <p className="text-[28px] font-medium leading-8 tracking-[-0.03em]">
          James Richardson
        </p>
        <div className="flex flex-wrap gap-2 pt-3">
          {["Midfielder", "Age 19", "Academy Level"].map((t) => (
            <span key={t} className={chip}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <dl className="flex flex-col gap-3.5 border-b border-white/[0.08] pb-6">
        {reportScores.map((s) => (
          <div key={s.label}>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em]">
              <dt className="text-muted">{s.label}</dt>
              <dd className="text-accent">{s.value}%</dd>
            </div>
            <div
              className="mt-1.5 h-1.5 rounded-full bg-white/5"
              role="progressbar"
              aria-valuenow={s.value}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${s.label} score`}
            >
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${s.value}%` }}
              />
            </div>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-x-6 gap-y-4">
        <div>
          <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
            Top Strength
          </p>
          <p className="pt-1 text-sm">Tactical awareness</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase leading-[15px] tracking-[0.1em] text-muted">
            Priority Development Area
          </p>
          <p className="pt-1 text-sm">Attacking third movement</p>
        </div>
      </div>
    </div>
  );
}
