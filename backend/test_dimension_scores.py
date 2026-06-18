from app.financial.dimension_scores import (
    calculate_dimension_scores
)

metrics = [
    {
        "name": "Current Ratio",
        "value": "0.72",
    },
    {
        "name": "Debt / Equity",
        "value": "2.85",
    },
]

risks = []

scores = calculate_dimension_scores(
    metrics,
    risks,
)

print(scores)