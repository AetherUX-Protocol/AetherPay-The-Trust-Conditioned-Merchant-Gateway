import React, { useState } from 'react';
import { ShieldCheck, Upload, AlertCircle } from 'lucide-react';

const AuditInterface = ({ onAuditComplete }) => {
  const [status, setStatus] = useState('idle'); // idle, auditing, success, failed

  const handleFileUpload = (e) => {
    setStatus('auditing');
    // Simulate Local QVAC Inference
    setTimeout(() => {
      const isSafe = true; // Logic would normally check QVAC SDK result
      if (isSafe) {
        setStatus('success');
        onAuditComplete({ score: 98, hash: 'qvac_0x123...abc' });
      } else {
        setStatus('failed');
      }
    }, 2500);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck className="text-blue-500" />
        <h3 className="text-xl font-bold text-white">Sovereign Audit</h3>
      </div>
      
      {status === 'idle' && (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-700 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors">
          <Upload className="text-slate-500 mb-2" />
          <span className="text-sm text-slate-400">Upload Trade Mandate / Invoice</span>
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>
      )}

      {status === 'auditing' && (
        <div className="flex flex-col items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-slate-300">QVAC Engine: Analyzing Local Evidence...</p>
        </div>
      )}

      {status === 'success' && (
        <div className="bg-emerald-500/10 border border-emerald-500/50 p-4 rounded-lg text-emerald-400">
          <p className="font-bold flex items-center gap-2">
            <ShieldCheck size={18} /> Trust Verified: 98%
          </p>
          <p className="text-xs mt-1">BSA-2026 Compliance Certificate Generated.</p>
        </div>
      )}
    </div>
  );
};

export default AuditInterface;
