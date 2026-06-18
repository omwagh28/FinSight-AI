// Path: src/components/home/Hero.tsx

import Link from "next/link";
import AuroraBackground from "@/components/ui/AuroraBackground";
import TryNowButton from "@/components/ui/TryNowButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 min-h-[92vh]">
      <AuroraBackground />

      <div className="relative z-10 max-w-[1350px] mx-30">
        <p className="label-wide mb-10">
          agentic financial intelligence platform
        </p>

        <h1
          className="
            display
            max-w-[1200px]
            text-[clamp(4.5rem,8vw,7.5rem)]
            leading-[0.9]
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
            mt-12
            max-w-3xl
            text-[1.45rem]
            leading-[1.65]
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

        <div className="mt-16 flex flex-col md:flex-row md:items-center gap-10">
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

        <div className="mt-20 flex flex-wrap gap-x-16 gap-y-8">
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
          text-[3.8rem]
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