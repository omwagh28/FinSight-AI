# Path: backend/test_metrics.py

from app.financial.metrics_service import (
    generate_metrics
)

text = """

Revenue 1000000

Net Income 200000

Total Assets 5000000

Shareholders Equity 1000000

Total Debt 300000

Current Assets 600000

Current Liabilities 300000

"""

metrics = generate_metrics(
    text
)

print(metrics)