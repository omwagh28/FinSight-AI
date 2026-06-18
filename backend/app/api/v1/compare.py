from fastapi import APIRouter
from pydantic import BaseModel

from app.compare.compare_ingestion import (
    prepare_compare_documents,
)

from app.compare.evidence_service import (
    collect_comparison_evidence,
)

from app.compare.comparison_agent import (
    compare_companies,
)

router = APIRouter()


class CompareRequest(BaseModel):
    companyA: str
    companyB: str


@router.post("")
async def compare_reports(
    payload: CompareRequest,
):
    ingestion_result = (
        await prepare_compare_documents(
            payload.companyA,
            payload.companyB,
        )
    )

    if not ingestion_result["success"]:
        return ingestion_result

    evidence = (
        collect_comparison_evidence(
            document_id_a=
            ingestion_result[
                "document_id_a"
            ],

            document_id_b=
            ingestion_result[
                "document_id_b"
            ],

            chunks_a=
            ingestion_result[
                "chunks_a"
            ],

            chunks_b=
            ingestion_result[
                "chunks_b"
            ],
        )
    )

    comparison_result = (
        await compare_companies(
            evidence_a=
            evidence["evidence_a"],

            evidence_b=
            evidence["evidence_b"],
        )
    )

    return {
        "success": True,

        "companyA":
        "Company A",

        "companyB":
        "Company B",

        **comparison_result,
    }