import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CompanyHomeView } from './views/CompanyHomeView';
import { HomeView } from './views/HomeView';
import { OwnerOsView } from './views/OwnerOsView';
import { ModulesView } from './views/ModulesView';
import { SolutionsView } from './views/SolutionsView';
import { CustomSolutionsView } from './views/CustomSolutionsView';
import { AboutView } from './views/AboutView';
import { ResourcesView } from './views/ResourcesView';
import { ProductComingSoonView } from './views/ProductComingSoonView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { SecurityComplianceView } from './views/SecurityComplianceView';
import { TermsOfServiceView } from './views/TermsOfServiceView';
import { DemoBookingModal } from './components/DemoBookingModal';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('company-home');
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoPrefilledModule, setDemoPrefilledModule] = useState<string | undefined>(undefined);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Butter-Smooth Lenis Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Smooth scroll to top on navigation or module change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false, duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView, selectedModuleId]);

  const handleNavigate = (view: string, detailId?: string) => {
    setCurrentView(view);
    if (detailId) {
      setSelectedModuleId(detailId);
    } else {
      setSelectedModuleId(null);
    }
  };

  const handleOpenDemo = (prefilledModule?: string) => {
    setDemoPrefilledModule(prefilledModule);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      
      {/* Top Navbar with Product Switcher & Contextual Menu */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenDemo={handleOpenDemo}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        
        {/* Company Level Landing (SketchItUp Solutions Parent) */}
        {currentView === 'company-home' && (
          <CompanyHomeView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Owner OS Flagship Product Landing (Manufacturing) */}
        {(currentView === 'owner-os-home' || currentView === 'home') && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Owner OS Architecture Deep Dive */}
        {currentView === 'owner-os' && (
          <OwnerOsView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* 14 Core Modules Marketplace */}
        {currentView === 'modules' && (
          <ModulesView
            selectedModuleId={selectedModuleId}
            onSelectModule={(id) => setSelectedModuleId(id)}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Owner OS Industry Blueprints */}
        {(currentView === 'owner-os-solutions' || currentView === 'solutions') && (
          <SolutionsView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Custom Software Solutions & Engineering Consultancy */}
        {currentView === 'custom-solutions' && (
          <CustomSolutionsView
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Product Suite: Agriculture & Process OS */}
        {currentView === 'product-agriculture' && (
          <ProductComingSoonView
            productId="agri-process"
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Product Suite: Retail & Distribution OS */}
        {currentView === 'product-retail' && (
          <ProductComingSoonView
            productId="retail-distribution"
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Product Suite: Healthcare & Pharma OS */}
        {currentView === 'product-healthcare' && (
          <ProductComingSoonView
            productId="healthcare-pharma"
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Product Suite: Logistics & Warehousing OS */}
        {currentView === 'product-logistics' && (
          <ProductComingSoonView
            productId="logistics-warehousing"
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Company About & Vision */}
        {currentView === 'about' && (
          <AboutView
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Resources, Case Studies & FAQs */}
        {currentView === 'resources' && (
          <ResourcesView
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Privacy Policy */}
        {currentView === 'privacy-policy' && (
          <PrivacyPolicyView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Security & Compliance */}
        {currentView === 'security-compliance' && (
          <SecurityComplianceView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}

        {/* Terms of Service */}
        {currentView === 'terms-of-service' && (
          <TermsOfServiceView
            onNavigate={handleNavigate}
            onOpenDemo={handleOpenDemo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDemo={handleOpenDemo}
      />

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        prefilledModule={demoPrefilledModule}
      />

    </div>
  );
}
