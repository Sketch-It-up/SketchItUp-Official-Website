import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Sprout, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Layers, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Settings, 
  Database, 
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SolutionsViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

interface CoreOffering {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeType: 'live' | 'specialized' | 'custom';
  shortDesc: string;
  fullDesc: string;
  targetVerticals: string[];
  capabilities: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  accentBg: string;
  icon: React.ComponentType<{ className?: string }>;
  primaryActionLabel: string;
  primaryActionRoute?: string;
  secondaryActionLabel: string;
  secondaryDemoPrefill: string;
}

const CORE_OFFERINGS: CoreOffering[] = [
  {
    id: 'owner-os',
    name: 'OwnerOS',
    tagline: 'AI-Enabled Operating System for Commercial Businesses',
    badge: 'Live Production',
    badgeType: 'live',
    shortDesc: 'End-to-end operational operating system connecting sales, inventory, production, finance, and people into a single real-time command center.',
    fullDesc: 'OwnerOS is an AI-enabled business operating system designed for commercial enterprises. It eliminates fragmented spreadsheets and communication silos by synchronizing orders, multi-location inventory, shop-floor execution, and finance ledgers in real time.',
    targetVerticals: [
      'Discrete & Process Manufacturing',
      'Services & Project Contracting',
      'Multi-Store Retail Chains',
      'FMCG & Wholesale Distribution',
      'Commercial Trading Enterprises'
    ],
    capabilities: [
      '10+ interconnected modular workflows across the entire business lifecycle',
      'Single-pane Executive Command Center with live yield, scrap, and cashflow telemetry',
      'Automated floor-to-finance sync with real-time AP/AR voucher reconciliation',
      'Proactive AI Copilot providing delay warnings, anomaly detection, and natural language queries'
    ],
    metrics: [
      { label: 'Core Modules', value: '10+ Live' },
      { label: 'Visibility', value: '100% Real-Time' },
      { label: 'Deployment', value: 'Rapid Configuration' }
    ],
    accentColor: '#BAF91A',
    accentBg: 'rgba(186, 249, 26, 0.12)',
    icon: LayoutDashboard,
    primaryActionLabel: 'Explore OwnerOS Workspace',
    primaryActionRoute: 'owner-os-home',
    secondaryActionLabel: 'Book OwnerOS Demo',
    secondaryDemoPrefill: 'OwnerOS Commercial OS'
  },
  {
    id: 'mrida-os',
    name: 'MridaOS',
    tagline: 'AI-Enabled Operating System for Agribusiness & Food-Allied',
    badge: 'Specialized Vertical',
    badgeType: 'specialized',
    shortDesc: 'Purpose-built operating system engineered specifically for agribusinesses, processing mills, and food-allied supply chains.',
    fullDesc: 'MridaOS is an AI-enabled operating system specifically designed for agribusiness and food-allied businesses. Built to manage farm-to-factory procurement, crop batching, quality grading, processing yield tracking, cold chain storage, and distributor dispatches.',
    targetVerticals: [
      'Agri-Processing & Milling Units',
      'Food & Beverage Manufacturers',
      'Grain, Pulse & Oil Processors',
      'Cold Chain Storage & Packhouses',
      'Contract Farming & Procurement Networks'
    ],
    capabilities: [
      'Harvest intake batching, moisture tests, and quality grade inspection logs',
      'Yield-loss variance tracking across sorting, milling, and packaging cycles',
      'Perishable storage temperature telemetry and automated expiry buffer alerts',
      'Farmer payout ledgering, advance management, and multi-center procurement'
    ],
    metrics: [
      { label: 'Vertical Focus', value: 'Agribusiness & Food' },
      { label: 'Traceability', value: 'Farm to Factory' },
      { label: 'Stage', value: 'Architecture & Pilots' }
    ],
    accentColor: '#34d399',
    accentBg: 'rgba(52, 211, 153, 0.12)',
    icon: Sprout,
    primaryActionLabel: 'Explore Agribusiness Architecture',
    primaryActionRoute: 'product-agriculture',
    secondaryActionLabel: 'Book MridaOS Demo',
    secondaryDemoPrefill: 'MridaOS Agribusiness'
  },
  {
    id: 'custom-builds',
    name: 'Custom Builds',
    tagline: 'AI-Enabled, Tailor-Made Platforms for Specific Requirements',
    badge: 'Bespoke Engineering',
    badgeType: 'custom',
    shortDesc: 'Bespoke business platforms designed and developed around unique enterprise workflows, proprietary rules, and custom integrations.',
    fullDesc: 'Custom Builds are AI-enabled, tailor-made platforms developed around specific business requirements. Designed for organizations with proprietary operational models, specialized hardware integrations, or multi-entity structures that off-the-shelf software cannot solve.',
    targetVerticals: [
      'Proprietary Industrial Workflows',
      'Complex Multi-Entity Enterprises',
      'Niche Commercial & Service Operations',
      'Hardware, Weighbridge & IoT-Integrated Setups',
      'Legacy ERP Modernization & Middleware'
    ],
    capabilities: [
      '100% custom data modeling, business rules, and role-based access workflows',
      'Deep integrations with weighing scales, PLC/SCADA machines, legacy ERPs, and APIs',
      'Dedicated product engineering consultancy from discovery to floor deployment',
      'Custom AI agents grounded exclusively in your proprietary data and operational logic'
    ],
    metrics: [
      { label: 'Architecture', value: '100% Bespoke' },
      { label: 'Integration Scope', value: 'APIs, IoT, ERP' },
      { label: 'Engagement', value: 'Dedicated Sprints' }
    ],
    accentColor: '#876DFF',
    accentBg: 'rgba(135, 109, 255, 0.12)',
    icon: Cpu,
    primaryActionLabel: 'Explore Custom Engineering',
    primaryActionRoute: 'custom-solutions',
    secondaryActionLabel: 'Discuss Custom Platform',
    secondaryDemoPrefill: 'Custom Platform Build'
  }
];

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedOfferings = activeTab === 'all' 
    ? CORE_OFFERINGS 
    : CORE_OFFERINGS.filter(o => o.id === activeTab);

  return (
    <div className="space-y-16 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-[#0F172A]">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-200/80 text-slate-700 text-xs font-semibold backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#BAF91A]"></span>
          <span className="font-heading tracking-wide uppercase text-[11px] font-bold">SketchItUp Solutions</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-medium">3 Core Offerings</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight"
        >
          Our 3 Core Offerings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          We build AI-enabled business operating systems and tailor-made platforms designed around real operational workflows.
        </motion.p>
      </section>

      {/* 2. THE 3 CORE OFFERINGS OVERVIEW GRID */}
      <section id="products-suite-section" className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: OwnerOS (Featured Commercial Operating System) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl p-8 bg-[#101312] text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#BAF91A]/20 via-[#876DFF]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold shadow-md">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-white">
                      OwnerOS
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Commercial Business OS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LIVE PRODUCTION</span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-1.5">
                <div className="text-sm font-bold text-[#BAF91A] font-heading">
                  The Owner's Operational Command Center
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  AI-enabled operating system for commercial businesses — connecting orders, inventory, production, finance, and people into a single real-time command center.
                </p>
              </div>

              {/* Live Capabilities Feature Chips */}
              <div className="space-y-2 pt-1">
                {[
                  'Multi-stage production & live job card tracking',
                  'Smart reorder buffers & inventory sync',
                  'Single-pane executive command dashboard',
                  'Floor-to-finance automated reconciliation'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
              <div className="text-[11px] text-slate-400">
                10+ Core Modules • Real-Time
              </div>

              <button
                onClick={() => onNavigate('owner-os-home')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer group-hover:scale-105"
              >
                <span>Explore OwnerOS</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#101312]" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: MridaOS (Agribusiness & Food-Allied Operating System) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#101312] text-emerald-400 flex items-center justify-center font-bold shadow-md">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-slate-900">
                      MridaOS
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Agribusiness & Food-Allied
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  <span>SPECIALIZED VERTICAL</span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-1.5">
                <div className="text-sm font-bold text-emerald-600 font-heading">
                  Farm-to-Factory Value Chain Visibility
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI-enabled operating system specifically designed for agribusiness and food-allied businesses — from harvest procurement to processing, grading, and cold-chain dispatch.
                </p>
              </div>

              {/* Capabilities Feature Chips */}
              <div className="space-y-2 pt-1">
                {[
                  'Harvest intake batching & quality inspection',
                  'Milling yield-loss variance tracking',
                  'Perishable storage telemetry & expiry alerts',
                  'Farmer payout ledgers & procurement sync'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
              <div className="text-[11px] text-slate-400">
                Farm to Factory • Traceability
              </div>

              <button
                onClick={() => {
                  setActiveTab('mrida-os');
                  const el = document.getElementById('offerings-deep-dive');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer group-hover:scale-105"
              >
                <span>Explore MridaOS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 3: Custom Builds (Tailor-Made Platforms) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#101312] text-[#876DFF] flex items-center justify-center font-bold shadow-md">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-extrabold text-slate-900">
                      Custom Builds
                    </h3>
                    <span className="text-[11px] text-slate-500 font-mono">
                      Tailor-Made Platforms
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#876DFF] text-[11px] font-bold">
                  <span>BESPOKE BUILDS</span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-1.5">
                <div className="text-sm font-bold text-[#876DFF] font-heading">
                  Tailored Around Your Specific Requirements
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI-enabled, tailor-made platforms developed around specific business requirements, proprietary workflows, complex multi-entity setups, and custom IoT/hardware logic.
                </p>
              </div>

              {/* Capabilities Feature Chips */}
              <div className="space-y-2 pt-1">
                {[
                  '100% bespoke data architecture & rules',
                  'APIs, IoT, ERP & weighing machine sync',
                  'Role-tailored operator & executive UIs',
                  'Dedicated consultancy & sprint delivery'
                ].map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/80 rounded-xl px-3 py-2">
                    <Check className="w-3.5 h-3.5 text-[#876DFF] shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
              <div className="text-[11px] text-slate-400">
                100% Bespoke • Sprints
              </div>

              <button
                onClick={() => onNavigate('custom-solutions')}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer group-hover:scale-105"
              >
                <span>Explore Custom</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. DEEP DIVE ARCHITECTURE & CAPABILITIES BREAKDOWN */}
      <div id="offerings-deep-dive" className="pt-8 border-t border-slate-200 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#876DFF] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200 inline-block">
              In-Depth Specifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Detailed Architecture & Target Verticals
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#101312] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 3 Deep Dives
            </button>
            {CORE_OFFERINGS.map((offering) => (
              <button
                key={offering.id}
                onClick={() => setActiveTab(offering.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === offering.id
                    ? 'bg-[#101312] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{offering.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. THE THREE CORE OFFERINGS DETAILED SHOWCASE */}
      <section className="space-y-10">
        <AnimatePresence mode="wait">
          <div className="space-y-10">
            {displayedOfferings.map((offering, idx) => {
              const IconComp = offering.icon;
              const isOwnerOS = offering.id === 'owner-os';
              const isMridaOS = offering.id === 'mrida-os';

              return (
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`rounded-3xl p-8 sm:p-12 border shadow-sm transition-all relative overflow-hidden ${
                    isOwnerOS
                      ? 'bg-[#101312] text-white border-slate-800'
                      : 'bg-white text-slate-900 border-slate-200/90'
                  }`}
                >
                  {/* Subtle Background Accent */}
                  <div 
                    className="absolute top-0 right-0 w-96 h-96 blur-3xl pointer-events-none rounded-full"
                    style={{ backgroundColor: offering.accentBg }}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                    
                    {/* Left Column: Title, Description, Target Verticals & CTAs (Span 7) */}
                    <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                      <div className="space-y-4">
                        
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                            style={{ 
                              backgroundColor: isOwnerOS ? '#BAF91A' : '#101312',
                              color: isOwnerOS ? '#101312' : offering.accentColor
                            }}
                          >
                            <IconComp className="w-5 h-5" />
                          </div>

                          <div className="flex items-center gap-2">
                            <span 
                              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                                isOwnerOS 
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : isMridaOS
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-purple-50 text-[#876DFF] border border-purple-200'
                              }`}
                            >
                              {offering.badge}
                            </span>
                            <span className={`text-xs font-mono ${isOwnerOS ? 'text-slate-400' : 'text-slate-500'}`}>
                              Core Offering 0{idx + 1}
                            </span>
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <div className="space-y-1.5">
                          <h2 className={`text-3xl sm:text-4xl font-heading font-extrabold tracking-tight ${isOwnerOS ? 'text-white' : 'text-slate-900'}`}>
                            {offering.name}
                          </h2>
                          <div 
                            className="text-sm sm:text-base font-bold font-heading"
                            style={{ color: isOwnerOS ? '#BAF91A' : offering.accentColor }}
                          >
                            {offering.tagline}
                          </div>
                        </div>

                        {/* Paragraph */}
                        <p className={`text-sm sm:text-base leading-relaxed ${isOwnerOS ? 'text-slate-300' : 'text-slate-600'}`}>
                          {offering.fullDesc}
                        </p>

                        {/* Target Verticals */}
                        <div className="space-y-2 pt-2">
                          <span className={`text-xs font-bold uppercase tracking-wider block ${isOwnerOS ? 'text-slate-400' : 'text-slate-500'}`}>
                            Designed & Engineered For:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {offering.targetVerticals.map((vert, vIdx) => (
                              <span 
                                key={vIdx}
                                className={`text-xs px-3 py-1 rounded-lg font-medium ${
                                  isOwnerOS 
                                    ? 'bg-white/10 text-slate-200 border border-white/10' 
                                    : 'bg-slate-100 text-slate-800 border border-slate-200'
                                }`}
                              >
                                {vert}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                      {/* Action Buttons */}
                      <div className={`pt-6 mt-4 border-t flex flex-col sm:flex-row items-center gap-3 ${isOwnerOS ? 'border-white/10' : 'border-slate-100'}`}>
                        {offering.primaryActionRoute && (
                          <button
                            onClick={() => onNavigate(offering.primaryActionRoute!)}
                            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer group"
                          >
                            <span>{offering.primaryActionLabel}</span>
                            <ArrowRight className="w-4 h-4 text-[#101312] transition-transform group-hover:translate-x-1" />
                          </button>
                        )}

                        <button
                          onClick={() => onOpenDemo(offering.secondaryDemoPrefill)}
                          className={`w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            isOwnerOS
                              ? 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                              : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs'
                          }`}
                        >
                          <span>{offering.secondaryActionLabel}</span>
                        </button>
                      </div>

                    </div>

                    {/* Right Column: Capabilities & Metrics Box (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                      
                      {/* Key Capabilities List */}
                      <div className={`p-6 rounded-2xl border space-y-4 ${
                        isOwnerOS 
                          ? 'bg-white/5 border-white/10' 
                          : 'bg-slate-50 border-slate-200/80'
                      }`}>
                        <span className={`text-xs font-bold uppercase tracking-wider block ${isOwnerOS ? 'text-slate-300' : 'text-slate-700'}`}>
                          Key Architectural Capabilities
                        </span>

                        <div className="space-y-3">
                          {offering.capabilities.map((cap, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2.5">
                              <div 
                                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{ 
                                  backgroundColor: isOwnerOS ? '#BAF91A' : offering.accentColor,
                                  color: '#101312'
                                }}
                              >
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className={`text-xs leading-relaxed ${isOwnerOS ? 'text-slate-300' : 'text-slate-600'}`}>
                                {cap}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics Summary Strip */}
                      <div className="grid grid-cols-3 gap-2">
                        {offering.metrics.map((m, mIdx) => (
                          <div 
                            key={mIdx}
                            className={`p-3 rounded-xl border text-center ${
                              isOwnerOS 
                                ? 'bg-white/5 border-white/10' 
                                : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className={`text-xs sm:text-sm font-bold font-heading truncate ${isOwnerOS ? 'text-[#BAF91A]' : 'text-slate-900'}`}>
                              {m.value}
                            </div>
                            <div className={`text-[10px] uppercase tracking-wider font-semibold truncate ${isOwnerOS ? 'text-slate-400' : 'text-slate-500'}`}>
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </section>

      {/* 3. COMPARISON & SELECTION GUIDE */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#876DFF] bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200 inline-block">
            Offerings Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
            Which Offering Fits Your Business?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A clear comparison of our three core offerings to help you select the optimal path for your organization.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-4 font-bold text-slate-400 uppercase tracking-wider">Dimension</th>
                <th className="py-4 px-4 font-bold text-slate-900 font-heading text-sm">OwnerOS</th>
                <th className="py-4 px-4 font-bold text-slate-900 font-heading text-sm">MridaOS</th>
                <th className="py-4 px-4 font-bold text-slate-900 font-heading text-sm">Custom Builds</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">Core Purpose</td>
                <td className="py-3.5 px-4">Commercial operations across orders, inventory, manufacturing, finance & people.</td>
                <td className="py-3.5 px-4">Agribusiness, milling, batch grading, perishable storage & farm procurement.</td>
                <td className="py-3.5 px-4">Tailor-made platforms built for proprietary workflows and unique requirements.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">Target Sectors</td>
                <td className="py-3.5 px-4">Manufacturing, Services, Multi-Store Retail, FMCG Distribution, Trading.</td>
                <td className="py-3.5 px-4">Agri-Processing Mills, Food & Beverage, Cold Chains, Contract Farming.</td>
                <td className="py-3.5 px-4">Proprietary Industrial, Multi-Entity Conglomerates, Complex IoT Setups.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">Platform Status</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" /> Live Production
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Specialized Vertical
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                    Dedicated Engineering
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">AI & Copilot Scope</td>
                <td className="py-3.5 px-4">Floor yield anomaly alerts, delay warnings, scrap intelligence, cashflow copilot.</td>
                <td className="py-3.5 px-4">Moisture test anomaly models, milling yield loss alerts, perishable expiry telemetry.</td>
                <td className="py-3.5 px-4">Bespoke AI agents trained and grounded on proprietary company datasets & APIs.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">Customization Level</td>
                <td className="py-3.5 px-4">Configurable modular settings, custom fields, and role-based workflows.</td>
                <td className="py-3.5 px-4">Agri crop batch templates, grading matrices, and mill routing configurations.</td>
                <td className="py-3.5 px-4">100% tailor-made schema, business logic, integrations, and user interfaces.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-slate-800 bg-slate-50/50">Next Step</td>
                <td className="py-3.5 px-4">
                  <button 
                    onClick={() => onNavigate('owner-os-home')} 
                    className="font-bold text-slate-900 hover:text-[#876DFF] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore OwnerOS</span> &rarr;
                  </button>
                </td>
                <td className="py-3.5 px-4">
                  <button 
                    onClick={() => onOpenDemo('MridaOS Agribusiness')} 
                    className="font-bold text-slate-900 hover:text-[#876DFF] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Demo</span> &rarr;
                  </button>
                </td>
                <td className="py-3.5 px-4">
                  <button 
                    onClick={() => onNavigate('custom-solutions')} 
                    className="font-bold text-slate-900 hover:text-[#876DFF] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Explore Custom</span> &rarr;
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. HOW SKETCHITUP ENGAGES & DELIVERS */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-xl border border-slate-800 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#BAF91A]">
            Product Consultancy Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            How We Partner With Your Business
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            From process discovery to shop-floor rollout, we ensure software fits your business habits — not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="text-sm font-bold text-white font-heading">Operational Discovery</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We shadow your daily routines, identify data leaks, and map exact process handoffs from orders to invoicing.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#34d399] text-[#101312] flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="text-sm font-bold text-white font-heading">System Architecture</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We configure the core OS or engineer bespoke data models and AI agent triggers matching your operational reality.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#876DFF] text-white flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="text-sm font-bold text-white font-heading">Integration & Testing</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Live data migration, legacy software synchronization, and field validation with actual operators and managers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-sky-400 text-[#101312] flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="text-sm font-bold text-white font-heading">Rollout & Evolution</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hands-on floor adoption, executive dashboard calibration, and continuous enhancements as your business scales.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FINAL EXECUTIVE CONSULTATION CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-[#101312] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#BAF91A] uppercase tracking-widest bg-[#BAF91A]/10 px-3.5 py-1 rounded-full border border-[#BAF91A]/20 inline-block">
            Take Operational Command
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Ready to Build Your AI-Enabled Operating System?
          </h2>
          <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
            Schedule an executive architecture consultation with SketchItUp Solutions. We will analyze your workflows and demonstrate how OwnerOS, MridaOS, or a Custom Build can transform your business.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onOpenDemo('SketchItUp Core Offerings Architecture Consultation')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <span>Schedule Executive Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#101312]" />
          </button>

          <button
            onClick={() => onNavigate('owner-os-home')}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore OwnerOS Live</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default SolutionsView;
