from qdrant_client.models import (
    Filter,
    FieldCondition,
    MatchValue,
)

from app.rag.embeddings import (
    embed_text,
)

from app.rag.vector_store import (
    client,
    COLLECTION_NAME,
)


def retrieve_chunks(
    query: str,
    document_id: str,
    top_k: int = 5,
):
    vector = embed_text(
        query
    )

    results = client.query_points(
        collection_name=
        COLLECTION_NAME,

        query=vector,

        query_filter=Filter(
            must=[
                FieldCondition(
                    key="document_id",
                    match=MatchValue(
                        value=document_id
                    ),
                )
            ]
        ),

        limit=top_k,
    ).points

    return [
        point.payload["text"]
        for point in results
    ]