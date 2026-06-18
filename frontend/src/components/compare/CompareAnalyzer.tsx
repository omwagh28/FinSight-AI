"use client";

import { useState } from "react";

import { compareReports } from "@/services/compare.service";
import { ComparisonResult } from "@/lib/ingestion/types";

export default function CompareAnalyzer() {
  const [companyAText, setCompanyAText] =
    useState("");

  const [companyBText, setCompanyBText] =
    useState("");

  const [result, setResult] =
    useState<ComparisonResult | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleCompare() {
    if (
      !companyAText.trim() ||
      !companyBText.trim()
    ) {
      setError(
        "Please enter both company reports."
      );

      setResult(null);

      return;
    }

    setError("");
    setLoading(true);

    try {
      const response =
        await compareReports({
          companyA: companyAText,
          companyB: companyBText,
        });

      if (!response.success) {
        setResult(null);

        setError(
          response.error ||
            "Invalid financial documents."
        );

        return;
      }

      setError("");

      setResult(response);

    } catch (err) {

      console.error(err);

      setResult(null);

      setError(
        "Unable to compare reports."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <section className="mt-20">
      <div className="grid md:grid-cols-2 gap-8">
        <TextInputCard
          title="Company A"
          value={companyAText}
          onChange={setCompanyAText}
        />

        <TextInputCard
          title="Company B"
          value={companyBText}
          onChange={setCompanyBText}
        />
      </div>

      {error && (
        <div
          className="
            mt-8
            border
            border-red-500/20
            bg-red-500/5
            rounded-[24px]
            p-6
            text-red-300
          "
        >
          {error}
        </div>
      )}

      <div className="mt-10 flex justify-end">
        <button
          onClick={handleCompare}
          disabled={loading}
          className="
          relative

          px-12
          py-4

          rounded-full

          border
          border-white/30

          bg-black/40

          overflow-hidden

          transition-all
          duration-700

          hover:border-[var(--color-accent)]

          hover:shadow-[0_0_35px_rgba(255,100,40,0.25)]

          disabled:opacity-50
        "
        >
          {loading
          ? "Analyzing Reports..."
          : "Generate Verdict ↗"}
        </button>
      </div>

      {result && (
        <ComparisonResultView
          result={result}
        />
      )}
    </section>
  );
}

function TextInputCard({
    title,
    value,
    onChange,
  }: {
    title: string;
    value: string;
    onChange: (
      value: string
    ) => void;
  }) {
  return (
    <div
          className="
        border
        border-white/15

        rounded-[32px]

        overflow-hidden

        bg-white/[0.015]

        backdrop-blur-sm

        transition-all
        duration-500

        hover:border-[var(--color-accent)]/180
      "
    >
      <div
        className="
          p-6
          border-b
          border-[var(--color-rule)]
        "
      >
        <div>
        <span
          className="
            text-xl
            uppercase
            tracking-[0.25em]

            text-white/90

            font-medium
          "
        >
          {title}
        </span>

        <p
          className="
            mt-2
            text-xl
            text-white/50
          "
        >
          Annual reports, earnings summaries,
          financial statements, or management
          commentary.
        </p>
      </div>
      </div>

      <textarea
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={`Paste ${title} report text here...`}
        className="
          w-full
          min-h-[260px]
          bg-transparent
          p-5
          resize-none
          outline-none
          text-[0.95rem]
          leading-6
        "
      />
    </div>
  );
}

function ComparisonResultView({
  result,
}: {
  result: ComparisonResult;
}) {
  return (
    <section className="mt-24">
      <div className="flex items-center gap-3 mb-8">
        <span className="label-wide">
          COMPARISON VERDICT
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>
       <div
        className="
          mt-8
          mb-6
        "
      >
        <span
          className="
            px-4
            py-2

            rounded-full

            border
            border-[var(--color-accent)]

            text-[var(--color-accent)]
            text-xl
          "
        >
          Investment Verdict
        </span>
      </div>
      <h2
        className="
          display
          text-[clamp(2.5rem,4vw,4.5rem)]
          leading-[0.95]
          max-w-5xl
        "
      >
        {result.verdict}
      </h2>

      <ScoreHeader result={result} />

      <MetricsComparison result={result} />

      <InsightsSection result={result} />

      <RisksSection result={result} />
    </section>
  );
}

function ScoreHeader({
  result,
}: {
  result: ComparisonResult;
}) {
  return (
    <div
      className="
        mt-14
        grid
        md:grid-cols-2
        gap-6
      "
    >
      <div
        className="
          border
          border-[var(--color-rule)]
          rounded-[32px]
          p-10
        "
      >
        <p
          className="
            label-wide
            mb-6
            text-base
            text-white/70
          "
        >
          {result.companyA}
        </p>

        <p
          className="
            display-italic
            text-[9rem]
            leading-none
          "
        >
          {result.scoreA}
        </p>

        <p
          className="
            mt-4
            text-base
            text-white/50
          "
        >
          Financial Health Score
        </p>
      </div>

      <div
        className="
          border
          border-[var(--color-rule)]
          rounded-[32px]
          p-12
        "
      >
        <p
          className="
            label-wide
            mb-6
            text-base
            text-white/70
          "
        >
          {result.companyB}
        </p>

        <p
          className="
            display-italic
            text-[9rem]
            leading-none
          "
        >
          {result.scoreB}
        </p>

        <p
          className="
            mt-4
            text-base
            text-white/50
          "
        >
          Financial Health Score
        </p>
      </div>
    </div>
  );
}
function MetricsComparison({
  result,
}: {
  result: ComparisonResult;
}) {
  if (
    !result.metrics ||
    result.metrics.length === 0
  ) {
    return null;
  }

  return (
    <div className="mt-20">
      <div className="flex items-center gap-10 mb-8">
        <span className="label-wide">
          COMPARISON DETAILS
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="space-y-4">
        {result.metrics.map(
          (metric) => (
            <div
              key={metric.metric}
              className="
                grid
                grid-cols-3
                border
                border-[var(--color-rule)]
                rounded-[24px]
                p-6
              "
            >
              <div>
                {metric.metric}
              </div>

              <div>
                {metric.companyA}
              </div>

              <div>
                {metric.companyB}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function InsightsSection({
  result,
}: {
  result: ComparisonResult;
}) {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="label-wide">
          INVESTMENT HIGHLIGHTS
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div
          className="
            border
            border-emerald-500/20
            bg-emerald-500/[0.03]
            rounded-[24px]
            p-8
          "
        >
          <h3 className="mb-6">
            {result.companyA}
          </h3>

          <ul className="space-y-4">
            {(result.companyAInsights || []).map(
              (item, index) => (
                <li key={index}>
                 ✓ {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="
            border
            border-emerald-500/20
            bg-emerald-500/[0.03]
            rounded-[24px]
            p-8
          ">
          <h3 className="mb-6">
            {result.companyB}
          </h3>

          <ul className="space-y-4">
            {(result.companyBInsights || []).map(
              (item, index) => (
                <li key={index}>
                  ✓ {item}
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}

function RisksSection({
  result,
}: {
  result: ComparisonResult;
}) {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="label-wide">
         ⚠ RISK EXPOSURE
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="
            border
            border-red-500/20
            bg-red-500/[0.03]
            rounded-[24px]
            p-8
          ">
          <h3 className="mb-6">
            {result.companyA}
          </h3>

          <ul className="space-y-4">
            {(result.companyARisks || []).map(
              (item, index) => (
                <li key={index}>
                    ⚠ {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div
          className="
            border
            border-red-500/20
            bg-red-500/[0.03]
            rounded-[24px]
            p-8
          "
        >
          <h3 className="mb-6">
            {result.companyB}
          </h3>

          <ul className="space-y-4">
            {(result.companyBRisks || []).map(
              (item, index) => (
                <li key={index}>
                  ⚠ {item}
                </li>
              )
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}