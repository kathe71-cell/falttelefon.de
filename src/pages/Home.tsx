import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PositionZeroDef from '../components/PositionZeroDef';
import DurabilityCalculator from '../components/DurabilityCalculator';
import FoldableFinder from '../components/FoldableFinder';
import TrustBadge from '../components/TrustBadge';
import EmbedWidgetModal from '../components/EmbedWidgetModal';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { FOLDABLES_DATA, FOLDABLE_ACCESSORIES, getAmazonProductUrl, getAmazonSearchUrl } from '../data/foldables';
import {
  ShoppingBag,
  Sparkles,
  ArrowRight,
  Code2,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Smartphone,
  Layers,
  Zap,
  Tag
} from 'lucide-react';

export default function Home() {
  const [embedOpen, setEmbedOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Lohnt sich ein Falttelefon im Alltag oder ist es nur eine Spielerei?',
      a: 'Ein Falt-Smartphone lohnt sich vor allem dann, wenn Sie unterwegs regelmäßig Videos schauen, Texte lesen, Tabellen bearbeiten oder mit zwei Apps nebeneinander arbeiten möchten (z. B. WhatsApp und YouTube). Bei Flip-Modellen (wie dem Galaxy Z Flip6 oder Razr 50 Ultra) ist der größte Vorteil die extreme Kompaktheit in der Hosentasche und die Möglichkeit, freihändig Selfies und Videos aufzunehmen.'
    },
    {
      q: 'Spürt oder sieht man den Knick (Display-Falte) beim Bedienen?',
      a: 'Bei modernen Falttelefonen ist die Displayfalte bei frontaler Draufsicht im eingeschalteten Zustand kaum sichtbar. Beim Wischen mit dem Daumen spürt man bei Geräten wie dem Samsung Galaxy Z Fold6 eine leichte Vertiefung. Bei Modellen mit breiten Tropfenscharnieren wie dem OnePlus Open oder Honor Magic V3 ist der Übergang noch flacher und kaum noch fühlbar.'
    },
    {
      q: 'Muss man Angst vor Display-Brüchen oder Scharnier-Schäden haben?',
      a: 'Nein, die Technik ist heute absolut ausgereift. Zertifizierte Scharniere halten 200.000 bis 500.000 Faltungen aus. Selbst bei 80 Klappvorgängen pro Tag entspricht das einer mechanischen Lebensdauer von über 10 bis 15 Jahren – länger als der normale Akku- und Nutzungszyklus eines Handys.'
    },
    {
      q: 'Darf man die Schutzfolie auf dem Innenbildschirm abziehen?',
      a: 'Auf keinen Fall! Die werkseitige PET-Folie auf dem biegsamen Ultra Thin Glass ist ein fester Bestandteil des Displays und schützt vor Kratzern. Wer sie selbst abzieht, riskiert Displaydefekte und verliert die Herstellergarantie.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION (Conversion-stark, Kaufberatung & Deals) */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Top Deal Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500 text-slate-950 font-mono text-[11px] font-black uppercase tracking-wider shadow-2xs">
              <ShoppingBag className="w-3.5 h-3.5 text-slate-950" />
              KAUFBERATER &amp; ANGEBOTE 2026
            </span>
            <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
              Finde dein Traum-Handy zum besten Preis · Unabhängige Kaufempfehlungen
            </span>
          </div>

          {/* Eye-Catching Headline */}
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-slate-950 leading-none mb-6">
              Falttelefon<span className="text-amber-500">.de</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Die besten Falt-Smartphones im Vergleich: Finde dein perfektes Foldable zum besten Angebot.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Vom kompakten Klapp-Handy für jede Hosentasche bis zum riesigen 8-Zoll-Multitasking-Kraftpaket. Wir vergleichen die Top-Modelle von Samsung, Google, Honor und Motorola mit echten Alltagsempfehlungen und aktuellen Amazon-Preisen.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="p-3">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Einstiegspreise</span>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mt-0.5">ab 899 €</div>
              <span className="text-xs text-slate-500">z. B. Galaxy Z Flip6</span>
            </div>
            <div className="p-3 border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Bildschirmgröße</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-600 font-mono mt-0.5">bis 8,0"</div>
              <span className="text-xs text-slate-500">Echtes Tablet-Gefühl</span>
            </div>
            <div className="p-3 border-t md:border-t-0 md:border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Schlankheits-Tipp</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono mt-0.5">9,2 mm</div>
              <span className="text-xs text-slate-500">Honor Magic V3 (gefaltet)</span>
            </div>
            <div className="p-3 border-t md:border-t-0 md:border-l border-slate-200">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-500">Haltbarkeit</span>
              <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono mt-0.5">10+ Jahre</div>
              <span className="text-xs text-slate-500">Bis 500k Klappzyklen</span>
            </div>
          </div>

          {/* Action Button Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#finder"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md transition-transform active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Foldable-Finder starten</span>
            </a>

            <a
              href={getAmazonSearchUrl('Foldable Smartphone Faltbar')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Top-Deals bei Amazon prüfen *</span>
            </a>

            <Link
              to="/vergleich"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-sm border border-slate-300 transition-colors"
            >
              <span>Große Modell-Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 2. INTERACTIVE FOLDABLE FINDER QUIZ (High conversion entry) */}
      <section id="finder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <FoldableFinder />
      </section>

      {/* 3. POSITION-0 DEFINITIONS-BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PositionZeroDef />
      </section>

      {/* 4. TOP EMPFEHLUNGEN 2026 (Affiliate Highlight Cards mit Preisen und Amazon-CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-100 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5 text-amber-700" />
              Die Redaktions-Favoriten 2026
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Die besten Falttelefone im Überblick
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Hier findest du die beliebtesten Modelle mit aktuellem Straßenpreis und sofortiger Amazon-Verfügbarkeit.
            </p>
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
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase font-bold text-slate-500">
                    {phone.brand} · {phone.category === 'fold' ? 'Book-Style Fold' : 'Clamshell Flip'}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                    {phone.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {phone.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {phone.verdict}
                </p>

                {/* Key specs pill grid */}
                <div className="grid grid-cols-2 gap-2 my-4 text-xs font-mono">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Display</span>
                    <strong className="text-slate-800 font-bold">{phone.displayInner.sizeInches}" OLED</strong>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Dicke (zu)</span>
                    <strong className="text-slate-800 font-bold">{phone.thicknessFoldedMm} mm</strong>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Gewicht</span>
                    <strong className="text-slate-800 font-bold">{phone.weightGrams} g</strong>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-slate-400 block uppercase">Schutz</span>
                    <strong className="text-blue-700 font-bold">{phone.ipRating}</strong>
                  </div>
                </div>

                {/* Pros List */}
                <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                  {phone.pros.slice(0, 2).map((pro, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Amazon Straßenpreis:</span>
                    <span className="font-mono text-2xl font-black text-slate-900">
                      ab ca. {phone.marketPriceEuro} €
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 line-through">
                    UVP {phone.msrpEuro} €
                  </span>
                </div>

                <a
                  href={getAmazonProductUrl(phone.amazonAsinOrQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-sm transition-transform active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Preis &amp; Verfügbarkeit bei Amazon prüfen *</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BELIEBTES ZUBEHÖR (Großer zusätzlicher Affiliate-Hebel!) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-mono text-xs font-black uppercase tracking-wider mb-2">
                <Zap className="w-3.5 h-3.5" />
                Must-Have Zubehör
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Beliebtes Zubehör für dein Falttelefon
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                Schütze dein neues Smartphone von Tag eins: Die beliebtesten Hüllen mit Scharnierschutz, Stifte und Schnellladegeräte.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FOLDABLE_ACCESSORIES.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl flex flex-col justify-between hover:border-amber-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 mb-2">
                    <span>{item.category.toUpperCase()}</span>
                    <span className="font-bold text-white">{item.priceEuro}</span>
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="text-[10px] text-slate-400 font-mono block mb-4">
                    Passend für: {item.compatibleWith}
                  </span>
                </div>

                <a
                  href={getAmazonSearchUrl(item.amazonQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs transition-transform active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Bei Amazon ansehen *</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HALTBARKEITS-CHECK (Alltagstauglichkeit statt Labor-Physics) */}
      <section id="rechner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Haltbarkeits-Check: Wie viele Jahre hält dein Falt-Handy?
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Viele Käufer fragen sich: Leiert das Scharnier aus? Berechne hier, wie viele Jahre dein Wunschmodell bei deiner täglichen Klapp-Häufigkeit problemlos durchhält.
          </p>
        </div>
        <DurabilityCalculator />
      </section>

      {/* 7. KAUFBERATUNG: FOLD VS FLIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-black font-mono mb-4 text-lg">
                📖
              </div>
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest block mb-1">
                FÜR POWER-USER &amp; BUSINESS
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Book-Style Foldables (z. B. Galaxy Z Fold, Pixel Fold)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Perfekt, wenn du dein Smartphone als vollwertigen Arbeitsplatz nutzen möchtest. Mit bis zu 8 Zoll Diagonale kannst du unterwegs Dokumente bearbeiten, zwei Apps nebeneinander nutzen und per S-Pen handschriftlich Notizen verfassen.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">✓ Großes Tablet-Display immer in der Tasche</li>
                <li className="flex items-center gap-2">✓ Ideal für Multitasking, Excel &amp; YouTube</li>
                <li className="flex items-center gap-2">✓ Stylus-Eingabestift oft unterstützt</li>
              </ul>
            </div>
            <Link
              to="/vergleich"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
            >
              Alle Book-Style Folds ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-black font-mono mb-4 text-lg">
                📱
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                FÜR LIFESTYLE &amp; KOMPAKTHEIT
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                Clamshell Flips (z. B. Galaxy Z Flip, Razr 50 Ultra)
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Perfekt, wenn moderne Handys dir zu groß geworden sind. Das Flip schrumpft beim Zuklappen auf die Größe einer kleinen Puderdose und verschwindet unbemerkt in jeder Jeans- oder Jackentasche.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                <li className="flex items-center gap-2">✓ Halbiert das Hosentaschen-Format</li>
                <li className="flex items-center gap-2">✓ Tolles Außendisplay für Nachrichten ohne Aufklappen</li>
                <li className="flex items-center gap-2">✓ Flex-Cam: Handy hinstellen für perfekte Gruppenfotos</li>
              </ul>
            </div>
            <Link
              to="/vergleich"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              Alle Clamshell Flips ansehen <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. TRUST-BADGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustBadge />
      </section>

      {/* 9. RATGEBER TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Hilfreiche Ratgeber &amp; Kauf-Tipps
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Praktische Tipps zu Display-Schutz, Hüllen-Auswahl und worauf man beim Kauf achten muss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/ratgeber#folie-tipp"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold block mb-2">
                KAUFTIPP 01 · DISPLAY-PFLEGE
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                Die werkseitige Schutzfolie: Warum sie draufbleiben muss
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alles, was du über die innere Schutzschicht und kostenlose Tauschprogramme der Hersteller wissen musst.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/ratgeber#wasser-sand"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold block mb-2">
                KAUFTIPP 02 · ALLTAGSTAUGLICHKEIT
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                Wasserdicht &amp; Sand-Schutz: Was bedeutet IP48?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Wie robust moderne Falttelefone bei Regen, am Strand oder beim Sport wirklich sind.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>

          <Link
            to="/ratgeber#vergleich-tipp"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-bold block mb-2">
                KAUFTIPP 03 · MARKTÜBERSICHT
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                Samsung, Google oder Honor: Welche Marke passt zu dir?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Großer Überblick über Software-Updates, Kamera-Leistung und die schlankesten Gehäuse.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600">
              Artikel lesen <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 10. ADSENSE PLACEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder slotId="9988776655" />
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Häufige Fragen vor dem Kauf
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            FAQ: Falttelefone &amp; Kaufentscheidung
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
