import DodoPayments from 'dodopayments';

const client = new DodoPayments({
  bearerToken: process.env.DODO_PAYMENTS_API_KEY,
});

/**
 * Creates a Dodo Checkout Session ONLY if the QVAC audit is successful.
 * @param {object} auditData - The results from the QVAC engine.
 */
export async function createVerifiedCheckout(auditData) {
  // 1. Logic Gate: Only authorize payment if trust is > 90
  if (!auditData || auditData.verificationScore < 90) {
    throw new Error("Sovereign Audit Failed: Trust score too low for settlement.");
  }

  try {
    const session = await client.checkoutSessions.create({
      product_cart: [{
        product_id: process.env.DODO_PRODUCT_ID, // Your trade mandate or service ID
        quantity: 1
      }],
      // 2. High-Utility Settings for Frontier Track
      allowed_payment_method_types: ['crypto'], // Enforce stablecoin on Solana
      metadata: {
        qvac_audit_hash: auditData.hash, // Link the local audit to the on-chain payment
        compliance_standard: "BSA-2026"
      },
      return_url: "https://aetherpay.io/success"
    });

    console.log(`Dodo Session Created: ${session.session_id}`);
    return session.checkout_url;
  } catch (error) {
    console.error("Dodo Checkout Error:", error);
    throw error;
  }
}
