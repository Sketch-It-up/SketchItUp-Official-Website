import React, { useState } from 'react';
import { MODULES_DATA, ModuleItem } from '../data/modulesData';
import { ModuleDetailView } from '../components/ModuleDetailView';
import { Search, Filter, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ModulesViewProps {
  selectedModuleId?: string | null;
  onSelectModule: (id: string | null) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const ModulesView: React.FC<ModulesViewProps> = ({
  selectedModuleId,
  onSelectModule,
  onOpenDemo
}) => {
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // If a module ID is selected, render the ModuleDetailView
  if (selectedModuleId) {
    const foundModule = MODULES_DATA.find((m) => m.id === selectedModuleId);
    if (foundModule) {
      return (
        <ModuleDetailView
          moduleItem={foundModule}
          onBack={() => onSelectModule(null)}
          onNavigateToModule={(id) => onSelectModule(id)}
          onOpenDemo={onOpenDemo}
        />
      );
    }
  }

  // Filter logic
  const filteredModules = MODULES_DATA.filter((mod) => {
    const matchesGroup = activeGroup === 'All' || mod.group === activeGroup;
    const matchesSearch =
      mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          The 14-Module Marketplace
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
          Fourteen Connected Business Modules
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Select any module to inspect its full operational specification, workflow steps, Command Center KPIs, and AI capabilities.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Functional Groups */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {['All', 'Operations', 'Finance', 'People', 'Intelligence'].map((group) => (
            <button
              key={group}
              onClick={() => setActiveGroup(group)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeGroup === group
                  ? 'bg-[#0F172A] text-white shadow font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {group} {group !== 'All' && `(${MODULES_DATA.filter((m) => m.group === group).length})`}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search modules or features..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#00D2B8] bg-slate-50"
          />
        </div>

      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredModules.map((mod) => (
          <div
            key={mod.id}
            onClick={() => onSelectModule(mod.id)}
            className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#00BBA7] transition-all hover:shadow-xl cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {mod.group}
                </span>
                {mod.id === 'ai-copilot' && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>AI Native</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-heading font-bold text-slate-900 mt-3 group-hover:text-[#00BBA7] transition-colors">
                {mod.name}
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {mod.shortDesc}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Highlights:</span>
                {mod.capabilities.slice(0, 3).map((cap, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00BBA7] shrink-0" />
                    <span className="truncate">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#00BBA7] group-hover:translate-x-1 transition-transform">
              <span>View Full Specification</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <p className="text-slate-600 text-sm">No modules matched your query "{searchQuery}".</p>
          <button
            onClick={() => {
              setActiveGroup('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 text-white"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 text-center space-y-3 shadow-xl">
        <h3 className="text-2xl font-heading font-bold">Unsure which modules your business needs first?</h3>
        <p className="text-sm text-slate-300 max-w-lg mx-auto">
          Our Operations Advisors can audit your current floor & finance setup and recommend an optimal rollout sequence.
        </p>
        <button
          onClick={() => onOpenDemo()}
          className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all shadow cursor-pointer"
        >
          Book Module Consultation
        </button>
      </div>

    </div>
  );
};
