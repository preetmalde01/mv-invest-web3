import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-8 border-b border-black/10 dark:border-white/10">
        <svg className="h-6 w-auto text-current" viewBox="0 0 180 32" fill="none">
          <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2.2" fill="none"/>
          <circle cx="12" cy="16" r="4.5" fill="currentColor"/>
          <text x="32" y="22" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="700" letterSpacing="1.5" fill="currentColor">MV INVEST</text>
        </svg>
        <div className="font-mono text-xs text-studio-muted">
          A Malde Ventures Entity &bull; Dedicated to Fiduciary Independence
        </div>
      </div>

      <div className="py-6 text-[11px] text-studio-muted leading-relaxed border-b border-black/10 dark:border-white/10">
        <strong>Regulatory Disclosure:</strong> MV Invest is a SEBI Registered Investment Advisor (Registration No. INAXXXXXXXXX). Investment in securities market are subject to market risks. Read all related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. We operate strictly as a fee-only advisor and do not receive commissions from asset management companies, alternative investment funds, or brokers.
      </div>

      <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-studio-muted">
        <div>&copy; 2026 MV Invest. All rights reserved. Headquartered in Mumbai, India.</div>
        <a href="#mandate" className="text-current no-underline hover:underline">Conflict-Free Fiduciary Charter</a>
      </div>
    </footer>
  );
}
