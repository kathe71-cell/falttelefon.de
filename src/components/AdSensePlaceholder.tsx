import React, { useEffect } from 'react';

interface AdSenseProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
}

export default function AdSensePlaceholder({
  slotId = '1234567890',
  format = 'auto',
  className = ''
}: AdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (e) {
      // Ignore if AdSense blocked by user or test env
    }
  }, []);

  return (
    <div className={`my-8 text-center overflow-hidden ${className}`}>
      <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 mb-1">
        Anzeige / Werbeeinblendung
      </div>
      <div className="min-h-[100px] w-full bg-slate-50 border border-dashed border-slate-300 rounded-xl flex items-center justify-center p-2 text-slate-400 text-xs font-mono">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-7078147966379221"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
