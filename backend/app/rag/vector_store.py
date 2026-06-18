# Path: backend/app/rag/vector_store.py

from qdrant_client import (
    QdrantClient
)

client = QdrantClient(
    ":memory:"
)

COLLECTION_NAME = "financial_docs"

from qdrant_client.models import (
    VectorParams,
    Distance,
)

def create_collection():
    collections = client.get_collections()

    existing = [
        c.name
        for c in collections.collections
    ]

    if COLLECTION_NAME not in existing:
        client.create_collection(
            collection_name=
            COLLECTION_NAME,
            vectors_config=
            VectorParams(
                size=384,
                distance=Distance.COSINE
            ),
        )