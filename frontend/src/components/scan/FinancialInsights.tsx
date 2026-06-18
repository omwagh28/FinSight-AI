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
  findings?: any[];
  metrics?: any[];
  risks?: any[];
  documentId: string;
};

interface Props {
  scorecard: FinancialScorecard;
}

export default function FinancialInsights({
  scorecard,
}: Props) {
  return (
    <section className="mt-24 space-y-24">
      <RiskAnalysis scorecard={scorecard} />

      <MetricsAnalysis scorecard={scorecard} />
    </section>
  );
}

function RiskAnalysis({
  scorecard,
}: Props) {
  const risks =
    scorecard.risks || [];

  if (risks.length === 0) {
    return null;
  } 
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <span className="label-wide">
          RISK ANALYSIS
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {(scorecard.risks || []).map(
          (risk: any, index: number) => (
            <div
              key={`${risk.name}-${index}`}
              className="
                bg-[var(--color-surface)]

                border
                border-[var(--color-rule)]

                rounded-[32px]

                p-10

                transition-all
                duration-300

                hover:border-[var(--color-rule-strong)]
              "
            >
              <div className="flex justify-between items-start mb-8">
                <h3
                  className="
                    display
                    text-[2.4rem]
                    leading-[1]
                  "
                >
                  {risk.name}
                </h3>

                <span
                  className="
                    label-wide

                    text-[var(--color-accent)]
                  "
                >
                  {risk.severity}
                </span>
              </div>

              <p
                className="
                  text-xl
                  leading-10

                  text-[var(--color-ink-mid)]
                "
              >
                {risk.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function MetricsAnalysis({
  scorecard,
}: Props) {
  const metrics =
    scorecard.metrics || [];

  if (metrics.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <span className="label-wide">
          FINANCIAL METRICS
        </span>

        <span className="h-px flex-1 bg-[var(--color-rule)]" />
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {(scorecard.metrics || []).map(
          (
            metric: any,
            index: number
          ) => (
            <div
              key={`${metric.name}-${index}`}
              className="
                bg-[var(--color-surface)]

                border
                border-[var(--color-rule)]

                rounded-[32px]

                p-10

                transition-all
                duration-300

                hover:border-[var(--color-rule-strong)]
              "
            >
              <div
                className="
                  label-wide
                  mb-5
                "
              >
                METRIC
              </div>

              <div
                className="
                  display
                  text-5xl
                  mb-5
                "
              >
                {metric.value}
              </div>

              <div
                className="
                  text-1xl
                  leading-relaxed

                  text-[var(--color-ink)]
                "
              >
                {metric.name}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}