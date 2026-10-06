import React, { useState } from 'react';

export default function Hero({ theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="min-h-screen flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden z-10">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center w-full z-20">
        <a href="#" className="flex items-center gap-2 text-current no-underline" aria-label="MV Invest">
          <svg className="h-7 w-auto text-current" viewBox="0 0 180 32" fill="none">
            <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2.2" fill="none"/>
            <circle cx="12" cy="16" r="4.5" fill="currentColor"/>
            <text x="32" y="22" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="1.5" fill="currentColor">MV INVEST</text>
          </svg>
        </a>

        <div className="flex items-center gap-6 sm:gap-8">
          {/* Proper Button for Get in touch */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-current text-studio-bg px-5 sm:px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all no-underline whitespace-nowrap"
          >
            <span>Get in touch</span>
            <span className="text-sm leading-none">&nearr;</span>
          </a>

          {/* Minimalist 2-line Hamburger */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="flex flex-col justify-center gap-1.5 w-8 p-1 text-current bg-transparent border-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-[2px] bg-current block" />
            <span className="w-6 h-[2px] bg-current block" />
          </button>
        </div>
      </nav>

      {/* Center Highlighted Title: Syne Bold (Exact Design) */}
      <div className="flex-grow flex items-center justify-center text-center py-8 z-10">
        <h1 
          className="font-extrabold uppercase tracking-tight text-current leading-[0.96] select-none m-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.035em'
          }}
        >
          <span className="block">YOUR PERSONAL</span>
          <span className="block">CIO</span>
        </h1>
      </div>

      {/* Bottom Controls Row */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-end gap-6 w-full z-20 text-center md:text-left">
        {/* Bottom Left: Scroll Down Indicator */}
        <div className="hidden md:block">
          <a
            href="#mandate"
            className="font-mono text-2xl font-semibold text-current tracking-widest hover:translate-y-1 inline-block transition-transform no-underline"
            title="Scroll Down"
          >
            &darr;&darr;&darr;
          </a>
        </div>

        {/* Bottom Center: Mission Statement */}
        <div className="font-sans text-[11px] sm:text-xs font-semibold tracking-wider leading-relaxed uppercase text-studio-secondary max-w-xl mx-auto">
          WE GUIDE DISCERNING FAMILIES &amp; ENTREPRENEURS ACROSS INDIA<br />
          INDEPENDENT MULTI-ASSET WEALTH ARCHITECTURE SOLELY ON MERIT<br />
          SEBI REGISTERED INVESTMENT ADVISOR &middot; 100% FEE-ONLY
        </div>

        {/* Bottom Right: Theme Switcher */}
        <div className="flex items-center justify-center md:justify-end gap-3 font-sans text-xs font-bold tracking-wider uppercase text-current">
          <span>{theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE'}</span>
          <button
            onClick={toggleTheme}
            className="w-11 h-6 rounded-full bg-current p-1 border-0 cursor-pointer relative"
            aria-label="Toggle Theme"
          >
            <span
              className={`w-4 h-4 rounded-full bg-studio-bg block transition-transform duration-300 ${
                theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-studio-bg z-50 flex flex-col justify-between p-8">
          <div className="flex justify-between items-center">
            <svg className="h-7 w-auto text-current" viewBox="0 0 180 32" fill="none">
              <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2.2" fill="none"/>
              <circle cx="12" cy="16" r="4.5" fill="currentColor"/>
              <text x="32" y="22" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="1.5" fill="currentColor">MV INVEST</text>
            </svg>
            <button
              onClick={() => setDrawerOpen(false)}
              className="text-2xl font-bold p-2 bg-transparent border-0 text-current cursor-pointer"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-6 list-none p-0 font-heading text-3xl font-bold uppercase">
            <li><a href="#mandate" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">01 / Mandate</a></li>
            <li><a href="#why-advisory" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">02 / Conflicts</a></li>
            <li><a href="#calculator" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">03 / Fee Leak</a></li>
            <li><a href="#solutions" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">04 / Solutions</a></li>
            <li><a href="#how-we-work" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">05 / Process</a></li>
            <li><a href="#contact" onClick={() => setDrawerOpen(false)} className="text-current no-underline hover:text-[#F36F43]">06 / Contact</a></li>
          </ul>

          <a
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="w-full text-center py-4 rounded-full bg-current text-studio-bg font-bold uppercase tracking-wider text-sm no-underline"
          >
            Get in touch &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
