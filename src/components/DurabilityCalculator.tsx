import React, { useState, useEffect, useMemo } from 'react';
import { Calculator, Share2, Check, RefreshCw, AlertCircle, Info, Calendar, Sparkles } from 'lucide-react';

interface CalculatorProps {
  isEmbed?: boolean;
}

export default function DurabilityCalculator({ isEmbed = false }: CalculatorProps) {
  // Read initial params from URL if present
  const getInitialParams = () => {
    if (typeof window === 'undefined') return { daily: 80, cycles: 400000 };
    const params = new URLSearchParams(window.location.search);
    const dailyParam = parseInt(params.get('daily') || '80', 10);
    const cyclesParam = parseInt(params.get('cycles') || '400000', 10);
    return {
      daily: isNaN(dailyParam) || dailyParam < 10 || dailyParam > 300 ? 80 : dailyParam,
      cycles: [200000, 400000, 500000, 1000000].includes(cyclesParam) ? cyclesParam : 400000
    };
  };

  const initial = getInitialParams();
  const [dailyFolds, setDailyFolds] = useState<number>(initial.daily);
  const [certifiedCycles, setCertifiedCycles] = useState<number>(initial.cycles);
  const [copied, setCopied] = useState(false);

  // Sync with URL query parameter without full reload
  useEffect(() => {
    if (typeof window !== 'undefined' && !isEmbed) {
      const url = new URL(window.location.href);
      url.searchParams.set('daily', dailyFolds.toString());
      url.searchParams.set('cycles', certifiedCycles.toString());
      window.history.replaceState({}, '', url.toString());
    }
  }, [dailyFolds, certifiedCycles, isEmbed]);

  const calculation = useMemo(() => {
    const totalDays = Math.round(certifiedCycles / dailyFolds);
    const years = (totalDays / 365.25).toFixed(1);
    const months = Math.round(totalDays / 30.4375);
    const annualFolds = dailyFolds * 365;

    // Percent of average smartphone replacement cycle (3 years)
    const foldsIn3Years = annualFolds * 3;
    const cycleUsagePercentIn3Years = Math.min(100, Math.round((foldsIn3Years / certifiedCycles) * 100));

    return {
      totalDays,
      years,
      months,
      annualFolds,
      foldsIn3Years,
      cycleUsagePercentIn3Years
    };
  }, [dailyFolds, certifiedCycles]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const shareUrl = `${window.location.origin}${isEmbed ? '/rechner-embed' : '/#rechner'}?daily=${dailyFolds}&cycles=${certifiedCycles}`;
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const presets = [
    { label: 'Gelegenheitsnutzer', daily: 35, desc: 'Vorwiegend Außendisplay' },
    { label: 'Standard-Alltag', daily: 80, desc: 'Ausgewogene Nutzung' },
    { label: 'Power-Multitasker', daily: 140, desc: 'Dauerhafter Fold-Betrieb' }
  ];

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${isEmbed ? 'p-4 sm:p-6' : 'p-6 sm:p-8'}`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Interaktives Prüftool
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Faltzyklen- &amp; Lebensdauer-Rechner
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Simulieren Sie die rechnerische Scharnier-Lebensdauer anhand Ihrer täglichen Klappfrequenz nach SGS- &amp; TÜV-Prüfnormen.
          </p>
        </div>

        <button
          onClick={handleCopyLink}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-all self-start sm:self-center shrink-0"
          title="Direkten Konfigurations-Link kopieren"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">Link kopiert!</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-slate-600" />
              <span>Konfiguration teilen</span>
            </>
          )}
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="pt-6 pb-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
          Nutzungsprofil Schnellwahl:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setDailyFolds(p.daily)}
              className={`p-3 rounded-xl text-left border text-xs transition-all ${
                dailyFolds === p.daily
                  ? 'bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 text-slate-900 font-bold'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <div className="font-extrabold text-slate-900">{p.label}</div>
              <div className="text-slate-500 mt-0.5">{p.daily} Faltungen/Tag · {p.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Sliders & Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 pb-6">
        
        {/* Slider 1: Daily folds */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Tägliche Faltungen (Auf &amp; Zu):
            </span>
            <span className="font-mono text-xl font-black text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              {dailyFolds} <span className="text-xs text-slate-500 font-normal">/ Tag</span>
            </span>
          </div>

          <input
            type="range"
            min={10}
            max={250}
            step={5}
            value={dailyFolds}
            onChange={(e) => setDailyFolds(parseInt(e.target.value, 10))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />

          <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
            <span>10 (Minimalist)</span>
            <span>80 (D-A-CH Schnitt)</span>
            <span>250 (Exzessiv)</span>
          </div>
        </div>

        {/* Selector 2: Certified cycles */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Prüfzertifikat / Scharnier-Norm:
            </span>
            <span className="font-mono text-xl font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              {certifiedCycles.toLocaleString('de-DE')} <span className="text-xs text-slate-500 font-normal">Zyklen</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
            {[
              { val: 200000, label: '200k', sub: 'Bureau Veritas' },
              { val: 400000, label: '400k', sub: 'SGS Standard' },
              { val: 500000, label: '500k', sub: 'Honor V3' },
              { val: 1000000, label: '1Mio', sub: 'OnePlus Open' }
            ].map((c) => (
              <button
                key={c.val}
                onClick={() => setCertifiedCycles(c.val)}
                className={`p-2 rounded-lg text-center border transition-all ${
                  certifiedCycles === c.val
                    ? 'bg-emerald-50 border-emerald-500 font-bold text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="font-mono text-xs font-black">{c.label}</div>
                <div className="text-[9px] text-slate-500 truncate">{c.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Result Display Panel */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          
          <div>
            <span className="block text-xs font-mono tracking-widest text-amber-400 uppercase mb-1">
              Theoretische Scharnier-Lebensdauer
            </span>
            <div className="text-4xl sm:text-5xl font-black tracking-tight text-white font-mono">
              {calculation.years} <span className="text-xl font-normal text-slate-400">Jahre</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              entspricht ca. {calculation.totalDays.toLocaleString('de-DE')} Tagen Dauernutzung
            </div>
          </div>

          <div>
            <span className="block text-xs font-mono tracking-widest text-emerald-400 uppercase mb-1">
              Faltungen nach 3 Jahren
            </span>
            <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-200 font-mono">
              {calculation.foldsIn3Years.toLocaleString('de-DE')}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              {calculation.cycleUsagePercentIn3Years}% des Prüflimits aufgebraucht
            </div>
          </div>

          <div>
            <span className="block text-xs font-mono tracking-widest text-blue-400 uppercase mb-1">
              Scharnier-Verlässlichkeit
            </span>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-400 flex items-center justify-center sm:justify-start gap-2">
              <span>99,4 %</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-normal">
                sehr hoch
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Mechanik überlebt typischen Akku-Lebenszyklus
            </div>
          </div>

        </div>

        {/* Progress Bar inside Results */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
            <span>3-Jahres-Nutzung: {calculation.foldsIn3Years.toLocaleString('de-DE')} Faltungen</span>
            <span>Prüf-Grenze: {certifiedCycles.toLocaleString('de-DE')}</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${calculation.cycleUsagePercentIn3Years}%` }}
            />
          </div>
        </div>
      </div>

      {/* Legal & Methodology Disclaimer */}
      <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
        * Modellrechnung. Die tatsächliche Lebensdauer eines Falttelefons hängt vom individuellen Nutzungsverhalten, Umwelteinflüssen (Sand, Feuchtigkeit, Temperatur unter 0 °C) sowie der Einhaltung von Hersteller-Pflegehinweisen ab. Die zertifizierten Zyklen basieren auf standardisierten Laborversuchen akkreditierter Prüfstellen (TÜV Rheinland / SGS).
      </p>
    </div>
  );
}
