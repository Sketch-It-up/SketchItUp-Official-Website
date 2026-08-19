export interface ModuleItem {
  id: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  group: 'Operations' | 'Finance' | 'People' | 'Intelligence';
  iconName: string;
  capabilities: string[];
  businessProblem: string;
  workflowSteps: { step: string; label: string; desc: string }[];
  commandCenterKPIs: string[];
  aiOpportunities: { available: string[]; roadmap: string[] };
  technicalOverview: {
    dataFlow: string;
    integrations: string[];
    permissions: string;
    outputs: string[];
  };
  relatedModuleIds: string[];
}

export const MODULES_DATA: ModuleItem[] = [
  {
    id: "command-center",
    name: "Command Center",
    tagline: "The Owner's View of the Business.",
    shortDesc: "One executive dashboard to instantly answer: What is happening? What is delayed? Where is money stuck? How is my business performing?",
    fullDesc: "An executive single-pane-of-glass where every critical metric — from factory floor yield to cash flow, dispatch queues, and overdue approvals — converges into one live interface.",
    group: "Intelligence",
    iconName: "LayoutDashboard",
    capabilities: [
      "Real-time Revenue, Orders & Cash Flow KPI tracking",
      "Live Production, Machine OEE & Shop Floor status",
      "Proactive Owner Alerts, Bottleneck warnings & Approvals",
      "Multi-plant & Multi-entity consolidated visibility",
      "One-click drill down into root causes and delays"
    ],
    businessProblem: "Owners waste hours chasing department heads on WhatsApp or trying to reconcile conflicting Excel reports.",
    workflowSteps: [
      { step: "01", label: "Data Ingestion", desc: "Data streams continuously from floor, sales, stores, and accounts." },
      { step: "02", label: "Normalization", desc: "Transactions are cross-referenced across inventory, production & financials." },
      { step: "03", label: "Executive Synthesis", desc: "High-level health score and urgent anomalies highlight automatically." },
      { step: "04", label: "Action Trigger", desc: "Owner triggers approvals or corrective tasks directly from dashboard." }
    ],
    commandCenterKPIs: ["Net Cash Position", "Overall Plant Efficiency (OEE)", "On-Time Dispatch Rate", "Pending Owner Approvals"],
    aiOpportunities: {
      available: ["Daily executive morning summary", "Anomalous cost and yield detection"],
      roadmap: ["Automated bottleneck prediction", "Scenario planning engine"]
    },
    technicalOverview: {
      dataFlow: "Pub/Sub websocket stream from module databases to executive client UI",
      integrations: ["ERP Database", "Accounting APIs", "Floor Scanners & IoT"],
      permissions: "Strict Owner & C-Suite Role-Based Access Control",
      outputs: ["Executive Dashboard", "WhatsApp Morning Digest", "Board PDF Briefings"]
    },
    relatedModuleIds: ["order-management", "production", "accounting"]
  },
  {
    id: "order-management",
    name: "Order Management",
    tagline: "From enquiry to order completion.",
    shortDesc: "Manage customers, quotations, sales orders, order status, fulfilment, and complete order history in one seamless flow.",
    fullDesc: "Eliminate lost sales orders, delayed fulfillments, and broken customer communication with end-to-end sales order tracking from inquiry to dispatch.",
    group: "Operations",
    iconName: "ShoppingCart",
    capabilities: [
      "Multi-channel order intake (WhatsApp, Email, Web, Direct Entry)",
      "Automated stock availability check & raw material reservation",
      "Real-time order stage tracking (Quoted, In Production, Dispatched)",
      "Customer SLA & penalty risk warnings",
      "Automated invoice & delivery note creation"
    ],
    businessProblem: "Customer orders get lost in WhatsApp chats and sales reps give inaccurate delivery dates without checking stock.",
    workflowSteps: [
      { step: "01", label: "Order Received", desc: "Captured via CRM, email, or direct entry." },
      { step: "02", label: "Stock Check", desc: "Auto-checks inventory and reserves required raw material." },
      { step: "03", label: "Job Card Issued", desc: "Pushed straight into Production Management." },
      { step: "04", label: "Fulfillment & Invoice", desc: "Dispatched with instant customer notification." }
    ],
    commandCenterKPIs: ["Total Active Orders", "Order-to-Delivery Cycle Time", "Delayed Orders Count"],
    aiOpportunities: {
      available: ["Auto-extract order specs from PDF/Emails", "SLA delay warning"],
      roadmap: ["Automated dynamic pricing suggestions", "Customer reorder probability scoring"]
    },
    technicalOverview: {
      dataFlow: "Sales Order -> Stock Reservation -> Job Card Creation",
      integrations: ["CRM", "WhatsApp Business API", "Tally/Zoho Books"],
      permissions: "Sales Manager, Operations Lead, Owner",
      outputs: ["Proforma Invoice", "Sales Order Confirmation", "Delivery SLA Tracker"]
    },
    relatedModuleIds: ["production", "inventory", "quality-dispatch"]
  },
  {
    id: "inventory",
    name: "Inventory Management",
    tagline: "Know what you have, where it is and what you need.",
    shortDesc: "Manage items, stock movements, warehouses, materials, consumption, shortages, and total inventory visibility.",
    fullDesc: "Gain complete control over raw material consumption, batch/lot tracking, minimum safety thresholds, and multi-warehouse movements.",
    group: "Operations",
    iconName: "Boxes",
    capabilities: [
      "Multi-warehouse & location bin management",
      "Batch, serial number & FIFO/LIFO tracking",
      "Automatic re-order point calculations & supplier alerts",
      "Stock reconciliation & discrepancy audits",
      "Deadstock & slow-moving item identification"
    ],
    businessProblem: "Production stops due to missing small components, while capital remains tied up in excess dead stock.",
    workflowSteps: [
      { step: "01", label: "Goods Receipt", desc: "Verified against Procurement PO & Quality check." },
      { step: "02", label: "Bin Allocation", desc: "Assigned to exact shelf/zone in warehouse." },
      { step: "03", label: "Production Requisition", desc: "Deducted against active Job Card." },
      { step: "04", label: "Stock Audit", desc: "Cycle counts updated via tablet or handheld." }
    ],
    commandCenterKPIs: ["Inventory Turnover Ratio", "Total Stock Value ($)", "Low Stock Critical Alerts"],
    aiOpportunities: {
      available: ["Low stock prediction based on sales velocity", "Deadstock valuation alerts"],
      roadmap: ["Autonomous AI Reordering", "Computer Vision bin scanning"]
    },
    technicalOverview: {
      dataFlow: "PO Received -> GRN -> Stock In -> Job Card Issuance -> Stock Out",
      integrations: ["Barcode/QR Scanners", "Procurement Engine", "Accounting Ledger"],
      permissions: "Store Keeper, Plant Manager, Owner",
      outputs: ["Stock Valuations", "Batch Traceability Log", "Reorder Triggers"]
    },
    relatedModuleIds: ["procurement", "production", "quality-dispatch"]
  },
  {
    id: "production",
    name: "Production Management",
    tagline: "Turn orders into organized production workflows.",
    shortDesc: "Plan production, create job cards and route cards, assign machines, and track floor progress in real-time.",
    fullDesc: "Digitize your factory floor. Convert customer orders into active shop floor job cards, assign machine time, track operator outputs, and reduce scrap.",
    group: "Operations",
    iconName: "Factory",
    capabilities: [
      "Digital Job Cards, Route Cards & Bill of Materials (BOM)",
      "Shop floor operator tablet production logs",
      "Stage-by-stage WIP movement tracking",
      "Scrap & scrap-reclaim yield analysis",
      "Machine capacity planning & shift allocation"
    ],
    businessProblem: "Plant managers rely on end-of-day handwritten logbooks, hiding bottlenecks until orders are already late.",
    workflowSteps: [
      { step: "01", label: "BOM Explosion", desc: "Splits sales order into required sub-assemblies and raw materials." },
      { step: "02", label: "Job Dispatch", desc: "Assigns work order to specific machine and workstation." },
      { step: "03", label: "Real-time Log", desc: "Operator updates count & defects at station tablet." },
      { step: "04", label: "Completion", desc: "Finished units pushed directly to QC and Inventory." }
    ],
    commandCenterKPIs: ["Daily Factory Yield %", "WIP Inventory Value", "Line Efficiency Rate"],
    aiOpportunities: {
      available: ["Line bottleneck detection", "Shift output discrepancy alert"],
      roadmap: ["AI-driven dynamic shop floor scheduling", "Defect root-cause correlation"]
    },
    technicalOverview: {
      dataFlow: "Sales Order -> BOM -> Work Order -> Station Logs -> Finished Goods",
      integrations: ["IoT PLC Gateways", "Handheld Barcode Devices", "Quality System"],
      permissions: "Plant Supervisor, Machine Operators, Owner",
      outputs: ["Digital Job Cards", "OEE Reports", "Material Variance Log"]
    },
    relatedModuleIds: ["inventory", "machine-maintenance", "quality-dispatch"]
  },
  {
    id: "quality-dispatch",
    name: "Quality & Dispatch",
    tagline: "Make sure the right product leaves the business.",
    shortDesc: "Manage inspection checklists, quality gates, dispatch readiness, digital gate passes, and delivery tracking.",
    fullDesc: "Ensure zero-defect dispatches. Enforce mandatory quality checkpoints for incoming raw materials, shop floor WIP, and finished goods before shipping with digital gate passes.",
    group: "Operations",
    iconName: "ShieldCheck",
    capabilities: [
      "Configurable inspection checklists by product SKU",
      "Inward GRN quality clearance gate and NCR/CAPA logging",
      "Pre-dispatch quality audit and Certificate of Analysis (CoA)",
      "Digital Gate Pass, E-Way Bill & loading slip verification",
      "Proof of Delivery (POD) confirmation and freight cost analytics"
    ],
    businessProblem: "Defective finished goods reach clients, damaging reputation and incurring costly return penalties and shipping errors.",
    workflowSteps: [
      { step: "01", label: "Sampling Request", desc: "Triggered on raw material arrival or job completion." },
      { step: "02", label: "Parameter Check", desc: "Inspector records measurements against tolerances." },
      { step: "03", label: "Pass & Packaging", desc: "Passed units cleared; packaged with digital packing slip." },
      { step: "04", label: "Gate Pass & Dispatch", desc: "Vehicle weight checked, gate pass issued, and POD tracked." }
    ],
    commandCenterKPIs: ["First-Pass Yield %", "Customer Rejection Rate", "On-Time Dispatch Rate"],
    aiOpportunities: {
      available: ["Supplier quality decline trend alert", "Common defect cluster identification"],
      roadmap: ["AI visual inspection with camera sensors", "Optimal vehicle load packing math"]
    },
    technicalOverview: {
      dataFlow: "Inspection Order -> Parameter Log -> Gate Pass -> Weighbridge -> POD Upload",
      integrations: ["Govt E-Way Bill API", "Weighbridge Ports", "WhatsApp Driver Bot"],
      permissions: "QC Inspector, Dispatch Supervisor, Logistics Lead, Owner",
      outputs: ["Quality Inspection Report", "CoA Documents", "Digital Gate Pass"]
    },
    relatedModuleIds: ["production", "order-management", "accounting"]
  },
  {
    id: "procurement",
    name: "Procurement & Vendor Management",
    tagline: "Build control over your supplier ecosystem.",
    shortDesc: "Manage vendors, purchase orders, payment terms, credit limits, procurement requirements, and vendor history.",
    fullDesc: "Streamline raw material buying, compare supplier quotations, manage lead times, and enforce strict purchase approval controls with 3-way matching.",
    group: "Operations",
    iconName: "Truck",
    capabilities: [
      "Automated Purchase Requisitions from Inventory low-stock",
      "Vendor quotation comparison matrix (RFQ)",
      "Purchase Order creation with multi-tier approval rules",
      "Goods Receipt Note (GRN) & 3-way match (PO + GRN + Invoice)",
      "Vendor delivery SLA & quality rating scorecards"
    ],
    businessProblem: "Overpaying suppliers due to unverified invoices, lack of quote comparisons, and missing purchase approval controls.",
    workflowSteps: [
      { step: "01", label: "Requisition", desc: "Triggered automatically when inventory hits buffer." },
      { step: "02", label: "Vendor RFQ", desc: "Sent to approved vendors for competitive quotes." },
      { step: "03", label: "PO Approval", desc: "Auto-routed to owner if amount exceeds threshold." },
      { step: "04", label: "3-Way Match", desc: "System checks GRN, PO, and Supplier Bill before payment." }
    ],
    commandCenterKPIs: ["Total Pending PO Value", "Supplier On-Time Rate", "Purchase Price Variance"],
    aiOpportunities: {
      available: ["Vendor price trend tracking", "Lead-time variation warning"],
      roadmap: ["Automated supplier quotation negotiation", "Predictive commodity price index"]
    },
    technicalOverview: {
      dataFlow: "Requisition -> Vendor RFQ -> PO -> GRN -> AP Voucher",
      integrations: ["Accounting Engine", "Vendor Portal", "WhatsApp PO Alerts"],
      permissions: "Purchase Executive, Finance Manager, Owner",
      outputs: ["Purchase Orders", "Vendor Scorecards", "Price Fluctuation Analytics"]
    },
    relatedModuleIds: ["inventory", "accounting", "quality-dispatch"]
  },
  {
    id: "crm",
    name: "Customer Management",
    tagline: "Create a complete view of every customer.",
    shortDesc: "Manage customer master data, order history, transactions, communication records, and business relationships.",
    fullDesc: "Convert inquiries into paying accounts. Manage your sales pipeline, track client communications, send digital quotes, and transition closed deals into live orders.",
    group: "Finance",
    iconName: "UserCheck",
    capabilities: [
      "Visual sales pipeline board (Leads, Contacted, Quoted, Won)",
      "Instant quotation generator with template library",
      "Complete customer interaction timeline (Orders, Invoices, Notes)",
      "Sales rep target vs achievement tracking",
      "Automated conversion from Won Quote to Sales Order"
    ],
    businessProblem: "Sales leads drop cold because sales reps store client contacts in personal phones and forget to follow up.",
    workflowSteps: [
      { step: "01", label: "Inquiry Capture", desc: "Inbound leads logged from web, WhatsApp, or trade show." },
      { step: "02", label: "Quotation Sent", desc: "Generated in 2 minutes with current margin guidelines." },
      { step: "03", label: "Follow-up Track", desc: "Automated reminders ensure timely client check-ins." },
      { step: "04", label: "Deal Won", desc: "Automatically converted into active Sales Order in 1 click." }
    ],
    commandCenterKPIs: ["Active Pipeline Value ($)", "Win-Loss Conversion Rate", "Average Deal Size"],
    aiOpportunities: {
      available: ["Lead qualification score", "Quote follow-up draft suggestion"],
      roadmap: ["Customer churn prediction", "Cross-sell opportunity engine"]
    },
    technicalOverview: {
      dataFlow: "Lead -> Activity History -> Quote -> Won Deal -> Sales Order Module",
      integrations: ["Website Lead Forms", "WhatsApp Web", "Email Sync"],
      permissions: "Sales Reps, Sales Manager, Owner",
      outputs: ["Quotation PDF", "Pipeline Velocity Report", "Rep Performance Matrix"]
    },
    relatedModuleIds: ["order-management", "accounting", "analytics"]
  },
  {
    id: "accounting",
    name: "Finance & Accounting",
    tagline: "Connect operational activity with financial visibility.",
    shortDesc: "Track transactions, receivables, payables, expenses, and financial information while integrating with accounting workflows.",
    fullDesc: "Eliminate manual journal entries. Every invoice, dispatch, GRN, and payroll run automatically updates your general ledger, AR/AP, and cash balance.",
    group: "Finance",
    iconName: "CreditCard",
    capabilities: [
      "Automated AR/AP tracking & overdue alerts",
      "Real-time P&L, Balance Sheet, and Trial Balance",
      "Cash flow forecasting with upcoming commitments",
      "GST / Sales tax compliance & invoice sync",
      "Bank reconciliation & expense categorization"
    ],
    businessProblem: "Financial reports take 3 weeks after month-end, forcing owners to make big investments blindly without knowing cash runway.",
    workflowSteps: [
      { step: "01", label: "Operational Event", desc: "Dispatch or GRN generates journal entry." },
      { step: "02", label: "Ledger Update", desc: "Accounts Payable or Receivable updated instantly." },
      { step: "03", label: "Reconciliation", desc: "Bank statement feeds matched with vouchers." },
      { step: "04", label: "Live Reporting", desc: "P&L reflects exact cost-of-goods-sold today." }
    ],
    commandCenterKPIs: ["Net Operating Cash Flow", "Accounts Receivable Overdue", "Gross Profit Margin %"],
    aiOpportunities: {
      available: ["Cash flow 30-day run-rate projection", "Unusual expense flags"],
      roadmap: ["Automated customer credit line adjustment", "Tax optimization recommendations"]
    },
    technicalOverview: {
      dataFlow: "Invoice/Voucher -> Double-Entry Ledger -> Financial Statements",
      integrations: ["Tally, QuickBooks, Zoho Books", "Bank API Feeds", "Tax Portals"],
      permissions: "Finance Lead, Accountant, Owner",
      outputs: ["Real-time P&L", "A/R Aging Schedule", "Cash Position Forecast"]
    },
    relatedModuleIds: ["order-management", "procurement", "hr-payroll"]
  },
  {
    id: "hr-payroll",
    name: "HR & People Management",
    tagline: "Manage the people behind your operations.",
    shortDesc: "Manage employee records, roles, biometric attendance, payroll workflows, responsibilities, and team visibility.",
    fullDesc: "Simplify workforce management for factory labor and office staff alike. Track biometric attendance, shift rotations, leave approvals, and compliant payroll.",
    group: "People",
    iconName: "Users",
    capabilities: [
      "Biometric & RFID attendance device sync",
      "Multi-shift rotation & overtime calculation",
      "Automated monthly payroll generation & payslip distribution",
      "PF/ESI/Tax compliance reporting",
      "Employee document vault & performance logs"
    ],
    businessProblem: "HR spends days manually calculating shift overtime and errors cause worker dissatisfaction on payday.",
    workflowSteps: [
      { step: "01", label: "Shift Logs", desc: "Biometric punches synced every hour." },
      { step: "02", label: "Exception Review", desc: "Supervisor approves leaves & OT hours." },
      { step: "03", label: "Payroll Run", desc: "Gross-to-net calculated automatically in 1-click." },
      { step: "04", label: "Payslips & Payout", desc: "Bank file generated & payslips sent to WhatsApp/Email." }
    ],
    commandCenterKPIs: ["Daily Attendance %", "Monthly Payroll Cost", "Overtime Hours Total"],
    aiOpportunities: {
      available: ["Absenteeism pattern detection", "Shift staffing imbalance warning"],
      roadmap: ["Labor productivity prediction", "Attrition risk scoring"]
    },
    technicalOverview: {
      dataFlow: "Biometric Hardware -> Attendance Log -> Payroll Calculator -> Bank Batch File",
      integrations: ["ZKTeco, Essl Biometric Devices", "WhatsApp Notifications", "Bank Payout APIs"],
      permissions: "HR Manager, Payroll Officer, Owner",
      outputs: ["Monthly Payslips", "Statutory Compliance Files", "Labor Cost per Unit"]
    },
    relatedModuleIds: ["production", "accounting", "task-management"]
  },
  {
    id: "machine-maintenance",
    name: "Machines & Maintenance",
    tagline: "Know the health and utilization of your production assets.",
    shortDesc: "Manage machine master data, allocation, utilization, preventive maintenance records, and operational performance.",
    fullDesc: "Protect your critical capital equipment. Schedule routine servicing, log emergency breakdowns instantly from station tablets, and track spare part inventory.",
    group: "Operations",
    iconName: "Wrench",
    capabilities: [
      "Total Productive Maintenance (TPM) calendars",
      "Instant breakdown ticketing via shop floor tablet",
      "Machine run-hours tracking & service triggers",
      "Maintenance spare parts consumption logs",
      "Mean Time To Repair (MTTR) & Mean Time Between Failures (MTBF)"
    ],
    businessProblem: "Unplanned machine breakdowns halt production for days because maintenance was deferred or spare parts were missing.",
    workflowSteps: [
      { step: "01", label: "Breakdown Ticket", desc: "Operator taps red button on floor tablet." },
      { step: "02", label: "Technician Alert", desc: "Maintenance team receives instant push/SMS." },
      { step: "03", label: "Spares Consumed", desc: "Parts deducted from maintenance store." },
      { step: "04", label: "Resolution & Root Cause", desc: "Log closed with preventive action step." }
    ],
    commandCenterKPIs: ["Overall Equipment Effectiveness (OEE)", "Unplanned Downtime Hours", "MTTR / MTBF"],
    aiOpportunities: {
      available: ["Breakdown frequency anomaly alert", "Maintenance overdue warning"],
      roadmap: ["Predictive failure detection via IoT vibration sensors", "Spare part lifespan prediction"]
    },
    technicalOverview: {
      dataFlow: "Sensor/Log -> Maintenance Ticket -> Spares Deduction -> Downtime Ledger",
      integrations: ["IoT Hour Meters", "Maintenance Store Inventory", "SMS Alerts"],
      permissions: "Maintenance Engineer, Plant Head, Owner",
      outputs: ["Machine Health History", "Maintenance Schedule", "Downtime Cost Analysis"]
    },
    relatedModuleIds: ["production", "inventory"]
  },
  {
    id: "task-management",
    name: "Task Management & SOPs",
    tagline: "Cross-departmental execution and accountability.",
    shortDesc: "Standard operating procedures, automated escalations, and accountability scorecards.",
    fullDesc: "Ensure follow-through across every department. Create clear task assignments tied to operational events, set SLA deadlines, and trigger owner notifications if missed.",
    group: "People",
    iconName: "CheckSquare",
    capabilities: [
      "Recurring operational task checklists (Daily, Weekly, Monthly)",
      "Auto-triggered tasks from operational events (e.g. NCR raised -> task created)",
      "Owner escalation rules for overdue critical tasks",
      "Standard Operating Procedure (SOP) attachment & sign-offs",
      "Departmental task completion scorecards"
    ],
    businessProblem: "Important tasks assigned verbally in meetings are forgotten, causing recurring operational slippages.",
    workflowSteps: [
      { step: "01", label: "Task Assignment", desc: "Created manually or auto-generated by workflow." },
      { step: "02", label: "Execution", desc: "Assignee updates progress & attaches proof photo/doc." },
      { step: "03", label: "Review", desc: "Supervisor or owner approves completion." },
      { step: "04", label: "Escalation", desc: "If SLA is breached, escalates to higher manager." }
    ],
    commandCenterKPIs: ["Pending Task Backlog", "On-Time Task Completion %", "Escalated Overdue Tasks"],
    aiOpportunities: {
      available: ["Task bottleneck summary", "Automated recurring task scheduler"],
      roadmap: ["AI task priority ranking based on business impact", "Voice-to-task creation"]
    },
    technicalOverview: {
      dataFlow: "System Event / Manual Entry -> Task SLA Clock -> Escalation Trigger -> Log",
      integrations: ["WhatsApp Alerts", "Push Notifications", "Calendar Sync"],
      permissions: "All Employees, Supervisors, Owner",
      outputs: ["Department SOP Logs", "Employee Execution Scores", "Audit Trail"]
    },
    relatedModuleIds: ["command-center", "hr-payroll"]
  },
  {
    id: "analytics",
    name: "Reporting & Analytics",
    tagline: "Automated business reports and executive visibility.",
    shortDesc: "Custom pivot tables, margin trends, cost-per-unit deep dives, and executive exports without touching Excel.",
    fullDesc: "Turn historical data into strategic foresight. Generate automated daily, weekly, and monthly reports without touching Excel spreadsheets.",
    group: "Intelligence",
    iconName: "BarChart3",
    capabilities: [
      "Customizable executive dashboard widgets",
      "Multi-dimensional drill-down filters (by SKU, client, plant, rep)",
      "Scheduled PDF/Excel report delivery to WhatsApp or Email",
      "Product margin & cost-per-unit deep dives",
      "Comparative period-over-period trend analysis"
    ],
    businessProblem: "Management spends weekends manually copying data between systems into Excel spreadsheets to build monthly review decks.",
    workflowSteps: [
      { step: "01", label: "Query Engine", desc: "Aggregates transactions across all connected modules." },
      { step: "02", label: "Computation", desc: "Calculates margins, growth rates, and variances." },
      { step: "03", label: "Visualization", desc: "Renders clean charts, heatmaps, and tables." },
      { step: "04", label: "Auto Distribution", desc: "Dispatches PDF summaries to owner on schedule." }
    ],
    commandCenterKPIs: ["Gross Operating Margin", "Total Revenue Growth %", "Cost Variance Index"],
    aiOpportunities: {
      available: ["Natural language report query generator", "Anomaly highlight summaries"],
      roadmap: ["Automated narrative business insights", "Predictive strategy simulator"]
    },
    technicalOverview: {
      dataFlow: "Read-replica Data Warehouse -> Analytical Aggregation -> Chart Components",
      integrations: ["PowerBI / Tableau Export", "Scheduled Email Engine", "WhatsApp Bot"],
      permissions: "C-Suite, Business Analysts, Owner",
      outputs: ["Executive PDF Reports", "CSV/Excel Data Dump", "Interactive Charts"]
    },
    relatedModuleIds: ["command-center", "order-management", "accounting"]
  }
];

