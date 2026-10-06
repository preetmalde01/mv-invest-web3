/**
 * MV Invest — Swiss Minimalist Editorial Redesign
 * Live Interactive Fluid Glow Engine & Client-Side Logic
 */

(function() {
  'use strict';

  // =========================================================================
  // 1. Theme Toggle (Light Studio Mode & Dark Mode)
  // =========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeLabel = document.getElementById('theme-mode-label');

  function getPreferredTheme() {
    const saved = localStorage.getItem('mv_invest_theme');
    if (saved) return saved;
    return 'light'; // Default matches image_5a89ca.png
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('mv_invest_theme', theme);
    if (themeLabel) {
      themeLabel.textContent = theme === 'dark' ? 'DARK MODE' : 'LIGHT MODE';
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // =========================================================================
  
  // =========================================================================
  // =========================================================================
  // 2. Live Interactive Ambient Orange Glow Canvas Engine
  // =========================================================================
  const canvas = document.getElementById('glow-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Fluid Orb Physics State
    const orb = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      vx: 0,
      vy: 0,
      baseRadius: 360,
      currentRadius: 360,
      active: false
    };

    function resize() {
      width = window.innerWidth || screen.width || 1024;
      height = window.innerHeight || screen.height || 768;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      orb.baseRadius = Math.min(width, height) * 0.45;
      if (!orb.active) {
        orb.x = orb.targetX = width / 2;
        orb.y = orb.targetY = height * 0.46;
      }
    }

    let time = 0;

    function renderGlow() {
      time += 0.016;

      // Smooth lag / fluid inertia towards target pointer position
      const isMobile = width < 768;
      const ease = isMobile ? 0.08 : 0.055;

      orb.x += (orb.targetX - orb.x) * ease;
      orb.y += (orb.targetY - orb.y) * ease;

      // Natural organic breathing pulsation
      const breath = Math.sin(time * 1.8) * (orb.baseRadius * 0.08) + Math.cos(time * 2.4) * (orb.baseRadius * 0.04);
      orb.currentRadius = orb.baseRadius + breath;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // Dynamic color tuning based on theme
      const r = isDark ? 255 : 243;
      const g = isDark ? 95 : 111;
      const b = isDark ? 45 : 67;

      // Layer 1: Diffuse Ambient Mesh Blob
      const rad1 = orb.currentRadius * 1.45;
      const grad1 = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, rad1);
      grad1.addColorStop(0, `rgba(${r}, ${g + 30}, ${b + 20}, ${isDark ? 0.35 : 0.45})`);
      grad1.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${isDark ? 0.25 : 0.32})`);
      grad1.addColorStop(0.7, `rgba(${r}, ${g + 15}, ${b + 40}, ${isDark ? 0.12 : 0.16})`);
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.save();
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Radiant Warm Core
      const rad2 = orb.currentRadius * 0.95;
      const grad2 = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, rad2);
      grad2.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${isDark ? 0.75 : 0.82})`);
      grad2.addColorStop(0.4, `rgba(${r}, ${g + 20}, ${b}, ${isDark ? 0.45 : 0.55})`);
      grad2.addColorStop(0.8, `rgba(${r}, ${g + 45}, ${b + 30}, ${isDark ? 0.15 : 0.22})`);
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, rad2, 0, Math.PI * 2);
      ctx.fill();

      // Layer 3: Organic floating satellite for natural shape distortion
      const satDist = orb.currentRadius * 0.28;
      const satAngle = time * 0.9;
      const satX = orb.x + Math.cos(satAngle) * satDist;
      const satY = orb.y + Math.sin(satAngle * 1.3) * satDist * 0.75;
      const satRad = orb.currentRadius * 0.65;

      const grad3 = ctx.createRadialGradient(satX, satY, 0, satX, satY, satRad);
      grad3.addColorStop(0, `rgba(${r}, ${g - 10}, ${b}, ${isDark ? 0.55 : 0.65})`);
      grad3.addColorStop(0.6, `rgba(${r}, ${g + 25}, ${b + 10}, ${isDark ? 0.18 : 0.22})`);
      grad3.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad3;
      ctx.beginPath();
      ctx.arc(satX, satY, satRad, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      requestAnimationFrame(renderGlow);
    }

    // Pointer Interaction Listeners
    window.addEventListener('mousemove', function(e) {
      orb.targetX = e.clientX;
      orb.targetY = e.clientY;
      orb.active = true;
    }, { passive: true });

    window.addEventListener('touchstart', function(e) {
      if (e.touches && e.touches.length > 0) {
        orb.targetX = e.touches[0].clientX;
        orb.targetY = e.touches[0].clientY;
        orb.active = true;
      }
    }, { passive: true });

    window.addEventListener('touchmove', function(e) {
      if (e.touches && e.touches.length > 0) {
        orb.targetX = e.touches[0].clientX;
        orb.targetY = e.touches[0].clientY;
        orb.active = true;
      }
    }, { passive: true });

    window.addEventListener('resize', resize, { passive: true });

    resize();
    renderGlow();
  }

  // =========================================================================
  // 3. Mobile Navigation Drawer
  // =========================================================================
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');

  if (hamburgerBtn && drawer) {
    hamburgerBtn.addEventListener('click', function() {
      drawer.classList.add('open');
    });

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    }

    const drawerLinks = drawer.querySelectorAll('a');
    drawerLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        drawer.classList.remove('open');
      });
    });
  }

  // =========================================================================
  // 4. Mathematical Commission Leak Calculator
  // =========================================================================
  const slider = document.getElementById('portfolio-slider');
  const portfolioDisplay = document.getElementById('portfolio-display');
  const preservedDisplay = document.getElementById('preserved-value');
  const yearsText = document.getElementById('years-text');
  const regularTotalDisplay = document.getElementById('regular-total');
  const directTotalDisplay = document.getElementById('direct-total');
  const regularBar = document.getElementById('regular-bar');
  const horizonBtns = document.querySelectorAll('.horizon-btn');

  let activeYears = 20;

  function formatIndianCurrency(amount) {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + ' Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(1) + ' Lakh';
    }
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  function updateCalculator() {
    if (!slider || !preservedDisplay) return;

    const principal = parseFloat(slider.value); // default: 10,000,000 (1 Cr)
    const years = activeYears;

    // Financial compounding model (calibrated from screenshot):
    // 12.0% gross returns
    // 1.0% distributor commission trail -> 11.0% net regular
    // 0.25% fee-only equivalent advisory -> 11.75% net direct
    const rateRegular = 0.11;
    const rateDirect = 0.1175;

    const fvRegular = principal * Math.pow(1 + rateRegular, years);
    const fvDirect = principal * Math.pow(1 + rateDirect, years);
    const preserved = fvDirect - fvRegular;

    if (portfolioDisplay) portfolioDisplay.textContent = formatIndianCurrency(principal);
    if (preservedDisplay) preservedDisplay.textContent = formatIndianCurrency(preserved);
    if (yearsText) yearsText.textContent = years;
    if (regularTotalDisplay) regularTotalDisplay.textContent = formatIndianCurrency(fvRegular);
    if (directTotalDisplay) directTotalDisplay.textContent = formatIndianCurrency(fvDirect);

    if (regularBar && fvDirect > 0) {
      const percentage = Math.min(100, Math.max(12, (fvRegular / fvDirect) * 100));
      regularBar.style.width = percentage.toFixed(1) + '%';
    }
  }

  if (slider) {
    slider.addEventListener('input', updateCalculator);
  }

  horizonBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      horizonBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      activeYears = parseInt(this.getAttribute('data-years'), 10) || 20;
      updateCalculator();
    });
  });

  updateCalculator();

  // =========================================================================
  // 5. Consultation Form AJAX Dispatch
  // =========================================================================
  const form = document.getElementById('consultation-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.textContent = 'TRANSMITTING REQUEST...';
      btn.disabled = true;

      const formData = new FormData(form);
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
      }

      form.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <div style="width: 52px; height: 52px; background: var(--bg-invert); color: var(--text-invert); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 1.5rem;">
            ✓
          </div>
          <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.75rem;">
            MANDATE INITIATION REGISTERED
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.6; max-width: 440px; margin: 0 auto;">
            Thank you for engaging with <strong>MV Invest</strong>. Your Personal CIO advisory desk will reach out within 24 business hours to conduct your confidential portfolio audit.
          </p>
        </div>
      `;
    });
  }

})();
