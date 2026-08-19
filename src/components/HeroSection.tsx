import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TeamStack, DEFAULT_CARDS } from '@/components/unlumen-ui/team-stack';

interface HeroSectionProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenDemo }) => {
  const handleCardSelect = (card: typeof DEFAULT_CARDS[0]) => {
    if (card.id === 'orders') {
      onNavigate('modules', 'orders-sales');
    } else if (card.id === 'production') {
      onNavigate('modules', 'production-wip');
    } else if (card.id === 'command') {
      onNavigate('owner-os');
    } else if (card.id === 'inventory') {
      onNavigate('modules', 'inventory-procurement');
    } else if (card.id === 'finance') {
      onNavigate('modules', 'finance-cashflow');
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-[#FAFAFA]">
      
      {/* Animated Subtle Background Radial Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#876DFF]/20 via-[#E2FF99]/30 to-[#BAF91A]/20 blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Brand & Product Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800 mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-pulse"></span>
          <span className="font-bold text-slate-900">OwnerOS</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-600">By SketchItUp Solutions</span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight max-w-5xl mx-auto leading-[1.08]"
        >
          The Operating System for Complete Control of Your Business.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal"
        >
          One connected platform to manage your <span className="font-semibold text-slate-900">orders, inventory, production, people, finance and operations</span> — giving business owners complete visibility and control.
        </motion.p>

        {/* TeamStack Interactive 3D Stacked Deck */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-6 mb-4 max-w-5xl mx-auto px-2 relative"
        >
          <TeamStack
            onCardClick={handleCardSelect}
          />
        </motion.div>

        {/* Micro-copy */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8 font-medium"
        >
          Built for growing businesses that need control, clarity and scalable processes.
        </motion.p>

        {/* Primary & Secondary Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('modules')}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>Explore OwnerOS</span>
            <ArrowRight className="w-5 h-5 text-[#101312] transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenDemo()}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-base font-semibold text-white bg-[#101312] hover:bg-black border border-slate-800 transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a Product Demo</span>
          </motion.button>
        </motion.div>

        {/* Live Metrics Ticker Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 pt-8 border-t border-slate-200/80 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-700"
        >
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">10 Core</div>
            <div className="text-xs text-slate-500 font-medium">Connected Modules</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">1 Screen</div>
            <div className="text-xs text-slate-500 font-medium">Owner Command Center</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#101312]">Real-Time</div>
            <div className="text-xs text-slate-500 font-medium">Floor-to-Finance Sync</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-2xl font-bold font-heading text-[#876DFF]">Zero Guesswork</div>
            <div className="text-xs text-slate-500 font-medium">Grounded AI Alerts</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
