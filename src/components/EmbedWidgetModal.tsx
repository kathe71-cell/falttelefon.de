import React, { useState } from 'react';
import { Code2, Copy, Check, ExternalLink, X } from 'lucide-react';

interface EmbedWidgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmbedWidgetModal({ isOpen, onClose }: EmbedWidgetModalProps) {
  const [copied, setCopied] = useState(false);
  const [iframeTheme, setIframeTheme] = useState<'light' | 'auto'>('light');

  if (!isOpen) return null;

  const embedCode = `<iframe src="https://falttelefon.de/rechner-embed" width="100%" height="680" style="border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;" title="Faltzyklen-Rechner falttelefon.de" loading="lazy"></iframe>\n<p style="font-size:11px; color:#64748b; font-family:sans-serif; text-align:right;">Bereitgestellt von <a href="https://falttelefon.de/" target="_blank" rel="noopener" style="color:#d97706; text-decoration:underline;">falttelefon.de</a></p>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-700 mb-2">
          <Code2 className="w-4 h-4" />
          Webmaster Widget
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Faltzyklen-Rechner einbetten
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Integrieren Sie unseren interaktiven Faltzyklen- und Haltbarkeitsrechner kostenlos auf Ihrem Blog, Tech-Portal oder Kanzlei-Webseite. Das Widget ist 100 % werbefrei, responsiv und DSGVO-konform.
        </p>

        {/* Snippet Display */}
        <div className="mt-4 relative">
          <textarea
            readOnly
            value={embedCode}
            rows={5}
            className="w-full font-mono text-xs p-3.5 bg-slate-900 text-amber-300 rounded-xl border border-slate-800 focus:outline-none select-all"
          />
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-mono">
            Attribution-Link erforderlich (DoFollow)
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-sm transition-transform active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Code in Zwischenablage kopiert!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>iFrame-Code kopieren</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
