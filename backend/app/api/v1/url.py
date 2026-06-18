# URL Analysis Endpoint
# Used by Scan page URL mode.
# Delegates extraction and analysis
# to url_analysis_service.

from fastapi import APIRouter

from app.services.url_analysis_service import (
    analyze_url,
)

router = APIRouter()


@router.post("/analyze-url")
async def analyze_url_endpoint(
    payload: dict,
):
    return await analyze_url(
        payload["url"]
    )