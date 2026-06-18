# Path: backend/test_risks.py

from app.financial.risk_service import (
    generate_risks
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

print(
    generate_risks(text)
)