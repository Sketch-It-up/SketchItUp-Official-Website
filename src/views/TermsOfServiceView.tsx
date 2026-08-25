import React from 'react';
import { 
  FileText, 
  Layers, 
  UserCheck, 
  CreditCard, 
  Database, 
  ShieldAlert, 
  Sparkles, 
  Activity, 
  Lock, 
  AlertTriangle, 
  Scale, 
  Clock, 
  Gavel, 
  RefreshCw, 
  Mail, 
  ArrowLeft,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

interface TermsOfServiceViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const TermsOfServiceView: React.FC<TermsOfServiceViewProps> = ({ onNavigate, onOpenDemo }) => {
  const sections = [
    {
      id: "description-of-services",
      num: "01",
      title: "Description of Services",
      icon: Layers,
      accent: "#BAF91A",
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
      accent: "#876DFF",
      content: (
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>You must provide accurate, complete registration information and keep it updated.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>You are responsible for maintaining the confidentiality of login credentials and for all activity under your account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>You must notify us promptly of any unauthorized use of your account.</span>
          </li>
        </ul>
      )
    },
    {
      id: "subscription-fees",
      num: "03",
      title: "Subscription, Fees, and Payment",
      icon: CreditCard,
      accent: "#38bdf8",
      content: (
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Access to the Services is provided on a subscription basis as set out in the applicable order form, quote, or invoice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Fees are due as specified at signup or renewal. Late payments may result in suspension of access after notice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Fees are non-refundable except as expressly stated in a separate written agreement or required by law.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
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
      accent: "#34d399",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
            <strong className="font-semibold text-emerald-900">You own your Customer Business Data:</strong> All data you or your Users input into the Services (including PO, inventory, production, and financial records) remains your exclusive property. We do not claim ownership of it.
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>You grant us a limited license to host, process, and use your data solely to provide, maintain, and improve the Services, as described in our Privacy Policy.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>You are responsible for the accuracy, quality, and legality of the data you input, and for obtaining any necessary consents (e.g., for personal data of your own employees or vendors included in your data).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Upon termination, you may export your Customer Business Data within a 30-day data export window, after which it may be deleted per our data retention practices.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "acceptable-use",
      num: "05",
      title: "Acceptable Use",
      icon: ShieldAlert,
      accent: "#fbbf24",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>You agree not to:</p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span>Use the Services for any unlawful purpose or in violation of these Terms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span>Attempt to gain unauthorized access to the Services, other accounts, or underlying infrastructure.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span>Reverse-engineer, decompile, or attempt to extract source code, except as permitted by law.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span>Introduce malware, conduct security testing without prior written authorization, or interfere with the Services' operation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <span>Resell, sublicense, or provide the Services to third parties outside your organization without our consent.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
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
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>The Services, including all software, design, trademarks, and documentation, are owned by SketchItUp or its licensors and are protected by intellectual property laws.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Subject to these Terms and payment of applicable fees, we grant you a non-exclusive, non-transferable, revocable right to use the Services for your internal business operations.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
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
      accent: "#BAF91A",
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
      icon: AlertTriangle,
      accent: "#f87171",
      content: (
        <div className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-800">To the maximum extent permitted by law:</p>
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
      icon: Scale,
      accent: "#876DFF",
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
      accent: "#38bdf8",
      content: (
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>These Terms remain in effect for as long as you use the Services or as specified in your subscription agreement.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Either party may terminate for the other party's material breach that remains uncured 30 days after written notice.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>We may suspend or terminate access immediately for non-payment, security risk, or violation of Section 5 (Acceptable Use).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span>Upon termination, your right to use the Services ends, subject to the data export rights in Section 4.</span>
          </li>
        </ul>
      )
    },
    {
      id: "governing-law",
      num: "12",
      title: "Governing Law and Dispute Resolution",
      icon: Gavel,
      accent: "#BAF91A",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          These Terms are governed by the laws of India, without regard to conflict of law principles. The courts at Pune, Maharashtra shall have exclusive jurisdiction over any disputes, subject to any mandatory arbitration or mediation process specified in a separate customer agreement.
        </p>
      )
    },
    {
      id: "changes-to-terms",
      num: "13",
      title: "Changes to These Terms",
      icon: RefreshCw,
      accent: "#34d399",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          We may update these Terms from time to time. Material changes will be communicated via the website or email to account administrators, and will take effect as of the stated "Last Updated" date. Continued use after changes take effect constitutes acceptance.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20">
      
      {/* Top Header / Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <button
            onClick={() => onNavigate ? onNavigate('company-home') : window.history.back()}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-full transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#876DFF]"></span>
            <span>Legal Framework & Governance</span>
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#876DFF]/15 border border-[#876DFF]/30 text-xs font-mono font-bold text-[#876DFF]">
            <FileText className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">LEGAL AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Effective Date: September 01, 2026</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Last Updated: September 01, 2026</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl pt-2">
            These Terms of Service ("Terms") govern access to and use of the website, OwnerOS, MridaOS, and related services (collectively, the "Services") provided by SketchItUp Solutions ("SketchItUp," "we," "us," or "our"). By accessing or using the Services, you ("Customer," "you," or "your") agree to be bound by these Terms. If you are entering into these Terms on behalf of a company, you represent that you have authority to bind that company.
          </p>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sections 1 to 13 */}
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                  style={{ 
                    backgroundColor: `${section.accent}15`, 
                    border: `1px solid ${section.accent}30`,
                    color: section.accent === '#BAF91A' ? '#101312' : section.accent 
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1 flex-1">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
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

        {/* Section 14: Contact Us */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-[#101312] text-white border border-slate-800 p-6 sm:p-8 shadow-md space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold text-[#BAF91A] uppercase">
                Section 14 • Legal Inquiries
              </span>
              <h2 className="text-xl font-heading font-bold text-white">
                Contact SketchItUp Solutions
              </h2>
              <div className="text-xs text-slate-300 space-y-0.5">
                <p className="font-semibold text-white">SketchItUp Solutions LLP</p>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="pt-2 sm:pt-0">
              <a
                href="mailto:sketchitup.official@gmail.com?subject=Terms%20of%20Service%20Inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#BAF91A] text-slate-950 text-xs font-bold hover:bg-[#d0ff48] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>sketchitup.official@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default TermsOfServiceView;
