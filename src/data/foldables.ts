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
  verdict: string;
  targetGroup: string;
  pros: string[];
  cons: string[];
  amazonAsinOrQuery: string;
}

export interface FoldableAccessory {
  id: string;
  title: string;
  category: 'case' | 'stylus' | 'charger' | 'protection';
  compatibleWith: string;
  priceEuro: string;
  description: string;
  amazonQuery: string;
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
      material: 'Ultra Thin Glass + Schutzschicht'
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
    ipStandardText: 'Wasserdicht & geschützt vor festen Partikeln ab 1 mm',
    hingeTech: 'Dual-Rail Tropfenscharnier',
    certifiedCycles: 200000,
    certifier: 'Bureau Veritas',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 3 for Galaxy',
    cameraSetup: '50 MP Hauptkamera + 12 MP Ultraweit + 10 MP 3x Tele',
    badge: 'Kauf-Tipp für Produktivität',
    verdict: 'Das beste Gesamtpaket aus ausgereifter Software, 7 Jahren Update-Garantie und starkem Multitasking.',
    targetGroup: 'Business-Nutzer, Multitasker & Tech-Enthusiasten',
    pros: [
      '7 Jahre Software- & Sicherheitsupdates',
      'Hervorragendes Multitasking mit One UI & S-Pen',
      'Robuste IP48-Zertifizierung mit Partikelschutz',
      'Extrem helle Displays (2.600 Nits) für sonnige Tage'
    ],
    cons: [
      'Außendisplay schmaler als normale Handys',
      'Laden mit maximal 25 Watt eher gemächlich'
    ],
    amazonAsinOrQuery: 'Samsung Galaxy Z Fold6'
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
      resolution: '2640 x 1080 px Dynamic AMOLED',
      aspectRatio: '22:9',
      refreshRate: '1-120 Hz LTPO',
      peakBrightnessNits: 2600,
      material: 'Biegbares UTG mit Dämpfungsschicht'
    },
    displayOuter: {
      sizeInches: 3.4,
      resolution: '720 x 748 px Super AMOLED',
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
    ipStandardText: 'Wasserdicht & Schutz vor Partikeln ab 1 mm',
    hingeTech: 'FlexHinge Tropfenscharnier',
    certifiedCycles: 200000,
    certifier: 'Bureau Veritas',
    stylusSupport: false,
    processor: 'Snapdragon 8 Gen 3 mit Vapor Chamber Kühlung',
    cameraSetup: '50 MP Hauptkamera + 12 MP Ultraweitwinkel',
    badge: 'Bestseller & Preis-Leistungs-Tipp',
    verdict: 'Passt in jede Hosentasche, hat eine tolle 50 MP Kamera und ist der beliebteste Clamshell-Einstieg.',
    targetGroup: 'Alltag, Lifestyle, Social Media & Kompaktheits-Fans',
    pros: [
      'Verschwindet kompakt in jeder noch so kleinen Hosentasche',
      'Deutliches Kamera-Upgrade auf 50 Megapixel Hauptsensor',
      'Praktischer Flex-Cam Modus für freihändige Fotos & Videos',
      'Lange 7 Jahre Update-Garantie'
    ],
    cons: [
      'Außendisplay nur 60 Hz',
      'Akku mit 4.000 mAh reicht bei intensiver Nutzung für ca. 1 Tag'
    ],
    amazonAsinOrQuery: 'Samsung Galaxy Z Flip6'
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
    ipStandardText: 'Wasserdicht bis 2,5m Wassertiefe',
    hingeTech: 'Super-Stahl Tropfenscharnier aus 2100 MPa Titan-Verbund',
    certifiedCycles: 500000,
    certifier: 'SGS Dauerbiegetest',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 3',
    cameraSetup: '50 MP Hauptsensor + 40 MP Ultraweit + 50 MP Periskop-Tele',
    badge: 'Design- & Schlankheits-Sieger',
    verdict: 'Mit 9,2 mm gefaltet das dünnste und leichteste Book-Style Foldable der Welt – fühlt sich an wie ein normales Smartphone.',
    targetGroup: 'Design-Liebhaber, Vielreisende & Power-User',
    pros: [
      'Unglaublich schlank: Nur 9,2 mm gefaltet und federleichte 226 Gramm',
      'Normales 20:9 Außendisplay ohne Eingewöhnung nutzbar',
      'Riesiger 5.150 mAh Akku mit superschnellem 66W Laden',
      'Erstklassige Periskop-Telekamera mit 3,5x optischem Zoom'
    ],
    cons: [
      'Software-Oberfläche bietet etwas weniger Extras als Samsung',
      'Update-Garantie (4 Jahre OS) etwas kürzer als bei Samsung/Google'
    ],
    amazonAsinOrQuery: 'Honor Magic V3'
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
      material: 'Ultra Thin Glass mit flexibler Schutzfolie'
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
    ipStandardText: 'Wasserdicht nach DIN EN 60529',
    hingeTech: 'Zahnradloses Tropfenscharnier',
    certifiedCycles: 400000,
    certifier: 'SGS Dauerknicktest',
    stylusSupport: false,
    processor: 'Snapdragon 8s Gen 3',
    cameraSetup: '50 MP Hauptkamera + 50 MP 2x Telezoom',
    badge: 'Größtes Außendisplay',
    verdict: 'Das 4 Zoll Außendisplay erlaubt es, fast jede App komplett ohne Aufklappen zu bedienen. Äußerst spaßig und stylish.',
    targetGroup: 'Komfort-Sucher, WhatsApp-Vielschreiber & Foto-Fans',
    pros: [
      'Riesiges 4,0" Außendisplay mit 165 Hz – JEDE App uneingeschränkt nutzbar',
      'Butterweiche 165 Hertz auf beiden Bildschirmen',
      'Schnelles 45 Watt TurboPower Laden',
      'Edles Gehäusedesign in veganem Leder'
    ],
    cons: [
      'Kein Ultraweitwinkel (dafür Telekamera an Bord)',
      '3 Jahre Android OS Updates'
    ],
    amazonAsinOrQuery: 'Motorola Razr 50 Ultra'
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
      material: 'Ultra Thin Glass mit Anti-Reflexionsschicht'
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
    ipStandardText: 'Wasserdicht nach IPX8',
    hingeTech: 'Flüssigstahl-Scharnier mit 180° Stopp',
    certifiedCycles: 200000,
    certifier: 'Intertek Lab',
    stylusSupport: false,
    processor: 'Google Tensor G4 mit Titan M2',
    cameraSetup: '48 MP Hauptkamera + 10.5 MP Ultraweit + 10.8 MP 5x Periskop',
    badge: 'Kamera- & KI-Spitze',
    verdict: 'Bietet das größte 8 Zoll Display, die gewohnte Google Pixel Kameraqualität und die besten Android-KI-Features.',
    targetGroup: 'Google-Pixel-Fans, Foto-Liebhaber & Großdisplay-Nutzer',
    pros: [
      'Großartiges 8,0 Zoll Innendisplay im praktischen Quadrat-Format',
      'Überragende Kamera-Software mit 5x echtem optischem Zoom',
      'Normales 20:9 Außendisplay für entspanntes Tippen',
      '7 Jahre garantierte Pixel-Drops und Sicherheitsupdates'
    ],
    cons: [
      'Mit 257 g spürbares Gewicht in der Hand',
      'Keine Stift-Eingabe (Stylus) unterstützt'
    ],
    amazonAsinOrQuery: 'Google Pixel 9 Pro Fold'
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
      material: 'Ultra Thin Glass über Kohlefaser-Platte'
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
    ipStandardText: 'Spritzwasserschutz allseitig',
    hingeTech: 'Flexion Hinge (nur 69 Bauteile)',
    certifiedCycles: 1000000,
    certifier: 'TÜV Rheinland',
    stylusSupport: true,
    processor: 'Snapdragon 8 Gen 2',
    cameraSetup: 'Hasselblad 48 MP + 48 MP Ultraweit + 64 MP 3x Tele',
    badge: 'Nahezu unsichtbarer Knick',
    verdict: 'Hat die am wenigsten spürbare Displayfalte und geniales Open Canvas Multitasking zum attraktiven Straßenpreis.',
    targetGroup: 'Preisbewusste High-End-Käufer & Multitasker',
    pros: [
      'Kaum spürbarer Knick beim Darübergleiten mit dem Finger',
      'Geniales Open-Canvas Feature für drei Apps gleichzeitig',
      'Starkes Hasselblad-Kamerasystem mit großem Kamerasensor',
      'Schnelles 67W Laden im Lieferumfang'
    ],
    cons: [
      'Kein kabelloses Laden',
      'Nur Spritzwasserschutz (IPX4)'
    ],
    amazonAsinOrQuery: 'OnePlus Open Foldable'
  }
];

