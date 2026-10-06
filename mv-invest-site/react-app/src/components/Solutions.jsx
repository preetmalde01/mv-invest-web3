import React from 'react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        04 / ARCHITECTURE
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-16 items-baseline">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight">
          TAILORED SOLUTIONS ACROSS EVERY TIER OF WEALTH
        </h2>
        <p className="text-studio-secondary text-base leading-relaxed">
          Whether you are building disciplined compounding as an individual investor or governing intergenerational family capital as an Ultra-HNI, our advice is structured, transparent, and objective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tier 1 */}
        <div className="bg-studio-card border border-[#F36F43] rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] font-bold text-[#F36F43] tracking-wider uppercase block mb-3">
              PRIVATE WEALTH ARCHITECTURE
            </span>
            <h3 className="font-heading text-2xl font-extrabold uppercase mb-4">
              FOR HNIS &amp; UHNIS
            </h3>
            <p className="text-sm text-studio-secondary leading-relaxed mb-6">
              Institutional-grade access, personally governed. Bespoke balance sheet allocation across unlisted markets, structured yield, and specialized strategies.
            </p>
            <ul className="space-y-3 text-sm list-none p-0 mb-8">
              <li>&bull; <strong>Alternative Investment Funds (AIFs)</strong> — PE, Credit &amp; VC</li>
              <li>&bull; <strong>Portfolio Management Services (PMS)</strong> — Fiduciary diligence</li>
              <li>&bull; <strong>Specialized Investment Funds (SIFs)</strong> &amp; Estate structuring</li>
              <li>&bull; <strong>Direct Mutual Funds</strong> with 100% zero-commission execution</li>
            </ul>
          </div>
          <a href="#contact" className="w-full text-center py-4 rounded-full bg-current text-studio-bg font-bold uppercase tracking-wider text-xs no-underline hover:opacity-90">
            Consult Senior Advisory Desk &rarr;
          </a>
        </div>

        {/* Tier 2 */}
        <div className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] font-bold text-studio-muted tracking-wider uppercase block mb-3">
              DISCIPLINED COMPOUNDING
            </span>
            <h3 className="font-heading text-2xl font-extrabold uppercase mb-4">
              FOR EMERGING WEALTH
            </h3>
            <p className="text-sm text-studio-secondary leading-relaxed mb-6">
              Disciplined, cost-effective asset allocation across equity and fixed income, engineered to compound steadily without hidden distributor friction.
            </p>
            <ul className="space-y-3 text-sm list-none p-0 mb-8 text-studio-secondary">
              <li>&bull; 100% Direct Plan Mutual Fund execution (Zero trails)</li>
              <li>&bull; Goal-aligned personalized risk profiling &amp; glidepaths</li>
              <li>&bull; Periodic algorithmic and fiduciary rebalancing</li>
              <li>&bull; Automated tax-loss harvesting guidance</li>
            </ul>
          </div>
          <a href="#contact" className="w-full text-center py-4 rounded-full bg-studio-surface border border-black/10 dark:border-white/10 text-current font-bold uppercase tracking-wider text-xs no-underline hover:border-current">
            Explore Goal Portfolios &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
