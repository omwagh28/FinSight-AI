// Path: src/components/scan/FinancialResult.tsx

import FinancialInsights from "./FinancialInsights";
import ChatPanel from "./ChatPanel";

type FinancialScorecard = {
  healthScore: number;

  dimensionScores?: {
    liquidity: number;
    leverage: number;
    profitability: number;
    efficiency: number;
    growth: number;
  };

  verdict: string;
  findings: any[];
  metrics: any[];
  risks: any[];
  documentId: string;
  processingTime?: number;
};

interface Props {
  scorecard: FinancialScorecard;
}

export default function FinancialResult({
  scorecard,
}: Props) {

 
  const findings =
    scorecard.findings || [];

  const score =
  scorecard.healthScore ?? 0;

  const healthLabel =
    score >= 75
      ? "Strong"
      : score >= 50
      ? "Moderate"
      : "High Risk";

  return (
    <section className="mt-16">
      <div className="section-divider mb-16" />

      <div
        className="
          grid
          gap-12
          lg:grid-cols-[1fr_320px]
          items-start
        "
      >
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="label-wide">
              INVESTMENT VERDICT
            </span>

            <span className="h-px flex-1 bg-[var(--color-rule)]" />
          </div>

          <h2
            className="
              display
              text-[clamp(2.4rem,3.5vw,4rem)]
              leading-[0.95]
              max-w-4xl
            "
          >
            {scorecard.verdict}
          </h2>

          {findings.length > 0 && (
            <div className="mt-12 grid gap-6">
              {findings.map(
                (
                  finding: any,
                  index: number
                ) => (
                  <div
                    key={index}
                    className="
                      border-l-2
                      border-[var(--color-accent)]
                      pl-6
                    "
                  >
                    <div
                      className="
                        label-wide
                        mb-3
                      "
                    >
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>

                    <p
                    className="
                      text-2xl
                      leading-10
                      text-[var(--color-ink-mid)]
                    "
                  >
                      {typeof finding ===
                      "string"
                        ? finding
                        : finding?.description ||
                          finding?.text ||
                          ""}
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        <div
          className="
            bg-[var(--color-surface)]
            border
            border-[var(--color-rule)]
            rounded-[32px]
            p-10
            text-center
          "
        >
          <p className="label-wide mb-6">
            FINANCIAL HEALTH
          </p>

          <div
            className="
              display-italic
              text-[7rem]
              leading-none
            "
          >
            {score}
          </div>

          <div
            className="
              mt-4
              text-sm
              tracking-[0.25em]
              uppercase
              text-[var(--color-accent)]
            "
          >
            {healthLabel}
          </div>

          <div
            className="
              mt-8
              h-px
              w-full
              bg-[var(--color-rule)]
            "
          />

          <div
            className="
              mt-8
              text-sm
              text-[var(--color-ink-low)]
            "
          >
            Financial Stability Score
          </div>
        </div>
      </div>

      <RiskSummary
        scorecard={scorecard}
      />
      

      <DimensionScores
        scorecard={scorecard}
      />

      <FinancialInsights
        scorecard={scorecard}
      />

      <ChatPanel
        documentId={
          scorecard.documentId
        }
      />
    </section>
  );
}

function RiskSummary({
  scorecard,
}: Props) {
  const risks =
    scorecard.risks || [];

  const high = risks.filter(
    (risk: any) =>
      risk.severity?.toLowerCase() ===
      "high"
  ).length;

  const medium = risks.filter(
    (risk: any) =>
      risk.severity?.toLowerCase() ===
      "medium"
  ).length;

  const low = risks.filter(
    (risk: any) =>
      risk.severity?.toLowerCase() ===
      "low"
  ).length;

    const metrics =
    scorecard.metrics || [];

    const positive = Math.max(
      0,
      metrics.length -
        risks.length
    );

  const cards = [
    {
      label: "HIGH RISK",
      value: high,
    },
    {
      label: "MEDIUM",
      value: medium,
    },
    {
      label: "LOW",
      value: low,
    },
    {
      label: "POSITIVE",
      value: positive,
    },
  ];

  return (
    <section className="mt-16">
      <div className="grid md:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="
              bg-[var(--color-surface)]
              border
              border-[var(--color-rule)]
              rounded-[24px]
              p-8
              transition-all
              duration-300
              hover:border-[var(--color-rule-strong)]
            "
          >
            <p
              className="
                label-wide
                mb-4
              "
            >
              {card.label}
            </p>

            <div
              className="
                display
                text-6xl
              "
            >
              {card.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DimensionScores({
  scorecard,
}: Props) {
  if (
    !scorecard.dimensionScores
  ) {
    return null;
  }

  const cards = [
    {
      label: "LIQUIDITY",
      value:
        scorecard.dimensionScores
          .liquidity,
    },
    {
      label: "LEVERAGE",
      value:
        scorecard.dimensionScores
          .leverage,
    },
    {
      label: "PROFITABILITY",
      value:
        scorecard.dimensionScores
          .profitability,
    },
    {
      label: "EFFICIENCY",
      value:
        scorecard.dimensionScores
          .efficiency,
    },
    {
      label: "GROWTH",
      value:
        scorecard.dimensionScores
          .growth,
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex items-center gap-3 mb-8">
        <span className="label-wide">
          FINANCIAL DIMENSIONS
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="
              bg-[var(--color-surface)]
              border
              border-[var(--color-rule)]
              rounded-[24px]
              p-6
              text-center
            "
          >
            <p className="label-wide mb-4">
              {card.label}
            </p>

            <div
              className="
                display
                text-7xl
              "
            >
              {card.value}
            </div>

            <p
              className="
                mt-2
                text-xs
                text-[var(--color-ink-low)]
              "
            >
              /100
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}