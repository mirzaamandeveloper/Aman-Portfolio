import React from 'react';
import NewHero from '../components/NewHero';
import ThinkingSection from '../components/ThinkingSection';
import SystemsSection from '../components/SystemsSection';
import SkillsSection from '../components/SkillsSection';
import DifferenceSection from '../components/DifferenceSection';
import ProofSection from '../components/ProofSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function MainPortfolio() {
  return (
    <div>
      <NewHero />
      <ThinkingSection />
      <SystemsSection />
      <SkillsSection />
      <DifferenceSection />
      <ProofSection />
      <CTASection />
      <Footer />
    </div>
  );
}
