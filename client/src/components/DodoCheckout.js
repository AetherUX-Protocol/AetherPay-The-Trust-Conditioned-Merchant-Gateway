import React from 'react';
import { CreditCard } from 'lucide-react';

const DodoCheckout = ({ auditData }) => {
  const handlePayment = async () => {
    // In production, this calls your backend /dodo-bridge/checkout route
    console.log("Requesting Dodo Checkout Session with Audit Hash:", auditData.hash);
    alert("Redirecting to Dodo Secure Checkout (USDC on Solana)...");
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl mt-6">
      <h3 className="text-lg font-semibold text-white mb-4">Authorized Settlement</h3>
      <button
        disabled={!auditData}
        onClick={handlePayment}
        className={`w-full py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
          auditData 
            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg" 
            : "bg-slate-800 text-slate-500 cursor-not-allowed"
        }`}
      >
        <CreditCard size={20} />
        Pay via Dodo Payments
      </button>
      {!auditData && (
        <p className="text-xs text-slate-500 mt-3 text-center">
          Payment blocked until Sovereign Audit is complete.
        </p>
      )}
    </div>
  );
};

export default DodoCheckout;
