# Path: backend/app/prompts/financial_analysis_prompt.py

FINANCIAL_ANALYSIS_PROMPT = """
You are a senior financial analyst.

Analyze the financial document.

Return ONLY valid JSON.

Schema:

{
  "score": 82,
  "verdict": "...",
  "findings": [
    {
      "id": 1,
      "text": "..."
    }
  ],
  "metrics": [
    {
      "name": "...",
      "value": "..."
    }
  ],
  "risks": [
    {
      "name": "...",
      "severity": "low|medium|high|critical",
      "description": "..."
    }
  ],
  "sections": [
    {
      "id": "...",
      "title": "...",
      "summary": "..."
    }
  ]
}
"""