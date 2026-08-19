import React from 'react';
import { 
  Play, 
  LayoutDashboard, 
  Boxes, 
  Factory, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProductDemosSectionProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const ProductDemosSection: React.FC<ProductDemosSectionProps> = ({ onNavigate, onOpenDemo }) => {
  const demos = [
    {
      id: "command-center",
      badge: "Flagship View",
      title: "Owner Command Center Demo",
      subtitle: "Experience 1-screen live operational pulse",
      description: "Walk through live order fulfillments, machine utilization gauges, cash flow reconciliations, and instant exception alerts.",
      actionLabel: "Launch Command Center Demo",
      action: () => {
        const el = document.getElementById('command-center-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      icon: LayoutDashboard,
      accent: "bg-indigo-500",
      highlight: true
    },
    {
      id: "inventory-flow",
      badge: "Stock & Multi-Warehouse",
      title: "Inventory & Auto-Reorder Demo",
      subtitle: "Multi-location bins & automated purchase triggers",
      description: "Experience batch FIFO tracking, safety threshold alerts, goods receipt notes (GRN), and seamless stock issue against active jobs.",
      actionLabel: "Explore Inventory Module",
      action: () => onNavigate('modules', 'inventory'),
      icon: Boxes,
      accent: "bg-[#876DFF]",
      highlight: false
    },
    {
      id: "production-flow",
      badge: "Shop Floor & Job Cards",
      title: "Floor Route Card & Yield Demo",
      subtitle: "Digital job cards and live operator logging",
      description: "See how machine operators log batch progress, record scrap causes, and trigger QA signoffs without paper sheets.",
      actionLabel: "Explore Production Module",
      action: () => onNavigate('modules', 'production'),
      icon: Factory,
      accent: "bg-emerald-500",
      highlight: false
    },
    {
      id: "book-walkthrough",
      badge: "Personalized Consultation",
      title: "Custom 1-on-1 Operations Review",
      subtitle: "Walk through with a SketchItUp systems architect",
      description: "Share your current spreadsheets and process pain points. We map exactly how OwnerOS replaces manual friction in your business.",
      actionLabel: "Schedule Live Walkthrough",
      action: () => onOpenDemo('Full System Architecture'),
      icon: Zap,
      accent: "bg-[#BAF91A]",
      highlight: false
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
        <span className="text-xs font-extrabold text-[#876DFF] uppercase tracking-widest bg-[#876DFF]/10 px-4 py-1.5 rounded-full inline-block">
          Interactive Product Demos
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
          See OwnerOS in Action
        </h2>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          Experience the interactive command center, explore live production & inventory workflows, or schedule a personalized consultation.
        </p>
      </motion.div>

      {/* Demo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {demos.map((demo, idx) => {
          const Icon = demo.icon;
          return (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                demo.highlight
                  ? 'bg-gradient-to-br from-[#101312] via-slate-900 to-[#181128] text-white border-slate-800 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200/90 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    demo.highlight ? 'bg-[#BAF91A] text-[#101312]' : 'bg-[#876DFF]/10 text-[#876DFF]'
                  }`}>
                    {demo.badge}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                    demo.highlight ? 'bg-white/10 text-[#BAF91A]' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className={`text-2xl font-heading font-extrabold ${demo.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {demo.title}
                  </h3>
                  <p className={`text-xs font-semibold uppercase tracking-wide mt-1 ${
                    demo.highlight ? 'text-[#E2FF99]' : 'text-[#876DFF]'
                  }`}>
                    {demo.subtitle}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${demo.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {demo.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/20">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={demo.action}
                  className={`w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    demo.highlight
                      ? 'bg-[#BAF91A] text-[#101312] hover:bg-[#d0ff48] shadow-md'
                      : 'bg-[#101312] text-white hover:bg-black'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{demo.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
