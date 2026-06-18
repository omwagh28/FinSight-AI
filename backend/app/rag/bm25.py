# Path: backend/app/rag/bm25.py

from rank_bm25 import BM25Okapi


def bm25_search(
    query: str,
    chunks: list[str],
    top_k: int = 5,
):
    tokenized_chunks = [
        chunk.split()
        for chunk in chunks
    ]

    bm25 = BM25Okapi(
        tokenized_chunks
    )

    scores = bm25.get_scores(
        query.split()
    )

    ranked = sorted(
        zip(chunks, scores),
        key=lambda x: x[1],
        reverse=True,
    )

    return [
        chunk
        for chunk, _
        in ranked[:top_k]
    ]