// Path: src/services/chat.service.ts

import { apiFetch } from "./api";

export interface ChatResponse {
  answer: string;
}

export async function askQuestion(
  documentId: string,
  question: string
): Promise<ChatResponse> {
  return apiFetch<ChatResponse>(
    "/api/v1/chat",
    {
      method: "POST",
      body: JSON.stringify({
        documentId,
        question,
      }),
    }
  );
}