import uuid

from app.ingestion.normalizer import (
    normalize_markdown,
)

from app.ingestion.chunker import (
    chunk_document,
)

from app.ingestion.validation_agent import (
    validate_document,
)

from app.rag.ingest import (
    ingest_chunks,
)

from app.compare.compare_store import (
    COMPARE_DOCUMENTS,
)


async def prepare_compare_documents(
    company_a_text: str,
    company_b_text: str,
):
    markdown_a = normalize_markdown(
        company_a_text
    )

    chunks_a = chunk_document(
        markdown_a
    )

    markdown_b = normalize_markdown(
        company_b_text
    )

    chunks_b = chunk_document(
        markdown_b
    )

    print(
        "\n========== COMPARE VALIDATION =========="
    )

    print(
        "Company A Chunks:",
        len(chunks_a)
    )

    print(
        "Company B Chunks:",
        len(chunks_b)
    )

    validation_a = await validate_document(
        chunks_a
    )

    validation_b = await validate_document(
        chunks_b
    )

    print(
        "Company A Score:",
        validation_a["score"]
    )

    print(
        "Company B Score:",
        validation_b["score"]
    )

    if (
        not validation_a["accepted"]
        and
        not validation_b["accepted"]
    ):
        return {
            "success": False,
            "error":
            "Both documents are not recognized as financial reports.",
        }

    if not validation_a["accepted"]:
        return {
            "success": False,
            "error":
            "Company A is not a valid financial report.",
        }

    if not validation_b["accepted"]:
        return {
            "success": False,
            "error":
            "Company B is not a valid financial report.",
        }

    document_id_a = str(
        uuid.uuid4()
    )

    document_id_b = str(
        uuid.uuid4()
    )

    compare_id = str(
        uuid.uuid4()
    )

    ingest_chunks(
        document_id_a,
        chunks_a,
    )

    ingest_chunks(
        document_id_b,
        chunks_b,
    )

    COMPARE_DOCUMENTS[
        compare_id
    ] = {
        "document_id_a":
        document_id_a,

        "document_id_b":
        document_id_b,
    }

    print(
        "\n========== COMPARE INGESTION =========="
    )

    print(
        "Compare ID:",
        compare_id
    )

    return {
        "success": True,

        "compare_id":
        compare_id,

        "document_id_a":
        document_id_a,

        "document_id_b":
        document_id_b,

        "chunks_a":
        chunks_a,

        "chunks_b":
        chunks_b,
    }