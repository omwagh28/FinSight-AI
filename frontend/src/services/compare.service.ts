import { apiFetch } from "./api";

import {
  ComparisonResult,
} from "@/lib/ingestion/types";

export async function compareReports(
  payload: {
    companyA: string;
    companyB: string;
  }
): Promise<ComparisonResult> {
  return apiFetch<ComparisonResult>(
    "/api/v1/compare",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        payload
      ),
    }
  );
}