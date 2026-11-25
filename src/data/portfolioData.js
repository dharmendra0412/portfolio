export const personalInfo = {
  name: "Dharmendra Kumar",
  title: "Software Developer & Computer Vision Engineer",
  phone: "+91-9045141614",
  email: "dharmendrakumar481212@gmail.com",
  location: "Dehradun, India (Available Remote Worldwide & On-Site)",
  availability: "Open to SWE Roles, Internships & Client Projects",
  responseSla: "< 4 hours",
  portrait: "/images/dharmendra_cutout.png",
  whatsappUrl: "https://wa.me/919045141614",
  resumeUrl: "/Dharmendra_Kumar_Resume.pdf",
  rolesTargeted: [
    "SWE Intern / Junior Developer",
    "Full-Stack Engineer (React / Node / Python)",
    "AI & Computer Vision Engineer"
  ],
  socials: {
    github: "https://github.com/dharmendra0412",
    linkedin: "https://www.linkedin.com/in/dharmendra-kumar-b3a8223b1",
  },
  proofMetrics: [
    { value: "14+", label: "GitHub Repositories", sub: "3 Live Web Apps on Vercel" },
    { value: "1st Place", label: "SportsTech Hackathon '25", sub: "IIT Roorkee TIDES & Fit India" },
    { value: "#818", label: "Global Rank / 12,885", sub: "Top 6.3% • 48 Countries (AI Agent)" },
    { value: "< 4 hrs", label: "Direct Response SLA", sub: "100% GitHub IP Ownership" }
  ],
  bio: `I am a Computer Science & Engineering undergraduate at JB Institute of Technology (2024–2028) who builds production-grade full-stack applications, autonomous RAG/LLM agent platforms, and 60 FPS browser-native computer vision systems. I won 1st Place at the Uttarakhand SportsTech Hackathon 2025 (IIT Roorkee TIDES) and placed 818th among 12,885 developers globally across 48 countries in HackerRank Orchestrate May 2026.`
};

// Engagement process shown to prospective clients & teams
export const engagementWorkflow = [
  {
    step: "01",
    title: "Discovery & Technical Spec",
    duration: "Day 1",
    detail: "Free 15-min call or async spec review to lock scope, architecture, milestones, and fixed timeline."
  },
  {
    step: "02",
    title: "Rapid Build & Live Staging",
    duration: "Days 2–10",
    detail: "Clean commits pushed daily with live Vercel/API staging links so you test real progress early."
  },
  {
    step: "03",
    title: "Launch & 100% IP Handover",
    duration: "Delivery",
    detail: "Documented GitHub repository, environment setup guide, and post-launch bug-fix support."
  }
];

// Client-focused services (concrete technical capabilities & delivery speed)
export const servicesOffered = [
  {
    id: "web-apps",
    title: "Full-Stack SaaS & Web Platforms",
    subtitle: "React, Node.js/Express, FastAPI, WebSockets & Cloud DBs",
    timeline: "1–3 Weeks",
    idealFor: "SaaS & Portals",
    description: "I build fast, responsive React 18 applications backed by REST APIs, real-time Socket.IO events, JWT authentication, and MySQL or MongoDB Atlas persistence.",
    whatYouGet: [
      "Responsive React + Tailwind UI (mobile, tablet, desktop)",
      "Role-based JWT authentication, databases & REST/WebSocket APIs",
      "Deployed live on Vercel / Render with clean modular source code"
    ],
    tech: ["React 18", "Node.js / FastAPI", "MongoDB / MySQL", "Socket.IO"],
    icon: "Layout"
  },
  {
    id: "computer-vision",
    title: "Browser-Native Computer Vision & AI",
    subtitle: "Real-time pose tracking & AI workflows at $0 GPU server cost",
    timeline: "1–2 Weeks",
    idealFor: "Fitness, Sports & AI Apps",
    description: "From 60 FPS MediaPipe Pose skeletal tracking running inside the browser to RAG vector search and LLM agent automation, I engineer AI features that are practical and cost-efficient.",
    whatYouGet: [
      "33-point MediaPipe Pose landmark & biomechanical angle detection",
      "RAG document QA & multi-provider LLM tool routing",
      "Zero cloud GPU compute overhead for client-side inference"
    ],
    tech: ["MediaPipe Pose", "Python", "RAG / LLMs", "OpenCV"],
    icon: "BrainCircuit"
  },
  {
    id: "backend-apis",
    title: "High-Speed Python & Node Backends",
    subtitle: "Production APIs, ML inference endpoints & document processing",
    timeline: "5–10 Days",
    idealFor: "Web & Mobile Backends",
    description: "Need reliable backend endpoints cleanly documented with Swagger, strict schema validation, secure auth, or ML model serving? I ship battle-tested services ready for cloud scaling.",
    whatYouGet: [
      "FastAPI or Express REST APIs with structured validation",
      "Scikit-Learn / NLP inference endpoints & OCR file pipelines",
      "Database schema design, indexing & deployment config"
    ],
    tech: ["FastAPI", "Python", "Express", "MySQL"],
    icon: "Server"
  },
  {
    id: "mvp-prototyping",
    title: "Startup MVP Prototyping & Sprint Engineering",
    subtitle: "Launch a working V1 product to validate users or investors",
    timeline: "7–14 Days",
    idealFor: "Startup Founders & Pilots",
    description: "Built on a proven hackathon-winner execution mindset: go from idea to a deployed, clickable, end-to-end working product without cutting architectural corners.",
    whatYouGet: [
      "Lean technical architecture focused on your core user loop",
      "Interactive live preview URLs from week one",
      "Full GitHub repo ownership & setup documentation"
    ],
    tech: ["Full Stack", "React", "FastAPI / Node", "Vercel"],
    icon: "Rocket"
  }
];

