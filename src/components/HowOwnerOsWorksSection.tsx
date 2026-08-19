import React, { useState } from 'react';
import { 
  FileCheck2, 
  Layers, 
  FileText, 
  Activity, 
  ShieldCheck, 
  Receipt, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HowOwnerOsWorksSectionProps {
  onOpenDemo?: (module?: string) => void;
}

export const HowOwnerOsWorksSection: React.FC<HowOwnerOsWorksSectionProps> = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      id: "step-1",
      stepNum: "01",
      title: "Order Intake & Confirmation",
      dept: "Sales & CRM",
      tagline: "Single point of order entry",
      description: "Sales registers or imports customer purchase order. System auto-verifies customer credit, terms, and technical drawing specs.",
      dataSync: "Auto-generates Sales Order #SO-8819 and alerts Inventory."
    },
    {
      id: "step-2",
      stepNum: "02",
      title: "Stock Verification & Allocation",
      dept: "Inventory & Stores",
      tagline: "Instant stock reservation",
      description: "System matches Bill of Materials (BOM) against real-time store stock. Allocates available raw materials or triggers purchase requisition.",
      dataSync: "Material locked for Batch #B-402. No double-allocation possible."
    },
    {
      id: "step-3",
      stepNum: "03",
      title: "Job Card Creation & Routing",
      dept: "Production Planning",
      tagline: "Digital production route cards",
      description: "Converts the order into digital Job Cards with machine sequencing, estimated cycle times, and operator assignments.",
      dataSync: "Queued directly to Shop Floor Terminal on Machine 2 & 4."
    },
    {
      id: "step-4",
      stepNum: "04",
      title: "Floor Execution & Tracking",
      dept: "Shop Floor & Machinery",
      tagline: "Live progress logging",
      description: "Operators log setup, cycle times, and good/scrap counts via touch terminals or barcodes. Machine uptime and yield logged live.",
      dataSync: "Real-time production completion percentage broadcast across OS."
    },
    {
      id: "step-5",
      stepNum: "05",
      title: "Quality Inspection & Signoff",
      dept: "QA & Compliance",
      tagline: "Tolerance verification & gatekeeping",
      description: "Quality inspectors record parameter measurements. Defective items quarantined; approved batches receive digitally signed test cert.",
      dataSync: "QC Certificate #QC-901 attached to order dispatch docket."
    },
    {
      id: "step-6",
      stepNum: "06",
      title: "Dispatch & Financial Sync",
      dept: "Logistics & Accounts",
      tagline: "Automatic invoice generation",
      description: "Stores generate barcode packing slip and e-way bill. Dispatch triggers automatic GST tax invoice and posts to Accounts Receivable.",
      dataSync: "Invoice #INV-491 posted. Customer notified with tracking."
    },
    {
      id: "step-7",
      stepNum: "07",
      title: "Owner Command Center Update",
      dept: "Executive Oversight",
      tagline: "Complete profitability reconciliation",
      description: "The Owner Command Center instantly updates realized job margin, floor yield, and cash flow balance with zero manual reporting.",
      dataSync: "Owner dashboard logs +₹34,500 gross margin on completed batch."
    }
  ];

  const current = workflowSteps[activeStep];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="text-xs font-extrabold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-4 py-1.5 rounded-full inline-block">
          The System in Action
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
          One Business. One Connected Workflow.
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          See how an order travels through your entire business without dropped handoffs, missing data, or phone call follow-ups.
        </p>
      </motion.div>

      {/* 7-Step Navigation Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {workflowSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[95px] ${
                isSelected
                  ? 'bg-[#101312] text-white border-[#BAF91A] shadow-md scale-105 z-10'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#BAF91A]' : 'text-slate-400'}`}>
                  {step.stepNum}
                </span>
                <span className={`text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded ${
                  isSelected ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {step.dept.split(' ')[0]}
                </span>
              </div>
              <div className="mt-2 text-xs font-bold leading-tight truncate">
                {step.title}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Active Stage Simulation Showcase */}
      <motion.div 
        layout
        className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#101312] to-[#1a1333] text-white border border-slate-800 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={current.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#BAF91A] text-[#101312] font-mono font-extrabold text-sm flex items-center justify-center shadow-xs">
                  {current.stepNum}
                </span>
                <div>
                  <span className="text-xs font-bold text-[#BAF91A] uppercase tracking-wider">
                    DEPARTMENT: {current.dept}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-xs font-bold text-[#BAF91A] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BAF91A]" />
                  <span>Automated Cross-Department Data Sync:</span>
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  {current.dataSync}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-mono text-[#BAF91A]">LIVE WORKFLOW SIMULATOR</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                CONNECTED
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-slate-400">
                <span>Progress Through System</span>
                <span className="text-[#BAF91A] font-mono font-bold">
                  {Math.round(((activeStep + 1) / workflowSteps.length) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="bg-[#BAF91A] h-full rounded-full"
                  initial={false}
                  animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-bold">Zero Human Handoff Delay</span>
              <p className="text-slate-200 font-medium">
                Next department receives verified inputs the instant this step completes.
              </p>
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep((prev) => (prev + 1) % workflowSteps.length)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenDemo && onOpenDemo('Workflow Walkthrough')}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-all cursor-pointer"
              >
                Book Walkthrough
              </motion.button>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};
