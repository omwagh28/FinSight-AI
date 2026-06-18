# Path: backend/app/api/v1/upload.py

from pathlib import Path

from fastapi import (
    APIRouter,
    UploadFile,
    File,
)
from pydantic import BaseModel

from app.services.document_analysis_service import (
    analyze_pdf,
)

from app.services.text_analysis_service import (
    analyze_text,
)

router = APIRouter()

UPLOAD_DIR = Path(
    "uploads"
)

UPLOAD_DIR.mkdir(
    exist_ok=True
)

class TextAnalysisRequest(
    BaseModel
):
    text: str

@router.post("/upload")
async def upload_document(
    file: UploadFile = File(...)
):
    file_path = (
        UPLOAD_DIR /
        file.filename
    )

    with open(
        file_path,
        "wb"
    ) as f:
        f.write(
            await file.read()
        )

    return await analyze_pdf(
        str(file_path)
    )

@router.post("/analyze-text")
async def analyze_text_endpoint(
    request: TextAnalysisRequest
):
    return await analyze_text(
        request.text
    )