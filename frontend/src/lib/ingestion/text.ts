import { DocumentContent } from "./types";

export async function ingestText(
  text: string
): Promise<DocumentContent> {
  return {
    sourceType: "text",
    content: text,
    metadata: {
      uploadedAt: new Date().toISOString(),
    },
  };
}