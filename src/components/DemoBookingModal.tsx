import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, Building, Phone, Mail, User, Layers } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { MRIDA_MODULES } from '../data/mridaOsData';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledModule?: string;
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({ isOpen, onClose, prefilledModule }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const isMridaContext = Boolean(prefilledModule && prefilledModule.toLowerCase().includes('mrida'));
  const productDisplayName = isMridaContext ? 'Mrida OS' : 'Owner OS';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: 'Business Owner / Founder',
    phone: '',
    email: '',
    industry: 'Manufacturing & Assembly',
    companySize: '20-100 employees',
    currentSoftware: 'Excel / Tally / Manual',
    selectedModules: prefilledModule ? [prefilledModule] : ['Command Center'],
    challenge: '',
    preferredTime: 'Morning (10 AM - 1 PM)'
  });

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setValidationError(null);
      setFormData((prev) => ({
        ...prev,
        industry: isMridaContext ? 'Agriculture, Agribusiness & Fertilizers' : prev.industry,
        selectedModules: prefilledModule ? [prefilledModule] : ['Command Center'],
      }));
    }
  }, [isOpen, prefilledModule, isMridaContext]);

  if (!isOpen) return null;

  const toggleModuleSelection = (moduleName: string) => {
    setFormData((prev) => {
      const exists = prev.selectedModules.includes(moduleName);
      if (exists) {
        return { ...prev, selectedModules: prev.selectedModules.filter((m) => m !== moduleName) };
      } else {
        return { ...prev, selectedModules: [...prev.selectedModules, moduleName] };
      }
    });
  };

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
          type: 'Demo Booking',
          modules: formData.selectedModules,
          challenge: formData.challenge
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden relative">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 md:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
              Demo Request Confirmed!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. A SketchItUp Solutions Operations Advisor will contact you within 2 business hours to walk you through <span className="text-[#876DFF] font-semibold">{productDisplayName}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full text-sm font-bold text-white bg-[#101312] hover:bg-black transition-all cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#876DFF] uppercase tracking-wider bg-[#876DFF]/10 px-3 py-1 rounded-full">
                Schedule Personalized Demo
              </span>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mt-2">
                See Your Business Through One Command Center.
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Step {step} of 2 — Tell us about your business operations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {step === 1 ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. GuruOm Industries LLP"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@guruomind.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Industry</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none bg-white"
                      >
                        <option>Agriculture, Agribusiness &amp; Fertilizers</option>
                        <option>Manufacturing &amp; Assembly</option>
                        <option>Industrial Equipment &amp; Tooling</option>
                        <option>Family Business / Multi-entity</option>
                        <option>Agri-Processing</option>
                        <option>Retail &amp; Distribution</option>
                        <option>Healthcare &amp; Pharma</option>
                        <option>Services &amp; Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Role</label>
                      <select
                        value={formData.designation}
                        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none bg-white"
                      >
                        <option>Business Owner / Founder</option>
                        <option>CEO / Managing Director</option>
                        <option>Plant / Operations Head</option>
                        <option>Finance Manager</option>
                        <option>Digital Transformation Lead</option>
                      </select>
                    </div>
                  </div>

                  {validationError && (
                    <p className="text-xs font-medium text-rose-600">{validationError}</p>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (formData.name && formData.company && formData.phone && formData.email) {
                          setValidationError(null);
                          setStep(2);
                        } else {
                          setValidationError('Please fill in all required fields (Name, Company, Phone, Email).');
                        }
                      }}
                      className="px-6 py-3 rounded-full text-sm font-bold text-white bg-[#101312] hover:bg-black transition-all flex items-center gap-2 cursor-pointer shadow"
                    >
                      <span>Next: Select Modules &amp; Time</span>
                      <ArrowRight className="w-4 h-4 text-[#BAF91A]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                      Select {isMridaContext ? 'Mrida OS' : ''} Modules You Are Most Interested In:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-2 bg-slate-50 border border-slate-200 rounded-xl">
                      {(isMridaContext
                        ? MRIDA_MODULES.map((m) => ({ id: m.id, name: m.title }))
                        : MODULES_DATA.map((m) => ({ id: m.id, name: m.name }))
                      ).map((mod) => {
                        const isSelected = formData.selectedModules.includes(mod.name);
                        return (
                          <button
                            type="button"
                            key={mod.id}
                            onClick={() => toggleModuleSelection(mod.name)}
                            className={`p-2 rounded-lg text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer border ${
                              isSelected
                                ? 'bg-[#101312] text-white border-[#101312]'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <span className="truncate">{mod.name}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF91A] shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Primary Operational Challenge (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.challenge}
                      onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                      placeholder="e.g. Unclear floor yield, Excel data overload, delayed customer orders..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#876DFF] outline-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                    >
                      &larr; Back to Contact Details
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-7 py-3 rounded-full text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow flex items-center gap-2 cursor-pointer"
                    >
                      <span>{loading ? 'Submitting...' : 'Confirm Demo Request'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
