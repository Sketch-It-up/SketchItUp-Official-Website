import React from 'react';
import { Sparkles, CheckCircle, Clock, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

interface AiRoadmapPanelProps {
  onOpenDemo: (prefilledModule?: string) => void;
}

export const AiRoadmapPanel: React.FC<AiRoadmapPanelProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-10 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-extrabold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-4 py-1.5 rounded-full inline-block">
          AI & Intelligence
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
          Intelligence Built Into Your Business
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Your business generates data every day across orders, inventory, floor machines, and accounts. OwnerOS turns that data into actionable decisions.
        </p>

        {/* Progression Track */}
        <div className="mt-4 p-3 bg-gradient-to-r from-white via-slate-50 to-[#E2FF99]/30 rounded-2xl shadow-xs border border-slate-200/80 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700">
          <span className="px-3 py-1 bg-slate-100 rounded-lg text-slate-900">1. Data Ingestion</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="px-3 py-1 bg-[#BAF91A]/30 text-[#101312] rounded-lg font-bold">2. Live Anomaly Flags</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="px-3 py-1 bg-[#876DFF]/20 text-[#876DFF] rounded-lg">3. Proactive Insights</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg">4. Owner Decisions</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* AVAILABLE TODAY PANEL */}
        <div className="bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
          <div className="absolute top-0 right-0 bg-[#BAF91A] text-[#101312] text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
            Live in Production Today
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#BAF91A]/20 text-[#BAF91A] flex items-center justify-center font-bold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">Live Intelligence Features</h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-200 mt-6">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#BAF91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Floor Bottleneck & Delay Prediction</strong>
                  <span className="text-xs text-slate-300">Identifies work-in-progress delays and machine slowdowns before customer order SLAs are breached.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#BAF91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Scrap & Material Consumption Alerts</strong>
                  <span className="text-xs text-slate-300">Highlights unusual scrap spikes or abnormal raw material consumption variance across job cards.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#BAF91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Critical Stock & Supplier Lead-Time Warnings</strong>
                  <span className="text-xs text-slate-300">Proactively surfaces safety stock breaches and alerts you when supplier lead times threaten scheduled production.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#BAF91A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Natural Language Executive Briefing</strong>
                  <span className="text-xs text-slate-300">Summarizes daily company performance, cash flow, and critical owner decisions in plain conversational language.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <button
              onClick={() => onOpenDemo("AI Intelligence Walkthrough")}
              className="w-full py-3.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Test Live AI Decision Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* AI ROADMAP PANEL */}
        <div className="bg-gradient-to-br from-amber-50/60 via-white to-orange-50/40 text-slate-900 rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 relative flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-amber-100 text-amber-900 text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
            Future Capabilities Roadmap
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900">Advanced Roadmap</h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-700 mt-6">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Predictive Commodity Purchasing</strong>
                  <span className="text-xs text-slate-500">Analyzes historical raw material price trends to suggest optimal buying windows.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Automated Optical Quality Inspection</strong>
                  <span className="text-xs text-slate-500">Camera feed inspection to detect surface defects directly on assembly and packing lines.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Autonomous Supplier Quotation Comparison</strong>
                  <span className="text-xs text-slate-500">Auto-evaluates incoming vendor bids against historical quality and on-time delivery scores.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold">Voice-Guided Mobile Approvals</strong>
                  <span className="text-xs text-slate-500">Review, query, and sign off emergency purchase orders via conversational voice prompts.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center font-medium">
              We engineer AI to solve real operational bottlenecks — not as decorative features.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
