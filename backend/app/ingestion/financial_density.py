FINANCIAL_TERMS = [

    # Existing
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
    "quarterly report",

    # New High Signal Terms

    "net income",
    "operating income",
    "gross revenue",
    "total revenue",

    "shareholders equity",
    "retained earnings",

    "cost of revenue",
    "cost of goods sold",
    "cogs",

    "operating expenses",
    "selling general and administrative",
    "sg&a",

    "research and development",
    "r&d expense",

    "earnings per share",
    "eps",
    "diluted eps",

    "book value",
    "book value per share",

    "accounts receivable",
    "accounts payable",

    "capital expenditure",
    "capex",

    "depreciation",
    "amortization",

    "goodwill",
    "intangible assets",

    "long term debt",
    "short term debt",

    "share capital",

    "dividend payout",
    "dividend yield",

    "auditor",
    "audited",
    "independent auditor",

    "consolidated financial statements",

    "statement of operations",

    "statement of financial position",

    "notes to financial statements",

    "management discussion and analysis",
    "md&a",

    "risk factors",

    "segment revenue",
    "business segment",

    "shareholders",

    "common stock",
    "ordinary shares",

    "fy2022",
    "fy2023",
    "fy2024",
    "fy2025",

    "q1",
    "q2",
    "q3",
    "q4",

    "year over year",
    "yoy",

    "quarter over quarter",
    "qoq",
]

def compute_financial_density(
    chunks: list[str],
):
    matched_terms = set()

    for chunk in chunks:

        text = chunk.lower()

        for term in FINANCIAL_TERMS:

            if term in text:
                matched_terms.add(term)

    return len(matched_terms)