# Path: backend/app/compare/evidence_service.py

from app.compare.compare_queries import (
    COMPARE_QUERIES,
)

from app.rag.hybrid import (
    hybrid_search,
)


def collect_comparison_evidence(
    document_id_a: str,
    document_id_b: str,
    chunks_a: list[str],
    chunks_b: list[str],
):
    evidence_a = []

    evidence_b = []

    for query in COMPARE_QUERIES:

        results_a = hybrid_search(
            query=query,
            document_id=document_id_a,
            all_chunks=chunks_a,
        )

        results_b = hybrid_search(
            query=query,
            document_id=document_id_b,
            all_chunks=chunks_b,
        )

        evidence_a.extend(
            results_a
        )

        evidence_b.extend(
            results_b
        )

    unique_a = []

    seen_a = set()

    for chunk in evidence_a:

        if chunk not in seen_a:

            seen_a.add(chunk)

            unique_a.append(
                chunk
            )

    unique_b = []

    seen_b = set()

    for chunk in evidence_b:

        if chunk not in seen_b:

            seen_b.add(chunk)

            unique_b.append(
                chunk
            )

    print(
        "\n========== COMPARE RETRIEVAL =========="
    )

    print(
        "Company A Evidence:",
        len(unique_a)
    )

    print(
        "Company B Evidence:",
        len(unique_b)
    )

    return {
        "evidence_a":
        unique_a[:30],

        "evidence_b":
        unique_b[:30],
    }