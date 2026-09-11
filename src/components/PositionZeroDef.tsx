import React from 'react';
import { Sparkles, Layers, CheckCircle2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PositionZeroDef() {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          Kaufberatung: Was ist ein Falttelefon?
        </div>
        <span className="text-xs font-mono text-slate-400">Kompaktes Design · Tablet-Multitasking · Alltagstauglich</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
        Was zeichnet ein modernes Falt-Smartphone aus?
      </h2>

      {/* Clear, Customer-Friendly Definition */}
      <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-slate-800 text-base sm:text-lg leading-relaxed font-medium mb-6">
        <p>
          Ein <strong>Falttelefon (Foldable)</strong> vereint zwei Geräte in einem: Zusammengeklappt nutzt man es wie ein handliches Standard-Smartphone; aufgeklappt verwandelt es sich dank biegsamem Glas (Ultra Thin Glass) in ein bis zu <strong>8 Zoll großes Tablet</strong> für Videos, Multitasking und Gaming. Bei <strong>Flip-Handys (Clamshell)</strong> wiederum halbiert sich das Packmaß in der Hosentasche auf Miniformat.
        </p>
      </div>

      {/* 3 Core Everyday Advantages */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Doppelte Bildschirmfläche
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bis zu 3 Apps gleichzeitig bedienen: Ideal für WhatsApp, Browser und YouTube parallel.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Perfekt für Hosentaschen
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Flip-Modelle schrumpfen auf halbe Größe und wiegen unter 190 Gramm.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Robuste Scharniere
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Moderne Geräte halten über 200.000 bis 500.000 Faltungen – das reicht für über 10 Jahre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