export const skillsData = {
  categories: [
    {
      name: "Full-Stack Web & APIs",
      icon: "Globe",
      description: "Frontend interfaces, WebSockets & API microservices",
      skills: [
        { name: "React 18 & Vite", tag: "Frontend" },
        { name: "Tailwind CSS", tag: "Design System" },
        { name: "Node.js & Express", tag: "Backend" },
        { name: "FastAPI", tag: "Python API" },
        { name: "Socket.IO", tag: "Real-Time" },
        { name: "HTML5 & CSS3", tag: "Responsive UI" },
      ]
    },
    {
      name: "AI, Agents & Computer Vision",
      icon: "Brain",
      description: "Real-time vision, RAG pipelines & ML classification",
      skills: [
        { name: "MediaPipe Pose", tag: "60 FPS Tracking" },
        { name: "RAG & Multi-LLM Agents", tag: "MCP / Tool Calling" },
        { name: "Scikit-Learn", tag: "Random Forest / TF-IDF" },
        { name: "NumPy & Pandas", tag: "Data Pipelines" },
        { name: "Voice AI (STT / TTS)", tag: "Multimodal" },
      ]
    },
    {
      name: "Programming Languages",
      icon: "Code2",
      description: "Production apps, systems & competitive coding",
      skills: [
        { name: "Python", tag: "Primary / AI" },
        { name: "JavaScript (ES6+)", tag: "Full-Stack" },
        { name: "TypeScript", tag: "Typed Web" },
        { name: "C++", tag: "DSA & CP" },
        { name: "Java & C", tag: "Core CS" },
      ]
    },
    {
      name: "Databases & Document Systems",
      icon: "Terminal",
      description: "Persistence, OCR & workflow tooling",
      skills: [
        { name: "MongoDB Atlas", tag: "Mongoose ODM" },
        { name: "MySQL", tag: "Relational DB" },
        { name: "Tesseract OCR & PDF-Lib", tag: "Docs Toolkit" },
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "Vercel & Render", tag: "Cloud Deploy" },
      ]
    },
    {
      name: "Security & Authentication",
      icon: "ShieldAlert",
      description: "Access control, cryptography & threat detection",
      skills: [
        { name: "JWT & Bcrypt", tag: "Role-Based Auth" },
        { name: "AES-256 Encryption", tag: "Confidentiality" },
        { name: "Phishing URL Detection", tag: "ML Threat Intel" },
        { name: "Image Steganography", tag: "LSB Embedding" },
      ]
    },
    {
      name: "Core CS Fundamentals",
      icon: "Cpu",
      description: "Strong computer science foundations for SDE interviews",
      skills: [
        { name: "Data Structures & Algorithms", tag: "Problem Solving" },
        { name: "Object-Oriented Programming", tag: "Design Patterns" },
        { name: "DBMS & Data Modeling", tag: "Indexing" },
        { name: "Computer Networks", tag: "HTTP / WebSockets" },
      ]
    }
  ]
};

