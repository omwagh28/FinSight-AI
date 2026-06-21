#backend/app/ingestion/validation_agent.py

from app.ingestion.financial_density import (
    compute_financial_density,
)


MIN_FINANCIAL_SCORE = 10


async def validate_document(
    chunks: list[str],
):
    score = compute_financial_density(
        chunks
    )
    score = compute_financial_density(chunks)

    if score < MIN_FINANCIAL_SCORE:

        return {
            "accepted": False,
            "score": score,
            "reason":
            "Document does not contain enough financial information.",
        }

    return {
        "accepted": True,
        "score": score,
        "reason": "",
    }