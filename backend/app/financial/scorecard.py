from app.financial.evidence_service import (
    collect_scorecard_evidence,
)

from app.financial.scorecard_agent import (
    generate_scorecard_from_evidence,
)

from app.financial.scoring import (
    calculate_dimension_scores,
    calculate_health_score,
)


async def generate_scorecard(
    document_id: str,
    chunks: list[str],
):
    evidence = (
        collect_scorecard_evidence(
            document_id=document_id,
            all_chunks=chunks,
        )
    )

   

    result = await (
        generate_scorecard_from_evidence(
            evidence
        )
    )

    if result.get("success") is False:
      return result

    dimension_scores = (
        calculate_dimension_scores(
            result["assessment"]
        )
    )

    health_score = (
        calculate_health_score(
            dimension_scores
        )
    )

    result["dimensionScores"] = (
        dimension_scores
    )

    result["healthScore"] = (
        health_score
    )

    print(
        "\n========== VALIDATION =========="
    )

    print(
        f"Total Chunks: {len(chunks)}"
    )

    print(
        f"Evidence Chunks: {len(evidence)}"
    )

    print(
        f"Financial Score: {health_score}"
    )


    return result