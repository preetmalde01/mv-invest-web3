import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      wealthTier: formData.get('wealthTier'),
      serviceInterest: formData.get('serviceInterest'),
      notes: formData.get('notes'),
      _subject: 'New Personal CIO Consultation Request - MV Invest',
      _captcha: 'false',
      _template: 'table'
    };

    try {
      await fetch('https://formsubmit.co/ajax/preet@maldeventures.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Dispatch logged:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto border-t border-black/10 dark:border-white/10 relative z-10">
      <span className="font-mono text-xs font-bold tracking-widest text-[#F36F43] uppercase block mb-6">
        06 / ENGAGE
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12">
        <div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-current uppercase leading-tight tracking-tight mb-6">
            BEGIN THE DIALOGUE
          </h2>
          <p className="text-studio-secondary text-base leading-relaxed mb-10">
            Let’s review your existing portfolio and explore what dedicated, unconflicted Personal CIO stewardship looks like for your capital.
          </p>

          <div className="space-y-6">
            <div>
              <strong className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1">DIRECT ADVISORY EMAIL</strong>
              <a href="mailto:advisory@mvinvest.in" className="text-lg font-bold text-current no-underline hover:underline">
                advisory@mvinvest.in
              </a>
            </div>

            <div>
              <strong className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1">PHONE / WHATSAPP</strong>
              <a href="tel:+918655448422" className="text-lg font-bold text-current no-underline hover:underline">
                +91 8655448422
              </a>
            </div>

            <div>
              <strong className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1">HEADQUARTERS</strong>
              <span className="text-base text-studio-secondary">Mumbai, Maharashtra, India</span>
            </div>

            <div>
              <strong className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1">REGULATORY MANDATE</strong>
              <span className="text-sm font-bold text-[#F36F43]">SEBI Registered Investment Advisor (INAXXXXXXXXX)</span>
            </div>
          </div>
        </div>

        <div className="bg-studio-card border border-black/10 dark:border-white/10 rounded-3xl p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 bg-studio-invert text-studio-bg rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-heading text-2xl font-extrabold uppercase mb-2">MANDATE INITIATION REGISTERED</h3>
              <p className="text-sm text-studio-secondary max-w-sm mx-auto leading-relaxed">
                Thank you for engaging with <strong>MV Invest</strong>. Your Personal CIO advisory desk will reach out within 24 business hours to conduct your confidential portfolio audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">FULL NAME *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Ramesh Patel"
                  className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">WORK EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">ESTIMATED PORTFOLIO SIZE</label>
                  <select
                    name="wealthTier"
                    className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                  >
                    <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50 Lakhs – ₹2 Crores">₹50 Lakhs – ₹2 Crores</option>
                    <option value="₹2 Crores – ₹10 Crores (HNI)">₹2 Crores – ₹10 Crores (HNI)</option>
                    <option value="₹10 Crores+ (Ultra-HNI / Family Office)">₹10 Crores+ (Ultra-HNI / Family Office)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">PRIMARY ADVISORY INTEREST</label>
                <select
                  name="serviceInterest"
                  className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                >
                  <option value="Comprehensive Portfolio Health Check / Audit">Comprehensive Portfolio Health Check / Audit</option>
                  <option value="AIF & PMS Independent Due Diligence">AIF &amp; PMS Independent Due Diligence</option>
                  <option value="Direct Mutual Fund Transition (Zero Commissions)">Direct Mutual Fund Transition (Zero Commissions)</option>
                  <option value="Family Office / Estate Asset Allocation">Family Office / Estate Asset Allocation</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-studio-muted mb-1.5">BRIEF BACKGROUND OR OBJECTIVES (OPTIONAL)</label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Share any specific asset allocation challenges, existing broker trail questions, or timeline goals."
                  className="w-full bg-studio-bg border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-current outline-none focus:border-current"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-current text-studio-bg font-bold uppercase tracking-wider text-sm border-0 cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
              >
                {loading ? 'TRANSMITTING REQUEST...' : 'Request Confidential Personal CIO Consultation →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
