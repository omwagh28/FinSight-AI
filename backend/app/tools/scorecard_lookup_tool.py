from app.core.document_store import (
    DOCUMENTS,
)


async def scorecard_lookup_tool(
    document_id: str,
):
    document = DOCUMENTS.get(
        document_id
    )

    if not document:
        return {
            "score": 0,
            "verdict": "",
            "metrics": [],
            "risks": [],
        }

    return {
        "score":
        document.get(
            "score",
            0
        ),

        "verdict":
        document.get(
            "verdict",
            ""
        ),

        "metrics":
        document.get(
            "metrics",
            []
        ),

        "risks":
        document.get(
            "risks",
            []
        ),
    }