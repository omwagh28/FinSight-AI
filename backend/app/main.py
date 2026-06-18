# Path: backend/app/main.py

from fastapi import FastAPI
from app.api.v1.chat import router as chat_router
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.upload import (
    router as upload_router
)
from app.rag.vector_store import (
    create_collection
)
from app.api.v1.url import (
    router as url_router
)
from app.api.v1.compare import (
    router as compare_router,
)

app = FastAPI(
    title="FinSight AI"
)

app.include_router(
    compare_router,
    prefix="/api/v1/compare",
    tags=["Compare"],
)

app.include_router(
    url_router,
    prefix="/api/v1",
    tags=["url"]
)


app.include_router(
    chat_router,
    prefix="/api/v1",
    tags=["chat"]
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(
    upload_router,
    prefix="/api/v1",
    tags=["upload"]
)
create_collection()
@app.get("/")
async def root():
    return {
        "message": "FinSight AI API Running"
    }