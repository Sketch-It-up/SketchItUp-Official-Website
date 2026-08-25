import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Server, 
  Lock, 
  KeyRound, 
  Database, 
  RefreshCw, 
  Code2, 
  Users, 
  FileCheck, 
  AlertOctagon, 
  Scale, 
  Mail, 
  ArrowLeft,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Building,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityComplianceViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const SecurityComplianceView: React.FC<SecurityComplianceViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('sketchitup.official@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const sections = [
    {
      id: "infrastructure-hosting",
      num: "01",
      title: "Infrastructure & Hosting",
      icon: Server,
      accent: "#BAF91A",
      points: [
        "Our Services are hosted on Tier-1 enterprise cloud infrastructure (AWS/Azure/GCP) in regional data centers (India/Asia-Pacific), which maintains its own physical and environmental security controls.",
        "Production environments are logically separated from development and testing environments.",
        "Infrastructure is provisioned and monitored to detect unauthorized changes and unusual activity."
      ]
    },
    {
      id: "encryption",
      num: "02",
      title: "Encryption",
      icon: Lock,
      accent: "#876DFF",
      points: [
        "In transit: All data transmitted between your browser/systems and our Services is encrypted using industry-standard TLS.",
        "At rest: Customer Business Data stored in our databases and backups is encrypted at rest using industry-standard encryption algorithms."
      ]
    },
    {
      id: "access-controls",
      num: "03",
      title: "Access Controls",
      icon: KeyRound,
      accent: "#38bdf8",
      points: [
        "Access to production systems and Customer Business Data is restricted to authorized personnel on a need-to-know basis.",
        "We use role-based access control (RBAC) within OwnerOS/MridaOS so customers can control which of their own Users can view or edit specific modules and data.",
        "Administrative access to infrastructure requires strong authentication, and privileged access is reviewed periodically.",
        "We recommend and support strong password policies and, where available, multi-factor authentication (MFA) for customer accounts."
      ]
    },
    {
      id: "backup-disaster-recovery",
      num: "04",
      title: "Backup & Disaster Recovery",
      icon: Database,
      accent: "#34d399",
      points: [
        "Customer Business Data is backed up on a regular schedule to support recovery in the event of data loss, hardware failure, or other incidents.",
        "Backup integrity is periodically verified.",
        "We maintain a disaster recovery approach designed to restore Services within a reasonable timeframe following a major incident. Specific recovery time/point objectives (RTO/RPO) can be provided on request for enterprise agreements."
      ]
    },
    {
      id: "vulnerability-patch-management",
      num: "05",
      title: "Vulnerability & Patch Management",
      icon: RefreshCw,
      accent: "#fbbf24",
      points: [
        "We apply security patches and updates to our infrastructure and application stack on an ongoing basis.",
        "We monitor for known vulnerabilities in our software dependencies and remediate them according to severity.",
        "Periodic security reviews and, where applicable, third-party assessments are used to identify and address risks."
      ]
    },
    {
      id: "application-security",
      num: "06",
      title: "Application Security Practices",
      icon: Code2,
      accent: "#f472b6",
      points: [
        "Code changes go through review before deployment.",
        "We follow secure development practices to guard against common vulnerabilities (e.g., injection attacks, broken access control, insecure data exposure).",
        "Sensitive configuration and credentials are managed through secure secrets management rather than hardcoded in source code."
      ]
    },
    {
      id: "employee-security",
      num: "07",
      title: "Employee Security Practices",
      icon: Users,
      accent: "#876DFF",
      points: [
        "Access to customer systems and data is granted to employees only as needed for their role and is revoked promptly upon role change or offboarding.",
        "Employees with access to production systems or customer data are subject to confidentiality obligations.",
        "We provide security awareness guidance to our team as part of standard operating practice."
      ]
    },
    {
      id: "compliance-posture",
      num: "08",
      title: "Compliance Posture",
      icon: FileCheck,
      accent: "#BAF91A",
      points: [
        "We align our data handling practices with the principles of India's Digital Personal Data Protection Act (DPDP), 2023.",
        "We are working toward formal security certifications (e.g., ISO/IEC 27001) as part of our roadmap; current practices are designed in line with recognized industry frameworks, but we are not yet formally certified.",
        "Enterprise customers may request a security questionnaire response or additional documentation as part of their own vendor due diligence process."
      ]
    },
    {
      id: "incident-response",
      num: "09",
      title: "Incident Response & Breach Notification",
      icon: AlertOctagon,
      accent: "#f87171",
      points: [
        "We maintain an internal process for identifying, investigating, and responding to security incidents.",
        "In the event of a security incident affecting Customer Business Data, we will notify affected customers without undue delay and in accordance with applicable law, along with information about the nature of the incident and remediation steps."
      ]
    }
  ];

  const sketchItUpResponsibilities = [
    "Securing the underlying application, infrastructure, and hosting environment.",
    "Encrypting data in transit and at rest.",
    "Patching and maintaining the platform."
  ];

  const customerResponsibilities = [
    "Managing user accounts, roles, and permissions within their organization.",
    "Using strong, unique passwords and enabling MFA where available.",
    "Ensuring only authorized personnel are granted access to their OwnerOS/MridaOS account.",
    "Promptly reporting suspected unauthorized access or suspicious activity."
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
              Legal & Trust
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
              onClick={() => onNavigate ? onNavigate('privacy-policy') : null}
              className="text-xs font-medium text-slate-500 hover:text-[#876DFF] transition-colors cursor-pointer hidden md:inline-flex items-center gap-1"
            >
              <span>Privacy Policy</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>Security Posture: Active</span>
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">TRUST & DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Security & Compliance
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
              At <strong className="font-semibold text-slate-900">SketchItUp Solutions</strong>, we understand that <strong className="font-semibold text-slate-900">OwnerOS</strong> and <strong className="font-semibold text-slate-900">MridaOS</strong> hold operationally critical data for the businesses we serve — purchase orders, inventory, production records, financial data, and more. Protecting that data is core to how we build and run our Services. This page describes our current security practices and posture.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Sections 1 to 9 */}
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
                transition={{ duration: 0.35, delay: idx * 0.03 }}
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

                <div className="pl-0 sm:pl-14 space-y-2.5 pt-1">
                  {section.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#876DFF] mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section 10: Shared Responsibility */}
        <motion.div
          id="shared-responsibility"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#876DFF] flex items-center justify-center shrink-0 shadow-2xs">
              <Scale className="w-5 h-5" />
            </div>

            <div className="space-y-0.5 flex-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                Section 10
              </span>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                Shared Responsibility
              </h2>
              <p className="text-sm text-slate-600 pt-0.5">
                Security is a shared effort:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-14">
            
            {/* SketchItUp Responsibilities */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 text-xs font-bold font-heading text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#876DFF]"></span>
                <span>SketchItUp is responsible for:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {sketchItUpResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#876DFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200/80 text-xs font-bold font-heading text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                <span>Customers are responsible for:</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                {customerResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Section 11 & 12: Reporting a Security Concern & Contact Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          
          {/* Section 11: Reporting a Security Concern */}
          <motion.div
            id="reporting-security-concern"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl bg-[#101312] text-white border border-slate-800 p-6 sm:p-7 shadow-md flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#BAF91A] uppercase tracking-wide">
                  Section 11
                </span>
                <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-pulse"></span>
              </div>

              <h2 className="text-lg font-heading font-bold text-white">
                Reporting a Security Concern
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                If you discover a potential security vulnerability or have a security concern, please report it to us immediately at{' '}
                <a 
                  href="mailto:sketchitup.official@gmail.com?subject=Security%20Vulnerability%20Report"
                  className="text-[#BAF91A] hover:underline font-medium inline-flex items-center gap-1"
                >
                  sketchitup.official@gmail.com
                </a>
                . We take all reports seriously and will investigate promptly. Please do not publicly disclose a suspected vulnerability before we've had the opportunity to review and address it.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:sketchitup.official@gmail.com?subject=Security%20Vulnerability%20Report"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BAF91A] text-slate-950 text-xs font-bold hover:bg-[#d0ff48] transition-all shadow-sm cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Security Report</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                title="Copy security email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#BAF91A]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* Section 12: Contact Us */}
          <motion.div
            id="contact-us"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                Section 12
              </span>

              <h2 className="text-lg font-heading font-bold text-slate-900">
                Contact Us
              </h2>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Building className="w-4 h-4 text-[#876DFF]" />
                  <span>SketchItUp Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-500 block mb-1">Security Contact:</span>
                  <a 
                    href="mailto:sketchitup.official@gmail.com" 
                    className="font-mono text-xs text-[#876DFF] font-semibold hover:underline inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>sketchitup.official@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Need architectural due diligence?</span>
              <button 
                onClick={() => onOpenDemo ? onOpenDemo('Security & Architecture Walkthrough') : null}
                className="font-semibold text-[#876DFF] hover:text-[#7254f5] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Request Walkthrough</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Footer Navigation Bar for Legal Pages */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">SketchItUp Solutions Legal:</span>
            <button
              onClick={() => onNavigate ? onNavigate('terms-of-service') : null}
              className="text-[#876DFF] hover:underline cursor-pointer font-medium"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate ? onNavigate('privacy-policy') : null}
              className="text-[#876DFF] hover:underline cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <span className="text-slate-800 font-medium">Security & Compliance</span>
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

export default SecurityComplianceView;
