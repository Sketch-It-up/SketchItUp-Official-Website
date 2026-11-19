export interface MridaChallenge {
  id: string;
  title: string;
  description: string;
}

export interface MridaModule {
  id: string;
  number: string;
  title: string;
  category: 'operations' | 'commercial' | 'intelligence';
  scopeLabel: string;
  summary: string;
  features: string[];
}

export interface FertilizerArea {
  code: string;
  id: string;
  title: string;
  summary: string;
  scopeLabel: string;
  features: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  stage: 'Procurement' | 'Inventory' | 'Sales & Dispatch' | 'Finance & BI';
  description: string;
}

export interface AiCapability {
  id: string;
  number: string;
  title: string;
  scopeType: 'Core / Configurable' | 'Scope-Dependent AI' | 'Configurable / Phased';
  description: string;
  exampleQuery?: string;
}

export interface UserRole {
  id: string;
  role: string;
  focus: string;
  capabilities: string[];
}

export interface BusinessBenefit {
  id: string;
  title: string;
  description: string;
}

export interface ImplementationStage {
  step: string;
  title: string;
  description: string;
}

export interface MridaFaq {
  question: string;
  answer: string;
}

export const MRIDA_SEO = {
  title: 'Mrida OS | AI-Powered Agribusiness Operating System – SketchItUp Solutions',
  description:
    'Mrida OS is an AI-enabled business operating system for agribusinesses, fertilizer manufacturers, distributors and food-allied enterprises. Manage procurement, inventory, sales, dealers, finance and business intelligence on one integrated platform.',
  keywords: [
    'Agribusiness ERP Software',
    'Fertilizer Business Management Software',
    'Fertilizer Inventory Management',
    'Dealer Management System',
    'Agricultural Distribution Software',
    'Agri Business Operating System',
    'AI-Powered ERP for Agriculture',
    'Procurement and Inventory Management',
    'Business Intelligence for Agribusiness',
  ].join(', '),
};

export const MRIDA_CHALLENGES: MridaChallenge[] = [
  {
    id: 'fragmented-info',
    title: 'Fragmented Business Information',
    description:
      'Purchase records, inventory data, sales orders and financial information exist across multiple platforms.',
  },
  {
    id: 'inventory-visibility',
    title: 'Limited Inventory Visibility',
    description:
      'Difficulty tracking stock availability, warehouse movement, inward and outward quantities and product-wise inventory.',
  },
  {
    id: 'disconnected-procurement',
    title: 'Disconnected Procurement',
    description:
      'Supplier coordination, purchase orders, inward records and purchase tracking require extensive manual intervention.',
  },
  {
    id: 'dealer-management',
    title: 'Inefficient Dealer Management',
    description:
      'Managing dealer information, orders, outstanding balances and distribution activities becomes increasingly complex as the network grows.',
  },
  {
    id: 'financial-visibility',
    title: 'Delayed Financial Visibility',
    description:
      'Outstanding payments, receivables, payables and cash-flow information are not always available in one place.',
  },
  {
    id: 'decision-intelligence',
    title: 'Limited Decision-Making Intelligence',
    description:
      'Business owners often depend on manually prepared reports instead of having access to consolidated operational insights.',
  },
];

