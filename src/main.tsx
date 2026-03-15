
  // @ts-ignore - handle missing type definitions for react-dom/client
import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

// GSAP/ScrollTrigger dependencies are used inside the application components
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register ScrollTrigger early so any component can use it
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(<App />);
  
import Lenis from '@studio-freight/lenis'

// cast to any to avoid missing option/type declarations
// @ts-ignore next-line allow custom options
const lenis: any = new Lenis({
  duration: 0.65, // faster, more responsive scroll
  smooth: true,
  lerp: 0.1, // lower lerp = smoother but more responsive
  wheelMultiplier: 1,
  touchMultiplier: 2
} as any)

// Sync Lenis scroll with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    if (arguments.length) {
      lenis.scrollTo(value as number, { duration: 0 });
    }
    return lenis.scroll;
  },
  getBoundingClientRect() {
    return { 
      top: 0, 
      left: 0, 
      width: window.innerWidth, 
      height: window.innerHeight 
    };
  },
  pinType: document.body.style.transform ? 'transform' : 'fixed'
});

// Refresh ScrollTrigger when Lenis updates
ScrollTrigger.addEventListener('refresh', () => lenis.update());
window.addEventListener('resize', () => lenis.update());

// Optimized RAF loop - use Lenis's internal update method
let animationFrameId: number;

function raf(time: number) {
  lenis.raf(time);
  animationFrameId = requestAnimationFrame(raf);
}

raf(Date.now());