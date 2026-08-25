import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Activity,
  Sparkles,
  AlertTriangle,
  DollarSign,
  ArrowUpRight,
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
  defaultExpanded = true,
}: TeamStackProps) {
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const centerCardIdx = Math.floor(cards.length / 2);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(centerCardIdx);
  const [isFannedOut, setIsFannedOut] = useState<boolean>(defaultExpanded);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveCardIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  // Smooth, non-glitching card layout and hover transformation
  const getCardTransform = (index: number, total: number) => {
    const centerIndex = Math.floor(total / 2);
    const offsetFromCenter = index - centerIndex;
    const isSelected = activeCardIndex === index;
    const isHovered = hoveredCardIndex === index;

    // Responsive screen width thresholds
    const isDesktop = screenWidth >= 1024;
    const isTablet = screenWidth >= 768 && screenWidth < 1024;
    const isMobile = screenWidth < 640;

    // Expand spacing when hovering over container or cards
    const hoverExpansion = isContainerHovered || hoveredCardIndex !== null ? 1.12 : 1.0;

    if (isFannedOut || defaultExpanded) {
      if (total === 3) {
        if (isMobile) {
          // Mobile stack with slight spread on hover
          const mobileBaseX = offsetFromCenter * (isContainerHovered ? 40 : 30);
          const mobileRotate = isHovered ? 0 : offsetFromCenter * 4;
          const mobileY = isHovered ? -16 : isSelected ? -8 : 6;
          const mobileScale = isHovered ? 1.04 : isSelected ? 1.0 : 0.94;
          const mobileZ = isHovered ? 60 : isSelected ? 40 : 20 - Math.abs(offsetFromCenter);

          return {
            x: mobileBaseX,
            y: mobileY,
            rotate: mobileRotate,
            scale: mobileScale,
            zIndex: mobileZ,
          };
        }

        // Desktop / Tablet base distances with smooth span-out
        const baseDistance = isDesktop ? 300 : isTablet ? 220 : 165;
        const targetSpread = baseDistance * hoverExpansion;

        if (offsetFromCenter === -1) {
          // Left Card (e.g., MridaOS)
          return {
            x: isHovered ? -targetSpread - 8 : -targetSpread,
            y: isHovered ? -18 : isSelected ? -12 : 10,
            rotate: isHovered ? 0 : isSelected ? -2 : -4.5,
            scale: isHovered ? 1.05 : isSelected ? 1.03 : 0.96,
            zIndex: isHovered ? 60 : isSelected ? 45 : 25,
          };
        } else if (offsetFromCenter === 0) {
          // Center Card (e.g., OwnerOS)
          return {
            x: 0,
            y: isHovered ? -22 : isSelected ? -16 : -8,
            rotate: 0,
            scale: isHovered ? 1.07 : isSelected ? 1.05 : 1.01,
            zIndex: isHovered ? 60 : isSelected ? 50 : 35,
          };
        } else {
          // Right Card (e.g., Custom Builds)
          return {
            x: isHovered ? targetSpread + 8 : targetSpread,
            y: isHovered ? -18 : isSelected ? -12 : 10,
            rotate: isHovered ? 0 : isSelected ? 2 : 4.5,
            scale: isHovered ? 1.05 : isSelected ? 1.03 : 0.96,
            zIndex: isHovered ? 60 : isSelected ? 45 : 25,
          };
        }
      }

      // Dynamic fan out for N cards
      const baseSpacing = isMobile ? 32 : isDesktop ? 270 : 185;
      const xSpread = offsetFromCenter * baseSpacing * hoverExpansion;
      const rotateDeg = isHovered ? 0 : offsetFromCenter * (isMobile ? 3 : 4);
      const yOffset = Math.abs(offsetFromCenter) * (isMobile ? 6 : 12);

      return {
        x: xSpread,
        y: isHovered ? yOffset - 20 : isSelected ? yOffset - 14 : yOffset,
        rotate: rotateDeg,
        scale: isHovered ? 1.06 : isSelected ? 1.04 : 0.96,
        zIndex: isHovered ? 60 : isSelected ? 50 : 25 - Math.abs(offsetFromCenter),
      };
    }

    // Compact Stacked Deck fallback
    const stackOffsets = [
      { x: -36, y: 16, rotate: -8, zIndex: 1 },
      { x: -18, y: 8, rotate: -4, zIndex: 2 },
      { x: 0, y: 0, rotate: 0, zIndex: 5 },
      { x: 18, y: 8, rotate: 4, zIndex: 3 },
      { x: 36, y: 16, rotate: 8, zIndex: 1 },
    ];

    const defaultPose = stackOffsets[index] || {
      x: offsetFromCenter * 18,
      y: Math.abs(offsetFromCenter) * 8,
      rotate: offsetFromCenter * 4,
      zIndex: 10 - Math.abs(offsetFromCenter),
    };

    if (isHovered || isSelected) {
      return {
        x: 0,
        y: -16,
        rotate: 0,
        scale: 1.05,
        zIndex: 60,
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
        "relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center select-none py-4 sm:py-6 overflow-hidden sm:overflow-visible",
        className
      )}
      onMouseEnter={() => setIsContainerHovered(true)}
      onMouseLeave={() => {
        setIsContainerHovered(false);
        setHoveredCardIndex(null);
      }}
    >
      {/* Interactive Controls & Mode Toggle Header */}
      <div className="flex items-center justify-between w-full max-w-3xl px-4 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 text-slate-700 text-[11px] font-semibold border border-slate-200/60 backdrop-blur-sm shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] animate-pulse"></span>
            Fanned Offerings Showcase
          </span>
          <span className="text-slate-400 hidden sm:inline">•</span>
          <span className="text-slate-500 text-[11px] hidden sm:inline">
            Hover to span out • Click to focus
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFannedOut(!isFannedOut)}
            className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Toggle card layout"
          >
            <Maximize2 className="w-3 h-3 text-slate-500" />
            <span>{isFannedOut ? "Keep Fanned" : "Fan Out"}</span>
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
      <div className="relative w-full h-[390px] sm:h-[420px] flex items-center justify-center overflow-visible">
        {/* Glow backdrop behind cards */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[320px] sm:w-[600px] lg:w-[850px] h-[240px] bg-gradient-to-r from-[#34d399]/15 via-[#BAF91A]/20 to-[#876DFF]/15 blur-3xl rounded-full opacity-80" />
        </div>

        {/* Stack of Cards */}
        <div className="relative w-[285px] sm:w-[320px] md:w-[345px] h-[350px] sm:h-[370px] flex items-center justify-center">
          {cards.map((card, index) => {
            const isSelected = activeCardIndex === index;
            const isHovered = hoveredCardIndex === index;
            const targetPose = getCardTransform(index, cards.length);
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                id={`stack-card-${card.id}`}
                layout="position"
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex((prev) => (prev === index ? null : prev))}
                onClick={() => {
                  if (isSelected) {
                    if (onCardClick) onCardClick(card);
                  } else {
                    setActiveCardIndex(index);
                  }
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
                  stiffness: 240,
                  damping: 22,
                  mass: 0.8,
                }}
                className={cn(
                  "absolute inset-0 rounded-2xl p-5 text-white cursor-pointer select-none",
                  "bg-gradient-to-b shadow-2xl backdrop-blur-md flex flex-col justify-between",
                  card.gradient,
                  isSelected || isHovered
                    ? "ring-2 ring-[#BAF91A] shadow-2xl shadow-black/70"
                    : "ring-1 ring-white/15"
                )}
                style={{
                  boxShadow: isSelected || isHovered
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 25px rgba(186, 249, 26, 0.3)"
                    : "0 15px 35px -10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Top Bar: Title, Handle badge, Tag */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-white/10 shrink-0">
                  <div>
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
                      <h3 className="text-sm font-bold text-slate-100 tracking-tight font-heading">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-[#BAF91A]/90 mt-0.5 inline-block font-medium">
                      {card.badge}
                    </span>
                  </div>

                  {card.tag && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-[#BAF91A] text-slate-950 shadow-xs shrink-0">
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="py-2.5 space-y-2 flex-1 flex flex-col justify-center">
                  {/* Metric Status Header */}
                  {card.metricLabel && (
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-medium text-[11px]">{card.metricLabel}</span>
                      {card.metricBadge && (
                        <span
                          className="px-2 py-0.5 rounded-md text-[10px] font-bold"
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
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-heading leading-tight">
                      {card.primaryValue}
                    </div>
                  )}

                  {card.headline && (
                    <div className="text-[10px] sm:text-xs font-bold text-slate-200 font-heading leading-tight tracking-wide uppercase">
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
                  <p className="text-[11px] text-slate-300 leading-relaxed bg-black/35 p-2.5 rounded-xl border border-white/5 line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Spring CTA Pill */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] shrink-0">
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] inline-block animate-pulse"></span>
                    Live Sync
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onCardClick) onCardClick(card);
                    }}
                    className="flex items-center gap-1 font-semibold text-[#BAF91A] hover:text-[#d0ff48] transition-colors cursor-pointer"
                  >
                    <span>{card.ctaLabel || "View Live"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#BAF91A]" />
                  </button>
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
