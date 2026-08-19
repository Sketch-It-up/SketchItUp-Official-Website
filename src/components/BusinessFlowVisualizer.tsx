import React, { useState } from 'react';
import { 
  ShoppingCart, 
  CheckSquare, 
  Boxes, 
  Truck, 
  FileText, 
  Factory, 
  ShieldCheck, 
  PackageCheck, 
  DollarSign, 
  BarChart3, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BusinessFlowVisualizerProps {
  onExploreModule?: (moduleId: string) => void;
}

export const BusinessFlowVisualizer: React.FC<BusinessFlowVisualizerProps> = ({ onExploreModule }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const flowSteps = [
    {
      id: "orders",
      step: "01",
      title: "Customer Order",
      tagline: "Inquiry to Confirmed SO",
      desc: "Quotes convert into orders with verified specs, customer credit limits, and delivery timeline commitments.",
      icon: ShoppingCart,
      accentColor: "#3B82F6",
      bgGradient: "from-blue-950 via-slate-900 to-[#101312]",
      output: "Approved Order #SO-1048",
      metric: "< 2 min Order Booking",
      details: ["Instant customer credit check", "Automated drawing & spec lock", "Customer confirmation sync"]
    },
    {
      id: "processing",
      step: "02",
      title: "Order Processing",
      tagline: "Automated Validation",
      desc: "System validates technical drawings, BOM revisions, pricing tiers, and delivery feasibility before triggering production.",
      icon: CheckSquare,
      accentColor: "#6366F1",
      bgGradient: "from-indigo-950 via-slate-900 to-[#101312]",
      output: "Order Verified & Locked",
      metric: "100% Drawing Validation",
      details: ["BOM revision guardrail", "Engineering feasibility signoff", "Target margin threshold check"]
    },
    {
      id: "inventory",
      step: "03",
      title: "Inventory Check",
      tagline: "Real-Time Allocation",
      desc: "Instantly queries raw materials, batch numbers, and components in stock. Automatically reserves required batches.",
      icon: Boxes,
      accentColor: "#10B981",
      bgGradient: "from-emerald-950 via-slate-900 to-[#101312]",
      output: "Stock Allocated (85% Ready)",
      metric: "Zero Stockout Risk",
      details: ["Batch FIFO reservation", "Multi-warehouse bin map", "Shortage auto-flagging"]
    },
    {
      id: "procurement",
      step: "04",
      title: "Procurement / PO",
      tagline: "Automated Shortage PO",
      desc: "Shortages trigger automated Purchase Requisitions to approved vendors with lead-time tracking and rate histories.",
      icon: Truck,
      accentColor: "#F59E0B",
      bgGradient: "from-amber-950 via-slate-900 to-[#101312]",
      output: "PO #SUP-882 Sent to Supplier",
      metric: "Auto-PR Triggered",
      details: ["Supplier lead time sync", "Contract rate comparison", "Automated PR approval"]
    },
    {
      id: "job-cards",
      step: "05",
      title: "Job Card & Routing",
      tagline: "Digital Route Cards",
      desc: "Generates digital job cards with exact machine routing, operator skill matching, and standard cycle time targets.",
      icon: FileText,
      accentColor: "#A855F7",
      bgGradient: "from-purple-950 via-slate-900 to-[#101312]",
      output: "Digital Job Card #JC-449",
      metric: "QR / Barcode Routing",
      details: ["Workstation sequence map", "Tooling & die assignment", "Target cycle time per piece"]
    },
    {
      id: "production",
      step: "06",
      title: "Shop Floor Production",
      tagline: "Live Stage Yield & WIP",
      desc: "Operators log progress at each workstation. Real-time visibility into machine yield, cycle time, and WIP buffers.",
      icon: Factory,
      accentColor: "#876DFF",
      bgGradient: "from-[#1c1236] via-slate-900 to-[#101312]",
      output: "3 Stages Complete • 94% Yield",
      metric: "Live OEE & WIP Tracking",
      details: ["Touchscreen shop floor logs", "Downtime auto-capture", "Live bottleneck alert"]
    },
    {
      id: "quality",
      step: "07",
      title: "Quality Check",
      tagline: "Defect Prevention & QA",
      desc: "Pre-dispatch QA inspection against tolerance specs. Prevents defective batches from leaving the factory floor.",
      icon: ShieldCheck,
      accentColor: "#14B8A6",
      bgGradient: "from-teal-950 via-slate-900 to-[#101312]",
      output: "QC Passed • Cert Issued",
      metric: "0% Non-Conformance Escape",
      details: ["Tolerance specification checks", "Rejection root cause log", "Batch test certificate"]
    },
    {
      id: "dispatch",
      step: "08",
      title: "Dispatch & Logistics",
      tagline: "Packing Slip & Delivery",
      desc: "Generates barcode packing slips, e-way bills, transport challans, and customer delivery tracking links.",
      icon: PackageCheck,
      accentColor: "#0EA5E9",
      bgGradient: "from-sky-950 via-slate-900 to-[#101312]",
      output: "Shipment #SHP-902 Dispatched",
      metric: "100% On-Time Dispatch",
      details: ["Automated packing list", "E-way bill generation", "Customer dispatch SMS/Email"]
    },
    {
      id: "accounting",
      step: "09",
      title: "Invoicing & Finance",
      tagline: "Instant Reconciliation",
      desc: "Dispatch automatically generates tax invoice and syncs accounts receivable without duplicate data entry.",
      icon: DollarSign,
      accentColor: "#10B981",
      bgGradient: "from-emerald-950 via-slate-900 to-[#101312]",
      output: "Invoice #INV-2900 Generated",
      metric: "Auto-Posted to Ledger",
      details: ["GST & tax compliance", "Payment milestone tracker", "Automated receivables aging"]
    },
    {
      id: "analytics",
      step: "10",
      title: "Owner Intelligence",
      tagline: "True Job Margin & P&L",
      desc: "Reconciles actual material cost, floor labor, scrap rate, machine overhead, and realized gross margin on the order.",
      icon: BarChart3,
      accentColor: "#BAF91A",
      bgGradient: "from-[#17220b] via-slate-900 to-[#101312]",
      output: "Net Margin: 28.4% Recorded",
      metric: "Real-Time Job Profitability",
      details: ["Actual vs estimated cost", "Scrap & financial leak alert", "Executive P&L instant update"]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Section Title & Positioning */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="text-xs font-extrabold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-4 py-1.5 rounded-full inline-block border border-[#876DFF]/20">
          What is OwnerOS?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
          One Operating System. Every Critical Business Process.
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          OwnerOS connects the core operational flow of your business into one continuous, unified platform — with the <span className="font-semibold text-slate-900">Owner Command Center</span> giving you complete real-time control at every step.
        </p>
      </motion.div>

      {/* The Central Owner Command Center Umbrella Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-6 rounded-3xl bg-gradient-to-r from-[#101312] via-[#1a1333] to-[#101312] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#BAF91A]/20 border border-[#BAF91A]/40 flex items-center justify-center text-[#BAF91A] shrink-0 shadow-inner">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BAF91A]">Live Oversight Engine</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-slate-300 font-mono">Top-Level Layer</span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-0.5">
              The Owner Command Center Sits on Top of the Entire Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Live floor yield, order milestones, cash flow, and bottleneck alerts updated automatically at every stage.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#BAF91A] font-semibold flex items-center gap-1.5 bg-[#BAF91A]/10 px-3 py-1.5 rounded-full border border-[#BAF91A]/20">
            <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-ping"></span>
            Zero Manual Chasing
          </span>
        </div>
      </motion.div>

      {/* Interactive Process Flow Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#876DFF]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
              Interactive Operational Flow (Hover or Tap Any Card)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">
              Step <strong className="text-slate-900 font-bold">{flowSteps[activeStep].step}</strong> of {flowSteps.length}
            </span>
            <span className="text-[11px] font-semibold text-[#876DFF] bg-[#876DFF]/10 px-2.5 py-0.5 rounded-full">
              {flowSteps[activeStep].title}
            </span>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP: SKILLFUL HOVER EXPAND ACCORDION (md and up)
           ========================================================================= */}
        <div className="hidden md:block w-full overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="flex items-stretch justify-start min-w-[760px] lg:min-w-full gap-2 h-[400px] select-none">
            {flowSteps.map((stepItem, index) => {
              const isExpanded = activeStep === index;
              const StepIcon = stepItem.icon;

              return (
                <motion.div
                  key={stepItem.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    flex: isExpanded ? 5 : 1
                  }}
                  transition={{ 
                    duration: 0.35, 
                    ease: [0.25, 1, 0.5, 1] 
                  }}
                  onClick={() => setActiveStep(index)}
                  onHoverStart={() => setActiveStep(index)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-gradient-to-br ' + stepItem.bgGradient + ' text-white border-white/20 shadow-2xl ring-2 ring-slate-900/10' 
                      : 'bg-white hover:bg-slate-50/90 text-slate-800 border-slate-200/90 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {/* Subtle Background Glow for active state */}
                  {isExpanded && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.15 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                      style={{ backgroundColor: stepItem.accentColor }}
                    />
                  )}

                  {/* Top Bar inside card */}
                  <div className="p-4 flex items-center justify-between relative z-10">
                    <span 
                      className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full ${
                        isExpanded 
                          ? 'bg-white/10 text-white border border-white/15' 
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {stepItem.step}
                    </span>

                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform"
                      style={{ 
                        backgroundColor: isExpanded ? `${stepItem.accentColor}25` : '#f1f5f9',
                        color: isExpanded ? stepItem.accentColor : '#64748b'
                      }}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Collapsed State: Vertical Text Preview */}
                  {!isExpanded && (
                    <div className="absolute inset-0 flex flex-col justify-end p-4 pb-6 z-0">
                      <div className="rotate-180 [writing-mode:vertical-lr] text-xs font-bold text-slate-600 tracking-wider uppercase truncate max-h-[220px]">
                        {stepItem.title}
                      </div>
                      <div 
                        className="w-1.5 h-1.5 rounded-full mx-auto mt-3"
                        style={{ backgroundColor: stepItem.accentColor }}
                      />
                    </div>
                  )}

                  {/* Expanded State: Rich Interactive Operational Details */}
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 }}
                        className="p-5 pt-0 flex flex-col justify-between h-[calc(100%-60px)] relative z-10 overflow-hidden"
                      >
                        {/* Title & Tagline */}
                        <div className="space-y-2">
                          <span 
                            className="text-[11px] font-extrabold uppercase tracking-wider block"
                            style={{ color: stepItem.accentColor }}
                          >
                            {stepItem.tagline}
                          </span>
                          <h4 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-tight">
                            {stepItem.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                            {stepItem.desc}
                          </p>
                        </div>

                        {/* Bullet Capabilities */}
                        <div className="space-y-1.5 py-2">
                          {stepItem.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200">
                              <CheckCircle2 
                                className="w-3.5 h-3.5 shrink-0" 
                                style={{ color: stepItem.accentColor }} 
                              />
                              <span className="truncate">{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Output Banner */}
                        <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-black/25 -mx-5 -mb-5 p-4 rounded-b-3xl">
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                              Automatic Output
                            </span>
                            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5 truncate">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                              {stepItem.output}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <span 
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full font-mono shrink-0"
                              style={{ 
                                backgroundColor: `${stepItem.accentColor}20`,
                                color: stepItem.accentColor,
                                border: `1px solid ${stepItem.accentColor}40`
                              }}
                            >
                              {stepItem.metric}
                            </span>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE: DEDICATED TOUCH-FRIENDLY STEP CAROUSEL (< md)
           ========================================================================= */}
        <div className="md:hidden space-y-4">
          {/* Step Pill Scroll Header */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none px-1">
            {flowSteps.map((s, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white font-bold shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-70">{s.step}</span>
                  <span>{s.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Mobile Step Card */}
          {(() => {
            const stepItem = flowSteps[activeStep];
            const StepIcon = stepItem.icon;
            return (
              <motion.div
                key={stepItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-6 bg-gradient-to-br ${stepItem.bgGradient} text-white border border-white/10 shadow-xl space-y-5`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-white/10 font-mono font-bold text-xs flex items-center justify-center border border-white/15">
                      {stepItem.step}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: stepItem.accentColor }}>
                        {stepItem.tagline}
                      </span>
                      <h4 className="text-xl font-heading font-extrabold text-white">
                        {stepItem.title}
                      </h4>
                    </div>
                  </div>
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stepItem.accentColor}25`, color: stepItem.accentColor }}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {stepItem.desc}
                </p>

                <div className="space-y-1.5 py-1">
                  {stepItem.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: stepItem.accentColor }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-col gap-3 bg-black/25 -mx-6 -mb-6 p-4 rounded-b-3xl">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 text-[10px] uppercase">Automatic Output</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      {stepItem.output}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : flowSteps.length - 1))}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    >
                      &larr; Prev Step
                    </button>
                    <span className="text-xs font-mono text-slate-400">
                      {activeStep + 1} / {flowSteps.length}
                    </span>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < flowSteps.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-[#BAF91A] text-[#101312] hover:bg-[#d0ff48] cursor-pointer"
                    >
                      Next Step &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Step Progression Bar at Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 text-xs shadow-xs">
          <div className="flex items-center gap-2 text-slate-600 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#876DFF] shrink-0"></span>
            <span>Continuous data handoff from <strong>Step 01</strong> to <strong>Step 10</strong> without duplicate entry</span>
          </div>

          <div className="flex items-center gap-1.5">
            {flowSteps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                aria-label={`Go to step ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeStep === i 
                    ? 'w-6 bg-[#876DFF]' 
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

