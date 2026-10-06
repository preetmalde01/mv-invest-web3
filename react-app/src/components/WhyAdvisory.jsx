import React from 'react';

export default function WhyAdvisory() {
  const conflicts = [
    {
      num: "01",
      title: "THE DISTRIBUTOR CONFLICT",
      tag: "PAID BY FUND HOUSES • NOT BY YOU",
      text: "When wealth managers earn ongoing trail commissions from fund houses, they are financially incentivized to recommend products that pay them the most—not those that perform best for you."
    },
    {
      num: "02",
      title: "THE BROKER CONFLICT",
      tag: "REWARDED FOR CHURN • NOT COMPOUNDING",
      text: "When brokers earn on trading volume, their incentive is frequent churn rather than patient compounding. Activity enriches the intermediary; stillness enriches you."
    },
    {
      num: "03",
      title: "BEYOND IDLE CAPITAL",
      tag: "CAPITAL PARKED • POTENTIAL LOCKED",
      text: "Significant family capital remains parked in illiquid physical assets or low-yielding cash simply because navigating modern financial instruments has lacked a trustworthy, conflict-free guide."
    }
  ];

  return (
    <section id="why-advisory" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        02 / TRANSPARENCY
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-16 items-baseline">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight">
          WHOSE INTERESTS DOES YOUR WEALTH MANAGER ACTUALLY SERVE?
        </h2>
        <p className="text-studio-secondary text-base leading-relaxed">
          When advice is free, you are not the client; you are the product. Understanding the inherent conflicts of traditional intermediaries is the first step toward safeguarding generational wealth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {conflicts.map((c, i) => (
          <div key={i} className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8 flex flex-col">
            <div className="font-mono text-xl font-bold text-[#F36F43] mb-4">{c.num}</div>
            <h3 className="font-heading text-xl font-extrabold uppercase mb-2">{c.title}</h3>
            <div className="font-mono text-[11px] font-bold text-[#EA580C] uppercase mb-4">{c.tag}</div>
            <p className="text-sm text-studio-secondary leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      {/* Covenant Banner */}
      <div className="bg-studio-surface border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold uppercase mb-2">
            AT MV INVEST, WE SIT ON YOUR SIDE OF THE TABLE
          </h3>
          <p className="text-sm text-studio-secondary m-0">
            We do not accept commissions, referral fees, distribution trails, or broker kickbacks. Our sole revenue comes from transparent client advisory fees.
          </p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 py-3.5 px-8 rounded-full bg-current text-studio-bg font-bold uppercase tracking-wider text-xs no-underline hover:opacity-90"
        >
          Schedule Fiduciary Audit &rarr;
        </a>
      </div>
    </section>
  );
}