export const MRIDA_MODULES: MridaModule[] = [
  {
    id: 'procurement',
    number: '01',
    title: 'Procurement & Purchase Management',
    category: 'operations',
    scopeLabel: 'Core Module · Configurable',
    summary:
      'Manage the complete purchasing lifecycle, from supplier identification to material inward.',
    features: [
      'Supplier and vendor database management.',
      'Purchase requisitions and purchase order creation.',
      'Supplier quotations and purchase comparisons.',
      'Purchase order approval workflows.',
      'Expected delivery tracking.',
      'Material inward and goods receipt records.',
      'Purchase history and supplier performance.',
      'Purchase price and procurement analysis.',
    ],
  },
  {
    id: 'inventory',
    number: '02',
    title: 'Inventory & Stock Management',
    category: 'operations',
    scopeLabel: 'Core Module · Configurable',
    summary:
      'Maintain accurate visibility of products, stock quantities and warehouse operations.',
    features: [
      'Centralised product and SKU master.',
      'Product category and batch management.',
      'Real-time stock availability.',
      'Warehouse-wise inventory tracking.',
      'Goods received and goods issued records.',
      'Stock transfers between locations.',
      'Minimum stock and reorder-level alerts.',
      'Damaged, expired and blocked stock tracking.',
      'Inventory valuation and stock movement reports.',
    ],
  },
  {
    id: 'sales',
    number: '03',
    title: 'Sales & Order Management',
    category: 'commercial',
    scopeLabel: 'Core Module · Configurable',
    summary:
      'Manage customer orders from initial enquiry to successful order fulfilment.',
    features: [
      'Customer and buyer database.',
      'Sales enquiries and quotations.',
      'Sales order creation and confirmation.',
      'Product-wise pricing and order quantities.',
      'Order approval and processing.',
      'Sales invoicing and documentation.',
      'Order fulfilment and delivery tracking.',
      'Sales history and customer-wise reporting.',
    ],
  },
  {
    id: 'dealers',
    number: '04',
    title: 'Dealer & Distribution Management',
    category: 'commercial',
    scopeLabel: 'Core Module · Configurable',
    summary:
      'Build a connected dealer network with visibility into orders, distribution and commercial performance.',
    features: [
      'Dealer and distributor master database.',
      'Dealer classification and territory mapping.',
      'Dealer-wise order management.',
      'Dealer-specific pricing and commercial terms.',
      'Distribution and dispatch tracking.',
      'Dealer outstanding and payment records.',
      'Sales performance by dealer and territory.',
      'Dealer activity and transaction history.',
    ],
  },
  {
    id: 'finance',
    number: '05',
    title: 'Finance & Payment Management',
    category: 'commercial',
    scopeLabel: 'Core Module · Integration-Ready',
    summary:
      'Bring business transactions and financial visibility into one connected environment.',
    features: [
      'Customer receivables tracking.',
      'Supplier payables tracking.',
      'Invoice and payment records.',
      'Partial and full payment tracking.',
      'Outstanding balance monitoring.',
      'Payment due-date reminders.',
      'Customer-wise and supplier-wise ledgers.',
      'Cash-flow visibility and financial summaries.',
      'Integration-ready accounting workflows.',
    ],
  },
  {
    id: 'bi-analytics',
    number: '06',
    title: 'Business Intelligence & Analytics',
    category: 'intelligence',
    scopeLabel: 'Configurable · Scope-Dependent AI',
    summary:
      'Transform operational data into meaningful business intelligence.',
    features: [
      'Consolidated business performance dashboard.',
      'Sales and purchase analytics.',
      'Product-wise revenue and movement.',
      'Inventory ageing and stock analysis.',
      'Dealer and territory performance.',
      'Receivables and payables analysis.',
      'Procurement trends and supplier performance.',
      'Business growth and operational KPIs.',
      'Customisable management reports.',
    ],
  },
  {
    id: 'workflow-automation',
    number: '07',
    title: 'Workflow Automation & Task Management',
    category: 'intelligence',
    scopeLabel: 'Core Module · Configurable',
    summary:
      'Reduce repetitive administrative work through structured digital workflows.',
    features: [
      'Role-based task allocation.',
      'Purchase and sales approval workflows.',
      'Automated notifications and reminders.',
      'Pending task monitoring.',
      'Order status updates.',
      'Inventory threshold alerts.',
      'Payment follow-up reminders.',
      'Activity tracking and audit history.',
      'Centralised operational coordination.',
    ],
  },
];

