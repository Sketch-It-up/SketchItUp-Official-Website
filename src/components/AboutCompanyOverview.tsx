import React from 'react';
import { 
  Building2, 
  Sparkles, 
  HelpCircle, 
  Search, 
  PenTool, 
  Cpu, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Link2, 
  Eye, 
  Maximize2, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Layers, 
  FileSpreadsheet, 
  MessageSquare, 
  AlertTriangle,
  Lightbulb,
  Check,
  GraduationCap,
  Briefcase,
  Code2,
  Flame,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutCompanyOverviewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (module?: string) => void;
}

export const AboutCompanyOverview: React.FC<AboutCompanyOverviewProps> = ({ 
  onNavigate, 
  onOpenDemo 
}) => {

  // Section B: 6 Core Owner Questions
  const ownerQuestions = [
    {
      id: "01",
      question: "What is happening in my business?",
      subtext: "Real-time visibility across active orders, machine yield, and daily dispatches.",
      icon: Eye,
      color: "#876DFF"
    },
    {
      id: "02",
      question: "Where are things getting delayed?",
      subtext: "Instant bottleneck detection across procurement, assembly, and dispatch queues.",
      icon: Clock,
      color: "#f59e0b"
    },
    {
      id: "03",
      question: "What requires my attention?",
      subtext: "Automated triage surfacing high-impact exceptions instead of constant micromanagement.",
      icon: AlertTriangle,
      color: "#ef4444"
    },
    {
      id: "04",
      question: "Where is money or inventory getting stuck?",
      subtext: "Unlocking idle working capital trapped in dead stock, scrap, and uncollected receivables.",
      icon: DollarSign,
      color: "#10b981"
    },
    {
      id: "05",
      question: "Are my teams following the right processes?",
      subtext: "Standard Operating Procedures (SOPs) baked directly into digital workflows.",
      icon: ShieldCheck,
      color: "#6366f1"
    },
    {
      id: "06",
      question: "Can my business scale without increasing complexity?",
      subtext: "Expanding order volume 3x–10x without linearly bloating management overhead.",
      icon: Maximize2,
      color: "#BAF91A"
    }
  ];

  // Section C: 5-Step Process
  const processSteps = [
    {
      num: "01",
      title: "Understand",
      tagline: "Operational Discovery",
      desc: "We study your business, processes, people and operational challenges on the ground.",
      icon: Search,
      accent: "#BAF91A",
      bgHover: "hover:border-[#BAF91A]/50"
    },
    {
      num: "02",
      title: "Design",
      tagline: "Workflow Architecture",
      desc: "We translate those processes into structured workflows and digital experiences.",
      icon: PenTool,
      accent: "#876DFF",
      bgHover: "hover:border-[#876DFF]/50"
    },
    {
      num: "03",
      title: "Build",
      tagline: "Purpose-Built Tech",
      desc: "We develop technology around the actual requirements of the business.",
      icon: Cpu,
      accent: "#38bdf8",
      bgHover: "hover:border-sky-400/50"
    },
    {
      num: "04",
      title: "Implement",
      tagline: "Team Adoption",
      desc: "We help teams adopt the system and move from fragmented processes to connected workflows.",
      icon: Users,
      accent: "#34d399",
      bgHover: "hover:border-emerald-400/50"
    },
    {
      num: "05",
      title: "Improve",
      tagline: "Continuous Optimization",
      desc: "We continuously identify opportunities to automate, measure and improve operations.",
      icon: TrendingUp,
      accent: "#f472b6",
      bgHover: "hover:border-pink-400/50"
    }
  ];

  // Section D: 5 Philosophy Pillars
  const philosophyPillars = [
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

  const approachSequence = [
    "Business Problem",
    "Process",
    "Workflow",
    "Technology",
    "Data",
    "Insight",
    "Improvement"
  ];

  return (
    <div className="space-y-20">

      {/* ========================================================================= */}
      {/* SECTION A: WHO ARE WE? */}
      {/* ========================================================================= */}
      <section id="who-are-we" className="space-y-8">
        
        {/* Eyebrow & Main Hero Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 text-xs font-mono font-bold text-slate-800 tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#101312] animate-pulse"></span>
            <span>WHO ARE WE?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Technology Built Around the Way Your Business Works.
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-medium text-[#876DFF]">
            From ready-to-use products to purpose-built systems.
          </p>
        </motion.div>

        {/* Narrative Card & Value Pillars */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm space-y-8"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              <strong className="text-slate-950 font-bold">SketchItUp Solutions</strong> is a product consultancy that helps businesses turn complex processes into simple, All-in-One integrated Operating Systems.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We work with businesses to understand how they operate, identify gaps and inefficiencies, and build technology that helps them run with greater visibility, control, and scale.
            </p>
          </div>

          {/* 3 Value Focus Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center group hover:border-[#876DFF]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#876DFF]/15 text-[#876DFF] flex items-center justify-center mx-auto">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Greater Visibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Live operational telemetry replacing end-of-day guesswork.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center group hover:border-[#BAF91A]/80 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#101312] text-[#BAF91A] flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Absolute Control</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enforced digital guardrails and automated approval workflows.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center group hover:border-emerald-400 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
                <Maximize2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-base">Seamless Scale</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expand throughput and revenue without multiplying operational friction.
              </p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION B: WHAT WE DO */}
      {/* ========================================================================= */}
      <section id="what-we-do" className="space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#876DFF]/15 border border-[#876DFF]/30 text-xs font-mono font-bold text-[#876DFF]">
            <Layers className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">WHAT WE DO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Understand. Design. Build. Implement. Improve.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            SketchItUp combines business process understanding, product thinking, and technology development to create practical systems for businesses.
          </p>
        </motion.div>

        {/* 5-Step Process Cards (Single Connected Row / Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, idx) => {
            const IconC = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-6 bg-[#101312] text-white border border-slate-800 ${step.bgHover} shadow-md hover:shadow-xl flex flex-col justify-between group transition-all relative overflow-hidden`}
              >
                <div className="space-y-4">
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded border"
                      style={{ 
                        color: step.accent, 
                        borderColor: `${step.accent}40`,
                        backgroundColor: `${step.accent}15`
                      }}
                    >
                      STAGE {step.num}
                    </span>
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-inner group-hover:scale-105 transition-transform"
                      style={{ 
                        backgroundColor: `${step.accent}15`, 
                        borderColor: `${step.accent}30`,
                        color: step.accent 
                      }}
                    >
                      <IconC className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-extrabold text-white">
                      {step.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {step.tagline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                  <Check className="w-3.5 h-3.5 text-[#BAF91A] shrink-0" />
                  <span>Practical execution</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Our Philosophy (Moved to bottom of What We Do) */}
        <div className="space-y-6 pt-6">
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
            {philosophyPillars.map((phil, pIdx) => {
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
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION C: LEADERSHIP & ENGINEERING */}
      {/* ========================================================================= */}
      <section id="leadership-engineering" className="space-y-8">
        
        {/* Main Minimalist Human Card */}
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

      {/* ========================================================================= */}
      {/* SECTION D: THE PROBLEM WE EXIST TO SOLVE */}
      {/* ========================================================================= */}
      <section id="the-problem" className="space-y-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-xs font-mono font-bold text-rose-700">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span className="uppercase tracking-wider">THE PROBLEM WE EXIST TO SOLVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Every business has a system. Not every business has a good one.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            As businesses grow, processes often become fragmented across spreadsheets, WhatsApp, disconnected software, and people-dependent workflows. This makes it difficult for owners to answer simple questions:
          </p>
        </motion.div>

        {/* 6 Questions Grid (Obsidian / High-Craft Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ownerQuestions.map((item, idx) => {
            const IconC = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 bg-[#101312] text-white border border-slate-800 hover:border-slate-700 shadow-md hover:shadow-xl flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      QUESTION {item.id}
                    </span>
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center border shadow-inner group-hover:scale-105 transition-transform"
                      style={{ 
                        backgroundColor: `${item.color}15`, 
                        borderColor: `${item.color}35`,
                        color: item.color 
                      }}
                    >
                      <IconC className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-slate-100 transition-colors leading-snug">
                    "{item.question}"
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Core Resolution Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#101312] to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAF91A]/15 border border-[#BAF91A]/30 text-[#BAF91A] text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SKETCHITUP RESOLUTION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              SketchItUp Solutions exists to solve this problem.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We believe technology should adapt to the way a business operates, not force businesses to completely change the way they work.
            </p>
          </div>

          <button
            onClick={() => onOpenDemo && onOpenDemo('Operational Gap Assessment')}
            className="px-6 py-3.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <span>Request Operational Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION D: OUR APPROACH & PHILOSOPHY */}
      {/* ========================================================================= */}
      <section id="our-approach" className="space-y-12">
        
        {/* Part 1: Our Approach (Starts with Business) */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 text-xs font-mono font-bold text-slate-800">
              <CompassIcon className="w-3.5 h-3.5 text-slate-800" />
              <span className="uppercase tracking-wider">OUR APPROACH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              We don't start with software. We start with the business.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our approach is simple, sequential, and grounded in operational reality:
            </p>
          </motion.div>

          {/* Sequential Approach Chain (Business Problem -> ... -> Improvement) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#101312] text-white border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAF91A] font-bold">
                The Grounded Engineering Pipeline
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                End-to-End Delivery
              </span>
            </div>

            {/* Steps Sequence */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {approachSequence.map((node, nIdx) => {
                const isLast = nIdx === approachSequence.length - 1;
                const isHighlight = nIdx === 0 || nIdx === 3 || isLast;
                return (
                  <React.Fragment key={nIdx}>
                    <div className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
                      isHighlight
                        ? 'bg-white/10 border-white/20 text-[#BAF91A] shadow-sm'
                        : 'bg-white/5 border-white/10 text-slate-200'
                    }`}>
                      {node}
                    </div>
                    {!isLast && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mindset Contrast Box: "What software should we sell you?" vs "How does your business actually work?" */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              
              {/* Legacy Approach */}
              <div className="p-5 rounded-2xl bg-white/5 border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>INSTEAD OF ASKING:</span>
                </div>
                <p className="text-sm font-heading font-medium text-slate-300 italic">
                  "What software should we sell you?"
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generic vendors push bloated off-the-shelf licenses that require you to overhaul your entire business culture.
                </p>
              </div>

              {/* SketchItUp Approach */}
              <div className="p-5 rounded-2xl bg-[#BAF91A]/10 border border-[#BAF91A]/30 space-y-2">
                <div className="flex items-center gap-2 text-[#BAF91A] text-xs font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#BAF91A] shrink-0" />
                  <span>WE ASK:</span>
                </div>
                <p className="text-sm font-heading font-bold text-white">
                  "How does your business actually work, and what should technology do to make it work better?"
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We engineer systems strictly around your genuine workflows, team habits, and physical operational spine.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </section>

    </div>
  );
};

// Compass icon helper for approach
function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export default AboutCompanyOverview;
