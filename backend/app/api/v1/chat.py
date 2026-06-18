#backend/app/api/v1/chat.py

from fastapi import APIRouter

from app.schemas.chat import (
    ChatRequest,
)

from app.agents.financial_chat_agent import (
    financial_chat_agent,
)

router = APIRouter()


@router.post("/chat")
async def chat(
    request: ChatRequest
):
    answer = await financial_chat_agent(
        request.documentId,
        request.question,
    )

    return {
        "answer": answer
    }