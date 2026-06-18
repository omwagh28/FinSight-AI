# Path: backend/app/services/document_analysis_service.py

import time
import uuid

from app.ingestion.pipeline import ingest_pdf

from app.financial.scorecard import (
    generate_scorecard,
)

from app.rag.ingest import (
    ingest_chunks,
)
from app.core.document_store import (
    DOCUMENTS
)


async def analyze_pdf(
    file_path: str,
):
    start = time.time()

    ingestion_result = await ingest_pdf(
        file_path
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
        document_id=document_id,
        chunks=chunks,
    )
    if scorecard.get("success") is False:
       return scorecard
    
    
    DOCUMENTS[document_id] = {
    "chunks": chunks,

    "metrics":
    scorecard["metrics"],

    "risks":
    scorecard["risks"],

    "healthScore":
    scorecard["healthScore"],

    "dimensionScores":
    scorecard["dimensionScores"],

    "verdict":
    scorecard["verdict"],
}
        
    scorecard["documentId"] = (
        document_id
    )

    scorecard["processingTime"] = round(
        time.time() - start,
        2,
    )

    return scorecard