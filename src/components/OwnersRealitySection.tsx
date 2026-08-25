import React from 'react';
import { 
  FileSpreadsheet, 
  AlertTriangle, 
  XCircle,
  TrendingDown,
  UserX,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface OwnersRealitySectionProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (module?: string) => void;
}

export const OwnersRealitySection: React.FC<OwnersRealitySectionProps> = ({ onNavigate, onOpenDemo }) => {
  const problems = [
    {
      id: "01",
      category: "FRAGMENTATION",
      title: "Disconnected Tools & Data Silos",
      summary: "Spreadsheets, WhatsApp groups, legacy desktop accounts, and handwritten tags that never communicate.",
      impact: "Information fragmented across 5+ disconnected places without a single source of truth.",
      icon: FileSpreadsheet,
      accentColor: "#f43f5e",
      tag: "Siloed Operations"
    },
    {
      id: "02",
      category: "BLIND SPOTS",
      title: "Lack of Real-Time Visibility",
      summary: "Waiting for manual end-of-day reports or chasing staff to find out if an urgent order was even dispatched.",
      impact: "Machine downtime, material shortages, or floor line delays discovered only when clients complain.",
      icon: AlertTriangle,
      accentColor: "#f59e0b",
      tag: "Zero Live Signal"
    },
    {
      id: "03",
      category: "FRICTION",
      title: "Manual Handoffs & Human Errors",
      summary: "Sales promises delivery without checking raw material stock. Purchase orders go unverified. Dispatches get delayed.",
      impact: "Dropped customer orders, duplicate stock purchases, and costly manufacturing rejections.",
      icon: XCircle,
      accentColor: "#ec4899",
      tag: "Handoff Bottlenecks"
    },
    {
      id: "04",
      category: "DELAYED NUMBERS",
      title: "Decision-Making in the Dark",
      summary: "Financial reports and true job cost calculations take weeks after month-end to compile in spreadsheets.",
      impact: "Reactive firefighting instead of confident capital allocation and high-margin pricing.",
      icon: TrendingDown,
      accentColor: "#a855f7",
      tag: "Lagging Analytics"
    },
    {
      id: "05",
      category: "OVERLOAD",
      title: "The Owner Growth Bottleneck",
      summary: "Every minor exception, discount waiver, job card check, and purchase approval requires the owner's personal intervention.",
      impact: "Business expansion is capped by the owner's physical hours and energy.",
      icon: UserX,
      accentColor: "#BAF91A",
      tag: "Founder Bottleneck"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Section Header - Clean Light Typography */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-xs font-bold text-rose-700">
          <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
          <span className="uppercase tracking-widest text-[10px]">The Operational Reality</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Your business is growing. Your systems shouldn't become harder to manage.
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          As order volumes scale, running operations through disconnected chat groups, spreadsheets, and manual check-ins creates bottlenecks, invisible waste, and endless firefighting.
        </p>
      </motion.div>

      {/* High-Craft Interactive Problem Cards Container (Individual Cards Themed) */}
      <div className="space-y-6">
        
        {/* Top Operational Status Ribbon */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              5 Critical Failure Points of Disconnected Tools
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Zero-Downtime OS Replacement
          </div>
        </div>

        {/* 5 Problem Grid + 1 Solution Bridge Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((prob, idx) => {
            const IconComp = prob.icon;
            const isHighlight = idx === 4; // 5th item (Owner Growth Bottleneck)
            
            return (
              <motion.div
                key={prob.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between group relative overflow-hidden text-white ${
                  isHighlight
                    ? 'bg-[#101312] border-[#BAF91A]/40 hover:border-[#BAF91A] shadow-[0_8px_30px_rgba(186,249,26,0.1)]'
                    : 'bg-[#101312] border-slate-800 hover:border-slate-700 shadow-md hover:shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  {/* Meta Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${
                        isHighlight 
                          ? 'text-[#BAF91A] bg-[#BAF91A]/10 border-[#BAF91A]/20' 
                          : 'text-rose-400 bg-rose-500/10 border-rose-500/20'
                      }`}>
                        {prob.id} // {prob.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400">
                      {prob.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-inner group-hover:scale-105 transition-transform ${
                    isHighlight
                      ? 'bg-[#BAF91A]/15 border-[#BAF91A]/30 text-[#BAF91A]'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-400'
                  }`}>
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className={`text-lg font-heading font-extrabold transition-colors ${
                      isHighlight ? 'text-white group-hover:text-[#BAF91A]' : 'text-white group-hover:text-rose-300'
                    }`}>
                      {prob.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {prob.summary}
                    </p>
                  </div>
                </div>

                {/* Operational Cost Impact Footer */}
                <div className="mt-5 pt-4 border-t border-white/10 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                    <span>Direct Bottleneck:</span>
                  </div>
                  <p className={`text-xs leading-relaxed font-medium ${
                    isHighlight ? 'text-[#E2FF99]' : 'text-slate-200'
                  }`}>
                    {prob.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: The Solution Bridge (OwnerOS Unified Command) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="rounded-3xl p-6 sm:p-7 bg-[#101312] border border-slate-800 hover:border-[#876DFF]/50 shadow-md hover:shadow-xl flex flex-col justify-between relative overflow-hidden group text-white"
          >
            {/* Top Badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#876DFF] bg-[#876DFF]/15 border border-[#876DFF]/30 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#BA99FF]" />
                  <span>THE SOLUTION</span>
                </span>
                <span className="text-[10px] font-mono text-[#BAF91A] font-bold">
                  Synchronous OS
                </span>
              </div>

              <div className="w-11 h-11 rounded-2xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#BA99FF] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg font-heading font-extrabold text-white group-hover:text-[#BA99FF] transition-colors">
                  One Synchronous System Spine
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of duct-taping ten disparate apps together, SketchItUp links every department into a single continuous stream with automated handoffs.
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                  <span>Single pane of truth across all operations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                  <span>Zero manual data re-entry</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (onNavigate) {
                  onNavigate('owner-os');
                } else if (onOpenDemo) {
                  onOpenDemo('Operational Bottleneck Consultation');
                }
              }}
              className="mt-6 w-full py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>See How OwnerOS Solves This</span>
              <ArrowRight className="w-4 h-4 text-[#101312]" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Executive Quote Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#101312] text-white border border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-300 leading-relaxed text-center sm:text-left">
            <strong className="text-white">Eliminate the firefighting cycle:</strong> Unlock transparent real-time operations and empower your managers with automated workflows.
          </p>
          <button
            onClick={() => onOpenDemo && onOpenDemo('Operational Reality Discovery')}
            className="text-xs font-bold text-[#BAF91A] hover:text-white transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Request Operational Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
};
