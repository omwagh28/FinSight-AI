# Path: backend/app/rag/reranker.py

def rerank(
    query: str,
    chunks: list[str],
    top_k: int = 5,
):
    return chunks[:top_k]