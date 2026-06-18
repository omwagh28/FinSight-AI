from app.rag.retrieve import (
    retrieve_chunks
)

DOCUMENT_ID = (
    "paste-document-id-here"
)

results = retrieve_chunks(
    query="What are the major risks?",
    document_id=DOCUMENT_ID,
)

print("\nRESULTS\n")

for i, chunk in enumerate(results):
    print(f"\nChunk {i+1}")
    print("-" * 50)
    print(chunk[:600])