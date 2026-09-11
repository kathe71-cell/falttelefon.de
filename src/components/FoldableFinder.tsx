import React, { useState } from 'react';
import { FOLDABLES_DATA, FoldablePhone, getAmazonProductUrl } from '../data/foldables';
import { CheckCircle2, ChevronRight, RotateCcw, ShoppingBag, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FoldableFinder() {
  const [formFactor, setFormFactor] = useState<'any' | 'fold' | 'flip'>('any');
  const [priority, setPriority] = useState<'multitasking' | 'compact' | 'battery' | 'camera'>('multitasking');
  const [budgetMax, setBudgetMax] = useState<number>(2000);

  const matchedPhones = FOLDABLES_DATA.filter((phone) => {
    if (formFactor !== 'any' && phone.category !== formFactor) return false;
    if (phone.marketPriceEuro > budgetMax) return false;
    return true;
  }).sort((a, b) => {
    // Scoring according to priority
    if (priority === 'compact') {
      return a.weightGrams - b.weightGrams;
    }
    if (priority === 'battery') {
      return b.batteryMah - a.batteryMah;
    }
    if (priority === 'camera') {
      return (b.cameraSetup.includes('Periskop') ? 1 : 0) - (a.cameraSetup.includes('Periskop') ? 1 : 0);
    }
    // Default multitasking: prioritize large inner screens & stylus
    return (b.stylusSupport ? 1 : 0) - (a.stylusSupport ? 1 : 0);
  });

  const topMatch: FoldablePhone | undefined = matchedPhones[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
            Interaktiver Kaufberater
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Foldable-Finder: Welcher Typ passt zu Ihnen?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Filtern Sie nach Formfaktor, Alltagsschwerpunkt und Budget für eine objektive Hardware-Empfehlung.
          </p>
        </div>
      </div>

      {/* Control Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-slate-100">
        
        {/* Step 1: Form Factor */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            1. Formfaktor-Präferenz
          </label>
          <div className="space-y-2">
            {[
              { id: 'any', label: 'Alle Formfaktoren', sub: 'Fold & Clamshell' },
              { id: 'fold', label: 'Book-Style (Fold)', sub: '7.6"–8.0" Tablet-Display' },
              { id: 'flip', label: 'Clamshell (Flip)', sub: 'Kompakt in Hosentasche' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFormFactor(opt.id as any)}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                  formFactor === opt.id
                    ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 font-bold text-slate-900'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="font-extrabold text-slate-900">{opt.label}</div>
                <div className="text-slate-500 text-[11px]">{opt.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Priority */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            2. Wichtigstes Kriterium
          </label>
          <div className="space-y-2">
            {[
              { id: 'multitasking', label: 'Multitasking & Stift', sub: 'Arbeiten mit 2-3 Apps gleichzeitig' },
              { id: 'compact', label: 'Geringes Gewicht & Dicke', sub: 'Leichtestes Gehäuse am Markt' },
              { id: 'battery', label: 'Maximale Akkulaufzeit', sub: 'Höchste Kapazität (mAh) & Schnellladen' },
              { id: 'camera', label: 'Zoom- & Kamera-Setup', sub: 'Echtes Periskop-Teleobjektiv' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setPriority(opt.id as any)}
                className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                  priority === opt.id
                    ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 font-bold text-slate-900'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="font-extrabold text-slate-900">{opt.label}</div>
                <div className="text-slate-500 text-[11px]">{opt.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Budget Range */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
            3. Maximales Budget (Straßenpreis)
          </label>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs text-slate-500">Maximaler Preis:</span>
              <span className="font-mono text-lg font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                {budgetMax.toLocaleString('de-DE')} €
              </span>
            </div>
            <input
              type="range"
              min={800}
              max={2000}
              step={100}
              value={budgetMax}
              onChange={(e) => setBudgetMax(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
              <span>800 € (Flips)</span>
              <span>1.500 €</span>
              <span>2.000 € (High-End Folds)</span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600">
              <span className="font-bold text-slate-800">{matchedPhones.length} Modell{matchedPhones.length === 1 ? '' : 'e'}</span> entspricht Ihren Kriterien.
            </div>
          </div>
        </div>

      </div>

      {/* Top Match Result Card */}
      {topMatch ? (
        <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white shadow-sm border border-slate-800">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-xs">
                  Beste Empfehlung
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                  {topMatch.category === 'fold' ? 'Book-Style Fold' : 'Clamshell Flip'}
                </span>
                <span className="text-xs text-emerald-400 font-mono font-bold">
                  {topMatch.certifiedCycles.toLocaleString('de-DE')} Zyklen ({topMatch.certifier})
                </span>
              </div>
              <h4 className="text-2xl font-black text-white tracking-tight">
                {topMatch.name}
              </h4>
              <p className="text-sm text-slate-300 max-w-2xl">
                {topMatch.pros[0]} · {topMatch.pros[1]}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span>Dicke: {topMatch.thicknessFoldedMm} mm (gefaltet)</span>
                <span>•</span>
                <span>Gewicht: {topMatch.weightGrams} g</span>
                <span>•</span>
                <span>Schutzklasse: {topMatch.ipRating}</span>
                <span>•</span>
                <span className="text-amber-400 font-bold">ab ca. {topMatch.marketPriceEuro} €</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
              <a
                href={getAmazonProductUrl(topMatch.amazonAsinOrQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-sm transition-transform active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Preis bei Amazon prüfen *</span>
              </a>

              <Link
                to="/vergleich"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                In Vergleichsmatrix ansehen <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 p-6 rounded-2xl bg-amber-50 border border-amber-200 text-center">
          <p className="text-sm font-semibold text-amber-900">
            Kein Modell im gewählten Budget- und Formfaktor-Rahmen gefunden.
          </p>
          <button
            onClick={() => { setBudgetMax(2000); setFormFactor('any'); }}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-bold text-amber-900"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Filter zurücksetzen
          </button>
        </div>
      )}
    </div>
  );
}
