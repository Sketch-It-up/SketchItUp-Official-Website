import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "motion/react";
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
  Maximize2,
  Cpu,
  Zap,
  Radio,
  BarChart3,
  Sliders
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
  gradient?: string;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  icon: React.ComponentType<{ className?: string }>;
  metricLabel?: string;
  metricBadge?: string;
  progressPercent?: number;
  tag?: string;
  ctaLabel?: string;
  features?: string[];
  sparkline?: number[];
}

export const DEFAULT_CARDS: StackCardItem[] = [
  {
    id: "orders",
    title: "Orders & Commercial Flow",
    badge: "@order_flow",
    category: "Commercial Pipeline",
    metricLabel: "Active In-Flight Orders",
    metricBadge: "14 In-Flight",
    primaryValue: "$42,850",
    headline: "QUOTE TO CASH CONVERGENCE",
    description: "Every order stage verified in real-time from customer credit limit check to technical drawing signoff.",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.15)",
    borderColor: "rgba(186, 249, 26, 0.35)",
    icon: TrendingUp,
    tag: "LIVE PIPELINE",
    ctaLabel: "View Order Flow",
    features: ["Instant drawing spec lock", "Live customer credit check", "Automated margin validation"],
    sparkline: [35, 42, 38, 55, 62, 58, 72, 85]
  },
  {
    id: "production",
    title: "Shop Floor & WIP Telemetry",
    badge: "@production_live",
    category: "Operations & Floor",
    metricLabel: "Plant OEE Yield Efficiency",
    metricBadge: "94.2% Yield",
    primaryValue: "94.2%",
    headline: "REAL-TIME MACHINE ROUTING",
    description: "Touch-screen job card progress, machine downtime capture, and live stage bottleneck alerts.",
    progressPercent: 94.2,
    accentColor: "#34d399",
    accentBg: "rgba(52, 211, 153, 0.15)",
    borderColor: "rgba(52, 211, 153, 0.35)",
    icon: Activity,
    tag: "FLOOR TELEMETRY",
    ctaLabel: "Inspect Floor Telemetry",
    features: ["QR code route cards", "Live bottleneck prediction", "Instant operator scrap alerts"],
    sparkline: [60, 65, 75, 70, 82, 88, 91, 94]
  },
  {
    id: "command",
    title: "Owner Command Center",
    badge: "@live_command",
    category: "Executive Command",
    metricLabel: "Reconciled Business Pulse",
    metricBadge: "100% In Sync",
    primaryValue: "10+ Modules",
    headline: "SEE • CONTROL • MEASURE • SCALE",
    description: "One single ledger reconciling production yield, supplier inventory, and realized gross margins with zero manual reports.",
    accentColor: "#BAF91A",
    accentBg: "rgba(186, 249, 26, 0.2)",
    borderColor: "rgba(186, 249, 26, 0.5)",
    icon: Sparkles,
    tag: "FLAGSHIP CORE",
    ctaLabel: "Open Master Console",
    features: ["Real-time single ledger", "Grounded AI Copilot queries", "Zero WhatsApp chasing"],
    sparkline: [40, 50, 65, 70, 80, 85, 95, 100]
  },
  {
    id: "inventory",
    title: "Inventory & Smart Buffer",
    badge: "@stock_buffer",
    category: "Supply Chain & PO",
    metricLabel: "Buffer Depletion Sentinel",
    metricBadge: "Auto-Reorder",
    primaryValue: "340 SKUs",
    headline: "AUTOMATED SHORTAGE PREVENTION",
    description: "Shortages automatically trigger purchase requisitions to approved vendors with lead-time sync.",
    accentColor: "#fbbf24",
    accentBg: "rgba(251, 191, 36, 0.15)",
    borderColor: "rgba(251, 191, 36, 0.35)",
    icon: AlertTriangle,
    tag: "ZERO STOCKOUTS",
    ctaLabel: "Review Requisitions",
    features: ["Multi-warehouse bin tracking", "Batch FIFO allocation", "Supplier contract rate sync"],
    sparkline: [80, 75, 70, 65, 55, 60, 78, 88]
  },
  {
    id: "finance",
    title: "Cash Flow & Ledger Sync",
    badge: "@finance_live",
    category: "Treasury & AP/AR",
    metricLabel: "Net Operating Cash Flow",
    metricBadge: "Live Reconciled",
    primaryValue: "$128,400",
    headline: "INSTANT JOB PROFITABILITY",
    description: "Dispatch generates tax invoices and syncs accounts receivable without duplicate spreadsheet entry.",
    accentColor: "#876DFF",
    accentBg: "rgba(135, 109, 255, 0.15)",
    borderColor: "rgba(135, 109, 255, 0.35)",
    icon: DollarSign,
    tag: "REAL-TIME AR/AP",
    ctaLabel: "Audit Cash Balance",
    features: ["Actual BOM margin tracking", "Automated GST & tax sync", "Customer credit aging"],
    sparkline: [50, 60, 55, 70, 85, 90, 110, 128]
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
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isFannedOut, setIsFannedOut] = useState<boolean>(defaultExpanded);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect mobile screen for optimal gesture & layout handling
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveCardIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  // Touch Swipe Drag Handler for Mobile
  const handleDragEnd = (_: any, info: PanInfo) => {
    const swipeThreshold = 45;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  const currentCard = cards[activeCardIndex] || cards[0];

  return (
    <div
      ref={containerRef}
      id="unlumen-team-stack"
      className={cn(
        "relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center select-none py-3 sm:py-6 px-1 sm:px-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. TOP SEGMENTED CONTROLLER / PILL SELECTOR (Frictionless 1-Tap Card Switcher) */}
      <div className="w-full flex items-center justify-center mb-5 overflow-x-auto pb-1.5 scrollbar-none px-2">
        <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl bg-slate-900/5 dark:bg-slate-900/40 border border-slate-200/80 backdrop-blur-xl shadow-xs">
          {cards.map((card, idx) => {
            const isSelected = activeCardIndex === idx;
            const Icon = card.icon;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setActiveCardIndex(idx)}
                className={cn(
                  "relative px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap",
                  isSelected
                    ? "text-[#101312] shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                )}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTeamStackTab"
                    className="absolute inset-0 bg-[#BAF91A] rounded-xl -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-[#101312]" : "text-slate-500")} />
                <span>{card.title.split(" ")[0]}</span>
                {card.tag && (
                  <span
                    className={cn(
                      "hidden sm:inline-block text-[9px] px-1.5 py-0.2 rounded-full font-mono uppercase",
                      isSelected
                        ? "bg-black/15 text-black"
                        : "bg-slate-200 text-slate-600"
                    )}
                  >
                    {card.tag.split(" ")[0]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN CAROUSEL SHOWCASE STAGE */}
      <div className="relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[420px]">
        {/* Subtle Ambient Backlight Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[320px] sm:w-[540px] h-[260px] sm:h-[320px] rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${currentCard.accentColor}33 0%, rgba(135,109,255,0.15) 50%, transparent 80%)`,
            }}
          />
        </div>

        {/* Carousel Cards Container */}
        <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] h-[370px] sm:h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 340,
                damping: 28,
              }}
              whileHover={!isMobile ? { y: -4, transition: { duration: 0.2 } } : {}}
              onClick={() => onCardClick && onCardClick(currentCard)}
              className={cn(
                "w-full h-full rounded-[2rem] p-5 sm:p-7 text-white cursor-pointer select-none",
                "bg-[#0B0F17]/95 backdrop-blur-2xl border transition-all duration-300",
                "shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between relative overflow-hidden group"
              )}
              style={{
                borderColor: currentCard.borderColor || "rgba(255, 255, 255, 0.12)",
                boxShadow: `0 20px 45px -15px rgba(0, 0, 0, 0.8), 0 0 25px -5px ${currentCard.accentColor}25`,
              }}
            >
              {/* Top Accent Rim Light */}
              <div
                className="absolute top-0 inset-x-8 h-[1.5px] opacity-80"
                style={{
                  background: `linear-gradient(90deg, transparent, ${currentCard.accentColor}, transparent)`,
                }}
              />

              {/* CARD TOP HEADER: Tag, Live Status, Category */}
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs font-bold shadow-inner"
                      style={{
                        backgroundColor: currentCard.accentBg,
                        color: currentCard.accentColor,
                        border: `1px solid ${currentCard.borderColor}`,
                      }}
                    >
                      <currentCard.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                        {currentCard.category || "Autonomous OS"}
                      </span>
                    </div>
                  </div>

                  {/* Live Status Pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-200">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: currentCard.accentColor }}
                    />
                    <span className="font-semibold">{currentCard.tag || "REAL-TIME"}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-tight flex items-center gap-2">
                    <span>{currentCard.title}</span>
                  </h3>
                  <span
                    className="text-xs font-mono font-medium block mt-0.5"
                    style={{ color: currentCard.accentColor }}
                  >
                    {currentCard.badge}
                  </span>
                </div>
              </div>

              {/* CARD MIDDLE: KPI Highlight & Features */}
              <div className="space-y-3 relative z-10 my-auto py-1">
                {/* Metric Readout Card */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      {currentCard.metricLabel || "Operating Velocity"}
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                      {currentCard.primaryValue || "100% In Sync"}
                    </div>
                  </div>

                  {currentCard.metricBadge && (
                    <span
                      className="px-2.5 py-1 rounded-xl text-xs font-bold font-mono border"
                      style={{
                        backgroundColor: currentCard.accentBg,
                        color: currentCard.accentColor,
                        borderColor: currentCard.borderColor,
                      }}
                    >
                      {currentCard.metricBadge}
                    </span>
                  )}
                </div>

                {/* Progress bar if yield is given */}
                {typeof currentCard.progressPercent === "number" && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                      <span>Live Floor Yield OEE</span>
                      <span style={{ color: currentCard.accentColor }}>{currentCard.progressPercent}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentCard.progressPercent}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: currentCard.accentColor }}
                      />
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  {currentCard.description}
                </p>

                {/* Micro Capabilities Chips */}
                {currentCard.features && currentCard.features.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {currentCard.features.slice(0, 3).map((feat, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#BAF91A] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* CARD FOOTER: Action Link */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-[#BAF91A]" />
                  <span>Synchronous Ledger</span>
                </div>

                <div
                  className="flex items-center gap-1.5 font-bold px-3 py-1.5 rounded-full transition-all group-hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: currentCard.accentBg,
                    color: currentCard.accentColor,
                    border: `1px solid ${currentCard.borderColor}`,
                  }}
                >
                  <span>{currentCard.ctaLabel || "Explore System"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. BOTTOM CAROUSEL CONTROLS: Arrow Buttons, Dots & Mobile Swipe Hint */}
      <div className="flex items-center justify-between w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] mt-4 px-2">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => handlePrev()}
          className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Previous offering card"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Morphing Dot Indicators */}
        <div className="flex items-center gap-1.5">
          {cards.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              onClick={() => setActiveCardIndex(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                activeCardIndex === idx
                  ? "w-7 bg-[#101312] dark:bg-[#BAF91A]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Select ${card.title}`}
            />
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => handleNext()}
          className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 shadow-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Next offering card"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Micro Mobile Swipe Helper */}
      <div className="text-center mt-2">
        <span className="text-[10px] text-slate-400 font-mono">
          {isMobile ? "← Swipe left or right to explore →" : "Click tabs or use arrow keys to inspect each platform"}
        </span>
      </div>
    </div>
  );
}

export default TeamStack;
