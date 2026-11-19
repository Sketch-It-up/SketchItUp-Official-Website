import React, { useState } from 'react';
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
  Check,
  Zap,
  Activity,
  Workflow,
  Radio,
  Lock,
  ChevronRight,
  Lightbulb,
  Link2,
  Users,
  Eye,
  Maximize2,
  Briefcase,
  Code2
} from 'lucide-react';
import { motion } from 'motion/react';
import { TeamStack, StackCardItem } from '../components/unlumen-ui/team-stack';
import { BusinessFlowVisualizer } from '../components/BusinessFlowVisualizer';
import { MridaBusinessFlowVisualizer } from '../components/MridaBusinessFlowVisualizer';
import { EngineeringMethodologyBanner } from '../components/EngineeringMethodologyBanner';
import { CoreArchitectureSection } from '../components/CoreArchitectureSection';
import { OwnersRealitySection } from '../components/OwnersRealitySection';
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

// 5 Philosophy Pillars
const PHILOSOPHY_PILLARS = [
  {
    title: "Simplify",
    statement: "Complex processes should become easier to execute.",
    icon: Zap,
    accent: "#BAF91A"
  },
  {
    title: "Connect",
    statement: "Information should flow across functions instead of remaining in silos.",
    icon: Link2,
    accent: "#876DFF"
  },
  {
    title: "Empower",
    statement: "Teams should have the tools to do their jobs better.",
    icon: Users,
    accent: "#38bdf8"
  },
  {
    title: "Illuminate",
    statement: "Owners should have visibility into what is happening.",
    icon: Eye,
    accent: "#fbbf24"
  },
  {
    title: "Scale",
    statement: "Systems should help businesses grow without proportionally increasing complexity.",
    icon: Maximize2,
    accent: "#34d399"
  }
];

// 3 Core Offerings Carousel Cards
const CORE_OFFERING_CARDS: StackCardItem[] = [
  {
    id: "mridaos",
    title: "MridaOS",
    badge: "@agribusiness_os",
    category: "Agribusiness & Food-Allied",
    metricLabel: "Farm-to-Factory",
    metricBadge: "Specialized Vertical",
    primaryValue: "Procure & Process",
    headline: "BUILT FOR AGRI & ALLIED VALUE CHAINS",
    description: "AI-enabled operating system specifically designed for agribusiness and food-allied businesses — from harvest procurement to processing, grading, and cold-chain dispatch.",
    gradient: "from-[#022c22] via-[#064e3b] to-[#042f2e]",
    accentColor: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.2)",
    borderColor: "rgba(52, 211, 153, 0.4)",
    icon: Sprout,
    tag: "VERTICAL OS",
    ctaLabel: "Discover MridaOS",
  },
  {
    id: "owneros",
    title: "OwnerOS",
    badge: "@commercial_os",
    category: "Commercial Business OS",
    metricLabel: "Operational Command",
    metricBadge: "Live Platform",
    primaryValue: "10+ Core Modules",
    headline: "COMMERCIAL OPERATIONS & COMMAND",
    description: "AI-enabled operating system for commercial businesses — connecting orders, inventory, production, finance, and people into one real-time command center.",
    gradient: "from-[#18181b] via-[#27272a] to-[#09090b]",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.2)",
    borderColor: "rgba(186, 249, 26, 0.4)",
    icon: LayoutDashboard,
    tag: "FLAGSHIP OS",
    ctaLabel: "Explore OwnerOS",
  },
  {
    id: "custombuilds",
    title: "Custom Builds",
    badge: "@tailor_made",
    category: "Tailor-Made Platforms",
    metricLabel: "Bespoke Engineering",
    metricBadge: "100% Tailored",
    primaryValue: "Custom Workflows",
    headline: "BESPOKE AI PLATFORM ENGINEERING",
    description: "AI-enabled, tailor-made platforms developed around specific business requirements, proprietary workflows, and specialized operational logic.",
    gradient: "from-[#1e1b4b] via-[#312e81] to-[#0f172a]",
    accentColor: "#876DFF",
    accentBg: "rgba(135, 109, 255, 0.2)",
    borderColor: "rgba(135, 109, 255, 0.4)",
    icon: Cpu,
    tag: "BESPOKE BUILDS",
    ctaLabel: "Explore Custom Builds",
  }
];

