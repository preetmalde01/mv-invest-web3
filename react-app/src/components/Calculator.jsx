import React, { useState, useMemo } from 'react';

export default function Calculator() {
  const [portfolioValue, setPortfolioValue] = useState(10000000); // 1 Cr default
  const [horizonYears, setHorizonYears] = useState(20);

  function formatIndianCurrency(amount) {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + ' Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(1) + ' Lakh';
    }
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  const { fvRegular, fvDirect, preserved } = useMemo(() => {
    const rateRegular = 0.11; // 12% - 1%
    const rateDirect = 0.1175; // 12% - 0.25%
    const reg = portfolioValue * Math.pow(1 + rateRegular, horizonYears);
    const dir = portfolioValue * Math.pow(1 + rateDirect, horizonYears);
    return {
      fvRegular: reg,
      fvDirect: dir,
      preserved: dir - reg
    };
  }, [portfolioValue, horizonYears]);

  const regularPercentage = (fvRegular / fvDirect) * 100;

  return (
    <section id="calculator" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        03 / MATHEMATICAL REALITY
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mb-16 items-baseline">
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight">
          A 1% COMMISSION TRAIL IS NOT A FEE. IT'S A LEAK.
        </h2>
        <p className="text-studio-secondary text-base leading-relaxed">
          Regular plans embed a recurring distributor commission inside the fund’s expense ratio — quietly compounding against you every year. Our flat, fee-only model with direct plans keeps that capital compounding for you instead. Drag the slider. Watch the leak.
        </p>
      </div>

      <div className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <div>
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <span className="font-mono text-xs font-bold tracking-wider text-studio-muted uppercase">PORTFOLIO VALUE</span>
                <span className="font-heading text-3xl font-extrabold">{formatIndianCurrency(portfolioValue)}</span>
              </div>
              <input
                type="range"
                className="range-input"
                min="2500000"
                max="250000000"
                step="2500000"
                value={portfolioValue}
                onChange={(e) => setPortfolioValue(parseFloat(e.target.value))}
              />
              <div className="flex justify-between font-mono text-xs text-studio-muted mt-2">
                <span>₹25 L</span>
                <span>₹10 Cr</span>
                <span>₹25 Cr</span>
              </div>
            </div>

            <div className="mb-8">
              <span className="font-mono text-xs font-bold tracking-wider text-studio-muted uppercase block mb-3">
                TIME HORIZON
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[5, 10, 20].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setHorizonYears(yr)}
                    className={`py-3.5 rounded-xl font-bold text-sm transition-all border cursor-pointer ${
                      horizonYears === yr
                        ? 'bg-current text-studio-bg border-current'
                        : 'bg-studio-bg text-current border-black/10 dark:border-white/10 hover:border-current'
                    }`}
                  >
                    {yr} Years
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-studio-muted leading-relaxed m-0">
              Illustration assumes 12% gross annual returns, a 1.0% p.a. embedded distributor commission in regular plans, and a 0.25% p.a. equivalent fee-only advisory cost on direct plans. For education, not a return promise.
            </p>
          </div>

          {/* Outputs */}
          <div className="space-y-4">
            <div className="bg-studio-invert text-studio-surface rounded-2xl p-8">
              <span className="font-mono text-[11px] font-bold text-[#F36F43] tracking-widest uppercase block mb-2">
                ESTIMATED WEALTH PRESERVED
              </span>
              <div className="font-heading text-5xl sm:text-6xl font-extrabold text-studio-bg mb-2">
                {formatIndianCurrency(preserved)}
              </div>
              <p className="text-sm opacity-80 m-0">
                stays in your portfolio over {horizonYears} years — instead of leaking to intermediaries.
              </p>
            </div>

            <div className="bg-studio-surface border border-black/10 dark:border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-xs font-bold text-red-500 tracking-wider uppercase">
                  &searr; COMMISSION MODEL
                </span>
                <strong className="font-heading text-xl">{formatIndianCurrency(fvRegular)}</strong>
              </div>
              <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-red-500 rounded-full" style={{ width: `${regularPercentage}%` }} />
              </div>
            </div>

            <div className="bg-studio-surface border border-black/10 dark:border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-baseline">
                <span className="font-mono text-xs font-bold text-[#F36F43] tracking-wider uppercase">
                  &nearr; MV INVEST FEE-ONLY
                </span>
                <strong className="font-heading text-xl text-[#F36F43]">{formatIndianCurrency(fvDirect)}</strong>
              </div>
              <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-[#F36F43] rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
