import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, Scale, ShoppingBag } from 'lucide-react';

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Scale className="w-3.5 h-3.5 text-slate-700" />
          Rechtliche Pflichtangaben
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          Impressum (§ 5 DDG &amp; § 18 MStV)
        </h1>
        <p className="text-xs text-slate-500 font-mono mt-1">
          Diensteanbieter gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>
      </div>

      {/* Operator Details */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
            Angaben gemäß § 5 DDG:
          </h2>
          <div className="text-base font-bold text-slate-900">
            Jens Kathe
          </div>
          <div className="text-sm text-slate-600 mt-1 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>Hansastraße 6<br />34119 Kassel<br />Deutschland</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="block text-xs font-mono text-slate-400 uppercase font-semibold mb-1">
              E-Mail Kontakt:
            </span>
            <a
              href="mailto:jens@kathe.org"
              className="text-amber-700 hover:text-amber-800 font-semibold underline inline-flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-amber-600" />
              jens@kathe.org
            </a>
          </div>

          <div>
            <span className="block text-xs font-mono text-slate-400 uppercase font-semibold mb-1">
              Telefonische Erreichbarkeit:
            </span>
            <a
              href="tel:+4917866526230"
              className="text-slate-800 hover:text-slate-950 font-semibold inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-slate-400" />
              +49 178 6652623
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-2">
          <div>
            <strong className="text-slate-900">Umsatzsteuer-Status:</strong><br />
            Gemäß § 19 UStG wird als Kleinunternehmer keine Umsatzsteuer erhoben und ausgewiesen.
          </div>
          <div>
            <strong className="text-slate-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
            Jens Kathe, Hansastraße 6, 34119 Kassel
          </div>
        </div>

      </div>

      {/* Amazon PartnerNet Clause */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3 text-xs leading-relaxed text-slate-700">
        <div className="flex items-center gap-2 font-bold text-slate-900 uppercase font-mono tracking-wider">
          <ShoppingBag className="w-4 h-4 text-amber-600" />
          Teilnahme am Amazon EU-Partnerprogramm
        </div>
        <p>
          falttelefon.de ist Teilnehmer des Partnerprogramms von Amazon EU (Store-ID: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-[11px]">esstri-21</code>, Tracking-ID: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-300 font-mono text-[11px]">falttelefon.de-21</code>), das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann.
        </p>
        <p>
          <em>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.</em> Mit Sternchen (*) gekennzeichnete Links sind Werbelinks / Partnerlinks. Für den Endverbraucher entstehen durch den Klick oder Kauf keinerlei Mehrkosten.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="text-xs text-slate-500 leading-relaxed space-y-3 pt-2">
        <h3 className="font-bold text-slate-700 uppercase font-mono tracking-wider text-[11px]">
          Haftung für Inhalte und Hyperlinks
        </h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>

    </div>
  );
}
