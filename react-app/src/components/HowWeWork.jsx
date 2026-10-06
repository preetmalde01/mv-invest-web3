import React from 'react';

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "PORTFOLIO HEALTH CHECK",
      text: "We audit your existing holdings to identify hidden distributor trails, unnecessary portfolio overlap, and underperforming legacy assets."
    },
    {
      num: "02",
      title: "CUSTOM ASSET ALLOCATION",
      text: "We design a clear investment roadmap tailored to your risk tolerance, cash flow requirements, liquidity needs, and time horizon."
    },
    {
      num: "03",
      title: "CONFLICT-FREE EXECUTION",
      text: "Every asset in your portfolio is selected solely on merit and executed through direct, unbundled avenues with zero commission bias."
    },
    {
      num: "04",
      title: "ACTIVE OVERSIGHT",
      text: "We continuously monitor your portfolio, rebalancing prudently as market valuations shift and family life milestones evolve."
    }
  ];

  return (
    <section id="how-we-work" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        05 / PROCESS
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-16 items-baseline">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight">
          DISCIPLINED 4-STEP ADVISORY PROCESS
        </h2>
        <p className="text-studio-secondary text-base leading-relaxed">
          A structured, repeatable protocol designed to clean up portfolio redundancies, eliminate commission leakage, and protect capital across market cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((st, i) => (
          <div key={i} className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8">
            <div className="font-mono text-2xl font-bold text-[#F36F43] mb-4">{st.num}</div>
            <h4 className="font-heading text-lg font-extrabold uppercase mb-2">{st.title}</h4>
            <p className="text-xs text-studio-secondary leading-relaxed m-0">{st.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
