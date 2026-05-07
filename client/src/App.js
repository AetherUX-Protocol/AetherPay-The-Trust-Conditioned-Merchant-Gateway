import React, { useState } from 'react';
import AuditInterface from './components/AuditInterface';
import DodoCheckout from './components/DodoCheckout';

function App() {
  const [auditData, setAuditData] = useState(null);

  return (
    <div className="min-h-screen bg-black text-slate-200 p-8 flex flex-col items-center">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-white mb-2 tracking-tighter">AETHERPAY</h1>
        <p className="text-slate-400 font-mono text-sm">Sovereign Trust-Conditioned Gateway</p>
      </header>

      <main className="w-full max-w-md space-y-6">
        <AuditInterface onAuditComplete={(data) => setAuditData(data)} />
        <DodoCheckout auditData={auditData} />
      </main>

      <footer className="mt-auto pt-12 text-slate-600 text-xs text-center">
        Built for Superteam India x Dodo Payments Frontier Track | Powered by Solana
      </footer>
    </div>
  );
}

export default App;
