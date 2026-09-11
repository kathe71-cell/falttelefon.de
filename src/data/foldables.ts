export interface FoldablePhone {
  id: string;
  name: string;
  brand: 'Samsung' | 'Google' | 'Honor' | 'OnePlus' | 'Motorola' | 'Xiaomi';
  category: 'fold' | 'flip';
  releaseYear: number;
  msrpEuro: number;
  marketPriceEuro: number;
  displayInner: {
    sizeInches: number;
    resolution: string;
    aspectRatio: string;
    refreshRate: string;
    peakBrightnessNits: number;
    material: string;
  };
  displayOuter: {
    sizeInches: number;
    resolution: string;
    refreshRate: string;
    peakBrightnessNits: number;
  };
  thicknessFoldedMm: number;
  thicknessUnfoldedMm: number;
  weightGrams: number;
  batteryMah: number;
  chargingWatt: number;
  wirelessCharging: boolean;
  ipRating: string;
  ipStandardText: string;
  hingeTech: string;
  certifiedCycles: number;
  certifier: string;
  stylusSupport: boolean;
  processor: string;
  cameraSetup: string;
  badge?: string;
  pros: string[];
  cons: string[];
  amazonAsinOrQuery: string;
}

export const AMAZON_TRACKING_TAG = 'falttelefon.de-21';

