import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Target, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  Bot, 
  Cpu 
} from 'lucide-react';
import { motion } from 'motion/react';
import { AboutCompanyOverview } from '../components/AboutCompanyOverview';
import { AboutSketchItUpSection } from '../components/AboutSketchItUpSection';

interface AboutViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate = () => {}, onOpenDemo }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* 1. COMPREHENSIVE COMPANY OVERVIEW (A: WHO WE ARE, B: WHAT WE DO + PHILOSOPHY, C: PROBLEM WE SOLVE, D: APPROACH) */}
      <div className="w-full">
        <AboutCompanyOverview
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* 2. ABOUT & COMPANY VISION (FOUNDATIONAL VISION & FOUNDER STORY) */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 text-xs font-mono font-bold text-slate-800 tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-slate-800" />
            <span className="uppercase tracking-wider">ABOUT & COMPANY VISION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Reinventing How Business Owners Run Their Enterprises
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            SketchItUp Solutions LLP exists to build digital operating systems that give business owners absolute visibility, clarity, and control.
          </p>
        </div>

        {/* Founder Story & Vision (High-Craft Obsidian Container) */}
        <div className="space-y-6">
          
          {/* Main Founder Perspective Card */}
          <div className="rounded-3xl bg-[#101312] text-white border border-slate-800 p-8 sm:p-10 md:p-12 shadow-xl relative overflow-hidden group">
            {/* Subtle Ambient Background Light */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#876DFF]/15 via-[#BAF91A]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Quote className="w-5 h-5 text-[#BAF91A]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#BAF91A]">
                    Founder Perspective
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Owner-First Doctrine
                </div>
              </div>

              <div className="space-y-4 max-w-4xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                  "Software Should Work for the Business Owner, Not the Other Way Around."
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  For decades, SME business owners have been forced to choose between complex, rigid ERP systems built for corporate administrators, or chaotic scattered spreadsheets. SketchItUp was founded to build a third option — an <strong className="text-[#BAF91A] font-semibold">Owner-First Platform OS</strong> that brings every operational detail into one real-time command center.
                </p>
              </div>

              {/* Mission & Long-Term AI Vision Dual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
                
                {/* Mission Card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#BAF91A]/40 transition-all group/card">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#BAF91A]/15 border border-[#BAF91A]/30 text-[#BAF91A] flex items-center justify-center font-bold">
                      <Target className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                      Core Directive
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg group-hover/card:text-[#BAF91A] transition-colors">
                    Our Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To eliminate operational blindspots for manufacturing and SME business owners through real-time data connectivity and intelligent AI decision support.
                  </p>
                </div>

                {/* Long-Term AI Vision Card */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#876DFF]/50 transition-all group/card">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#BA99FF] flex items-center justify-center font-bold">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 uppercase">
                      Agentic Future
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-white text-lg group-hover/card:text-[#BA99FF] transition-colors">
                    Our Long-Term AI Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To evolve Owner OS into a trusted agentic AI partner that continuously monitors floor yield, predicts cash flow risks, and drafts optimal decisions for owner approval.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </motion.section>

      {/* Dual Operational Architecture (Standardized Operating Systems vs Custom Engineering) */}
      <div className="w-full">
        <AboutSketchItUpSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* Final CTA */}
      <div className="bg-[#101312] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">Partner with SketchItUp Solutions</h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Let's discuss how our vertical operating systems and bespoke engineering can transform your operations.
        </p>
        <button
          onClick={() => onOpenDemo()}
          className="px-8 py-3.5 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg cursor-pointer inline-flex items-center gap-2"
        >
          <span>Book an Executive Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

export default AboutView;
