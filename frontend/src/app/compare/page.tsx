import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CompareAnalyzer from "@/components/compare/CompareAnalyzer";

export default function ComparePage() {
  return (
    <>
      <Header active="compare" />

      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-32">

        <section className="pt-24">

          <div className="mb-8">
            <span
              className="
                px-4
                py-2

                rounded-full

                border
                border-[var(--color-rule)]

                text-sm
                uppercase
                tracking-[0.25em]

                text-[var(--ink-mid)]
              "
            >
              Financial Comparison Engine
            </span>
          </div>

          <h1
            className="
              display

              text-[clamp(3rem,7vw,6.5rem)]

              leading-[0.9]

              max-w-6xl
            "
          >
            Know which company
            <br />
            deserves your capital.
          </h1>

          <p
            className="
              mt-8

              max-w-3xl

              text-lg
              md:text-xl

              text-[var(--ink-mid)]

              leading-relaxed
            "
          >
            Compare financial reports side by side.
            Uncover growth trends, debt exposure,
            profitability signals and operational risks
            before making investment decisions.
          </p>

          <div
            className="
              mt-12

              grid
              md:grid-cols-3

              gap-4

              max-w-4xl
            "
          >
            <div
              className="
                border
                border-[var(--color-rule)]

                rounded-[24px]

                p-5
              "
            >
              <p className="label-wide">
                REVENUE
              </p>

              <p className="mt-2 text-[var(--ink-mid)]">
                Compare growth and performance.
              </p>
            </div>

            <div
              className="
                border
                border-[var(--color-rule)]

                rounded-[24px]

                p-5
              "
            >
              <p className="label-wide">
                RISKS
              </p>

              <p className="mt-2 text-[var(--ink-mid)]">
                Identify leverage and liquidity concerns.
              </p>
            </div>

            <div
              className="
                border
                border-[var(--color-rule)]

                rounded-[24px]

                p-5
              "
            >
              <p className="label-wide">
                VERDICT
              </p>

              <p className="mt-2 text-[var(--ink-mid)]">
                Receive an evidence-based comparison.
              </p>
            </div>
          </div>

        </section>

        <CompareAnalyzer />

      </main>
      <div className="section-divider" />

      <Footer showCTA={false} />
    </>
  );
}