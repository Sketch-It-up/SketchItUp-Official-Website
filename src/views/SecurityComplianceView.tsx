import React from 'react';
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
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface SecurityComplianceViewProps {
  onNavigate?: (view: string) => void;
  onOpenDemo?: (prefilledModule?: string) => void;
}

export const SecurityComplianceView: React.FC<SecurityComplianceViewProps> = ({ onNavigate, onOpenDemo }) => {
  const sections = [
    {
      id: "infrastructure",
      num: "01",
      title: "Infrastructure & Hosting",
      icon: Server,
      accent: "#BAF91A",
      points: [
        "Our Services are hosted on Tier-1 enterprise cloud infrastructure (AWS/Azure/GCP) in regional data centers (India/Asia-Pacific), which maintain strict physical, environmental, and facility security controls.",
        "Production environments are logically isolated from development, staging, and testing environments.",
        "Infrastructure is continuously provisioned, hardened, and monitored to detect unauthorized changes, configuration drift, and unusual network activity."
      ]
    },
    {
      id: "encryption",
      num: "02",
      title: "Encryption Standards",
      icon: Lock,
      accent: "#876DFF",
      points: [
        "In transit: All data transmitted between your browser, mobile clients, external integrations, and our Services is encrypted using industry-standard TLS 1.2+ / TLS 1.3.",
        "At rest: Customer Business Data stored in production databases, document repositories, and persistent backups is encrypted at rest using industry-standard AES-256 encryption algorithms."
      ]
    },
    {
      id: "access-controls",
      num: "03",
      title: "Access Controls & Authentication",
      icon: KeyRound,
      accent: "#38bdf8",
      points: [
        "Access to production systems and Customer Business Data is strictly restricted to authorized engineering personnel on a least-privilege, need-to-know basis.",
        "We implement granular Role-Based Access Control (RBAC) within OwnerOS and MridaOS so customers can precisely govern which internal users view, create, approve, or edit specific operational modules and financial records.",
        "Administrative access to cloud infrastructure requires hardware/token multi-factor authentication (MFA), and privileged access rights are audited periodically.",
        "We enforce and support strong password policies and multi-factor authentication (MFA) across customer accounts."
      ]
    },
    {
      id: "backup-recovery",
      num: "04",
      title: "Backup & Disaster Recovery",
      icon: Database,
      accent: "#34d399",
      points: [
        "Customer Business Data is backed up automatically on a multi-tier daily schedule to ensure rapid recovery against unexpected data corruption, hardware failures, or regional outages.",
        "Backup integrity and restoration procedures are periodically tested and verified.",
        "We maintain a structured disaster recovery plan designed to restore critical operations within a reasonable timeframe. Specific Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) can be specified under dedicated enterprise agreements."
      ]
    },
    {
      id: "vulnerability-management",
      num: "05",
      title: "Vulnerability & Patch Management",
      icon: RefreshCw,
      accent: "#fbbf24",
      points: [
        "We apply security patches and kernel updates across our containerized infrastructure and runtime stack on an ongoing schedule.",
        "Automated dependency scanners monitor for known Common Vulnerabilities and Exposures (CVEs) across third-party libraries and remediate them according to severity.",
        "Periodic internal security audits and structured application assessments are conducted to detect and eliminate configuration risks."
      ]
    },
    {
      id: "application-security",
      num: "06",
      title: "Application Security Practices",
      icon: Code2,
      accent: "#f472b6",
      points: [
        "All code modifications undergo mandatory peer review and automated testing pipelines prior to production deployment.",
        "We adhere to OWASP Top 10 secure development guidelines to protect against injection flaws, broken access control, cross-site scripting, and insecure direct object references.",
        "Sensitive credentials, encryption keys, and third-party API tokens are managed via secure vault secrets management rather than hardcoded in source code."
      ]
    },
    {
      id: "employee-security",
      num: "07",
      title: "Employee Security Practices",
      icon: Users,
      accent: "#876DFF",
      points: [
        "Access to customer environments is provisioned strictly on business necessity and is revoked immediately upon role reassignment or employee offboarding.",
        "All team members with potential access to production infrastructure are bound by strict non-disclosure and data protection confidentiality agreements.",
        "Regular security awareness and data privacy guidance are integrated into onboarding and operational workflows."
      ]
    },
    {
      id: "compliance-posture",
      num: "08",
      title: "Compliance Posture",
      icon: FileCheck,
      accent: "#BAF91A",
      points: [
        "We align our data governance and privacy practices with the principles of India's Digital Personal Data Protection Act (DPDP), 2023.",
        "We are systematically aligning our operational architecture with recognized industry security frameworks (e.g., ISO/IEC 27001 readiness on our continuous roadmap).",
        "Enterprise customers may request a detailed vendor security questionnaire response and technical architecture briefing as part of their procurement due diligence."
      ]
    },
    {
      id: "incident-response",
      num: "09",
      title: "Incident Response & Breach Notification",
      icon: AlertOctagon,
      accent: "#f87171",
      points: [
        "We maintain a structured incident response playbook for swift detection, containment, investigation, and resolution of security events.",
        "In the event of a verified security incident impacting Customer Business Data, we will notify affected customers without undue delay and in accordance with applicable statutory regulations, providing transparent details on the event nature, impact scope, and remediation actions taken."
      ]
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
            <span>Security Status: Active & Monitored</span>
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#876DFF]" />
            <span className="uppercase tracking-wider">TRUST & DATA PROTECTION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Security & Compliance
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
            At SketchItUp Solutions, we understand that OwnerOS and MridaOS hold operationally critical data for the businesses we serve — purchase orders, inventory, production records, financial data, and more. Protecting that data is core to how we build and run our Services. This page describes our current security practices and posture.
          </p>
        </motion.div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Sections 1 to 9 */}
        <div className="space-y-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
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
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                        Section {section.num}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="pl-0 sm:pl-14 space-y-2.5 pt-1">
                  {section.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
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

        {/* Section 10: Shared Responsibility Model */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#876DFF]/15 border border-[#876DFF]/30 text-[#876DFF] flex items-center justify-center shrink-0 shadow-xs">
              <Scale className="w-5 h-5" />
            </div>

            <div className="space-y-1 flex-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                Section 10
              </span>
              <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                Shared Responsibility Model
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Security is a collaborative partnership between SketchItUp Solutions and your organization.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-14">
            
            {/* SketchItUp Responsibilities */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-xs font-bold font-heading text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#876DFF]"></span>
                <span>SketchItUp is responsible for:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#876DFF] shrink-0 mt-0.5" />
                  <span>Securing the underlying application, database infrastructure, and cloud hosting environment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#876DFF] shrink-0 mt-0.5" />
                  <span>Encrypting data both in transit (TLS) and at rest (AES-256).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#876DFF] shrink-0 mt-0.5" />
                  <span>Patching, hardening, and maintaining platform uptime and core software modules.</span>
                </li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 text-xs font-bold font-heading text-slate-900">
                <span className="w-2 h-2 rounded-full bg-[#BAF91A]"></span>
                <span>Customers are responsible for:</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Managing user accounts, roles, and departmental permissions within their organization.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Enforcing strong, unique passwords and enabling MFA where available.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Ensuring only authorized personnel retain active access to OwnerOS / MridaOS accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Promptly reporting suspected unauthorized access or suspicious account activity.</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Section 11 & 12: Reporting a Security Concern & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Section 11 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-[#101312] text-white border border-slate-800 p-6 sm:p-8 shadow-md space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#BAF91A] uppercase">
                  Section 11
                </span>
                <span className="w-2 h-2 rounded-full bg-[#BAF91A] animate-pulse"></span>
              </div>
              <h2 className="text-lg font-heading font-bold text-white">
                Reporting a Security Concern
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                If you discover a potential security vulnerability or have a security concern, please report it immediately to our security response team. We take all reports seriously and will investigate promptly. Please do not publicly disclose a suspected vulnerability before we have had the opportunity to review and remediate it.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href="mailto:sketchitup.official@gmail.com?subject=Security%20Vulnerability%20Report"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#BAF91A] text-slate-950 text-xs font-bold hover:bg-[#d0ff48] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>sketchitup.official@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Section 12 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                Section 12
              </span>
              <h2 className="text-lg font-heading font-bold text-slate-900">
                Contact & Governance
              </h2>
              <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900">SketchItUp Solutions LLP</p>
                <p>Pune, Maharashtra, India</p>
                <p className="pt-2 text-slate-500">Dedicated Security Contact:</p>
                <a 
                  href="mailto:sketchitup.official@gmail.com" 
                  className="font-mono text-xs text-[#876DFF] font-semibold hover:underline block"
                >
                  sketchitup.official@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>OwnerOS & MridaOS Data Assurance</span>
              <button 
                onClick={() => onOpenDemo ? onOpenDemo('Security & Compliance Consultation') : null}
                className="font-semibold text-slate-700 hover:text-slate-950 cursor-pointer"
              >
                Request Architecture Briefing &rarr;
              </button>
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
};
export default SecurityComplianceView;
