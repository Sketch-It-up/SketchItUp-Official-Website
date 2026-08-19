import React from 'react';
import { 
  PRODUCTS_DATA, 
  ProductItem 
} from '../data/productsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Building2, 
  Clock, 
  ShieldCheck,
  Sprout,
  Store,
  HeartPulse,
  Truck,
  LayoutDashboard
} from 'lucide-react';
import { motion } from 'motion/react';
import { WaitlistForm } from '../components/WaitlistForm';

interface ProductComingSoonViewProps {
  productId: string;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
  Store,
  HeartPulse,
  Truck,
  LayoutDashboard,
};

export const ProductComingSoonView: React.FC<ProductComingSoonViewProps> = ({
  productId,
  onNavigate,
  onOpenDemo,
}) => {
  const product: ProductItem = 
    PRODUCTS_DATA.find((p) => p.id === productId || p.route.includes(productId)) || 
    PRODUCTS_DATA[1];

  const IconComponent = ICON_MAP[product.icon] || Layers;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] py-10 px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Top Breadcrumb & Parent Link */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button
          onClick={() => onNavigate('company-home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Product Suite</span>
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400 font-medium">Part of</span>
          <span className="font-heading font-bold text-slate-900">SketchItUp Solutions</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="uppercase tracking-wider text-[11px] font-bold">Upcoming Operating System</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500 font-normal">{product.vertical}</span>
        </motion.div>

        {/* Product Title with Vertical Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#101312] text-white shadow-xl mb-2 mx-auto">
            <IconComponent className="w-8 h-8 text-[#BAF91A]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight">
            {product.name}
          </h1>
          <p className="text-lg sm:text-xl text-[#876DFF] font-medium font-heading">
            {product.tagline}
          </p>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {product.shortDesc}
          </p>
        </motion.div>

        {/* Waitlist Capture Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-2xl mx-auto"
        >
          <div className="space-y-4">
            <div className="text-left space-y-1">
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Request Early Access & Pilot Partnership
              </h3>
              <p className="text-xs text-slate-500">
                Join operators co-developing the {product.name} specification before public release.
              </p>
            </div>
            
            <WaitlistForm 
              productName={product.name}
              accentColor={product.accentColor}
            />
          </div>
        </motion.div>

      </div>

      {/* Target Metrics / Specifications */}
      {product.metrics && (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {product.metrics.map((metric, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center space-y-1"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {metric.label}
              </div>
              <div className="text-xl font-heading font-bold text-slate-900">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Planned Capabilities Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#876DFF]">
              Blueprint In Progress
            </span>
            <h2 className="text-2xl font-heading font-bold text-slate-900 mt-1">
              Planned Core Capabilities for {product.name}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            <span>Architecture Phase</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.capabilities?.map((cap, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start gap-3 hover:bg-slate-100/70 transition-colors"
            >
              <div className="w-6 h-6 rounded-lg bg-[#101312] text-[#BAF91A] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                {idx + 1}
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  {cap}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Proven Heritage Banner */}
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#101312] via-[#1a1429] to-[#0f172a] text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <ShieldCheck className="w-5 h-5 text-[#BAF91A]" />
            <span className="text-xs font-bold text-[#BAF91A] uppercase tracking-wider">
              Proven Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
            Built by the Engineering Team Behind Owner OS
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Every product in the SketchItUp suite shares our battle-tested modular engine, unified live database layer, and executive-first command interface.
          </p>
        </div>

        <button
          onClick={() => onNavigate('owner-os-home')}
          className="px-6 py-3 rounded-full text-xs font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
        >
          <span>Explore Live Owner OS</span>
          <ArrowRight className="w-4 h-4 text-[#101312]" />
        </button>
      </div>

      {/* Custom Solution / Early Enterprise Access CTA */}
      <div className="max-w-4xl mx-auto text-center space-y-4 py-6 border-t border-slate-200">
        <h3 className="text-lg font-heading font-bold text-slate-900">
          Need a Custom Operating System for Your Industry Right Now?
        </h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Our solutions team designs and deploys bespoke operational architectures tailored to unique workflow requirements.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => onOpenDemo(`Custom Build: ${product.name}`)}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs cursor-pointer"
          >
            Request Bespoke Build Consultation
          </button>
        </div>
      </div>

    </div>
  );
};
export default ProductComingSoonView;
