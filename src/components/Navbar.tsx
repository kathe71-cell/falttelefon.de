import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Sparkles, TableProperties, BookOpen, Menu, X, ShoppingBag } from 'lucide-react';
import { getAmazonSearchUrl } from '../data/foldables';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Modellvergleich', href: '/vergleich', icon: TableProperties },
    { name: 'Foldable-Finder', href: '/#finder', icon: Sparkles },
    { name: 'Haltbarkeits-Check', href: '/#rechner', icon: Smartphone },
    { name: 'Kaufberatung', href: '/ratgeber', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Banner Notice: Kaufberatung & Deals */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <ShoppingBag className="w-3.5 h-3.5 text-amber-400 inline-block" />
        <span>falttelefon.de – Große Foldable-Kaufberatung 2026: Finde das perfekte Falt-Handy zum besten Preis</span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="hidden md:inline text-amber-400 font-bold">Mit aktuellen Amazon-Angeboten *</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white shadow-sm group-hover:border-amber-500 transition-colors">
              <span className="font-mono text-lg font-black tracking-tighter text-amber-400">F</span>
              <span className="font-mono text-sm font-bold text-slate-200">⤢</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                falttelefon<span className="text-amber-500">.de</span>
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-400 -mt-1">
                Kaufberater &amp; Preisvergleich
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 border border-amber-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
                  {link.name}
                </Link>
              );
            })}
            
            <a
              href={getAmazonSearchUrl('Foldable Smartphone Faltbar')}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-sm transition-transform active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Angebote bei Amazon *</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                <Icon className="w-5 h-5 text-amber-500" />
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <a
              href={getAmazonSearchUrl('Foldable Smartphone Faltbar')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-base shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Angebote bei Amazon prüfen *</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
