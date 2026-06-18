// Path: src/components/home/ClosingCTA.tsx

import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="border-t border-[var(--rule)] pt-12 text-center">
      <p className="label mb-8">
        ready when you are
      </p>

      <h2
        className="
          display
          text-[clamp(2rem,3vw,2.75rem)]
          leading-[1]
          max-w-1xl
          mx-auto
        "
      >
        Upload a report.
        <br />
        <span className="display-italic">
          Get the verdict.
        </span>
      </h2>

      <p
        className="
          mt-6
          max-w-lg
          mx-auto
          text-[0.95rem]
          text-[var(--color-ink-mid)]
          leading-relaxed
        "
      >
        Financial analysis in minutes. Risks,
        metrics, findings, and answers grounded
        in the report itself.
      </p>

      <div className="mt-8">
        <Link
          href="/scan"
          className="group inline-flex items-center gap-2"
        >
          <span
            className="
              display-italic
              text-[1.75rem]
            "
          >
            Try FinSight now
          </span>

          <span
            className="
              text-[var(--color-accent)]
              text-[1.25rem]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}