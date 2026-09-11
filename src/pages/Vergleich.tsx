import React from 'react';
import SpecMatrix from '../components/SpecMatrix';
import CitationBox from '../components/CitationBox';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { TableProperties, ShoppingBag, Sparkles } from 'lucide-react';
import { getAmazonSearchUrl } from '../data/foldables';

export default function Vergleich() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <TableProperties className="w-3.5 h-3.5 text-amber-700" />
            Großer Modell- &amp; Preisvergleich 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Alle Falt-Smartphones im Direktvergleich
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Vergleiche Bildschirmgrößen, Gehäusedicke, Gewicht und aktuelle Straßenpreise führender Falt- und Klapp-Handys. Finde mit einem Klick das beste Amazon-Angebot.
          </p>
        </div>

        <a
          href={getAmazonSearchUrl('Foldable Smartphone')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-sm transition-transform active:scale-95 shrink-0 self-start md:self-auto"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Aktuelle Angebote bei Amazon *</span>
        </a>
      </div>

      {/* Main Spec Matrix */}
      <SpecMatrix />

      {/* Buying Advice Note */}
      <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-2">
        <h4 className="font-extrabold text-sm text-amber-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Tipp für Schnäppchenjäger:
        </h4>
        <p>
          Die Preise für Falttelefone sinken oft 3–6 Monate nach Verkaufsstart spürbar unter die unverbindliche Preisempfehlung (UVP). Vor allem Vorgänger-Generationen wie das Galaxy Z Flip5 oder Z Fold5 sind bei Amazon häufig mit hohen Rabatten als absolute Preis-Leistungs-Kracher erhältlich.
        </p>
      </div>

      {/* AdSense Placement */}
      <AdSensePlaceholder slotId="1122334455" />

      {/* Citation Box */}
      <CitationBox
        title="Foldable Modell- und Preisvergleich: Alle Falt-Smartphones im Überblick"
        canonicalUrl="https://falttelefon.de/vergleich"
      />

    </div>
  );
}
