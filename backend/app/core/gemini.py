# Path: backend/app/core/gemini.py

from google import genai

from app.core.config import GEMINI_API_KEY

client = genai.Client(
    api_key=GEMINI_API_KEY
)