import React from 'react';
import { 
  Shield, 
  Layers, 
  Database, 
  CheckCircle2, 
  Share2, 
  Clock, 
  Lock, 
  Cookie, 
  UserCheck, 
  Baby, 
  Globe2, 
  RefreshCw, 
  Mail, 
  ArrowLeft,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onNavigate, onOpenDemo }) => {
  const sections = [
    {
      id: "scope-of-policy",
      num: "01",
      title: "Scope of This Policy",
      icon: Layers,
      accent: "#876DFF",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>This Policy covers two distinct categories of information:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-xs font-heading">Account & Contact Information</strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Information about the individuals who sign up for, administer, or use the Services on behalf of a customer business ("Users").
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-xs font-heading">Customer Business Data</strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                The operational data our customers (and authorized Users) upload, enter, or generate while using the Services (POs, inventory, production, QC records, etc.).
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-1">
            For Customer Business Data, we act as a <strong className="text-slate-700 font-semibold">data processor/service provider</strong>. The customer business remains the <strong className="text-slate-700 font-semibold">data owner/controller</strong> and is responsible for ensuring it has the requisite rights to share that data with us.
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      num: "02",
      title: "Information We Collect",
      icon: Database,
      accent: "#BAF91A",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <div className="space-y-2">
            <p className="font-semibold text-slate-800 text-xs uppercase font-mono">a. Information you provide directly</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span>Name, business email, phone number, job title, and company details when registering for an account or contacting us.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span>Billing and payment details (processed securely via our PCI-compliant payment gateway; we do not store full card numbers).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span>Support requests, onboarding feedback, and written correspondence.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <p className="font-semibold text-slate-800 text-xs uppercase font-mono">b. Information collected automatically</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span>Usage data: pages visited, system features used, login timestamps, IP address, device telemetry, and browser type.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span>Cookies and session management tokens (see Section 7).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <p className="font-semibold text-slate-800 text-xs uppercase font-mono">c. Customer Business Data</p>
            <p className="text-xs text-slate-600">
              Data your organization inputs into OwnerOS / MridaOS in the course of operating the Services (e.g., purchase order details, item master lists, machine route configurations, floor job cards, dispatch schedules, and QC logs).
            </p>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use-information",
      num: "03",
      title: "How We Use Information",
      icon: CheckCircle2,
      accent: "#38bdf8",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>We use collected information solely to:</p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Provide, operate, and maintain OwnerOS and MridaOS.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Process transactions and manage subscription billing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Provide technical customer support and respond to inquiries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Improve, secure, and troubleshoot application performance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Send essential service communications (updates, security alerts, maintenance notices).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Comply with legal obligations and enforce our Terms of Service.</span>
            </li>
          </ul>
          <div className="p-3 rounded-xl bg-slate-100 text-slate-800 font-medium text-xs">
            We do not sell personal information or Customer Business Data to third parties under any circumstances.
          </div>
        </div>
      )
    },
    {
      id: "how-we-share-information",
      num: "04",
      title: "How We Share Information",
      icon: Share2,
      accent: "#34d399",
      content: (
        <div className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
          <p>We may share information strictly with:</p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Sub-processors / service providers:</strong> Trusted infrastructure partners who help us operate the Services (cloud hosting, email delivery, transactional billing), bound under strict confidentiality and data protection agreements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Professional advisors:</strong> Legal, accounting, and compliance counsel as necessary.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Statutory authorities:</strong> Where required by applicable law, regulation, or valid court order.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Successor entity:</strong> In the event of a merger, acquisition, or sale of corporate assets, with notice to affected customers.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "data-retention",
      num: "05",
      title: "Data Retention",
      icon: Clock,
      accent: "#fbbf24",
      content: (
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span><strong className="text-slate-800 font-medium">Account information:</strong> Retained as long as the account is active, and for a reasonable period thereafter to comply with statutory legal, tax, or auditing obligations.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
            <span><strong className="text-slate-800 font-medium">Customer Business Data:</strong> Retained for the active duration of your subscription, and for a 30 to 90 day export window post-termination, after which it is securely purged per standard deletion routines.</span>
          </li>
        </ul>
      )
    },
    {
      id: "data-security",
      num: "06",
      title: "Data Security",
      icon: Lock,
      accent: "#876DFF",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            We implement comprehensive technical and organizational safeguards designed to protect your information against unauthorized access, destruction, loss, alteration, or disclosure.
          </p>
          <div className="pt-1">
            <button
              onClick={() => onNavigate ? onNavigate('security-compliance') : null}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#876DFF] hover:text-[#7254f5] transition-colors cursor-pointer"
            >
              <span>View full details on our Security & Compliance page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: "cookies-tracking",
      num: "07",
      title: "Cookies and Tracking",
      icon: Cookie,
      accent: "#BAF91A",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          We use functional cookies and session tokens to maintain authorized user sessions, remember UI preferences, and monitor service telemetry. You can govern cookies through browser settings, though disabling mandatory session tokens may prevent access to authenticated portions of the platform.
        </p>
      )
    },
    {
      id: "your-rights",
      num: "08",
      title: "Your Rights & Grievance Mechanism",
      icon: UserCheck,
      accent: "#38bdf8",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            In alignment with applicable regulations (including India's Digital Personal Data Protection Act, 2023), you may have the right to:
          </p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Access and review the personal data we hold about you.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Request correction of inaccurate or incomplete personal records.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Request erasure of your personal data, subject to statutory retention mandates.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
              <span>Withdraw consent for optional communications at any time.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            To exercise these rights, please contact our Grievance Desk at <a href="mailto:sketchitup.official@gmail.com" className="text-[#876DFF] font-mono hover:underline">sketchitup.official@gmail.com</a>. If your data was input by your employer/customer business, please contact them directly as the primary data controller.
          </p>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      num: "09",
      title: "Children's Privacy",
      icon: Baby,
      accent: "#f472b6",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          Our Services are designed exclusively for business and enterprise use by adults and are not directed to individuals under 18. We do not knowingly collect personal data from minors.
        </p>
      )
    },
    {
      id: "international-transfers",
      num: "10",
      title: "International Data Transfers",
      icon: Globe2,
      accent: "#34d399",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          If data is transferred or stored outside India, we take rigorous contractual and technical measures to ensure it receives an equivalent standard of protection consistent with applicable law.
        </p>
      )
    },
    {
      id: "changes-to-policy",
      num: "11",
      title: "Changes to This Policy",
      icon: RefreshCw,
      accent: "#876DFF",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          We may update this Policy periodically. Material modifications will be posted on our website or communicated directly via email to designated account administrators. Continued use of the Services signifies acceptance of updated terms.
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
            <span className="w-2 h-2 rounded-full bg-[#BAF91A]"></span>
            <span>Data Protection & DPDP 2023 Aligned</span>
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
            <Shield className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">PRIVACY & DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Privacy Policy
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
            SketchItUp Solutions ("SketchItUp," "we," "us," or "our") provides OwnerOS, MridaOS, and related software and consulting services (collectively, the "Services") to business customers. This Privacy Policy explains how we collect, use, share, and protect information in connection with the Services and our website.
          </p>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sections 1 to 11 */}
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

        {/* Section 12: Contact Us & Grievance */}
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
                Section 12 • Privacy & Grievance Desk
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
                href="mailto:sketchitup.official@gmail.com?subject=Privacy%20Policy%20Inquiry"
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

export default PrivacyPolicyView;
