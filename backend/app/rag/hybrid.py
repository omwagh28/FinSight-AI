#backend/app/rag/hybrid.py

from app.rag.retrieve import (
    retrieve_chunks,
)

from app.rag.bm25 import (
    bm25_search,
)

from app.rag.reranker import (
    rerank,
)


def hybrid_search(
    query: str,
    document_id: str,
    all_chunks: list[str],
):
    vector_results = retrieve_chunks(
        query=query,
        document_id=document_id,
        top_k=10,
    )

    bm25_results = bm25_search(
        query,
        all_chunks,
        top_k=10,
    )

    combined = []

    seen = set()

    for chunk in (
        vector_results +
        bm25_results
    ):
        if chunk not in seen:
            seen.add(chunk)
            combined.append(chunk)


    return rerank(
        query=query,
        chunks=combined,
        top_k=5,
    )