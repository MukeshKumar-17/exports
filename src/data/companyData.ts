import { JourneyStage, ProductItem, CapabilityItem, StatItem, ClientItem, ValueItem } from '../types';

export const COMPANY_INFO = {
  name: 'SOWNDARYA EXPORTS',
  tagline: 'GARMENT & TEXTILE EXPORTS · INDIA',
  heroHeadlineLead: 'From fibre to',
  heroHeadlineEmphasis: 'finished garment,',
  heroHeadlineTrail: 'made to your specification.',
  heroDescription:
    'Sowndarya Exports brings together disciplined sourcing, manufacturing and quality control to deliver garments built to specification — from the first fibre to final dispatch.',
  location: 'Avinashi Road, Tirupur, Tamil Nadu 641 602, India',
  regionNote: 'Tirupur Knitwear Export Corridor, South India',
  email: 'Soundariyaexports@gmail.com',
  phone: '+91 99524 47167',
  rawPhone: '+919952447167',
  businessHours: 'Monday – Saturday: 08:30 – 18:30 IST',
};

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'cotton',
    stageNumber: '01',
    stageTitle: 'COTTON',
    headline: 'It starts with\nthe right cotton.',
    description:
      'Every order begins with the raw material, because nothing downstream can fix a weak fibre. Lint is graded for staple length, micronaire, strength and trash before a bale is approved, and we keep the same cotton profile for every repeat order — so a reorder six months later still feels like the original sample.',
    details: [
      'Strict staple length & micronaire profile grading',
      'Continuous lot tracing across bale inventories',
      'Raw fibre trash content audited to under 2%',
    ],
    specs: [
      { label: 'Staple Selection', value: '29mm – 34mm Combed' },
      { label: 'Micronaire Index', value: '3.8 – 4.2 Balanced' },
      { label: 'Lot Consistency', value: 'Repeat-Order Calibrated' },
    ],
    visualType: 'cotton',
  },
  {
    id: 'yarn',
    stageNumber: '02',
    stageTitle: 'YARN',
    headline: 'Cotton becomes\nthe yarn.',
    description:
      'Selected cotton is converted into yarn with strict control over yarn count, tensile strength, twist factor, and hairiness. Whether ring spun, compact combed, or open-end, every bobbin is evaluated for uniform mass and low imperfection levels to ensure an unblemished fabric face.',
    details: [
      'Calibrated twist multiples for torque stability',
      'Imperfection Index (IPI) tested per spinning lot',
      'Tailored counts from 16s to 60s for diverse handfeels',
    ],
    specs: [
      { label: 'Yarn Counts', value: '16s Ne – 60s Ne' },
      { label: 'Spinning Types', value: 'Combed Compact & Ring Spun' },
      { label: 'Evenness Control', value: 'Low Hairiness Standard' },
    ],
    visualType: 'yarn',
  },
  {
    id: 'fabric',
    stageNumber: '03',
    stageTitle: 'FABRIC',
    headline: 'Yarn is knitted\ninto fabric.',
    description:
      'Knitted on precision circular machinery to achieve exact gauge, stitch density, and GSM specifications. The greige fabric moves through soft-flow dyeing and finishing with controlled compaction and stenter heat-setting to guarantee dimensional stability and wash-fast color retention.',
    details: [
      'High-gauge circular knitting for smooth handfeel',
      'Soft-flow processing with low liquor ratio',
      'Compacting and stenter finishing for minimal shrinkage',
    ],
    specs: [
      { label: 'Weight Range', value: '140 – 480 GSM' },
      { label: 'Residual Shrinkage', value: '< 3% Length & Width' },
      { label: 'Color Fastness', value: 'Grade 4+ Washing Standard' },
    ],
    visualType: 'fabric',
  },
  {
    id: 'cutting-stitching',
    stageNumber: '04',
    stageTitle: 'CUTTING & STITCHING',
    headline: 'Fabric becomes\nthe garment.',
    description:
      'After full 24-hour fabric relaxation, CAD marker planning minimizes grain distortion and optimizes panel accuracy. Garment panels are assembled across dedicated lines with in-line needle checks, reinforced seam taping, and continuous measurement audits against your tech pack.',
    details: [
      'Static-free fabric relaxation tables',
      'Automated CAD marker nesting and precision cuts',
      'In-line seam integrity and SPI (stitches per inch) monitoring',
    ],
    specs: [
      { label: 'Stitch Quality', value: '10–12 SPI Balanced' },
      { label: 'Seam Types', value: 'Flatlock, Overlock, Double-Needle' },
      { label: 'Assembly Audit', value: '100% In-Line Station Checks' },
    ],
    visualType: 'cutting',
  },
  {
    id: 'finishing-packing',
    stageNumber: '05',
    stageTitle: 'FINISHING & PACKING',
    headline: 'Finished,\nchecked,\npacked.',
    description:
      'Every garment undergoes pressurized steam form finishing, thread trimming, button and snap pull-force testing, and rigorous measurement auditing. Passed units receive buyer barcode hangtags, moisture protection wrap, and packaging into heavy-duty corrugated export cartons.',
    details: [
      'Industrial vacuum steam pressing and form shaping',
      '100% metal and broken needle detection on all units',
      'Tech-pack tolerance measurement verification',
    ],
    specs: [
      { label: 'Inspection Protocol', value: 'AQL 1.5 / 2.5 Standard' },
      { label: 'Safety Check', value: 'Dual-Head Needle Detection' },
      { label: 'Packaging', value: 'Export 7-Ply Cartons & Moisture Barrier' },
    ],
    visualType: 'finishing',
  },
  {
    id: 'delivery',
    stageNumber: '06',
    stageTitle: 'DELIVERY',
    headline: 'Loaded out\nand delivered.',
    description:
      'Carton counts and container weights are verified against the packing list and bill of lading. Sealed with tamper-evident container locks, shipments are transferred under bonded transit to Tuticorin or Chennai ports for scheduled global ocean freight or air consignment dispatch.',
    details: [
      'Comprehensive export documentation and Certificate of Origin',
      'Moisture-controlled container desiccant lining',
      'Direct coordination with global forwarders and customs brokers',
    ],
    specs: [
      { label: 'Terms Supported', value: 'FOB, CIF, DDP Available' },
      { label: 'Gateway Ports', value: 'Tuticorin (VTC) & Chennai' },
      { label: 'Shipment Tracking', value: 'Seal & Container EDI Records' },
    ],
    visualType: 'delivery',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 't-shirts',
    number: '01',
    name: 'T-Shirts',
    category: 'Knitwear',
    gsm: '180 – 280 GSM',
    composition: '100% Combed Compact Cotton / CVC / Tri-Blend',
    fit: 'Standard, Oversized, Boxy, Drop-Shoulder',
    moq: '500 pcs per style/colour',
    description:
      'Heavyweight and classic weight jersey t-shirts featuring twin-needle collar rib, reinforced shoulder-to-shoulder neck tape, and pre-shrunk fabric construction.',
    details: [
      'Single jersey, slub jersey, or micro-rib construction',
      'Silicon wash or vintage enzyme wash finishes',
      'Precision neck rib retention without bacon-neck wave',
    ],
  },
  {
    id: 'polo-shirts',
    number: '02',
    name: 'Polo Shirts',
    category: 'Knitwear',
    gsm: '200 – 260 GSM',
    composition: '100% Cotton Pique / Poly-Cotton Honeycomb',
    fit: 'Classic Tailored & Modern Slim',
    moq: '500 pcs per style/colour',
    description:
      'Engineered pique knit polos with anti-curl flatknit collars, reinforced plackets, custom mother-of-pearl or dyed-to-match buttons, and taped side vents.',
    details: [
      'Zero-twist collar tipping and matching cuff jacquards',
      'Cross-stitched reinforced button plackets',
      'Extended back tennis tail styling option',
    ],
  },
  {
    id: 'sweatshirts',
    number: '03',
    name: 'Sweatshirts',
    category: 'Fleece & Hoodies',
    gsm: '320 – 420 GSM',
    composition: '100% Cotton Loopback French Terry / Brushed Fleece',
    fit: 'Relaxed Athletic & Minimalist Boxy',
    moq: '400 pcs per style/colour',
    description:
      'Crewneck sweatshirts built from substantial diagonal loopback or brushed fleece. Fitted with heavy 2x2 elastane-reinforced ribbing at collar, cuffs, and hem.',
    details: [
      'Twin-needle coverstitch on armholes and rib seams',
      'V-inset or clean cross-neck collar detail',
      'Zero-pilling combed face ideal for puff and screen print',
    ],
  },
  {
    id: 'hoodies',
    number: '04',
    name: 'Hoodies',
    category: 'Fleece & Hoodies',
    gsm: '360 – 480 GSM',
    composition: '100% Heavyweight Cotton Fleece / Diagonal French Terry',
    fit: 'Oversized Streetwear & Structured Classic',
    moq: '400 pcs per style/colour',
    description:
      'Substantial heavyweight hoodies with double-layer self-fabric hoods, kangaroo front pockets, metal or embroidered eyelets, and chunky tipped drawcords.',
    details: [
      'Self-lined hood for upright structured drape',
      'Bar-tacked pocket corners for long-term load durability',
      'Side ribbed panels available for ergonomic movement',
    ],
  },
  {
    id: 'joggers',
    number: '05',
    name: 'Joggers',
    category: 'Bottoms',
    gsm: '320 – 380 GSM',
    composition: '100% Cotton French Terry / Cotton-Poly Tech Fleece',
    fit: 'Tapered Cuff & Relaxed Comfort',
    moq: '400 pcs per style/colour',
    description:
      'Engineered sweatpants with elasticated drawstring waistbands, deep slash front pockets, back welt pockets, and snug ribbed ankle cuffs.',
    details: [
      'Grosgrain internal waistband finish with tonal drawcord',
      'Reinforced crotch gusset for athletic range of motion',
      'Concealed YKK zipper pocket options available',
    ],
  },
  {
    id: 'track-pants',
    number: '06',
    name: 'Track Pants',
    category: 'Bottoms',
    gsm: '260 – 320 GSM',
    composition: 'Double-Knit Interlock / Tricot / Poly-Cotton',
    fit: 'Straight Leg with Ankle Zip',
    moq: '500 pcs per style/colour',
    description:
      'Clean tailored track pants featuring pin-tuck center leg creases, side contrast piping or tape, and smooth semi-matte interlock drape.',
    details: [
      'Permanent stitched front pin-tuck seam',
      'Ankle gusset with hidden metal zipper',
      'Subtle lustre and wrinkle-resistant fabric memory',
    ],
  },
  {
    id: 'shorts',
    number: '07',
    name: 'Shorts',
    category: 'Bottoms',
    gsm: '260 – 340 GSM',
    composition: '100% Combed Cotton French Terry / Interlock',
    fit: 'Mid-Thigh & Above-Knee Athletic',
    moq: '500 pcs per style/colour',
    description:
      'Casual and athletic fleece shorts constructed with encased elastic waists, raw-edge or turnback stitched hems, and secure storage pockets.',
    details: [
      'Multi-channel elastic waist preventing band roll',
      'Deep jersey pocket bags keeping essentials secure',
      'Double-stitch reinforced side split vents',
    ],
  },
  {
    id: 'kidswear',
    number: '08',
    name: 'Kidswear',
    category: 'Active & Specialty',
    gsm: '160 – 220 GSM',
    composition: '100% Organic Ring-Spun Cotton',
    fit: 'Growth-Accommodating & Safe Play Fit',
    moq: '600 pcs per style/colour',
    description:
      'Hypoallergenic children’s knitwear engineered with extra-soft seams, nickel-free snaps, non-toxic dyes, and stringent baby/children safety compliance.',
    details: [
      'Flat-seam lockstitching to eliminate skin friction',
      'Tear-away or tagless heat transfer labelling',
      '100% lead-free, nickel-free trims and fastenings',
    ],
  },
  {
    id: 'activewear',
    number: '09',
    name: 'Activewear',
    category: 'Active & Specialty',
    gsm: '180 – 260 GSM',
    composition: 'Polyester-Elastane / Nylon Tactel / Bamboo Blends',
    fit: 'Ergonomic Compression & Fluid Motion',
    moq: '500 pcs per style/colour',
    description:
      'High-performance training tops and leggings with moisture-wicking capillary finish, 4-way stretch recovery, and breathable anti-microbial treatments.',
    details: [
      'Four-needle six-thread flatlock assembly',
      'Reflective transfer logo placements for low-light safety',
      'Quick-drying filament yarns for thermal regulation',
    ],
  },
  {
    id: 'loungewear',
    number: '10',
    name: 'Loungewear',
    category: 'Active & Specialty',
    gsm: '170 – 230 GSM',
    composition: 'Modal Cotton Blend / Micro-Modal / Rib Knit',
    fit: 'Oversized Drape & Relaxed Lounge Fit',
    moq: '500 pcs per style/colour',
    description:
      'Ultra-soft knit sets, robes, and sleep tops created with silky modal-rich blends that drape with effortless luxury and buttery handfeel.',
    details: [
      'Fluid drape with excellent stretch recovery',
      'Mercerized finish with subtle ambient sheen',
      'Tagless necklines and softly gathered wristbands',
    ],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Fabric & Knitting',
    description:
      'Precision circular knitting machinery capable of single jersey, interlock, pique, 2x2 rib, waffle, French terry, and fleece in fine gauges.',
    specs: '16 – 32 Gauge Circular Looms',
    iconName: 'knitting',
  },
  {
    number: '02',
    title: 'Dyeing & Finishing',
    description:
      'Soft-flow dyeing vessels with automated computerized dosing. Reactive dyeing, bio-polishing, stenter heat setting, and zero-discharge water recycling.',
    specs: 'Eco-Certified Dyes & Compacting',
    iconName: 'dyeing',
  },
  {
    number: '03',
    title: 'Cutting',
    description:
      'Full 24-hour fabric relaxation bays, CAD pattern grading, computerized marker nesting, and high-precision straight knife & band knife cutting.',
    specs: 'Automated CAD Marker Nesting',
    iconName: 'cutting',
  },
  {
    number: '04',
    title: 'Stitching',
    description:
      'Specialized production lines equipped with high-speed lockstitch, overlock, flatlock, feed-off-the-arm, and automated bar-tacking stations.',
    specs: 'Modular Continuous Line Assembly',
    iconName: 'stitching',
  },
  {
    number: '05',
    title: 'Printing & Embroidery',
    description:
      'Comprehensive in-house print & embroidery setups: water-base, discharge, high-density puff, plastisol, digital direct, and multi-head embroidery.',
    specs: 'Up to 12-Color Precision Heads',
    iconName: 'printing',
  },
  {
    number: '06',
    title: 'Quality Control',
    description:
      '4-point raw fabric inspection, in-line roaming audits, 100% metal/needle detection tunnels, and final pre-dispatch audits adhering to AQL standards.',
    specs: 'AQL 1.5 / 2.5 Inspection Standard',
    iconName: 'quality',
  },
  {
    number: '07',
    title: 'Packing',
    description:
      'High-pressure vacuum steam ironing stations, precise garment folding templates, barcode hangtagging, individual polybags, and heavy export cartons.',
    specs: 'Barcoded Carton SKU Traceability',
    iconName: 'packing',
  },
  {
    number: '08',
    title: 'Delivery',
    description:
      'Bonded export dispatch with container loading docks, moisture barrier carton wrapping, tamper seals, and direct port connectivity to Tuticorin & Chennai.',
    specs: 'FOB, CIF & DDP Logistics Management',
    iconName: 'delivery',
  },
];

