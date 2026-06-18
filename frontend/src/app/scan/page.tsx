// Path: src/app/scan/page.tsx

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analyzer from "@/components/scan/Analyzer";

export default function ScanPage() {
  return (
    <>
      <Header active="scan" />

      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
        <section className="pt-20">
          <p className="label mb-6">
            analyze a financial document
          </p>

          <h1 className="display text-[clamp(2rem,5vw,4rem)] leading-[1]">
            Paste it, upload it,
            <br />
            or give us a filing.
          </h1>

          <p className="mt-6 max-w-2xl text-[var(--ink-mid)]">
            Annual reports, earnings filings,
            investor presentations, and financial
            statements.
          </p>
        </section>

        <Analyzer />
      </main>

      <footer
        className="
          border-t
          border-[var(--color-rule)]
          mt-32
          py-8
        "
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex justify-between items-center">
            <span className="text-sm text-[var(--color-ink-low)]">
              FinSight AI
            </span>

            <span className="text-xs text-[var(--color-ink-low)]">
              Financial Intelligence Platform
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}