export const FERTILIZER_AREAS: FertilizerArea[] = [
  {
    code: 'A',
    id: 'product-master',
    title: 'Product & Fertilizer Master Management',
    summary: 'Create and maintain a centralised database of all products.',
    scopeLabel: 'Configurable Master Data',
    features: [
      'Product name, SKU and category.',
      'Fertilizer type and composition details.',
      'Product specifications and packaging sizes.',
      'Manufacturer and supplier information.',
      'Product-wise pricing and applicable tax configuration.',
      'Batch and lot identification.',
      'Product documentation and compliance records.',
      'Product activation and availability status.',
    ],
  },
  {
    code: 'B',
    id: 'fertilizer-procurement',
    title: 'Procurement & Supplier Management',
    summary:
      'Manage fertilizer procurement and raw material purchasing through structured purchase workflows.',
    scopeLabel: 'Configurable Workflow',
    features: [
      'Supplier onboarding and database.',
      'Purchase requisition generation.',
      'Supplier quotation management.',
      'Purchase order creation and approval.',
      'Purchase quantity and rate tracking.',
      'Expected delivery schedules.',
      'Goods receipt and inward documentation.',
      'Supplier invoice and payment records.',
      'Supplier-wise procurement history.',
    ],
  },
  {
    code: 'C',
    id: 'warehouse-inventory',
    title: 'Warehouse & Inventory Operations',
    summary:
      'Maintain visibility across warehouses, storage facilities and distribution locations.',
    scopeLabel: 'Multi-Warehouse Configurable',
    features: [
      'Warehouse-wise stock availability.',
      'Product-wise inventory tracking.',
      'Batch and lot-wise stock records.',
      'Stock inward and outward entries.',
      'Inter-warehouse stock transfers.',
      'Stock adjustments and reconciliation.',
      'Reorder-level notifications.',
      'Slow-moving and ageing inventory reports.',
      'Expiry and quality-related stock monitoring, where applicable.',
    ],
  },
  {
    code: 'D',
    id: 'fertilizer-sales',
    title: 'Sales & Customer Management',
    summary:
      'Manage wholesale, retail and institutional sales through a unified order management system.',
    scopeLabel: 'Configurable Workflow',
    features: [
      'Customer and buyer registration.',
      'Customer-specific pricing.',
      'Sales enquiries and quotations.',
      'Sales order creation.',
      'Order confirmation and processing.',
      'Product availability verification.',
      'Invoice and delivery documentation.',
      'Customer purchase history.',
      'Sales performance tracking.',
    ],
  },
  {
    code: 'E',
    id: 'dealer-network',
    title: 'Dealer & Distributor Network',
    summary:
      'Manage the complete dealer ecosystem with centralised information and transaction visibility.',
    scopeLabel: 'Configurable Ecosystem',
    features: [
      'Dealer and distributor registration.',
      'Territory and location mapping.',
      'Dealer-wise product allocation.',
      'Dealer-specific pricing and credit terms.',
      'Dealer purchase order tracking.',
      'Dealer-wise outstanding balances.',
      'Dealer performance analytics.',
      'Sales territory reports.',
      'Dealer communication and notifications.',
    ],
  },
  {
    code: 'F',
    id: 'dispatch-distribution',
    title: 'Dispatch & Distribution Management',
    summary:
      'Connect warehouse operations with the delivery and distribution process.',
    scopeLabel: 'Configurable Logistics',
    features: [
      'Dispatch planning.',
      'Order-wise picking and packing.',
      'Delivery challan generation.',
      'Vehicle and transporter details.',
      'Dispatch status tracking.',
      'Delivery confirmation.',
      'Proof of delivery records.',
      'Pending dispatch monitoring.',
      'Freight and transportation cost records.',
    ],
  },
  {
    code: 'G',
    id: 'financial-commercial',
    title: 'Financial & Commercial Management',
    summary:
      'Get a consolidated view of business transactions and payment commitments.',
    scopeLabel: 'Integration-Ready',
    features: [
      'Customer invoice management.',
      'Supplier invoice management.',
      'Customer outstanding tracking.',
      'Supplier payment schedules.',
      'Partial and full payment records.',
      'Credit limits and payment terms.',
      'Customer and dealer ledgers.',
      'Payment follow-up alerts.',
      'Revenue and collection reports.',
    ],
  },
  {
    code: 'H',
    id: 'management-dashboard-ai',
    title: 'Management Dashboard & AI Intelligence',
    summary:
      'Give business owners a consolidated view of the entire organisation.',
    scopeLabel: 'Configurable · Scope-Dependent AI',
    features: [
      'Daily sales and purchase summaries.',
      'Total inventory and warehouse valuation.',
      'Product-wise stock movement.',
      'Top-performing dealers and customers.',
      'Pending orders and dispatches.',
      'Outstanding receivables and payables.',
      'Procurement and sales trends.',
      'Inventory ageing analysis.',
      'AI-assisted business summaries.',
      'Intelligent alerts and decision-support insights.',
    ],
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Procurement Initiation',
    stage: 'Procurement',
    description:
      'The purchase team identifies stock requirements, selects suppliers and generates purchase orders.',
  },
  {
    step: '02',
    title: 'Purchase Confirmation',
    stage: 'Procurement',
    description:
      'Purchase orders are reviewed, approved and tracked against expected delivery schedules.',
  },
  {
    step: '03',
    title: 'Material Inward',
    stage: 'Inventory',
    description:
      'Received fertilizer products are verified against purchase records, with quantities, batches and quality-related information recorded.',
  },
  {
    step: '04',
    title: 'Inventory Update',
    stage: 'Inventory',
    description:
      'Verified goods are added to the appropriate warehouse inventory. Stock records are updated.',
  },
  {
    step: '05',
    title: 'Sales Order Processing',
    stage: 'Sales & Dispatch',
    description:
      'Customer or dealer orders are received, product availability is checked and sales orders are confirmed.',
  },
  {
    step: '06',
    title: 'Order Fulfilment',
    stage: 'Sales & Dispatch',
    description:
      'Products are allocated, picked, packed and prepared for dispatch.',
  },
  {
    step: '07',
    title: 'Dispatch & Delivery',
    stage: 'Sales & Dispatch',
    description:
      'Delivery challans, transporter details and dispatch records are maintained. Delivery confirmation is recorded.',
  },
  {
    step: '08',
    title: 'Invoice & Payment Tracking',
    stage: 'Finance & BI',
    description:
      'Customer invoices are generated and payment commitments are tracked, including partial and full payments.',
  },
  {
    step: '09',
    title: 'Business Intelligence',
    stage: 'Finance & BI',
    description:
      'Sales, procurement, inventory and financial data flow into the management dashboard for consolidated reporting and analysis.',
  },
];

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: 'business-assistant',
    number: '01',
    title: 'Intelligent Business Assistant',
    scopeType: 'Scope-Dependent AI',
    description:
      'Ask business-related questions in natural language and retrieve relevant insights from available business data.',
    exampleQuery: 'Which fertilizer products recorded the highest sales this month?',
  },
  {
    id: 'inventory-intelligence',
    number: '02',
    title: 'Inventory Intelligence',
    scopeType: 'Core / Configurable',
    description:
      'Identify low-stock products, slow-moving inventory and unusual stock movement patterns.',
    exampleQuery: 'Which products need replenishment based on current stock levels?',
  },
  {
    id: 'sales-intelligence',
    number: '03',
    title: 'Sales Intelligence',
    scopeType: 'Core / Configurable',
    description:
      'Understand product performance, customer purchasing patterns and dealer-wise sales trends.',
    exampleQuery: 'Show me the top 10 dealers by sales value this quarter.',
  },
  {
    id: 'financial-intelligence',
    number: '04',
    title: 'Financial Intelligence',
    scopeType: 'Core / Configurable',
    description:
      'Get summaries of receivables, payables, overdue invoices and upcoming payment commitments.',
    exampleQuery: 'Which customers have the highest outstanding balances?',
  },
  {
    id: 'alerts-recommendations',
    number: '05',
    title: 'Intelligent Alerts & Recommendations',
    scopeType: 'Configurable / Phased',
    description:
      'Receive context-based alerts for operational exceptions, payment delays, stock thresholds and pending business activities.',
  },
  {
    id: 'management-summaries',
    number: '06',
    title: 'Management Summaries',
    scopeType: 'Scope-Dependent AI',
    description:
      'Generate simplified business summaries and performance insights from available operational information.',
  },
];

