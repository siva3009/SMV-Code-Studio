import { Component, ReactNode, ErrorInfo } from 'react';
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// Robust Error Boundary to prevent any unhandled crash from showing a blank white screen
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("TriCodeX Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#070709',
          color: '#F4F4F6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          fontFamily: "'Inter', sans-serif",
          textAlign: 'center'
        }}>
          <div style={{
            maxWidth: '500px',
            padding: '32px',
            borderRadius: '24px',
            backgroundColor: '#131318',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#CCFF00' }}>
              TriCodeX • Initializing Studio
            </h1>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
              We encountered a minor layout interruption. Click below to refresh the interactive workspace.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 28px',
                borderRadius: '9999px',
                backgroundColor: '#CCFF00',
                color: '#09090B',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              Reload Studio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Mount React Root
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

// Initialize Lenis safely with GSAP ticker (Snappy 60/120fps scrolling)
try {
  const lenis = new Lenis({
    duration: 0.45,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  } as any);

  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
} catch (err) {
  console.warn("Smooth scroll initialization bypassed, falling back to native scrolling.", err);
}
