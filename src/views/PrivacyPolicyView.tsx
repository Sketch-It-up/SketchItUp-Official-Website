import React, { useState } from 'react';
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
  ExternalLink,
  Copy,
  Check,
  Building,
  MapPin,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('sketchitup.official@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const sections = [
    {
      id: "scope-of-policy",
      num: "01",
      title: "Scope of This Policy",
      icon: Layers,
      accent: "#876DFF",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>This Policy covers two categories of information:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-xs font-heading">
                Account & Contact Information
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                Information about the individuals who sign up for, administer, or use the Services on behalf of a customer business ("Users").
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <strong className="text-slate-900 font-semibold block text-xs font-heading">
                Customer Business Data
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                The operational data our customers (and their authorized Users) upload, enter, or generate while using the Services, such as purchase orders, inventory records, production and job card data, vendor/customer master data, and financial records.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-1">
            For Customer Business Data, we act as a <strong className="text-slate-700 font-semibold">data processor/service provider</strong>. The customer business remains the <strong className="text-slate-700 font-semibold">data owner/controller</strong> and is responsible for ensuring it has the right to share that data with us, including any personal data of its own employees, vendors, or customers contained within it.
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
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          {/* Sub-item a */}
          <div className="space-y-2">
            <p className="font-semibold text-slate-900 text-xs font-mono uppercase tracking-wide">
              a. Information you provide directly
            </p>
            <ul className="space-y-1.5 pl-1 text-xs">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-1.5 shrink-0"></div>
                <span>Name, business email, phone number, job title, and company details when registering for an account or contacting us.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-1.5 shrink-0"></div>
                <span>Billing and payment details (processed via our payment processor; we do not store full card numbers).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-1.5 shrink-0"></div>
                <span>Support requests, feedback, and correspondence.</span>
              </li>
            </ul>
          </div>

          {/* Sub-item b */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <p className="font-semibold text-slate-900 text-xs font-mono uppercase tracking-wide">
              b. Information collected automatically
            </p>
            <ul className="space-y-1.5 pl-1 text-xs">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-1.5 shrink-0"></div>
                <span>Usage data: pages visited, features used, login timestamps, IP address, device/browser type.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-1.5 shrink-0"></div>
                <span>Cookies and similar technologies (see Section 7).</span>
              </li>
            </ul>
          </div>

          {/* Sub-item c */}
          <div className="space-y-2 pt-3 border-t border-slate-100">
            <p className="font-semibold text-slate-900 text-xs font-mono uppercase tracking-wide">
              c. Customer Business Data
            </p>
            <p className="text-xs text-slate-600 pl-1">
              Data your organization inputs into OwnerOS/MridaOS in the course of using the Services (e.g., PO details, item masters, machine/route data, dispatch and QC records).
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
          <p>We use information to:</p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Provide, operate, and maintain the Services.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Process transactions and manage subscriptions/billing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Provide customer support and respond to inquiries.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Improve, secure, and troubleshoot the Services.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Send service-related communications (updates, maintenance notices).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Send marketing communications where permitted, with an option to opt out.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Comply with legal obligations and enforce our Terms of Service.</span>
            </li>
          </ul>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800">
            We do not sell personal information or Customer Business Data to third parties.
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
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>We may share information with:</p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Sub-processors / service providers:</strong> Who help us operate the Services (e.g., cloud hosting, email delivery, payment processing), under contractual confidentiality and data protection obligations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Professional advisors:</strong> (Legal, accounting) as needed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">Authorities:</strong> Where required by law, regulation, or valid legal process.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-800 font-medium">A successor entity:</strong> In the event of a merger, acquisition, or sale of assets, with notice to affected customers where required.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
            We do not permit sub-processors to use Customer Business Data for any purpose other than providing the Services to us.
          </p>
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
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p className="text-slate-800 font-medium text-xs">We retain:</p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-900 font-medium">Account information:</strong> For as long as the account is active, and for a reasonable period afterward to comply with legal, tax, or accounting requirements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] mt-1.5 shrink-0"></div>
              <span><strong className="text-slate-900 font-medium">Customer Business Data:</strong> For the duration of the customer's subscription, and for 30–90 days after termination to allow data export, unless a longer period is required by law or agreed in writing.</span>
            </li>
          </ul>
          <p className="text-xs text-slate-500 pt-1">
            Customers may request earlier deletion of their data by contacting us (see Section 12).
          </p>
        </div>
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
            We implement technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="pt-1">
            <button
              onClick={() => onNavigate ? onNavigate('security-compliance') : null}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#876DFF] hover:text-[#7254f5] transition-colors cursor-pointer bg-[#876DFF]/10 px-3.5 py-2 rounded-lg border border-[#876DFF]/20"
            >
              <ShieldCheck className="w-4 h-4 text-[#876DFF]" />
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
          We use cookies and similar technologies to operate our website and Services, remember preferences, and understand usage patterns. You can control cookies through your browser settings; disabling certain cookies may affect functionality.
        </p>
      )
    },
    {
      id: "your-rights",
      num: "08",
      title: "Your Rights",
      icon: UserCheck,
      accent: "#38bdf8",
      content: (
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            Depending on applicable law (including India's Digital Personal Data Protection Act, 2023, where applicable), you may have the right to:
          </p>
          <ul className="space-y-2 text-xs">
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Access the personal data we hold about you.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Correct inaccurate or incomplete data.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Request erasure of your personal data, subject to legal/contractual retention requirements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Withdraw consent for processing based on consent.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0"></div>
              <span>Raise a grievance regarding how your data is handled.</span>
            </li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 mt-2">
            <p className="text-xs text-slate-600 leading-relaxed">
              To exercise these rights, contact our Grievance Officer at{' '}
              <a 
                href="mailto:sketchitup.official@gmail.com?subject=Grievance%20Officer%20Inquiry%20-%20DPDP"
                className="text-[#876DFF] font-semibold hover:underline"
              >
                sketchitup.official@gmail.com
              </a>
              . We will respond within the timeframe required by applicable law.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-200/60">
              If you are a User whose data was uploaded by a customer business (e.g., an employee of one of our customers), please contact that business directly, as they control that data; we will support them in fulfilling your request.
            </p>
          </div>
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
          Our Services are intended for business use by adults and are not directed at individuals under 18. We do not knowingly collect personal information from children.
        </p>
      )
    },
    {
      id: "international-data-transfers",
      num: "10",
      title: "International Data Transfers",
      icon: Globe2,
      accent: "#34d399",
      content: (
        <p className="text-sm text-slate-600 leading-relaxed">
          If data is transferred or stored outside India, we take steps to ensure it receives an adequate level of protection consistent with applicable law.
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
          We may update this Policy from time to time. Material changes will be communicated via the website or email to account administrators. Continued use of the Services after changes take effect constitutes acceptance.
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
              Legal & Privacy
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate ? onNavigate('terms-of-service') : null}
              className="text-xs font-medium text-slate-500 hover:text-[#876DFF] transition-colors cursor-pointer hidden md:inline-flex items-center gap-1"
            >
              <span>Terms of Service</span>
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
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>DPDP 2023 Aligned</span>
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
            <Shield className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">PRIVACY & DATA GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Privacy Policy
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

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs mt-4 space-y-2">
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              <strong className="font-semibold text-slate-900">SketchItUp Solutions</strong> ("SketchItUp," "we," "us," or "our") provides <strong className="font-semibold text-slate-900">OwnerOS</strong>, <strong className="font-semibold text-slate-900">MridaOS</strong>, and related software and consulting services (collectively, the "Services") to business customers. This Privacy Policy explains how we collect, use, share, and protect information in connection with the Services and our website.
            </p>
            <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
              By using our website or Services, you agree to the practices described in this Policy. If you do not agree, please do not use the Services.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sections 1 to 11 */}
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

        {/* Section 12: Contact Us */}
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
                Section 12
              </span>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                Contact Us
              </h2>
              <p className="text-xs text-slate-500 pt-0.5">
                For questions about this Privacy Policy or to exercise your rights:
              </p>
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
                <span className="text-slate-500 block mb-1">Privacy & Grievance Desk:</span>
                <a 
                  href="mailto:sketchitup.official@gmail.com?subject=Privacy%20Policy%20Inquiry" 
                  className="font-mono text-xs text-[#876DFF] font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>sketchitup.official@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Need to discuss enterprise data processing agreements (DPA) or security posture?
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenDemo ? onOpenDemo('Privacy & DPA Consultation') : null}
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
            <span className="text-slate-800 font-medium">Privacy Policy</span>
            <span>•</span>
            <button
              onClick={() => onNavigate ? onNavigate('terms-of-service') : null}
              className="text-[#876DFF] hover:underline cursor-pointer font-medium"
            >
              Terms of Service
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

export default PrivacyPolicyView;
