#backend/app/ingestion/parser.py

from docling.document_converter import (
    DocumentConverter
)

converter = DocumentConverter()

def parse_pdf(
    file_path: str
):
    try:

        result = converter.convert(
            file_path
        )

        markdown = (
            result.document
            .export_to_markdown()
        )


        return markdown

    except Exception as e:

        print(
            f"DOCLING ERROR: {e}"
        )


        raise ValueError(
            "Unable to process PDF. File may be too large or image-heavy."
        )