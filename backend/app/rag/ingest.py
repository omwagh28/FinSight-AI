#backend/app/rag/ingest.py

import uuid

from qdrant_client.models import (
    PointStruct,
)

from app.rag.embeddings import (
    embed_text,
)

from app.rag.vector_store import (
    client,
    COLLECTION_NAME,
)


def ingest_chunks(
    document_id: str,
    chunks: list[str],
):
    points = []

    for chunk in chunks:
        vector = embed_text(
            chunk
        )

        points.append(
            PointStruct(
                id=str(uuid.uuid4()),
                vector=vector,
                payload={
                    "document_id": document_id,
                    "text": chunk,
                    "chunk_length": len(chunk),
                }
            )
        )

    client.upsert(
        collection_name=
        COLLECTION_NAME,

        points=points,
    )