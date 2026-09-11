import React from 'react';
import { Sparkles, HelpCircle, Layers, Cpu, ShieldCheck } from 'lucide-react';

export default function PositionZeroDef() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Decorative Accent Tag */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Position-0 Definition: Falttelefon
        </div>
        <span className="text-xs font-mono text-slate-400">DIN EN 60529 · OLED-PI Substrat · UTG 30 µm</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
        Was ist ein Falttelefon?
      </h2>

      {/* 40-60 Word Snippet Optimized Definition */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-slate-800 text-base sm:text-lg leading-relaxed font-medium mb-6">
        <p>
          Ein <strong>Falttelefon (Foldable Smartphone)</strong> ist ein Mobiltelefon mit einem biegsamen OLED-Display auf flexiblem Polyimid-Substrat (PI), das mittels chemisch gehärtetem <strong>Ultra Thin Glass (UTG)</strong> und mechanischen <strong>Wassertropfen-Scharnieren (Waterdrop Hinge)</strong> lückenlos auf- und zugeklappt werden kann. Man unterscheidet zwischen horizontal faltbaren <strong>Fold-Modellen</strong> (Tablet-Format) und vertikalen <strong>Clamshell-Flips</strong> (Hosentaschen-Format).
        </p>
      </div>

      {/* 3 Core Tech Characteristics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-900 shrink-0">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-0.5">Ultra Thin Glass</h4>
            <p className="text-xs text-slate-600">
              Glasfolie von 30–50 µm Stärke sorgt für Haptik und Knickstabilität.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-900 shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-0.5">Tropfenscharnier</h4>
            <p className="text-xs text-slate-600">
              Vergrößert den Innenradius beim Schließen und minimiert die Displayfalte.
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-blue-100 text-blue-900 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-0.5">Zertifizierte Zyklen</h4>
            <p className="text-xs text-slate-600">
              Labortests (TÜV / SGS) garantieren 200.000 bis 500.000 Faltungen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
