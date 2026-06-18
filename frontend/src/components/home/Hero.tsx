// Path: src/components/home/Hero.tsx

import Link from "next/link";
import AuroraBackground from "@/components/ui/AuroraBackground";
import TryNowButton from "@/components/ui/TryNowButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-25 pb-25 min-h-[92vh]">
      <AuroraBackground />

      <div
        className="
          relative
          z-10
          max-w-[1100px]
          mx-auto
          px-10
        "
      >
        <p className="label-wide mb-6">
          agentic financial intelligence platform
        </p>

        <h1
          className="
            display
            max-w-[1100px]
            text-[clamp(3.7rem,7vw,5.5rem)]
            leading-[10]
            tracking-[-0.045em]
            text-[var(--color-ink)]
          "
        >
          Read it{" "}
          <span className="display-italic">
            before
          </span>
          <br />
          you invest.
        </h1>

        <p
          className="
            mt-10
            max-w-3xl
            text-[1.25rem]
            leading-[1.6]
            text-[var(--color-ink-mid)]
          "
        >
          FinSight analyzes annual reports,
          earnings filings, investor
          presentations, and financial
          statements to surface risks,
          strengths, and hidden signals
          before you make investment
          decisions.
        </p>

        <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8">
          <TryNowButton />

          <Link
            href="/compare"
            className="
              label
              hover:text-[var(--color-ink-mid)]
              transition-colors
            "
          >
            or compare two reports →
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
          <Stat
            value="24+"
            label="financial metrics"
          />

          <Stat
            value="8"
            label="risk categories"
          />

          <Stat
            value="RAG"
            label="hybrid retrieval"
          />

          <Stat
            value="1"
            label="intelligence agent"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className="
          display
          text-[3.2rem]
          leading-none
          text-[var(--color-ink)]
        "
      >
        {value}
      </span>

      <span className="label">
        {label}
      </span>
    </div>
  );
}