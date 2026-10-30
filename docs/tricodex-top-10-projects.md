# TriCodeX Top 10 GitHub Projects — Evaluated Case Studies

This document details the top 10 verified software engineering projects developed by the TriCodeX founding trio (**Mohammed Shameem**, **Sivaram**, **Vasiharan**).

---

### 1. Aethon Sentinel (Featured #1)
* **Repository**: [https://github.com/Shameem1105/Aethon-Sentinal](https://github.com/Shameem1105/Aethon-Sentinal)
* **Live Deployment**: [https://aethon-sentinel.vercel.app/](https://aethon-sentinel.vercel.app/)
* **Contributors**: Mohammed Shameem (`Shameem1105`), Vasiharan (`VasiharanB`)
* **Category**: EdTech & Secure Systems
* **Technologies**: TypeScript, React, HTML5, Node.js, Vite, Tailwind CSS
* **Problem**: Academic institutions and hiring organizations face cheating risks, browser tampering, and high manual grading overhead during remote evaluations.
* **Solution**: Engineered a secure online assessment suite featuring automated integrity monitoring, anti-tab-switch safeguards, randomized question banks, and instantaneous evaluation scoring.
* **Key Engineering Highlights**:
  * Browser event sandboxing detecting fullscreen exits and blur events.
  * Instantaneous client-side evaluation with authoritative server sync.
  * Optimized lightweight asset delivery for remote candidates.

---

### 2. Nouf' X Architects (Featured #2)
* **Repository**: [https://github.com/Shameem1105/Architect](https://github.com/Shameem1105/Architect)
* **Live Deployment**: [https://architect-theta-two.vercel.app/](https://architect-theta-two.vercel.app/)
* **Contributors**: Mohammed Shameem (`Shameem1105`), Sivaram (`siva3009`)
* **Category**: Architecture & Digital Experience
* **Technologies**: TypeScript, React, Vite, Tailwind CSS, Lucide React
* **Problem**: High-end architectural firms struggle to communicate spatial scale, design philosophy, and material depth through conventional portfolio websites.
* **Solution**: Designed and engineered an editorial architectural showcase emphasizing clean spatial grids, high-contrast imagery, smooth micro-interactions, and conversion-focused client consultations.
* **Key Engineering Highlights**:
  * Sub-second first contentful paint (FCP) on edge CDN.
  * Progressive image decoding preventing viewport jank.
  * Fluid typographic clamp scaling across viewport sizes.

---

### 3. Enterprise Construction ERP (Featured #3)
* **Repository**: [https://github.com/Shameem1105/construction-management](https://github.com/Shameem1105/construction-management)
* **Contributors**: Mohammed Shameem (`Shameem1105`), Vasiharan (`VasiharanB`)
* **Category**: Full-Stack ERP & Operations
* **Technologies**: JavaScript, PHP, Node.js, MySQL, Tailwind CSS, REST APIs
* **Problem**: Construction contractors face severe budget overruns due to untracked on-site inventory loss, delayed material requisitions, and disconnected paper-based reporting.
* **Solution**: A full-lifecycle operations platform centralizing project milestones, raw material requisitions, site workforce shifts, inventory reconciliation, and client billing.
* **Key Engineering Highlights**:
  * Multi-stage procurement approval state machines with audit trails.
  * Real-time variance tracking between estimated vs actual material expenses.
  * Role-based views for site supervisors, procurement officers, and executives.

---

### 4. Palash AI — Speech-to-Speech Offline Translator
* **Repository**: [https://github.com/Shameem1105/palash-AI](https://github.com/Shameem1105/palash-AI)
* **Lead Contributor**: Mohammed Shameem (`Shameem1105`)
* **Category**: AI / Speech & Multilingual Systems
* **Technologies**: JavaScript, Python, Web Audio API, SpeechSynthesis, Neural Machine Translation
* **Problem**: Field workers and disaster management personnel deployed in low-connectivity remote regions cannot communicate with local residents due to severe language barriers.
* **Solution**: An offline-first voice translation engine that ingests spoken dialect, translates phonetically and semantically, and synthesizes target audio output without requiring cloud API connections.
* **Key Engineering Highlights**:
  * Client-side Web Audio API signal processing and noise filtering.
  * Offline-capable translation models optimized for edge execution.
  * Low-latency acoustic model synthesis developed as an SIH prototype.

---

### 5. Cricket Conquest — Real-Time Auction Platform
* **Repository**: [https://github.com/VasiharanB/cricket-conquest-ipl-auction](https://github.com/VasiharanB/cricket-conquest-ipl-auction)
* **Contributors**: Vasiharan (`VasiharanB`), Mohammed Shameem (`Shameem1105`)
* **Category**: Real-Time Web Applications
* **Technologies**: TypeScript, React, Node.js, WebSockets, Tailwind CSS
* **Problem**: Competitive mock auctions require synchronized live bidding across multiple devices with zero race conditions, sub-second bid resolution, and instantaneous purse recalculation.
* **Solution**: A distributed real-time auction engine using persistent WebSockets, atomic bid arbitration, dynamic team budget enforcement, and live broadcast dashboards.
* **Key Engineering Highlights**:
  * Atomic bid serialization preventing split-second race conditions.
  * WebSocket broadcasting with sub-200ms latency across dozens of active clients.
  * Live purse, overseas player quotas, and squad balance constraint checkers.

---

### 6. SQL Tutor Bot & Query Engine
* **Repository**: [https://github.com/siva3009/SQL-Learning-Assistant-](https://github.com/siva3009/SQL-Learning-Assistant-)
* **Lead Contributor**: Sivaram (`siva3009`)
* **Category**: EdTech & Developer Tools
* **Technologies**: TypeScript, React, SQL.js (WebAssembly), Tailwind CSS, Gemini AI API
* **Problem**: Students learning relational database design are hindered by cryptic SQL syntax errors with no actionable explanation of where their query logic failed.
* **Solution**: An interactive browser-based query laboratory executing real SQL in WebAssembly, paired with an AI assistant that analyzes schemas, breaks down query execution plans, and provides step-by-step guidance.
* **Key Engineering Highlights**:
  * In-browser SQLite execution via WebAssembly without backend server roundtrips.
  * Interactive schema visualization with dynamic foreign key entity lines.
  * AI-driven contextual error diagnosis.

---

### 7. Smart Issue Tracker AI
* **Repository**: [https://github.com/VasiharanB/Smart-Issue-Tracker](https://github.com/VasiharanB/Smart-Issue-Tracker)
* **Lead Contributor**: Vasiharan (`VasiharanB`)
* **Category**: AI / Machine Learning & Systems
* **Technologies**: Python, Django, React, TypeScript, FAISS Vector Search, Google Gemini AI, PostgreSQL
* **Problem**: Customer support and developer backlogs accumulate hundreds of duplicate tickets with slight lexical variations, causing wasted engineering hours.
* **Solution**: An intelligent triage platform that transforms incoming problem reports into high-dimensional vector embeddings, conducts cosine similarity searches across thousands of historical tickets, and auto-generates resolution suggestions with Gemini AI.
* **Key Engineering Highlights**:
  * Real-time vector similarity indexing using Meta's FAISS library.
  * Integration of Google Gemini LLM for automated patch suggestions.
  * Django REST framework with robust Role-Based Access Control (RBAC).

---

### 8. Nebula Workspace AI
* **Repository**: [https://github.com/siva3009/Nebula-Workspace-AI](https://github.com/siva3009/Nebula-Workspace-AI)
* **Lead Contributor**: Sivaram (`siva3009`)
* **Category**: AI & Productivity Platform
* **Technologies**: TypeScript, React, Tailwind CSS, Vite, Lucide Icons, AI SDK
* **Problem**: Modern software teams suffer from severe context fragmentation when jumping between separate chat applications, documentation hubs, task boards, and code editors.
* **Solution**: An all-in-one unified AI productivity canvas combining contextual LLM conversation, document synthesis, real-time code execution, and team workflow automation.
* **Key Engineering Highlights**:
  * Unified spatial UI with zero-latency tab switching.
  * In-browser code workspace with real-time syntax checking.
  * Multi-agent collaborative conversation memory.

---

### 9. Geospatial Measurement Engine
* **Repository**: [https://github.com/Shameem1105/Geospatial](https://github.com/Shameem1105/Geospatial)
* **Contributors**: Mohammed Shameem (`Shameem1105`), Vasiharan (`VasiharanB`)
* **Category**: Custom Software & GIS Engineering
* **Technologies**: Python, GeoPandas, Shapely, Fiona, FastAPI / Flask, Leaflet
* **Problem**: Civil engineers and land surveyors face spatial distortion errors and heavy manual processing times when calculating areas and boundary contours from heterogeneous KML and ESRI Shapefiles.
* **Solution**: A production-grade geospatial microservice that ingests complex spatial geometry files, normalizes Coordinate Reference Systems (CRS), validates topological boundaries, and computes geodesic surface metrics.
* **Key Engineering Highlights**:
  * CRS-aware automatic coordinate projection transformations (WGS84, UTM zones).
  * Geodesic polygon area calculations resistant to ellipsoidal Earth distortion.
  * Secure multi-file ingestion pipeline with schema validation.

---

### 10. XenTriX ’26 Official Symposium Portal
* **Repository**: [https://github.com/Shameem1105/Xentrix](https://github.com/Shameem1105/Xentrix)
* **Lead Contributor**: Mohammed Shameem (`Shameem1105`)
* **Category**: Event Engineering & High-Throughput Web
* **Technologies**: TypeScript, React, Vite, Tailwind CSS, Lucide React
* **Problem**: Major technical symposiums receive rapid bursts of registration traffic that overwhelm generic forms, create registration lockouts, and frustrate attendees.
* **Solution**: A high-speed, lightweight static-optimized platform engineered to handle peak concurrent registrations, instant schedule lookups, automated team generation, and digital QR confirmations.
* **Key Engineering Highlights**:
  * Sub-second time-to-interactive (TTI) built on Vite and React.
  * Instant offline-resilient event schedule caching.
  * Mobile-optimized registration flow with live validation.
