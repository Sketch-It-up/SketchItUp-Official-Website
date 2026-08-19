import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCtaSectionProps {
  onNavigate: (view: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#101312] via-[#1a1333] to-[#101312] text-white rounded-3xl p-6 sm:p-10 md:p-16 text-center space-y-6 shadow-2xl border border-slate-800 relative overflow-hidden"
      >
        
        {/* Ambient Glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#BAF91A]/20 via-[#876DFF]/20 to-transparent blur-3xl rounded-full pointer-events-none"
        />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-extrabold text-[#BAF91A] uppercase tracking-widest bg-[#BAF91A]/10 px-4 py-1.5 rounded-full border border-[#BAF91A]/20 inline-block">
            Start Your Transformation
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Take Control of Your Business.
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Move from scattered information, endless WhatsApp follow-ups, and disconnected spreadsheets to one connected operating system.
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('modules')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore the Product</span>
            </motion.button>
          </div>

          {/* Micro assurances */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BAF91A]" />
              <span>Tailored for SMEs & Manufacturers</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BAF91A]" />
              <span>2–4 Week Seamless Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BAF91A]" />
              <span>Dedicated Operations Architect</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
