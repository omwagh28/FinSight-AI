from app.tools.retrieval_tool import (
    retrieval_tool,
)

from app.tools.metrics_lookup_tool import (
    metrics_lookup_tool,
)

from app.tools.risk_lookup_tool import (
    risk_lookup_tool,
)

from app.core.gemini import (
    client,
)

from app.utils.answer_formatter import (
    format_answer,
)

from app.tools.facts_lookup_tool import (
    facts_lookup_tool,
)

from app.tools.scorecard_lookup_tool import (
    scorecard_lookup_tool,
)

from google.genai.errors import (
    ServerError,
    ClientError,
)


async def financial_chat_agent(
    document_id: str,
    question: str,
):
    retrieved_chunks = await retrieval_tool(
        document_id,
        question,
    )

    if not retrieved_chunks:
        return (
            "The uploaded report does not contain enough information to answer that question."
        )

   

    metrics = await metrics_lookup_tool(
        document_id
    )

    risks = await risk_lookup_tool(
        document_id
    )


    facts = await facts_lookup_tool(
        document_id
    )

    scorecard = await scorecard_lookup_tool(
        document_id
    )

    context = "\n\n".join(
        retrieved_chunks
    )

    

    try:

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
                You are FinSight AI.

                You answer questions ONLY using information contained in the uploaded financial report.

                Your primary objective is to help users understand:

                - financial performance
                - revenue trends
                - profitability
                - liquidity
                - debt and leverage
                - risks
                - operational metrics
                - growth
                - investment implications

                Formatting rules:

                - Use clean bullet points when appropriate.
                - Never use markdown (**).
                - Never use markdown headers (#).
                - Keep answers concise and professional.
                - Reference report metrics and risks whenever possible.
                - Do not invent facts.
                - Do not use external knowledge.

                IMPORTANT RULES:

                1. If the question can be reasonably answered using the uploaded report, answer it.

                Examples:
                - Should I invest?
                - Is this company financially healthy?
                - Is debt risk high?
                - What are the biggest concerns?
                - Is liquidity a problem?
                - Would this be considered a risky investment?

                These should be answered using the report evidence.

                2. If the question asks about a company, person, product, market, or topic that is not mentioned in the uploaded report, respond exactly:

                "The uploaded report does not contain information needed to answer that question."

                Examples:
                - Should I invest in Microsoft?
                - Compare this company with Tesla.
                - What is Nvidia's valuation?
                - Who is Warren Buffett?

                3. If the report contains insufficient evidence for the answer, respond exactly:

                "The uploaded report does not contain enough information to answer that question."

                QUESTION:
                {question}

                FACTS:
                {facts}

                METRICS:
                {metrics}

                RISKS:
                {risks}

                SCORECARD:
                {scorecard}

                DOCUMENT EVIDENCE:
                {context}
                """
        )

        return format_answer(
            response.text
        )

    except (ServerError, ClientError):

        return (
            "AI chat service is temporarily unavailable. "
            "Please try again in a few minutes."
        )

    except Exception :


        return (
            "Unexpected error occurred while generating the answer."
        )