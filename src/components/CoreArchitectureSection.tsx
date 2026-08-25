import React from 'react';
import { 
  Activity, 
  LayoutDashboard, 
  Database, 
  Workflow, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { motion } from 'motion/react';

interface CoreArchitectureSectionProps {
  onNavigate?: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const CoreArchitectureSection: React.FC<CoreArchitectureSectionProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="space-y-8">
      {/* Section Header (Light Page Background) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 border border-slate-300/60 text-xs font-bold text-[#101312]">
            <Activity className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-widest text-[10px]">Unified Foundation // 4 Core Primitives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            The Architecture Powering Every SketchItUp OS
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Whether deployed on factory floors, agribusiness intake yards, or custom multi-entity setups, every platform we engineer is built upon four interconnected foundation primitives.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
            <span className="text-[#876DFF] font-bold">100% Synchronous</span> Architecture
          </div>
        </div>
      </div>

      {/* 4 Distinct High-Craft Architectural Cards */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Owner-First UI */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-3xl p-6 sm:p-7 bg-[#101312] text-white border border-slate-800 hover:border-[#BAF91A]/50 shadow-lg hover:shadow-[0_12px_30px_rgba(186,249,26,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="space-y-4">
            {/* Meta Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#BAF91A] bg-[#BAF91A]/10 border border-[#BAF91A]/20 px-2 py-0.5 rounded-md">
                01 // INTERFACE
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Glass UI
              </span>
            </div>

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#BAF91A]/15 border border-[#BAF91A]/30 text-[#BAF91A] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <LayoutDashboard className="w-6 h-6" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-[#BAF91A] transition-colors">
                Owner-First UI
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Designed specifically for the executive decision-maker to see total cross-departmental operations in seconds.
              </p>
            </div>

            {/* Micro Capabilities List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                <span>Zero manual spreadsheet compilation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                <span>Single-pane mobile + desktop oversight</span>
              </div>
            </div>
          </div>

          {/* Card Footer Metric Tag */}
          <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Latency</span>
            <span className="text-[#BAF91A] font-semibold">&lt; 50ms Real-Time</span>
          </div>
        </motion.div>

        {/* Card 2: Live Single Ledger */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-3xl p-6 sm:p-7 bg-[#101312] text-white border border-slate-800 hover:border-indigo-400/50 shadow-lg hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="space-y-4">
            {/* Meta Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                02 // DATA ENGINE
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Relational Sync
              </span>
            </div>

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                Live Single Ledger
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Orders, stock levels, production outputs, and accounts all update one synchronous relational truth simultaneously.
              </p>
            </div>

            {/* Micro Capabilities List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Eliminates departmental data silos</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Immutable audit log on every record</span>
              </div>
            </div>
          </div>

          {/* Card Footer Metric Tag */}
          <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Reconciliation</span>
            <span className="text-indigo-400 font-semibold">100% Automated</span>
          </div>
        </motion.div>

        {/* Card 3: Event Triggers */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-3xl p-6 sm:p-7 bg-[#101312] text-white border border-slate-800 hover:border-[#876DFF]/50 shadow-lg hover:shadow-[0_12px_30px_rgba(135,109,255,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="space-y-4">
            {/* Meta Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-[#876DFF] bg-[#876DFF]/10 border border-[#876DFF]/20 px-2 py-0.5 rounded-md">
                03 // AUTOMATION
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Event Bus
              </span>
            </div>

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#876DFF] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-[#BA99FF] transition-colors">
                Event-Driven Triggers
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Workflows advance automatically between departments when quality checks, approvals, and job cards are logged.
              </p>
            </div>

            {/* Micro Capabilities List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#876DFF] shrink-0" />
                <span>Auto-triggers purchase orders on low stock</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-[#876DFF] shrink-0" />
                <span>Instant QA gate passes to dispatch</span>
              </div>
            </div>
          </div>

          {/* Card Footer Metric Tag */}
          <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Hand-off Friction</span>
            <span className="text-[#876DFF] font-semibold">Zero Manual Chasing</span>
          </div>
        </motion.div>

        {/* Card 4: Grounded AI Copilot */}
        <motion.div
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-3xl p-6 sm:p-7 bg-[#101312] text-white border border-slate-800 hover:border-emerald-400/50 shadow-lg hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] transition-all flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="space-y-4">
            {/* Meta Header */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                04 // INTELLIGENCE
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Grounded AI
              </span>
            </div>

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>

            {/* Title & Description */}
            <div className="space-y-1.5">
              <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                Grounded AI Copilot
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plain-English operational questions, proactive scrap anomaly alerts, and automated morning executive briefs.
              </p>
            </div>

            {/* Micro Capabilities List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Trained on live database context</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Predictive yield & cash-flow forecasting</span>
              </div>
            </div>
          </div>

          {/* Card Footer Metric Tag */}
          <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Model Grounding</span>
            <span className="text-emerald-400 font-semibold">100% Real Floor Data</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Integrated Architecture Ribbon */}
      <div className="p-5 rounded-2xl bg-[#101312] text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold text-xs shrink-0">
            <Cpu className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Every SketchItUp Operating System</strong> is pre-wired with these 4 primitives — delivering zero-downtime, fully integrated enterprise control.
          </p>
        </div>

        <button
          onClick={() => {
            if (onNavigate) {
              onNavigate('custom-solutions');
            } else {
              onOpenDemo('Foundation Architecture Inquiry');
            }
          }}
          className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-1.5 shadow cursor-pointer shrink-0"
        >
          <span>Explore Custom Deployment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  </div>
  );
};