export const USER_ROLES: UserRole[] = [
  {
    id: 'owner',
    role: 'Business Owner / Management',
    focus: 'Executive Oversight',
    capabilities: [
      'Consolidated business dashboard.',
      'Revenue and operational performance.',
      'Inventory and financial visibility.',
      'Business intelligence and AI insights.',
    ],
  },
  {
    id: 'procurement',
    role: 'Procurement Team',
    focus: 'Supplier & Purchasing',
    capabilities: [
      'Supplier database.',
      'Purchase requisitions and orders.',
      'Inward tracking.',
      'Supplier coordination.',
    ],
  },
  {
    id: 'warehouse',
    role: 'Warehouse & Inventory Team',
    focus: 'Stock & Storage',
    capabilities: [
      'Stock inward and outward.',
      'Batch and warehouse tracking.',
      'Stock reconciliation.',
      'Inventory alerts.',
    ],
  },
  {
    id: 'sales',
    role: 'Sales Team',
    focus: 'Orders & Buyers',
    capabilities: [
      'Customer management.',
      'Quotations and sales orders.',
      'Pricing and invoicing.',
      'Sales performance.',
    ],
  },
  {
    id: 'dealer',
    role: 'Dealer & Distribution Team',
    focus: 'Network & Dispatch',
    capabilities: [
      'Dealer management.',
      'Order allocation.',
      'Dispatch coordination.',
      'Delivery tracking.',
    ],
  },
  {
    id: 'finance',
    role: 'Finance Team',
    focus: 'Ledgers & Cash Flow',
    capabilities: [
      'Receivables and payables.',
      'Payment entries.',
      'Outstanding tracking.',
      'Financial reporting.',
    ],
  },
];

