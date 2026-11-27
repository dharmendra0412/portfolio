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
    "Full-Stack Engineer (React / Next.js / Python)",
    "AI & Computer Vision Engineer"
  ],
  socials: {
    github: "https://github.com/dharmendra0412",
    linkedin: "https://www.linkedin.com/in/dharmendra-kumar-b3a8223b1",
  },
  proofMetrics: [
    { value: "6+", label: "Live Deployed Apps", sub: "Running in Production on Vercel" },
    { value: "1st Place", label: "SportsTech Hackathon '25", sub: "IIT Roorkee TIDES & Fit India" },
    { value: "#818", label: "Global Rank / 12,885", sub: "Top 6.3% • 48 Countries (AI Agent)" },
    { value: "< 4 hrs", label: "Direct Response SLA", sub: "100% Ownership & Fast Delivery" }
  ],
  bio: `I am a Computer Science & Engineering undergraduate at JB Institute of Technology (2024–2028) who builds production-grade full-stack applications, interactive 3D WebGL/WebSocket systems, and 60 FPS browser-native computer vision tools. I won 1st Place at the Uttarakhand SportsTech Hackathon 2025 (IIT Roorkee TIDES) and placed 818th among 12,885 developers globally across 48 countries in HackerRank Orchestrate May 2026.`
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
    detail: "Iterative builds pushed with live Vercel preview links so you test real progress early."
  },
  {
    step: "03",
    title: "Launch & 100% IP Handover",
    duration: "Delivery",
    detail: "Production deployment on your domain, environment setup guide, and post-launch support."
  }
];

