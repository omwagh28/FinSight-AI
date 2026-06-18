from firecrawl import FirecrawlApp

from app.ingestion.normalizer import (
    normalize_markdown,
)

from app.ingestion.chunker import (
    chunk_document,
)

from app.ingestion.validation_agent import (
    validate_document,
)

import os


app = FirecrawlApp(
    api_key=os.getenv(
        "FIRECRAWL_API_KEY"
    )
)


async def ingest_url(
    url: str,
):
    result = app.scrape_url(
        url,
        formats=["markdown"]
    )

    

    try:
        markdown = result.markdown

    except Exception:

        try:
            markdown = result.data.markdown

        except Exception:

            try:
                markdown = result["markdown"]

            except Exception:
                
               

                return {
                    "accepted": False,
                    "message":
                    "Unable to extract content from URL."
                }

    markdown = normalize_markdown(
        markdown
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
            validation["reason"]
        }

    return {
        "accepted": True,
        "markdown": markdown,
        "chunks": chunks,
    }