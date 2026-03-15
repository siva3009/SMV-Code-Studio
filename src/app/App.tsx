import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SMVGrowthDashboard } from './components/SMVGrowthDashboard';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register the plugin once at startup
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // global section fade-in / slide-up + stagger
    const sections: HTMLElement[] = gsap.utils.toArray('.gsap-section');
    sections.forEach((section) => {
      // animate all headings/paragraphs and any elements marked for staggering
      const targets = section.querySelectorAll('h2, h3, p, .gsap-stagger');
      gsap.from(targets, {
        opacity: 0,
        y: 50,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'bottom 25%',
          once: true,
          // scroller is body by default; lenis scroll proxy is configured in main.tsx
        }
      });
    });

    // hero fade out on scroll so it blends into the next section
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
  }, []);

  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <SMVGrowthDashboard />
      <Process />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}