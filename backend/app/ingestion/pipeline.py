#backend/app/ingestion/pipeline.py

from app.ingestion.parser import (
    parse_pdf,
)


from app.ingestion.chunker import (
    chunk_document,
)

from app.ingestion.validation_agent import (
    validate_document,
)


async def ingest_pdf(
    file_path: str,
):
    markdown = parse_pdf(
        file_path
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