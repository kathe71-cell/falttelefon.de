import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const routesToPrerender = [
  {
    url: '/',
    title: 'falttelefon.de – Die besten Falt-Smartphones im Vergleich & Kaufberater',
    desc: 'Die besten Falt-Smartphones 2026 im Vergleich & Kaufberatung: Finde dein ideales Foldable von Samsung, Google, Honor & Co. zum besten Amazon-Preis.'
  },
  {
    url: '/vergleich',
    title: 'Falt-Smartphone Vergleich 2026: Alle Foldables in der Übersicht | falttelefon.de',
    desc: 'Großer Modellvergleich: Galaxy Z Fold, Z Flip, Pixel Fold, Honor Magic V und OnePlus Open im direkten technischen Daten- und Preisvergleich.'
  },
  {
    url: '/ratgeber',
    title: 'Foldable Ratgeber: Scharnier-Technik, Haltbarkeit & Faltknick | falttelefon.de',
    desc: 'Umfassender Ratgeber zu Ultra Thin Glass (UTG), Schutzfolien, SGS-Zertifizierungen und wie lange moderne Falthandys wirklich halten.'
  },
  {
    url: '/rechner-embed',
    title: 'Faltzyklen-Rechner Widget | falttelefon.de',
    desc: 'Interaktiver Faltzyklen-Rechner für Foldables und Flip-Handys.'
  },
  {
    url: '/impressum',
    title: 'Impressum | falttelefon.de',
    desc: 'Impressum und gesetzliche Anbieterkennzeichnung von falttelefon.de.'
  },
  {
    url: '/datenschutz',
    title: 'Datenschutzerklärung | falttelefon.de',
    desc: 'Datenschutzerklärung und Informationen zur cookielosen Web-Analyse auf falttelefon.de.'
  }
];

console.log(`Starting prerendering of ${routesToPrerender.length} routes for falttelefon.de...`);

for (const route of routesToPrerender) {
  try {
    const { html: appHtml } = render(route.url);
    let rendered = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    rendered = rendered.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    rendered = rendered.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
    const fullUrl = `https://falttelefon.de${route.url === '/' ? '' : route.url}`;
    rendered = rendered.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${fullUrl}" />`);
    rendered = rendered.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
    rendered = rendered.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
    rendered = rendered.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

    const filePath = route.url === '/' ? 'dist/index.html' : `dist${route.url}/index.html`;
    const absolutePath = toAbsolute(filePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, rendered);
    console.log(`  ✓ ${route.url} -> ${filePath} (${(rendered.length / 1024).toFixed(1)} kB)`);
  } catch (err) {
    console.error(`  ✗ Error prerendering ${route.url}:`, err);
  }
}

console.log('Prerendering complete!');


// --- Auto-injected Dynamic Sitemap ---
try {
  let routeKeys = [];
  if (Array.isArray(routesToPrerender)) {
    routeKeys = routesToPrerender.map(r => r.url || r.path);
  } else {
    routeKeys = Object.keys(routesToPrerender);
  }

  const sitemapUrlset = routeKeys
    .filter(url => url && !url.includes('404') && !url.includes('embed'))
    .map(url => {
      let loc = `https://falttelefon.de${url === '/' ? '' : url}`;
      let priority = url === '/' ? '1.0' : '0.8';
      const today = new Date().toISOString().split('T')[0];
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrlset}\n</urlset>`;

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
  fs.writeFileSync(toAbsolute('public/sitemap.xml'), sitemapXml);
  console.log('  - Generated dynamic sitemap.xml for ' + 'falttelefon.de');
} catch (e) {
  console.error('Error generating sitemap:', e.message);
}
// -----------------------------------
