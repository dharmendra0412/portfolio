# 🚀 Dharmendra Kumar - Software Engineer & AI Developer Portfolio

An interactive, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**, crafted specifically according to Dharmendra Kumar's resume.

---

## 🌟 Highlights & Features

- **Personalized Header & Interactive Typing Hero**: Features dynamic rotating roles (*Software Engineering Aspirant*, *AI & Computer Vision Enthusiast*, *Hackathon Winner*, *Cybersecurity & Full-Stack Developer*), live terminal simulation, quick stats, and direct CTA buttons.
- **Hackathon Victory & Achievements**: Dedicated spotlight for **1st Place Winner – Uttarakhand SportsTech Hackathon 2025** and **Global Rank #818 (Top 6.3%) in HackerRank Orchestrate** with celebration confetti.
- **Interactive Projects Showcase**:
  - **AI Form Coach** (MediaPipe Pose, Real-time exercise form analysis & repetition counting)
  - **PDFly Pro** (Client-side privacy-first PDF management platform)
  - **Secure Steganography Communication System** (AES Encryption & covert image steganography)
  - **Phish Guard AI** (Machine learning threat detection for malicious URLs)
  - Interactive project detail modal with architecture highlights, tech tags, and GitHub buttons.
- **Skills Matrix**: Organized into *Programming Languages*, *AI & Computer Vision*, *Web & Backend*, *Cybersecurity*, *Tools & Workflows*, and *Core CS* with animated proficiency bars and category filters.
- **Academic Timeline**: Clean, modern timeline of B.Tech CSE at JB Institute of Technology (2024–2028) and schooling.
- **Certifications**: Verified IIT Kanpur Python for Data Science and National IP Awareness credentials.
- **Direct Contact & Resume Download**:
  - One-click copy for email (`dharmendrakumar481212@gmail.com`) and phone (`+91-9045141614`).
  - Interactive contact form with mailto integration.
  - Direct "Download Resume" buttons linked to `Dharmendra_Kumar_Resume.pdf`.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand icons
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment Ready**: Generates static bundle in `dist/` ready for Vercel, Netlify, or GitHub Pages.

---

## 💻 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The site runs locally at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
```bash
npm run build
```
Production-ready static files will be generated in `dist/`.

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── Dharmendra_Kumar_Resume.pdf  # Downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation bar & resume download CTA
│   │   ├── Hero.jsx                 # Dynamic typewriter intro & terminal card
│   │   ├── About.jsx                # Summary, engineering pillars & hobbies
│   │   ├── Skills.jsx               # Filterable skill matrix & progress bars
│   │   ├── Projects.jsx             # Featured project cards
│   │   ├── ProjectModal.jsx         # Detailed project architecture modal
│   │   ├── Achievements.jsx         # Hackathons, HackerRank rank & certifications
│   │   ├── Education.jsx            # Academic timeline
│   │   ├── Contact.jsx              # Contact form & one-click copy buttons
│   │   ├── Footer.jsx               # Social links & back-to-top button
│   │   └── Icons.jsx                # SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.js         # Single source of truth for all resume data
│   ├── App.jsx                      # App root
│   ├── index.css                    # Tailwind imports & glow utilities
│   └── main.jsx                     # Vite React entry point
├── index.html                       # HTML shell with Google Fonts & metadata
├── tailwind.config.js               # Theme configuration
├── vite.config.js                   # Vite configuration (port 3000)
└── package.json                     # Dependencies & scripts
```

---

## ✏️ Updating Your Details

All resume information (bio, skills, projects, links, contact details) is centralized in:
[`src/data/portfolioData.js`](src/data/portfolioData.js)

Whenever you build a new project or achieve a new milestone, simply edit that file and the portfolio will automatically update!

