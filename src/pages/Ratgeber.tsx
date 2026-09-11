import React from 'react';
import CitationBox from '../components/CitationBox';
import AdSensePlaceholder from '../components/AdSensePlaceholder';
import { BookOpen, Layers, ShieldCheck, Wrench, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export default function Ratgeber() {
  const glossary = [
    {
      term: 'Ultra Thin Glass (UTG)',
      desc: 'Biegbares Spezialglas mit einer Dicke von lediglich 30 bis 50 Mikrometern. Durch chemisches Härten (KNO3-Salzbad) elastisch verformbar, erfordert aber werkseitige PET-Schutzfolien gegen spitze Druckpunkte.'
    },
    {
      term: 'Wassertropfen-Scharnier (Waterdrop Hinge)',
      desc: 'Mechanisches Gelenk, das das OLED-Panel beim Zusammenfalten im Inneren in eine tropfenförmige Schlaufe legt. Vergrößert den Biegeradius und verhindert das spitzwinklige Knicken.'
    },
    {
      term: 'Display-Crease (Falte)',
      desc: 'Die sicht- und spürbare Vertiefung entlang der Faltachse. Moderne Tropfenscharniere reduzieren die Faltentiefe auf unter 0,15 mm, wodurch sie bei frontaler Draufsicht kaum wahrnehmbar ist.'
    },
    {
      term: 'Flex-Modus (Freistopp-Scharnier)',
      desc: 'Fähigkeit des Scharniers, in Winkeln zwischen ca. 75° und 115° stabil geöffnet zu bleiben, um das Gerät wie einen Mini-Laptop auf den Tisch zu stellen (z. B. für Videokonferenzen oder Stativ-Fotos).'
    },
    {
      term: 'Sweep-Borsten (Sweeper Technology)',
      desc: 'Mikroskopische Kohlefaser- oder Nylon-Bürsten im Scharniergehäuse, die Staub und Fussel bei jedem Auf- und Zuklappen mechanisch aus der Getriebekammer fegen.'
    },
    {
      term: 'DIN EN 60529 (IP-Schutzarten)',
      desc: 'Internationale Prüfnorm zur Bestimmung des Gehäuseschutzes. IP48 bedeutet Schutz gegen feste Fremdkörper ≥ 1,0 mm (Ziffer 4) und Schutz gegen dauerndes Untertauchen in Wasser (Ziffer 8).'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-amber-700" />
          Technischer Leitfaden 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Ratgeber: Scharnier-Physik, Glas &amp; Pflege
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Fundierte Analysen zu Werkstoffkunde, Haltbarkeits-Zertifizierungen und der richtigen Pflege empfindlicher Falt-Displays.
        </p>
      </div>

      {/* Guide 1: UTG vs CPI */}
      <article id="utg-guide" className="space-y-4 scroll-mt-24">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700">
          <Layers className="w-4 h-4" />
          Werkstoffkunde · Guide 01
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          UTG vs. CPI: Warum biegbares Glas elastisch ist
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            In den ersten Generationen faltbarer Mobiltelefone (2019) kam reines <strong>Colorless Polyimide (CPI)</strong> zum Einsatz – ein robuster, transparenter Hochleistungskunststoff. CPI hatte jedoch zwei gravierende Nachteile: Eine unruhige, wellige Lichtreflexion und extreme Anfälligkeit für Kratzer.
          </p>
          <p>
            Moderne Falttelefone nutzen daher <strong>Ultra Thin Glass (UTG)</strong> von Herstellern wie Schott (Xensation Flex) oder Corning. Durch chemisches Ätzen wird Glas auf eine Dicke von nur <strong>30 bis 50 Mikrometer (µm)</strong> reduziert – dünner als ein handelsübliches Druckpapier (ca. 100 µm). Bei dieser geringen Materialstärke sinkt das Biegemoment so stark, dass das Glas Biegeradien von wenigen Millimetern ohne Bruch übersteht.
          </p>
          
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 text-xs text-amber-950 space-y-1 my-4">
            <strong className="font-extrabold block text-amber-900">
              ⚠️ Wichtig: Mohs-Härteskala beachten!
            </strong>
            <p>
              Weil Glas in dieser Dicke stoßempfindlich ist, laminieren alle Hersteller eine transparente <strong>PET-Schutzfolie</strong> werkseitig auf das Glas. Auf der Mohs-Härteskala erreicht diese Oberfläche nur <strong>Level 2 bis 3</strong> (vergleichbar mit Fingernägeln oder Kunststoffmünzen). Starker punktueller Druck mit spitzen Fingernägeln oder Stiften ohne gefederte Spitze kann bleibende Dellen hinterlassen.
            </p>
          </div>
        </div>
      </article>

      {/* Guide 2: Scharnier-Technik & Faltzyklen */}
      <article id="scharnier-technik" className="space-y-4 scroll-mt-24 border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
          <ShieldCheck className="w-4 h-4" />
          Mechanik &amp; Prüfung · Guide 02
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Wassertropfen-Scharniere &amp; TÜV/SGS Dauertests
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Das Scharnier ist das mechanisch komplexeste Bauteil eines Falttelefons. Während U-förmige Scharniere früherer Generationen das Display stark quetschten, nutzen heutige Geräte sogenannte <strong>Tropfenscharniere (Waterdrop Hinge)</strong>.
          </p>
          <p>
            Im Inneren des Scharniers befinden sich feine Nocken, Reibungsscheiben und Führungsbahnen aus <strong>Titan-Verbundwerkstoffen oder Flüssigmetall (Liquidmorphium)</strong>. Beim Schließen weicht die Mitte des Displays nach innen aus und formt eine Wassertropfen-Silhouette. Dadurch wird der Biegeradius verdoppelt und die Materialspannung im Glas dramatisch gesenkt.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Wie testen Prüflabore wie TÜV Rheinland und SGS?
          </h3>
          <p>
            Im automatisierten Dauertest öffnen und schließen Roboterarme das Gerät mit bis zu 2 Faltungen pro Sekunde. Neben Raumtemperatur-Tests (20 °C) werden Belastungen bei Extremtemperaturen (-20 °C Frost und +60 °C Hitze) sowie Falltests durchgeführt. Erst wenn nach 200.000 bis 500.000 Zyklen weder Pixelfehler noch Scharnierbrüche auftreten, wird das Prüfzertifikat erteilt.
          </p>
        </div>
      </article>

      {/* Guide 3: IP-Schutzklassen DIN EN 60529 */}
      <article id="ip-schutzklassen" className="space-y-4 scroll-mt-24 border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
          <Wrench className="w-4 h-4" />
          Normenlehre · Guide 03
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          IP48 vs. IPX8: Dichtigkeit bei Falttelefonen
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Nach der internationalen Norm <strong>DIN EN 60529</strong> setzt sich der IP-Code aus zwei Ziffern zusammen:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li><strong>Erste Kennziffer (z. B. 4 oder X):</strong> Schutz gegen Berührung und Eindringen fester Fremdkörper.</li>
            <li><strong>Zweite Kennziffer (z. B. 8):</strong> Schutz gegen schädliches Eindringen von Wasser.</li>
          </ul>
          <p>
            Ein Gerät mit <strong>IPX8</strong> (z. B. Google Pixel 9 Pro Fold, Honor Magic V3) ist bis zu 1,5 bzw. 2,5 Meter Tiefe in Süßwasser für 30 Minuten geschützt. Das „X“ bedeutet, dass keine offizielle Prüfung gegen Staub vorliegt.
          </p>
          <p>
            Geräte mit <strong>IP48</strong> (z. B. Samsung Galaxy Z Fold6 / Z Flip6) haben erstmals eine Zertifizierung der Klasse 4: Schutz gegen feste Fremdkörper mit einem Durchmesser <strong>≥ 1,0 mm</strong>. Das schützt vor Büroklammerfragmenten oder groben Krümeln, jedoch <em>nicht</em> vor feinem Bausand oder Meersand (Partikelgröße 0,063 bis 0,5 mm).
          </p>
        </div>
      </article>

      {/* Guide 4: Display-Pflege & Garantieschutz */}
      <article id="pflege-guide" className="space-y-4 scroll-mt-24 border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-700">
          <AlertTriangle className="w-4 h-4" />
          Pflege &amp; Garantie · Guide 04
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Pflegehinweise &amp; Schutzfolien-Wechsel
        </h2>
        
        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-3 text-slate-700">
          <p>
            Damit Ihr Falttelefon viele Jahre störungsfrei funktioniert, sollten Sie folgende 3 Grundregeln einhalten:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">1. Vor Schließen prüfen</strong>
              <span>Niemals das Gerät zuklappen, wenn sich Münzen, Krümel oder Sandkörner auf dem Display befinden.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">2. Keine Folien abziehen</strong>
              <span>Die interne Werksfolie niemals abknibbeln. Bei Blasenbildung vom autorisierten Service tauschen lassen.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">3. Nur Mikrofasertuch</strong>
              <span>Keine chemischen Lösungsmittel oder Glasreiniger verwenden, die die oleophobe Beschichtung angreifen.</span>
            </div>
          </div>
        </div>
      </article>

      {/* Glossary Section */}
      <section className="border-t border-slate-200 pt-10">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4">
          <FileText className="w-4 h-4" />
          Fach-Glossar von A bis Z
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6">
          Begriffe der Falt-Technologie
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
        title="Technischer Leitfaden zu Falttelefonen: UTG-Display-Physik, Scharnier-Mechanik und DIN EN 60529"
        canonicalUrl="https://falttelefon.de/ratgeber"
      />

    </div>
  );
}
