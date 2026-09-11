import React, { useState } from 'react';
import { Quote, Check, Copy } from 'lucide-react';

interface CitationBoxProps {
  title: string;
  canonicalUrl: string;
  lastUpdated?: string;
}

export default function CitationBox({
  title,
  canonicalUrl,
  lastUpdated = 'September 2026'
}: CitationBoxProps) {
  const [copied, setCopied] = useState(false);

  const citationText = `falttelefon.de Fachredaktion (${lastUpdated.split(' ')[1] || '2026'}). ${title}. falttelefon.de - Unabhängiges Fachportal für Foldables & Falt-Smartphones. ${canonicalUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 font-mono uppercase font-bold text-slate-500 tracking-wider text-[10px]">
          <Quote className="w-3.5 h-3.5 text-amber-600" />
          Zitierempfehlung für Redaktionen &amp; Wissenschaft (APA)
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-amber-600 bg-white px-2 py-1 rounded border border-slate-300 shadow-2xs transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Kopiert</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Zitat kopieren</span>
            </>
          )}
        </button>
      </div>
      <p className="font-mono text-slate-700 bg-white p-2.5 rounded border border-slate-200 select-all leading-relaxed">
        {citationText}
      </p>
    </div>
  );
}
