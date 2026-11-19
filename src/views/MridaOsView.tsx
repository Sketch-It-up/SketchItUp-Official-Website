import React, { useState, useEffect } from 'react';
import {
  Sprout,
  ArrowRight,
  Check,
  ShoppingCart,
  Boxes,
  ClipboardList,
  Network,
  Wallet,
  BarChart3,
  Workflow,
  Package,
  Truck,
  Sparkles,
  BrainCircuit,
  Bell,
  FileText,
  Users,
  ShieldCheck,
  Building2,
  Warehouse,
  TrendingUp,
  Sliders,
  ChevronDown,
  Layers,
  AlertCircle,
  MessageSquare,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MRIDA_SEO,
  MRIDA_CHALLENGES,
  MRIDA_MODULES,
  FERTILIZER_AREAS,
  AI_CAPABILITIES,
  USER_ROLES,
  BUSINESS_BENEFITS,
  IMPLEMENTATION_STAGES,
  MRIDA_FAQS,
} from '../data/mridaOsData';
import { MridaHeroSection } from '../components/MridaHeroSection';
import { MridaBusinessFlowVisualizer } from '../components/MridaBusinessFlowVisualizer';

interface MridaOsViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

const MODULE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  procurement: ShoppingCart,
  inventory: Boxes,
  sales: ClipboardList,
  dealers: Network,
  finance: Wallet,
  'bi-analytics': BarChart3,
  'workflow-automation': Workflow,
};

const FERTILIZER_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'product-master': Package,
  'fertilizer-procurement': ShoppingCart,
  'warehouse-inventory': Warehouse,
  'fertilizer-sales': ClipboardList,
  'dealer-network': Network,
  'dispatch-distribution': Truck,
  'financial-commercial': Wallet,
  'management-dashboard-ai': BarChart3,
};

const AI_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'business-assistant': MessageSquare,
  'inventory-intelligence': Boxes,
  'sales-intelligence': TrendingUp,
  'financial-intelligence': Wallet,
  'alerts-recommendations': Bell,
  'management-summaries': FileText,
};

const ROLE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  owner: Building2,
  procurement: ShoppingCart,
  warehouse: Warehouse,
  sales: ClipboardList,
  dealer: Truck,
  finance: Wallet,
};