export const INITIAL_STATS: StatItem[] = [
  {
    id: 'years',
    value: '3+',
    label: 'Years of Experience',
    sublabel: 'Dedicated garment export operations',
  },
  {
    id: 'machines',
    value: '20',
    label: 'Production Machines',
    sublabel: 'Knitting, cutting & stitching equipment',
  },
  {
    id: 'workers',
    value: '28',
    label: 'Skilled Team Members',
    sublabel: 'Craftspeople, tailors & QA specialists',
  },
  {
    id: 'capacity',
    value: '30,000',
    label: 'Pieces / Month',
    sublabel: 'Consistent monthly garment throughput',
  },
];

export const CLIENTS: ClientItem[] = [
  { id: 'c1', code: 'SHEIN', market: 'Global', segment: 'High-Volume Apparel & Trend Knitwear' },
  { id: 'c2', code: 'ALFURAT', market: 'Middle East', segment: 'Commercial Fashion & Retail' },
  { id: 'c3', code: 'EL CHARRO', market: 'Europe', segment: 'Heritage Casualwear & Lifestyle' },
  { id: 'c4', code: 'NAVIGARE', market: 'Europe / Italy', segment: 'Heritage Casualwear & Knitwear Collections' },
];

export const ABOUT_CARDS = [
  {
    tag: 'OUR MISSION',
    title: 'Engineered Consistency',
    body: 'To deliver precision-manufactured knitwear and apparel that strictly matches our clients’ technical specifications, backed by disciplined lead times and honest communication.',
  },
  {
    tag: 'OUR VISION',
    title: 'Global Export Excellence',
    body: 'To stand as the international benchmark for transparent, high-integrity garment manufacturing from India, partnering with forward-thinking fashion brands worldwide.',
  },
  {
    tag: 'OUR QUALITY',
    title: 'End-to-End Governance',
    body: 'Zero-compromise tolerance checks spanning raw bale inspection, yarn twist testing, GSM compaction audits, and 100% needle-detector scanning prior to carton sealing.',
  },
  {
    tag: 'GLOBAL REACH',
    title: 'International Port Dispatch',
    body: 'Strategically positioned within the Tirupur knitwear corridor, dispatching bonded containers directly to European, North American, and Asia-Pacific destination ports.',
  },
];

export const VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Customer Focus',
    description:
      'We build every line around the client’s specifications, lead time constraints, and quality tech packs. Your brand standards dictate our manufacturing parameters.',
  },
  {
    number: '02',
    title: 'Quality & Precision',
    description:
      'Obsessive attention to stitch tension, GSM calibration, seam tolerances, and shade continuity across repeat production cycles.',
  },
  {
    number: '03',
    title: 'Integrity',
    description:
      'Transparent communication regarding order schedules, raw material origins, and lab dip results. We uphold every commitment we make.',
  },
  {
    number: '04',
    title: 'People & Safety',
    description:
      'Fair, ethical workplace standards, ergonomic machine stations, and continuous skill advancement for our garment technicians and operators.',
  },
  {
    number: '05',
    title: 'Accountability',
    description:
      'Complete ownership from the incoming cotton bale to the bill-of-lading handover at destination port, ensuring no ambiguity in responsibility.',
  },
];
