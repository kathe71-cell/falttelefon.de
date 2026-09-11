import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PositionZeroDef from '../components/PositionZeroDef';
import DurabilityCalculator from '../components/DurabilityCalculator';
import FoldableFinder from '../components/FoldableFinder';
import TrustBadge from '../components/TrustBadge';
import EmbedWidgetModal from '../components/EmbedWidgetModal';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { FOLDABLES_DATA, getAmazonProductUrl } from '../data/foldables';
import {
  Smartphone,
  Layers,
  Cpu,
  ShieldCheck,
  ArrowRight,
  Code2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-react';

export default function Home() {
  const [embedOpen, setEmbedOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Was ist der fundamentale Unterschied zwischen einem Fold- und einem Flip-Falttelefon?',
      a: 'Fold-Geräte (z. B. Samsung Galaxy Z Fold6, Google Pixel 9 Pro Fold, Honor Magic V3) besitzen ein Buch-Scharnier (Book-Style). Zusammengeklappt nutzen Sie ein normales 6,3 bis 6,4 Zoll Außendisplay; aufgeklappt steht ein 7,6 bis 8,0 Zoll großes Arbeitsdisplay im Seitenverhältnis ca. 1:1 bzw. 20:18 für Multitasking zur Verfügung. Flip-Modelle (z. B. Galaxy Z Flip6, Razr 50 Ultra) falten sich vertikal wie eine Puderdose zusammen, um das Smartphone im Alltag in der Hosentasche auf die halbe Größe zu schrumpfen.'
    },
    {
      q: 'Kann man die werkseitige Schutzfolie auf dem Innendisplay entfernen?',
      a: 'Nein, keinesfalls! Die oberste Polyethylenterephthalat-Schicht (PET) ist ein integraler struktureller Bestandteil des Falt-Panels. Sie schützt das darunterliegende, nur 30 Mikrometer dünne Ultra Thin Glass (UTG) vor punktueller Druckbelastung und Rissbildung. Ein eigenmächtiges Abziehen führt in der Regel zum sofortigen Verlust der Herstellergarantie und zu Displaybrüchen.'
    },
    {
      q: 'Wie widerstandsfähig sind Falttelefone gegen Strand-Sand und Staub?',
      a: 'Historisch besaßen Falttelefone nur Wasserschutz (IPX8) ohne Partikelzertifizierung, da mikroskopische Staubkörner in die Scharnier-Zahnräder gelangen konnten. Neuere Modelle wie das Galaxy Z Fold6 und Flip6 besitzen die Einstufung IP48: Die Ziffer „4“ garantiert Schutz gegen feste Fremdkörper ab 1,0 Millimeter Durchmesser. Feiner Meersand (0,1–0,5 mm) kann weiterhin in die Mechanik eindringen, weshalb Falttelefone nicht am Strand im Sand abgelegt werden sollten.'
    },
    {
      q: 'Warum fühlt sich der Knick (Display-Crease) bei manchen Handys flacher an als bei anderen?',
      a: 'Dies liegt am Radius des Wassertropfen-Scharniers (Waterdrop Hinge). Während frühere Generationen das Display in einem engen U-Winkel zusammenpressten, bildet das Panel bei Tropfenscharnieren im geschlossenen Zustand eine tropfenförmige Schlaufe im Gehäuseinneren. Geräte wie das OnePlus Open oder Honor Magic V3 nutzen größere Biegeradien und Titan-Trägerplatten, wodurch der Knick beim Darübergleiten mit dem Finger fast unspürbar ist.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION (Editorial, High Contrast, Anti-AI-Slop) */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden border-b border-slate-200 bg-white">
        {/* Subtle Tech Grid Decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Superscript Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-white font-mono text-[11px] font-black uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5 text-amber-400" />
              REFERENZPORTAL 2026
            </span>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">
              ULTRA THIN GLASS · SCHWENKMECHANIK · SGS/TÜV NORMEN
            </span>
          </div>

          {/* Huge Display Headline */}
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950 leading-none mb-6">
              Falttelefon<span className="text-amber-500">.de</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight leading-snug">
              Unabhängige Marktübersicht, Haltbarkeits-Laborprüfwerte und Scharnier-Physik moderner Foldables.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Vom 9,2 mm schlanken Book-Style bis zum Hosentaschen-Clamshell: Wir analysieren Biegewinkel, Displayknicke, Ultra Thin Glass (UTG) und zertifizierte Faltzyklen ohne Marketing-Floskeln.
            </p>
          </div>

          {/* Quick Stats Panel (Reale Fakten-Kennzahlen) */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="p-3">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Biegbares Glas</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-0.5">30 µm</div>
              <span className="text-xs text-slate-500">Ultra Thin Glass (UTG)</span>
            </div>
            <div className="p-3 border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">SGS Prüfnorm</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono mt-0.5">500.000</div>
              <span className="text-xs text-slate-500">Zertifizierte Faltzyklen</span>
            </div>
            <div className="p-3 border-t md:border-t-0 md:border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Dicken-Rekord</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono mt-0.5">9,2 mm</div>
              <span className="text-xs text-slate-500">gefaltet (Honor Magic V3)</span>
            </div>
            <div className="p-3 border-t md:border-t-0 md:border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Schutzklasse</span>
              <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono mt-0.5">IP48</div>
              <span className="text-xs text-slate-500">DIN EN 60529 Standard</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#rechner"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition-transform active:scale-95"
            >
              <Cpu className="w-4 h-4" />
              <span>Haltbarkeitsrechner starten</span>
            </a>

            <Link
              to="/vergleich"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-transform active:scale-95"
            >
              <span>Alle Modelle in der Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setEmbedOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300 transition-colors"
            >
              <Code2 className="w-4 h-4 text-slate-500" />
              <span>Embed-Widget</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. POSITION-0 DEFINITIONS-BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PositionZeroDef />
      </section>

      {/* 3. INTERACTIVE DURABILITY CALCULATOR */}
      <section id="rechner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <DurabilityCalculator />
      </section>

      {/* 4. FOLDABLE FINDER QUIZ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FoldableFinder />
      </section>

      {/* 5. ASYMMETRIC BENTO GRID: TECHNOLOGIE & WERKSTOFFE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-100 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Werkstoff- &amp; Konstruktionslehre
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Scharnier-Mechanik &amp; Display-Physik
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Warum moderne Falttelefone die Kinderkrankheiten früherer Generationen überwunden haben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Card 1 (Large 2 cols): Wassertropfen-Scharnier */}
          <div className="md:col-span-2 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest block mb-2">
              SCHLÜSSEL-INNOVATION
            </span>
            <h3 className="text-2xl font-black text-slate-900 mb-3">
              Das Wassertropfen-Scharnier (Waterdrop Hinge)
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Bei früheren Falt-Smartphones wurde das Display wie ein gefaltetes Blatt Papier im 180-Grad-Winkel spitz zusammengequetscht. Die Folge: Starke Faltenbildung und Spalten im Gehäuse, durch die Schmutz eindringen konnte. Das moderne Wassertropfenscharnier lässt das OLED-Panel im Scharnierinneren eine sanfte Tropfenschlaufe formen.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">Kein Gehäusespalt mehr</strong>
                <span className="text-slate-600">
                  Beide Gehäusehälften liegen im geschlossenen Zustand völlig plan aufeinander.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block font-bold mb-1">Sweep-Borsten-System</strong>
                <span className="text-slate-600">
                  Mikrofeine Nylon-Fasern bürsten Staub bei jedem Faltvorgang aktiv aus dem Getriebe.
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Ultra Thin Glass */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                MATERIAL-PHYSIK
              </span>
              <h3 className="text-xl font-black text-white mb-3">
                Ultra Thin Glass (UTG)
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Mit einer Materialstärke von nur ca. 30 Mikrometern ist UTG dünner als ein menschliches Haar (ca. 70 µm). Durch einen Ionen-Austausch-Prozess wird die molekulare Biegsamkeit maximiert, ohne die gläserne Haptik zu verlieren.
              </p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-[11px] text-slate-300 font-mono">
              <span className="text-amber-400 font-bold block mb-0.5">Mohs-Härte Level 2–3</span>
              Wegen der weichen Deckfolie niemals mit spitzen Gegenständen oder Fingernägeln eindrücken.
            </div>
          </div>

          {/* Bento Card 3: Formfaktor Book-Style */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black font-mono mb-4">
              7.6"
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-2">
              Book-Style Foldables
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Für Nutzer, die unterwegs Tabellen bearbeiten, Dokumente lesen oder zwei Apps nebeneinander betreiben. Oft mit Stylus-Support für handschriftliche Notizen.
            </p>
          </div>

          {/* Bento Card 4: Formfaktor Clamshell */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black font-mono mb-4">
              4.0"
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-2">
              Clamshell Flips
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Halbiert das Packmaß in der Hosentasche. Große Außendisplays erlauben das Beantworten von WhatsApp-Nachrichten und Kameranutzung im halb aufgeklappten Flex-Mode.
            </p>
          </div>

          {/* Bento Card 5: IP48 Schutzklasse */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-black font-mono mb-4">
              IP48
            </div>
            <h4 className="text-lg font-black text-slate-900 mb-2">
              Normschutz nach DIN EN 60529
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Wasserdicht bis 1,5 Meter Tiefe in Süßwasser für 30 Minuten. Die erste Partikelschutz-Klasse für Falt-Smartphones verhindert das Eindringen größerer Fremdkörper in das Gelenk.
            </p>
          </div>

        </div>
      </section>

      {/* 6. TOP-3 MODELL SHOWCASE MIT AMAZON-LINKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
              Aktuelle Markt-Highlights 2026
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Die drei prägendsten Falttelefone im Schnellcheck
            </h2>
          </div>
          <Link
            to="/vergleich"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
          >
            Alle Modelle in der Spezifikations-Matrix <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOLDABLES_DATA.slice(0, 3).map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                    {phone.brand} · {phone.category === 'fold' ? 'Book-Style' : 'Flip'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    {phone.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {phone.name}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 my-4">
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400 font-mono">Dicke (gefaltet):</span>
                    <span className="font-mono font-bold text-slate-800">{phone.thicknessFoldedMm} mm</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400 font-mono">Gewicht:</span>
                    <span className="font-mono font-bold text-slate-800">{phone.weightGrams} g</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400 font-mono">Innendisplay:</span>
                    <span className="font-bold text-slate-800">{phone.displayInner.sizeInches}" OLED ({phone.displayInner.refreshRate})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-1">
                    <span className="text-slate-400 font-mono">Scharnier-Prüfung:</span>
                    <span className="font-bold text-emerald-700">{phone.certifiedCycles.toLocaleString('de-DE')} Zyklen</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-slate-400 font-mono">Schutzgrad:</span>
                    <span className="font-mono font-bold text-blue-700">{phone.ipRating}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-snug mb-4">
                  ✓ {phone.pros[0]}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-slate-500">Straßenpreis:</span>
                  <span className="font-mono text-lg font-black text-slate-900">
                    ab ca. {phone.marketPriceEuro} €
                  </span>
                </div>

                <a
                  href={getAmazonProductUrl(phone.amazonAsinOrQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-sm transition-transform active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Preis bei Amazon prüfen *</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. E-E-A-T TRUST-BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadge />
      </section>

      {/* 8. TOPICAL AUTHORITY RATGEBER-TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-100 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            Wissen &amp; Anleitungen
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Aus der Fachredaktion: Falt-Handy Guides
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Ausführliche Erklärungen zu Display-Physik, Schutzklassen und Pflegemaßnahmen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/ratgeber#utg-guide"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold block mb-2">
                GUIDE 01 · DISPLAY-PHYSIK
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                UTG vs. CPI: Warum biegbares Glas nicht splittert
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wie Schott und Corning Glas auf 30 Mikrometer ätzen und warum die PET-Trägerfolie niemals entfernt werden darf.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/ratgeber#scharnier-technik"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold block mb-2">
                GUIDE 02 · MECHANIK
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                Wassertropfen-Scharniere im Dauertest
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Titan-Zahnräder, Wassertropfen-Schlaufen und Reibungslamellen: Wie 500.000 Faltungen im Labor simuliert werden.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/ratgeber#ip-schutzklassen"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-2">
                GUIDE 03 · NORMEN
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                IP48 vs. IPX8: Schutz gegen Wasser &amp; Sand
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Was die Kennziffern nach DIN EN 60529 bei Falt-Smartphones bedeuten und warum Meersand die größte Gefahr bleibt.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 9. ADSENSE PLACEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder slotId="9988776655" />
      </section>

      {/* 10. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Häufig gestellte Fragen
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            FAQ: Falttelefone &amp; Haltbarkeit
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-amber-600 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <span className="text-slate-400 font-mono text-lg shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Embed Modal */}
      <EmbedWidgetModal isOpen={embedOpen} onClose={() => setEmbedOpen(false)} />

    </div>
  );
}