export const MridaOsView: React.FC<MridaOsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [moduleFilter, setModuleFilter] = useState<'all' | 'operations' | 'commercial' | 'intelligence'>('all');
  const [activeFertilizerArea, setActiveFertilizerArea] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sync SEO metadata (title, meta description, keywords, OpenGraph, and JSON-LD)
  useEffect(() => {
    const previousTitle = document.title;
    const descMeta = document.querySelector('meta[name="description"]');
    const previousDesc = descMeta?.getAttribute('content') || '';
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const previousOgTitle = ogTitleMeta?.getAttribute('content') || '';
    const ogDescMeta = document.querySelector('meta[property="og:description"]');
    const previousOgDesc = ogDescMeta?.getAttribute('content') || '';

    document.title = MRIDA_SEO.title;
    if (descMeta) descMeta.setAttribute('content', MRIDA_SEO.description);
    if (ogTitleMeta) ogTitleMeta.setAttribute('content', MRIDA_SEO.title);
    if (ogDescMeta) ogDescMeta.setAttribute('content', MRIDA_SEO.description);

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    const createdKeywordsMeta = !keywordsMeta;
    const previousKeywords = keywordsMeta?.getAttribute('content') || '';
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', MRIDA_SEO.keywords);

    const ldJsonScript = document.createElement('script');
    ldJsonScript.type = 'application/ld+json';
    ldJsonScript.id = 'mrida-os-jsonld';
    ldJsonScript.text = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Mrida OS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: MRIDA_SEO.description,
        creator: {
          '@type': 'Organization',
          name: 'SketchItUp Solutions',
        },
        keywords: MRIDA_SEO.keywords,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: MRIDA_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ]);
    document.head.appendChild(ldJsonScript);

    return () => {
      document.title = previousTitle;
      if (descMeta) descMeta.setAttribute('content', previousDesc);
      if (ogTitleMeta) ogTitleMeta.setAttribute('content', previousOgTitle);
      if (ogDescMeta) ogDescMeta.setAttribute('content', previousOgDesc);
      if (createdKeywordsMeta && keywordsMeta?.parentNode) {
        keywordsMeta.parentNode.removeChild(keywordsMeta);
      } else if (keywordsMeta) {
        keywordsMeta.setAttribute('content', previousKeywords);
      }
      const existingScript = document.getElementById('mrida-os-jsonld');
      if (existingScript?.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredModules =
    moduleFilter === 'all'
      ? MRIDA_MODULES
      : MRIDA_MODULES.filter((mod) => mod.category === moduleFilter);

  const displayedFertilizerAreas =
    activeFertilizerArea === 'all'
      ? FERTILIZER_AREAS
      : FERTILIZER_AREAS.filter((area) => area.id === activeFertilizerArea);

  return (
    <div className="bg-[#FAFAFA] text-[#0F172A] pb-16">
      {/* =====================================================================
          SECTION 1: MRIDA OS OPENING HERO (MIRRORS OWNER OS HERO SECTION)
      ===================================================================== */}
      <div id="mrida-hero-section">
        <MridaHeroSection
          onJumpToSection={(sectionId) => {
            if (sectionId.startsWith('mrida-module-')) {
              setModuleFilter('all');
              setTimeout(() => scrollToSection(sectionId), 30);
            } else {
              scrollToSection(sectionId);
            }
          }}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* =====================================================================
          WHAT IS MRIDA OS? — INTERACTIVE END-TO-END BUSINESS WORKFLOW
      ===================================================================== */}
      <div className="w-full pb-12">
        <MridaBusinessFlowVisualizer variant="product" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-24">
        {/* =====================================================================
            SECTION 2: THE BUSINESS PROBLEM
        ===================================================================== */}
        <section id="mrida-problem" className="scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#876DFF] tracking-wide">
              The Business Problem
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Running an Agribusiness Shouldn&apos;t Mean Managing Multiple Systems.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Growing agribusinesses often operate through spreadsheets, accounting software,
              WhatsApp conversations, manual registers and disconnected applications. This creates
              operational gaps and makes it difficult for business owners to get a complete picture
              of their organisation.
            </p>
          </div>

          {/* 6 Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MRIDA_CHALLENGES.map((challenge, idx) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-slate-300 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 tabular-nums">
                    0{idx + 1}
                  </span>
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-base font-heading font-bold text-slate-900">
                  {challenge.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Approach Contrast Callout */}
          <div className="rounded-3xl bg-[#101312] text-white p-7 sm:p-10 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-semibold text-[#BAF91A] tracking-wide">
                Our Approach
              </p>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-medium">
                Mrida OS brings these interconnected business functions together through a
                centralised operating environment, enabling teams to work with structured data while
                business owners gain a unified view of operations.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('mrida-workflow')}
              className="px-6 py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>See Connected Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* =====================================================================
            SECTION 3: THE MRIDA OS MODULES
        ===================================================================== */}
        <section id="mrida-modules" className="scroll-mt-24 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold text-emerald-700 tracking-wide">
                The Mrida OS Modules
              </p>
              <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
                Every Business Function. Connected.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mrida OS is designed as a modular operating system. Each module performs a specific
                operational function while sharing information with other business modules.
              </p>
            </div>

            {/* Interactive Module Focus Filter */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start lg:self-end">
              {[
                { id: 'all', label: 'All 7 Modules' },
                { id: 'operations', label: 'Supply & Stock' },
                { id: 'commercial', label: 'Sales, Dealers & Finance' },
                { id: 'intelligence', label: 'BI & Automation' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setModuleFilter(tab.id as typeof moduleFilter)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    moduleFilter === tab.id
                      ? 'bg-[#101312] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredModules.map((mod) => {
              const IconComp = MODULE_ICONS[mod.id] || Layers;
              return (
                <div
                  key={mod.id}
                  id={`mrida-module-${mod.id}`}
                  className="scroll-mt-28 rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-[#101312] text-[#BAF91A] flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                            <span className="font-mono font-bold text-slate-700 tabular-nums">
                              Module {mod.number}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{mod.scopeLabel}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mt-0.5">
                            {mod.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{mod.summary}</p>

                    {/* Features List */}
                    <div className="pt-3 border-t border-slate-100">
                      <div className="text-xs font-semibold text-slate-500 mb-3">
                        Key Capabilities
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                        {mod.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      Connected with shared Mrida OS data layer
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenDemo(`Mrida OS — ${mod.title}`)}
                      className="text-xs font-bold text-slate-900 hover:text-[#876DFF] transition-colors inline-flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Discuss Module</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================================
            SECTION 4: INDUSTRY-SPECIFIC SOLUTION – FERTILIZER BUSINESS
        ===================================================================== */}
        <section
          id="mrida-fertilizer"
          className="scroll-mt-24 rounded-3xl bg-[#101312] text-white p-6 sm:p-10 md:p-12 border border-slate-800 shadow-2xl space-y-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/15 via-[#BAF91A]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#BAF91A] tracking-wide">
              Industry-Specific Solution · Fertilizer Business
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Built for the Way Fertilizer Businesses Actually Operate.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mrida OS can be configured specifically for fertilizer manufacturers, wholesalers,
              distributors and agricultural input suppliers — connecting procurement, product
              inventory, sales, dealer management, distribution and financial operations into one
              integrated workflow.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you manage multiple fertilizer products, warehouses, suppliers or dealer
              networks, the platform provides structured control over your entire business
              lifecycle.
            </p>
          </div>

          {/* Interactive A–H Filter Controls */}
          <div className="relative z-10 flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
            <button
              type="button"
              onClick={() => setActiveFertilizerArea('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeFertilizerArea === 'all'
                  ? 'bg-[#BAF91A] text-[#101312]'
                  : 'bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              All 8 Areas (A–H)
            </button>
            {FERTILIZER_AREAS.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setActiveFertilizerArea(area.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeFertilizerArea === area.id
                    ? 'bg-[#BAF91A] text-[#101312]'
                    : 'bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {area.code}. {area.title.split(' & ')[0]}
              </button>
            ))}
          </div>

          {/* A–H Detailed Capability Cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedFertilizerAreas.map((area) => {
              const AreaIcon = FERTILIZER_ICONS[area.id] || Package;
              return (
                <div
                  key={area.id}
                  className="rounded-2xl p-6 bg-white/[0.04] border border-white/10 hover:border-[#BAF91A]/40 transition-colors space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#BAF91A]/15 text-[#BAF91A] flex items-center justify-center font-mono font-bold text-sm shrink-0">
                          {area.code}
                        </div>
                        <div>
                          <div className="text-[11px] text-slate-400 font-medium">
                            {area.scopeLabel}
                          </div>
                          <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                            {area.title}
                          </h3>
                        </div>
                      </div>
                      <AreaIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {area.summary}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t border-white/10">
                      {area.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Action Strip */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300">
              Modules and workflows are configured to match your specific fertilizer manufacturing,
              warehousing, or distribution setup.
            </p>
            <button
              type="button"
              onClick={() => onOpenDemo('Mrida OS — Fertilizer Business Solution')}
              className="px-6 py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request Fertilizer Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* =====================================================================
            SECTION 6: AI-POWERED BUSINESS INTELLIGENCE
        ===================================================================== */}
        <section id="mrida-ai" className="scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#876DFF] tracking-wide">
              AI-Powered Business Intelligence
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Don&apos;t Just Manage Your Business. Understand It.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mrida OS is designed to move beyond traditional data management by introducing
              AI-enabled intelligence into everyday business operations. The objective is to help
              business owners interpret operational information, identify exceptions and make
              better-informed decisions.
            </p>
          </div>

          {/* Explicit Capability Scope Distinction Legend */}
          <div className="rounded-2xl bg-white border border-slate-200/90 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-semibold text-slate-900 shrink-0">
              <BrainCircuit className="w-4 h-4 text-[#876DFF]" />
              <span>Deployment Scope Distinction:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>
                <strong className="text-emerald-700">Core / Configurable:</strong> Built on live
                structured operational data
              </span>
              <span>
                <strong className="text-[#876DFF]">Scope-Dependent AI:</strong> Configured per
                selected AI modules &amp; data readiness
              </span>
              <span>
                <strong className="text-amber-700">Configurable / Phased:</strong> Tailored
                alerting rules &amp; phased expansion
              </span>
            </div>
          </div>

          {/* 6 AI Intelligence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((cap) => {
              const CapIcon = AI_ICONS[cap.id] || Sparkles;
              return (
                <div
                  key={cap.id}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-slate-300 transition-colors flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                        <CapIcon className="w-5 h-5 text-[#876DFF]" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {cap.scopeType}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
                      {cap.number}. {cap.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                  </div>

                  {cap.exampleQuery && (
                    <div className="pt-4 border-t border-slate-100 space-y-1">
                      <div className="text-[11px] font-semibold text-slate-400">
                        Example Natural-Language Query
                      </div>
                      <p className="text-xs sm:text-[13px] font-medium text-slate-800 italic">
                        &ldquo;{cap.exampleQuery}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Transparent Implementation Scope Note */}
          <p className="text-xs text-slate-500 leading-relaxed max-w-4xl">
            Note: AI-enabled capabilities—including natural-language queries, operational summaries,
            and context-based recommendations—are scoped and configured according to each
            organisation&apos;s deployment scope, data structure, and rollout phase.
          </p>
        </section>

        {/* =====================================================================
            SECTION 7: USER ROLES & ACCESS
        ===================================================================== */}
        <section id="mrida-roles" className="scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-emerald-700 tracking-wide">
              User Roles &amp; Access
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              One Platform. Multiple Business Roles.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mrida OS brings different teams onto a common operating platform while allowing access
              based on responsibilities and permissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USER_ROLES.map((roleItem) => {
              const RoleIcon = ROLE_ICONS[roleItem.id] || Users;
              return (
                <div
                  key={roleItem.id}
                  className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#101312] text-[#BAF91A] flex items-center justify-center shrink-0">
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium text-slate-500">
                          {roleItem.focus}
                        </div>
                        <h3 className="text-base font-heading font-bold text-slate-900">
                          {roleItem.role}
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {roleItem.capabilities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-700 leading-snug"
                        >
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-slate-100 border border-slate-200/90 p-5 sm:p-6 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              One connected organisation, with role-based access, structured accountability and
              shared business visibility.
            </p>
          </div>
        </section>

        {/* =====================================================================
            SECTION 8: BUSINESS BENEFITS
        ===================================================================== */}
        <section id="mrida-benefits" className="scroll-mt-24 space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#876DFF] tracking-wide">
              Business Benefits
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight [text-wrap:balance]">
              Transform Business Complexity into Operational Clarity.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUSINESS_BENEFITS.map((benefit, idx) => (
              <div
                key={benefit.id}
                className="rounded-2xl p-6 bg-white border border-slate-200/90 space-y-2.5"
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 tabular-nums">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>0{idx + 1}</span>
                </div>
                <h3 className="text-base font-heading font-bold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================================
            SECTION 9: CUSTOMISATION & IMPLEMENTATION
        ===================================================================== */}
        <section
          id="mrida-implementation"
          className="scroll-mt-24 rounded-3xl bg-slate-900 text-white p-6 sm:p-10 md:p-12 border border-slate-800 shadow-xl space-y-10"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#BAF91A] tracking-wide">
              Customisation &amp; Implementation
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Not Another Off-the-Shelf Software. A Business Operating System Designed Around Your
              Workflows.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every agribusiness has a different operating model. A fertilizer manufacturer may
              require production and batch tracking, while a wholesale distributor may prioritise
              inventory, dealer networks and order fulfilment.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mrida OS follows a modular and configurable approach that allows businesses to select,
              customise and expand functionality according to their operational needs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-heading font-bold text-white">
              <Compass className="w-4 h-4 text-[#BAF91A]" />
              <span>Our Implementation Approach</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {IMPLEMENTATION_STAGES.map((stage) => (
                <div
                  key={stage.step}
                  className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 space-y-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-mono font-bold text-xs tabular-nums">
                    {stage.step}
                  </div>
                  <h3 className="text-base font-heading font-bold text-white">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300">
              Need proprietary integrations or bespoke extensions alongside Mrida OS?
            </p>
            <button
              type="button"
              onClick={() => onNavigate('custom-solutions')}
              className="text-xs font-bold text-[#BAF91A] hover:underline inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Explore Custom Software Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* =====================================================================
            SECTION 10: FREQUENTLY ASKED QUESTIONS
        ===================================================================== */}
        <section id="mrida-faq" className="scroll-mt-24 space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold text-[#876DFF] tracking-wide">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Common Questions About Mrida OS
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-3xl bg-white border border-slate-200/90 overflow-hidden">
            {MRIDA_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="p-5 sm:p-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base font-heading font-bold text-slate-900 group-hover:text-[#876DFF] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-slate-900' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm text-slate-600 leading-relaxed max-w-4xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================================
            SECTION 11: FINAL CALL TO ACTION
        ===================================================================== */}
        <section className="pt-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#101312] via-[#1a1333] to-[#101312] text-white rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-2xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/20 via-[#BAF91A]/20 to-[#876DFF]/20 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              <p className="text-xs font-semibold text-[#BAF91A] tracking-wide">
                Mrida OS · SketchItUp Solutions
              </p>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Ready to Bring Your Agribusiness Operations Together?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Move beyond fragmented systems and manual processes. Explore how Mrida OS can help
                your organisation connect procurement, inventory, sales, distribution and financial
                operations through one intelligent business platform.
              </p>

              <p className="text-base sm:text-lg font-heading font-bold text-[#BAF91A]">
                Let&apos;s Build an Operating System Around Your Business.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenDemo('Mrida OS — Personalised Demo')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Schedule a Personalised Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenDemo('Mrida OS — Business Requirements Discussion')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Discuss Your Business Requirements</span>
                </button>
              </div>

              {/* Supporting Text & Internal Links */}
              <div className="pt-8 border-t border-white/10 space-y-3">
                <p className="text-xs sm:text-sm text-slate-300">
                  Developed by <strong className="text-white">SketchItUp Solutions</strong> –
                  Building intelligent digital systems for modern businesses.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">
                  <button
                    type="button"
                    onClick={() => onNavigate('owner-os-home')}
                    className="hover:text-[#BAF91A] transition-colors cursor-pointer"
                  >
                    Explore Owner OS (Manufacturing &amp; Commercial) &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('solutions')}
                    className="hover:text-[#BAF91A] transition-colors cursor-pointer"
                  >
                    Compare All Products &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('custom-solutions')}
                    className="hover:text-[#BAF91A] transition-colors cursor-pointer"
                  >
                    Custom Software Solutions &rarr;
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default MridaOsView;