export const INDUSTRIES_DATA = [
  {
    id: "manufacturing",
    name: "Manufacturing & Assembly",
    status: "live",
    shortDesc: "Discrete & process manufacturing, shop floor job cards, raw material BOM, quality checks, and yield management.",
    iconName: "Factory",
    challenges: [
      "WIP inventory hidden in shop floor bottlenecks",
      "Unplanned machine breakdowns destroying production schedules",
      "Raw material shortages causing line downtime",
      "Manual end-of-shift logbooks leading to scrap discrepancies"
    ],
    workflows: [
      "Sales Order -> BOM Explosion -> Purchase Requisition -> Inventory Reservation -> Job Card Issue -> Shop Floor Execution -> QC Clearance -> Dispatch -> Invoice"
    ],
    recommendedModules: ["production", "inventory", "quality", "machine-maintenance", "procurement", "dispatch"]
  },
  {
    id: "industrial-smes",
    name: "Industrial Equipment & Tooling",
    status: "live",
    shortDesc: "Custom order manufacturing, precision machining, maintenance schedules, and job costing.",
    iconName: "Wrench",
    challenges: [
      "Inaccurate job costing eroding profit margins",
      "Managing complex revision levels for engineering drawings",
      "Tracking expensive custom tooling and spares"
    ],
    workflows: [
      "Engineering Quote -> Drawing Approval -> Material Purchase -> Precision Machining -> Inspection -> Delivery"
    ],
    recommendedModules: ["production", "crm", "procurement", "quality", "accounting"]
  },
  {
    id: "family-businesses",
    name: "Multi-Generational Family Enterprises",
    status: "live",
    shortDesc: "Transitioning from founder-dependent management to system-driven governance with complete owner oversight.",
    iconName: "Building2",
    challenges: [
      "Founder bottleneck: every minor approval requires the owner",
      "Information silos between legacy staff and modern tech",
      "Lack of clean consolidated financial dashboards"
    ],
    workflows: [
      "System Approvals -> Automated Task Delegation -> Daily Owner Morning Briefing -> Governance Dashboard"
    ],
    recommendedModules: ["command-center", "task-management", "accounting", "ai-copilot"]
  },
  {
    id: "agriculture",
    name: "Agri-Processing & Food Manufacturing",
    status: "coming-soon",
    shortDesc: "Batch traceability, expiry date management, cold-chain monitoring, and farmer procurement logs.",
    iconName: "Wheat",
    challenges: [
      "Perishable stock management & expiry losses",
      "Batch traceability for regulatory compliance",
      "Seasonal yield fluctuations"
    ],
    workflows: ["Gate Procurement -> QC Batch Test -> Processing -> Cold Storage -> Batch Dispatch"],
    recommendedModules: ["inventory", "quality", "procurement", "dispatch"]
  },
  {
    id: "retail",
    name: "Multi-Store Retail & FMCG Distribution",
    status: "coming-soon",
    shortDesc: "POS integration, multi-branch stock transfers, automated re-ordering, and vendor settlements.",
    iconName: "Store",
    challenges: [
      "Stockouts at high-volume outlets while inventory sits slow in warehouses",
      "Complex promotional pricing reconciliation"
    ],
    workflows: ["POS Sales Sync -> Inter-Store Transfer -> Automated Reorder -> Supplier Settlement"],
    recommendedModules: ["inventory", "order-management", "accounting", "procurement"]
  },
  {
    id: "healthcare",
    name: "Medical Devices & Healthcare Supply",
    status: "coming-soon",
    shortDesc: "Serial number tracking, sterile batch clearance, regulatory compliance audit trails.",
    iconName: "Activity",
    challenges: [
      "Strict regulatory compliance & instant batch recall readiness",
      "Instrument calibration monitoring"
    ],
    workflows: ["Raw Sterilisation -> Cleanroom Production -> QC Certification -> Hospital Dispatch"],
    recommendedModules: ["quality", "inventory", "production", "machine-maintenance"]
  },
  {
    id: "hospitality",
    name: "Hospitality & Multi-Unit Kitchens",
    status: "coming-soon",
    shortDesc: "Central kitchen recipe costing, daily ingredient consumption, and outlet distribution.",
    iconName: "Utensils",
    challenges: [
      "High food cost variance & ingredient wastage",
      "Inconsistent recipe portioning across locations"
    ],
    workflows: ["Central Kitchen Prep -> Recipe Deduction -> Branch Indent -> Dispatch"],
    recommendedModules: ["inventory", "procurement", "quality", "accounting"]
  },
  {
    id: "services",
    name: "Project Services & Consulting",
    status: "coming-soon",
    shortDesc: "Timesheet logging, milestone billing, resource allocation, and project profitability.",
    iconName: "Briefcase",
    challenges: [
      "Unbilled hours and scope creep eating project margins",
      "Lack of real-time project profitability metrics"
    ],
    workflows: ["Scope Agreement -> Milestone Billing -> Resource Logging -> Invoice"],
    recommendedModules: ["crm", "task-management", "accounting", "analytics"]
  },
  {
    id: "logistics",
    name: "Transport & Warehouse Logistics",
    status: "coming-soon",
    shortDesc: "Fleet maintenance, trip sheet calculations, fuel log auditing, and proof-of-delivery sync.",
    iconName: "Truck",
    challenges: [
      "Uncontrolled fuel expenditure & unverified driver vouchers",
      "Vehicle downtime due to delayed maintenance"
    ],
    workflows: ["Indent -> Vehicle Allotment -> Loading -> Trip Expense -> POD Audit"],
    recommendedModules: ["dispatch", "machine-maintenance", "accounting"]
  }
];

