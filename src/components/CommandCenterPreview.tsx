import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Package, 
  Factory, 
  AlertTriangle, 
  Sparkles, 
  ArrowUpRight, 
  RefreshCw, 
  CheckCircle2, 
  Play, 
  Clock,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CommandCenterPreviewProps {
  onOpenDemo: (prefilledModule?: string) => void;
  onNavigateToCopilot: () => void;
}

export const CommandCenterPreview: React.FC<CommandCenterPreviewProps> = ({ onOpenDemo, onNavigateToCopilot }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'floor' | 'finance' | 'alerts'>('overview');
  const [simulatedLiveToggle, setSimulatedLiveToggle] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white rounded-3xl p-5 sm:p-7 md:p-10 shadow-2xl shadow-purple-950/25 my-8 sm:my-12 relative overflow-hidden"
    >
      
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#876DFF]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BAF91A] animate-pulse"></span>
            <span className="text-xs font-mono text-[#BAF91A] uppercase tracking-wider font-semibold">
              Live Owner OS Command Center
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mt-1">
            Every Number That Matters, In One Real-Time View.
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => setSimulatedLiveToggle(!simulatedLiveToggle)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
              simulatedLiveToggle
                ? 'bg-[#BAF91A]/10 text-[#BAF91A] border-[#BAF91A]/30'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${simulatedLiveToggle ? 'animate-spin' : ''}`} />
            <span>{simulatedLiveToggle ? 'Live Feed Streaming' : 'Paused Feed'}</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenDemo("Command Center")}
            className="px-4 py-2 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-md cursor-pointer"
          >
            Book Live Demo
          </motion.button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => setActiveTab('overview')}
          className={`relative px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'overview'
              ? 'text-[#101312]'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {activeTab === 'overview' && (
            <motion.div 
              layoutId="activeCommandTab"
              className="absolute inset-0 bg-[#BAF91A] rounded-xl -z-10 shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">Executive Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('floor')}
          className={`relative px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'floor'
              ? 'text-[#101312]'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {activeTab === 'floor' && (
            <motion.div 
              layoutId="activeCommandTab"
              className="absolute inset-0 bg-[#BAF91A] rounded-xl -z-10 shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">Factory Floor & Yield</span>
        </button>

        <button
          onClick={() => setActiveTab('finance')}
          className={`relative px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'finance'
              ? 'text-[#101312]'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {activeTab === 'finance' && (
            <motion.div 
              layoutId="activeCommandTab"
              className="absolute inset-0 bg-[#BAF91A] rounded-xl -z-10 shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">Cash Flow & Accounts</span>
        </button>

        <button
          onClick={() => setActiveTab('alerts')}
          className={`relative px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
            activeTab === 'alerts'
              ? 'text-white'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {activeTab === 'alerts' && (
            <motion.div 
              layoutId="activeCommandTab"
              className="absolute inset-0 bg-[#876DFF] rounded-xl -z-10 shadow-xs"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <AlertTriangle className="w-3.5 h-3.5 text-[#BAF91A] relative z-10" />
          <span className="relative z-10">AI Alerts (2)</span>
        </button>
      </div>

      {/* Tab Content Display with AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"
          >
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Today's Dispatched Revenue</span>
                <DollarSign className="w-4 h-4 text-[#BAF91A]" />
              </div>
              <div className="text-2xl font-bold font-heading text-white mt-2">$42,850</div>
              <div className="text-xs text-[#BAF91A] mt-1 flex items-center gap-1 font-semibold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>12.4% vs daily target</span>
              </div>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Plant A + B OEE Yield</span>
                <Factory className="w-4 h-4 text-[#876DFF]" />
              </div>
              <div className="text-2xl font-bold font-heading text-white mt-2">87.6%</div>
              <div className="text-xs text-slate-300 mt-1">
                <span>Machine #3 maintenance cleared</span>
              </div>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Net Operating Cash Position</span>
                <TrendingUp className="w-4 h-4 text-[#E2FF99]" />
              </div>
              <div className="text-2xl font-bold font-heading text-white mt-2">$128,400</div>
              <div className="text-xs text-slate-300 mt-1">
                <span>30-day runway projection healthy</span>
              </div>
            </div>

            <div className="bg-[#876DFF]/20 p-5 rounded-2xl border border-[#876DFF]/30">
              <div className="flex items-center justify-between text-[#E2FF99] text-xs">
                <span>Active AI Risk Alert</span>
                <Sparkles className="w-4 h-4 text-[#BAF91A]" />
              </div>
              <div className="text-lg font-bold font-heading text-white mt-2">Steel Sheet Reorder</div>
              <div className="text-xs text-[#E2FF99] mt-1">
                <span>Buffer breach in 4 days if unchanged</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'floor' && (
          <motion.div 
            key="floor"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6 space-y-4"
          >
            <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="font-heading font-bold text-sm text-white">Line 1: Stamping & Cutting</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Running 94% OEE</span>
              </div>
              <p className="text-xs text-slate-300">Job Card #JC-9821 | Target: 2,400 units | Completed: 2,120 units</p>
              <div className="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "88%" }}
                  transition={{ duration: 0.8 }}
                  className="bg-emerald-400 h-full rounded-full"
                />
              </div>
            </div>

            <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700">
              <div className="flex justify-between items-center mb-2">
                <span className="font-heading font-bold text-sm text-white">Line 2: Precision Welding & Assembly</span>
                <span className="text-xs font-mono text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">Setup Changeover</span>
              </div>
              <p className="text-xs text-slate-300">Job Card #JC-9824 | Operator: R. Sharma | Estimated completion: 25 mins</p>
              <div className="w-full bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 0.8 }}
                  className="bg-amber-400 h-full rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'finance' && (
          <motion.div 
            key="finance"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 uppercase font-semibold">Accounts Receivable (AR)</span>
              <div className="text-2xl font-bold font-heading text-white mt-1">$42,500</div>
              <p className="text-xs text-emerald-400 mt-2">$30,300 collected this week</p>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 uppercase font-semibold">Accounts Payable (AP)</span>
              <div className="text-2xl font-bold font-heading text-white mt-1">$18,200</div>
              <p className="text-xs text-slate-300 mt-2">Due in 14 days (Supplier #SUP-302)</p>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700">
              <span className="text-xs text-slate-400 uppercase font-semibold">Gross Margin % Today</span>
              <div className="text-2xl font-bold font-heading text-[#00D2B8] mt-1">32.8%</div>
              <p className="text-xs text-slate-300 mt-2">Calculated from actual raw material BOM</p>
            </div>
          </motion.div>
        )}

        {activeTab === 'alerts' && (
          <motion.div 
            key="alerts"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-6 space-y-3"
          >
            <div className="bg-amber-950/40 p-4 rounded-xl border border-amber-500/30 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">Stock Buffer Depletion Risk</span>
                <p className="text-xs text-slate-200 mt-1">
                  Raw material [Steel Sheet Grade-A] stock velocity predicts a buffer breach on Friday. Supplier PO #SUP-302 is prepared with 1-click owner approval.
                </p>
                <button
                  onClick={() => onOpenDemo("Inventory Safety Reorder")}
                  className="mt-2 text-xs font-semibold text-amber-300 hover:text-white underline cursor-pointer"
                >
                  Approve Reorder PO in Demo &rarr;
                </button>
              </div>
            </div>

            <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-500/30 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide">AI Dispatch Recommendation</span>
                <p className="text-xs text-slate-200 mt-1">
                  Combining Order #ORD-9821 and #ORD-9825 into Transporter #TR-402 saves $420 in freight costs today.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Interactive Copilot Prompt Trigger */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs text-slate-300">
            Want to test querying this live data? Try the <strong className="text-white">AI Copilot Simulation Engine</strong>.
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onNavigateToCopilot}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>Ask AI Copilot</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>

    </motion.div>
  );
};
