import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Database, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Eye,
  Sliders,
  BarChart3,
  BrainCircuit,
  TrendingUp
} from 'lucide-react';

interface OwnerOsViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const OwnerOsView: React.FC<OwnerOsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      name: "SEE",
      tagline: "Single-Screen Truth",
      desc: "Instant real-time visibility across orders, inventory, floor machines, team tasks, and cash flow without asking three different managers.",
      icon: Eye,
      color: "text-[#BAF91A]"
    },
    {
      num: "02",
      name: "CONTROL",
      tagline: "Standard Operating Workflows",
      desc: "Digitally enforce standard operating procedures across every department so errors are prevented before work moves forward.",
      icon: Sliders,
      color: "text-[#876DFF]"
    },
    {
      num: "03",
      name: "MEASURE",
      tagline: "Precision Yields & Output",
      desc: "Automatically track output rates, scrap percentages, machine utilization, supplier lead times, and employee productivity with zero manual spreadsheets.",
      icon: BarChart3,
      color: "text-indigo-400"
    },
    {
      num: "04",
      name: "DECIDE",
      tagline: "Actionable Intelligence",
      desc: "Act on live operational facts and automated anomaly warnings rather than historical month-end assumptions or guesswork.",
      icon: BrainCircuit,
      color: "text-emerald-400"
    },
    {
      num: "05",
      name: "SCALE",
      tagline: "System-Driven Expansion",
      desc: "Add product lines, machines, warehouses, and locations without needing the business owner to personally oversee every transaction.",
      icon: TrendingUp,
      color: "text-[#BAF91A]"
    }
  ];

  const architectureLayers = [
    {
      title: "1. Owner Command Center",
      desc: "Single-pane-of-glass executive interface providing the live operational pulse, order fulfillments, machine utilization gauges, and pending owner approvals.",
      icon: LayoutDashboard,
      color: "border-[#BAF91A] bg-[#BAF91A]/10 text-white"
    },
    {
      title: "2. 10 Core Business Modules",
      desc: "Modular applications covering Orders, Inventory, Production, Quality, Procurement, CRM, Finance, HR, Machines, and Analytics.",
      icon: Layers,
      color: "border-[#876DFF] bg-[#876DFF]/10 text-white"
    },
    {
      title: "3. Interconnected Workflow Engine",
      desc: "Event-driven automation rules propagating updates instantly between departments (e.g. Approved Quotation -> Sales Order -> Production Job Card -> Raw Material Reservation).",
      icon: Cpu,
      color: "border-indigo-500 bg-indigo-950/40 text-white"
    },
    {
      title: "4. Unified Operational Database",
      desc: "Single source of truth eliminating fragmented Excel spreadsheets, manual WhatsApp handoffs, and duplicate data entry.",
      icon: Database,
      color: "border-emerald-500 bg-emerald-950/40 text-white"
    },
    {
      title: "5. AI Decision & Anomaly Layer",
      desc: "Grounded intelligence for plain-language operational queries, proactive scrap anomaly detection, and daily executive summaries.",
      icon: Sparkles,
      color: "border-amber-500 bg-amber-950/40 text-white"
    },
    {
      title: "6. Security, RBAC & Governance",
      desc: "Granular Role-Based Access Control, audit logs on every critical transaction, multi-factor authentication, and end-to-end data encryption.",
      icon: Lock,
      color: "border-slate-700 bg-slate-900 text-slate-300"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold text-[#101312] uppercase tracking-widest bg-slate-200/80 px-4 py-1.5 rounded-full inline-block">
          The Operating Philosophy
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          OwnerOS — The Operating System for Complete Control
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          OwnerOS is not generic software. It is the centralized nervous system designed specifically to transition growing businesses from founder-dependent chaos to a self-managing, high-yield operation.
        </p>
      </div>

      {/* 5 Control Pillars Grid */}
      <div className="bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#BAF91A] uppercase tracking-widest">
            The 5 Control Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            SEE → CONTROL → MEASURE → DECIDE → SCALE
          </h2>
          <p className="text-xs text-slate-300">
            Every screen, module, and automation rule in OwnerOS is architected around this continuous control cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#BAF91A]/50 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-400">{pillar.num}</span>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-base">{pillar.name}</h3>
                  <p className="text-[11px] font-semibold text-[#BAF91A]">{pillar.tagline}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Layer Architecture Diagram */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#876DFF] uppercase tracking-wider">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
              The 6 Connected Layers of OwnerOS
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Click any layer to view technical specifications and data interaction flows.
          </p>
        </div>

        <div className="space-y-3">
          {architectureLayers.map((layer, idx) => {
            const IconComp = layer.icon;
            const isSelected = activeLayer === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveLayer(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#101312] text-white border-slate-800 shadow-md scale-[1.005]'
                    : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/80 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-5 h-5 shrink-0 ${isSelected ? 'text-[#BAF91A]' : 'text-slate-600'}`} />
                    <span className={`font-heading font-bold text-base ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {layer.title}
                    </span>
                  </div>
                  <span className={`text-xs font-mono font-semibold ${isSelected ? 'text-[#BAF91A]' : 'text-slate-400'}`}>
                    LAYER 0{idx + 1}
                  </span>
                </div>
                {isSelected && (
                  <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-slate-800 leading-relaxed">
                    {layer.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-slate-100 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-heading font-extrabold text-slate-900">
          Ready to see how OwnerOS connects your operations?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Schedule a personalized operational walkthrough with a SketchItUp systems architect.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => onOpenDemo()}
            className="px-6 py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Book Live Demonstration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
