from app.rag.hybrid import hybrid_search

from app.core.document_store import (
    DOCUMENTS
)


async def retrieval_tool(
    document_id: str,
    question: str,
):
    document = DOCUMENTS.get(
        document_id
    )

    if not document:
        return []

    return hybrid_search(
        query=question,
        document_id=document_id,
        all_chunks=document["chunks"],
    )