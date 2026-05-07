# AetherPay Compliance Framework (BSA 2026)

AetherPay utilizes the **QVAC Local SDK** to bridge the gap between "Digital Data" and "Legal Evidence." 

### How we satisfy the Law:
1. **Section 61 BSA Compliance:** By running OCR and Semantic Analysis locally on the user's hardware, we verify that the document was "produced in the ordinary course of activity" without third-party cloud tampering.
2. **Hash-to-Chain Mapping:** Every successful audit generates a **SHA-256 Hash**. This hash is stored in the **Dodo Payments Metadata**, creating an immutable link between the legal evidence and the Solana transaction.
3. **Primary Evidence Status:** Because AetherPay analyzes the original digital file locally (the "Source"), our generated **Audit Certificate** helps the merchant move from "Secondary Evidence" to "Primary Evidence" status under Section 57.