// Verified projects backed directly by live Vercel apps & GitHub repos
export const projectsData = [
  {
    id: "ai-form-coach",
    title: "AI Form Coach",
    subtitle: "60 FPS Real-Time Exercise Form Analyzer (MediaPipe Pose)",
    badge: "1st Place Winner",
    impactStat: "60 FPS · $0 Cloud GPU Cost",
    category: "Vision & Security",
    filterGroup: "Vision & Security",
    clientProblem: "Fitness and sports platforms struggle to offer automated coaching because streaming user webcam video to cloud GPU servers introduces high latency, server costs, and privacy concerns.",
    clientSolution: "Engineered a client-side MediaPipe Pose pipeline tracking 33 body landmarks at 60 FPS directly in the browser, computing joint angles for squats, push-ups, and pull-ups with zero server GPU billing.",
    techStack: ["MediaPipe Pose", "JavaScript", "HTML5", "CSS3", "Vercel"],
    description: "Award-winning real-time biomechanical exercise posture analysis and repetition counter running completely client-side inside the browser.",
    points: [
      "Tracks 33 skeletal landmarks at 60 FPS directly in-browser with $0 GPU compute cost.",
      "Computes live joint angles and form rules for Squats, Push-ups, and Pull-ups.",
      "Delivers instant coaching cues and automatic repetition counting with live stats.",
      "Won 1st Place (Sports Domain) at the Uttarakhand SportsTech Hackathon 2025."
    ],
    github: "https://github.com/dharmendra0412/Sports-Hackathon",
    liveUrl: "https://sports-hackathon-six.vercel.app",
    certificateImage: "/certificates/uttarakhand-sportstech-2025.jpg",
    features: [
      "33-Landmark Pose Estimation",
      "Real-Time Joint Angle Math",
      "Automatic Rep Counting",
      "100% Browser Privacy ($0 GPU)"
    ]
  },
  {
    id: "propflow",
    title: "PropFlow",
    subtitle: "Real-Time Property Rental, Maintenance & Amenity SaaS",
    badge: "Live Full-Stack SaaS",
    impactStat: "0 Booking Conflicts · <50ms Sync",
    category: "Full-Stack",
    filterGroup: "Full-Stack",
    clientProblem: "Residential property teams lose hours coordinating maintenance tickets over scattered chats and suffer double-booked shared amenities without unified SLA visibility.",
    clientSolution: "Architected a real-time React 18 + Node.js + Socket.IO platform on MongoDB Atlas with role-based JWT auth, an interval-collision amenity engine guaranteeing zero double bookings, and live KPI SLA dashboards.",
    techStack: ["React 18", "Node.js", "Express", "Socket.IO", "MongoDB Atlas", "Tailwind CSS"],
    description: "Full-stack real-time property operations SaaS uniting residents and managers through live threaded ticket chat, collision-free amenity scheduling, and SLA monitoring.",
    points: [
      "Interval collision engine enforces 0 double-bookings across amenities and operating hours.",
      "Socket.IO powers live two-way maintenance ticket chat and Pending → In Progress → Completed workflows.",
      "Role-based JWT & bcrypt authentication separates Tenant vs. Manager access.",
      "Persisted on MongoDB Atlas with Mongoose and deployed live on Vercel & Render."
    ],
    github: "https://github.com/dharmendra0412/PropFlow",
    liveUrl: "https://prop-flow-pi.vercel.app",
    features: [
      "Zero-Conflict Booking Algorithm",
      "Live Socket.IO Ticket Messaging",
      "JWT + Bcrypt Role Auth",
      "Operational SLA KPI Dashboard"
    ]
  },
  {
    id: "nova-ai",
    title: "Nova AI",
    subtitle: "Autonomous Multi-LLM, RAG & MCP Agent Platform",
    badge: "Agentic AI Architecture",
    impactStat: "RAG + MCP + Voice + Vision",
    category: "AI & Agents",
    filterGroup: "AI & Agents",
    clientProblem: "Single-model chat wrappers break when workflows need local document retrieval, multi-step tool execution, provider failover, or voice/image reasoning.",
    clientSolution: "Built a modular Python FastAPI agent runtime with an Intent Routing pipeline (CHAT / PLAN / EXECUTE), multi-provider LLM failover (Gemini, OpenAI, Ollama, OpenRouter), Model Context Protocol (MCP) tools, and local RAG vector search.",
    techStack: ["Python", "FastAPI", "RAG Vector Search", "MCP", "Voice STT/TTS", "Vision AI"],
    description: "Multimodal autonomous AI assistant platform uniting intent planning, local RAG knowledge retrieval across PDF/DOCX/CSV files, MCP tool integrations, Voice AI, and Vision understanding.",
    points: [
      "Intent router classifies tasks into CHAT, PLAN, EXECUTE, and WEB_SEARCH pipelines.",
      "Supports seamless failover across OpenAI, Gemini, Ollama, LM Studio, and OpenRouter.",
      "Chunks and indexes PDF, DOCX, TXT, CSV, and JSON files for local semantic RAG search.",
      "Includes Voice STT/TTS streaming plus permission-guarded MCP tool execution."
    ],
    github: "https://github.com/dharmendra0412/Nova-AI",
    features: [
      "Multi-Provider LLM Failover",
      "Model Context Protocol (MCP)",
      "Local Document RAG Indexer",
      "Permission-Guarded Tool Execution"
    ]
  },
  {
    id: "phish-guard-ai",
    title: "PhishGuard AI",
    subtitle: "Hybrid ML Phishing Detection Across URLs, Emails & SMS",
    badge: "Cybersecurity ML",
    impactStat: "700k+ Threat Samples · Sub-Second API",
    category: "AI & Agents",
    filterGroup: "AI & Agents",
    clientProblem: "Static domain blacklists miss newly registered zero-day phishing domains and obfuscated SMS/email attacks in multilingual regions.",
    clientSolution: "Engineered a hybrid Random Forest + TF-IDF + heuristic threat engine trained on 650,000+ malicious URLs and 70,000+ phishing emails/SMS, served via a sub-second FastAPI API and Chrome browser extension.",
    techStack: ["Python", "FastAPI", "Scikit-Learn", "TF-IDF", "Random Forest", "Chrome Extension"],
    description: "Real-time cybersecurity threat detection platform combining large-scale machine learning classification with heuristic safety scoring across a web dashboard and browser extension.",
    points: [
      "Trained on 650,000+ URL signatures and 70,000+ phishing emails and SMS messages.",
      "Extracts lexical entropy, domain anomalies, and TF-IDF n-gram threat features.",
      "Includes FastAPI REST scoring backend, Chrome extension client, and glassmorphism dashboard.",
      "Supports multilingual/regional phishing patterns including Hindi lure indicators."
    ],
    github: "https://github.com/dharmendra0412/phishguard-ai",
    features: [
      "Random Forest + TF-IDF Engine",
      "FastAPI Sub-Second Inference",
      "Companion Chrome Extension",
      "URL, Email & SMS Risk Scoring"
    ]
  },
  {
    id: "bharat-teerth",
    title: "Bharat Teerth",
    subtitle: "3-Tier Cultural Heritage, Map & Pilgrim Planning Portal",
    badge: "Live 3-Tier Web App",
    impactStat: "23 Indian Languages · OpenStreetMap",
    category: "Full-Stack",
    filterGroup: "Full-Stack",
    clientProblem: "Travelers exploring Indian temple heritage face fragmented, English-only information without unified geospatial mapping or printable trip itineraries.",
    clientSolution: "Built a production 3-tier React 18 + Express + MongoDB Atlas portal featuring Leaflet OpenStreetMap integration, a 23-Indian-language accessibility context, JWT auth, and printable PDF pilgrim planners.",
    techStack: ["React 18", "Tailwind CSS", "Node.js", "Express", "MongoDB Atlas", "Leaflet Maps"],
    description: "Production-deployed cultural heritage and pilgrimage discovery platform built with modular API architecture, geospatial maps, and multi-language localization.",
    points: [
      "Implements 23-Indian-language localization context across responsive SPA views.",
      "Integrates Leaflet (OpenStreetMap) geospatial pins and Printable/PDF trip itineraries.",
      "Unified Express.js server with JWT/bcrypt authentication and MongoDB Atlas aggregation.",
      "Backed by written PRD, Technical Documentation, and Vercel production deployment."
    ],
    github: "https://github.com/dharmendra0412/Bharat-Teerth",
    liveUrl: "https://bharat-teerth.vercel.app",
    features: [
      "23 Indian Languages Context",
      "Leaflet Geospatial Mapping",
      "MongoDB Atlas Aggregation",
      "Printable Pilgrim Itinerary Builder"
    ]
  },
  {
    id: "pdfly-pro",
    title: "PDFly Pro",
    subtitle: "Full-Stack Document, Conversion & OCR Processing Suite",
    badge: "Full-Stack Tool",
    impactStat: "Merge · Split · OCR · AI Docs",
    category: "Vision & Security",
    filterGroup: "Vision & Security",
    clientProblem: "Teams constantly juggle separate unreliable tools for merging PDFs, compressing scans, extracting text with OCR, and converting Office documents.",
    clientSolution: "Engineered a unified Node.js & Express backend toolkit combining pdf-lib, pdfjs-dist, Tesseract.js OCR, Sharp, docx/xlsx/pptxgenjs converters, and clean modular controller architecture.",
    techStack: ["Node.js", "Express", "PDF-Lib", "Tesseract.js OCR", "Sharp", "JavaScript"],
    description: "Comprehensive PDF & document utility server powering multi-file merging, splitting, image optimization, OCR extraction, watermarks, and Office format generation.",
    points: [
      "Modular Express controllers handling Multer file pipelines, compression, and downloads.",
      "Integrates Tesseract.js OCR alongside pdf-lib and pdfjs-dist for scanned text workflows.",
      "Supports Office document exports via docx, xlsx, and pptxgenjs.",
      "Includes Anthropic SDK hooks for automated document summarization workflows."
    ],
    github: "https://github.com/dharmendra0412/PDFly-Pro",
    features: [
      "Merge, Split, Rotate & Watermark",
      "Tesseract.js Scanned OCR",
      "DOCX / XLSX / PPTX Generation",
      "Modular Express Controller API"
    ]
  }
];

