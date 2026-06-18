// Path: src/components/home/ClosingCTA.tsx

import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="border-t border-[var(--rule)] pt-24 text-center">
      <p className="label mb-6">
        ready when you are
      </p>

      <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-[1] max-w-3xl mx-auto">
        Upload a report.
        <br />
        <span className="display-italic">
          Get the verdict.
        </span>
      </h2>

      <p className="mt-8 max-w-xl mx-auto text-[var(--ink-mid)] leading-relaxed">
        Financial analysis in minutes. Risks,
        metrics, findings, and answers grounded
        in the report itself.
      </p>

      <div className="mt-10">
        <Link
          href="/scan"
          className="group inline-flex items-center gap-3"
        >
          <span className="display-italic text-3xl">
            Try FinSight now
          </span>

          <span className="text-[var(--accent)] text-2xl transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}