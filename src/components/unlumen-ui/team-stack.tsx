import React, { useState, useEffect, useRef } from "react";
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
  defaultActiveIndex?: number;
}

export function TeamStack({
  cards = DEFAULT_CARDS,
  className,
  onCardClick,
  defaultExpanded = false,
  defaultActiveIndex,
}: TeamStackProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Set default active index: if provided, use it; for 3-card set (Company Home), default to 0 (OwnerOS); for 5 cards, default to 2 (Command)
  const initialIndex = defaultActiveIndex !== undefined 
    ? defaultActiveIndex 
    : (cards.length === 3 ? 0 : Math.floor(cards.length / 2));
    
  const [activeCardIndex, setActiveCardIndex] = useState<number>(initialIndex);
  const [isFannedOut, setIsFannedOut] = useState<boolean>(defaultExpanded);
  const touchStartX = useRef<number | null>(null);

  // Responsive mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Allow manual card cycling
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveCardIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  // Deterministic calculations for natural stacking deck
  const getCardTransform = (index: number, total: number) => {
    const isExpanded = isHovered || isFannedOut;
    const isSelected = activeCardIndex === index;

    // Fanned out horizontal deck layout with smooth rotation & spacing
    if (isExpanded) {
      let relativePos = 0;
      if (total === 3) {
        // For 3 cards: index 0 (OwnerOS) center, index 1 (MridaOS) left, index 2 (CustomBuilds) right
        if (index === 0) relativePos = 0;
        else if (index === 1) relativePos = -1;
        else if (index === 2) relativePos = 1;
      } else {
        const centerIndex = Math.floor(total / 2);
        relativePos = index - centerIndex;
      }

      const xSpread = isMobile ? relativePos * 65 : relativePos * 135;
      const rotateDeg = relativePos * (isMobile ? 2.5 : 4);
      const yOffset = Math.abs(relativePos) * (isMobile ? 6 : 10);

      return {
        x: xSpread,
        y: isSelected ? yOffset - 14 : yOffset,
        rotate: isSelected ? 0 : rotateDeg,
        scale: isSelected ? 1.03 : 0.96,
        zIndex: isSelected ? 40 : 20 - Math.abs(relativePos),
      };
    }

    // Specialized 3-Card Stack Layout (OwnerOS center, MridaOS left, CustomBuilds right)
    if (total === 3) {
      const leftOffset = isMobile ? -24 : -38;
      const rightOffset = isMobile ? 24 : 38;
      const rotAngle = isMobile ? 4.5 : 6;
      const yLift = isMobile ? 8 : 12;

      // When OwnerOS (index 0) is active (default):
      if (activeCardIndex === 0) {
        if (index === 0) {
          // OwnerOS centered in front
          return { x: 0, y: -10, rotate: 0, scale: 1.03, zIndex: 40 };
        } else if (index === 1) {
          // MridaOS on the left
          return { x: leftOffset, y: yLift, rotate: -rotAngle, scale: 0.97, zIndex: 20 };
        } else {
          // Custom Builds on the right
          return { x: rightOffset, y: yLift, rotate: rotAngle, scale: 0.97, zIndex: 18 };
        }
      }

      // When MridaOS (index 1) is active:
      if (activeCardIndex === 1) {
        if (index === 1) {
          // MridaOS centered in front
          return { x: 0, y: -10, rotate: 0, scale: 1.03, zIndex: 40 };
        } else if (index === 0) {
          // OwnerOS on the right
          return { x: rightOffset, y: yLift, rotate: rotAngle, scale: 0.97, zIndex: 20 };
        } else {
          // Custom Builds on the left
          return { x: leftOffset, y: yLift, rotate: -rotAngle, scale: 0.97, zIndex: 18 };
        }
      }

      // When Custom Builds (index 2) is active:
      if (activeCardIndex === 2) {
        if (index === 2) {
          // Custom Builds centered in front
          return { x: 0, y: -10, rotate: 0, scale: 1.03, zIndex: 40 };
        } else if (index === 0) {
          // OwnerOS on the left
          return { x: leftOffset, y: yLift, rotate: -rotAngle, scale: 0.97, zIndex: 20 };
        } else {
          // MridaOS on the right
          return { x: rightOffset, y: yLift, rotate: rotAngle, scale: 0.97, zIndex: 18 };
        }
      }
    }

    // Default 5-card or N-card Stacking deck
    const centerIndex = Math.floor(total / 2);
    const offsetFromCenter = index - centerIndex;
    const mobileFactor = isMobile ? 0.65 : 1;

    const stackOffsets = [
      { x: -44 * mobileFactor, y: 16 * mobileFactor, rotate: -7 * mobileFactor, zIndex: 1 },
      { x: -22 * mobileFactor, y: 8 * mobileFactor, rotate: -3.5 * mobileFactor, zIndex: 2 },
      { x: 0, y: 0, rotate: 0, zIndex: 5 }, // Center
      { x: 22 * mobileFactor, y: 8 * mobileFactor, rotate: 3.5 * mobileFactor, zIndex: 3 },
      { x: 44 * mobileFactor, y: 16 * mobileFactor, rotate: 7 * mobileFactor, zIndex: 1 },
    ];

    const defaultPose = stackOffsets[index] || {
      x: offsetFromCenter * 18 * mobileFactor,
      y: Math.abs(offsetFromCenter) * 8 * mobileFactor,
      rotate: offsetFromCenter * 4 * mobileFactor,
      zIndex: 10 - Math.abs(offsetFromCenter),
    };

    if (isSelected) {
      return {
        x: 0,
        y: -12,
        rotate: 0,
        scale: 1.03,
        zIndex: 50,
      };
    }

    return {
      x: defaultPose.x,
      y: defaultPose.y,
      rotate: defaultPose.rotate,
      scale: 0.98,
      zIndex: defaultPose.zIndex,
    };
  };

  return (
    <div
      id="unlumen-team-stack"
      className={cn(
        "relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center select-none py-3 sm:py-6 overflow-hidden sm:overflow-visible",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Interactive Controls & Mode Toggle Header */}
      <div className="flex items-center justify-between w-full max-w-xl px-3 sm:px-4 mb-3 sm:mb-4 text-xs">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-700 text-[10px] sm:text-[11px] font-semibold border border-slate-200/60 backdrop-blur-sm shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] animate-pulse"></span>
            Interactive Suite Deck
          </span>
          <span className="text-slate-400 hidden md:inline">•</span>
          <span className="text-slate-500 text-[11px] hidden md:inline">
            Tap or hover cards to explore
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setIsFannedOut(!isFannedOut)}
            className="px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Toggle fanned grid view"
          >
            <Maximize2 className="w-3 h-3 text-slate-500" />
            <span>{isFannedOut ? "Stack" : "Fan Out"}</span>
          </button>

          <div className="flex items-center gap-0.5 sm:gap-1 bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={(e) => handlePrev(e)}
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
              onClick={(e) => handleNext(e)}
              className="p-1 rounded text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Stack Container Stage */}
      <div className="relative w-full h-[370px] sm:h-[390px] md:h-[400px] flex items-center justify-center overflow-visible">
        {/* Glow backdrop behind cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[280px] sm:w-[460px] md:w-[540px] h-[200px] sm:h-[240px] bg-gradient-to-r from-[#BAF91A]/15 via-[#876DFF]/15 to-[#38bdf8]/15 blur-3xl rounded-full opacity-70" />
        </div>

        {/* Stack of Cards */}
        <div className="relative w-[285px] xs:w-[305px] sm:w-[330px] h-[330px] sm:h-[350px] flex items-center justify-center">
          {cards.map((card, index) => {
            const isSelected = activeCardIndex === index;
            const targetPose = getCardTransform(index, cards.length);
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                id={`stack-card-${card.id}`}
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
                  stiffness: 440,
                  damping: 28,
                  mass: 0.5,
                }}
                whileHover={{
                  scale: (targetPose.scale || 1) * 1.02,
                  transition: { duration: 0.15 },
                }}
                className={cn(
                  "absolute inset-0 rounded-2xl p-4 sm:p-5 text-white cursor-pointer select-none",
                  "bg-gradient-to-b shadow-2xl backdrop-blur-md flex flex-col justify-between",
                  card.gradient,
                  isSelected
                    ? "ring-2 ring-[#BAF91A] shadow-2xl shadow-black/50"
                    : "ring-1 ring-white/15 hover:ring-white/30"
                )}
                style={{
                  boxShadow: isSelected
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(186, 249, 26, 0.25)"
                    : "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Top Bar: Title, Handle badge, Tag */}
                <div className="flex items-start justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0"
                        style={{
                          backgroundColor: card.accentBg,
                          color: card.accentColor,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-100 tracking-tight font-heading truncate">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#BAF91A]/90 mt-0.5 inline-block font-medium">
                      {card.badge}
                    </span>
                  </div>

                  {card.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider bg-[#BAF91A] text-slate-950 shadow-xs shrink-0">
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="pt-2 sm:pt-3 space-y-2 sm:space-y-2.5 flex-1">
                  {/* Metric Status Header */}
                  {card.metricLabel && (
                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                      <span className="font-medium truncate">{card.metricLabel}</span>
                      {card.metricBadge && (
                        <span
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold shrink-0"
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
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading leading-none">
                      {card.primaryValue}
                    </div>
                  )}

                  {card.headline && (
                    <div className="text-xs sm:text-sm font-bold text-slate-100 font-heading leading-tight tracking-wide">
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
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="h-full rounded-full bg-emerald-400"
                        />
                      </div>
                    </div>
                  )}

                  {/* Description pill */}
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed bg-black/30 p-2 sm:p-2.5 rounded-xl border border-white/5 line-clamp-3 sm:line-clamp-none">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Pill */}
                <div className="pt-2 sm:pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] mt-auto">
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
      <div className="flex items-center justify-center gap-2 mt-2 sm:mt-4 py-1">
        {cards.map((card, idx) => (
          <button
            key={card.id}
            type="button"
            onClick={() => setActiveCardIndex(idx)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 cursor-pointer p-0",
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
