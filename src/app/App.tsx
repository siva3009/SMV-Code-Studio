import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutManifesto } from './components/AboutManifesto';
import { TeamTrio } from './components/TeamTrio';
import { ServicesMatrix } from './components/ServicesMatrix';
import { PortfolioStack } from './components/PortfolioStack';
import { CapabilitiesBento } from './components/CapabilitiesBento';
import { ProcessTimeline } from './components/ProcessTimeline';
import { WhyTriCodeX } from './components/WhyTriCodeX';
import { TechEcosystem } from './components/TechEcosystem';
import { ConversionContact } from './components/ConversionContact';
import { FooterTechnical } from './components/FooterTechnical';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once at startup
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Preserve existing hero fade out on scroll
    gsap.to('.hero-content', {
      opacity: 0,
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-content',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Refresh ScrollTrigger once DOM has settled
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#070709] text-[#F4F4F6] selection:bg-[#CCFF00] selection:text-[#09090B]">
      {/* ============================================================== */}
      {/* GLOBAL SINGLE CONTINUOUS BACKGROUND ACROSS ENTIRE WEBSITE      */}
      {/* Twinkling stars + aurora glow flow continuously top-to-bottom  */}
      {/* ============================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Continuous Twinkling Starfield */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />

        {/* Continuous Aurora Ribbons & Ambient Neon Glow Atmosphere */}
        <div className="aurora-container">
          <div className="aurora-ribbon ribbon-1" />
          <div className="aurora-ribbon ribbon-2" />
          <div className="aurora-ribbon ribbon-3" />
          <div className="aurora-ribbon ribbon-4" />
          <div className="aurora-ribbon ribbon-5" />
          <div className="aurora-glow glow-1" />
          <div className="aurora-glow glow-2" />
          <div className="aurora-glow glow-3" />
        </div>
      </div>

      <div className="relative z-10">
        {/* SECTION 00 — PROTECTED APPROVED HERO & NAVIGATION */}
        <Navigation />
        <Hero />

        {/* SECTION 01 — ABOUT / EDITORIAL BRAND MANIFESTO */}
        <AboutManifesto />

        {/* SECTION 02 — THE TRIO / FOUNDING TEAM */}
        <TeamTrio />

        {/* SECTION 03 — INTERACTIVE SERVICES MATRIX */}
        <ServicesMatrix />

        {/* SECTION 04 — CINEMATIC 3D PORTFOLIO STACK & REPOSITORY CASE STUDIES */}
        <PortfolioStack />

        {/* SECTION 05 — TECHNICAL CAPABILITIES BENTO */}
        <CapabilitiesBento />

        {/* SECTION 06 — ENGINEERING PROCESS LIFECYCLE */}
        <ProcessTimeline />

        {/* SECTION 07 — WHY TRICODEX VALUE PROPOSITION */}
        <WhyTriCodeX />

        {/* SECTION 08 — INTERACTIVE TECHNOLOGY ECOSYSTEM */}
        <TechEcosystem />

        {/* SECTION 09 — CONVERSION PORTAL & SCOPING INQUIRY */}
        <ConversionContact />

        {/* SECTION 10 — TECHNICAL COLOPHON & FOOTER */}
        <FooterTechnical />
      </div>
    </div>
  );
}