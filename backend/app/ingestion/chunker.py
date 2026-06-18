#backend/app/ingestion/chunker.py
# Recursive chunking used by:
# - PDF Scan
# - URL Scan
# - Text Scan
# - Compare (future)
#
# Financial reports perform well with larger chunks
# because revenue, risk and management commentary
# often span multiple paragraphs.

from langchain_text_splitters import (
    RecursiveCharacterTextSplitter
)

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1200,
    chunk_overlap=200
)

def chunk_document(markdown: str):
    return splitter.split_text(markdown)