export const FOLDABLES_DATA: FoldablePhone[] = [
  {
    id: 'samsung-galaxy-z-fold6',
    name: 'Samsung Galaxy Z Fold6',
    brand: 'Samsung',
    category: 'fold',
    releaseYear: 2024,
    msrpEuro: 1999,
    marketPriceEuro: 1699,
    displayInner: {
      sizeInches: 7.6,
      resolution: '2160 x 1856 px (QXGA+)',
      aspectRatio: '20.9:18',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 2600,
      material: 'Ultra Thin Glass (UTG) + verbesserte PET-Schutzschicht'
    },
    displayOuter: {
      sizeInches: 6.3,
      resolution: '2376 x 968 px',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 2600
    },
    thicknessFoldedMm: 12.1,
    thicknessUnfoldedMm: 5.6,
    weightGrams: 239,
    batteryMah: 4400,
    chargingWatt: 25,
    wirelessCharging: true,
    ipRating: 'IP48',
    ipStandardText: 'Schutz gegen Festkörper ≥ 1,0 mm (Ziffer 4) & Untertauchen bis 1,5m (Ziffer 8)',
    hingeTech: 'Dual-Rail Tropfenscharnier mit Stoßdämpfer-Lamellen',
    certifiedCycles: 200000,
    certifier: 'Bureau Veritas',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 3 for Galaxy',
    cameraSetup: '50 MP Hauptsensor (OIS) + 12 MP Ultraweit + 10 MP 3x Tele',
    badge: 'Kompakter Allrounder',
    pros: [
      '7 Jahre garantierte Android- & Sicherheitsupdates',
      'IP48-Zertifizierung mit offiziellem Partikelschutz ab 1 mm',
      'Erstklassiges Multitasking mit One UI & S-Pen-Kompatibilität',
      'Brillante 2.600 Nits Spitzenhelligkeit auf beiden Panels'
    ],
    cons: [
      'Außendisplay mit 22:9 immer noch schmaler als normale Handys',
      'Ladegeschwindigkeit auf 25 Watt begrenzt',
      'S-Pen muss separat erworben und in Spezialhülle verstaut werden'
    ],
    amazonAsinOrQuery: 'Samsung Galaxy Z Fold6'
  },
  {
    id: 'google-pixel-9-pro-fold',
    name: 'Google Pixel 9 Pro Fold',
    brand: 'Google',
    category: 'fold',
    releaseYear: 2024,
    msrpEuro: 1899,
    marketPriceEuro: 1799,
    displayInner: {
      sizeInches: 8.0,
      resolution: '2076 x 2152 px (Super Actua Flex)',
      aspectRatio: '1:1.04',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 2700,
      material: 'Ultra Thin Glass mit Anti-Reflexions-Beschichtung'
    },
    displayOuter: {
      sizeInches: 6.3,
      resolution: '2424 x 1080 px (20:9 Standard)',
      refreshRate: '60-120 Hz OLED',
      peakBrightnessNits: 2700
    },
    thicknessFoldedMm: 10.5,
    thicknessUnfoldedMm: 5.1,
    weightGrams: 257,
    batteryMah: 4650,
    chargingWatt: 21,
    wirelessCharging: true,
    ipRating: 'IPX8',
    ipStandardText: 'Schutz gegen dauerhaftes Untertauchen in Wasser (DIN EN 60529)',
    hingeTech: 'Multi-Achsen-Flüssigstahl-Scharnier mit flachem 180°-Stopp',
    certifiedCycles: 200000,
    certifier: 'Intertek Reliability Lab',
    stylusSupport: false,
    processor: 'Google Tensor G4 mit Titan M2 Sicherheitschip',
    cameraSetup: '48 MP Hauptkamera + 10.5 MP Ultraweit + 10.8 MP 5x Periskop-Tele',
    badge: 'Bestes 8-Zoll-Display',
    pros: [
      'Normalformatiges 20:9 Außendisplay ohne Kompromisse im Alltag',
      'Riesiges 8.0-Zoll Innendisplay mit quadratischer Arbeitsfläche',
      'Pixel Camera KI-Funktionen & 5x echter Periskop-Zoom',
      '7 Jahre OS- & Pixel-Drop-Feature-Updates'
    ],
    cons: [
      'Mit 257 Gramm spürbar schwerer als die Konkurrenz',
      'Keine Unterstützung für Digitizer-Stylus / Stifteingabe',
      'Kein zertifizierter Staub- oder Partikelschutz (IPX8)'
    ],
    amazonAsinOrQuery: 'Google Pixel 9 Pro Fold'
  },
  {
    id: 'honor-magic-v3',
    name: 'Honor Magic V3',
    brand: 'Honor',
    category: 'fold',
    releaseYear: 2024,
    msrpEuro: 1999,
    marketPriceEuro: 1699,
    displayInner: {
      sizeInches: 7.92,
      resolution: '2344 x 2156 px OLED',
      aspectRatio: '9.7:9',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 1800,
      material: 'Silizium-Schlagabsorber-Schicht mit UTG'
    },
    displayOuter: {
      sizeInches: 6.43,
      resolution: '2376 x 1060 px (20:9)',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 5000
    },
    thicknessFoldedMm: 9.2,
    thicknessUnfoldedMm: 4.35,
    weightGrams: 226,
    batteryMah: 5150,
    chargingWatt: 66,
    wirelessCharging: true,
    ipRating: 'IPX8',
    ipStandardText: 'Wasserdicht bis 2,5m Wassertiefe nach IPX8',
    hingeTech: 'Super-Stahl Tropfenscharnier aus 2100 MPa Titan-Verbundwerkstoff',
    certifiedCycles: 500000,
    certifier: 'SGS Genf Dauerbiegetest',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 3',
    cameraSetup: '50 MP Hauptsensor (OIS) + 40 MP Ultraweit + 50 MP Periskop-Tele',
    badge: 'Dünnstes Foldable der Welt',
    pros: [
      'Mit nur 9,2 mm gefaltet dünner als manche Standard-Smartphones mit Hülle',
      'Extrem geringes Gewicht von nur 226 Gramm',
      'Großer 5.150 mAh Silizium-Kohlenstoff-Akku mit 66W Schnellladen',
      '500.000 Faltungen durch SGS zertifiziert'
    ],
    cons: [
      'MagicOS Software-Oberfläche mit weniger Desktop-Features als Samsungs DeX',
      'Software-Update-Versprechen kürzer (4 Jahre OS / 5 Jahre Security)'
    ],
    amazonAsinOrQuery: 'Honor Magic V3'
  },
  {
    id: 'oneplus-open',
    name: 'OnePlus Open',
    brand: 'OnePlus',
    category: 'fold',
    releaseYear: 2023,
    msrpEuro: 1799,
    marketPriceEuro: 1399,
    displayInner: {
      sizeInches: 7.82,
      resolution: '2440 x 2268 px Flexi-fluid AMOLED',
      aspectRatio: '1.07:1',
      refreshRate: '1-120 Hz LTPO 3.0',
      peakBrightnessNits: 2800,
      material: 'Ultra Thin Glass über Kohlefaser-Stützplatte'
    },
    displayOuter: {
      sizeInches: 6.31,
      resolution: '2484 x 1116 px',
      refreshRate: '10-120 Hz Ceramic Guard',
      peakBrightnessNits: 2800
    },
    thicknessFoldedMm: 11.7,
    thicknessUnfoldedMm: 5.8,
    weightGrams: 239,
    batteryMah: 4805,
    chargingWatt: 67,
    wirelessCharging: false,
    ipRating: 'IPX4',
    ipStandardText: 'Schutz gegen allseitiges Spritzwasser',
    hingeTech: 'Flexion Hinge mit 69 Bauteilen (3-teilige Architektur)',
    certifiedCycles: 1000000,
    certifier: 'TÜV Rheinland Falt-Härtetest',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 2',
    cameraSetup: 'Hasselblad 48 MP LYT-T808 + 48 MP Ultraweit + 64 MP 3x Periskop',
    badge: 'Geringste Knick-Tiefe',
    pros: [
      'Fast unsichtbarer Displayknick dank breiter Tropfenscharnier-Geometrie',
      'Open Canvas Multitasking (virtueller Arbeitsbereich über Bildschirmrand hinaus)',
      'Hervorragendes Hasselblad-Kamerasystem mit großem Pixelsensor',
      'Sehr schnelles 67W SuperVOOC Laden'
    ],
    cons: [
      'Kein kabelloses Laden (Qi-Laden fehlt)',
      'Nur IPX4 Spritzwasserschutz (kein Untertauchen)',
      'Snapdragon 8 Gen 2 statt aktuellerer Gen 3'
    ],
    amazonAsinOrQuery: 'OnePlus Open Foldable'
  },
  {
    id: 'samsung-galaxy-z-flip6',
    name: 'Samsung Galaxy Z Flip6',
    brand: 'Samsung',
    category: 'flip',
    releaseYear: 2024,
    msrpEuro: 1199,
    marketPriceEuro: 899,
    displayInner: {
      sizeInches: 6.7,
      resolution: '2640 x 1080 px Dynamic AMOLED 2X',
      aspectRatio: '22:9',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 2600,
      material: 'Biegbares UTG mit verstärkter Schock-Absorber-Schicht'
    },
    displayOuter: {
      sizeInches: 3.4,
      resolution: '720 x 748 px Super AMOLED Flex-Window',
      refreshRate: '60 Hz',
      peakBrightnessNits: 1600
    },
    thicknessFoldedMm: 14.9,
    thicknessUnfoldedMm: 6.9,
    weightGrams: 187,
    batteryMah: 4000,
    chargingWatt: 25,
    wirelessCharging: true,
    ipRating: 'IP48',
    ipStandardText: 'Schutz gegen Festkörper ≥ 1,0 mm (Ziffer 4) & Untertauchen bis 1,5m',
    hingeTech: 'FlexHinge mit Dual-Rail-Führung und integrierten Sweep-Fasern',
    certifiedCycles: 200000,
    certifier: 'Bureau Veritas',
    stylusSupport: false,
    processor: 'Snapdragon 8 Gen 3 for Galaxy mit Vapor Chamber',
    cameraSetup: '50 MP Hauptkamera (OIS) + 12 MP Ultraweitwinkel',
    badge: 'Beliebtester Clamshell-Klassiker',
    pros: [
      'Erstmals mit Vapor-Chamber-Kühlsystem für stabile Dauerleistung',
      'IP48-Einstufung für Schutz vor Sand/Partikeln ab 1 Millimeter',
      'Upgrade auf 50 Megapixel Hauptsensor mit tollem Flex-Cam-Modus',
      'Kompaktes Hosentaschenformat mit 187 Gramm'
    ],
    cons: [
      'Außendisplay läuft nur mit 60 Hz',
      'Flex-Window unterstützt ab Werk nur ausgewählte Widgets ohne GoodLock',
      'Laden auf 25 Watt begrenzt'
    ],
    amazonAsinOrQuery: 'Samsung Galaxy Z Flip6'
  },
  {
    id: 'motorola-razr-50-ultra',
    name: 'Motorola Razr 50 Ultra',
    brand: 'Motorola',
    category: 'flip',
    releaseYear: 2024,
    msrpEuro: 1199,
    marketPriceEuro: 999,
    displayInner: {
      sizeInches: 6.9,
      resolution: '2640 x 1080 px pOLED',
      aspectRatio: '22:9',
      refreshRate: '1-165 Hz LTPO',
      peakBrightnessNits: 3000,
      material: 'Ultra Thin Glass mit schockabsorbierender Trägerfolie'
    },
    displayOuter: {
      sizeInches: 4.0,
      resolution: '1272 x 1080 px pOLED (Full-Coverage)',
      refreshRate: '1-165 Hz LTPO',
      peakBrightnessNits: 2400
    },
    thicknessFoldedMm: 15.3,
    thicknessUnfoldedMm: 7.09,
    weightGrams: 189,
    batteryMah: 4000,
    chargingWatt: 45,
    wirelessCharging: true,
    ipRating: 'IPX8',
    ipStandardText: 'Wasserdicht bis 1,5m Tiefe für 30 Minuten nach DIN EN 60529',
    hingeTech: 'Zahnradloses Tropfenscharnier mit Edelstahl-Platten',
    certifiedCycles: 400000,
    certifier: 'SGS Dauerknicktest',
    stylusSupport: false,
    processor: 'Snapdragon 8s Gen 3',
    cameraSetup: '50 MP Hauptsensor (OIS) + 50 MP 2x Teleobjektiv',
    badge: 'Größtes Außendisplay',
    pros: [
      'Riesiges 4,0 Zoll Außendisplay mit 165 Hz – JEDE App uneingeschränkt nutzbar',
      'Beide Displays mit extrem flüssigen 165 Hertz Bildwiederholrate',
      '45 Watt TurboPower Schnellladen (Netzteil oft im Lieferumfang)',
      'Kamera mit 2x optischem Telezoom statt reinem Ultraweitwinkel'
    ],
    cons: [
      'Kein Ultraweitwinkel-Objektiv vorhanden (dafür Telezoom)',
      'Kein Staub-/Partikelschutz zertifiziert (IPX8 statt IP48)',
      'Update-Garantie (3 OS-Versionen) kürzer als bei Samsung oder Google'
    ],
    amazonAsinOrQuery: 'Motorola Razr 50 Ultra'
  }
];

export function getAmazonSearchUrl(query: string): string {
  const encoded = encodeURIComponent(query);
  return `https://www.amazon.de/s?k=${encoded}&tag=${AMAZON_TRACKING_TAG}`;
}

export function getAmazonProductUrl(asinOrKeyword: string): string {
  if (asinOrKeyword.startsWith('B0') && asinOrKeyword.length === 10) {
    return `https://www.amazon.de/dp/${asinOrKeyword}?tag=${AMAZON_TRACKING_TAG}`;
  }
  return getAmazonSearchUrl(asinOrKeyword);
}
