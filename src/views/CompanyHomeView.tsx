import React from 'react';
import { 
  PRODUCTS_DATA, 
  ProductItem 
} from '../data/productsData';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  LayoutDashboard, 
  Sprout, 
  Store, 
  HeartPulse, 
  Truck, 
  Layers, 
  Cpu, 
  Database, 
  TrendingUp, 
  Building2, 
  ArrowUpRight,
  CheckCircle2,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';
import { TeamStack, StackCardItem } from '../components/unlumen-ui/team-stack';
import { AboutSketchItUpSection } from '../components/AboutSketchItUpSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface CompanyHomeViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Sprout,
  Store,
  HeartPulse,
  Truck,
};

// 3 Core Offerings Carousel Cards
const CORE_OFFERING_CARDS: StackCardItem[] = [
  {
    id: "owneros",
    title: "OwnerOS Platform",
    badge: "@commercial_os",
    category: "Commercial Business OS",
    metricLabel: "Executive Operational Command",
    metricBadge: "Live Production",
    primaryValue: "10+ Core Modules",
    headline: "COMMERCIAL OPERATIONS & COMMAND",
    description: "AI-enabled operating system connecting orders, inventory, floor machinery, finance, and people into one real-time command center.",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.15)",
    borderColor: "rgba(186, 249, 26, 0.4)",
    icon: LayoutDashboard,
    tag: "FLAGSHIP OS",
    ctaLabel: "Explore OwnerOS",
    features: ["Real-time single ledger", "Live floor yield OEE", "Grounded AI decision copilot"],
    sparkline: [45, 52, 68, 74, 82, 89, 95, 100]
  },
  {
    id: "mridaos",
    title: "MridaOS Agri-Platform",
    badge: "@agribusiness_os",
    category: "Agribusiness & Food-Allied",
    metricLabel: "Farm-to-Factory Stream",
    metricBadge: "Specialized Vertical",
    primaryValue: "Procure & Process",
    headline: "BUILT FOR AGRI & ALLIED VALUE CHAINS",
    description: "AI-enabled OS designed for food & agri businesses — from mandi harvest procurement to grading, processing, and cold-chain dispatch.",
    accentColor: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.15)",
    borderColor: "rgba(52, 211, 153, 0.4)",
    icon: Sprout,
    tag: "VERTICAL OS",
    ctaLabel: "Discover MridaOS",
    features: ["Mandi lot weight capture", "Perishable shelf-life tracking", "Cold-chain GPS transit sync"],
    sparkline: [30, 42, 55, 68, 72, 80, 88, 92]
  },
  {
    id: "custombuilds",
    title: "Custom Platform Builds",
    badge: "@tailor_made",
    category: "Tailor-Made Platforms",
    metricLabel: "Bespoke Engineering",
    metricBadge: "100% Tailored",
    primaryValue: "Custom Workflows",
    headline: "BESPOKE AI PLATFORM ENGINEERING",
    description: "AI-enabled, tailor-made platforms developed around specific enterprise workflows, proprietary floor logic, and unique trade rules.",
    accentColor: "#876DFF",
    accentBg: "rgba(135, 109, 255, 0.15)",
    borderColor: "rgba(135, 109, 255, 0.4)",
    icon: Cpu,
    tag: "BESPOKE BUILDS",
    ctaLabel: "Explore Custom Builds",
    features: ["Proprietary floor logic", "Enterprise system bridges", "Dedicated cloud architecture"],
    sparkline: [20, 35, 50, 65, 80, 90, 95, 100]
  }
];

