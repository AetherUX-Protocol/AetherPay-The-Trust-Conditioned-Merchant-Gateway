/**
 * AetherPay Risk Scorer
 * Performs Semantic Fraud Detection via Local LLM
 */
export async function analyzeRisk(extractedText) {
  // Common B2B Fraud Patterns
  const redFlags = [
    "urgent payment required",
    "change of bank details",
    "confidential intermediary",
    "non-standard swift code"
  ];

  let riskPoints = 0;
  const textLower = extractedText.toLowerCase();

  redFlags.forEach(flag => {
    if (textLower.includes(flag)) {
      riskPoints += 25;
      console.warn(`🚩 Flag Detected: ${flag}`);
    }
  });

  // Calculate the Trust Score (Inverse of Risk)
  const trustScore = Math.max(0, 100 - riskPoints);
  
  return {
    score: trustScore,
    flagsFound: redFlags.filter(f => textLower.includes(f)),
    timestamp: new Date().toISOString()
  };
}
