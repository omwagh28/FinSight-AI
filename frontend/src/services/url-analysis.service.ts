const API_BASE_URL =
  "http://localhost:8000";

export async function analyzeUrl(
  url: string
) {
  const response =
    await fetch(
      `${API_BASE_URL}/api/v1/analyze-url`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          url,
        }),
      }
    );

  return response.json();
}