export const CompanyHomeView: React.FC<CompanyHomeViewProps> = ({ onNavigate, onOpenDemo }) => {
  const liveProduct = PRODUCTS_DATA.find((p) => p.status === 'live') || PRODUCTS_DATA[0];
  const upcomingProducts = PRODUCTS_DATA.filter((p) => p.status === 'soon');

  const handleOfferingCardSelect = (card: StackCardItem) => {
    if (card.id === 'owneros') {
      onNavigate('owner-os-home');
    } else if (card.id === 'mridaos') {
      onNavigate('solutions');
    } else if (card.id === 'custombuilds') {
      onNavigate('custom-solutions');
    }
  };

  return (
    <div className="space-y-20 pb-16 bg-[#FAFAFA] text-[#0F172A]">
      
      {/* 1. COMPANY HERO SECTION */}
      <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#BAF91A]/15 via-[#876DFF]/15 to-[#38bdf8]/15 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          {/* Company Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-200/80 text-slate-700 text-xs font-semibold backdrop-blur-sm shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-pulse"></span>
            <span className="font-heading tracking-wide uppercase text-[11px] font-bold">SketchItUp Solutions</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">Product Consultancy & Business Operating Systems</span>
          </motion.div>

          {/* Main H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.08] max-w-4xl mx-auto px-1"
          >
            The Operating System for Complete Control of Your Business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2"
          >
            SketchItUp Solutions is a product consultancy firm that designs and engineers AI-enabled, tailor-made platforms. One connected platform to manage your <span className="font-semibold text-slate-900">orders, inventory, production, people, finance and operations</span> — giving business owners complete visibility and control.
          </motion.p>

          {/* Graphic Carousel for 3 Core Offerings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 mb-2 max-w-5xl mx-auto px-2 relative"
          >
            <TeamStack
              cards={CORE_OFFERING_CARDS}
              onCardClick={handleOfferingCardSelect}
            />
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate('owner-os-home')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#BAF91A]/20 hover:shadow-xl cursor-pointer group"
            >
              <span>Explore OwnerOS</span>
              <ArrowRight className="w-4 h-4 text-[#101312] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onOpenDemo('SketchItUp Solutions Executive Consultation')}
              className="w-full sm:w-auto px-7 py-4 rounded-full text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Book a Consultation</span>
            </button>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>AI-Enabled Workflow Engines</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-Time Executive Visibility</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tailor-Made Digital Architectures</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. PRODUCT PORTFOLIO GRID (THE SUITE) */}
      <section id="products-suite-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#876DFF] uppercase tracking-widest bg-purple-50 px-3.5 py-1 rounded-full border border-purple-200 inline-block">
              Vertical Operating Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              The SketchItUp Product Suite
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Purpose-built operating systems for vertical industry workflows, sharing our centralized core engine and executive command philosophy.
          </p>
        </div>

        {/* The 5-Card Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Owner OS (Featured Flagship Live Anchor Product - Span 7 on desktop) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#101312] text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Background accent glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#BAF91A]/20 via-[#876DFF]/15 to-transparent blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header Badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold shadow-md">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-extrabold text-white">
                      {liveProduct.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {liveProduct.vertical}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LIVE PRODUCTION</span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-2">
                <div className="text-base font-bold text-[#BAF91A] font-heading">
                  {liveProduct.tagline}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {liveProduct.shortDesc}
                </p>
              </div>

              {/* Live Capabilities Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {liveProduct.capabilities?.map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                    <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="text-xs text-slate-400 flex items-center gap-2">
                <span className="font-semibold text-white">14 Modular Apps</span>
                <span>•</span>
                <span>Real-Time Yield Telemetry</span>
              </div>

              <button
                onClick={() => onNavigate('owner-os-home')}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer group-hover:scale-105"
              >
                <span>Enter Owner OS Workspace</span>
                <ArrowRight className="w-4 h-4 text-[#101312]" />
              </button>
            </div>
          </motion.div>

          {/* Cards 2 & 3: Agriculture and Retail (Span 5 on desktop) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {upcomingProducts.slice(0, 2).map((prod) => {
              const IconComp = ICON_MAP[prod.icon] || Layers;
              return (
                <motion.div
                  key={prod.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-3xl p-6 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: '#101312' }}
                        >
                          <IconComp className="w-4 h-4 text-slate-200" />
                        </div>
                        <div>
                          <h3 className="text-lg font-heading font-bold text-slate-900">
                            {prod.name}
                          </h3>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {prod.vertical}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                        Soon
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 italic">
                      In Architecture
                    </span>
                    <button
                      onClick={() => onNavigate(prod.route)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-[#876DFF] transition-colors cursor-pointer"
                    >
                      <span>Join Pilot Waitlist</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cards 4 & 5: Healthcare and Logistics (Bottom row, 2 equal columns on desktop) */}
          {upcomingProducts.slice(2, 4).map((prod) => {
            const IconComp = ICON_MAP[prod.icon] || Layers;
            return (
              <motion.div
                key={prod.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="lg:col-span-6 rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#101312] flex items-center justify-center text-slate-200">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-slate-900">
                          {prod.name}
                        </h3>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {prod.vertical}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                      Soon
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-700">
                    {prod.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 italic">
                    Specifications Drafting
                  </span>
                  <button
                    onClick={() => onNavigate(prod.route)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-[#876DFF] transition-colors cursor-pointer"
                  >
                    <span>View Planned Specs & Waitlist</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* 3. CORE ARCHITECTURAL ENGINE (SHARED FOUNDATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 md:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#876DFF]">
              Unified Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              The Architecture Powering Every SketchItUp OS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Whether on the shop floor or in distribution centers, every product in our suite is engineered with four core primitives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#101312] text-[#BAF91A] flex items-center justify-center text-xs font-bold">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Owner-First UI</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed specifically for the executive decision-maker to see total operations without manual reports.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#101312] text-indigo-400 flex items-center justify-center text-xs font-bold">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Live Single Ledger</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Orders, stock levels, machine outputs, and accounts all update one synchronous relational truth.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#101312] text-[#876DFF] flex items-center justify-center text-xs font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Event Triggers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workflows advance automatically between departments when quality criteria and job cards are marked.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#101312] text-emerald-400 flex items-center justify-center text-xs font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">Grounded AI Copilot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plain-English operational questions, proactive scrap anomaly alerts, and daily executive summaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SKETCHITUP SOLUTIONS SECTION (COMPANY LEVEL) */}
      <div id="company-about-section">
        <AboutSketchItUpSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* 5. FINAL CALL TO ACTION */}
      <div id="company-final-cta-section">
        <FinalCtaSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

    </div>
  );
};
export default CompanyHomeView;
