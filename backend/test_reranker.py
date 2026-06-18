# Path: backend/test_reranker.py

import asyncio

from app.rag.reranker import rerank

chunks = [
    "Tesla revenue increased by 22 percent.",
    "Apple launched a new iPhone.",
    "Cash flow weakened despite growth.",
]


async def main():
    results = await rerank(
        "Why did revenue increase?",
        chunks,
    )

    print(results)


asyncio.run(main())