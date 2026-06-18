export type ScanStage =
  | "idle"
  | "uploading"
  | "extracting"
  | "metrics"
  | "risks"
  | "verdict"
  | "completed"
  | "failed";

export interface ScanResult {
  score: number;

  verdict: string;

  findings: any[];

  metrics: any[];

  risks: any[];

  documentId: string;
}