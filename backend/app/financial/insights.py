# Path: backend/app/financial/insights.py

from app.core.gemini import client


async def generate_insights(
    metrics: list,
    risks: list,
):
    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
              You are a senior financial analyst.

              IMPORTANT:

              Return ONLY valid JSON.

              Do not add explanations.
              Do not add markdown.
              Do not add ```json.
              Do not add text before or after JSON.

              Metrics:
              {metrics}

              Risks:
              {risks}

              Return:

              {{
                "verdict": "",
                "findings": []
              }}
              """
        )

       
        return response.text

    except Exception as e:

    
        raise