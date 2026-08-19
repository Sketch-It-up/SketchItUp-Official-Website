import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Activity,
  Sparkles,
  AlertTriangle,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Package,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface StackCardItem {
  id: string | number;
  title: string;
  badge: string;
  category?: string;
  primaryValue?: string;
  subValue?: string;
  headline?: string;
  description: string;
  gradient: string;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  metricLabel?: string;
  metricBadge?: string;
  progressPercent?: number;
  tag?: string;
  ctaLabel?: string;
}

export const DEFAULT_CARDS: StackCardItem[] = [
  {
    id: "orders",
    title: "Orders & Sales",
    badge: "@order_flow",
    category: "Commercial Flow",
    metricLabel: "Active Orders",
    metricBadge: "14 In-Flight",
    primaryValue: "$42,850",
    description: "All stages synced from quote to dispatch",
    gradient: "from-[#1e1b4b] via-[#312e81] to-[#0f172a]",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.15)",
    borderColor: "rgba(186, 249, 26, 0.3)",
    icon: TrendingUp,
    ctaLabel: "View Order Pipeline",
  },
  {
    id: "production",
    title: "Shop Floor & WIP",
    badge: "@production_live",
    category: "Operations",
    metricLabel: "Overall Plant Yield",
    metricBadge: "92.4%",
    headline: "Job Cards Active",
    description: "Real-time machine telemetry and shift yield monitoring",
    progressPercent: 92.4,
    gradient: "from-[#042f2e] via-[#065f46] to-[#022c22]",
    accentColor: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.15)",
    borderColor: "rgba(52, 211, 153, 0.3)",
    icon: Activity,
    ctaLabel: "Inspect Floor Telemetry",
  },
  {
    id: "command",
    title: "Owner Command Center",
    badge: "@live_command",
    category: "Executive Command",
    metricLabel: "Real-Time Business Pulse",
    metricBadge: "100% In Sync",
    headline: "SEE • CONTROL • MEASURE • DECIDE",
    description: "Every critical metric reconciled live without asking department heads for manual Excel reports.",
    gradient: "from-[#18181b] via-[#27272a] to-[#09090b]",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.2)",
    borderColor: "rgba(186, 249, 26, 0.5)",
    icon: Sparkles,
    tag: "FEATURED CORE",
    ctaLabel: "Open Master Console",
  },
  {
    id: "inventory",
    title: "Inventory & Reorder",
    badge: "@stock_buffer",
    category: "Supply Chain",
    metricLabel: "Safety Stock",
    metricBadge: "Auto Alert",
    headline: "Raw Material Tracked",
    description: "Automated PO requisition generated",
    gradient: "from-[#451a03] via-[#78350f] to-[#1c1917]",
    accentColor: "#fbbf24",
    accentBg: "rgba(251, 191, 36, 0.15)",
    borderColor: "rgba(251, 191, 36, 0.3)",
    icon: AlertTriangle,
    ctaLabel: "Review Requisitions",
  },
  {
    id: "finance",
    title: "Cash & Accounting",
    badge: "@finance_live",
    category: "Treasury & AP/AR",
    metricLabel: "Net Operating Cash",
    metricBadge: "Live",
    primaryValue: "$128,400",
    description: "Invoices & AP/AR automatically reconciled",
    gradient: "from-[#082f49] via-[#0369a1] to-[#0c4a6e]",
    accentColor: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.15)",
    borderColor: "rgba(56, 189, 248, 0.3)",
    icon: DollarSign,
    ctaLabel: "Audit Cash Balance",
  },
];

interface TeamStackProps {
  cards?: StackCardItem[];
  className?: string;
  onCardClick?: (card: StackCardItem) => void;
  defaultExpanded?: boolean;
}

