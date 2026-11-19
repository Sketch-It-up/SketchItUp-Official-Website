import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Unified, constant navigation items across the entire website
  const navItems = [
    { id: 'company-home', label: 'Home' },
    { id: 'solutions', label: 'Products' },
    { id: 'owner-os-home', label: 'Owner OS' },
    { id: 'mrida-os', label: 'Mrida OS' },
    { id: 'custom-solutions', label: 'Custom Solutions' },
    { id: 'about', label: 'About' },
    { id: 'resources', label: 'Resources' },
  ];

  const isItemActive = (id: string) => {
    if (id === 'company-home') return currentView === 'company-home';
    if (id === 'solutions') return currentView === 'solutions' || currentView === 'owner-os-solutions';
    if (id === 'owner-os-home') return currentView === 'owner-os-home' || currentView === 'home' || currentView === 'owner-os' || currentView === 'modules';
    if (id === 'mrida-os') return currentView === 'mrida-os' || currentView === 'product-agriculture';
    if (id === 'custom-solutions') return currentView === 'custom-solutions';
    if (id === 'about') return currentView === 'about';
    if (id === 'resources') return currentView === 'resources';
    return currentView === id;
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full py-3 sm:py-4 px-3 sm:px-6 lg:px-8 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        
        {/* Floating Navbar Pill with Glassmorphism */}
        <motion.div 
          className="relative flex h-16 w-full items-center justify-between gap-2 rounded-full border border-white/80 bg-white/80 backdrop-blur-xl px-3 sm:px-5 shadow-[0_8px_32px_0_rgba(15,23,42,0.08)] transition-all hover:bg-white/90 hover:border-white/95 ring-1 ring-slate-900/5"
        >
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Parent Brand Logo - Always navigates to company-home */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 cursor-pointer group pr-1 sm:pr-2" 
              onClick={() => onNavigate('company-home')}
            >
              <div className="w-9 h-9 rounded-full bg-[#101312] text-[#BAF91A] flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-tight">
                  SketchItUp<span className="text-[#876DFF]">.</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider hidden sm:block">
                  Solutions
                </span>
              </div>
            </motion.div>

          </div>

          {/* Center / Right: Desktop Navigation Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const active = isItemActive(item.id);
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 xl:px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Action Buttons Section */}
          <div className="flex items-center gap-2">
            
            {/* Book a Demo Pill Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onOpenDemo('SketchItUp Solutions')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-md cursor-pointer group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#101312] transition-transform group-hover:translate-x-0.5" />
            </motion.button>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-1.5">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenDemo('SketchItUp Solutions')}
                className="px-3.5 py-1.5 text-xs font-bold text-[#101312] bg-[#BAF91A] rounded-full shadow-sm cursor-pointer"
              >
                Demo
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>

          </div>

        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/5 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#101312] text-[#BAF91A] flex items-center justify-center font-bold text-xs">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                </div>
                <span className="font-heading font-bold text-slate-900 text-sm">
                  SketchItUp Solutions
                </span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const active = isItemActive(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                      active ? 'bg-slate-900 text-white font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </button>
                );
              })}
            </div>

            {/* Bottom Demo Action */}
            <div className="pt-3 border-t border-slate-100">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onOpenDemo('SketchItUp Solutions');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] flex items-center justify-center gap-2 shadow cursor-pointer"
              >
                <span>Book a Demo Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#101312]" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
export default Navbar;
