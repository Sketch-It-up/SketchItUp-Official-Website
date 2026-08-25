import React, { useState } from 'react';
import { 
  FileText, 
  Layers, 
  UserCheck, 
  CreditCard, 
  Database, 
  AlertTriangle, 
  Sparkles, 
  Activity, 
  Lock, 
  ShieldAlert, 
  ShieldCheck, 
  Clock, 
  Scale, 
  RefreshCw, 
  Mail, 
  ArrowLeft,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Building,
  MapPin,
  ChevronRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface TermsOfServiceViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const TermsOfServiceView: React.FC<TermsOfServiceViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('sketchitup.official@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const sections = [
    {
      id: "description-of-services",
      num: "01",
      title: "Description of Services",
      icon: Layers,
      accent: "#876DFF",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          SketchItUp provides ERP-lite software (OwnerOS for manufacturing and commercial SMEs; MridaOS for agribusiness) and related implementation and consulting services, delivered on a subscription basis, to help businesses manage operations such as order management, inventory, production planning, quality control, dispatch, and reporting.
        </p>
      )
    },
    {
      id: "account-registration",
      num: "02",
      title: "Account Registration",
      icon: UserCheck,
      accent: "#38bdf8",
      content: (
        <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 shrink-0"></div>
            <span>You must provide accurate, complete registration information and keep it updated.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 shrink-0"></div>
            <span>You are responsible for maintaining the confidentiality of login credentials and for all activity under your account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-2 shrink-0"></div>
            <span>You must notify us promptly of any unauthorized use of your account.</span>
          </li>
        </ul>
      )
    },
    {
      id: "subscription-fees-payment",
      num: "03",
      title: "Subscription, Fees, and Payment",
      icon: CreditCard,
      accent: "#34d399",
      content: (
        <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 shrink-0"></div>
            <span>Access to the Services is provided on a subscription basis as set out in the applicable order form, quote, or invoice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 shrink-0"></div>
            <span>Fees are due as specified at signup or renewal. Late payments may result in suspension of access after notice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 shrink-0"></div>
            <span>Fees are non-refundable except as expressly stated in a separate written agreement or required by law.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-2 shrink-0"></div>
            <span>We may change pricing on renewal with advance notice.</span>
          </li>
        </ul>
      )
    },
    {
      id: "customer-data-ownership",
      num: "04",
      title: "Customer Data Ownership",
      icon: Database,
      accent: "#BAF91A",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            You own your <strong className="text-slate-900 font-semibold">Customer Business Data</strong> (all data you or your Users input into the Services, including PO, inventory, production, and financial records). We do not claim ownership of it.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <p className="text-xs text-slate-600 leading-relaxed">
              You grant us a limited license to host, process, and use your data solely to provide, maintain, and improve the Services, as described in our{' '}
              <button
                onClick={() => onNavigate ? onNavigate('privacy-policy') : null}
                className="text-[#876DFF] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              .
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              You are responsible for the accuracy, quality, and legality of the data you input, and for obtaining any necessary consents (e.g., for personal data of your own employees or vendors included in your data).
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Upon termination, you may export your Customer Business Data within <strong className="text-slate-700 font-medium">30 days</strong>, after which it may be deleted per our standard data retention practices.
          </p>
        </div>
      )
    },
    {
      id: "acceptable-use",
      num: "05",
      title: "Acceptable Use",
      icon: AlertTriangle,
      accent: "#f87171",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p className="text-slate-800 font-medium">You agree not to:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Use the Services for any unlawful purpose or in violation of these Terms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Attempt to gain unauthorized access to the Services, other accounts, or underlying infrastructure.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Reverse-engineer, decompile, or attempt to extract source code, except as permitted by law.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Introduce malware, conduct security testing without prior written authorization, or interfere with the Services' operation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>Resell, sublicense, or provide the Services to third parties outside your organization without our consent.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
            We may suspend accounts that violate this section, with notice where practicable.
          </p>
        </div>
      )
    },
    {
      id: "intellectual-property",
      num: "06",
      title: "Intellectual Property",
      icon: Sparkles,
      accent: "#876DFF",
      content: (
        <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>The Services, including all software, design, trademarks, and documentation, are owned by SketchItUp or its licensors and are protected by intellectual property laws.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>Subject to these Terms and payment of applicable fees, we grant you a non-exclusive, non-transferable, revocable right to use the Services for your internal business operations.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>No rights are granted except as expressly stated in these Terms.</span>
          </li>
        </ul>
      )
    },
    {
      id: "service-availability",
      num: "07",
      title: "Service Availability",
      icon: Activity,
      accent: "#38bdf8",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          We aim to provide reliable, continuously available Services but do not guarantee uninterrupted access. Scheduled maintenance, updates, or factors outside our reasonable control (e.g., internet outages, force majeure events) may affect availability. Specific uptime commitments, if any, will be set out in a separate Service Level Agreement (SLA).
        </p>
      )
    },
    {
      id: "confidentiality",
      num: "08",
      title: "Confidentiality",
      icon: Lock,
      accent: "#fbbf24",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Each party agrees to protect the other's confidential information using at least the same degree of care it uses for its own confidential information, and not to disclose it except as necessary to perform under these Terms or as required by law.
        </p>
      )
    },
    {
      id: "limitation-of-liability",
      num: "09",
      title: "Limitation of Liability",
      icon: ShieldAlert,
      accent: "#f472b6",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p className="text-slate-800 font-semibold text-xs uppercase font-mono">
            To the maximum extent permitted by law:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>The Services are provided "as is" and "as available," without warranties of any kind, express or implied, except as expressly stated in these Terms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, or data, arising from use of the Services.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Each party's total aggregate liability arising out of or related to these Terms will not exceed the fees paid by Customer to SketchItUp in the 12 months preceding the claim, except in cases of gross negligence, willful misconduct, or breach of confidentiality obligations.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "indemnification",
      num: "10",
      title: "Indemnification",
      icon: ShieldCheck,
      accent: "#34d399",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          You agree to indemnify and hold SketchItUp harmless from claims arising from your breach of these Terms, misuse of the Services, or violation of applicable law, including claims related to the data you input into the Services.
        </p>
      )
    },
    {
      id: "term-and-termination",
      num: "11",
      title: "Term and Termination",
      icon: Clock,
      accent: "#876DFF",
      content: (
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>These Terms remain in effect for as long as you use the Services or as specified in your subscription agreement.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>Either party may terminate for the other party's material breach that remains uncured 30 days after written notice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>We may suspend or terminate access immediately for non-payment, security risk, or violation of Section 5 (Acceptable Use).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
            <span>Upon termination, your right to use the Services ends, subject to the data export rights in Section 4.</span>
          </li>
        </ul>
      )
    },
    {
      id: "governing-law",
      num: "12",
      title: "Governing Law and Dispute Resolution",
      icon: Scale,
      accent: "#BAF91A",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          These Terms are governed by the laws of India, without regard to conflict of law principles. The courts at <strong className="text-slate-900 font-semibold">Pune, Maharashtra</strong> shall have exclusive jurisdiction over any disputes, subject to any mandatory arbitration or mediation process specified in a separate customer agreement.
        </p>
      )
    },
    {
      id: "changes-to-terms",
      num: "13",
      title: "Changes to These Terms",
      icon: RefreshCw,
      accent: "#38bdf8",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          We may update these Terms from time to time. Material changes will be communicated via the website or email to account administrators, and will take effect as of the stated "Last Updated" date. Continued use after changes take effect constitutes acceptance.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-24">
      
      {/* Top Header / Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-2xs backdrop-blur-md bg-white/95">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate ? onNavigate('company-home') : window.history.back()}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="hidden sm:inline text-xs font-medium text-slate-500">
              Legal & Agreements
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate ? onNavigate('privacy-policy') : null}
              className="text-xs font-medium text-slate-500 hover:text-[#876DFF] transition-colors cursor-pointer hidden md:inline-flex items-center gap-1"
            >
              <span>Privacy Policy</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <button
              onClick={() => onNavigate ? onNavigate('security-compliance') : null}
              className="text-xs font-medium text-slate-500 hover:text-[#876DFF] transition-colors cursor-pointer hidden md:inline-flex items-center gap-1"
            >
              <span>Security Compliance</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#876DFF]"></span>
              <span>Version: 2026.1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#876DFF]/10 border border-[#876DFF]/25 text-xs font-mono font-bold text-[#876DFF]">
            <FileText className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">SERVICE AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-1">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Effective Date: September 01, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-md shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Last Updated: September 01, 2026</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs mt-4">
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              These Terms of Service ("Terms") govern access to and use of the website, OwnerOS, MridaOS, and related services (collectively, the "Services") provided by <strong className="font-semibold text-slate-900">SketchItUp Solutions</strong> ("SketchItUp," "we," "us," or "our"). By accessing or using the Services, you ("Customer," "you," or "your") agree to be bound by these Terms. If you are entering into these Terms on behalf of a company, you represent that you have authority to bind that company.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sections 1 to 13 */}
        <div className="space-y-5">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-3.5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                    style={{ 
                      backgroundColor: `${section.accent}15`, 
                      border: `1px solid ${section.accent}30`,
                      color: section.accent === '#BAF91A' ? '#101312' : section.accent 
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-0.5 flex-1">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                      Section {section.num}
                    </span>
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-14 pt-1">
                  {section.content}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 14: Contact Us */}
        <motion.div
          id="contact-us"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#876DFF] flex items-center justify-center shrink-0 shadow-2xs">
              <Mail className="w-5 h-5" />
            </div>

            <div className="space-y-0.5 flex-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                Section 14
              </span>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                Contact Us
              </h2>
            </div>
          </div>

          <div className="pl-0 sm:pl-14 grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Building className="w-4 h-4 text-[#876DFF]" />
                <span>SketchItUp Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block mb-1">Inquiries & Legal Contact:</span>
                <a 
                  href="mailto:sketchitup.official@gmail.com" 
                  className="font-mono text-xs text-[#876DFF] font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>sketchitup.official@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Have questions regarding commercial contracts, custom SLAs, or enterprise terms?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenDemo ? onOpenDemo('Terms & Commercial Consultation') : null}
                  className="px-4 py-2 rounded-full bg-[#101312] text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Request Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation Bar for Legal Pages */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">SketchItUp Solutions Legal:</span>
            <span className="text-slate-800 font-medium">Terms of Service</span>
            <span>•</span>
            <button
              onClick={() => onNavigate ? onNavigate('privacy-policy') : null}
              className="text-[#876DFF] hover:underline cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate ? onNavigate('security-compliance') : null}
              className="text-[#876DFF] hover:underline cursor-pointer font-medium"
            >
              Security & Compliance
            </button>
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('company-home') : window.history.back()}
            className="text-slate-600 hover:text-slate-900 cursor-pointer font-medium inline-flex items-center gap-1"
          >
            <span>Return to Main Website</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default TermsOfServiceView;
