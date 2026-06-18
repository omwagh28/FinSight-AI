# Path: backend/app/rag/embeddings.py

from sentence_transformers import (
    SentenceTransformer
)

embedding_model = SentenceTransformer(
    "BAAI/bge-m3"
)

def embed_text(
    text: str
):
    return embedding_model.encode(
        text,
        normalize_embeddings=True
    ).tolist()