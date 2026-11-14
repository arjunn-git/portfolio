import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Play, RefreshCw, Eye } from 'lucide-react';

type ExperimentMode = 'particles' | 'gravitational' | 'wave';

export const Playground: React.FC = () => {
  const [mode, setMode] = useState<ExperimentMode>('particles');
  const [fps, setFps] = useState<number>(60);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 420);

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 2, isHovered: false };

    // Particles array
    const particleCount = mode === 'particles' ? 90 : 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1.2,
      baseRadius: Math.random() * 2 + 1.2,
      angle: Math.random() * Math.PI * 2,
    }));

    // Handle mouse events
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const onMouseLeave = () => {
      mouse.isHovered = false;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Handle resize
    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };

    window.addEventListener('resize', onResize);

    // FPS Meter
    let lastTime = performance.now();
    let frameCount = 0;

    // Render loop
    const render = (time: number) => {
      frameCount++;
      if (time - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastTime)));
        frameCount = 0;
        lastTime = time;
      }

      ctx.fillStyle = '#080B12';
      ctx.fillRect(0, 0, width, height);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(23, 31, 45, 0.4)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (mode === 'particles') {
        // Mode 1: Interactive Constellation
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse attraction
          if (mouse.isHovered) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              p.x += (dx / dist) * 1.5;
              p.y += (dy / dist) * 1.5;
            }
          }

          // Draw node
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#287BFF';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#287BFF';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Connect nearby nodes
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 85) {
              ctx.strokeStyle = `rgba(143, 169, 201, ${0.4 * (1 - dist / 85)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      } else if (mode === 'gravitational') {
        // Mode 2: Gravitational Core
        const centerX = mouse.isHovered ? mouse.x : width / 2;
        const centerY = mouse.isHovered ? mouse.y : height / 2;

        // Core glow
        const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 120);
        grad.addColorStop(0, 'rgba(40, 123, 255, 0.8)');
        grad.addColorStop(0.4, 'rgba(40, 123, 255, 0.2)');
        grad.addColorStop(1, 'rgba(8, 11, 18, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // Orbiting satellites
        particles.forEach((p, idx) => {
          p.angle += 0.02 + idx * 0.0005;
          const orbitRadius = 40 + (idx * 4);
          const px = centerX + Math.cos(p.angle) * orbitRadius;
          const py = centerY + Math.sin(p.angle) * (orbitRadius * 0.45);

          ctx.beginPath();
          ctx.arc(px, py, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#DCE6F2';
          ctx.fill();
        });
      } else {
        // Mode 3: Sine Wave Field
        const waveTime = time * 0.002;
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const y = height / 2 + Math.sin(x * 0.015 + waveTime) * 45 + Math.cos(x * 0.03 - waveTime) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = '#287BFF';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#287BFF';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Secondary harmonic
        ctx.beginPath();
        for (let x = 0; x < width; x += 12) {
          const y = height / 2 + Math.sin(x * 0.02 - waveTime * 1.2) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(220, 230, 242, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  return (
    <section id="playground" className="py-28 px-6 sm:px-8 bg-midnight relative border-t border-slateNavy/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="telemetry-tag mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electricBlue" />
              <span>07 // CREATIVE LAB</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-iceWhite tracking-tight">
              EXPERIMENTS IN MOTION.
            </h2>
          </div>
          <p className="text-steelBlue max-w-md text-sm sm:text-base font-light">
            Interactive canvas and physics simulations demonstrating creative frontend capabilities, dynamic rendering loops, and kinetic mathematical behaviors.
          </p>
        </div>

        {/* Experiment Container */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-steelBlue/20 shadow-electric-card relative overflow-hidden">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slateNavy/70">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-electricBlue" />
              <span className="font-mono text-xs uppercase text-iceWhite font-semibold">
                EXPERIMENT SIMULATOR
              </span>
            </div>

            {/* Mode Selectors */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMode('particles')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                  mode === 'particles'
                    ? 'bg-electricBlue text-white shadow-electric-glow font-semibold'
                    : 'bg-slateNavy text-steelBlue hover:text-iceWhite border border-steelBlue/20'
                }`}
              >
                CONSTELLATION
              </button>
              <button
                type="button"
                onClick={() => setMode('gravitational')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                  mode === 'gravitational'
                    ? 'bg-electricBlue text-white shadow-electric-glow font-semibold'
                    : 'bg-slateNavy text-steelBlue hover:text-iceWhite border border-steelBlue/20'
                }`}
              >
                GRAVITY CORE
              </button>
              <button
                type="button"
                onClick={() => setMode('wave')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                  mode === 'wave'
                    ? 'bg-electricBlue text-white shadow-electric-glow font-semibold'
                    : 'bg-slateNavy text-steelBlue hover:text-iceWhite border border-steelBlue/20'
                }`}
              >
                HARMONIC WAVE
              </button>
            </div>

            {/* Telemetry info */}
            <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-steelBlue">
              <span>FPS: <strong className="text-electricBlue">{fps}</strong></span>
              <span>CURSOR: <strong className="text-iceWhite">ACTIVE</strong></span>
            </div>
          </div>

          {/* Interactive Canvas */}
          <div className="relative rounded-xl overflow-hidden bg-midnight border border-steelBlue/20">
            <canvas
              ref={canvasRef}
              className="w-full h-[420px] block cursor-crosshair"
              aria-label="Interactive creative coding simulation canvas"
            />
            <div className="absolute bottom-3 right-4 font-mono text-[10px] text-steelBlue/60 pointer-events-none">
              HOVER / MOVE CURSOR TO INTERACT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
