const risks = [
  {
    title: "Debt Risk",
    desc: "Leverage pressure, refinancing exposure and solvency concerns.",
  },
  {
    title: "Liquidity Risk",
    desc: "Ability to meet short-term obligations and working capital health.",
  },
  {
    title: "Cash Flow Risk",
    desc: "Operating cash generation versus accounting profitability.",
  },
  {
    title: "Profitability Risk",
    desc: "Margin compression and declining earnings efficiency.",
  },
  {
    title: "Growth Risk",
    desc: "Revenue slowdown and weakening expansion trends.",
  },
  {
    title: "Governance Risk",
    desc: "Management quality, ownership and transparency signals.",
  },
  {
    title: "Operational Risk",
    desc: "Execution issues affecting long-term business performance.",
  },
  {
    title: "Market Risk",
    desc: "Industry conditions and macroeconomic exposure.",
  },
];

export default function RiskCategories() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="section-divider" />

        <div className="flex items-center justify-between mb-10">
          <span className="label-wide">
            RISK FRAMEWORK
          </span>

          <span className="label-wide hidden md:block">
            8 RISK CATEGORIES
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
            Risks hidden
            <br />
            in plain sight.
          </h2>

          <p
            className="
              text-xl
              leading-relaxed
              max-w-3xl
              text-[var(--color-ink-mid)]
            "
          >
            Every company carries hidden
            weaknesses. FinSight surfaces
            them before they become costly
            surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="
                group
                bg-[var(--color-surface)]
                border
                border-[var(--color-rule)]

                p-8

                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[var(--color-rule-strong)]
              "
            >
              <h3 className="display text-3xl mb-5">
                {risk.title}
              </h3>

              <p
                className="
                  text-[15px]
                  leading-7
                  text-[var(--color-ink-mid)]
                "
              >
                {risk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}