import React, { useState } from 'react';
import { ModuleItem, MODULES_DATA } from '../data/modulesData';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  ShieldCheck, 
  AlertCircle,
  Play,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModuleDetailViewProps {
  moduleItem: ModuleItem;
  onBack: () => void;
  onNavigateToModule: (moduleId: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const ModuleDetailView: React.FC<ModuleDetailViewProps> = ({
  moduleItem,
  onBack,
  onNavigateToModule,
  onOpenDemo
}) => {
  const [techOverviewOpen, setTechOverviewOpen] = useState(false);
  const [activeScreenTab, setActiveScreenTab] = useState<'screen' | 'video'>('screen');

  // Find related module objects
  const relatedModules = MODULES_DATA.filter((m) =>
    moduleItem.relatedModuleIds.includes(m.id)
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12"
    >
      
      {/* Back Button */}
      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All 14 Modules</span>
        </motion.button>

        <span className="text-xs font-mono text-[#876DFF] uppercase tracking-wider font-semibold bg-[#876DFF]/10 px-3 py-1 rounded-full border border-[#876DFF]/20">
          Module Specification | {moduleItem.group}
        </span>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="max-w-3xl">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#BAF91A] bg-[#BAF91A]/15 uppercase tracking-wider border border-[#BAF91A]/30">
            SketchItUp Owner OS Module
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mt-3">
            {moduleItem.name}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            {moduleItem.fullDesc}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onOpenDemo(moduleItem.name)}
              className="px-6 py-3.5 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Request {moduleItem.name} Demo</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* The Specific Business Problem Solved */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
            <AlertCircle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              The Specific Business Problem Solved
            </span>
            <h3 className="text-xl font-heading font-bold text-slate-900 mt-1">
              "{moduleItem.businessProblem}"
            </h3>
            <p className="text-xs text-amber-900 mt-2">
              SketchItUp Owner OS solves this by replacing disconnected spreadsheets with real-time automated workflow state transitions.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Key Capabilities & Command Center KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Capabilities */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm"
        >
          <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#876DFF]" />
            <span>Key Module Capabilities</span>
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {moduleItem.capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#876DFF] shrink-0 mt-2"></span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Command Center KPIs Fed */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-sm flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#BAF91A]" />
              <span>KPIs Fed into Command Center</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              This module automatically updates these executive metrics on the owner's primary dashboard:
            </p>
            <div className="space-y-2">
              {moduleItem.commandCenterKPIs.map((kpi, idx) => (
                <div key={idx} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80 text-sm font-semibold text-emerald-300 flex items-center justify-between">
                  <span>{kpi}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#BAF91A]/20 text-[#BAF91A] font-mono">Live Stream</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6">
            <span className="text-xs text-slate-400">Zero manual reporting required.</span>
          </div>
        </motion.div>

      </div>

      {/* Module Operational Workflow */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm"
      >
        <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">
          Operational Step Workflow
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {moduleItem.workflowSteps.map((wf, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative"
            >
              <span className="text-2xl font-bold font-mono text-[#876DFF] block">{wf.step}</span>
              <h4 className="font-heading font-bold text-slate-900 text-base mt-2">{wf.label}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{wf.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Screen / UI Simulator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-[#BAF91A] uppercase font-semibold">Interactive Interface Preview</span>
            <h3 className="text-xl font-heading font-bold text-white mt-1">
              {moduleItem.name} Operating Screen
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveScreenTab('screen')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeScreenTab === 'screen' ? 'bg-[#BAF91A] text-slate-950 font-bold' : 'text-slate-300'
              }`}
            >
              Live UI View
            </button>
            <button
              onClick={() => setActiveScreenTab('video')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 cursor-pointer ${
                activeScreenTab === 'video' ? 'bg-[#BAF91A] text-slate-950 font-bold' : 'text-slate-300'
              }`}
            >
              <Play className="w-3 h-3" />
              <span>90s Walkthrough</span>
            </button>
          </div>
        </div>

        <div className="mt-6 p-6 bg-slate-950 rounded-2xl border border-slate-800 min-h-[280px] flex flex-col justify-center items-center text-center">
          <AnimatePresence mode="wait">
            {activeScreenTab === 'screen' ? (
              <motion.div 
                key="screen"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl space-y-4"
              >
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400 font-mono">Active Module: {moduleItem.name}</span>
                  <span className="text-[#BAF91A] font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-ping"></span> Live System State
                  </span>
                </div>
                <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800/80 text-left space-y-3">
                  <div className="text-sm font-bold text-white font-heading">Active {moduleItem.name} Records:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Primary Execution Buffer:</span>
                      <strong className="text-white text-sm">14 Active Items</strong>
                    </div>
                    <div className="p-3 bg-slate-800 rounded-lg">
                      <span className="text-slate-400 block text-[10px]">Automated Approvals Today:</span>
                      <strong className="text-[#BAF91A] text-sm">100% SLA Compliant</strong>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="video"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 max-w-md"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                  <Play className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-white text-lg">90-Second {moduleItem.name} Walkthrough</h4>
                <p className="text-xs text-slate-400">
                  High-definition module demo walkthrough. Request a live guided session with an operations architect.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenDemo(moduleItem.name)}
                  className="px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-[#BAF91A] hover:bg-[#d0ff48] transition-all cursor-pointer"
                >
                  Schedule Live Walkthrough
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* AI Opportunities Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm"
      >
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h3 className="text-xl font-heading font-bold text-slate-900">
            Module AI Capabilities
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">Available Today</span>
            <ul className="space-y-2 text-xs text-slate-800">
              {moduleItem.aiOpportunities.available.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">AI Roadmap</span>
            <ul className="space-y-2 text-xs text-slate-800">
              {moduleItem.aiOpportunities.roadmap.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Expandable Level 3 Technical Overview */}
      <div className="bg-slate-100 rounded-2xl border border-slate-300/80 overflow-hidden">
        <button
          onClick={() => setTechOverviewOpen(!techOverviewOpen)}
          className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-slate-700" />
            <span>Level 3 Technical Overview (Architecture, Data Flow, Security)</span>
          </div>
          {techOverviewOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {techOverviewOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white border-t border-slate-300 text-xs space-y-4 text-slate-700 overflow-hidden"
            >
              <div>
                <strong className="font-semibold text-slate-900 block mb-1">Data Flow Pipeline:</strong>
                <code className="p-2 bg-slate-100 rounded font-mono text-slate-800 block">{moduleItem.technicalOverview.dataFlow}</code>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <strong className="font-semibold text-slate-900 block mb-1">Integrations:</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    {moduleItem.technicalOverview.integrations.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <strong className="font-semibold text-slate-900 block mb-1">Permissions Model:</strong>
                  <p className="bg-slate-50 p-2 rounded border border-slate-200">{moduleItem.technicalOverview.permissions}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Related Modules Cross-Links */}
      {relatedModules.length > 0 && (
        <div className="pt-6 border-t border-slate-200">
          <h4 className="text-base font-heading font-bold text-slate-900 mb-4">
            Frequently Used Together with {moduleItem.name}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedModules.map((rel) => (
              <motion.div
                key={rel.id}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => onNavigateToModule(rel.id)}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all cursor-pointer shadow-sm hover:shadow group"
              >
                <div className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#876DFF] transition-colors">
                  {rel.name}
                </div>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.shortDesc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Final Module CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-[#101312] via-[#1a1333] to-[#101312] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl border border-slate-800"
      >
        <h3 className="text-2xl font-heading font-bold">Ready to digitize your {moduleItem.name.toLowerCase()}?</h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          See how {moduleItem.name} connects with your entire business operating system in a 1-on-1 walkthrough.
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onOpenDemo(moduleItem.name)}
          className="px-8 py-3.5 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg cursor-pointer"
        >
          Book {moduleItem.name} Demo
        </motion.button>
      </motion.div>

    </motion.div>
  );
};
