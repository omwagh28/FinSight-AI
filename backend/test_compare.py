# Path: backend/test_compare.py

import asyncio

from app.financial.compare_service import (
    compare_documents
)

doc_a = """

Revenue 1000000
Net Income 200000
Total Assets 5000000
Shareholders Equity 1000000
Total Debt 300000
Current Assets 600000
Current Liabilities 300000

"""

doc_b = """

Revenue 1000000
Net Income 80000
Total Assets 5000000
Shareholders Equity 1000000
Total Debt 1200000
Current Assets 400000
Current Liabilities 500000

"""

async def main():
    result = await compare_documents(
        doc_a,
        doc_b
    )

    print(result)

asyncio.run(main())