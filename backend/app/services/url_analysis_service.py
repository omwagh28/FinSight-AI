import time
import uuid

from app.ingestion.url_ingestor import (
    ingest_url,
)
from app.rag.ingest import (
    ingest_chunks,
)

from app.financial.scorecard import (
    generate_scorecard,
)

from app.core.document_store import (
    DOCUMENTS,
)


async def analyze_url(
    url: str,
):
    start = time.time()

    ingestion_result = await ingest_url(
        url
    )

    if not ingestion_result[
        "accepted"
    ]:
        return {
            "success": False,
            "message":
            ingestion_result[
                "message"
            ]
        }


    chunks = ingestion_result[
        "chunks"
    ]

    document_id = str(
        uuid.uuid4()
    )

    ingest_chunks(
        document_id,
        chunks,
    )

    scorecard = await generate_scorecard(
        document_id,
        chunks,
    )

    if (
        scorecard.get("success")
        is False
    ):
        return scorecard


    DOCUMENTS[document_id] = {
        "chunks": chunks,

        "metrics":
        scorecard.get(
            "metrics",
            []
        ),

        "risks":
        scorecard.get(
            "risks",
            []
        ),

        "healthScore":
        scorecard.get(
            "healthScore",
            0
        ),

        "dimensionScores":
        scorecard.get(
            "dimensionScores",
            {}
        ),

        "verdict":
        scorecard.get(
            "verdict",
            ""
        ),
    }

    scorecard[
        "documentId"
    ] = document_id

    scorecard[
        "processingTime"
    ] = round(
        time.time() - start,
        2,
    )

    return scorecard