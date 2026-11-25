# Dharmendra Kumar — Portfolio (`dharmendra.cv`)

Production developer portfolio built with **React 18**, **Vite 6**, **Tailwind CSS 3**, and **Lucide Icons**, configured for **Vercel** deployment and custom domain **`https://dharmendra.cv`**.

Live Production Preview: [dharmendra-cv.vercel.app](https://dharmendra-cv.vercel.app)

---

## Key Features

- **Hero & Proof Showcase**: Custom teal/abyssal UI featuring direct tech stack pills, verified metrics (`14+` GitHub repositories, `1st` Hackathon Win, `#818` Global AI Rank), and instant navigation to projects and contact.
- **Interactive Resume Modal (`ResumeModal.jsx`)**: In-browser PDF preview of `Dharmendra_Kumar_Resume.pdf`, 6-second ATS highlights, target engineering roles, and one-click PDF download.
- **Featured Engineering Projects (`Projects.jsx` & `ProjectModal.jsx`)**: Filterable case-study breakdown cards with verified live Vercel demos and exact GitHub repository links for:
  - **AI Form Coach** (`Sports-Hackathon`) — 60 FPS client-side MediaPipe Pose analyzer ($0 server GPU cost, 1st Place Winner)
  - **PropFlow** (`PropFlow`) — Real-time property operations SaaS with React 18, Socket.IO, Express & MongoDB Atlas
  - **Nova AI** (`Nova-AI`) — Multi-LLM autonomous agent with RAG vector search, MCP tools & Voice/Vision AI
  - **PhishGuard AI** (`phishguard-ai`) — Hybrid Random Forest + TF-IDF phishing detector trained on 700k+ threat samples
  - **Bharat Teerth** (`Bharat-Teerth`) — 3-tier heritage & pilgrimage portal with Leaflet OpenStreetMap and 23 Indian languages
  - **PDFly Pro** (`PDFly-Pro`) — Node.js/Express PDF & Tesseract OCR document processing suite
- **Verified Certifications (`CredentialsSection.jsx`)**: Lightbox certificate viewer with official downloads (IIT Roorkee TIDES, AlgoUniversity Gen-AI Camp, ECSoC 2026, NIPAM Govt. of India, E&ICT Academy IIT Kanpur).
- **Dual-Track Hiring & Contact Flow (`WhatIBuild.jsx` & `Contact.jsx`)**: Client sprint deliverables alongside a recruiter fast-track, interactive `Client / Project` vs. `Company / Job` form mode, WhatsApp instant send, and email/phone clipboard copy.

---

## Tech Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS 3, Lucide React, Canvas Confetti
- **Fonts**: Plus Jakarta Sans, Inter, Caveat, JetBrains Mono
- **Deployment**: Vercel (`vercel.json` SPA rewrites, security headers & cache control, SEO meta, `robots.txt`, `sitemap.xml`)

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs production bundle to dist/
```

---

## Project Structure

```text
Portfolio/
├── public/
│   ├── certificates/              # Verified certificate images & PDFs
│   ├── images/dharmendra_cutout.png
│   ├── Dharmendra_Kumar_Resume.pdf
│   ├── og-preview.jpg             # 1200x630 social preview card
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BentoHero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── CredentialsSection.jsx
│   │   ├── WhatIBuild.jsx
│   │   ├── Contact.jsx
│   │   ├── ResumeModal.jsx
│   │   ├── Footer.jsx
│   │   └── Icons.jsx
│   ├── data/portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vercel.json
├── tailwind.config.js
└── vite.config.js
```
