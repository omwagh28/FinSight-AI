#backend/app/financial/evidence_service.py

from app.financial.scorecard_queries import (
    SCORECARD_QUERIES
)
from app.rag.hybrid import (
    hybrid_search
)

def collect_scorecard_evidence(
    document_id: str,
    all_chunks: list[str],
):
    evidence = []

    for query in SCORECARD_QUERIES:

        results = hybrid_search(
            query=query,
            document_id=document_id,
            all_chunks=all_chunks,
        )

       

        evidence.extend(results)

    unique_evidence = []

    seen = set()

    for chunk in evidence:
        if chunk not in seen:
            seen.add(chunk)
            unique_evidence.append(chunk)

   

    return unique_evidence[:25]