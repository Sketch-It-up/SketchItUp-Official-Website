import React, { useState } from 'react';
import { CUSTOM_SOLUTIONS_STEPS } from '../data/modulesData';
import { 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building, 
  Send,
  Layers,
  Search,
  PenTool,
  Cpu,
  Users,
  TrendingUp,
  Check,
  Lightbulb,
  Zap,
  Link2,
  Eye,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';
import { CoreArchitectureSection } from '../components/CoreArchitectureSection';
import { OwnersRealitySection } from '../components/OwnersRealitySection';

// 5-Step Process
const PROCESS_STEPS = [
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

interface CustomSolutionsViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const CustomSolutionsView: React.FC<CustomSolutionsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    workflowDescription: '',
    estimatedUsers: '10-50 users'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          type: 'Custom Software Inquiry',
          challenge: formData.workflowDescription
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Bespoke Engineering Division
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
          Custom Operating Systems Built Around How You Work
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Standard off-the-shelf software forces businesses to change their workflows. We build bespoke software modules that integrate seamlessly into your Owner OS.
        </p>
      </div>

      {/* Process 8-Step Track */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900 text-center">
          Our 8-Step Custom Development Lifecycle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CUSTOM_SOLUTIONS_STEPS.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-2xl font-bold font-mono text-[#00BBA7]">{step.step}</span>
              <h3 className="font-heading font-bold text-slate-900 text-sm">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Architectural Engine (Unified Foundation) */}
      <section className="w-full">
        <CoreArchitectureSection onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      </section>

      {/* The Operational Reality (What Problem We Solve) */}
      <section className="w-full">
        <OwnersRealitySection onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      </section>

      {/* ========================================================================= */}
      {/* WHAT WE DO (5-Step Lifecycle & Philosophy) */}
      {/* ========================================================================= */}
      <section id="custom-solutions-what-we-do" className="space-y-8">
        
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

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => {
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

        {/* Our Philosophy */}
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
        </div>

      </section>

      {/* Inquiry Form */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#00D2B8] uppercase tracking-wider">
              Consultation & Scope Audit
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Tell Us About Your Unique Workflow Requirements
            </h2>
            <p className="text-xs text-slate-400">
              Our software architects will review your process description and present a custom engineering proposal.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-slate-900 rounded-2xl text-center space-y-3 border border-slate-800">
              <CheckCircle2 className="w-10 h-10 text-[#00D2B8] mx-auto" />
              <h3 className="text-xl font-heading font-bold text-white">Inquiry Received!</h3>
              <p className="text-xs text-slate-300">
                A Lead Solutions Architect from SketchItUp Solutions will reach out to schedule an initial technical discovery session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Mehta Auto Components"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@mehtaauto.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Describe Your Current Workflow & What You Need Built *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.workflowDescription}
                  onChange={(e) => setFormData({ ...formData, workflowDescription: e.target.value })}
                  placeholder="Describe your floor process, machine logs, custom approvals, or software integrations needed..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Custom Solution Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};

