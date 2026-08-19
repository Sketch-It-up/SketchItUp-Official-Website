import React, { useState } from 'react';
import { Check, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface WaitlistFormProps {
  productName: string;
  accentColor?: string;
  className?: string;
  compact?: boolean;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({
  productName,
  accentColor = '#BAF91A',
  className = '',
  compact = false,
}) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className={`w-full ${className}`}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-left space-y-2 shadow-xs"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="font-heading font-bold text-sm text-emerald-900">
                You're on the priority waitlist!
              </span>
            </div>
            <p className="text-xs text-emerald-800 leading-relaxed pl-8">
              We'll notify <strong>{email}</strong> the moment {productName} opens for private beta & anchor pilot onboarding.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <div className={`flex flex-col ${compact ? 'space-y-2' : 'sm:flex-row gap-2'}`}>
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email (e.g. alex@company.com)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl sm:rounded-full bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all shadow-xs"
                />
              </div>

              {!compact && (
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company name (optional)"
                  className="w-full sm:w-48 px-4 py-3 rounded-xl sm:rounded-full bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all shadow-xs"
                />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span>Joining...</span>
                ) : (
                  <>
                    <span>Join {productName} Waitlist</span>
                    <ArrowRight className="w-4 h-4 text-[#101312]" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 justify-center sm:justify-start pl-1">
              <Sparkles className="w-3 h-3 text-[#876DFF]" />
              <span>Priority access for pilot enterprise operators • Zero spam guarantee</span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
export default WaitlistForm;
