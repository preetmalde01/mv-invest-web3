import React from 'react';

export default function Mandate() {
  return (
    <section id="mandate" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        01 / MANDATE
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-16 items-baseline">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight">
          THE DEDICATED IN-HOUSE INVESTMENT DESK FOR YOUR FAMILY
        </h2>
        <p className="text-studio-secondary text-base leading-relaxed">
          Traditional wealth management in India is broken by structural conflicts. Large private banks and brokers operate as distribution arms for financial product manufacturers. We serve as your unconflicted Personal CIO — sitting exclusively on your side of the table.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr] gap-8">
        {/* Distributor Model */}
        <div className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-[11px] font-bold text-studio-muted tracking-wider uppercase block mb-4">
              TRADITIONAL WEALTH DISTRIBUTOR
            </span>
            <h3 className="font-heading text-2xl font-extrabold uppercase mb-4">
              DISTRIBUTOR MODEL
            </h3>
            <p className="text-sm text-studio-secondary leading-relaxed mb-6">
              Compensated via recurring trail commissions embedded directly into high-fee regular products.
            </p>
            <ul className="space-y-3.5 text-sm text-studio-muted list-none p-0">
              <li>&times; 1.0% to 1.5% hidden annual commission drag</li>
              <li>&times; Incentivized to churn portfolios for transaction fees</li>
              <li>&times; Product recommendation dictated by manufacturer kickbacks</li>
              <li>&times; Zero fiduciary accountability to family balance sheet</li>
            </ul>
          </div>
          <div className="font-mono text-xs text-studio-muted uppercase pt-6">
            Outcome: Substantial wealth leakage over time
          </div>
        </div>

        {/* Personal CIO Desk */}
        <div className="bg-studio-invert text-studio-surface border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
          <div>
            <span className="font-mono text-[11px] font-bold text-[#F36F43] tracking-wider uppercase block mb-4">
              MV INVEST FIDUCIARY DESK
            </span>
            <h3 className="font-heading text-2xl font-extrabold uppercase mb-4 text-studio-bg">
              YOUR PERSONAL CIO
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Acting as your independent chief investment strategist. Fully transparent, flat fee-only advisory mandate.
            </p>
            <ul className="space-y-3.5 text-sm list-none p-0 text-studio-bg">
              <li><strong className="text-[#34d399]">✓ 0.0% Commissions</strong> &bull; Zero distributor kickbacks</li>
              <li><strong className="text-[#34d399]">✓ 100% Direct Plans</strong> across MFs, PMS &amp; AIFs</li>
              <li><strong className="text-[#34d399]">✓ Custom asset allocation</strong> &amp; tax harvesting</li>
              <li><strong className="text-[#34d399]">✓ SEBI Regulated</strong> Fiduciary standard of care</li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="#contact"
              className="w-full inline-block text-center py-4 rounded-full bg-[#F36F43] text-black font-bold uppercase tracking-wider text-xs no-underline hover:opacity-90 transition-opacity"
            >
              Request Balance Sheet Review &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
