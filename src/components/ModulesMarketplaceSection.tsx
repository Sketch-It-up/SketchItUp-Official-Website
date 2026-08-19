import React, { useState } from 'react';
import { MODULES_DATA } from '../data/modulesData';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Play,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModulesMarketplaceSectionProps {
  onSelectModule: (moduleId: string) => void;
  onOpenDemo: (moduleName?: string) => void;
}

export const ModulesMarketplaceSection: React.FC<ModulesMarketplaceSectionProps> = ({
  onSelectModule,
  onOpenDemo
}) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');

  const filteredModules = MODULES_DATA.filter((mod) => {
    if (selectedGroup === 'All') return true;
    return mod.group.toLowerCase().includes(selectedGroup.toLowerCase());
  });

  const categories = ['All', 'Core', 'Operational', 'Financial', 'Strategic'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 max-w-2xl"
        >
          <span className="text-xs font-extrabold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-4 py-1.5 rounded-full inline-block">
            Modular Platform Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            Explore OwnerOS Modules
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every module solves a specific operational challenge and connects seamlessly into the central Owner Command Center. Start with what you need today and scale effortlessly.
          </p>
        </motion.div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
          {categories.map((cat) => {
            const isSelected = selectedGroup === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedGroup(cat)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isSelected && (
                  <motion.div 
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-white rounded-xl -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Modules */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredModules.map((mod, idx) => {
            const isCommandCenter = mod.id === 'command-center';
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                key={mod.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all flex flex-col justify-between group ${
                  isCommandCenter
                    ? 'bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white border-slate-800 shadow-xl'
                    : 'bg-white text-slate-900 border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isCommandCenter
                        ? 'bg-[#BAF91A] text-[#101312]'
                        : 'bg-[#876DFF]/10 text-[#876DFF]'
                    }`}>
                      {mod.group}
                    </span>
                    <span className={`text-xs font-mono font-semibold ${
                      isCommandCenter ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      MOD-{mod.id.substring(0, 3).toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-heading font-bold transition-colors ${
                      isCommandCenter
                        ? 'text-white'
                        : 'text-slate-900 group-hover:text-[#876DFF]'
                    }`}>
                      {mod.name}
                    </h3>
                    <p className={`text-xs font-semibold mt-1 ${
                      isCommandCenter ? 'text-[#E2FF99]' : 'text-[#876DFF]'
                    }`}>
                      {mod.tagline}
                    </p>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                    isCommandCenter ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {mod.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectModule(mod.id)}
                    className={`text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isCommandCenter
                        ? 'text-[#BAF91A] hover:text-[#d0ff48]'
                        : 'text-[#876DFF] hover:text-purple-700'
                    }`}
                  >
                    <span>Explore Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onOpenDemo(mod.name)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                      isCommandCenter
                        ? 'bg-white/10 hover:bg-white/20 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    Book Demo
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

    </section>
  );
};
