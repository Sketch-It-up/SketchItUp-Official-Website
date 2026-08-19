import React, { useState } from 'react';
import { BookOpen, FileText, HelpCircle, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Factory } from 'lucide-react';

interface ResourcesViewProps {
  onOpenDemo: (prefilledModule?: string) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onOpenDemo }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does SketchItUp Owner OS differ from traditional ERP software?",
      a: "Traditional ERPs are built for middle administrators to log transactions manually. Owner OS is an owner-first command layer that integrates your floor, sales, and accounts into one real-time dashboard with AI insights."
    },
    {
      q: "Do we need to replace our existing accounting software like Tally or Zoho Books?",
      a: "No! Owner OS integrates directly with Tally, QuickBooks, and Zoho Books. Your accounting team continues using their preferred ledger tool while Owner OS feeds live operational invoices and vouchers automatically."
    },
    {
      q: "How long does implementation take for a manufacturing plant?",
      a: "Our typical guided onboarding takes 2 to 4 weeks. We configure modules around your existing shop floor terminology and forms rather than forcing a 6-month overhaul."
    },
    {
      q: "Can machine operators on the shop floor use this easily?",
      a: "Yes. Floor tablets feature large touch buttons, barcode scanning, and multi-lingual interfaces so operators can log completed units or breakdown alerts in under 5 seconds."
    },
    {
      q: "How secure is our business data?",
      a: "Your data is protected with TLS 1.3 encryption in transit, AES-256 at rest, and strict Role-Based Access Control (RBAC). Only authorized users can see sensitive financial numbers."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Resources & Knowledge Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
          Case Studies, Articles & Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Explore real-world implementation insights and answers to common business owner questions.
        </p>
      </div>

      {/* Featured Case Study - GuruOm Industries */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/20 uppercase tracking-wider">
            Featured Implementation Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              GuruOm Industries: From Excel Chaos to 88% Real-Time Shop Floor Yield
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Before deploying Owner OS, GuruOm Industries relied on end-of-day handwritten paper tags and 12 separate Excel sheets. Today, the founder tracks floor yield, raw material buffer stock, and daily cash flow from one real-time mobile command center.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="text-xl font-bold font-heading text-[#00D2B8] block">3 Weeks</span>
                <span className="text-[10px] text-slate-400">Total Implementation</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="text-xl font-bold font-heading text-emerald-400 block">+14%</span>
                <span className="text-[10px] text-slate-400">Yield Improvement</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <span className="text-xl font-bold font-heading text-amber-400 block">Zero</span>
                <span className="text-[10px] text-slate-400">Manual Excel Reports</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center space-y-3">
            <Factory className="w-10 h-10 text-[#00D2B8] mx-auto" />
            <h3 className="font-heading font-bold text-white text-base">GuruOm Industries LLP</h3>
            <p className="text-xs text-slate-400">Auto Components & Precision Stamping</p>
            <button
              onClick={() => onOpenDemo("GuruOm Industries Case Study")}
              className="w-full py-2.5 rounded-full text-xs font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all cursor-pointer"
            >
              Request Similar Demo
            </button>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-heading font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#00BBA7]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
        <h2 className="text-2xl font-heading font-bold">Have a specific question about your floor setup?</h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Talk to a SketchItUp Operations Advisor today.
        </p>
        <button
          onClick={() => onOpenDemo()}
          className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all shadow-lg cursor-pointer"
        >
          Book a Consultation
        </button>
      </div>

    </div>
  );
};
