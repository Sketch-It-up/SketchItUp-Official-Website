import React from 'react';
import { 
  Building2, 
  Code2, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSketchItUpSectionProps {
  onNavigate: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const AboutSketchItUpSection: React.FC<AboutSketchItUpSectionProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="text-xs font-extrabold text-[#101312] uppercase tracking-widest bg-slate-200/80 px-4 py-1.5 rounded-full inline-block">
          Dual Operational Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Technology Built Around Your Business.
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          SketchItUp Solutions is a product consultancy and technology company that builds a portfolio of vertical operating systems — starting with Owner OS for manufacturing, and expanding across industrial sectors with bespoke engineering.
        </p>
      </motion.div>

      {/* 2-Card Layout: Product Suite vs Bespoke Consultancy (High-Craft Distinct UI) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Vertical Operating Systems (Owner OS Flagship & Portfolio) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-[2.5rem] bg-[#101312] text-white border border-slate-800 shadow-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#BAF91A]/40 transition-all"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#BAF91A]/15 via-emerald-500/10 to-transparent blur-3xl pointer-events-none group-hover:from-[#BAF91A]/25 transition-all" />

          <div className="space-y-6 relative z-10">
            {/* Header / Badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold shadow-lg shadow-[#BAF91A]/20 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#BAF91A] uppercase tracking-wider block">
                    PILLAR 01 // STANDARDIZED SUITE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    Vertical Operating Systems
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAF91A]/15 border border-[#BAF91A]/30 text-[#BAF91A] text-[11px] font-mono font-bold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] animate-pulse" />
                <span>READY TO DEPLOY</span>
              </div>
            </div>

            {/* Tagline & Core Statement */}
            <div className="space-y-2">
              <div className="text-sm font-bold text-[#BAF91A] font-heading">
                Turnkey Platforms Engineered for Specific Industry Verticals
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pre-built, modular operating systems designed to eliminate fragmented spreadsheets and deliver full executive command from day one. Starting with Owner OS for manufacturing, expanding to agriculture and logistics.
              </p>
            </div>

            {/* Interactive Capability Pills */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                Integrated System Modules:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Single-Pane Owner Command Center',
                  '10 Interconnected Core Modules',
                  'Live Floor-to-Ledger Synchronicity',
                  'Rapid 2–4 Week Zero-Downtime Rollout'
                ].map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#BAF91A] shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-[#BAF91A]">10+</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Live Modules</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-white">2–4 Wks</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Deployment</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-emerald-400">100%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Single Ledger</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 relative z-10">
            <button
              onClick={() => onNavigate('owner-os-home')}
              className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg group-hover:shadow-[0_0_20px_rgba(186,249,26,0.25)]"
            >
              <span>Explore Owner OS Platform</span>
              <ArrowRight className="w-4 h-4 text-[#101312]" />
            </button>
            <button
              onClick={() => onNavigate('modules')}
              className="w-full sm:w-auto py-3.5 px-5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>View All 10 Modules</span>
            </button>
          </div>
        </motion.div>

        {/* Card 2: Custom Engineering & Advisory (Bespoke Builds) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-[2.5rem] bg-[#101312] text-white border border-slate-800 shadow-2xl p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#876DFF]/50 transition-all"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#876DFF]/20 via-indigo-500/10 to-transparent blur-3xl pointer-events-none group-hover:from-[#876DFF]/30 transition-all" />

          <div className="space-y-6 relative z-10">
            {/* Header / Badges */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-2xl bg-[#876DFF] text-white flex items-center justify-center font-bold shadow-lg shadow-[#876DFF]/20 group-hover:scale-105 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#876DFF] uppercase tracking-wider block">
                    PILLAR 02 // BESPOKE SQUADS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    Custom Engineering
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#876DFF]/20 border border-[#876DFF]/40 text-[#BA99FF] text-[11px] font-mono font-bold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#876DFF] animate-pulse" />
                <span>100% BESPOKE ARCHITECTURE</span>
              </div>
            </div>

            {/* Tagline & Core Statement */}
            <div className="space-y-2">
              <div className="text-sm font-bold text-[#876DFF] font-heading">
                Tailored Software Built Around Your Proprietary Workflows
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Never force unique machinery, bespoke formulas, or multi-entity holding setups into generic tools. Our senior engineering squads co-design and develop tailored software around your exact operations.
              </p>
            </div>

            {/* Interactive Capability Pills */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 block">
                Bespoke Engineering Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Bespoke ERP & MES Architecture',
                  'IoT & Machine Hardware Telemetry',
                  'Legacy ERP & Database Migration',
                  'Dedicated Agile Sprint Squads'
                ].map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#876DFF] shrink-0" />
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-[#876DFF]">100%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Tailored Code</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-white">Full IP</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Ownership</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold font-heading text-indigo-400">Direct</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">IoT Hardware</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3 relative z-10">
            <button
              onClick={() => onNavigate('custom-solutions')}
              className="w-full sm:flex-1 py-3.5 px-5 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg group-hover:shadow-[0_0_20px_rgba(135,109,255,0.25)]"
            >
              <span>Explore Custom Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenDemo('Custom Software & Floor Audit')}
              className="w-full sm:w-auto py-3.5 px-5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book Floor Audit</span>
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
