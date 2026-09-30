export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  category: 'emergency' | 'water-heaters' | 'drain-sewer' | 'repiping' | 'commercial';
  fullDesc: string;
  highlights: string[];
  deliverables: string[];
  duration: string;
}

export interface PlumberProfile {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  specialty: string;
  bio: string;
  avatar: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  category: string;
  rating: number;
  verified: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_INFO = {
  name: 'Millennium Plumbing',
  tagline: "Atlanta's Trusted Plumbing Specialists",
  address: '443 Piedmont Ave NE, Atlanta, GA 30308',
  neighborhood: 'SoNo / Midtown Atlanta',
  phone: '(678) 412-9962',
  phoneRaw: '+16784129962',
  rating: '5.0',
  reviewCount: '18+',
  hours: 'Open 24 Hours / 7 Days for Emergency Dispatch',
  officeHours: 'Mon – Sat: 7:00 AM – 7:00 PM | 24/7 Emergency Line',
  googleMapsUrl: 'https://maps.google.com/?cid=14274806784962907836&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA',
  license: 'Georgia State Licensed Master Plumber #MP20914',
  serviceAreas: [
    'Midtown Atlanta (30308 / 30309)',
    'Downtown / SoNo',
    'Old Fourth Ward (O4W)',
    'Inman Park & Cabbagetown',
    'Virginia-Highland & Ansley Park',
    'Buckhead & Peachtree Hills',
    'West Midtown & Atlantic Station',
    'Decatur & Druid Hills',
    'Grant Park & East Atlanta'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'emergency',
    number: '01',
    title: '24/7 Emergency Plumbing & Leak Response',
    shortDesc: 'Immediate dispatch for active pipe bursts, ceiling leaks, sewer backups, and urgent water shutoffs across Metro Atlanta.',
    category: 'emergency',
    fullDesc: 'When water is flooding your home or business, every minute matters. Our fully stocked service vans deploy directly from Piedmont Ave NE with high-capacity extraction pumps, pipe freezing kits, and acoustic leak detectors to stop damage instantly.',
    highlights: ['Rapid 45-Min Average Atlanta Dispatch', 'Non-Invasive Acoustic & Thermal Leak Tracing', 'Main Water Line Emergency Shutoff', 'Drywall & Flooring Protection Protocols'],
    deliverables: ['Immediate Water Mitigation & Valve Stabilization', 'Comprehensive Photo-Documented Insurance Report', 'Upfront Flat-Rate Repair Estimate'],
    duration: '24/7 immediate on-call response'
  },
  {
    id: 'water-heaters',
    number: '02',
    title: 'Tankless & Hybrid Water Heater Systems',
    shortDesc: 'Expert sizing, installation, and repair for energy-efficient tankless water heaters and high-capacity storage tanks.',
    category: 'water-heaters',
    fullDesc: 'Never run out of hot water again. As factory-certified installers for Navien, Rinnai, Rheem, and Bradford White, we optimize gas lines, venting, and recirculation loops for instant, endless hot water while cutting utility bills by up to 40%.',
    highlights: ['Endless On-Demand Hot Water Capacity', 'Navien & Rinnai Certified Master Technicians', 'Gas Line Pressure & Combustion Air Upgrades', 'Georgia Power Energy Rebate Assistance'],
    deliverables: ['Precision System Sizing Calculation', 'Same-Day Code-Compliant Installation', 'Old Water Heater Haul-Away & Recycling', '10-Year Heat Exchanger Warranty'],
    duration: 'Same-day or next-day turnaround'
  },
  {
    id: 'drain-sewer',
    number: '03',
    title: 'High-Definition Sewer Camera & Hydro-Jetting',
    shortDesc: 'Fiber-optic video pipe diagnostics and 4,000 PSI hydro-jetting to blast away invasive tree roots, sludge, and grease.',
    category: 'drain-sewer',
    fullDesc: 'Recurring toilet clogs or slow basement drains usually mean roots or scale inside your main sewer lateral. Our high-definition color camera inspection pinpoints the exact depth and obstruction without tearing up your lawn.',
    highlights: ['Real-Time HD Color Sewer Video Inspection', '4,000 PSI Industrial Hydro-Jetting System', 'Zero-Excavation Diagnostic Camera Scans', 'Invasive Tree Root Milling & Descaling'],
    deliverables: ['USB / Digital Video Recording of Pipe Interior', 'Exact Depth & Location Markings on Property', 'Trenchless Pipe Lining Recommendation'],
    duration: '1 to 3 hours for complete clearing'
  },
  {
    id: 'repiping',
    number: '04',
    title: 'Whole-Home Copper & PEX-A Repiping',
    shortDesc: 'Replace failing galvanized steel, leaky polybutylene, or corroded copper with commercial-grade Uponor PEX-A tubing.',
    category: 'repiping',
    fullDesc: 'If your Atlanta bungalow or condo suffers from rusty water, pinhole slab leaks, or sudden drops in shower pressure, a modern repipe restores strong, crystal-clear water pressure with pipes that will never corrode or pit.',
    highlights: ['Eliminate Rust, Discoloration & Low Pressure', 'Uponor ProPEX Expansion Joints (No Glue or Soldering)', 'Minimal Drywall Intrusion with Clean Restoration', 'Full 25-Year Manufacturer Pipe Warranty'],
    deliverables: ['Whole-Structure Water Pressure Rebalancing', 'Dedicated Whole-Home Quarter-Turn Shutoff Valves', 'City of Atlanta Code Inspection & Permitting Sign-off'],
    duration: '2 to 4 business days for typical home'
  },
  {
    id: 'fixtures-install',
    number: '05',
    title: 'Architectural Fixtures, Sinks & Toilet Upgrades',
    shortDesc: 'Flawless rough-in and finish plumbing for luxury kitchen sinks, designer faucets, freestanding tubs, and smart bidets.',
    category: 'water-heaters',
    fullDesc: 'Elevate your kitchen and bathrooms with master-level installation. We work with designer brands including Kohler, Moen, Brizo, Grohe, and TOTO to ensure airtight connections, leak-proof drains, and whisper-quiet garbage disposals.',
    highlights: ['TOTO Washlet & Smart Bidet Electrical/Water Setup', 'Freestanding Soaking Tub Drain Assemblies', 'Heavy-Duty InSinkErator Disposal Installations', 'Dual-Handle Wall-Mount Faucet Rough-Ins'],
    deliverables: ['Pressure-Tested Leak-Free Connections', 'Clean Silicone Sealing & Level Alignment', 'Full Workmanship Guarantee'],
    duration: 'Half-day to 1 full day'
  },
  {
    id: 'commercial',
    number: '06',
    title: 'Commercial Plumbing & Backflow Prevention',
    shortDesc: 'State of Georgia certified backflow assembly testing, grease interceptors, commercial restrooms, and code compliance.',
    category: 'commercial',
    fullDesc: 'Dedicated commercial plumbing services for restaurants, property management groups, medical clinics, and retail properties throughout Atlanta. We keep your business open, fully compliant with municipal codes, and safe from backflow hazards.',
    highlights: ['Certified Backflow Assembly Testing (ASSE 5110)', 'Grease Trap Plumbing & Emergency Clears', 'Commercial Boiler & Multi-Unit Water Systems', 'Annual City of Atlanta Municipal Compliance Filing'],
    deliverables: ['Official City of Atlanta Backflow Certification Form', 'Detailed Facility Plumbing Audit', 'Priority Dispatch Service Agreement'],
    duration: 'Scheduled or 24/7 priority emergency'
  }
];

export const PLUMBER_EXPERTS: PlumberProfile[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Master Plumber & Operations Director',
    credentials: 'GA Master Plumber #MP20914 · 18+ Yrs Experience',
    experience: '18 Years',
    specialty: 'Hydronic Systems, Water Main Repiping & Complex Commercial Builds',
    bio: 'Marcus has led plumbing projects across Atlanta for nearly two decades. Known for precision workmanship and honest diagnostic advice, he founded Millennium Plumbing to provide high-caliber craftsmanship without hidden contractor markups.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: "Our water heater ruptured in our Midtown townhouse at 11:30 PM on a Friday. Millennium Plumbing answered immediately, arrived within 40 minutes, and replaced the unit with a brand-new Navien tankless system the next morning. Absolutely life-saving service.",
    author: 'David & Karen S.',
    role: 'Homeowners',
    location: 'Midtown Atlanta (Piedmont Ave)',
    category: 'Emergency & Water Heater',
    rating: 5,
    verified: true
  },
  {
    id: 'test-2',
    quote: "As a restaurant general manager on Ponce, plumbing emergencies mean lost revenue. Millennium cleared a major main drain blockage with hydro-jetting during our morning prep without any disruption to our lunch service. Honest, professional, and zero surprises on the bill.",
    author: 'Marcus Sterling',
    role: 'Restaurant Operations Manager',
    location: 'Old Fourth Ward, Atlanta',
    category: 'Commercial Hydro-Jetting',
    rating: 5,
    verified: true
  },
  {
    id: 'test-3',
    quote: "We had mysterious low water pressure and high water bills in our 1920s Inman Park home. Marcus did an acoustic leak test, found a hidden slab leak beneath the laundry room, and repaired it cleanly. The cleanest contractors we have ever hired.",
    author: 'Sarah Lin',
    role: 'Historic Homeowner',
    location: 'Inman Park, Atlanta',
    category: 'Leak Detection & Repiping',
    rating: 5,
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can Millennium Plumbing dispatch to my Atlanta home or business?',
    answer: 'For emergency calls—such as actively gushing pipes, raw sewage backups, or gas water heater leaks—our average arrival time across Midtown, Downtown, Buckhead, and O4W is under 45 minutes. Our dispatch headquarters on Piedmont Ave NE provides immediate access to all major Atlanta arterials.',
    category: 'Emergency Dispatch'
  },
  {
    id: 'faq-2',
    question: 'Do you provide upfront, flat-rate pricing before work begins?',
    answer: 'Yes. We strictly adhere to transparent, upfront flat-rate pricing. Before turning a single wrench, our licensed technician thoroughly diagnoses the issue, explains your repair options, and provides a clear written estimate with no hidden trip fees or surprise charges.',
    category: 'Pricing & Estimates'
  },
  {
    id: 'faq-3',
    question: 'Are your technicians licensed and insured in Georgia?',
    answer: 'Every project is overseen by an active State of Georgia Licensed Master Plumber (#MP20914). We carry full $2,000,000 general liability insurance and workers compensation, protecting your home and commercial property completely.',
    category: 'Licensing & Quality'
  },
  {
    id: 'faq-4',
    question: 'What are the advantages of upgrading to a tankless water heater in Atlanta?',
    answer: 'Tankless systems heat water on demand rather than keeping 50 gallons hot 24/7. You gain limitless hot showers, save up to 40% on gas or electric energy bills, reclaim valuable square footage in your basement or closet, and benefit from a lifespan of 20+ years compared to 8–10 years for traditional tanks.',
    category: 'Water Heaters'
  },
  {
    id: 'faq-5',
    question: 'Which areas and neighborhoods of Metro Atlanta do you serve?',
    answer: 'We serve all of central and greater Atlanta, including Midtown (30308, 30309), Downtown, SoNo, Old Fourth Ward, Inman Park, Virginia-Highland, Ansley Park, Buckhead, West Midtown, Decatur, Druid Hills, Grant Park, and Sandy Springs.',
    category: 'Service Areas'
  },
  {
    id: 'faq-6',
    question: 'Do you offer preventative maintenance plans for homeowners and businesses?',
    answer: 'Yes! Our Millennium Shield Membership includes annual water heater flushes, whole-home water pressure testing, emergency shutoff valve checks, optical camera drain inspections, and a permanent 15% discount on all repairs with zero dispatch fees.',
    category: 'Maintenance Plans'
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: '5 Warning Signs Your Atlanta Home Has a Hidden Slab Leak',
    excerpt: 'Damp flooring, warm spots on hardwood, or an unexplained surge in your City of Atlanta water bill often indicate a pressurized pipe breach underneath your foundation.',
    category: 'Leak Detection',
    date: 'March 2026',
    readTime: '4 min read',
    author: 'Marcus Vance, Master Plumber',
    content: 'Atlanta red clay soil expands and contracts with seasonal rainfall, putting stress on older copper pipes under concrete slabs...'
  },
  {
    id: 'art-2',
    title: 'Tankless vs. Traditional Tank Water Heaters: Which is Best for Your Family?',
    excerpt: 'Compare upfront costs, energy savings, lifespan, and installation requirements to determine the right hot water solution for your property.',
    category: 'Water Heaters',
    date: 'February 2026',
    readTime: '6 min read',
    author: 'Darryl Jenkins, Systems Lead',
    content: 'While conventional tanks are initially cheaper, a high-efficiency condensing tankless system pays for itself through energy rebates and double the operating lifespan...'
  },
  {
    id: 'art-3',
    title: 'Why Chemical Drain Cleaners Cause More Harm Than Good to Historic Atlanta Pipes',
    excerpt: 'Harsh store-bought acid dissolves pipe linings and creates toxic fumes. Learn why motorized snake augers and hydro-jetting are the only safe fixes for historic lines.',
    category: 'Drain Care',
    date: 'January 2026',
    readTime: '5 min read',
    author: 'Elena Ramos, Diagnostic Specialist',
    content: 'Historic homes in Inman Park and Ansley Park frequently have cast iron or clay drain lines that chemical cleaners literally eat through...'
  }
];
