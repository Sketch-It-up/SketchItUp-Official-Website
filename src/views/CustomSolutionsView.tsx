import React, { useState } from 'react';
import { CUSTOM_SOLUTIONS_STEPS } from '../data/modulesData';
import { Code, ArrowRight, CheckCircle2, ShieldCheck, Building, Send } from 'lucide-react';

interface CustomSolutionsViewProps {
  onOpenDemo: (prefilledModule?: string) => void;
}

export const CustomSolutionsView: React.FC<CustomSolutionsViewProps> = ({ onOpenDemo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    workflowDescription: '',
    estimatedUsers: '10-50 users'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          type: 'Custom Software Inquiry',
          challenge: formData.workflowDescription
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#00BBA7] uppercase tracking-widest bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Bespoke Engineering Division
        </span>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
          Custom Operating Systems Built Around How You Work
        </h1>
        <p className="text-slate-600 text-base leading-relaxed">
          Standard off-the-shelf software forces businesses to change their workflows. We build bespoke software modules that integrate seamlessly into your Owner OS.
        </p>
      </div>

      {/* Process 8-Step Track */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-2xl font-heading font-bold text-slate-900 text-center">
          Our 8-Step Custom Development Lifecycle
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CUSTOM_SOLUTIONS_STEPS.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <span className="text-2xl font-bold font-mono text-[#00BBA7]">{step.step}</span>
              <h3 className="font-heading font-bold text-slate-900 text-sm">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-[#0F172A] text-white rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#00D2B8] uppercase tracking-wider">
              Consultation & Scope Audit
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Tell Us About Your Unique Workflow Requirements
            </h2>
            <p className="text-xs text-slate-400">
              Our software architects will review your process description and present a custom engineering proposal.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-slate-900 rounded-2xl text-center space-y-3 border border-slate-800">
              <CheckCircle2 className="w-10 h-10 text-[#00D2B8] mx-auto" />
              <h3 className="text-xl font-heading font-bold text-white">Inquiry Received!</h3>
              <p className="text-xs text-slate-300">
                A Lead Solutions Architect from SketchItUp Solutions will reach out to schedule an initial technical discovery session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Mehta Auto Components"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@mehtaauto.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Describe Your Current Workflow & What You Need Built *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.workflowDescription}
                  onChange={(e) => setFormData({ ...formData, workflowDescription: e.target.value })}
                  placeholder="Describe your floor process, machine logs, custom approvals, or software integrations needed..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:ring-2 focus:ring-[#00D2B8] outline-none"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-[#00D2B8] hover:bg-[#00E5C9] transition-all shadow-lg cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Custom Solution Inquiry'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

    </div>
  );
};
