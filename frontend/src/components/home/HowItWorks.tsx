export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Extract",
      description:
        "Annual reports, earnings filings and financial statements are parsed into structured financial data.",
    },
    {
      number: "02",
      title: "Analyze",
      description:
        "Financial ratios, growth trends, margins, leverage and liquidity metrics are calculated automatically.",
    },
    {
      number: "03",
      title: "Assess Risk",
      description:
        "Debt, cash flow, governance, profitability and operational risks are identified and scored.",
    },
    {
      number: "04",
      title: "Retrieve",
      description:
        "Hybrid RAG retrieves supporting evidence directly from the report for grounded explanations.",
    },
    {
      number: "05",
      title: "Verdict",
      description:
        "A financial health summary, findings and investment-focused insights are generated.",
    },
  ];

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
            HOW IT WORKS
          </span>

          <span className="label-wide hidden md:block">
            FINANCIAL INTELLIGENCE PIPELINE
          </span>
        </div>

        <div className="max-w-2xl mb-10">
          <h2
            className="
              display
              text-[clamp(3rem,5vw,5rem)]
              leading-[0.92]
              tracking-[-0.04em]
              mb-8
            "
          >
            One report.
            <br />
            Hundreds of signals.
          </h2>

          <p
            className="
              text-[19px]
              leading-relaxed
              text-[var(--color-ink-mid)]
              max-w-3xl
            "
          >
            FinSight transforms unstructured
            financial documents into metrics,
            risks, evidence-backed findings,
            and a final investment verdict.
          </p>
        </div>

        <div
          className="
            grid
            md:grid-cols-3
            xl:grid-cols-3
            gap-7
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative

                min-h-[290px]

                bg-[rgba(8,8,8,0.75)]

                backdrop-blur-sm

                border
                border-[rgba(255,255,255,0.06)]

                p-8

                overflow-hidden

                transition-all
                duration-500
                ease-out

                hover:-translate-y-2
                hover:scale-[1.02]

                hover:border-[rgba(200,109,70,0.35)]

                hover:shadow-[0_30px_80px_rgba(0,0,0,0.60)]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  left-0

                  h-[2px]
                  w-0

                  bg-[var(--color-accent)]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                  duration-700

                  bg-[radial-gradient(circle_at_top_left,rgba(200,109,70,0.12),transparent_65%)]
                "
              />

              <div className="relative z-10 h-full flex flex-col">
                <div
                  className="
                    text-[var(--color-accent)]
                    text-sm
                    italic
                    mb-6
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    display

                    text-[36px]
                    leading-none

                    mb-6

                    transition-all
                    duration-500

                    group-hover:text-white
                    group-hover:translate-x-1
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-[15px]
                    leading-7

                    text-[var(--color-ink-mid)]

                    transition-colors
                    duration-500

                    group-hover:text-[var(--color-ink)]
                  "
                >
                  {step.description}
                </p>

                <div className="mt-auto pt-8">
                  <div
                    className="
                      h-px
                      w-8

                      bg-[var(--color-rule)]

                      transition-all
                      duration-500

                      group-hover:w-16
                      group-hover:bg-[var(--color-accent)]
                    "
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}