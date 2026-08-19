import React, { useState } from 'react';
import { 
  Eye, 
  Sliders, 
  Gauge, 
  HelpCircle, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BuiltForOwnersSectionProps {
  onOpenDemo?: (module?: string) => void;
}

export const BuiltForOwnersSection: React.FC<BuiltForOwnersSectionProps> = ({ onOpenDemo }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "see",
      code: "SEE",
      title: "Real-Time Operational Visibility",
      tagline: "Know what is happening without asking anyone",
      summary: "One central live feed displaying active customer orders, stage-by-stage shop floor progress, pending dispatches, and bank balances in real time.",
      painRelief: "Eliminates endless phone calls, WhatsApp check-ins, and waiting for end-of-day Excel reports.",
      icon: Eye,
      accent: "text-blue-500 bg-blue-50 border-blue-200"
    },
    {
      id: "control",
      code: "CONTROL",
      title: "System-Enforced Workflows",
      tagline: "Enforce process standards across every department",
      summary: "Set automated approval thresholds for purchase orders, discount waivers, quality rejections, and credit limits. Prevent unauthorized actions before they happen.",
      painRelief: "Stops staff from making unauthorized discounts, buying unapproved stock, or skipping quality inspections.",
      icon: Sliders,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      id: "measure",
      code: "MEASURE",
      title: "Accurate Floor & Financial Metrics",
      tagline: "Automated calculations, zero guesswork",
      summary: "Automatically calculate exact raw material consumption, scrap percentages, machine OEE, operator efficiency, and realized job margins per customer order.",
      painRelief: "No more discovering after month-end that a large order was delivered at a loss.",
      icon: Gauge,
      accent: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      id: "decide",
      code: "DECIDE",
      title: "Instant Answers to Critical Questions",
      tagline: "Direct decision intelligence at your fingertips",
      summary: "Instantly answer: Where is money currently stuck? What machine or job is bottlenecked? Which orders are at risk of missing customer SLA dates?",
      painRelief: "Move from reactive firefighting to clear, high-confidence strategic decision-making.",
      icon: HelpCircle,
      accent: "text-amber-600 bg-amber-50 border-amber-200"
    },
    {
      id: "scale",
      code: "SCALE",
      title: "Process-Driven Scalability",
      tagline: "Grow revenue without expanding owner chaos",
      summary: "Standardize repeatable operations so new staff, new machines, and new locations plug into the exact same operating framework without requiring your daily micro-management.",
      painRelief: "Allows the owner to step back from day-to-day operations and focus on strategic business expansion.",
      icon: TrendingUp,
      accent: "text-rose-600 bg-rose-50 border-rose-200"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-3"
      >
        <span className="text-xs font-extrabold text-[#101312] uppercase tracking-widest bg-slate-200/80 px-4 py-1.5 rounded-full inline-block">
          Built Around the Owner
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          You shouldn't have to run your business through WhatsApp and spreadsheets.
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          OwnerOS is architected around five core control pillars that restore visibility, structure, and peace of mind to business owners.
        </p>
      </motion.div>

      {/* 5 Pillars Interactive Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {pillars.map((pillar, idx) => {
          const isSelected = activePillar === idx;
          const Icon = pillar.icon;
          return (
            <motion.button
              key={pillar.id}
              onClick={() => setActivePillar(idx)}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                isSelected
                  ? 'bg-[#101312] text-white border-[#BAF91A] shadow-lg scale-105 z-10'
                  : 'bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              <span className={`text-xs font-mono font-extrabold tracking-wider ${
                isSelected ? 'text-[#BAF91A]' : 'text-slate-500'
              }`}>
                {pillar.code}
              </span>
              <Icon className={`w-5 h-5 ${isSelected ? 'text-[#BAF91A]' : 'text-slate-600'}`} />
              <span className="text-xs font-bold truncate max-w-full">
                {pillar.title.split(' ')[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Active Pillar Showcase Card */}
      <motion.div 
        layout
        className="p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50/80 to-[#876DFF]/5 border border-slate-200 shadow-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={pillars[activePillar].id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#101312] text-[#BAF91A] shadow-xs">
                  PILLAR: {pillars[activePillar].code}
                </span>
                <span className="text-xs font-bold text-[#876DFF] uppercase tracking-wider">
                  {pillars[activePillar].tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
                {pillars[activePillar].title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {pillars[activePillar].summary}
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Operational Impact for the Business Owner:</span>
                </div>
                <p className="text-xs text-slate-600">
                  {pillars[activePillar].painRelief}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101312] text-white border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span className="font-mono text-[#BAF91A]">OWNER COMMAND PREVIEW</span>
              <span>Live Control</span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Active Order Status</span>
                <span className="text-[#BAF91A] font-bold">100% Tracked</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Approval Bottlenecks</span>
                <span className="text-[#E2FF99] font-bold">0 Pending</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-300">Floor Yield vs Target</span>
                <span className="text-emerald-400 font-bold">94.2% (+2.2%)</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenDemo && onOpenDemo(`Owner OS - ${pillars[activePillar].code}`)}
              className="w-full py-3 rounded-xl text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>See {pillars[activePillar].code} in Live Demo</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

        </div>
      </motion.div>

      {/* Grounded Human Philosophy Quote Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-6 sm:p-8 rounded-3xl bg-[#101312] text-white border border-slate-800 shadow-xl relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <Quote className="w-8 h-8 text-[#BAF91A] mx-auto opacity-70" />
          <blockquote className="text-lg sm:text-xl font-heading font-medium text-slate-100 leading-relaxed italic">
            "OwnerOS doesn't replace your people. It gives your people a better system to work in — and gives you better control over the business."
          </blockquote>
          <p className="text-xs font-bold text-[#BAF91A] uppercase tracking-widest font-mono">
            — The SketchItUp Solutions Operational Philosophy
          </p>
        </div>
      </motion.div>

    </section>
  );
};