export const FOLDABLE_ACCESSORIES: FoldableAccessory[] = [
  {
    id: 'spen-fold6',
    title: 'Samsung S Pen Fold Edition',
    category: 'stylus',
    compatibleWith: 'Galaxy Z Fold6 & Z Fold5',
    priceEuro: 'ca. 49 €',
    description: 'Speziell gefederte 1,5 mm Rundspitze zum Schutz des Faltglases. Ideal für Zeichnungen, Notizen und Präsentationen.',
    amazonQuery: 'Samsung S Pen Fold Edition Z Fold6'
  },
  {
    id: 'case-zfold6-kickstand',
    title: 'Aramid Carbon Schutzhülle mit Scharnierschutz',
    category: 'case',
    compatibleWith: 'Galaxy Z Fold6 / Pixel Fold / Magic V3',
    priceEuro: 'ca. 39 €',
    description: 'Ultradünne Hülle aus echten Aramidfasern. Schützt das empfindliche Scharnier ohne das Handy unnötig dick zu machen.',
    amazonQuery: 'Z Fold6 Aramid Hülle Scharnierschutz'
  },
  {
    id: 'charger-65w-gan',
    title: '65W GaN Schnellladegerät (Dual USB-C)',
    category: 'charger',
    compatibleWith: 'Universell für alle Foldables & Flips',
    priceEuro: 'ca. 29 €',
    description: 'Kompaktes Power Delivery Ladegerät für maximale Ladegeschwindigkeit bei Samsung, Google, Honor und Motorola.',
    amazonQuery: '65W GaN Ladegerät USB C Schnellladegerät'
  },
  {
    id: 'screen-protector-outer',
    title: 'Panzerglas für das Außendisplay (2er Pack)',
    category: 'protection',
    compatibleWith: 'Für Fold6, Flip6, Razr 50 Ultra, Pixel Fold',
    priceEuro: 'ca. 14 €',
    description: '9H Härtegrad für das äußere Deckglas gegen Schlüsselkratzer und Stürze im Alltag.',
    amazonQuery: 'Panzerglas Falttelefon Aussendisplay'
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
