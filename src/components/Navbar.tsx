import React, { useState, useRef, useEffect } from 'react';
import { 
  LayoutDashboard, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Cpu, 
  Layers, 
  Building2, 
  ArrowUpRight,
  Boxes,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Users,
  Sprout,
  Store,
  HeartPulse,
  Truck,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_DATA, ProductItem } from '../data/productsData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

const PRODUCT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Sprout,
  Store,
  HeartPulse,
  Truck,
};

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOwnerOsContext = 
    currentView === 'owner-os-home' || 
    currentView === 'modules' || 
    currentView === 'owner-os-solutions' || 
    currentView === 'custom-solutions';

  // Get active product name for switcher pill
  const getActiveProduct = (): ProductItem | null => {
    if (isOwnerOsContext) {
      return PRODUCTS_DATA[0];
    }
    return PRODUCTS_DATA.find((p) => p.route === currentView) || null;
  };

  const activeProduct = getActiveProduct();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation Items for Owner OS context vs Company context
  const ownerOsNavItems = [
    { id: 'company-home', label: 'Home' },
    { id: 'owner-os-home', label: 'Overview' },
    { id: 'modules', label: 'Modules', hasDropdown: true },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'demos', label: 'Demos' },
    { id: 'owner-os-solutions', label: 'Solutions', hasDropdown: true },
    { id: 'about', label: 'About' },
  ];

  const companyNavItems = [
    { id: 'company-home', label: 'Home' },
    { id: 'products-suite', label: 'Products', hasDropdown: true },
    { id: 'owner-os-home', label: 'Owner OS' },
    { id: 'custom-solutions', label: 'Custom Solutions' },
    { id: 'about', label: 'About' },
    { id: 'resources', label: 'Resources' },
  ];

  const handleNavClick = (id: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      setActiveDropdown(activeDropdown === id ? null : id);
    } else {
      setActiveDropdown(null);
      if (id === 'company-home') {
        onNavigate('company-home');
      } else if (id === 'how-it-works') {
        if (currentView !== 'owner-os-home') {
          onNavigate('owner-os-home');
          setTimeout(() => {
            const el = document.getElementById('how-it-works-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const el = document.getElementById('how-it-works-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (id === 'demos') {
        if (currentView !== 'owner-os-home') {
          onNavigate('owner-os-home');
          setTimeout(() => {
            const el = document.getElementById('demos-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const el = document.getElementById('demos-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        onNavigate(id);
      }
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 w-full py-3 sm:py-4 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center pointer-events-auto">
        
        {/* Floating Navbar Pill with Glassmorphism */}
        <motion.div 
          className="relative flex h-14 sm:h-16 w-full items-center justify-between gap-1.5 sm:gap-2 rounded-full border border-white/80 bg-white/85 backdrop-blur-xl px-2.5 sm:px-5 shadow-[0_8px_32px_0_rgba(15,23,42,0.08)] transition-all hover:bg-white/95 ring-1 ring-slate-900/5 pointer-events-auto"
        >
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Parent Brand Logo - Always navigates to company-home */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 cursor-pointer group pr-1 sm:pr-2" 
              onClick={() => {
                setActiveDropdown(null);
                onNavigate('company-home');
              }}
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
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5" ref={dropdownRef}>
            {(isOwnerOsContext ? ownerOsNavItems : companyNavItems).map((item) => (
              <div key={item.id} className="relative">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick(item.id, item.hasDropdown)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    currentView === item.id 
                      ? 'bg-slate-900 text-white shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180 text-[#876DFF]' : 'text-slate-400'}`} />
                  )}
                </motion.button>

                {/* Modules MegaMenu Popover Dropdown (Owner OS) */}
                <AnimatePresence>
                  {item.id === 'modules' && activeDropdown === 'modules' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[840px] rounded-[2.5rem] border border-white/90 bg-white/90 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 z-50"
                    >
                      <div className="grid grid-cols-4 gap-6 divide-x divide-slate-100">
                        
                        {/* Column 1: Core Operations */}
                        <div className="flex flex-col space-y-3 pr-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#876DFF]">
                            <Cpu className="w-4 h-4" />
                            <span>Operations</span>
                          </div>
                          <div className="flex flex-col space-y-2">
                            {[
                              { id: 'command-center', name: 'Command Center' },
                              { id: 'order-management', name: 'Order Management' },
                              { id: 'inventory', name: 'Inventory & Stock' },
                              { id: 'production', name: 'Production & Shop Floor' },
                              { id: 'procurement', name: 'Procurement & GRN' }
                            ].map((mod) => (
                              <button
                                key={mod.id}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  onNavigate('modules', mod.id);
                                }}
                                className="text-left text-xs font-semibold text-slate-700 hover:text-[#876DFF] hover:translate-x-1 transition-all py-1 cursor-pointer"
                              >
                                {mod.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Finance & Logistics */}
                        <div className="flex flex-col space-y-3 pl-4 pr-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                            <Layers className="w-4 h-4" />
                            <span>Finance & Logistics</span>
                          </div>
                          <div className="flex flex-col space-y-2">
                            {[
                              { id: 'accounting', name: 'Accounting & Vouchers' },
                              { id: 'quality-dispatch', name: 'Quality & Dispatch' },
                              { id: 'machine-maintenance', name: 'Machine Maintenance' },
                              { id: 'crm', name: 'Customer & Pipeline' }
                            ].map((mod) => (
                              <button
                                key={mod.id}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  onNavigate('modules', mod.id);
                                }}
                                className="text-left text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:translate-x-1 transition-all py-1 cursor-pointer"
                              >
                                {mod.name}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: People & Intelligence */}
                        <div className="flex flex-col space-y-3 pl-4 pr-2">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                            <Users className="w-4 h-4" />
                            <span>People & Control</span>
                          </div>
                          <div className="flex flex-col space-y-2">
                            {[
                              { id: 'hr-payroll', name: 'HR & People' },
                              { id: 'task-management', name: 'Task Management & SOPs' },
                              { id: 'analytics', name: 'Executive Analytics' }
                            ].map((mod) => (
                              <button
                                key={mod.id}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  onNavigate('modules', mod.id);
                                }}
                                className="text-left text-xs font-semibold text-slate-700 hover:text-emerald-600 hover:translate-x-1 transition-all py-1 cursor-pointer"
                              >
                                <span>{mod.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Column 4: Featured Spotlight Card */}
                        <div className="flex flex-col pl-4">
                          <div className="h-full bg-[#101312] text-white rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden group border border-slate-800">
                            <div className="space-y-2 relative z-10">
                              <span className="text-[10px] font-bold text-[#BAF91A] uppercase tracking-wider bg-[#BAF91A]/10 px-2 py-0.5 rounded-full border border-[#BAF91A]/20 inline-block">
                                Full Specs
                              </span>
                              <h4 className="font-heading font-bold text-sm text-white">
                                Connected Module Marketplace
                              </h4>
                              <p className="text-[11px] text-slate-300 leading-snug">
                                Explore complete operational workflows, KPIs, and Level 3 specs.
                              </p>
                            </div>
                            
                            <motion.button
                              whileHover={{ x: 3 }}
                              onClick={() => {
                                setActiveDropdown(null);
                                onNavigate('modules');
                              }}
                              className="mt-4 text-xs font-bold text-[#BAF91A] flex items-center gap-1 transition-transform cursor-pointer relative z-10"
                            >
                              <span>Browse All Modules</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </motion.button>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Solutions MegaMenu Dropdown (Industry Blueprints inside Owner OS) */}
                <AnimatePresence>
                  {item.id === 'owner-os-solutions' && activeDropdown === 'owner-os-solutions' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[620px] rounded-[2.5rem] border border-white/90 bg-white/90 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 z-50"
                    >
                      <div className="grid grid-cols-2 gap-6 divide-x divide-slate-100">
                        
                        <div className="space-y-3 pr-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                            Owner OS Manufacturing Sub-Verticals
                          </span>
                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate('owner-os-solutions');
                            }}
                            className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors space-y-1 block cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-heading font-bold text-xs text-slate-900">Manufacturing & Assembly</span>
                              <span className="text-[9px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Live</span>
                            </div>
                            <p className="text-[11px] text-slate-500">Discrete & process production lines with floor yield tracking.</p>
                          </button>

                          <button
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate('custom-solutions');
                            }}
                            className="w-full text-left p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors space-y-1 block cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-heading font-bold text-xs text-slate-900">Bespoke Enterprise OS</span>
                              <span className="text-[9px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">Custom</span>
                            </div>
                            <p className="text-[11px] text-slate-500">Custom workflow engineering tailored around your floor habits.</p>
                          </button>
                        </div>

                        <div className="pl-4 space-y-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                            Other Suite Products
                          </span>
                          {PRODUCTS_DATA.filter((p) => p.id !== 'owner-os').map((prod) => (
                            <button
                              key={prod.id}
                              onClick={() => {
                                setActiveDropdown(null);
                                onNavigate(prod.route);
                              }}
                              className="w-full flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 py-1 hover:bg-slate-50 px-2 rounded-lg transition-colors cursor-pointer"
                            >
                              <span>{prod.name}</span>
                              <span className="text-[9px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-medium">Soon</span>
                            </button>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Products Suite MegaMenu Dropdown (Company Home) */}
                <AnimatePresence>
                  {item.id === 'products-suite' && activeDropdown === 'products-suite' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] rounded-[2.5rem] border border-white/90 bg-white/90 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 z-50"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#876DFF]">
                            Vertical Operating System Suite
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            1 Live • 4 In Architecture
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {PRODUCTS_DATA.map((prod) => {
                            const IconComp = PRODUCT_ICONS[prod.icon] || Layers;
                            const isLive = prod.status === 'live';
                            return (
                              <button
                                key={prod.id}
                                onClick={() => {
                                  setActiveDropdown(null);
                                  onNavigate(prod.route);
                                }}
                                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                                  isLive 
                                    ? 'bg-[#101312] text-white border-slate-800 hover:ring-2 hover:ring-[#BAF91A]'
                                    : 'bg-slate-50 hover:bg-slate-100 border-slate-200/80 text-slate-800'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <IconComp className={`w-4 h-4 ${isLive ? 'text-[#BAF91A]' : 'text-slate-600'}`} />
                                    <span className="font-heading font-bold text-xs">
                                      {prod.name}
                                    </span>
                                  </div>
                                  {isLive ? (
                                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                                      Live
                                    </span>
                                  ) : (
                                    <span className="text-[9px] text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded">
                                      Soon
                                    </span>
                                  )}
                                </div>
                                <p className={`text-[11px] line-clamp-2 leading-tight ${isLive ? 'text-slate-300' : 'text-slate-500'}`}>
                                  {prod.tagline}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

          {/* Action Buttons Section */}
          <div className="flex items-center gap-2">
            
            {/* Book a Demo Pill Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setActiveDropdown(null);
                onOpenDemo(activeProduct?.name || 'SketchItUp Solutions');
              }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-md cursor-pointer group"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#101312] transition-transform group-hover:translate-x-0.5" />
            </motion.button>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-1.5">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenDemo(activeProduct?.name || 'SketchItUp Solutions')}
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
            className="lg:hidden fixed inset-x-4 top-20 z-50 bg-white/95 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-[0_20px_50px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/5 space-y-4 max-h-[85vh] overflow-y-auto pointer-events-auto"
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

            {/* Mobile Nav Top Links */}
            <div className="flex flex-col space-y-1 pb-2 border-b border-slate-100">
              <button
                onClick={() => {
                  onNavigate('company-home');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                  currentView === 'company-home' ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </button>
            </div>

            {/* Product Switcher in Mobile Drawer */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Product Suite
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {PRODUCTS_DATA.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onNavigate(prod.route);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs font-semibold ${
                      currentView === prod.route || (prod.status === 'live' && isOwnerOsContext)
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{prod.name}</span>
                    {prod.status === 'live' ? (
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-900/40 px-1.5 py-0.5 rounded">
                        Live
                      </span>
                    ) : (
                      <span className="text-[9px] text-slate-400 bg-slate-200 px-1.5 py-0.5 rounded">
                        Soon
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Contextual Owner OS Navigation if inside Owner OS */}
            {isOwnerOsContext && (
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block pb-1">
                  Owner OS Navigation
                </span>
                {ownerOsNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id, false);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between ${
                      currentView === item.id ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </button>
                ))}
              </div>
            )}

            {/* Company Links */}
            <div className="pt-2 border-t border-slate-100 flex flex-col space-y-1">
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
              >
                About SketchItUp Solutions
              </button>
              <button
                onClick={() => {
                  onNavigate('resources');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl"
              >
                Resources & FAQs
              </button>
            </div>

            {/* Bottom Demo Action */}
            <div className="pt-3 border-t border-slate-100">
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onOpenDemo(activeProduct?.name || 'SketchItUp Solutions');
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
