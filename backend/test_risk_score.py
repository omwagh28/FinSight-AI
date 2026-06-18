# Path: backend/test_risk_score.py

from app.financial.risk_score import (
    calculate_risk_score
)

risks = [
    {
        "severity": "low"
    },
    {
        "severity": "medium"
    },
    {
        "severity": "high"
    },
]

print(
    calculate_risk_score(
        risks
    )
)