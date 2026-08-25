import React, { useState } from 'react';
import { 
  Search,
  Layers,
  Cpu,
  Rocket,
  TrendingUp,
  Sparkles, 
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

interface EngineeringMethodologyBannerProps {
  onOpenDemo: (prefilledModule?: string) => void;
}

export const EngineeringMethodologyBanner: React.FC<EngineeringMethodologyBannerProps> = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const customProcessSteps = [
    {
      phase: "01",
      stepBadge: "PHASE 01",
      name: "Understand",
      subtitle: "Floor Audit & Operational Discovery",
      desc: "We analyze physical floor workflows, team handoffs, inventory friction, and existing spreadsheets on-site.",
      deliverable: "Comprehensive Gap Matrix & Scope",
      icon: Search,
      accentColor: "#F59E0B",
      bgBadge: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      timeline: "Days 1–5"
    },
    {
      phase: "02",
      stepBadge: "PHASE 02",
      name: "Design",
      subtitle: "Custom Workflow & UI Blueprinting",
      desc: "We architect custom database schemas, operator screen layouts, and approval hierarchies around your people.",
      deliverable: "Interactive Prototypes & Data Model",
      icon: Layers,
      accentColor: "#876DFF",
      bgBadge: "bg-[#876DFF]/20 text-[#BA99FF] border-[#876DFF]/40",
      timeline: "Days 6–12"
    },
    {
      phase: "03",
      stepBadge: "PHASE 03",
      name: "Build",
      subtitle: "Agile Engineering & Core Integration",
      desc: "Our engineering squad configures core OS modules, connects IoT hardware/APIs, and writes bespoke logic.",
      deliverable: "Production-Grade Platform Build",
      icon: Cpu,
      accentColor: "#BAF91A",
      bgBadge: "bg-[#BAF91A]/15 text-[#BAF91A] border-[#BAF91A]/30",
      timeline: "Weeks 3–5"
    },
    {
      phase: "04",
      stepBadge: "PHASE 04",
      name: "Implement",
      subtitle: "Floor Training & Safe Deployment",
      desc: "We guide team onboarding, historical data migration, and live pilot execution with zero operational disruption.",
      deliverable: "Live Factory Go-Live & Handover",
      icon: Rocket,
      accentColor: "#10B981",
      bgBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      timeline: "Week 6"
    },
    {
      phase: "05",
      stepBadge: "PHASE 05",
      name: "Improve",
      subtitle: "Yield Telemetry & Continuous Scaling",
      desc: "Continuous refinement based on live production telemetry, executive reviews, and expansion milestones.",
      deliverable: "Quarterly ROI & Yield Reviews",
      icon: TrendingUp,
      accentColor: "#06B6D4",
      bgBadge: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Section Header (Light Page Background) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 border border-slate-300/60 text-xs font-bold text-[#101312]">
            <Sparkles className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider text-[10px]">End-to-End Partnership Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Our 5-Stage Engineering Methodology
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
            How we take your operational workflows from physical floor discovery to a custom, zero-downtime AI operating system.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
            Average Onboarding: 4–6 Weeks
          </span>
          <button
            onClick={() => onOpenDemo('Custom Discovery & Methodology')}
            className="px-4 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-1.5 cursor-pointer shadow-md self-start sm:self-auto shrink-0"
          >
            <span>Request Floor Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5-Stage Consulting Methodology Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* The 5 Connected Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {customProcessSteps.map((step, idx) => {
            const IconComp = step.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.div 
                key={step.phase}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected 
                    ? 'bg-[#181d1b] border-[#BAF91A]/60 shadow-[0_0_25px_rgba(186,249,26,0.15)] ring-1 ring-[#BAF91A]/40' 
                    : 'bg-[#141716] hover:bg-[#191d1c] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${step.bgBadge}`}>
                      {step.stepBadge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {step.timeline}
                    </span>
                  </div>

                  {/* Icon & Phase Title */}
                  <div className="flex items-center gap-3 pt-1">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{ 
                        backgroundColor: `${step.accentColor}15`,
                        borderColor: `${step.accentColor}30`,
                        color: step.accentColor 
                      }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-white text-base leading-tight group-hover:text-[#BAF91A] transition-colors">
                        {step.name}
                      </h5>
                      <span className="text-[11px] text-slate-400 block leading-tight font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Deliverable Pill */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-300">
                    <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium text-slate-200">
                      <strong className="text-slate-400 font-normal">Deliverable:</strong> {step.deliverable}
                    </span>
                  </div>
                </div>

                {/* Bottom active indicator bar */}
                {isSelected && (
                  <motion.div 
                    layoutId="activeMethodologyBar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#BAF91A] via-[#876DFF] to-emerald-400" 
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Active Stage Highlight Deep-Dive Banner */}
        <div className="rounded-2xl bg-[#101312] text-white border border-slate-800 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0"
              style={{
                backgroundColor: `${customProcessSteps[activeStep].accentColor}25`,
                color: customProcessSteps[activeStep].accentColor
              }}
            >
              {customProcessSteps[activeStep].phase}
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Active Focus: {customProcessSteps[activeStep].name} Stage — {customProcessSteps[activeStep].subtitle}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  {customProcessSteps[activeStep].timeline}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Key Deliverable: <span className="text-[#BAF91A] font-semibold">{customProcessSteps[activeStep].deliverable}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="text-[11px] text-slate-400">Step {activeStep + 1} of {customProcessSteps.length}</span>
            <div className="flex gap-1">
              {customProcessSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeStep === i ? 'bg-[#BAF91A] w-5' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
