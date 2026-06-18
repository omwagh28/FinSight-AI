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
      <div className="container-xl">

        {/* Divider */}

        <div className="section-divider" />

        {/* Labels */}

        <div className="flex items-center justify-between mb-12">
          <span className="label-wide">
            HOW IT WORKS
          </span>

          <span className="label-wide hidden md:block">
            FINANCIAL INTELLIGENCE PIPELINE
          </span>
        </div>

        {/* Heading */}

        <div className="max-w-6xl mb-24">
          <h2
            className="
              display
              text-[clamp(3.5rem,6vw,6rem)]
              leading-[0.92]
              tracking-[-0.04em]
              mb-10
            "
          >
            One report.
            <br />
            Hundreds of signals.
          </h2>

          <p
            className="
              text-[22px]
              leading-relaxed
              text-[var(--color-ink-mid)]
              max-w-4xl
            "
          >
            FinSight transforms unstructured
            financial documents into metrics,
            risks, evidence-backed findings,
            and a final investment verdict.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-5
            gap-6
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative

                min-h-[340px]

                bg-[rgba(8,8,8,0.75)]

                backdrop-blur-sm

                border
                border-[rgba(255,255,255,0.06)]

                p-10

                overflow-hidden

                transition-all
                duration-500
                ease-out

                hover:-translate-y-3
                hover:scale-[1.02]

                hover:border-[rgba(200,109,70,0.35)]

                hover:shadow-[0_30px_80px_rgba(0,0,0,0.60)]
              "
            >
              {/* Accent Line */}

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

              {/* Glow */}

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

              {/* Content */}

              <div className="relative z-10 h-full flex flex-col">
                <div
                  className="
                    text-[var(--color-accent)]
                    text-sm
                    italic
                    mb-8
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    display

                    text-[42px]
                    leading-none

                    mb-8

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
                    text-[17px]
                    leading-8

                    text-[var(--color-ink-mid)]

                    transition-colors
                    duration-500

                    group-hover:text-[var(--color-ink)]
                  "
                >
                  {step.description}
                </p>

                {/* Bottom Indicator */}

                <div className="mt-auto pt-10">
                  <div
                    className="
                      h-px
                      w-10

                      bg-[var(--color-rule)]

                      transition-all
                      duration-500

                      group-hover:w-20
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