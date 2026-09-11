import React, { useState } from 'react';
import { FOLDABLES_DATA, FoldablePhone, getAmazonProductUrl } from '../data/foldables';
import { Search, Filter, ExternalLink, Check, X, Shield, Cpu, ShoppingBag } from 'lucide-react';

export default function SpecMatrix() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'fold' | 'flip'>('all');
  const [brandFilter, setBrandFilter] = useState<string>('all');

  const filtered = FOLDABLES_DATA.filter((item) => {
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false;
    if (brandFilter !== 'all' && item.brand !== brandFilter) return false;
    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchHinge = item.hingeTech.toLowerCase().includes(q);
      const matchIp = item.ipRating.toLowerCase().includes(q);
      const matchProc = item.processor.toLowerCase().includes(q);
      if (!matchName && !matchHinge && !matchIp && !matchProc) return false;
    }
    return true;
  });

  const brands = Array.from(new Set(FOLDABLES_DATA.map((f) => f.brand)));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      
      {/* Header & Filter Controls */}
      <div className="p-6 sm:p-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5 text-amber-600" />
              Markt-Übersicht 2026
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Spezifikations- &amp; Haltbarkeits-Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Vergleichen Sie physikalische Abmessungen, UTG-Display-Schichten, Scharnier-Zertifikate und IP-Schutzklassen.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Modell, IP-Klasse, Chip suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category & Brand Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Alle Modelle' },
              { id: 'fold', label: 'Book-Style (Folds)' },
              { id: 'flip', label: 'Clamshell (Flips)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  categoryFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-semibold hidden sm:inline">Hersteller:</span>
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">Alle Marken</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-4 font-bold">Modell</th>
              <th className="py-3.5 px-4 font-bold">Dicke (gefaltet / offen)</th>
              <th className="py-3.5 px-4 font-bold">Gewicht</th>
              <th className="py-3.5 px-4 font-bold">Innendisplay &amp; Material</th>
              <th className="py-3.5 px-4 font-bold">Scharnier &amp; Zyklen</th>
              <th className="py-3.5 px-4 font-bold">IP-Schutz</th>
              <th className="py-3.5 px-4 font-bold text-right">Preis &amp; Händler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                
                {/* Model & Brand */}
                <td className="py-4 px-4">
                  <div className="font-extrabold text-slate-900 text-sm">{item.name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] font-mono font-semibold text-slate-500 uppercase">{item.brand}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 font-semibold">
                      {item.badge || item.category}
                    </span>
                  </div>
                </td>

                {/* Thickness */}
                <td className="py-4 px-4 font-mono">
                  <div className="font-bold text-slate-800">{item.thicknessFoldedMm} mm</div>
                  <div className="text-[10px] text-slate-500">offen: {item.thicknessUnfoldedMm} mm</div>
                </td>

                {/* Weight */}
                <td className="py-4 px-4 font-mono font-bold text-slate-800">
                  {item.weightGrams} g
                </td>

                {/* Display Inner */}
                <td className="py-4 px-4">
                  <div className="font-bold text-slate-800">{item.displayInner.sizeInches}" {item.displayInner.refreshRate}</div>
                  <div className="text-[10px] text-slate-500 leading-tight max-w-xs">{item.displayInner.material}</div>
                </td>

                {/* Hinge & Tested Cycles */}
                <td className="py-4 px-4">
                  <div className="font-bold text-emerald-800 flex items-center gap-1 font-mono">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {item.certifiedCycles.toLocaleString('de-DE')} Zyklen
                  </div>
                  <div className="text-[10px] text-slate-500">{item.certifier}</div>
                  <div className="text-[10px] text-slate-400 truncate max-w-[180px]">{item.hingeTech}</div>
                </td>

                {/* IP Rating */}
                <td className="py-4 px-4">
                  <span className={`inline-block px-2 py-0.5 rounded font-mono font-bold text-xs ${
                    item.ipRating === 'IP48'
                      ? 'bg-blue-100 text-blue-900 border border-blue-300'
                      : item.ipRating === 'IPX8'
                      ? 'bg-cyan-50 text-cyan-900 border border-cyan-200'
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.ipRating}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {item.ipRating === 'IP48' ? 'Partikel ≥ 1mm' : 'Nur Süßwasser'}
                  </div>
                </td>

                {/* Price & Amazon Link */}
                <td className="py-4 px-4 text-right">
                  <div className="font-mono font-black text-slate-900 text-sm">
                    ab ca. {item.marketPriceEuro} €
                  </div>
                  <div className="text-[10px] text-slate-400 line-through">
                    UVP {item.msrpEuro} €
                  </div>
                  <div className="mt-1.5">
                    <a
                      href={getAmazonProductUrl(item.amazonAsinOrQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[11px] shadow-sm transition-transform active:scale-95"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Amazon *</span>
                    </a>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer info in Matrix */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <div>
          * Preise sind unverbindliche Richtwerte inkl. MwSt. Stand 2026. Mit Sternchen (*) gekennzeichnete Links sind Partnerlinks.
        </div>
        <div className="font-mono font-semibold">
          {filtered.length} von {FOLDABLES_DATA.length} Modellen gelistet
        </div>
      </div>
    </div>
  );
}
