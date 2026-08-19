import React from 'react';
import { Building2, Sparkles, Target, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onOpenDemo: (prefilledModule?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenDemo }) => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          About & Company Vision
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
          Reinventing How Business Owners Run Their Enterprises
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          SketchItUp Solutions LLP exists to build digital operating systems that give business owners absolute visibility, clarity, and control.
        </p>
      </div>

      {/* Founder Story & Vision */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Founder Perspective</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
            "Software Should Work for the Business Owner, Not the Other Way Around."
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            For decades, SME business owners have been forced to choose between complex, rigid ERP systems built for corporate administrators, or chaotic scattered spreadsheets. SketchItUp was founded to build a third option — an <strong>Owner-First Platform OS</strong> that brings every operational detail into one real-time command center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-lg">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To eliminate operational blindspots for manufacturing and SME business owners through real-time data connectivity and intelligent AI decision support.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-lg">Our Long-Term AI Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To evolve Owner OS into a trusted agentic AI partner that continuously monitors floor yield, predicts cash flow risks, and drafts optimal decisions for owner approval.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-wider">Leadership & Engineering</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
            The Team Behind SketchItUp Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#0F172A] text-[#00D2B8] flex items-center justify-center font-bold text-xl mx-auto font-heading">
              SIU
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg">SketchItUp Core Engineering</h3>
            <span className="text-xs text-[#00BBA7] font-semibold block">Industrial OS Division</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full-stack software engineers, data pipeline specialists, and industrial workflow architects.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-teal-800 text-white flex items-center justify-center font-bold text-xl mx-auto font-heading">
              OA
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-lg">Operations Advisory Team</h3>
            <span className="text-xs text-[#00BBA7] font-semibold block">Manufacturing & SME Practice</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              On-ground consultants guiding floor adoption, inventory audits, and change management.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl font-heading font-bold">Partner with SketchItUp Solutions</h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Let's discuss how Owner OS can transform your business operations.
        </p>
        <button
          onClick={() => onOpenDemo()}
          className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all shadow-lg cursor-pointer"
        >
          Book a Demonstration
        </button>
      </div>

    </div>
  );
};