export const BEFORE_AFTER_DATA = [
  {
    category: "Operational Visibility",
    before: "Scattered data across 10 Excel sheets, WhatsApp chats, and paper logs.",
    after: "One live Command Center updating automatically across all departments."
  },
  {
    category: "Decision Speed",
    before: "Waiting 3 weeks for month-end reports before identifying loss-making products.",
    after: "Instant real-time profit margins, yield metrics, and daily AI insights."
  },
  {
    category: "Shop Floor Control",
    before: "Handwritten end-of-shift reports masking machine downtime and scrap rates.",
    after: "Digital job cards, station-level tablet logging, and TPM maintenance alerts."
  },
  {
    category: "Owner Dependency",
    before: "Owner must personally make every approval and call 5 people for a straight answer.",
    after: "System-driven workflow rules, automated escalations, and 1-click approvals."
  },
  {
    category: "Stock & Inventory",
    before: "Production halts due to missing parts, while cash is tied up in dead stock.",
    after: "Automated reorder triggers, batch FIFO tracking, and deadstock identification."
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Process Mapping", desc: "We map your actual floor workflows, paper forms, and department handoffs without forcing generic templates." },
  { step: "02", title: "Data Centralization", desc: "Connect existing spreadsheets, accounting databases (Tally/Zoho), or IoT devices into one unified data layer." },
  { step: "03", title: "Module Configuration", desc: "Configure Owner OS modules specifically to match your terminology, approval tiers, and plant structure." },
  { step: "04", title: "Guided Onboarding", desc: "Hands-on training for store managers, operators, and finance teams to ensure 100% daily adoption." },
  { step: "05", title: "Real-Time Command", desc: "The owner opens one single dashboard to see orders, cash flow, yield, and AI recommendations." }
];

export const CUSTOM_SOLUTIONS_STEPS = [
  { step: "01", title: "Discovery & Audit", desc: "In-depth review of your operational bottlenecks, unique workflows, and legacy software." },
  { step: "02", title: "Process Engineering", desc: "Design an optimized digital workflow blueprint tailored to your business rules." },
  { step: "03", title: "Architecture Design", desc: "Select data schemas, API gateways, security roles, and integration hooks." },
  { step: "04", title: "Bespoke UI/UX", desc: "Craft intuitive interfaces for machine operators, store managers, and executives." },
  { step: "05", title: "Agile Development", desc: "Iterative sprints with live demo builds every two weeks for immediate feedback." },
  { step: "06", title: "System Integration", desc: "Connect legacy databases, IoT gateways, weighbridges, and biometric hardware." },
  { step: "07", title: "Floor Deployment", desc: "On-site or remote rollout with staff training and change management guidance." },
  { step: "08", title: "Continuous Partnership", desc: "Ongoing feature expansion, performance tuning, and AI capability upgrades." }
];
