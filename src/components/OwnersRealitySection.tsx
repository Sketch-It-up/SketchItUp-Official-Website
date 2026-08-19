import React from 'react';
import { 
  FileSpreadsheet, 
  MessageSquare, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Lock, 
  Bell, 
  XCircle,
  TrendingDown,
  UserX,
  Layers,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface OwnersRealitySectionProps {
  onOpenDemo?: (module?: string) => void;
}

export const OwnersRealitySection: React.FC<OwnersRealitySectionProps> = ({ onOpenDemo }) => {
  const problems = [
    {
      id: "01",
      title: "Disconnected Tools & Data Silos",
      summary: "Spreadsheets, WhatsApp groups, legacy desktop accounts, and handwritten tags that never communicate.",
      impact: "Information is fragmented across 5+ places. Nobody has the single source of truth.",
      icon: FileSpreadsheet,
      badge: "Siloed Systems"
    },
    {
      id: "02",
      title: "Lack of Real-Time Visibility",
      summary: "Waiting for manual end-of-day reports or chasing staff to find out if an urgent order was even dispatched.",
      impact: "You only discover machine downtime, material shortages, or line delays when clients complain.",
      icon: AlertTriangle,
      badge: "Blind Spots"
    },
    {
      id: "03",
      title: "Manual Handoffs & Human Errors",
      summary: "Sales promises delivery without checking raw material stock. Purchase orders go unverified. Dispatches get delayed.",
      impact: "Dropped customer orders, duplicate stock purchases, and costly manufacturing rejections.",
      icon: XCircle,
      badge: "Handoff Failures"
    },
    {
      id: "04",
      title: "Decision-Making in the Dark",
      summary: "Financial reports and true job cost calculations take weeks after month-end to compile in spreadsheets.",
      impact: "Reactive firefighting instead of confident capital allocation and profitable pricing decisions.",
      icon: TrendingDown,
      badge: "Delayed Numbers"
    },
    {
      id: "05",
      title: "The Owner Growth Bottleneck",
      summary: "Every minor exception, discount waiver, job card check, and purchase approval requires the owner's personal intervention.",
      impact: "The business cannot scale beyond the owner's personal hours and energy.",
      icon: UserX,
      badge: "Founder Overload"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center space-y-3"
      >
        <span className="text-xs font-extrabold text-rose-600 uppercase tracking-widest bg-rose-500/10 px-4 py-1.5 rounded-full shadow-xs inline-block">
          What Problem Does OwnerOS Solve?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Your business is growing. Your systems shouldn't become harder to manage.
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          As orders increase, running operations through disconnected chat groups, spreadsheets, and manual check-ins creates bottlenecks, blind spots, and firefighting.
        </p>
      </motion.div>

      {/* 5 Problem Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
        {problems.map((prob, idx) => {
          const IconComp = prob.icon;
          const isHighlight = idx === 4; // 5th item spans or highlights
          return (
            <motion.div
              key={prob.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                isHighlight
                  ? 'md:col-span-2 lg:col-span-2 bg-[#101312] text-white border-slate-800 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200/90 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${
                      isHighlight ? 'bg-[#BAF91A]/20 text-[#BAF91A]' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {prob.id}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isHighlight ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {prob.badge}
                    </span>
                  </div>
                  <IconComp className={`w-5 h-5 ${isHighlight ? 'text-[#BAF91A]' : 'text-rose-500'}`} />
                </div>

                <h3 className={`text-xl font-heading font-bold ${isHighlight ? 'text-white' : 'text-slate-900'}`}>
                  {prob.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isHighlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {prob.summary}
                </p>
              </div>

              <div className={`mt-6 pt-4 border-t text-xs ${
                isHighlight ? 'border-slate-800 text-[#E2FF99]' : 'border-slate-100 text-rose-700 font-medium'
              }`}>
                <strong>Operational Cost:</strong> {prob.impact}
              </div>
            </motion.div>
          );
        })}

        {/* 6th Callout Card: The Solution Bridge */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.4 }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 rounded-3xl bg-gradient-to-br from-[#876DFF]/15 via-white to-[#BAF91A]/10 border border-[#876DFF]/20 shadow-xs flex flex-col justify-between"
        >
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-[#876DFF] uppercase tracking-wider bg-[#876DFF]/10 px-2.5 py-0.5 rounded-full inline-block">
              The OwnerOS Difference
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-900">
              One Unified Operational Spine
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Instead of duct-taping ten apps together, OwnerOS links every step from customer quote to plant dispatch into a single continuous stream.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenDemo && onOpenDemo('Problem Consultation')}
            className="mt-6 w-full py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>See How OwnerOS Solves This</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
};
