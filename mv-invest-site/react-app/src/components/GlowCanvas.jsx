import React, { useEffect, useRef } from 'react';

export default function GlowCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;
    let animId;

    const orb = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
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
      const isMobile = width < 768;
      const ease = isMobile ? 0.08 : 0.055;

      orb.x += (orb.targetX - orb.x) * ease;
      orb.y += (orb.targetY - orb.y) * ease;

      const breath = Math.sin(time * 1.8) * (orb.baseRadius * 0.08) + Math.cos(time * 2.4) * (orb.baseRadius * 0.04);
      orb.currentRadius = orb.baseRadius + breath;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const r = isDark ? 255 : 243;
      const g = isDark ? 95 : 111;
      const b = isDark ? 45 : 67;

      // Layer 1: Diffuse Ambient Mesh
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

      // Layer 3: Organic floating satellite
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

      animId = requestAnimationFrame(renderGlow);
    }

    const handleMouseMove = (e) => {
      orb.targetX = e.clientX;
      orb.targetY = e.clientY;
      orb.active = true;
    };

    const handleTouch = (e) => {
      if (e.touches && e.touches.length > 0) {
        orb.targetX = e.touches[0].clientX;
        orb.targetY = e.touches[0].clientY;
        orb.active = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('resize', resize, { passive: true });

    resize();
    renderGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0 block"
    />
  );
}
