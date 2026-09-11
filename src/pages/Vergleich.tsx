import React from 'react';
import SpecMatrix from '../components/SpecMatrix';
import CitationBox from '../components/CitationBox';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { TableProperties, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';

export default function Vergleich() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <TableProperties className="w-3.5 h-3.5 text-amber-700" />
          Markt-Matrix 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Falttelefon Spezifikations- &amp; Modellvergleich
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Umfassende tabellarische Gegenüberstellung aller relevanten Foldable-Smartphones auf dem deutschen Markt.
          Vergleichen Sie reale Gehäusedicke, Gramm-Gewichte, zertifizierte Faltzyklen (SGS / TÜV) und IP-Dichtigkeitsklassen.
        </p>
      </div>

      {/* Main Spec Matrix */}
      <SpecMatrix />

      {/* Buying Advice Note */}
      <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed space-y-2">
        <h4 className="font-extrabold text-sm text-amber-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Kaufberatungs-Hinweis der Redaktion:
        </h4>
        <p>
          Achten Sie bei der Modellauswahl nicht nur auf den Prozessor, sondern primär auf das <strong>Seitenverhältnis des Außendisplays</strong> und das <strong>Scharnier-Gewicht</strong>. Modelle mit einem normalen 20:9 Außendisplay (z. B. Google Pixel 9 Pro Fold oder Honor Magic V3) lassen sich unterwegs wie ein gewohntes Smartphone mit einer Hand bedienen, ohne dass Tastatureingaben gequetscht wirken.
        </p>
      </div>

      {/* AdSense Placement */}
      <AdSensePlaceholder slotId="1122334455" />

      {/* Citation Box */}
      <CitationBox
        title="Marktvergleich Falt-Smartphones 2026: Spezifikationen, Scharnier-Zyklen und Maße"
        canonicalUrl="https://falttelefon.de/vergleich"
      />

    </div>
  );
}
