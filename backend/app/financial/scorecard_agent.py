# Path: backend/app/financial/scorecard_agent.py

import json

from app.core.gemini import client


async def generate_scorecard_from_evidence(
    evidence_chunks: list[str],
):
    evidence = "\n\n".join(
        evidence_chunks[:30]
    )

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
You are a senior financial analyst.

Use ONLY the evidence provided.

Return ONLY valid JSON.

IMPORTANT:

Assessment values MUST be one of:

excellent
strong
good
moderate
weak
poor

Do NOT leave assessment fields empty.

Generate:

VERDICT RULES

- Maximum 40 words
- Maximum 2 sentences
- Executive summary style

FINDINGS RULES

- Return EXACTLY 5 findings
- Each finding must contain:
  - title
  - value
  - description

- Description maximum 15 words

RISK RULES

- Return EXACTLY 5 risks
- Each risk must contain:
  - name
  - severity
  - description

- severity must be:
  High
  Medium
  Low

Return EXACTLY:

{{
  "verdict": "",

  "findings": [
      {{
          "title": "",
          "value": "",
          "description": ""
      }}
  ],

  "metrics": [
      {{
          "name": "",
          "value": ""
      }}
  ],

  "risks": [
      {{
          "name": "",
          "severity": "",
          "description": ""
      }}
  ],

  "assessment": {{
      "liquidity": "moderate",
      "leverage": "moderate",
      "profitability": "moderate",
      "efficiency": "moderate",
      "growth": "moderate"
  }}
}}

EVIDENCE:

{evidence}
"""
        )

    except Exception as e:

        print(
            f"GEMINI ERROR: {e}"
        )

        return {
            "success": False,
            "errorType": "llm_unavailable",
            "message":
            "AI analysis service is temporarily unavailable. Please try again in a few minutes."
        }

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

    try:

        return json.loads(
            cleaned
        )

    except Exception as e:
        print(
            f"SCORECARD PARSE ERROR: {e}"
        )

        return {
            "verdict":
            "Unable to generate scorecard.",

            "findings": [],

            "metrics": [],

            "risks": [],

            "assessment": {
                "liquidity": "moderate",
                "leverage": "moderate",
                "profitability": "moderate",
                "efficiency": "moderate",
                "growth": "moderate",
            },

            "healthScore": 0,
        }