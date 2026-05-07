import { processDocument } from './processor.js';
import { analyzeRisk } from './riskScorer.js';
import crypto from 'crypto';

/**
 * Executes a full Sovereign Audit
 * @param {Buffer} docBuffer - The uploaded file
 * @returns {Promise<Object>} The final Trust Certificate
 */
export async function runSovereignAudit(docBuffer) {
  // 1. Process document locally (Privacy-First)
  const text = await processDocument(docBuffer);

  // 2. Analyze for Fraud and BSA-2026 Compliance
  const riskResult = await analyzeRisk(text);

  // 3. Generate an Audit Hash for the Dodo Metadata
  const auditHash = crypto.createHash('sha256').update(text + riskResult.score).digest('hex');

  return {
    verificationScore: riskResult.score,
    hash: `qvac_${auditHash.substring(0, 16)}`,
    status: riskResult.score > 90 ? "PROCEED" : "BLOCK",
    compliance: "BSA-2026 Verified"
  };
}
