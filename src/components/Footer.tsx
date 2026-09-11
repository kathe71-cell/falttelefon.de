import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, Cpu, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 font-black font-mono flex items-center justify-center text-lg">
                F⤢
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                falttelefon<span className="text-amber-400">.de</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
              Das unabhängige deutsche Fachportal für Falt-Smartphones (Foldables &amp; Clamshells).
              Wir dokumentieren Scharnier-Physik, Ultra Thin Glass (UTG), Dauerfalt-Zyklen nach TÜV Rheinland &amp; SGS
              sowie reale Marktpreise – ohne Schönfärberei und ohne Werbe-Slop.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                UTG &amp; Tropfenscharnier Analyse
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                100% Zero-CDN Schriften &amp; Cookielos
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Werkzeuge */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-200 mb-4">
              Werkzeuge &amp; Übersichten
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/vergleich" className="hover:text-amber-400 transition-colors">
                  → Vollständige Modell-Matrix
                </Link>
              </li>
              <li>
                <a href="/#rechner" className="hover:text-amber-400 transition-colors">
                  → Faltzyklen- &amp; Lebensdauer-Rechner
                </a>
              </li>
              <li>
                <Link to="/rechner-embed" className="hover:text-amber-400 transition-colors">
                  → Webmaster Embed-Widget
                </Link>
              </li>
              <li>
                <Link to="/ratgeber" className="hover:text-amber-400 transition-colors">
                  → UTG &amp; Scharnier-Ratgeber
                </Link>
              </li>
              <li>
                <a href="/feed.xml" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors">
                  → RSS-Feed (XML) <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors">
                  → LLMs.txt Wissensdatei <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Recht & Transparenz */}
          <div>
            <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-200 mb-4">
              Rechtliches &amp; Kontakt
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/impressum" className="text-amber-400 hover:underline font-semibold">
                  → Impressum &amp; Pflichtangaben (§ 5 DDG)
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-amber-400 transition-colors">
                  → Datenschutzerklärung (DSGVO)
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 leading-snug">
              <strong className="text-slate-200 block mb-1">Transparenz-Hinweis:</strong>
              * Mit Sternchen gekennzeichnete Verweise sind sogenannte Affiliate- / Partnerlinks (u. a. Amazon PartnerNet).
              Beim Kauf über diese Links erhält falttelefon.de eine kleine Provision. Für Sie entstehen keinerlei Mehrkosten.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Anti-AI-Slop & Privacy Guard */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 falttelefon.de · Fachportal für faltbare Mobiltelefone. Alle Markenrechte liegen bei den jeweiligen Rechteinhabern.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>§ 5 DDG konform</span>
            <span>•</span>
            <span>Zero-CDN Typography</span>
            <span>•</span>
            <Link to="/impressum" className="hover:text-amber-400">
              Vollständige Betreiberangaben siehe Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
