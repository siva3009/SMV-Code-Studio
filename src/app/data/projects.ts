export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  contributors: string[];
  githubUrl: string;
  liveUrl?: string;
  status: string;
  architectureHighlights: string[];
  gradient: string;
}

export const TOP_PROJECTS: Project[] = [
  {
    id: 'aethon',
    projectNumber: '01',
    title: 'Aethon Sentinel',
    tagline: 'Secure Online Assessment & Proctoring Platform',
    category: 'EdTech & Secure Systems',
    description: 'An Examate-inspired online assessment and secure examination platform engineered with proctoring workflows, automated test evaluation, and scalable architecture.',
    problem: 'Academic institutions and hiring organizations face cheating risks, browser tampering, and high manual grading overhead during remote evaluations.',
    solution: 'Engineered a secure online assessment suite featuring automated integrity monitoring, anti-tab-switch safeguards, randomized question banks, and instantaneous evaluation scoring.',
    features: [
      'Real-time examination proctoring & integrity monitoring',
      'Anti-cheat detection and browser focus state tracking',
      'Automated assessment evaluation & grade generation',
      'Role-based consoles for candidates and examiners',
      'Scalable candidate session management'
    ],
    technologies: ['TypeScript', 'React', 'HTML5', 'Node.js', 'Vite', 'Tailwind CSS'],
    contributors: ['Mohammed Shameem (Shameem1105)', 'Vasiharan (VasiharanB)'],
    githubUrl: 'https://github.com/Shameem1105/Aethon-Sentinal',
    liveUrl: 'https://aethon-sentinel.vercel.app/',
    status: 'Live Web Platform',
    architectureHighlights: [
      'Browser event sandboxing detecting fullscreen exits and blur events',
      'Instantaneous client-side evaluation with authoritative server sync',
      'Optimized lightweight asset delivery for remote candidates'
    ],
    gradient: 'from-cyan-500/20 via-blue-600/20 to-indigo-700/20'
  },
  {
    id: 'nouf-x-architects',
    projectNumber: '02',
    title: 'Nouf\' X Architects',
    tagline: 'Contemporary Architectural Design & Studio Showcase',
    category: 'Architecture & Digital Experience',
    description: 'A bespoke digital platform crafted for Noufal Architecture Studio, showcasing contemporary architectural design, spatial concept development, and interior masterplanning.',
    problem: 'High-end architectural firms struggle to communicate spatial scale, design philosophy, and material depth through conventional portfolio websites.',
    solution: 'Designed and engineered an editorial architectural showcase emphasizing clean spatial grids, high-contrast imagery, smooth micro-interactions, and conversion-focused client consultations.',
    features: [
      'High-resolution spatial concept galleries with zero layout shift',
      'Editorial typography and minimalist architectural aesthetics',
      'Interactive project scope and consultation booking funnel',
      'Mobile-optimized touch interactions and fluid transitions',
      'Fast CDN-delivered imagery with progressive loading'
    ],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Lucide React'],
    contributors: ['Mohammed Shameem (Shameem1105)', 'Sivaram (siva3009)'],
    githubUrl: 'https://github.com/Shameem1105/Architect',
    liveUrl: 'https://architect-theta-two.vercel.app/',
    status: 'Live Client Platform',
    architectureHighlights: [
      'Sub-second first contentful paint (FCP) on edge CDN',
      'Progressive image decoding preventing viewport jank',
      'Fluid typographic clamp scaling across viewport sizes'
    ],
    gradient: 'from-amber-500/20 via-orange-600/20 to-zinc-700/20'
  },
  {
    id: 'construction-management',
    projectNumber: '03',
    title: 'Enterprise Construction ERP',
    tagline: 'Full-Lifecycle Site & Procurement Management Platform',
    category: 'Full-Stack ERP & Operations',
    description: 'An end-to-end operational software platform designed to manage construction project scheduling, raw material procurement, site inventory, and subcontractor billing.',
    problem: 'Construction contractors face severe budget overruns due to untracked on-site inventory loss, delayed material requisitions, and disconnected paper-based reporting.',
    solution: 'Architected a centralized multi-site ERP with requisition approvals, live inventory reconciliation, budget-to-actual variance dashboards, and role-based operational permissions.',
    features: [
      'Material requisition & purchase order state machines',
      'Real-time site inventory tracking & warehouse transfers',
      'Budget vs actual cost variance calculation',
      'Subcontractor quotation & payment management',
      'Automated invoice and PDF audit trail generation'
    ],
    technologies: ['JavaScript', 'PHP / Node.js', 'MySQL', 'Tailwind CSS', 'REST APIs'],
    contributors: ['Mohammed Shameem (Shameem1105)', 'Vasiharan (VasiharanB)'],
    githubUrl: 'https://github.com/Shameem1105/construction-management',
    status: 'Client Production Platform',
    architectureHighlights: [
      'Relational database schema with transactional ledger constraints',
      'Multi-tier managerial approval state machines',
      'High-contrast mobile views for job-site superintendents'
    ],
    gradient: 'from-emerald-500/20 via-teal-600/20 to-cyan-700/20'
  },
  {
    id: 'palash-ai',
    projectNumber: '04',
    title: 'Palash AI Speech Translator',
    tagline: 'Offline Neural Multilingual Speech-to-Speech Engine',
    category: 'AI / Speech & Multilingual Systems',
    description: 'An offline-capable AI speech-to-speech translation pipeline developed as a Smart India Hackathon prototype for emergency field communication across diverse regional dialects.',
    problem: 'Field workers and emergency responders in low-connectivity remote regions cannot communicate effectively across diverse languages without reliant internet access.',
    solution: 'Designed an offline neural voice translation pipeline that captures voice audio via the Web Audio API, translates phonetically and semantically, and synthesizes localized speech output in real time.',
    features: [
      'Client-side noise reduction and audio normalization',
      'Offline neural machine translation models',
      'Real-time speech-to-text and text-to-speech synthesis',
      'Support for regional language phonetics',
      'High-accessibility touch-first interface'
    ],
    technologies: ['JavaScript', 'Python', 'Web Audio API', 'SpeechSynthesis API', 'Machine Learning Models'],
    contributors: ['Mohammed Shameem (Shameem1105)'],
    githubUrl: 'https://github.com/Shameem1105/palash-AI',
    status: 'SIH Innovation Prototype',
    architectureHighlights: [
      'Client-side edge inference eliminating cloud API latency',
      'Streaming audio buffer processing to prevent memory spikes',
      'Zero-bandwidth dependency for disaster-zone operations'
    ],
    gradient: 'from-pink-500/20 via-rose-600/20 to-purple-700/20'
  },
  {
    id: 'cricket-conquest-auction',
    projectNumber: '05',
    title: 'Cricket Conquest Auction System',
    tagline: 'Real-Time WebSocket Live Bidding Platform',
    category: 'Real-Time Web Applications',
    description: 'A distributed real-time mock auction platform engineered with persistent WebSockets, atomic bid arbitrations, live team budget calculators, and multi-team synchronization.',
    problem: 'Competitive mock auctions suffer from race conditions, laggy bidding consoles, and budget calculation errors during rapid-fire bidding wars.',
    solution: 'Constructed an event-driven bidding engine enforcing atomic bid locking, instantaneous purse deduction, roster composition rules, and real-time live broadcasting.',
    features: [
      'Sub-200ms WebSocket bidding synchronization',
      'Dynamic team purse and overseas player quota validation',
      'Dedicated role-based auctioneer and team manager consoles',
      'Live bid history timeline and audit logging',
      'Instant squad analytics and strength comparison'
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'WebSockets', 'Tailwind CSS'],
    contributors: ['Vasiharan (VasiharanB)', 'Mohammed Shameem (Shameem1105)'],
    githubUrl: 'https://github.com/VasiharanB/cricket-conquest-ipl-auction',
    status: 'Symposium Live System',
    architectureHighlights: [
      'Single-threaded atomic bid serialization preventing concurrency races',
      'Heartbeat connection management with automatic client reconnection',
      'Optimistic client UI updates with authoritative server rollback'
    ],
    gradient: 'from-lime-500/20 via-emerald-600/20 to-teal-700/20'
  },
  {
    id: 'sql-learning-assistant',
    projectNumber: '06',
    title: 'SQL Tutor Bot & Query Engine',
    tagline: 'Interactive In-Browser SQL Laboratory with Contextual AI Guidance',
    category: 'EdTech & Developer Tools',
    description: 'An interactive database learning workbench running in-browser SQLite with WebAssembly, pairing real query execution with an AI tutor that explains errors and optimizes queries.',
    problem: 'Beginners studying relational databases are baffled by terse database error codes that fail to explain the underlying logical flaw in their joins or aggregations.',
    solution: 'Built an in-browser sandbox that executes queries locally in WebAssembly, analyzes user SQL against relational schemas, and generates step-by-step contextual advice.',
    features: [
      'In-browser SQL compilation & execution via SQL.js',
      'AI query decomposition & schema explanation',
      'Dynamic relational schema diagram visualizer',
      'Progressive challenge curricula with instant feedback',
      'Automated query complexity scoring'
    ],
    technologies: ['TypeScript', 'React', 'SQL.js (WASM)', 'Tailwind CSS', 'Gemini AI API'],
    contributors: ['Sivaram (siva3009)'],
    githubUrl: 'https://github.com/siva3009/SQL-Learning-Assistant-',
    status: 'Completed Platform',
    architectureHighlights: [
      'Pure client-side WebAssembly database eliminating server costs',
      'Prompt-engineered query diagnostics pipeline',
      'Visual foreign-key relation mapper'
    ],
    gradient: 'from-blue-500/20 via-indigo-600/20 to-violet-700/20'
  },
  {
    id: 'smart-issue-tracker',
    projectNumber: '07',
    title: 'Smart Issue Tracker AI',
    tagline: 'Vector Similarity Ticket Deduplication & Resolution Engine',
    category: 'AI / Machine Learning & Systems',
    description: 'Enterprise-grade issue tracking and triage system using Django, React, FAISS Vector Search, and Gemini AI for automated duplicate detection and remediation.',
    problem: 'Customer support and software engineering teams waste hundreds of hours manually reviewing duplicate tickets and diagnosing repetitive bugs.',
    solution: 'Constructed an automated embedding pipeline transforming incoming problem descriptions into vector representations, querying an indexed FAISS vector database, and auto-suggesting root cause fixes via Gemini AI.',
    features: [
      'FAISS high-dimensional vector similarity search',
      'Gemini AI automated ticket resolution suggestions',
      'Role-based access control (RBAC) permissions',
      'Real-time issue status transition machine',
      'Historical issue telemetry and analytics'
    ],
    technologies: ['Python', 'Django', 'React', 'TypeScript', 'FAISS', 'Google Gemini AI', 'PostgreSQL'],
    contributors: ['Vasiharan (VasiharanB)'],
    githubUrl: 'https://github.com/VasiharanB/Smart-Issue-Tracker',
    status: 'Completed Prototype',
    architectureHighlights: [
      'Sub-50ms cosine similarity search across thousands of vectors',
      'Asynchronous vector embedding generation background tasks',
      'Clean separation between Django REST API and React client'
    ],
    gradient: 'from-emerald-500/20 via-teal-600/20 to-cyan-700/20'
  },
  {
    id: 'nebula-workspace-ai',
    projectNumber: '08',
    title: 'Nebula Workspace AI',
    tagline: 'AI-Powered Unified Productivity Ecosystem',
    category: 'AI & Productivity Platform',
    description: 'An AI-driven unified productivity platform combining intelligent chat, multi-project task management, integrated code workspace, and automated workflow pipelines.',
    problem: 'Modern product teams suffer from constant context fragmentation across disjointed chat apps, documentation hubs, task boards, and external code sandboxes.',
    solution: 'Engineered an all-in-one AI platform featuring contextual conversation threads, dynamic knowledge graphs, real-time code execution, and team Kanban pipelines.',
    features: [
      'Context-aware AI conversational assistant',
      'Integrated code execution canvas with syntax highlighting',
      'Dynamic document synthesis & semantic search',
      'Real-time collaborative task Kanban board',
      'Multi-agent workflow automation pipelines'
    ],
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Lucide React', 'AI SDK'],
    contributors: ['Sivaram (siva3009)'],
    githubUrl: 'https://github.com/siva3009/Nebula-Workspace-AI',
    status: 'Active Open Source',
    architectureHighlights: [
      'Zero-latency spatial workspace routing',
      'Reactive state synchronization between chat and code canvas',
      'Modular agentic plugin architecture'
    ],
    gradient: 'from-purple-500/20 via-indigo-600/20 to-blue-700/20'
  },
  {
    id: 'devicecensus',
    projectNumber: '09',
    title: 'DeviceCensus (E-CODE-07)',
    tagline: 'Code-Driven Intelligence System for Home Assistant Integrations',
    category: 'IoT Systems & Code Intelligence',
    description: 'A code-driven intelligence system for analyzing Home Assistant integrations using structured metadata, Python/SQL analysis, and evidence-backed source-code retrieval across 1,500+ integration manifests.',
    problem: 'IoT engineers and developers building Home Assistant integrations need to understand device protocols, sensor data retrieval, and error handling spread across 1,500+ manifests. General LLMs hallucinate counts or make unsupported assertions on large codebases.',
    solution: 'Extracts Home Assistant Core source code into structured datasets and combines exact Python/SQL counting with evidence-backed source-code retrieval to provide traceable answers linked to original files.',
    features: [
      'Structured AST extraction of 1,500+ Home Assistant manifests',
      'Traceable, evidence-backed code retrieval preventing LLM hallucinations',
      'Exact Python & SQL counting algorithms for sensor patterns',
      'Automated integration manifest schema validation',
      'FastMCP integration endpoints for AI IDE querying'
    ],
    technologies: ['Python', 'SQL', 'FastMCP', 'SQLite', 'Docker', 'AST Parser', 'Pytest'],
    contributors: ['Mohammed Shameem (Shameem1105)'],
    githubUrl: 'https://github.com/Shameem1105/DeviceCensus',
    status: 'Active Repository',
    architectureHighlights: [
      'Deterministic AST-level Python source code extraction and metadata indexing',
      'Traceable evidence-grounded source file retrieval preventing LLM hallucinations',
      'Dockerized microservice environment with automated test suites'
    ],
    gradient: 'from-blue-500/20 via-cyan-600/20 to-teal-700/20'
  },
  {
    id: 'slabsense-ai',
    projectNumber: '10',
    title: 'SlabSense AI',
    tagline: 'Evidence-Grounded AI Assistant for Tariff Regulations',
    category: 'Regulatory AI & Energy Intelligence',
    description: 'An evidence-grounded AI assistant for electricity tariffs and regulations, automating complex multi-slab consumer bill calculations and date-aware regulatory document retrieval.',
    problem: 'Electricity tariffs, subsidies, and billing rules are scattered across complex regulatory orders and government gazettes. Engineers and consumers struggle to compute multi-slab rates across changing effective dates.',
    solution: 'Engineered an AI regulatory retrieval engine that indexes official tariff orders, tracks effective billing periods, and produces exact mathematical slab calculations backed by page-level document citations.',
    features: [
      'Date-aware regulatory document retrieval with page citations',
      'Multi-tier slab billing arithmetic engine with subsidy validation',
      'Consumer complaint explanation generator with rule references',
      'Automated regulatory order parsing and rate change verification',
      'Containerized RESTful microservice API'
    ],
    technologies: ['Python', 'AI Retrieval', 'FastAPI', 'SQLite', 'Docker', 'Pytest'],
    contributors: ['Vasiharan (VasiharanB)'],
    githubUrl: 'https://github.com/VasiharanB/SlabSense-AI',
    status: 'Active Repository',
    architectureHighlights: [
      'Date-aware regulatory document retrieval with page-level citations',
      'Multi-tier slab billing arithmetic engine with subsidy validation',
      'Containerized Docker microservice with structured API contracts'
    ],
    gradient: 'from-amber-500/20 via-emerald-600/20 to-teal-700/20'
  }
];

export const FEATURED_PROJECTS = TOP_PROJECTS.slice(0, 3);
export const SECONDARY_PROJECTS = TOP_PROJECTS.slice(3);
