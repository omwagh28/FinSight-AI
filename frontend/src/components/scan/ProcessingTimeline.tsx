interface Props {
  stage: string;
}

const steps = [
  "uploading",
  "extracting",
  "metrics",
  "risks",
  "verdict",
];

export default function ProcessingTimeline({
  stage,
}: Props) {
  const activeIndex =
    steps.indexOf(stage);

  return (
    <div className="mt-10 space-y-4">
      {steps.map((step, index) => {
        const active =
          index <= activeIndex;

        return (
          <div
            key={step}
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className={`
                h-2
                w-2
                rounded-full

                ${
                  active
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-rule)]"
                }
              `}
            />

            <span
              className={`
                label

                ${
                  active
                    ? "text-[var(--color-ink)]"
                    : ""
                }
              `}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}