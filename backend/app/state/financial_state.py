# Path: backend/app/state/financial_state.py

from typing import TypedDict

class FinancialState(TypedDict):
    document_text: str

    metrics: dict

    risks: dict

    scorecard: dict

    final_result: dict