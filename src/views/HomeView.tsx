import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { OwnersRealitySection } from '../components/OwnersRealitySection';
import { BusinessFlowVisualizer } from '../components/BusinessFlowVisualizer';
import { ModulesMarketplaceSection } from '../components/ModulesMarketplaceSection';
import { HowOwnerOsWorksSection } from '../components/HowOwnerOsWorksSection';
import { BuiltForOwnersSection } from '../components/BuiltForOwnersSection';
import { CommandCenterPreview } from '../components/CommandCenterPreview';
import { AiRoadmapPanel } from '../components/AiRoadmapPanel';
import { WhoIsItForSection } from '../components/WhoIsItForSection';
import { ProductDemosSection } from '../components/ProductDemosSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface HomeViewProps {
  onNavigate: (view: string, detailId?: string) => void;
  onOpenDemo: (prefilledModule?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION */}
      <div id="hero-section">
        <HeroSection onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      </div>

      {/* 2. WHAT IS OWNEROS? (CORE END-TO-END BUSINESS FLOW) */}
      <div id="what-is-owneros-section">
        <BusinessFlowVisualizer onExploreModule={(modId) => onNavigate('modules', modId)} />
      </div>

      {/* 3. EXPLORE OWNEROS MODULES */}
      <div id="modules-section">
        <ModulesMarketplaceSection
          onSelectModule={(modId) => onNavigate('modules', modId)}
          onOpenDemo={(modName) => onOpenDemo(modName)}
        />
      </div>

      {/* 4. HOW OWNEROS WORKS: THE SYSTEM IN ACTION */}
      <div id="how-it-works-section">
        <HowOwnerOsWorksSection onOpenDemo={onOpenDemo} />
      </div>

      {/* 5. WHAT PROBLEM DOES OWNEROS SOLVE? */}
      <div id="problem-section">
        <OwnersRealitySection 
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo} 
        />
      </div>

      {/* 6. BUILT AROUND THE OWNER (5 CONTROL PILLARS: SEE, CONTROL, MEASURE, DECIDE, SCALE) */}
      <div id="built-for-owners-section">
        <BuiltForOwnersSection onOpenDemo={onOpenDemo} />
      </div>

      {/* 7. ONE COMMAND CENTER (INTERACTIVE DASHBOARD DEMO) */}
      <div id="command-center-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommandCenterPreview
          onOpenDemo={onOpenDemo}
          onNavigateToCopilot={() => onNavigate('copilot-demo')}
        />
      </div>

      {/* 8. AI & INTELLIGENCE */}
      <div id="ai-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AiRoadmapPanel onOpenDemo={onOpenDemo} />
      </div>

      {/* 9. WHO OWNEROS IS FOR (MANUFACTURING & INDUSTRIAL FOCUS) */}
      <div id="who-it-is-for-section">
        <WhoIsItForSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* 10. PRODUCT DEMOS HUB */}
      <div id="demos-section">
        <ProductDemosSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

      {/* 11. FINAL CALL TO ACTION */}
      <div id="final-cta-section">
        <FinalCtaSection
          onNavigate={onNavigate}
          onOpenDemo={onOpenDemo}
        />
      </div>

    </div>
  );
};

