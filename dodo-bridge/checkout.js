/**
 * AetherPay Dodo Checkout Integration
 * Logic: Audit -> Authorization -> Checkout
 */
import { DodoPayments } from 'dodopayments'; // Official SDK

const client = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
  environment: 'test_mode', // Change to 'live_mode' for production
});

export async function createAuthorizedSession(auditResult, customerInfo) {
  // 1. Logic Gate: If QVAC score is below 90, we block the Dodo session
  if (auditResult.verificationScore < 90) {
    throw new Error("Audit Score Insufficient: Transaction blocked by Sovereign Intelligence.");
  }

  try {
    // 2. Create a Dodo Checkout Session
    const session = await client.checkoutSessions.create({
      product_cart: [{
        product_id: process.env.DODO_PRODUCT_ID, // Your trade mandate or service ID
        quantity: 1
      }],
      customer: {
        email: customerInfo.email,
        name: customerInfo.name
      },
      // 3. Force Stablecoins on Solana for Frontier Track alignment
      allowed_payment_method_types: ['crypto'], 
      metadata: {
        qvac_audit_hash: auditResult.hash,
        compliance: "BSA-2026"
      },
      return_url: "https://aetherpay.io/success"
    });

    console.log(`✅ Dodo Session Generated: ${session.session_id}`);
    return session.checkout_url;
  } catch (error) {
    console.error("Dodo API Error:", error);
    throw error;
  }
}
