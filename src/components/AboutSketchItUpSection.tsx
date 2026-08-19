import React from 'react';
import { 
  Building2, 
  Code2, 
  Compass, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSketchItUpSectionProps {
  onNavigate: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const AboutSketchItUpSection: React.FC<AboutSketchItUpSectionProps> = ({ onNavigate, onOpenDemo }) => {
  const customProcessSteps = [
    {
      phase: "01",
      name: "UNDERSTAND",
      desc: "We analyze your physical floor operations, team handoffs, bottlenecks, and existing data spreadsheets."
    },
    {
      phase: "02",
      name: "DESIGN",
      desc: "We architect custom workflows, data models, and screen interfaces built specifically around how your people work."
    },
    {
      phase: "03",
      name: "BUILD",
      desc: "Our engineering team co-develops bespoke software extensions or configures OwnerOS modules for your exact specs."
    },
    {
      phase: "04",
      name: "IMPLEMENT",
      desc: "We guide your team through hands-on deployment, data migration, and floor training with zero operational disruption."
    },
    {
      phase: "05",
      name: "IMPROVE",
      desc: "Continuous refinement based on live yield metrics, floor feedback, and business scaling milestones."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <span className="text-xs font-extrabold text-[#101312] uppercase tracking-widest bg-slate-200/80 px-4 py-1.5 rounded-full inline-block">
          About SketchItUp Solutions
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Technology Built Around Your Business.
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          SketchItUp Solutions is a product consultancy and technology company that builds a portfolio of vertical operating systems — starting with Owner OS for manufacturing, and expanding across industrial sectors with bespoke engineering.
        </p>
      </motion.div>

      {/* 2-Card Layout: Product vs Consultancy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: OwnerOS (The Flagship Product) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="p-8 rounded-3xl bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white border border-slate-800 shadow-xl flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#BAF91A] bg-[#BAF91A]/20 px-3 py-1 rounded-full border border-[#BAF91A]/30">
                Flagship Operating System
              </span>
              <Building2 className="w-6 h-6 text-[#BAF91A]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              OwnerOS Platform
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our comprehensive, modular Business Operating System built to give business owners instant visibility and control over orders, inventory, production, finance, and team workflows.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BAF91A] shrink-0" />
                <span>10 interconnected core business modules</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BAF91A] shrink-0" />
                <span>Single-screen Owner Command Center</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#BAF91A] shrink-0" />
                <span>Rapid 2–4 week onboarding with zero downtime</span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('modules')}
            className="w-full py-3.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore OwnerOS Modules</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Card 2: Custom Engineering Consultancy */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#876DFF] bg-[#876DFF]/10 px-3 py-1 rounded-full">
                Product Consultancy & Bespoke Build
              </span>
              <Code2 className="w-6 h-6 text-[#876DFF]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Custom Engineering & Consulting
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Don't force your unique business into rigid software. If your factory has specialized machinery, proprietary calculations, or custom workflows, our engineering team co-develops bespoke software around your processes.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#876DFF] shrink-0" />
                <span>Custom ERP & MES engineering for specialized industries</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#876DFF] shrink-0" />
                <span>Direct shop-floor machine & IoT hardware telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#876DFF] shrink-0" />
                <span>Legacy database migration & custom API integrations</span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('custom-solutions')}
            className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#101312] hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Learn About Custom Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>

      {/* 5-Stage Consulting Methodology Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6"
      >
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <span className="text-xs font-bold text-[#876DFF] uppercase tracking-wider">
            Our Implementation Methodology
          </span>
          <h4 className="text-xl font-heading font-bold text-slate-900">
            How We Partner With Your Business
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {customProcessSteps.map((step, idx) => (
            <motion.div 
              key={step.phase}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2"
            >
              <span className="text-xl font-mono font-extrabold text-[#876DFF]">{step.phase}</span>
              <h5 className="font-heading font-bold text-slate-900 text-sm">{step.name}</h5>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};
