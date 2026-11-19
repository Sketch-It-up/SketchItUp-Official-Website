import React, { useState } from 'react';
import {
  ShoppingCart,
  CheckSquare,
  PackageCheck,
  Warehouse,
  ClipboardList,
  Boxes,
  Truck,
  Wallet,
  BarChart3,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MridaBusinessFlowVisualizerProps {
  variant?: 'product' | 'homepage';
  onExploreMrida?: () => void;
}

export const MridaBusinessFlowVisualizer: React.FC<MridaBusinessFlowVisualizerProps> = ({
  variant = 'product',
  onExploreMrida,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const flowSteps = [
    {
      id: 'procurement-initiation',
      step: '01',
      title: 'Procurement Initiation',
      tagline: 'Purchase Requisition & PO',
      stage: 'Procurement',
      desc: 'The purchase team identifies stock requirements, selects suppliers and generates purchase orders.',
      icon: ShoppingCart,
      accentColor: '#10B981',
      bgGradient: 'from-emerald-950 via-slate-900 to-[#101312]',
      output: 'Purchase Order Generated',
      stageBadge: 'Supplier Selection',
      details: [
        'Stock requirement identification',
        'Supplier & vendor selection',
        'Structured purchase order creation',
      ],
    },
    {
      id: 'purchase-confirmation',
      step: '02',
      title: 'Purchase Confirmation',
      tagline: 'Approval & Schedule Tracking',
      stage: 'Procurement',
      desc: 'Purchase orders are reviewed, approved and tracked against expected delivery schedules.',
      icon: CheckSquare,
      accentColor: '#3B82F6',
      bgGradient: 'from-blue-950 via-slate-900 to-[#101312]',
      output: 'PO Approved & Scheduled',
      stageBadge: 'Approval Workflow',
      details: [
        'Multi-level PO review & signoff',
        'Rate and quantity verification',
        'Expected delivery schedule tracking',
      ],
    },
    {
      id: 'material-inward',
      step: '03',
      title: 'Material Inward',
      tagline: 'Verification & Batch Logging',
      stage: 'Inventory',
      desc: 'Received fertilizer products are verified against purchase records, with quantities, batches and quality-related information recorded.',
      icon: PackageCheck,
      accentColor: '#14B8A6',
      bgGradient: 'from-teal-950 via-slate-900 to-[#101312]',
      output: 'Goods Receipt & Batch Logged',
      stageBadge: 'Inward Verification',
      details: [
        'PO-to-receipt quantity verification',
        'Batch & lot identification capture',
        'Quality-related intake recording',
      ],
    },
    {
      id: 'inventory-update',
      step: '04',
      title: 'Inventory Update',
      tagline: 'Warehouse Stock Sync',
      stage: 'Inventory',
      desc: 'Verified goods are added to the appropriate warehouse inventory. Stock records are updated.',
      icon: Warehouse,
      accentColor: '#22C55E',
      bgGradient: 'from-green-950 via-slate-900 to-[#101312]',
      output: 'Warehouse Stock Updated',
      stageBadge: 'Multi-Warehouse',
      details: [
        'Warehouse-wise inward allocation',
        'Real-time product stock sync',
        'Batch-wise availability tracking',
      ],
    },
    {
      id: 'sales-order-processing',
      step: '05',
      title: 'Sales Order Processing',
      tagline: 'Customer & Dealer Orders',
      stage: 'Sales & Dispatch',
      desc: 'Customer or dealer orders are received, product availability is checked and sales orders are confirmed.',
      icon: ClipboardList,
      accentColor: '#876DFF',
      bgGradient: 'from-[#1c1236] via-slate-900 to-[#101312]',
      output: 'Sales Order Confirmed',
      stageBadge: 'Order Intake',
      details: [
        'Customer & dealer order entry',
        'Live product availability check',
        'Pricing & commercial terms check',
      ],
    },
    {
      id: 'order-fulfilment',
      step: '06',
      title: 'Order Fulfilment',
      tagline: 'Allocation, Picking & Packing',
      stage: 'Sales & Dispatch',
      desc: 'Products are allocated, picked, packed and prepared for dispatch.',
      icon: Boxes,
      accentColor: '#F59E0B',
      bgGradient: 'from-amber-950 via-slate-900 to-[#101312]',
      output: 'Order Picked & Packed',
      stageBadge: 'Warehouse Ops',
      details: [
        'Order-wise stock allocation',
        'Picking and packing coordination',
        'Dispatch readiness staging',
      ],
    },
    {
      id: 'dispatch-delivery',
      step: '07',
      title: 'Dispatch & Delivery',
      tagline: 'Challan & Transport Tracking',
      stage: 'Sales & Dispatch',
      desc: 'Delivery challans, transporter details and dispatch records are maintained. Delivery confirmation is recorded.',
      icon: Truck,
      accentColor: '#0EA5E9',
      bgGradient: 'from-sky-950 via-slate-900 to-[#101312]',
      output: 'Dispatch & Delivery Confirmed',
      stageBadge: 'Distribution',
      details: [
        'Delivery challan generation',
        'Vehicle & transporter logging',
        'Proof of delivery confirmation',
      ],
    },
    {
      id: 'invoice-payment-tracking',
      step: '08',
      title: 'Invoice & Payment Tracking',
      tagline: 'Receivables & Commitments',
      stage: 'Finance & BI',
      desc: 'Customer invoices are generated and payment commitments are tracked, including partial and full payments.',
      icon: Wallet,
      accentColor: '#6366F1',
      bgGradient: 'from-indigo-950 via-slate-900 to-[#101312]',
      output: 'Invoice & Ledger Synced',
      stageBadge: 'Finance Control',
      details: [
        'Customer & dealer invoicing',
        'Partial & full payment tracking',
        'Outstanding balance monitoring',
      ],
    },
    {
      id: 'business-intelligence',
      step: '09',
      title: 'Business Intelligence',
      tagline: 'Consolidated Management View',
      stage: 'Finance & BI',
      desc: 'Sales, procurement, inventory and financial data flow into the management dashboard for consolidated reporting and analysis.',
      icon: BarChart3,
      accentColor: '#BAF91A',
      bgGradient: 'from-[#17220b] via-slate-900 to-[#101312]',
      output: 'Executive Dashboard Updated',
      stageBadge: 'AI & Analytics',
      details: [
        'Sales, purchase & stock analytics',
        'Dealer & territory performance',
        'Consolidated management reporting',
      ],
    },
  ];

  const isHomepage = variant === 'homepage';

  return (
    <section
      id={isHomepage ? 'homepage-mrida-workflow' : 'mrida-workflow'}
      className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 space-y-8"
    >
      {/* Section Title & Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full inline-block border border-emerald-200">
          What is Mrida OS?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
          From Purchase to Payment. One Connected Workflow.
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          {isHomepage ? (
            <>
              Mrida OS connects procurement, warehouse inventory, dealer sales, dispatch, finance
              and business intelligence for agribusiness &amp; fertilizer enterprises — unified inside{' '}
              <span className="font-semibold text-slate-900">one intelligent operating platform</span>.
            </>
          ) : (
            <>
              See how Mrida OS links every fertilizer business transaction from{' '}
              <span className="font-semibold text-slate-900">
                procurement initiation to consolidated business intelligence
              </span>{' '}
              in one continuous operational flow.
            </>
          )}
        </p>
      </motion.div>

      {/* The Central Mrida OS Connected Ecosystem Umbrella Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-6 rounded-3xl bg-gradient-to-r from-[#101312] via-[#062d25] to-[#101312] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[#BAF91A] shrink-0 shadow-inner">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BAF91A]">
                Mrida OS Connected Ecosystem
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/10 text-slate-300 font-mono">
                Agribusiness &amp; Fertilizer Flow
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-0.5">
              Every Transaction Flows Across Procurement, Stock, Dealers &amp; Finance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Every transaction creates visibility. Every workflow creates accountability. Every
              business decision becomes more informed.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isHomepage && onExploreMrida ? (
            <button
              type="button"
              onClick={onExploreMrida}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-2 shadow-md cursor-pointer whitespace-nowrap shrink-0 group"
            >
              <span>Explore Mrida OS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#101312] transition-transform group-hover:translate-x-0.5" />
            </button>
          ) : (
            <span className="text-xs text-[#BAF91A] font-semibold flex items-center gap-1.5 bg-[#BAF91A]/10 px-3.5 py-1.5 rounded-full border border-[#BAF91A]/20 whitespace-nowrap shrink-0">
              9 Connected Stages
            </span>
          )}
        </div>
      </motion.div>

      {/* Interactive Process Flow Header */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 font-mono">
              Interactive Operational Flow (Hover or Tap Any Card)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono tabular-nums">
              Step <strong className="text-slate-900 font-bold">{flowSteps[activeStep].step}</strong>{' '}
              of 0{flowSteps.length}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
              {flowSteps[activeStep].title}
            </span>
          </div>
        </div>

        {/* =========================================================================
            HOVER / TAP EXPAND HORIZONTAL ACCORDION (Matches Owner OS Flow Pattern)
           ========================================================================= */}
        <div className="w-full overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="flex items-stretch justify-start min-w-[740px] lg:min-w-full gap-2 h-[400px] select-none">
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
                    flex: isExpanded ? 5 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onClick={() => setActiveStep(index)}
                  onHoverStart={() => setActiveStep(index)}
                  className={`relative cursor-pointer overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-gradient-to-br ' +
                        stepItem.bgGradient +
                        ' text-white border-white/20 shadow-2xl ring-2 ring-slate-900/10'
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
                      className={`text-xs font-mono font-extrabold px-2.5 py-1 rounded-full tabular-nums ${
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
                        color: isExpanded ? stepItem.accentColor : '#64748b',
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
                            {stepItem.stage} · {stepItem.tagline}
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
                            <div
                              key={dIdx}
                              className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200"
                            >
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
                              Connected Handoff
                            </span>
                            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5 truncate">
                              {stepItem.output}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <span
                              className="text-[10px] font-bold px-2.5 py-1 rounded-full font-mono shrink-0"
                              style={{
                                backgroundColor: `${stepItem.accentColor}20`,
                                color: stepItem.accentColor,
                                border: `1px solid ${stepItem.accentColor}40`,
                              }}
                            >
                              {stepItem.stageBadge}
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

        {/* Step Progression Bar at Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 text-xs shadow-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>
              Continuous agribusiness handoff from <strong>Step 01</strong> to{' '}
              <strong>Step 09</strong> — every transaction creates visibility and accountability
            </span>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            {flowSteps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                aria-label={`Go to Mrida OS workflow step ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeStep === i ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MridaBusinessFlowVisualizer;
