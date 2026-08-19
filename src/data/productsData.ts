export interface ProductItem {
  id: string;
  name: string;              // "Owner OS"
  vertical: string;          // "Manufacturing & Assembly"
  status: 'live' | 'soon';
  tagline: string;
  shortDesc: string;
  icon: string;               // lucide icon identifier
  route: string;              // 'owner-os-home' | 'product-agriculture' etc.
  accentColor: string;        // hex, distinct per product for visual differentiation
  capabilities?: string[];
  metrics?: { label: string; value: string }[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'owner-os',
    name: 'Owner OS',
    vertical: 'Manufacturing & Assembly',
    status: 'live',
    tagline: "The Owner's Command Center",
    shortDesc: 'End-to-end operations OS for discrete & process manufacturers — orders, inventory, shop floor, finance, and people in one system.',
    icon: 'LayoutDashboard',
    route: 'owner-os-home',
    accentColor: '#BAF91A',
    capabilities: [
      'Multi-stage production routing & live job card tracking',
      'Automated raw material reservations & smart reorder buffers',
      'Single-pane executive command dashboard with yield gauges',
      'Automated AP/AR voucher reconciliation and real-time cashflow'
    ],
    metrics: [
      { label: 'Core Modules', value: '14 Live' },
      { label: 'Floor Visibility', value: '100% Real-Time' },
      { label: 'Status', value: 'Production Ready' }
    ]
  },
  {
    id: 'agri-process',
    name: 'MridaOS',
    vertical: 'Agribusiness & Food-Allied',
    status: 'soon',
    tagline: 'Farm-to-factory agribusiness visibility',
    shortDesc: 'AI-enabled operating system specifically designed for agribusiness and food-allied businesses — from harvest procurement to processing and distribution.',
    icon: 'Sprout',
    route: 'product-agriculture',
    accentColor: '#00BBA7',
    capabilities: [
      'Harvest intake batching & quality grade inspection logs',
      'Yield-loss variance tracking across sorting and milling cycles',
      'Perishable storage temperature telemetry & expiry buffers',
      'Farmer payout ledgering and direct procurement workflows'
    ],
    metrics: [
      { label: 'Target Sector', value: 'Agribusiness & Food-Allied' },
      { label: 'Stage', value: 'Architecture Design' },
      { label: 'Pilot Cohort', value: 'Q3 2026' }
    ]
  },
  {
    id: 'retail-distribution',
    name: 'Retail & Distribution',
    vertical: 'Retail & Distribution',
    status: 'soon',
    tagline: 'Stock, orders & store control',
    shortDesc: 'Multi-location retail and distribution operations, unified into one synchronized control tower. Coming soon.',
    icon: 'Store',
    route: 'product-retail',
    accentColor: '#876DFF',
    capabilities: [
      'Omnichannel inventory sync across central warehouses & retail outlets',
      'Real-time store point-of-sale telemetry & replenishment triggers',
      'Distributor credit management, price lists, and margin rules',
      'Centralized return merchandising authorization (RMA) workflows'
    ],
    metrics: [
      { label: 'Target Sector', value: 'Multi-Store & Wholesale' },
      { label: 'Stage', value: 'Specification' },
      { label: 'Pilot Cohort', value: 'Q4 2026' }
    ]
  },
  {
    id: 'healthcare-pharma',
    name: 'Healthcare & Pharma',
    vertical: 'Healthcare & Pharma',
    status: 'soon',
    tagline: 'Compliant, traceable operations',
    shortDesc: 'Batch tracking, regulatory compliance, and distribution control for healthcare & pharma businesses. Coming soon.',
    icon: 'HeartPulse',
    route: 'product-healthcare',
    accentColor: '#F97066',
    capabilities: [
      'Strict GMP batch-genealogy & 21 CFR electronic signature logging',
      'Cold-chain storage validation & excursion threshold alarms',
      'Controlled substance chain-of-custody tracking & audit trails',
      'Automated batch release testing workflows and CoA generators'
    ],
    metrics: [
      { label: 'Target Sector', value: 'Pharma & MedTech' },
      { label: 'Stage', value: 'Compliance Blueprinting' },
      { label: 'Pilot Cohort', value: '2027' }
    ]
  },
  {
    id: 'logistics-warehousing',
    name: 'Logistics & Warehousing',
    vertical: 'Logistics & Warehousing',
    status: 'soon',
    tagline: 'Fleet, freight & warehouse ops',
    shortDesc: 'Warehouse, dispatch, and fleet operations in one synchronized real-time control tower. Coming soon.',
    icon: 'Truck',
    route: 'product-logistics',
    accentColor: '#3B82F6',
    capabilities: [
      'Dynamic bin-location mapping & optimized wave picking',
      'Fleet telematics, route dispatching, and fuel efficiency audits',
      'Cross-docking coordination and freight manifest generation',
      'Proof-of-delivery (e-POD) mobile capture with instant invoicing'
    ],
    metrics: [
      { label: 'Target Sector', value: '3PL & Freight Fleet' },
      { label: 'Stage', value: 'Research & Scoping' },
      { label: 'Pilot Cohort', value: '2027' }
    ]
  },
];
