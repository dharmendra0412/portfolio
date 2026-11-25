# Dharmendra Kumar — Portfolio (`dharmendra.cv`)

Production developer portfolio built with **React 18**, **Vite 6**, **Tailwind CSS 3**, and **Lucide Icons**, deployed on **Vercel** with custom domain **`https://dharmendra.cv`**.

Live Site: [https://dharmendra.cv](https://dharmendra.cv) | Mirror: [dharmendra-cv.vercel.app](https://dharmendra-cv.vercel.app)

---

## Key Features

- **Hero & Proof Showcase**: Custom teal/abyssal UI featuring direct tech stack pills, verified metrics (`14+` GitHub repositories, `1st` Hackathon Win, `#818` Global AI Rank), and instant navigation to projects and contact.
- **Interactive Resume Modal (`ResumeModal.jsx`)**: In-browser PDF preview of `Dharmendra_Kumar_Resume.pdf`, 6-second ATS highlights, target engineering roles, and one-click PDF download.
- **Featured Live Projects (`Projects.jsx` & `ProjectModal.jsx`)**: Filterable case-study breakdown cards linked directly to live Vercel deployments:
  - **AI Form Coach** — 60 FPS client-side MediaPipe Pose analyzer ($0 server GPU cost, 1st Place Winner)
  - **PropFlow** — Real-time property operations SaaS with React 18, Socket.IO, Express & MongoDB Atlas
  - **PhishGuard AI** — Hybrid Random Forest + TF-IDF fraud & phishing detector trained on 700k+ threat samples
  - **Mission Control: Spaceflight Sim** — Interactive 3D WebGL Earth & Spacecraft CAD systems simulator with WebSockets
  - **Bharat Teerth** — 3-tier heritage & pilgrimage portal with Leaflet OpenStreetMap and 23 Indian languages
  - **AG Traders** — Commercial fixture catalog storefront built with Next.js & Tailwind CSS
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
