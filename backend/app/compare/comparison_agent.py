import json

from app.core.gemini import (
    client,
)

from google.genai.errors import (
    ServerError,
    ClientError,
)


async def compare_companies(
    evidence_a: list[str],
    evidence_b: list[str],
):
    context_a = "\n\n".join(
        evidence_a
    )

    context_b = "\n\n".join(
        evidence_b
    )

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",

            contents=f"""
You are a senior financial analyst.

Compare Company A and Company B.

Evaluation Criteria:

1. Revenue Growth
2. Profitability
3. Cash Flow
4. Liquidity
5. Debt & Leverage
6. Financial Risks
7. Future Outlook

SCORING RULES:

- Scores MUST be between 0 and 100.
- 90-100 = Excellent
- 75-89 = Strong
- 60-74 = Moderate
- 40-59 = Weak
- 0-39 = Poor

IMPORTANT:

- Return ONLY valid JSON.
- Do NOT return markdown.
- Do NOT explain outside JSON.
- Metrics must be SHORT values only.
- Detailed reasoning belongs ONLY inside Insights and Risks.
- Return exactly 5 metrics.
- Metrics should be concise and UI-friendly.

Metric Examples:

GOOD:

{{
  "metric": "Revenue Growth",
  "companyA": "+20%",
  "companyB": "+5%"
}}

{{
  "metric": "Debt",
  "companyA": "Low",
  "companyB": "High"
}}

BAD:

{{
  "metric": "Revenue Growth",
  "companyA": "Strong, with a 20% increase showing..."
}}

Return JSON in this format:

{{
  "scoreA": 0,
  "scoreB": 0,

  "verdict": "",

  "metrics": [
    {{
      "metric": "",
      "companyA": "",
      "companyB": ""
    }}
  ],

  "companyAInsights": [
    "",
    "",
    ""
  ],

  "companyBInsights": [
    "",
    "",
    ""
  ],

  "companyARisks": [
    "",
    ""
  ],

  "companyBRisks": [
    "",
    ""
  ]
}}

COMPANY A EVIDENCE:

{context_a}


COMPANY B EVIDENCE:

{context_b}
"""
        )

        cleaned = (
            response.text
            .replace(
                "```json",
                ""
            )
            .replace(
                "```",
                ""
            )
            .strip()
        )

        return json.loads(
            cleaned
        )

    except (ServerError, ClientError):

        return {
            "scoreA": 50,
            "scoreB": 50,

            "verdict":
            "AI comparison service is temporarily unavailable. Please try again in a few minutes.",

            "metrics": [],

            "companyAInsights": [],
            "companyBInsights": [],

            "companyARisks": [],
            "companyBRisks": [],
        }

    except Exception:

        return {
            "scoreA": 50,
            "scoreB": 50,

            "verdict":
            "Unexpected error occurred while comparing documents.",

            "metrics": [],

            "companyAInsights": [],
            "companyBInsights": [],

            "companyARisks": [],
            "companyBRisks": [],
        }