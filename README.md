# FinSight AI – Agentic Financial Intelligence Platform

FinSight AI is an AI-powered financial intelligence platform that helps investors, analysts, and researchers understand complex financial documents through Retrieval-Augmented Generation (RAG), financial risk analysis, scorecard generation, and company comparison workflows.

The platform transforms lengthy annual reports, earnings filings, investor presentations, and financial statements into actionable insights, risk assessments, financial health scores, and conversational answers.

---

## Problem Statement

Financial reports often contain hundreds of pages of dense information, making it difficult for investors and analysts to quickly identify financial strengths, risks, growth opportunities, and operational concerns.

Traditional manual analysis is:

* Time consuming
* Error prone
* Difficult to scale across multiple companies
* Challenging for retail investors

FinSight AI addresses this challenge by automatically extracting, retrieving, analyzing, and explaining financial information using AI-powered document intelligence.

---

## Key Features

### Financial Scorecard Generation

Analyze financial documents and generate:

* Financial Health Score
* Executive Verdict
* Key Findings
* Financial Metrics
* Risk Assessment
* Dimension Scores

Dimensions evaluated:

* Liquidity
* Profitability
* Growth
* Leverage
* Efficiency

---

### Financial Chat Assistant

Ask questions about uploaded financial reports.

Examples:

* Is this company financially healthy?
* What are the biggest risks?
* How is profitability trending?
* Should debt levels be a concern?
* What are the key growth drivers?

The assistant answers using only evidence retrieved from the uploaded report.

---

### Company Comparison Engine

Compare two companies side by side.

Outputs include:

* Financial Scores
* Comparative Verdict
* Key Metrics
* Insights
* Risk Comparison
* Growth Analysis
* Debt Analysis
* Liquidity Assessment

---

### Multi-Source Document Analysis

Supports:

* Financial Report Text
* PDF Documents
* Financial Report URLs

---

## System Architecture

### Scan Workflow

Document Input
↓
Document Validation
↓
Chunking
↓
Embedding Generation
↓
Vector Storage (Qdrant)
↓
Evidence Retrieval
↓
Financial Scorecard Agent
↓
Financial Health Score
↓
Frontend Scorecard

---

### Chat Workflow

User Question
↓
Retrieval Tool
↓
Metrics Tool
↓
Risk Tool
↓
Facts Tool
↓
Scorecard Tool
↓
Gemini Reasoning
↓
Answer Generation

---

### Compare Workflow

Company A Report
Company B Report
↓
Validation
↓
Independent Chunking
↓
Independent Embeddings
↓
Separate Vector Storage
↓
Financial Evidence Retrieval
↓
Comparison Agent
↓
Comparative Scorecard
↓
Verdict

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion

### Backend

* FastAPI
* Python
* Gemini 2.5 Flash
* Sentence Transformers
* Qdrant Vector Database
* Docling

### AI Components

* Retrieval-Augmented Generation (RAG)
* Hybrid Retrieval
* Financial Evidence Extraction
* Scorecard Generation
* Tool-Augmented Financial Chat

---

## Project Structure

```text
FinSight-AI/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── services/
│   └── app/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── agents/
│   │   ├── compare/
│   │   ├── financial/
│   │   ├── ingestion/
│   │   ├── rag/
│   │   ├── services/
│   │   ├── tools/
│   │   └── schemas/
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

## Deployment

Frontend:

* Vercel

Backend:

* Render

Containerization:

* Docker
* Docker Compose

---

## Future Improvements

* Planner-Based Agentic RAG
* Dynamic Tool Selection
* Multi-Agent Financial Research Workflow
* Portfolio Risk Analysis
* Earnings Call Intelligence
* Investment Recommendation Framework

---

## Disclaimer

FinSight AI is designed for financial research and educational purposes only.

The platform does not provide financial, investment, legal, or tax advice. Users should independently verify all findings before making investment decisions.
