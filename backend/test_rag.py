# Path: backend/test_rag.py

from app.rag.vector_store import (
    create_collection
)

from app.rag.ingest import (
    ingest_chunks
)

from app.rag.retrieve import (
    retrieve_chunks
)

create_collection()

ingest_chunks([
    "Tesla revenue increased 22 percent",
    "Debt to equity ratio increased",
    "Free cash flow weakened",
])

results = retrieve_chunks(
    "revenue growth"
)

print(results)