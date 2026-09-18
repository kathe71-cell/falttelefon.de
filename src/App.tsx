import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VercelAnalytics from './components/VercelAnalytics';
import Home from './pages/Home';
import Vergleich from './pages/Vergleich';
import Ratgeber from './pages/Ratgeber';
import RechnerEmbed from './pages/RechnerEmbed';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

import ScrollToTop from './components/ScrollToTop';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {/* Embed route without standard navbar and footer */}
      <Route path="/rechner-embed" element={<RechnerEmbed />} />

      {/* Standard pages with layout */}
      <Route
        path="/"
        element={
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        }
      />
      <Route
        path="/vergleich"
        element={
          <LayoutWrapper>
            <Vergleich />
          </LayoutWrapper>
        }
      />
      <Route
        path="/ratgeber"
        element={
          <LayoutWrapper>
            <Ratgeber />
          </LayoutWrapper>
        }
      />
      <Route
        path="/impressum"
        element={
          <LayoutWrapper>
            <Impressum />
          </LayoutWrapper>
        }
      />
      <Route
        path="/datenschutz"
        element={
          <LayoutWrapper>
            <Datenschutz />
          </LayoutWrapper>
        }
      />
      {/* Fallback route */}
      <Route
        path="*"
        element={
          <LayoutWrapper>
            <Home />
          </LayoutWrapper>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <VercelAnalytics />
      <AppRoutes />
    </Router>
  );
}
