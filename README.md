# AetherPay: The Trust-Conditioned Merchant Gateway
### *Dodo Payments x Superteam India | Solana Frontier Hackathon*

AetherPay is an intelligent payment gateway that bridges the gap between contextual trust and financial execution. It uses **QVAC Local AI** to audit high-value trade documents (BSA 2026 compliant) before autonomously triggering **USDt/USDC settlements on Solana** via **Dodo Payments**.

## 🚀 Key Features
- **Sovereign Trust (QVAC SDK):** Private, local-first AI auditing to verify transaction intent.
- **Merchant of Record (Dodo Payments):** Seamless global tax, billing, and compliance in 220+ countries.
- **Solana Velocity:** Near-instant settlement using USDC/USDt.
- **Trust-Locked Checkout:** Dodo payment sessions are only authorized after a high-confidence AI audit.

## 📂 Project Structure
- `client/`: React dashboard for trade visualization.
- `qvac-engine/`: Local LLM and OCR logic for offline verification.
- `dodo-bridge/`: Integration with Dodo Payments API for global settlement.
- `legal-kb/`: Local RAG database for BSA 2026 legal standards.

## 🛠️ Setup & Installation
1. Clone the repo.
2. Run `npm run install:all`.
3. Add your `DODO_PAYMENTS_API_KEY` to `.env`.
4. Run `npm start`.