export const certificationsData = [
  {
    title: "Uttarakhand SportsTech Hackathon 2025 (1st Place Winner)",
    issuer: "TIDES IIT Roorkee & Government of Uttarakhand",
    period: "November 2025",
    description: "Awarded 1st Place in the Sports Domain for engineering 'AI Form Coach' — browser-native 60 FPS MediaPipe Pose biomechanical analysis with $0 server GPU cost.",
    badge: "🏆 1st Place Winner • State Level",
    image: "/certificates/uttarakhand-sportstech-2025.jpg",
    partners: ["TIDES IIT Roorkee", "Uttarakhand Shasan", "Fit India Uttarakhand"]
  },
  {
    title: "Gen-AI Camp: Multimodal AI & NLP",
    issuer: "AlgoUniversity (Backed by Y Combinator)",
    period: "2025 – 2026",
    description: "Completed intensive engineering cohort mentored by Microsoft Engineer Nipun, focusing on Generative AI architectures, Multimodal AI systems, and NLP pipelines.",
    badge: "YC Backed • AlgoUniversity",
    image: "/certificates/algouniversity-genai-camp.jpg",
    partners: ["AlgoUniversity", "Y Combinator", "Microsoft Mentor"]
  },
  {
    title: "Elite Coders Summer of Code (ECSoC) 2026",
    issuer: "Elite Coders • Powered by Unstop",
    period: "Summer 2026",
    description: "Contributed code to community repositories, passed pull-request reviews, and shipped features collaboratively under open-source project mentors.",
    badge: "Open Source Fellow",
    image: "/certificates/ecsoc-2026.jpg",
    partners: ["Unstop", "Render", ".xyz", "Memori", "Duality AI"]
  },
  {
    title: "National Intellectual Property Awareness Mission (NIPAM)",
    issuer: "Intellectual Property Office, Govt. of India",
    period: "December 2025",
    description: "Completed national IP awareness & software patent fundamentals program under DPIIT, Ministry of Commerce and Industry.",
    badge: "Govt of India • NIPAM",
    image: "/certificates/nipam-ipr-2025.jpg",
    pdfUrl: "/certificates/IPR_EVENT.pdf",
    partners: ["IP India", "NIPAM", "Ministry of Commerce & Industry"]
  },
  {
    title: "Python for Data Science",
    issuer: "E&ICT Academy, IIT Kanpur (MeitY Joint Initiative)",
    period: "July – September 2025",
    description: "Completed certified summer training covering Python, NumPy, Pandas, exploratory data analysis, and supervised machine learning under Prof B. V. Phani.",
    badge: "IIT Kanpur • MeitY",
    image: "/certificates/iit-kanpur-python-2025.jpg",
    pdfUrl: "/certificates/iit-kanpur-python-2025.pdf",
    partners: ["IIT Kanpur", "MeitY", "E&ICT Academy"]
  }
];
