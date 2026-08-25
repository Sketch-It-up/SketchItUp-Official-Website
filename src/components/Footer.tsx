import React from 'react';
import { LayoutDashboard, Mail, MapPin, ArrowRight, Sparkles, Sprout, Store, HeartPulse, Truck, Layers } from 'lucide-react';
import { MODULES_DATA } from '../data/modulesData';
import { PRODUCTS_DATA } from '../data/productsData';

interface FooterProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <footer className="bg-[#101312] text-slate-300 border-t border-slate-800">
      {/* Top Banner - Category Distinction Callout */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-semibold text-[#BAF91A] uppercase tracking-wider">The Category Distinction</span>
            <h3 className="text-xl font-heading font-bold text-white">Not just another ERP. An Owner Operating System Suite.</h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Traditional enterprise software manages fragmented admin records. SketchItUp Solutions builds industry operating systems that give business owners complete real-time visibility, synchronized operations, and AI decision support.
            </p>
          </div>
          <button
            onClick={() => onOpenDemo('SketchItUp Solutions')}
            className="px-6 py-3 rounded-full text-sm font-semibold text-[#101312] bg-[#BAF91A] hover:bg-[#d0ff48] transition-all shadow-lg flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <span>Book an Executive Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#BAF91A] text-[#101312] flex items-center justify-center font-bold">
                <LayoutDashboard className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                SketchItUp Solutions<span className="text-[#876DFF]">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We design and engineer AI-enabled Business Operating Systems for business owners and enterprise operators across industrial verticals.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#BAF91A]" />
                <a href="mailto:sketchitup.official@gmail.com" className="hover:text-white transition-colors">
                  sketchitup.official@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#BAF91A]" />
                <span>SketchItUp Solutions LLP</span>
              </div>
            </div>
          </div>

          {/* Column 1: Vertical Product Suite */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Product Suite</h4>
            <ul className="space-y-2 text-sm">
              {PRODUCTS_DATA.map((prod) => (
                <li key={prod.id}>
                  <button 
                    onClick={() => onNavigate(prod.route)} 
                    className="hover:text-white transition-colors cursor-pointer flex items-center justify-between w-full text-slate-400 hover:text-slate-200"
                  >
                    <span>{prod.name}</span>
                    {prod.status === 'live' ? (
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-800">
                        Live
                      </span>
                    ) : (
                      <span className="text-[9px] text-slate-500 bg-slate-800 px-1.5 py-0.2 rounded">
                        Soon
                      </span>
                    )}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button onClick={() => onNavigate('company-home')} className="text-xs font-semibold text-[#876DFF] hover:underline cursor-pointer">
                  All Products Overview &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Owner OS (Manufacturing) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Owner OS Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('owner-os-home')} className="hover:text-white transition-colors cursor-pointer">
                  Manufacturing Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('modules')} className="hover:text-white transition-colors cursor-pointer">
                  14 Connected Modules
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('owner-os-solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Industry Blueprints
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Custom Software Development
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('copilot-demo')} className="hover:text-white transition-colors text-emerald-400 flex items-center gap-1.5 cursor-pointer">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Copilot Engine</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Advisory */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About SketchItUp Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors cursor-pointer">
                  Case Studies & FAQs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Consultancy Methodology
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDemo('SketchItUp Solutions')} className="hover:text-white transition-colors font-medium text-[#BAF91A] cursor-pointer">
                  Request Demonstration
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SketchItUp Solutions LLP. All rights reserved. Built for Business Owners.</p>
          <div className="flex items-center gap-6">
            <button
              id="footer-privacy-policy-btn"
              onClick={() => onNavigate('privacy-policy')}
              className="text-slate-400 hover:text-[#BAF91A] transition-colors cursor-pointer inline-flex items-center gap-1.5 focus:outline-none"
            >
              <span>Privacy Policy</span>
            </button>
            <button
              id="footer-terms-of-service-btn"
              onClick={() => onNavigate('terms-of-service')}
              className="text-slate-400 hover:text-[#BAF91A] transition-colors cursor-pointer inline-flex items-center gap-1.5 focus:outline-none"
            >
              <span>Terms of Service</span>
            </button>
            <button
              id="footer-security-compliance-btn"
              onClick={() => onNavigate('security-compliance')}
              className="text-slate-400 hover:text-[#BAF91A] transition-colors cursor-pointer inline-flex items-center gap-1.5 focus:outline-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF91A] inline-block"></span>
              <span>Security Compliance</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
