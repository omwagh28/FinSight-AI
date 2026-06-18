import TryNowButton from "@/components/ui/TryNowButton";

type FooterProps = {
  showCTA?: boolean;
};

export default function Footer({
  showCTA = false,
}: FooterProps) {
  return (
    <footer className="mt-40">

      {showCTA && (
        <>
          {/* Top Divider */}

          <div className="section-divider" />

          {/* CTA Section */}

          <section className="py-40">
            <div className="container-xl text-center">
              <p className="label-wide mb-6">
                READY WHEN YOU ARE
              </p>

              <h2
                className="
                  display
                  text-[clamp(3rem,6vw,6rem)]
                  leading-[0.92]
                  mb-8
                "
              >
                Upload a report.
                <br />
                <span className="display-italic">
                  Get the verdict.
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-[var(--color-ink-mid)]
                  mb-14
                "
              >
                Financial intelligence built for
                investors. Surface risks, uncover
                hidden signals, and understand a
                company before committing capital.
              </p>

              <TryNowButton />
            </div>
          </section>

          {/* Bottom Divider */}

          <div className="section-divider" />
        </>
      )}

      {/* Footer Bar */}

      <div className="container-xl">
        <div
          className="
            py-10

            flex
            flex-col
            md:flex-row

            items-start
            md:items-center

            justify-between

            gap-8
          "
        >
          {/* Left */}

          <div>
            <div className="display text-2xl mb-2">
              FinSight AI
            </div>
          </div>

          {/* Center */}

          <div
            className="
              text-m
              text-[var(--color-ink-mid)]
              max-w-xl
            "
          >
            Not investment advice. FinSight
            provides financial document
            analysis and investment research
            assistance. All findings should be
            independently verified.
          </div>

          {/* Right */}

          <div
            className="
              text-right

              text-m
              text-[var(--color-ink-low)]
            "
          />
        </div>
      </div>
    </footer>
  );
}