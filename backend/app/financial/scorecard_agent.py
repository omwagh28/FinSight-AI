# Path: backend/app/financial/scorecard_agent.py

import json

from app.core.gemini import client


async def generate_scorecard_from_evidence(
    evidence_chunks: list[str],
):
    evidence = "\n\n".join(
        evidence_chunks[:15]
    )

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
You are a senior financial analyst.

Use ONLY the evidence provided.

Return ONLY valid JSON.

FIRST VALIDATE THE EVIDENCE.

A valid financial document should contain actual company financial information such as:

- Revenue
- Net Income
- Profit / Loss
- Cash Flow
- Assets
- Liabilities
- Debt
- Margins
- Growth Metrics
- Financial Statements

Documents such as:

- Resumes
- Job Descriptions
- Research Papers
- Legal Contracts
- Product Documentation

must NOT be treated as financial reports even if they contain finance-related terms.

If the evidence does not contain enough company financial information to generate a financial scorecard, return EXACTLY:

{{
  "success": false,
  "message": "This document is not a financial report."
}}

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

        result = json.loads(
            cleaned
        )

        if (
            isinstance(result, dict)
            and result.get("success") is False
        ):
            return result

        return result

    except Exception as e:

        print(
            f"SCORECARD PARSE ERROR: {e}"
        )

        return {
            "success": False,
            "message":
            "Unable to generate scorecard."
        }