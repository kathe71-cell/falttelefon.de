import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, EyeOff, Server, Cookie } from 'lucide-react';

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      <div className="border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          DSGVO &amp; MStV Konformität
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          Datenschutzerklärung
        </h1>
        <p className="text-xs text-slate-500 font-mono mt-1">
          Transparente Informationspflichten nach Art. 13 &amp; 14 DSGVO
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 text-sm text-slate-700 leading-relaxed shadow-sm">
        
        {/* 1. Verantwortlicher */}
        <div>
          <h2 className="text-base font-extrabold text-slate-900 mb-2">
            1. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist der Betreiber von falttelefon.de.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Vollständige Kontaktdaten siehe <Link to="/impressum" className="text-amber-700 underline font-semibold">Impressum</Link>.
          </p>
        </div>

        {/* 2. Grundsatz cookieloser Betrieb */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            <EyeOff className="w-4 h-4 text-emerald-600" />
            2. Datensparsame Architektur &amp; Zero-CDN Schriften
          </h2>
          <p>
            Der Schutz Ihrer Privatsphäre hat höchste Priorität. Wir setzen auf dieser Website auf ein Zero-CDN-Konzept für Schriften: Es werden keinerlei externe Schrift-Server (wie Google Fonts) aufgerufen. Alle Schriftarten werden direkt über Ihr lokales Betriebssystem bezogen. Ihre IP-Adresse wird beim reinen Laden der Typografie an keine Drittstaaten übermittelt.
          </p>
        </div>

        {/* 3. Vercel Web Analytics */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            <Server className="w-4 h-4 text-blue-600" />
            3. Vercel Web Analytics (Cookielose Webanalyse)
          </h2>
          <p>
            Diese Website nutzt Vercel Web Analytics, einen Analysedienst der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          </p>
          <p className="mt-2">
            Vercel Web Analytics arbeitet <strong>vollständig ohne Cookies</strong> und ohne Speicherung personenbezogener Daten. Zur Erfassung aggregierter Nutzungsstatistiken (z. B. aufgerufene Unterseiten, Verweildauer, Browsertyp, Betriebssystem) wird eine anonymisierte Prüfsumme aus IP-Adresse, User-Agent und Domain berechnet, die nach Ablauf eines Tages unwiderruflich verworfen wird. Es erfolgt keine Nachverfolgung über verschiedene Websites hinweg (kein Cross-Site Tracking).
          </p>
          <p className="mt-2 text-xs text-slate-500 font-mono">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der bedarfsgerechten Gestaltung und technischen Optimierung des Portals).
          </p>
        </div>

        {/* 4. Google AdSense */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-extrabold text-slate-900 mb-2">
            4. Google AdSense
          </h2>
          <p>
            Diese Website bindet Werbeanzeigen über Google AdSense ein, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
          </p>
          <p className="mt-2">
            Google AdSense verwendet Technologien zur Auslieferung relevanter Anzeigen. Bei der Einblendung können Cookies und Web Beacons (unsichtbare Grafiken) verwendet werden, um Daten über den Besucherverkehr auf diesen Seiten zu sammeln. Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.
          </p>
          <p className="mt-2 text-xs text-slate-500 font-mono">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        {/* 5. Amazon PartnerNet */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-extrabold text-slate-900 mb-2">
            5. Amazon EU-Partnerprogramm
          </h2>
          <p>
            Der Betreiber ist Teilnehmer des Partnerprogramms von Amazon EU (Store-ID: esstri-21 / Tracking-ID: falttelefon.de-21). Wenn Sie einen mit Sternchen (*) gekennzeichneten Partnerlink anklicken und anschließend bei Amazon.de einkaufen, setzt Amazon ggf. ein Session-Cookie, um die Herkunft der Bestellung nachzuvollziehen.
          </p>
          <p className="mt-2 text-xs text-slate-500 font-mono">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (wirtschaftlicher Betrieb unseres Informationsportals).
          </p>
        </div>

        {/* 6. Rechte der Betroffenen */}
        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-extrabold text-slate-900 mb-2">
            6. Ihre Betroffenenrechte nach der DSGVO
          </h2>
          <p>
            Sie haben gegenüber dem Verantwortlichen das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu.
          </p>
        </div>

      </div>

    </div>
  );
}
