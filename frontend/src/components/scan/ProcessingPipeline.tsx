// Path: src/components/scan/ProcessingPipeline.tsx

interface ProcessingPipelineProps {
  currentStep: number;
}

const steps = [
  "Parsing Document",
  "Extracting Financial Data",
  "Building Knowledge Base",
  "Calculating Financial Ratios",
  "Detecting Risks",
  "Generating Financial Verdict",
];

export default function ProcessingPipeline({
  currentStep,
}: ProcessingPipelineProps) {
  return (
    <div className="mt-12 border-l-2 border-[var(--accent)] pl-6">
      <div className="grid gap-6">
        {steps.map((step, index) => {
          const active = index <= currentStep;

          return (
            <div key={step}>
              <div className="flex items-center gap-4">
                <span
                  className={`label ${
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--ink-low)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className={
                    active
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-low)]"
                  }
                >
                  {step}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}