/**
 * AetherPay Dodo Constants
 * Centralized configuration for the Merchant of Record gateway.
 */

export const DODO_CONFIG = {
  // Environment Toggle: Use 'test_mode' for the Frontier Hackathon submission
  ENVIRONMENT: process.env.DODO_ENVIRONMENT || 'test_mode',

  // The specific stablecoin-enabled product created in your Dodo Dashboard
  PRODUCT_ID: process.env.DODO_PRODUCT_ID,

  // Global Trade Defaults
  DEFAULT_CURRENCY: 'USD',
  SUPPORTED_NETWORKS: ['Solana'],
  
  // Compliance Metadata
  COMPLIANCE_VERSION: 'BSA-2026-v1',
  
  // Redirect URLs
  SUCCESS_URL: `${process.env.APP_URL || 'http://localhost:3000'}/success`,
  CANCEL_URL: `${process.env.APP_URL || 'http://localhost:3000'}/cancel`,

  // Webhook Event Types we listen for
  EVENTS: {
    PAYMENT_SUCCESS: 'payment.succeeded',
    PAYMENT_FAILED: 'payment.failed',
    REFUND_SUCCESS: 'refund.succeeded'
  }
};

/**
 * Audit Thresholds
 * Determines if a transaction is safe for Dodo settlement.
 */
export const AUDIT_THRESHOLDS = {
  MIN_TRUST_SCORE: 90,        // Score below this triggers a hard-block
  REQUIRE_BSA_CERT: true,     // Requires the local QVAC engine to issue a hash
};
