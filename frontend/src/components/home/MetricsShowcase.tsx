const metrics = [
  {
    value: "ROE",
    title: "Return on Equity",
    description:
      "Measures how much profit is generated for every ₹1 invested by shareholders.",
    strong: "15%+",
    warning: "< 8%",
  },
  {
    value: "ROA",
    title: "Return on Assets",
    description:
      "Shows how efficiently the company converts its total assets into earnings.",
    strong: "8%+",
    warning: "< 3%",
  },
  {
    value: "D/E",
    title: "Debt to Equity",
    description:
      "Indicates how heavily the business relies on debt to finance growth.",
    strong: "< 1.0",
    warning: "> 2.0",
  },
  {
    value: "CR",
    title: "Current Ratio",
    description:
      "Measures the company's ability to meet short-term obligations and liabilities.",
    strong: "1.5 - 3.0",
    warning: "< 1.0",
  },
  {
    value: "OM",
    title: "Operating Margin",
    description:
      "Reveals how much profit remains after operating expenses are paid.",
    strong: "15%+",
    warning: "< 5%",
  },
  {
    value: "FCF",
    title: "Free Cash Flow",
    description:
      "Cash available after operations and capital investments are funded.",
    strong: "Positive",
    warning: "Negative",
  },
];

export default function MetricsShowcase() {
  return (
    <section className="section">
      <div 
         className="
          relative
          z-10
          max-w-[1100px]
          mx-auto
          px-8
        "
      >
      
        <div className="section-divider" />

        <div className="flex items-center justify-between mb-10">
          <span className="label-wide">
            FINANCIAL METRICS
          </span>

          <span className="label-wide hidden md:block">
            INVESTOR SIGNALS
          </span>
        </div>

        <div className="max-w-5xl mb-20">
          <h2
            className="
              display
              text-[clamp(3rem,5vw,5.5rem)]
              leading-[0.94]
              mb-8
            "
          >
            Numbers that
            <br />
            actually matter.
          </h2>

          <p
            className="
              text-xl
              leading-relaxed
              max-w-3xl
              text-[var(--color-ink-mid)]
            "
          >
            Beyond revenue and profit.
            FinSight tracks the metrics
            professional investors use to
            evaluate business quality,
            efficiency and financial health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="
                group

                bg-[var(--color-surface)]
                border
                border-[var(--color-rule)]

                p-10

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[var(--color-rule-strong)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              "
            >
              <div
                className="
                  display
                  text-6xl
                  mb-5

                  transition-all
                  duration-500

                  group-hover:text-white
                "
              >
                {metric.value}
              </div>

              <h3
                className="
                  text-3xl
                  mb-5
                  text-[var(--color-ink)]
                "
              >
                {metric.title}
              </h3>

              <p
                className="
                  text-[15px]
                  leading-7
                  text-[var(--color-ink-mid)]
                  mb-8
                  min-h-[84px]
                "
              >
                {metric.description}
              </p>

              <div
                className="
                  h-px
                  w-full
                  bg-[var(--color-rule)]
                  mb-8
                "
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="label-wide mb-2">
                    STRONG
                  </div>

                  <div
                    className="
                      text-xl
                      text-[var(--color-ink)]
                    "
                  >
                    {metric.strong}
                  </div>
                </div>

                <div>
                  <div className="label-wide mb-2">
                    WARNING
                  </div>

                  <div
                    className="
                      text-xl
                      text-[var(--color-accent)]
                    "
                  >
                    {metric.warning}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}