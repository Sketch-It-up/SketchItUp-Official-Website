import React from 'react';
import {
  ArrowRight,
  ShoppingCart,
  Boxes,
  Sprout,
  Network,
  BarChart3,
} from 'lucide-react';
import { motion } from 'motion/react';
import { TeamStack, StackCardItem } from '@/components/unlumen-ui/team-stack';

interface MridaHeroSectionProps {
  onJumpToSection: (sectionId: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

const MRIDA_HERO_CARDS: StackCardItem[] = [
  {
    id: 'procurement',
    title: 'Procurement & Purchase',
    badge: '@procurement_flow',
    category: 'Supply Chain',
    metricLabel: 'Purchase Lifecycle',
    metricBadge: 'Structured POs',
    primaryValue: 'Supplier to Inward',
    description:
      'Manage supplier databases, purchase requisitions, quotation comparisons, PO approvals and goods receipt records.',
    gradient: 'from-[#1e1b4b] via-[#312e81] to-[#0f172a]',
    accentColor: '#BAF91A',
    accentBg: 'rgba(186, 249, 26, 0.15)',
    borderColor: 'rgba(186, 249, 26, 0.3)',
    icon: ShoppingCart,
    ctaLabel: 'View Procurement',
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock',
    badge: '@warehouse_stock',
    category: 'Operations',
    metricLabel: 'Warehouse Visibility',
    metricBadge: 'Batch & Lot',
    primaryValue: 'Multi-Warehouse',
    description:
      'Centralised SKU master, real-time stock availability, inter-warehouse transfers and reorder-level alerts.',
    gradient: 'from-[#042f2e] via-[#065f46] to-[#022c22]',
    accentColor: '#34d399',
    accentBg: 'rgba(52, 211, 153, 0.15)',
    borderColor: 'rgba(52, 211, 153, 0.3)',
    icon: Boxes,
    ctaLabel: 'View Inventory',
  },
  {
    id: 'command',
    title: 'Mrida OS Core',
    badge: '@mrida_os',
    category: 'Agribusiness Operating System',
    metricLabel: 'Unified Ecosystem',
    metricBadge: '7 Connected Modules',
    headline: 'PROCURE • STOCK • SELL • DELIVER • ANALYSE',
    description:
      'Replaces fragmented spreadsheets, disconnected apps and manual coordination with structured workflows and real-time visibility.',
    gradient: 'from-[#18181b] via-[#27272a] to-[#09090b]',
    accentColor: '#BAF91A',
    accentBg: 'rgba(186, 249, 26, 0.2)',
    borderColor: 'rgba(186, 249, 26, 0.5)',
    icon: Sprout,
    tag: 'AGRIBUSINESS OS',
    ctaLabel: 'Explore Solutions',
  },
  {
    id: 'dealers',
    title: 'Dealers & Distribution',
    badge: '@dealer_network',
    category: 'Commercial Network',
    metricLabel: 'Distribution Control',
    metricBadge: 'Territory Map',
    primaryValue: 'Orders & Dispatch',
    description:
      'Dealer pricing, territory mapping, challan generation, transporter tracking and outstanding payment visibility.',
    gradient: 'from-[#451a03] via-[#78350f] to-[#1c1917]',
    accentColor: '#fbbf24',
    accentBg: 'rgba(251, 191, 36, 0.15)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    icon: Network,
    ctaLabel: 'View Dealers',
  },
  {
    id: 'finance',
    title: 'Finance & AI Insights',
    badge: '@finance_bi',
    category: 'Finance & Intelligence',
    metricLabel: 'Decision Support',
    metricBadge: 'AI-Enabled',
    primaryValue: 'Ledgers & BI',
    description:
      'Customer receivables, supplier payables, consolidated dashboards and natural-language business intelligence.',
    gradient: 'from-[#082f49] via-[#0369a1] to-[#0c4a6e]',
    accentColor: '#38bdf8',
    accentBg: 'rgba(56, 189, 248, 0.15)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    icon: BarChart3,
    ctaLabel: 'View Intelligence',
  },
];

const HERO_QUICK_LINKS = [
  { id: 'mrida-workflow', label: 'What is Mrida OS?' },
  { id: 'mrida-problem', label: 'The Problem' },
  { id: 'mrida-modules', label: '7 Core Modules' },
  { id: 'mrida-fertilizer', label: 'Fertilizer Solution' },
  { id: 'mrida-ai', label: 'AI Intelligence' },
  { id: 'mrida-roles', label: 'User Roles' },
  { id: 'mrida-benefits', label: 'Benefits' },
  { id: 'mrida-implementation', label: 'Implementation' },
  { id: 'mrida-faq', label: 'FAQ' },
];

export const MridaHeroSection: React.FC<MridaHeroSectionProps> = ({
  onJumpToSection,
  onOpenDemo,
}) => {
  const handleCardSelect = (card: StackCardItem) => {
    if (card.id === 'procurement') {
      onJumpToSection('mrida-module-procurement');
    } else if (card.id === 'inventory') {
      onJumpToSection('mrida-module-inventory');
    } else if (card.id === 'command') {
      onJumpToSection('mrida-modules');
    } else if (card.id === 'dealers') {
      onJumpToSection('mrida-module-dealers');
    } else if (card.id === 'finance') {
      onJumpToSection('mrida-ai');
    }
  };

  return (
    <section className="relative pt-8 pb-14 md:pt-12 md:pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Animated Subtle Background Radial Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-emerald-400/20 via-[#E2FF99]/30 to-[#876DFF]/20 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand & Product Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800 mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-slate-900">Mrida OS</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600">AI-Powered Business Operating System</span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-600 hidden sm:inline">By SketchItUp Solutions</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight max-w-5xl mx-auto leading-[1.08] [text-wrap:balance]"
        >
          Your Entire Agribusiness. One Intelligent Operating System.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Mrida OS is an AI-enabled, integrated business operating system designed for{' '}
          <span className="font-semibold text-slate-900">
            agriculture, agribusiness and food-allied enterprises
          </span>{' '}
          — bringing procurement, inventory, sales, distribution, finance and business intelligence
          onto one unified platform.
        </motion.p>

        {/* TeamStack Interactive 3D Fanned Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 mb-4 max-w-5xl mx-auto px-2 relative"
        >
          <TeamStack cards={MRIDA_HERO_CARDS} onCardClick={handleCardSelect} />
        </motion.div>

        {/* Supporting Scope Copy & Core Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-8 space-y-2"
        >
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you operate a fertilizer manufacturing company, agricultural input distribution
            network, food processing unit or agri-trading enterprise, Mrida OS replaces fragmented
            spreadsheets, disconnected applications and manual coordination with structured
            workflows and intelligent decision support.
          </p>
          <p className="text-sm sm:text-base font-heading font-bold text-slate-900">
            One Operating System. Complete Business Control.
          </p>
        </motion.div>

        {/* Primary & Secondary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => onJumpToSection('mrida-modules')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-5 h-5 text-[#101312] transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => onOpenDemo('Mrida OS — Personalised Demo')}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-base font-semibold text-white bg-[#101312] hover:bg-black border border-slate-800 transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Schedule a Personalised Demo</span>
          </motion.button>
        </motion.div>

        {/* Highlights Strip (Matches Owner OS Hero 4-Column Strip) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700"
        >
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">7 Core</div>
            <div className="text-xs text-slate-500 font-medium">Connected Modules</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">9-Step Flow</div>
            <div className="text-xs text-slate-500 font-medium">Purchase to Payment</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">Multi-Site</div>
            <div className="text-xs text-slate-500 font-medium">Warehouses &amp; Dealers</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-emerald-700">AI-Enabled</div>
            <div className="text-xs text-slate-500 font-medium">Business Intelligence</div>
          </div>
        </motion.div>

        {/* Compact Section Quick-Jump Bar */}
        <nav
          aria-label="Mrida OS page sections"
          className="mt-8 pt-5 border-t border-slate-200/60 flex items-center justify-start md:justify-center gap-1.5 overflow-x-auto pb-1"
        >
          {HERO_QUICK_LINKS.map((anchor) => (
            <button
              key={anchor.id}
              type="button"
              onClick={() => onJumpToSection(anchor.id)}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {anchor.label}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default MridaHeroSection;
