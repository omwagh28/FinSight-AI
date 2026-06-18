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
      <div 
        className="
          relative
          z-10
          max-w-[1100px]
          mx-auto
          px-8
        ">
        <div className="section-divider" />

        <div className="flex items-center justify-between mb-8">
          <span className="label-wide">
            RISK FRAMEWORK
          </span>

          <span className="label-wide hidden md:block">
            8 RISK CATEGORIES
          </span>
        </div>

        <div className="max-w-4xl mb-16">
          <h2
            className="
              display
              text-[clamp(2.6rem,4.5vw,4.8rem)]
              leading-[0.94]
              mb-6
            "
          >
            Risks hidden
            <br />
            in plain sight.
          </h2>

          <p
            className="
              text-[18px]
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

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="
                group
                bg-[var(--color-surface)]
                border
                border-[var(--color-rule)]

                p-6

                transition-all
                duration-500

                hover:-translate-y-1.5
                hover:border-[var(--color-rule-strong)]
              "
            >
              <h3 className="display text-[1.65rem] mb-4">
                {risk.title}
              </h3>

              <p
                className="
                  text-[14px]
                  leading-6
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