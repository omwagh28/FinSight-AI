import { API_BASE_URL } from "./api";

export async function analyzeText(
  text: string
) {
  const response =
    await fetch(
      `${API_BASE_URL}/api/v1/analyze-text`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          text,
        }),
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    throw new Error(
      data.message ||
      "Text analysis failed."
    );
  }

  return data;
}