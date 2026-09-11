import React from 'react';
import DurabilityCalculator from '../components/DurabilityCalculator';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function RechnerEmbed() {
  return (
    <div className="min-h-screen bg-slate-50 p-2 sm:p-4 flex flex-col justify-between">
      <div>
        <DurabilityCalculator isEmbed={true} />
      </div>
      
      {/* Required Attribution Bar for Webmasters */}
      <div className="pt-3 px-2 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
          TÜV / SGS Falt-Prüfwerte 2026
        </span>
        <a
          href="https://falttelefon.de/"
          target="_blank"
          rel="noopener"
          className="text-amber-700 hover:text-amber-800 font-bold underline inline-flex items-center gap-1"
        >
          falttelefon.de <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
