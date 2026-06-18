from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.chat import (
    router as chat_router,
)

from app.api.v1.upload import (
    router as upload_router,
)

from app.api.v1.url import (
    router as url_router,
)

from app.api.v1.compare import (
    router as compare_router,
)

from app.rag.vector_store import (
    create_collection,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_collection()
    yield


app = FastAPI(
    title="FinSight AI",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    compare_router,
    prefix="/api/v1/compare",
    tags=["Compare"],
)

app.include_router(
    url_router,
    prefix="/api/v1",
    tags=["URL Analysis"],
)

app.include_router(
    chat_router,
    prefix="/api/v1",
    tags=["Chat"],
)

app.include_router(
    upload_router,
    prefix="/api/v1",
    tags=["Upload"],
)


@app.get("/")
async def root():
    return {
        "message": "FinSight AI API Running"
    }