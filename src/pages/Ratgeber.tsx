import React from 'react';
import CitationBox from '../components/CitationBox';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { FOLDABLE_ACCESSORIES, getAmazonSearchUrl } from '../data/foldables';
import { BookOpen, ShieldCheck, ShoppingBag, CheckCircle2, HelpCircle, Smartphone, Zap } from 'lucide-react';

export default function Ratgeber() {
  const glossary = [
    {
      term: 'Book-Style (Fold)',
      desc: 'Smartphones wie das Samsung Galaxy Z Fold6 oder Honor Magic V3, die sich horizontal aufklappen lassen und ein großes Tablet-Display (7,6 bis 8,0 Zoll) im Inneren bieten.'
    },
    {
      term: 'Clamshell (Flip)',
      desc: 'Kompakte Falt-Handys wie das Galaxy Z Flip6 oder Motorola Razr 50 Ultra, die sich vertikal zusammenklappen und so im Taschenformat halbiert werden.'
    },
    {
      term: 'Display-Falte (Crease)',
      desc: 'Die Wölbung in der Displaymitte. Bei modernen Tropfenscharnieren ist sie bei frontaler Draufsicht im eingeschalteten Zustand nahezu unsichtbar.'
    },
    {
      term: 'Flex-Modus',
      desc: 'Die Funktion, das Handy halb aufgeklappt (z. B. im 90-Grad-Winkel) auf den Tisch zu stellen – genial für freihändige Videoanrufe, Fotos ohne Stativ oder Kochrezepte.'
    },
    {
      term: 'Außendisplay (Cover Screen)',
      desc: 'Der äußere Bildschirm, der bei zugeklapptem Handy die volle Smartphone-Bedienung ermöglicht, ohne das Gerät jedes Mal öffnen zu müssen.'
    },
    {
      term: 'IP48 Schutzklasse',
      desc: 'Bedeutet Wasserdichtigkeit bei kurzem Untertauchen und erstmals Schutz vor Fremdkörpern ab 1 mm Durchmesser (z. B. Büroklammern oder Krümel).'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          Kaufberatung &amp; Praxis-Tipps 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Ratgeber: Alles, was du vor dem Kauf wissen musst
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Ehrliche Kauf-Tipps, Display-Pflege und Alltagserfahrungen: Worauf du bei Samsung, Google, Honor und Motorola wirklich achten solltest.
        </p>
      </div>

      {/* Guide 1: Display & Knick */}
      <article id="folie-tipp" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
          <Smartphone className="w-4 h-4" />
          Kauf-Tipp 01 · Display &amp; Schutz
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Display &amp; Knick: Stört die Falte im Alltag?
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Die am häufigsten gestellte Frage vor dem Kauf eines Falttelefons lautet: <em>„Sieht oder spürt man den Knick in der Mitte?“</em>
          </p>
          <p>
            Die Antwort lautet: <strong>Im Alltag merkt man ihn nach ein bis zwei Tagen kaum noch.</strong> Wenn der Bildschirm eingeschaltet ist und man frontal darauf blickt (z. B. beim Lesen einer Website oder beim Streamen eines Videos), verschwindet die Falte optisch fast vollständig. Nur bei seitlichem Lichteinfall auf dunklem Hintergrund ist eine dezente Spiegelung zu sehen.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-950 space-y-1 my-4">
            <strong className="font-extrabold block text-amber-900">
              Wichtigste Regel: Werksfolie NIEMALS entfernen!
            </strong>
            <p>
              Auf dem inneren Falt-Display befindet sich eine werksseitig aufgebrachte Spezialschutzfolie. Diese darf <strong>keinesfalls abgezogen werden</strong>, da sie das biegsame Glas schützt. Falls sich nach Jahren am Knick eine Blase bilden sollte, bieten Hersteller wie Samsung einen kostenlosen bzw. günstigen offiziellen Folientausch beim autorisierten Kundenservice an.
            </p>
          </div>
        </div>
      </article>

      {/* Guide 2: Haltbarkeit */}
      <article id="haltbarkeit-alltag" className="space-y-4 scroll-mt-24 border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
          <ShieldCheck className="w-4 h-4" />
          Kauf-Tipp 02 · Scharnier &amp; Haltbarkeit
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Wie viele Jahre hält ein Falt-Smartphone im Alltag?
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Während die allererste Generation aus dem Jahr 2019 noch empfindlich war, sind aktuelle Modelle aus den Jahren 2024 bis 2026 extrem robust konstruiert. Unabhängige Prüfinstitute wie TÜV Rheinland und SGS testen die Gelenke mit <strong>200.000 bis 500.000 Faltungen</strong>.
          </p>
          <p>
            Wer sein Handy 80 Mal am Tag auf- und zuklappt, erreicht in drei Jahren gerade einmal ca. 87.000 Faltungen – also weniger als ein Drittel des Prüflimits. Das Scharnier überlebt in den allermeisten Fällen problemlos den normalen Lebenszyklus des Akkus.
          </p>
        </div>
      </article>

      {/* Guide 3: Wasser & Sand */}
      <article id="wasser-sand" className="space-y-4 scroll-mt-24 border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
          <HelpCircle className="w-4 h-4" />
          Kauf-Tipp 03 · Outdoor &amp; Urlaub
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Wasserdicht &amp; Strandtauglich: Was muss man beachten?
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Die meisten modernen Foldables bieten die Wasserschutzklasse <strong>IPX8 oder IP48</strong>. Das bedeutet:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Regen, Spritzwasser oder versehentliches Fallen ins Waschbecken:</strong> Absolut kein Problem, das Gerät ist wasserdicht abgedichtet.</li>
            <li><strong>Strand &amp; feiner Meersand:</strong> Hier ist Vorsicht geboten! Feine Sandkörner (unter 0,5 mm) können in die Scharnier-Zwischenräume gelangen und beim Falten ein unangenehmes Knirschen verursachen. Am Strand das Handy am besten in einer Reißverschluss-Tasche aufbewahren.</li>
          </ul>
        </div>
      </article>

      {/* Zubehör-Empfehlung */}
      <section className="border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
          <Zap className="w-4 h-4" />
          Empfohlenes Zubehör
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
          Die besten Hüllen &amp; Zubehörteile bei Amazon
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FOLDABLE_ACCESSORIES.map((acc) => (
            <div key={acc.id} className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-1">
                  <span>{acc.title}</span>
                  <span className="text-amber-600 font-mono">{acc.priceEuro}</span>
                </div>
                <p className="text-xs text-slate-600 mb-2">{acc.description}</p>
                <span className="text-[10px] text-slate-400 font-mono block mb-3">Passend für: {acc.compatibleWith}</span>
              </div>
              <a
                href={getAmazonSearchUrl(acc.amazonQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-2xs transition-transform active:scale-95"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Angebot bei Amazon prüfen *</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">
          Wichtigste Begriffe einfach erklärt
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {glossary.map((item) => (
            <div key={item.term} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <h4 className="font-extrabold text-sm text-slate-900 mb-1 font-mono">
                {item.term}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AdSense Placement */}
      <AdSensePlaceholder slotId="5566778899" />

      {/* Citation Box */}
      <CitationBox
        title="Foldable-Kaufberatung: Tipps, Display-Pflege und Alltagstauglichkeit"
        canonicalUrl="https://falttelefon.de/ratgeber"
      />

    </div>
  );
}
