from app.core.document_store import (
    DOCUMENTS,
)


async def facts_lookup_tool(
    document_id: str,
):
    document = DOCUMENTS.get(
        document_id
    )

    if not document:
        return {}

    return document.get(
        "facts",
        []
    )