// Client-focused services (concrete technical capabilities & delivery speed)
export const servicesOffered = [
  {
    id: "web-apps",
    title: "Full-Stack SaaS & Commercial Web Platforms",
    subtitle: "React, Next.js, Node.js/Express, FastAPI, WebSockets & Cloud DBs",
    timeline: "1–3 Weeks",
    idealFor: "SaaS & Commercial Clients",
    description: "I build fast, responsive React 18 & Next.js web applications backed by REST APIs, real-time Socket.IO / WebSockets, JWT authentication, and MySQL or MongoDB Atlas persistence.",
    whatYouGet: [
      "Responsive React / Next.js + Tailwind UI (mobile, tablet, desktop)",
      "Role-based JWT authentication, databases & REST/WebSocket APIs",
      "Deployed live on Vercel with your custom domain & SSL configured"
    ],
    tech: ["React / Next.js", "Node.js / FastAPI", "MongoDB / MySQL", "WebSockets"],
    icon: "Layout"
  },
  {
    id: "computer-vision",
    title: "Browser-Native Computer Vision & AI",
    subtitle: "Real-time pose tracking & ML pipelines at $0 GPU server cost",
    timeline: "1–2 Weeks",
    idealFor: "Fitness, Sports & AI Apps",
    description: "From 60 FPS MediaPipe Pose skeletal tracking running inside the browser to ML threat classification and interactive AI workflows, I engineer AI features that are practical and cost-efficient.",
    whatYouGet: [
      "33-point MediaPipe Pose landmark & biomechanical angle detection",
      "Scikit-Learn / NLP threat scoring & custom AI integrations",
      "Zero cloud GPU compute overhead for client-side inference"
    ],
    tech: ["MediaPipe Pose", "Python", "Scikit-Learn", "OpenCV"],
    icon: "BrainCircuit"
  },
  {
    id: "backend-apis",
    title: "High-Speed Python & Node Backends",
    subtitle: "Production APIs, ML inference endpoints & real-time telemetry",
    timeline: "5–10 Days",
    idealFor: "Web & Mobile Backends",
    description: "Need reliable backend endpoints cleanly documented with Swagger, strict schema validation, secure auth, or ML model serving? I ship battle-tested services ready for cloud scaling.",
    whatYouGet: [
      "FastAPI or Express REST APIs with structured validation",
      "Real-time WebSocket state synchronization & collision logic",
      "Database schema design, indexing & cloud deployment"
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
      "Full handover & production deployment documentation"
    ],
    tech: ["Full Stack", "Next.js / React", "FastAPI / Node", "Vercel"],
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
        { name: "React 18 & Next.js", tag: "Frontend" },
        { name: "Tailwind CSS", tag: "Design System" },
        { name: "Node.js & Express", tag: "Backend" },
        { name: "FastAPI", tag: "Python API" },
        { name: "Socket.IO & WebSockets", tag: "Real-Time" },
        { name: "Three.js / WebGL", tag: "3D UI" },
      ]
    },
    {
      name: "AI, Agents & Computer Vision",
      icon: "Brain",
      description: "Real-time vision, RAG pipelines & ML classification",
      skills: [
        { name: "MediaPipe Pose", tag: "60 FPS Tracking" },
        { name: "Scikit-Learn", tag: "Random Forest / TF-IDF" },
        { name: "RAG & LLM Workflows", tag: "AI Agents" },
        { name: "NumPy & Pandas", tag: "Data Pipelines" },
        { name: "Voice Cues & Telemetry", tag: "Real-Time Feedback" },
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
      name: "Databases & Cloud Deployment",
      icon: "Terminal",
      description: "Persistence, geospatial UI & live deployments",
      skills: [
        { name: "MongoDB Atlas", tag: "Mongoose ODM" },
        { name: "MySQL", tag: "Relational DB" },
        { name: "Leaflet Maps", tag: "Geospatial" },
        { name: "Git & GitHub", tag: "Version Control" },
        { name: "Vercel & Render", tag: "Production Hosting" },
      ]
    },
    {
      name: "Security & Authentication",
      icon: "ShieldAlert",
      description: "Access control, cryptography & threat detection",
      skills: [
        { name: "JWT & Bcrypt", tag: "Role-Based Auth" },
        { name: "Phishing URL Detection", tag: "ML Threat Intel" },
        { name: "AES-256 Encryption", tag: "Confidentiality" },
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

// All featured projects backed directly by verified public HTTP 200 live deployments
export const projectsData = [
  {
    id: "ai-form-coach",
    title: "AI Form Coach",
    subtitle: "60 FPS Real-Time Exercise Form Analyzer (MediaPipe Pose)",
    badge: "1st Place Winner",
    impactStat: "60 FPS · $0 Cloud GPU Cost",
    category: "AI & Vision",
    filterGroup: "AI & Vision",
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
      "Persisted on MongoDB Atlas with Mongoose and deployed live on Vercel."
    ],
    liveUrl: "https://prop-flow-pi.vercel.app",
    features: [
      "Zero-Conflict Booking Algorithm",
      "Live Socket.IO Ticket Messaging",
      "JWT + Bcrypt Role Auth",
      "Operational SLA KPI Dashboard"
    ]
  },
  {
    id: "phish-guard-ai",
    title: "PhishGuard AI",
    subtitle: "Real-Time Fraud & Phishing Threat Detection System",
    badge: "Cybersecurity ML",
    impactStat: "700k+ Threat Samples · Sub-Second API",
    category: "AI & Vision",
    filterGroup: "AI & Vision",
    clientProblem: "Static domain blacklists miss newly registered zero-day phishing domains and obfuscated SMS/email attacks in multilingual regions.",
    clientSolution: "Engineered a hybrid Random Forest + TF-IDF + heuristic threat engine trained on 650,000+ malicious URLs and 70,000+ phishing emails/SMS, served via a FastAPI inference backend and live fraud-detection UI.",
    techStack: ["Python", "FastAPI", "Scikit-Learn", "TF-IDF", "Random Forest", "Vercel"],
    description: "Real-time cybersecurity threat detection platform combining large-scale machine learning classification with heuristic safety scoring.",
    points: [
      "Trained on 650,000+ URL signatures and 70,000+ phishing emails and SMS messages.",
      "Extracts lexical entropy, domain anomalies, and TF-IDF n-gram threat features.",
      "FastAPI REST backend powers real-time fraud scoring via the deployed web interface.",
      "Supports multilingual phishing indicators including regional SMS lure patterns."
    ],
    liveUrl: "https://phishguard-ai-topaz.vercel.app",
    features: [
      "Random Forest + TF-IDF Engine",
      "FastAPI Sub-Second Inference",
      "URL, Email & SMS Risk Scoring",
      "Live Threat Risk Dashboard"
    ]
  },
  {
    id: "nasa-mission-control",
    title: "Mission Control: Spaceflight Sim",
    subtitle: "NASA Systems Engineering & 3D Multiplayer Spaceflight Simulator",
    badge: "3D WebGL & Systems",
    impactStat: "3D Spacecraft CAD · Multiplayer WebSockets",
    category: "Systems & Client",
    filterGroup: "Systems & Client",
    clientProblem: "Space systems engineering concepts—power budgets, telemetry links, orbital mechanics, and launch trade-offs—are hard to visualize without interactive real-time simulation tools.",
    clientSolution: "Built an interactive WebGL/Three.js simulator inspired by the NASA Systems Engineering Handbook, complete with a live 3D Blue Marble Earth, real-time Spacecraft CAD Inspector, Apollo Quindar telemetry audio, and WebSocket multi-lead collaboration.",
    techStack: ["Three.js", "WebGL", "JavaScript", "Node.js", "WebSockets", "Vercel"],
    description: "Interactive space mission design and systems-engineering simulator with real-time 3D Earth rendering, holographic wireframe spacecraft CAD, launch pad physics, and 4-player WebSocket co-op.",
    points: [
      "Photorealistic 3D Earth (NASA Blue/Black Marble) with atmosphere glow, cloud layers & city lights.",
      "Real-time 3D Spacecraft CAD Inspector with PBR materials and holographic wireframe blueprint mode.",
      "LC-39A 3D launch sequence with Mach 1.0 Prandtl-Glauert vapor cone & Deep Space Network status.",
      "Powered by a Node.js + WebSocket (`ws`) multiplayer backend with automated test suites."
    ],
    liveUrl: "https://nasa-hazel.vercel.app",
    features: [
      "3D Spacecraft CAD Blueprint UI",
      "4-Lead WebSocket Co-Op Mode",
      "DSN Ground Track & Telemetry",
      "Mach 1.0 Launch Ascent Physics"
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
      "Deployed live on Vercel with complete PRD and technical architecture specs."
    ],
    liveUrl: "https://bharat-teerth.vercel.app",
    features: [
      "23 Indian Languages Context",
      "Leaflet Geospatial Mapping",
      "MongoDB Atlas Aggregation",
      "Printable Pilgrim Itinerary Builder"
    ]
  },
  {
    id: "ag-traders",
    title: "AG Traders",
    subtitle: "Commercial Product Showcase & Brand Catalog Web App",
    badge: "Client Delivery",
    impactStat: "Next.js · Commercial Production Site",
    category: "Systems & Client",
    filterGroup: "Systems & Client",
    clientProblem: "A commercial bath fittings business needed a fast, modern digital storefront and product catalog to showcase premium fixtures to residential and commercial buyers.",
    clientSolution: "Engineered and shipped a responsive Next.js web application featuring structured fixture collections, crisp product browsing across mobile and desktop, and edge deployment on Vercel.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "Vercel"],
    description: "Live commercial brand & fixture showcase engineered for modern residential and commercial bath fittings buyers.",
    points: [
      "Built on Next.js for fast page transitions, SEO metadata, and mobile optimization.",
      "Organized multi-category fixture showcase tailored for residential & commercial clients.",
      "Optimized typography, responsive grids, and asset loading via Vercel edge network.",
      "Delivered end-to-end from UI design through live domain deployment."
    ],
    liveUrl: "https://ag-snowy.vercel.app",
    features: [
      "Next.js Production Storefront",
      "Commercial Catalog Navigation",
      "Mobile-First Responsive Grid",
      "Vercel Edge Performance"
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

export const faqData = [
  {
    question: "How does Dharmendra run 60 FPS computer vision with $0 cloud GPU cost?",
    answer: "By moving inference from Python cloud servers into the user's browser using MediaPipe Pose WebAssembly/WebGL. In AI Form Coach (1st Place, Uttarakhand SportsTech Hackathon 2025), 33 skeletal landmarks and joint angles compute locally in real time without streaming webcam video or paying for cloud GPUs."
  },
  {
    question: "What full-stack tech stack do you use for SaaS platforms and startup MVPs?",
    answer: "I build frontends with React 18, Next.js, and Tailwind CSS backed by Node.js/Express or Python FastAPI APIs, real-time Socket.IO or WebSockets, and MongoDB Atlas or MySQL persistence—deployed on Vercel and Render with staging URLs from week one."
  },
  {
    question: "How did PropFlow eliminate amenity booking conflicts in real time?",
    answer: "PropFlow enforces server-side interval-collision checks across booking time windows, operating hours, and guest caps before persisting to MongoDB Atlas, paired with Socket.IO for live maintenance ticket chat and <50ms status updates."
  },
  {
    question: "What machine learning and cybersecurity engineering experience do you have?",
    answer: "I engineered PhishGuard AI using Scikit-Learn Random Forest and TF-IDF pipelines trained on 650,000+ malicious URLs and 70,000+ phishing emails/SMS behind a FastAPI REST API, alongside AES-256 + LSB steganography encryption tooling."
  },
  {
    question: "What roles or freelance projects are you currently open to?",
    answer: "I am immediately available for Software Engineering Internships, Junior Full-Stack Developer or AI/Computer Vision Engineer roles (remote or on-site), as well as 1–3 week fixed-scope client MVP and commercial website builds."
  },
  {
    question: "Do clients and hiring teams receive full code ownership and deployment support?",
    answer: "Yes. Every client project includes 100% source code and IP ownership, clean modular documentation, custom domain and SSL setup on Vercel, and post-launch maintenance support with a guaranteed <4-hour response SLA."
  }
];
