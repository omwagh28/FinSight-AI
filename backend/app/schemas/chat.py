from pydantic import BaseModel

class ChatRequest(BaseModel):
    documentId: str
    question: str

class ChatResponse(BaseModel):
    answer: str