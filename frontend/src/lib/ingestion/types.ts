export type SourceType =
  | "pdf"
  | "text"
  | "url";

export type DocumentType =
  | "annual_report"
  | "10k"
  | "10q"
  | "investor_presentation"
  | "financial_statement"
  | "unknown";

export interface DocumentContent {
  sourceType: SourceType;

  title?: string;

  content: string;

  metadata?: {
    pageCount?: number;
    url?: string;
    uploadedAt?: string;
  };
}

export interface ClassificationResult {
  isFinancial: boolean;

  documentType: DocumentType;

  confidence: number;
}

/* =========================
   SCAN TYPES
========================= */

export interface Finding {
  title: string;
  value: string;
  description: string;
}

export interface Metric {
  name: string;
  value: string;
}

export interface Risk {
  name: string;
  severity: string;
  description: string;
}

export interface FinancialScorecard {
  success?: boolean;

  verdict: string;

  findings: Finding[];

  metrics: Metric[];

  risks: Risk[];

  healthScore: number;

  dimensionScores: {
    liquidity: number;
    leverage: number;
    profitability: number;
    efficiency: number;
    growth: number;
  };

  error?: string;
}

/* =========================
   COMPARE TYPES
========================= */

export interface ComparisonMetric {
  metric: string;

  companyA: string;

  companyB: string;
}

export interface ComparisonResult {
  success: boolean;

  companyA: string;

  companyB: string;

  scoreA: number;

  scoreB: number;

  verdict: string;

  metrics: ComparisonMetric[];

  companyAInsights: string[];

  companyBInsights: string[];

  companyARisks: string[];

  companyBRisks: string[];

  error?: string;
}