export const CompanyHomeView: React.FC<CompanyHomeViewProps> = ({ onNavigate, onOpenDemo }) => {
  const liveProduct = PRODUCTS_DATA.find((p) => p.status === 'live') || PRODUCTS_DATA[0];
  const upcomingProducts = PRODUCTS_DATA.filter((p) => p.status === 'soon');

  const handleOfferingCardSelect = (card: StackCardItem) => {
    if (card.id === 'owneros') {
      onNavigate('owner-os-home');
    } else if (card.id === 'mridaos') {
      onNavigate('mrida-os');
    } else if (card.id === 'custombuilds') {
      onNavigate('custom-solutions');
    }
  };

  return (
    <div className="space-y-12 md:space-y-14 pb-16 bg-[#FAFAFA] text-[#0F172A]">
      
      {/* 1. COMPANY HERO SECTION */}
      <section className="relative pt-10 pb-2 md:pt-14 md:pb-3 overflow-hidden">
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
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto"
          >
            The Operating System for Complete Control of Your Business.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            SketchItUp Solutions is a product consultancy firm that designs and engineers AI enabled, tailor-made software platforms. All In One Integrated platform to manage your <span className="font-semibold text-slate-900">orders, inventory, production, people, finance and operations</span>, giving business owners a complete visibility and pro-active control.
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

      {/* 2. WHAT IS AN OPERATING SYSTEM? (END-TO-END BUSINESS PROCESS FLOW) */}
      <div id="what-is-owneros-section" className="w-full">
        <BusinessFlowVisualizer onExploreModule={(modId) => onNavigate('modules', modId)} />
      </div>

      {/* 2.05 WHAT IS MRIDA OS? (AGRIBUSINESS END-TO-END WORKFLOW) */}
      <div id="what-is-mridaos-section" className="w-full">
        <MridaBusinessFlowVisualizer
          variant="homepage"
          onExploreMrida={() => onNavigate('mrida-os')}
        />
      </div>

      {/* 2.1 5-STAGE ENGINEERING METHODOLOGY (HOW WE DELIVER CUSTOM OS) */}
      <div id="engineering-methodology-section" className="w-full">
        <EngineeringMethodologyBanner onOpenDemo={onOpenDemo} />
      </div>

      {/* 3. CORE ARCHITECTURAL ENGINE (SHARED FOUNDATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreArchitectureSection 
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo} 
        />
      </section>

      {/* 4. THE OPERATIONAL REALITY (WHAT PROBLEM WE SOLVE) */}
      <div id="company-problem-section" className="w-full">
        <OwnersRealitySection 
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo} 
        />
      </div>

      {/* 4.1 OUR PHILOSOPHY */}
      <section id="home-philosophy-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
            <Lightbulb className="w-3.5 h-3.5 text-emerald-700" />
            <span className="uppercase tracking-wider">OUR PHILOSOPHY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Technology should create clarity, not complexity.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe good technology should:
          </p>
        </motion.div>

        {/* 5 Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PHILOSOPHY_PILLARS.map((phil, pIdx) => {
            const IconP = phil.icon;
            return (
              <motion.div
                key={phil.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm group-hover:scale-105 transition-transform"
                    style={{ 
                      backgroundColor: `${phil.accent}20`, 
                      borderColor: `${phil.accent}40`,
                      color: phil.accent === '#BAF91A' ? '#101312' : phil.accent 
                    }}
                  >
                    <IconP className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-slate-900 group-hover:text-[#876DFF] transition-colors">
                    {phil.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {phil.statement}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A]"></span>
                  <span>CORE TENET 0{pIdx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4.2 LEADERSHIP & ENGINEERING */}
      <section id="home-leadership-engineering-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden space-y-8"
        >
          {/* Subtle Accent Glow & Grid Dot Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#876DFF]/5 via-[#BAF91A]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Header & Sub-narrative */}
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono font-bold text-slate-800">
              <Users className="w-3.5 h-3.5 text-[#876DFF]" />
              <span className="uppercase tracking-wider">LEADERSHIP & ENGINEERING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              The Team Behind SketchItUp Solutions
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Built by people who understand business. Engineered by people who understand technology.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed pt-1 max-w-2xl">
              SketchItUp Solutions brings together experienced leadership (IIM grads) and engineering talent (IIT grads), uniting operational acumen, product thinking, and robust system design.
            </p>
          </div>

          {/* Three Refined Identity Pillars with Interactive Accent Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 relative z-10">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 hover:border-[#BAF91A]/80 hover:bg-white hover:shadow-sm transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#101312] text-[#BAF91A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Briefcase className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 uppercase">
                  Pillar 01
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                  Business Insight
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We understand supply chains, workflows, and cash flow dynamics before designing digital systems.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 hover:border-[#876DFF]/50 hover:bg-white hover:shadow-sm transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#876DFF] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 uppercase">
                  Pillar 02
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-[#876DFF] transition-colors">
                  Engineering Craft
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dependable, responsive architecture designed to scale seamlessly with your growing operations.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 hover:border-emerald-400 hover:bg-white hover:shadow-sm transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 uppercase">
                  Pillar 03
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-heading font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Skin in the Game
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct accountability for team adoption, workflow clarity, and lasting business outcomes.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Human Trust Commitment */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-slate-600 font-medium relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#876DFF]"></span>
              <span>A dedicated team businesses can rely on to build technology that actually works for them.</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">SketchItUp Solutions</span>
          </div>

        </motion.div>
      </section>

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
