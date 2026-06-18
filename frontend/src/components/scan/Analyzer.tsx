// Path: src/components/scan/Analyzer.tsx

"use client";

import { useEffect, useState } from "react";

import ProcessingTimeline from "./ProcessingTimeline";
import FinancialResult from "./FinancialResult";

import { uploadDocument } from "@/services/upload.service";
import { analyzeText } from "@/services/text-analysis.service";
import {
  analyzeUrl,
} from "@/services/url-analysis.service";

type Tab = "text" | "pdf" | "url";

type FinancialScorecard = {
  healthScore: number;

  dimensionScores?: {
    liquidity: number;
    leverage: number;
    profitability: number;
    efficiency: number;
    growth: number;
  };

  verdict: string;
  findings: any[];
  metrics: any[];
  risks: any[];
  documentId: string;
  processingTime?: number;
};

const TOTAL_STEPS = 5;

export default function Analyzer() {
  const [activeTab, setActiveTab] =
    useState<Tab>("pdf");

  const [processing, setProcessing] =
    useState(false);

  const [step, setStep] =
    useState(0);

  const [scorecard, setScorecard] =
    useState<FinancialScorecard | null>(null);

  const [error, setError] =
  useState<string | null>(null);  

  const [file, setFile] =
    useState<File | null>(null);

  const [textInput, setTextInput] =
    useState("");

  const [urlInput, setUrlInput] =
    useState("");

  useEffect(() => {
    if (!processing) return;

    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= TOTAL_STEPS) {
          clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [processing]);

  async function startAnalysis() {
    if (activeTab === "pdf" && !file) {
      alert("Please upload a PDF first.");
      return;
    }

    try {
      setError(null);
      setScorecard(null);
      setProcessing(true);
      setStep(0);

      let result:
      | FinancialScorecard
      | undefined;

      if (activeTab === "pdf" && file) {
        result = await uploadDocument(file);

        if (
          (result as any).success === false
        ) {
          setError(
            (result as any).message ||
            "Unsupported document."
          );

          return;
        }

      } else if (activeTab === "text") {

          result = await analyzeText(
            textInput
          );

          if (
            (result as any).success === false
          ) {
            setError(
              (result as any).message ||
              "Document does not contain enough financial information."
            );

            return;
          }
        }
          else if (activeTab === "url") {

            result = await analyzeUrl(
              urlInput
            );

            if (
              (result as any).success === false
            ) {
              setError(
                (result as any).message ||
                "Unable to analyze URL."
              );

              return;
            }
          }

      if (result) {
        setScorecard(result);
      }
    } catch (error: any) {

        console.error(error);

        setError(
          error?.message ||
          "Unable to connect to backend."
        );
      } finally {
      setProcessing(false);
    }
  }

  const currentStage =
    step === 0
      ? "uploading"
      : step === 1
      ? "extracting"
      : step === 2
      ? "metrics"
      : step === 3
      ? "risks"
      : step === 4
      ? "verdict"
      : "completed";

  return (
    <section className="mt-14 border-t border-[var(--color-rule)] pt-8">
      {/* Upload Section Always Visible */}

      <div
        className="
          border
          border-[var(--color-rule)]
          rounded-[32px]
          p-6
          bg-[var(--color-surface)]
        "
      >
        <div className="flex items-center gap-8 mb-8">
          <button
            onClick={() => setActiveTab("text")}
            className={`label-wide pb-2 border-b transition-colors ${
              activeTab === "text"
                ? "border-[var(--color-accent)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-ink-low)]"
            }`}
          >
            PASTE TEXT
          </button>

          <button
            onClick={() => setActiveTab("pdf")}
            className={`label-wide pb-2 border-b transition-colors ${
              activeTab === "pdf"
                ? "border-[var(--color-accent)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-ink-low)]"
            }`}
          >
            UPLOAD PDF
          </button>

          <button
            onClick={() => setActiveTab("url")}
            className={`label-wide pb-2 border-b transition-colors ${
              activeTab === "url"
                ? "border-[var(--color-accent)] text-[var(--color-ink)]"
                : "border-transparent text-[var(--color-ink-low)]"
            }`}
          >
            PASTE URL
          </button>
        </div>

        {activeTab === "text" && (
          <textarea
            value={textInput}
            onChange={(e) =>
              setTextInput(e.target.value)
            }
            placeholder="Paste annual report, earnings filing, investor presentation..."
            className="
              w-full
              min-h-[240px]
              bg-transparent
              border
              border-[var(--color-rule)]
              rounded-[24px]
              p-4
              outline-none
              resize-none
            "
          />
        )}

        {activeTab === "pdf" && (
          <label
            className="
              border
              border-dashed
              border-[var(--color-rule)]
              rounded-[28px]
              min-h-[240px]

              flex
              flex-col
              items-center
              justify-center

              cursor-pointer
              gap-4

              transition-all
              duration-300

              hover:border-[var(--color-rule-strong)]
            "
          >
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) =>
                setFile(
                  e.target.files?.[0] || null
                )
              }
            />

            <div className="display text-4xl">
              Upload Report
            </div>

            <p className="text-[var(--color-ink-mid)]">
              Annual reports, filings, investor
              presentations and statements
            </p>

            {file && (
              <div
                className="
                  mt-3
                  px-4
                  py-2
                  rounded-full
                  bg-[var(--color-accent-soft)]
                  text-[var(--color-accent)]
                "
              >
                {file.name}
              </div>
            )}
          </label>
        )}

        {activeTab === "url" && (
          <input
            type="url"
            value={urlInput}
            onChange={(e) =>
              setUrlInput(e.target.value)
            }
            placeholder="https://example.com/report"
            className="
              w-full
              border
              border-[var(--color-rule)]
              rounded-[20px]
              bg-transparent
              px-5
              py-4
              outline-none
            "
          />
        )}

        <div className="mt-8 flex justify-end">
          <button
            onClick={startAnalysis}
            disabled={processing}
            className="
              try-now
            "
          >
            <span
              className="try-now-border"
              aria-hidden
            />

            <span className="try-now-inner">
              <span className="display-italic text-xl">
                {processing
                  ? "Processing..."
                  : "Analyze Report"}
              </span>

              <span className="text-[var(--color-accent)]">
                ↗
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Processing Timeline */}

      {processing && (
        <div
          className="
            mt-8
            border
            border-[var(--color-rule)]
            rounded-[32px]
            p-8
            bg-[var(--color-surface)]
          "
        >
          <p className="label-wide mb-4">
            FINANCIAL INTELLIGENCE PIPELINE
          </p>

          <h3
            className="
              display
              text-4xl
              mb-8
            "
          >
            Processing Report
          </h3>

          <ProcessingTimeline
            stage={currentStage}
          />
        </div>
      )}

    {/* Error */}

      {error && (
        <div
          className="
            mt-8
            border-l-4
            border-red-500
            bg-red-500/5
            rounded-r-[16px]
            px-5
            py-4
          "
        >
          <p className="text-red-400">
            ⚠ {error}
          </p>
        </div>
      )}

      {/* Results */}

      {scorecard &&
        !error && (
          <FinancialResult
            scorecard={scorecard}
          />
      )}
            

  
    </section>
  );
}