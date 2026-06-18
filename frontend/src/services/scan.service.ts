import { apiFetch } from "./api";

import {
  FinancialScorecard,
} from "@/lib/ingestion/types";

export async function scanDocument(
  payload: {
    content: string;
  }
): Promise<FinancialScorecard> {
  return apiFetch<FinancialScorecard>(
    "/api/v1/scan",
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );
}