export const BUSINESS_BENEFITS: BusinessBenefit[] = [
  {
    id: 'centralised',
    title: 'Centralised Operations',
    description: 'Bring business information and workflows onto one platform.',
  },
  {
    id: 'inventory-control',
    title: 'Better Inventory Control',
    description: 'Improve stock visibility across products and warehouses.',
  },
  {
    id: 'structured-procurement',
    title: 'Structured Procurement',
    description: 'Digitise supplier interactions and purchase workflows.',
  },
  {
    id: 'connected-sales',
    title: 'Connected Sales Operations',
    description: 'Improve order processing and customer management.',
  },
  {
    id: 'dealer-visibility',
    title: 'Dealer Network Visibility',
    description: 'Monitor dealer activity and distribution performance.',
  },
  {
    id: 'financial-transparency',
    title: 'Financial Transparency',
    description: 'Track outstanding payments and business commitments.',
  },
  {
    id: 'data-driven',
    title: 'Data-Driven Decisions',
    description: 'Access consolidated dashboards and actionable insights.',
  },
  {
    id: 'reduced-manual-work',
    title: 'Reduced Manual Work',
    description: 'Minimise repetitive data entry and disconnected coordination.',
  },
  {
    id: 'scalable-architecture',
    title: 'Scalable Architecture',
    description: 'Extend the platform as business operations and requirements evolve.',
  },
];

export const IMPLEMENTATION_STAGES: ImplementationStage[] = [
  {
    step: '01',
    title: 'Business Discovery',
    description:
      'Understand your business model, existing workflows, team structure and operational challenges.',
  },
  {
    step: '02',
    title: 'Process Mapping',
    description:
      'Map the movement of products, information, transactions and responsibilities across your organisation.',
  },
  {
    step: '03',
    title: 'Solution Architecture',
    description:
      'Define modules, user roles, data structures, workflows and system integrations.',
  },
  {
    step: '04',
    title: 'Platform Development',
    description:
      'Develop and configure the operating system around your business requirements.',
  },
  {
    step: '05',
    title: 'Testing & Deployment',
    description:
      'Validate workflows, onboard users and deploy the platform.',
  },
  {
    step: '06',
    title: 'Continuous Improvement',
    description:
      'Enhance the system as your business grows and operational requirements evolve.',
  },
];

export const MRIDA_FAQS: MridaFaq[] = [
  {
    question: 'Is Mrida OS specifically designed for fertilizer businesses?',
    answer:
      'Mrida OS is designed as a broader operating system for agribusiness and food-allied enterprises. Its modular architecture allows us to configure specialised workflows for fertilizer manufacturers, wholesalers and distributors.',
  },
  {
    question: 'Can the platform manage multiple warehouses?',
    answer:
      'Yes. Warehouse-wise inventory management, stock movement and transfer workflows can be configured according to business requirements.',
  },
  {
    question: 'Can we manage our dealer and distributor network?',
    answer:
      'Yes. The platform can maintain dealer records, territory information, orders, commercial terms, outstanding balances and distribution activities.',
  },
  {
    question: 'Can different employees have different access permissions?',
    answer:
      'Yes. Role-based access can be configured to ensure employees access the information and functions relevant to their responsibilities.',
  },
  {
    question: 'Can Mrida OS integrate with our existing accounting software?',
    answer:
      'Integration possibilities can be evaluated based on your existing software, available APIs and business requirements.',
  },
  {
    question: 'Is the system customisable?',
    answer:
      'Yes. Modules, workflows, dashboards and user permissions can be configured according to the organisation’s operational requirements.',
  },
  {
    question: 'Does Mrida OS offer AI-powered features?',
    answer:
      'Mrida OS is designed with AI-enabled business intelligence capabilities, including natural-language business queries, operational summaries, intelligent alerts and decision-support insights, subject to the selected implementation scope.',
  },
  {
    question: 'Can we start with a few modules and expand later?',
    answer:
      'Yes. The modular implementation approach allows businesses to prioritise essential workflows and introduce additional functionality as requirements evolve.',
  },
];
