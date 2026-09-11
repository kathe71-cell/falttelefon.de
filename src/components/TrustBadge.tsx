import React from 'react';
import { ShieldCheck, Award, FileCheck2, Scale, ExternalLink } from 'lucide-react';

export default function TrustBadge() {
  return (
    <aside className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                E-E-A-T Trust-Garantie: Fachredaktion falttelefon.de
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                Stand: 2026
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Geprüft nach SGS Geneva Mobile Stress Testing &amp; TÜV Rheinland Faltzyklus-Standards (DIN EN 60068 / DIN EN 60529).
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-slate-500 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-5">
          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400">Primärquellen:</span>
            <span className="font-bold text-slate-700">TÜV · SGS · DisplayMate · IEC</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
