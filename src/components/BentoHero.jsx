import React from 'react';
import {
  Mail,
  GraduationCap,
  Layers,
  Code2,
  Trophy,
  Award,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import {
  PythonLogo,
  ReactLogo,
  FastApiLogo,
  MediaPipeLogo,
  GithubSolid
} from './Icons';

export default function BentoHero() {
  const techPills = [
    { name: 'Python', Icon: PythonLogo, iconClass: 'w-5 h-5 shrink-0' },
    { name: 'React', Icon: ReactLogo, iconClass: 'w-5 h-5 shrink-0' },
    { name: 'FastAPI', Icon: FastApiLogo, iconClass: 'w-[18px] h-[18px] shrink-0' },
    { name: 'MediaPipe', Icon: MediaPipeLogo, iconClass: 'w-6 h-5 shrink-0' },
    { name: 'GitHub', Icon: GithubSolid, iconClass: 'w-[18px] h-[18px] text-white shrink-0' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen lg:min-h-[680px] lg:max-h-[960px] w-full flex flex-col justify-between overflow-hidden pt-14 sm:pt-[58px] pb-3.5 bg-[#040e16]"
    >
      {/* Subtle Ambient Corner Glows (matching exact abyssal dark + teal shadows) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 8% 22%, rgba(0, 74, 84, 0.44) 0%, transparent 48%), radial-gradient(circle at 82% 44%, rgba(12, 128, 114, 0.25) 0%, transparent 50%), radial-gradient(circle at 50% 96%, rgba(5, 66, 68, 0.38) 0%, transparent 55%)',
        }}
      />

      {/* Top-left subtle dot cluster */}
      <div
        className="absolute top-12 left-0 w-36 h-60 bg-corner-dots opacity-45 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at top left, black 20%, transparent 72%)',
          maskImage: 'radial-gradient(ellipse at top left, black 20%, transparent 72%)',
        }}
      />

      {/* Bottom-right subtle dot cluster */}
      <div
        className="absolute bottom-6 right-0 w-44 h-44 bg-corner-dots opacity-45 pointer-events-none"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at bottom right, black 20%, transparent 72%)',
          maskImage: 'radial-gradient(ellipse at bottom right, black 20%, transparent 72%)',
        }}
      />

      {/* Top-right sweeping dark-teal contour wave behind hero */}
      <svg
        className="absolute top-[10%] right-0 w-[60%] h-[68%] pointer-events-none opacity-80"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M280 185 C425 225, 620 140, 800 30 L800 500 L180 500 Z"
          fill="url(#topRightWave)"
        />
        <defs>
          <radialGradient id="topRightWave" cx="82%" cy="28%" r="68%">
            <stop offset="0%" stopColor="#126863" stopOpacity="0.46" />
            <stop offset="55%" stopColor="#0a4042" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#040e16" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Bottom full-width flowing teal mesh waves */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-24 sm:h-32 pointer-events-none z-10"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 15 C200 105, 450 130, 720 116 C1010 100, 1260 120, 1440 25 L1440 140 L0 140 Z"
          fill="url(#bottomWave1)"
        />
        <path
          d="M0 60 C310 128, 620 98, 920 120 C1180 134, 1340 100, 1440 65 L1440 140 L0 140 Z"
          fill="url(#bottomWave2)"
        />
        <path
          d="M0 17 C200 107, 450 132, 720 118 C1010 102, 1260 122, 1440 27"
          stroke="rgba(61, 239, 199, 0.2)"
          strokeWidth="1.2"
        />
        <defs>
          <linearGradient id="bottomWave1" x1="0" y1="15" x2="1440" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#054144" stopOpacity="0.52" />
            <stop offset="50%" stopColor="#041920" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#064a48" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="bottomWave2" x1="0" y1="60" x2="1440" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#064c4d" stopOpacity="0.48" />
            <stop offset="100%" stopColor="#04242a" stopOpacity="0.65" />
          </linearGradient>
        </defs>
      </svg>

      {/* MAIN HERO SPLIT AREA */}
      <div className="max-w-[1260px] w-full mx-auto px-5 sm:px-8 lg:px-10 flex-grow flex items-center relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">

          {/* LEFT COLUMN (Typography & CTA) */}
          <div className="lg:col-span-6 min-w-0 space-y-3 sm:space-y-3.5">
            {/* Role Status Pill */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#07181c]/90 border border-[#1a3e42] text-[10.5px] sm:text-xs font-medium text-slate-200 shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3defc7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#26eac1] shadow-[0_0_8px_#26eac1]"></span>
              </span>
              <span className="tracking-wide truncate">
                Software Developer <span className="text-slate-500 mx-1 sm:mx-1.5">|</span> Computer Vision Engineer
              </span>
            </div>

            {/* Greeting & Giant Name */}
            <div className="space-y-0.5 pt-0.5">
              <div className="text-2xl sm:text-[32px] font-bold text-white tracking-tight leading-tight flex items-center gap-2">
                <span>Hi, I’m</span>
                <span className="inline-block origin-[70%_70%] hover:rotate-12 transition-transform" role="img" aria-label="wave">
                  👋
                </span>
              </div>

              <h1 className="font-extrabold tracking-[-0.03em] leading-[0.95]">
                <span className="block text-[38px] sm:text-[58px] xl:text-[68px] text-white">
                  Dharmendra
                </span>
                <span className="relative inline-block text-[38px] sm:text-[58px] xl:text-[68px] bg-gradient-to-r from-[#57f7d4] via-[#2fe7c0] to-[#1dd0ab] bg-clip-text text-transparent pb-2">
                  Kumar
                  {/* Exact Two-Stroke Hand-Drawn Mint Brush Underline */}
                  <svg
                    className="absolute -bottom-0.5 left-0 w-[104%] h-3.5 pointer-events-none"
                    viewBox="0 0 240 16"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10.5C68 5.2 158 3.2 235 6.8"
                      stroke="#34e8be"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 14C82 10.5 168 8.8 226 11.2"
                      stroke="#22d6b0"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Sub-Headline Value Prop */}
            <p className="text-[17px] sm:text-[20px] font-medium text-[#edf5f4] leading-[1.34] max-w-[540px] pt-0.5">
              Building intelligent solutions with code,
              <br className="hidden sm:inline" /> from computer vision to{' '}
              <span className="text-[#2fe6be] font-semibold">real-world impact.</span>
            </p>

            {/* Bio Summary */}
            <p className="text-[13px] sm:text-[14px] text-[#95aab0] leading-[1.55] max-w-[490px]">
              I’m a Computer Science student from JBIT (2024–28), passionate about developing scalable web applications, computer vision systems, and high-performance backends.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#3ef2cb] to-[#1fd9b3] hover:brightness-105 text-[#031919] font-bold text-[13px] sm:text-[13.5px] shadow-[0_6px_26px_rgba(38,234,193,0.34)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Solid crisp rocket matching exact button graphic */}
                <svg className="w-4 h-4 text-[#042322]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z" />
                </svg>
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 text-[#031919]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#061419]/85 hover:bg-[#0a2126] border border-white/20 hover:border-[#2ef2c8]/55 text-white font-semibold text-[13px] sm:text-[13.5px] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>Let’s Talk</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Precision 318:275 Stage matching reference artwork pixel-for-pixel */}
          <div className="lg:col-span-6 min-w-0 w-full relative flex items-end justify-center lg:justify-end">
            <div className="relative w-full lg:w-[109%] max-w-[630px] aspect-[318/275] flex items-end justify-center overflow-hidden sm:overflow-visible">

              {/* Layered Outer Glass & Inner Solid Mint Blobs (Exact 318x275 coordinate space, seamless background integration) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                viewBox="0 0 318 275"
                fill="none"
              >
                <defs>
                  <linearGradient id="outerGlassBlob" x1="39" y1="175" x2="255" y2="75" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#146c64" stopOpacity="0.32" />
                    <stop offset="55%" stopColor="#115953" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#1ca892" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="outerGlassStroke" x1="38" y1="175" x2="235" y2="115" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#72f8dc" stopOpacity="0.28" />
                    <stop offset="55%" stopColor="#3defc7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#3defc7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="innerMintBlob" x1="205" y1="150" x2="275" y2="95" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#58fad5" />
                    <stop offset="52%" stopColor="#26e9bf" />
                    <stop offset="100%" stopColor="#0eb694" />
                  </linearGradient>
                </defs>

                {/* Outer Translucent Glass Rounded-Triangle Blob (smooth continuous diagonal rim without waist pinch) */}
                <path
                  d="M39 175 C36 153, 50 139, 88 131 C138 120, 186 98, 224 78 C246 67, 258 83, 258 115 C258 152, 245 190, 218 214 C180 238, 98 232, 62 208 C48 198, 41 187, 39 175 Z"
                  fill="url(#outerGlassBlob)"
                  stroke="url(#outerGlassStroke)"
                  strokeWidth="0.9"
                />

                {/* Soft Mint Halo Glow behind bright blob */}
                <ellipse cx="235" cy="128" rx="66" ry="60" fill="#21e0b6" opacity="0.22" filter="blur(24px)" />

                {/* Inner Solid Vibrant Mint Rounded-Triangle Pebble (peaking behind ear at 76%,25.5%, tucks smoothly behind right shoulder) */}
                <path
                  d="M198 94 C216 70, 244 67, 260 79 C274 90, 275 118, 267 148 C262 167, 254 184, 234 198 C212 212, 188 192, 188 160 C188 132, 192 106, 198 94 Z"
                  fill="url(#innerMintBlob)"
                />
              </svg>

              {/* Top-Left Handwritten Note ("Let's build something amazing together!") + Curved Arrow */}
              <div className="absolute top-[8.5%] left-[1.5%] z-20 -rotate-[14deg] pointer-events-none select-none text-center">
                <p className="font-hand text-[19px] sm:text-[22px] xl:text-[23.5px] leading-[0.88] text-white/95 font-normal tracking-wide drop-shadow">
                  Let’s build
                  <br />
                  something amazing
                  <br />
                  together!
                </p>
                <svg className="w-28 sm:w-32 h-14 mx-auto -mt-1 overflow-visible" viewBox="0 0 120 60" fill="none">
                  {/* Double hand-drawn mint underline flush under "together!" */}
                  <path d="M14 4 C40 2, 74 1.5, 98 3" stroke="#34e8be" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M22 7 C46 5, 72 4.5, 90 5.5" stroke="#26eac1" strokeWidth="0.95" strokeLinecap="round" opacity="0.72" />
                  {/* Clean curved J-hook arrow sweeping down then right toward cheek */}
                  <path
                    d="M72 14 C68 33, 81 44, 112 39"
                    stroke="#34e8be"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                  <path
                    d="M105 34 L113 39 L106 44.5"
                    stroke="#34e8be"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Top-Right 3 Mint Spark Strokes Radiating Outward from Hairline */}
              <svg
                className="absolute top-[10%] left-[67.5%] w-[9.5%] h-[9.5%] z-20 pointer-events-none"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path d="M5 17 L6.5 3" stroke="#3defc7" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M12 20.5 L23 7.5" stroke="#3defc7" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M16.5 27.5 L31.5 21" stroke="#3defc7" strokeWidth="2.4" strokeLinecap="round" />
              </svg>

              {/* Cutout Portrait Image (face center x=54.5%, hair top y=7.5%, chin y=51.5%, wide shoulders blending cleanly) */}
              <picture className="contents">
                <source
                  srcSet="/images/dharmendra_cutout-sm.webp 540w, /images/dharmendra_cutout.webp 896w"
                  sizes="(max-width: 640px) 75vw, 460px"
                  type="image/webp"
                />
                <img
                  src="/images/dharmendra_cutout.png"
                  alt="Dharmendra Kumar"
                  width="896"
                  height="1118"
                  fetchpriority="high"
                  decoding="async"
                  className="absolute -bottom-[5%] left-[18%] w-[73%] h-[99%] object-contain object-bottom z-10 portrait-melt-mask select-none pointer-events-none drop-shadow-[0_14px_30px_rgba(0,0,0,0.6)]"
                />
              </picture>

              {/* Floating Tilted Info Pill (fits cleanly inside mobile viewport while matching exact grid x=38.5%..95.5% on sm+) */}
              <div className="absolute bottom-[7.5%] left-[12%] sm:left-[38.5%] right-[4%] sm:right-[4.5%] z-20 animate-float-subtle">
                <div className="rounded-2xl bg-[#071519]/88 backdrop-blur-xl border border-white/[0.13] shadow-[0_14px_36px_rgba(0,0,0,0.75)] px-3 sm:px-4 xl:px-5 py-2 flex items-center justify-between gap-2 sm:gap-3.5">
                  <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                    {/* Solid-filled Mint Map Pin matching reference */}
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2ee8c0] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                    </svg>
                    <span className="text-[10.5px] sm:text-[12.5px] xl:text-[13px] font-medium text-white">
                      Dehradun, India
                    </span>
                  </div>
                  <div className="w-px h-6 sm:h-7 bg-white/15 shrink-0" />
                  <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2ee8c0] shrink-0" />
                    <div className="text-[10px] sm:text-[11.5px] xl:text-[12px] leading-[1.2] font-medium text-white">
                      <div>B.Tech CSE</div>
                      <div className="text-slate-300">(2024–28)</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* HERO BOTTOM BAR: TECH STACK + STATS + SCROLL INDICATOR */}
      <div className="max-w-[1260px] w-full mx-auto px-5 sm:px-8 lg:px-10 relative z-20 pb-1.5">
        {/* Hairline Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-2" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5">
          {/* Bottom Left: Tech Stack I Work With */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white/95 mb-2">
              <Layers className="w-4 h-4 text-[#2ee8c0]" />
              <span>Tech Stack I Work With</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {techPills.map(({ name, Icon, iconClass }) => (
                <div
                  key={name}
                  className="inline-flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full bg-[#09181c]/90 border border-white/[0.1] hover:border-[#2ee8c0]/40 text-xs sm:text-[13px] font-medium text-slate-100 shadow-sm transition-colors"
                >
                  <Icon className={iconClass} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Hairline Separator */}
          <div className="hidden lg:block w-px h-11 bg-white/15 shrink-0 mx-2" />

          {/* Bottom Right: 3 Verified Proof Metrics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 lg:gap-12 text-center shrink-0">
            <a href="#projects" className="group">
              <Code2 className="w-4 h-4 text-[#2ee8c0] mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
              <div className="text-base sm:text-lg font-extrabold text-white leading-tight">14+</div>
              <div className="text-[11px] text-[#95aab0]">GitHub Repos</div>
            </a>

            <a href="#experience" className="group">
              <Trophy className="w-4 h-4 text-[#2ee8c0] mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
              <div className="text-base sm:text-lg font-extrabold text-white leading-tight">1st</div>
              <div className="text-[11px] text-[#95aab0]">Hackathon Win</div>
            </a>

            <a href="#about" className="group">
              <Award className="w-4 h-4 text-[#2ee8c0] mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
              <div className="text-base sm:text-lg font-extrabold text-white leading-tight">#818</div>
              <div className="text-[11px] text-[#95aab0]">Global AI Rank</div>
            </a>
          </div>
        </div>

        {/* Bottom Center: Scroll Indicator */}
        <a
          href="#about"
          className="mt-1 flex flex-col items-center justify-center gap-0.5 group w-fit mx-auto"
        >
          <div className="w-3.5 h-5 rounded-full border border-white/55 group-hover:border-[#3defc7] flex justify-center pt-1 transition-colors">
            <span className="w-[2px] h-1.5 bg-[#3defc7] rounded-full animate-scroll-dot" />
          </div>
          <span className="text-[10.5px] text-[#95aab0] group-hover:text-white transition-colors flex items-center gap-1">
            <span>Scroll to explore</span>
            <ChevronDown className="w-3 h-3" />
          </span>
        </a>
      </div>
    </section>
  );
}
