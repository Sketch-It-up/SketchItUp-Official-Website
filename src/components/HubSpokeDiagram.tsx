import React, { useState } from 'react';
import { MODULES_DATA, ModuleItem } from '../data/modulesData';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HubSpokeDiagramProps {
  onSelectModule: (moduleId: string) => void;
}

export const HubSpokeDiagram: React.FC<HubSpokeDiagramProps> = ({ onSelectModule }) => {
  const [selectedModule, setSelectedModule] = useState<ModuleItem>(MODULES_DATA[0]);

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl my-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-3 py-1 rounded-full">
          Interactive Platform Blueprint
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mt-2">
          One Hub. 14 Synchronized Modules.
        </h3>
        <p className="text-sm text-slate-600 mt-2">
          Click or hover any module to see how data flows seamlessly into the Owner OS command center.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Module Nodes Grid / Hub Visual */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {MODULES_DATA.map((mod) => {
              const isSelected = selectedModule.id === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  onMouseEnter={() => setSelectedModule(mod)}
                  className={`p-3.5 rounded-2xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#101312] text-white border-[#BAF91A] shadow-lg ring-2 ring-[#BAF91A]/50 translate-y-[-2px]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#BAF91A]/20 text-[#BAF91A]' : 'bg-slate-200 text-slate-600'
                    }`}>
                      {mod.group}
                    </span>
                    {mod.id === 'ai-copilot' && <Sparkles className="w-3.5 h-3.5 text-[#BAF91A]" />}
                  </div>
                  <div className="font-heading font-bold text-sm mt-2">{mod.name}</div>
                  <div className={`text-[11px] truncate mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {mod.shortDesc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Detail Panel */}
        <div className="lg:col-span-5 bg-[#101312] text-white rounded-2xl p-6 shadow-xl border border-slate-800 flex flex-col justify-between min-h-[360px]">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-[#BAF91A] uppercase tracking-wider">
                Module Connection Deep-Dive
              </span>
              <span className="text-xs text-slate-400 font-semibold">{selectedModule.group}</span>
            </div>

            <h4 className="text-2xl font-heading font-bold text-white mt-4 flex items-center gap-2">
              {selectedModule.name}
            </h4>

            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {selectedModule.fullDesc}
            </p>

            <div className="mt-5 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Key Capabilities:</span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {selectedModule.capabilities.slice(0, 3).map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF91A] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
            <span className="text-xs text-slate-400">Integrated into Owner OS</span>
            <button
              onClick={() => onSelectModule(selectedModule.id)}
              className="px-4 py-2 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Explore Module Specification</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
