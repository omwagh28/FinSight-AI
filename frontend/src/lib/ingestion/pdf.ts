import { DocumentContent } from "./types";

export async function ingestPdf(
  file: File
): Promise<DocumentContent> {
  throw new Error(
    "PDF ingestion not implemented yet."
  );
}