export function TeamStack({
  cards = DEFAULT_CARDS,
  className,
  onCardClick,
  defaultExpanded = false,
}: TeamStackProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(2); // Center card (Owner Command Center)
  const [isFannedOut, setIsFannedOut] = useState<boolean>(defaultExpanded);

  // Allow manual card cycling
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  // Deterministic calculations for natural stacking deck
  const getCardTransform = (index: number, total: number) => {
    const isExpanded = isHovered || isFannedOut;
    const centerIndex = Math.floor(total / 2);
    const offsetFromCenter = index - centerIndex;
    const isSelected = activeCardIndex === index;

    if (isExpanded) {
      // Fanned out horizontal deck layout with smooth rotation & spacing
      const xSpread = offsetFromCenter * 140; // Responsive fan out
      const rotateDeg = offsetFromCenter * 3.5;
      const yOffset = Math.abs(offsetFromCenter) * 12;

      return {
        x: xSpread,
        y: isSelected ? yOffset - 18 : yOffset,
        rotate: isSelected ? 0 : rotateDeg,
        scale: isSelected ? 1.05 : 0.98,
        zIndex: isSelected ? 40 : 20 - Math.abs(offsetFromCenter),
      };
    }

    // Stacked deck state with deterministic jitter/tilt
    // The active card is brought to top or front
    const stackOffsets = [
      { x: -36, y: 16, rotate: -8, zIndex: 1 },
      { x: -18, y: 8, rotate: -4, zIndex: 2 },
      { x: 0, y: 0, rotate: 0, zIndex: 5 }, // Center
      { x: 18, y: 8, rotate: 4, zIndex: 3 },
      { x: 36, y: 16, rotate: 8, zIndex: 1 },
    ];

    const defaultPose = stackOffsets[index] || {
      x: offsetFromCenter * 16,
      y: Math.abs(offsetFromCenter) * 8,
      rotate: offsetFromCenter * 4,
      zIndex: 10 - Math.abs(offsetFromCenter),
    };

    if (isSelected) {
      return {
        x: 0,
        y: -14,
        rotate: 0,
        scale: 1.04,
        zIndex: 50,
      };
    }

    return {
      x: defaultPose.x,
      y: defaultPose.y,
      rotate: defaultPose.rotate,
      scale: 1,
      zIndex: defaultPose.zIndex,
    };
  };

  return (
    <div
      id="unlumen-team-stack"
      className={cn(
        "relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center select-none py-6",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Controls & Mode Toggle Header */}
      <div className="flex items-center justify-between w-full max-w-2xl px-4 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-700 text-[11px] font-semibold border border-slate-200/60 backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] animate-pulse"></span>
            Interactive Stack Deck
          </span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-slate-500 text-[11px] hidden sm:inline">
            Hover to fan out or click cards to focus
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFannedOut(!isFannedOut)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Toggle fanned grid view"
          >
            <Maximize2 className="w-3 h-3 text-slate-500" />
            <span>{isFannedOut ? "Stack Deck" : "Fan Out"}</span>
          </button>

          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[10px] font-mono px-1 font-semibold text-slate-600">
              {activeCardIndex + 1}/{cards.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="p-1 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Stack Container Stage */}
      <div className="relative w-full h-[360px] sm:h-[390px] flex items-center justify-center overflow-visible">
        {/* Glow backdrop behind cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[380px] sm:w-[500px] h-[220px] bg-gradient-to-r from-[#BAF91A]/15 via-[#876DFF]/15 to-[#38bdf8]/15 blur-3xl rounded-full opacity-70" />
        </div>

        {/* Stack of Cards */}
        <div className="relative w-[280px] sm:w-[320px] h-[310px] flex items-center justify-center">
          {cards.map((card, index) => {
            const isSelected = activeCardIndex === index;
            const targetPose = getCardTransform(index, cards.length);
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                id={`stack-card-${card.id}`}
                layout
                onClick={() => {
                  setActiveCardIndex(index);
                  if (onCardClick) onCardClick(card);
                }}
                animate={{
                  x: targetPose.x,
                  y: targetPose.y,
                  rotate: targetPose.rotate,
                  scale: targetPose.scale,
                  zIndex: targetPose.zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                  mass: 0.8,
                }}
                whileHover={{
                  scale: (targetPose.scale || 1) * 1.03,
                  transition: { duration: 0.2 },
                }}
                className={cn(
                  "absolute inset-0 rounded-2xl p-5 text-white cursor-pointer select-none",
                  "bg-gradient-to-b shadow-2xl backdrop-blur-md transition-shadow",
                  card.gradient,
                  isSelected
                    ? "ring-2 ring-[#BAF91A] shadow-2xl shadow-black/40"
                    : "ring-1 ring-white/15 hover:ring-white/30"
                )}
                style={{
                  boxShadow: isSelected
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(186, 249, 26, 0.25)"
                    : "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Top Bar: Title, Handle badge, Tag */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                        style={{
                          backgroundColor: card.accentBg,
                          color: card.accentColor,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 tracking-tight font-heading">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#BAF91A]/90 mt-0.5 inline-block font-medium">
                      {card.badge}
                    </span>
                  </div>

                  {card.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#BAF91A] text-slate-950 shadow-xs">
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="pt-4 space-y-3">
                  {/* Metric Status Header */}
                  {card.metricLabel && (
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-medium">{card.metricLabel}</span>
                      {card.metricBadge && (
                        <span
                          className="px-2 py-0.5 rounded-md text-[11px] font-bold"
                          style={{
                            backgroundColor: card.accentBg,
                            color: card.accentColor,
                          }}
                        >
                          {card.metricBadge}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Primary Big Metric or Headline */}
                  {card.primaryValue && (
                    <div className="text-3xl font-extrabold text-white tracking-tight font-heading">
                      {card.primaryValue}
                    </div>
                  )}

                  {card.headline && (
                    <div className="text-base font-bold text-slate-100 font-heading leading-tight tracking-wide">
                      {card.headline}
                    </div>
                  )}

                  {/* Progress Bar if Yield is tracked */}
                  {typeof card.progressPercent === "number" && (
                    <div className="space-y-1">
                      <div className="w-full bg-black/40 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${card.progressPercent}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full rounded-full bg-emerald-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* Description pill */}
                  <p className="text-xs text-slate-300 leading-relaxed bg-black/25 p-2.5 rounded-xl border border-white/5">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Spring CTA Pill */}
                <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between pt-2 border-t border-white/10 text-[11px]">
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] inline-block animate-pulse"></span>
                    Live Sync
                  </span>
                  <div className="flex items-center gap-1 font-semibold text-slate-200 group-hover:text-white">
                    <span>{card.ctaLabel || "View Live"}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#BAF91A]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Card Selector Indicator Dots below stack */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveCardIndex(idx)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer",
              activeCardIndex === idx
                ? "w-8 bg-[#BAF91A]"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            )}
            aria-label={`Select ${card.title}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamStack;
