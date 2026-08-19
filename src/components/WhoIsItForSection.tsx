import React from 'react';
import { 
  Factory, 
  Truck, 
  Wrench, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhoIsItForSectionProps {
  onNavigate?: (view: string, detailId?: string) => void;
  onOpenDemo?: (module?: string) => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({ onNavigate, onOpenDemo }) => {
  const industries = [
    {
      id: "manufacturing",
      badge: "Primary Footprint",
      title: "Manufacturing & Fabrication",
      tagline: "Discrete, process, machine shops & assembly",
      desc: "Ideal for factories with multi-stage job cards, machine routing, raw material bills of materials (BOM), and scrap tracking requirements.",
      benefits: [
        "Digital job cards replacing paper traveler sheets",
        "Live machine utilization & operator output tracking",
        "Raw material batch reservation & reorder safety buffers",
        "Strict quality gates before dispatch"
      ],
      icon: Factory,
      highlight: true
    },
    {
      id: "distribution",
      badge: "Supply Chain",
      title: "Trading & B2B Distribution",
      tagline: "Multi-warehouse wholesale & inventory-heavy operations",
      desc: "Engineered for high-SKU distributors balancing supplier lead times, multi-godown stock transfers, credit limits, and fast customer fulfillment.",
      benefits: [
        "Multi-location stock visibility with zero lag",
        "Automated customer credit limits & payment terms",
        "Fast barcode packing & e-way dispatch workflows",
        "Purchase price fluctuation tracking"
      ],
      icon: Truck,
      highlight: false
    },
    {
      id: "projects",
      badge: "Engineered Orders",
      title: "Service & Project Operations",
      tagline: "Job-order based engineering & technical installations",
      desc: "For businesses that execute custom project milestones, on-site technical installations, and specialized contracted equipment builds.",
      benefits: [
        "Milestone-based project billing & stage signoffs",
        "Site resource & field technician allocation",
        "Job-level material and labor cost tracking",
        "Warranty and maintenance log tracking"
      ],
      icon: Wrench,
      highlight: false
    },
    {
      id: "smes",
      badge: "Growth Transition",
      title: "Growing SMEs & Family Enterprises",
      tagline: "Transitioning from founder-dependency to scalable systems",
      desc: "Built specifically for 10–500 person businesses that have outgrown spreadsheets and WhatsApp, but find enterprise ERPs too bloated and rigid.",
      benefits: [
        "1-screen Owner Command Center with live company pulse",
        "Standard operating procedures (SOPs) enforced automatically",
        "Easy delegation without losing financial oversight",
        "Fast 2–4 week onboarding without shutting down operations"
      ],
      icon: TrendingUp,
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
        <span className="text-xs font-extrabold text-[#101312] uppercase tracking-widest bg-slate-200/80 px-4 py-1.5 rounded-full inline-block">
          Who OwnerOS is For
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Built for businesses that have outgrown fragmented systems.
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We don't build generic software for everyone. OwnerOS is tailored deeply for operations-heavy, inventory-intensive, and production-driven businesses.
        </p>
      </motion.div>

      {/* Grid of 4 Audiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                ind.highlight
                  ? 'bg-gradient-to-br from-[#101312] via-slate-900 to-[#1a1333] text-white border-slate-800 shadow-xl'
                  : 'bg-white text-slate-900 border-slate-200/90 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    ind.highlight ? 'bg-[#BAF91A] text-[#101312]' : 'bg-[#876DFF]/10 text-[#876DFF]'
                  }`}>
                    {ind.badge}
                  </span>
                  <Icon className={`w-6 h-6 ${ind.highlight ? 'text-[#BAF91A]' : 'text-slate-700'}`} />
                </div>

                <div>
                  <h3 className={`text-2xl font-heading font-extrabold ${ind.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {ind.title}
                  </h3>
                  <p className={`text-xs font-semibold uppercase tracking-wide mt-1 ${
                    ind.highlight ? 'text-[#E2FF99]' : 'text-[#876DFF]'
                  }`}>
                    {ind.tagline}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${ind.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {ind.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className={`text-xs font-bold uppercase tracking-wider block ${
                    ind.highlight ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Operational Gains:
                  </span>
                  <div className="space-y-1.5">
                    {ind.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          ind.highlight ? 'text-[#BAF91A]' : 'text-emerald-600'
                        }`} />
                        <span className={ind.highlight ? 'text-slate-200' : 'text-slate-700'}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/20">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenDemo && onOpenDemo(ind.title)}
                  className={`w-full py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                    ind.highlight
                      ? 'bg-[#BAF91A] text-[#101312] hover:bg-[#d0ff48]'
                      : 'bg-[#101312] text-white hover:bg-black'
                  }`}
                >
                  <span>Book Demo for {ind.title.split(' ')[0]}</span>
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
