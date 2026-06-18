#backend/app/ingestion/text_ingestor.py

from app.ingestion.normalizer import (
    normalize_markdown,
)

from app.ingestion.chunker import (
    chunk_document,
)

from app.ingestion.validation_agent import (
    validate_document,
)


async def ingest_text(
    text: str,
):
    markdown = normalize_markdown(
        text
    )

    chunks = chunk_document(
        markdown
    )

    validation = await validate_document(
        chunks
    )

    if not validation["accepted"]:
        return {
            "accepted": False,
            "message":
            validation["reason"],
        }

    return {
        "accepted": True,
        "markdown": markdown,
        "chunks": chunks,
    }