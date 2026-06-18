FINANCIAL_TERMS = [
   "revenue",
    "sales",
    "turnover",

    "profit",
    "net profit",
    "gross profit",
    "income",
    "earnings",

    "ebitda",
    "ebit",

    "cash flow",
    "operating cash flow",
    "free cash flow",

    "assets",
    "current assets",
    "total assets",

    "liabilities",
    "current liabilities",

    "equity",
    "shareholder equity",

    "debt",
    "borrowings",
    "loan",

    "current ratio",
    "quick ratio",

    "roe",
    "roa",
    "roi",
    "roce",

    "margin",
    "gross margin",
    "operating margin",
    "net margin",

    "balance sheet",
    "income statement",
    "cash flow statement",

    "dividend",
    "valuation",
    "market cap",

    "interest expense",
    "interest coverage",

    "working capital",
    "inventory",

    "rs",
    "crore",
    "cr",
    "₹",
    "$",
    "usd",
    "eur",

    "financial",
    "fiscal year",
    "annual report",
    "quarterly report"
]


def compute_financial_density(
    chunks: list[str],
):
    total_hits = 0

    for chunk in chunks:

        text = chunk.lower()

        for term in FINANCIAL_TERMS:

            if term in text:
                total_hits += text.count(term)

    return total_hits