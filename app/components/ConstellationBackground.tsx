"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 100;
const CONNECTION_DISTANCE = 160;
const NODE_COLOR = "#7D95E0";
const LINE_COLOR = "#315798";
const CLOSE_LINE_OPACITY = 0.35;
const FLARE_RADIUS = 4;
const FLARE_DURATION = 10;

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radiusPhase: number;
  radiusFreq: number;
  opacityPhase: number;
  opacityFreq: number;
  flareCountdown: number;
  flareActive: number;
};

function initNodes(w: number, h: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radiusPhase: Math.random() * Math.PI * 2,
      radiusFreq: 0.02 + Math.random() * 0.03,
      opacityPhase: Math.random() * Math.PI * 2,
      opacityFreq: 0.015 + Math.random() * 0.02,
      flareCountdown: 180 + Math.floor(Math.random() * 61),
      flareActive: 0,
    });
  }
  return nodes;
}

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let frameCount = 0;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      nodes = initNodes(w, h);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      frameCount++;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));

        if (node.flareActive > 0) {
          node.flareActive--;
        } else {
          node.flareCountdown--;
          if (node.flareCountdown <= 0) {
            node.flareActive = FLARE_DURATION;
            node.flareCountdown = 180 + Math.floor(Math.random() * 61);
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE && dist > 0) {
            const opacity =
              CLOSE_LINE_OPACITY * (1 - dist / CONNECTION_DISTANCE);
            const aPulse =
              a.flareActive > 0 ? 1 : 0.5 + 0.5 * Math.sin(frameCount * a.radiusFreq + a.radiusPhase);
            const bPulse =
              b.flareActive > 0 ? 1 : 0.5 + 0.5 * Math.sin(frameCount * b.radiusFreq + b.radiusPhase);
            const lineWidth = 0.5 + (aPulse + bPulse) * 0.5;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(49, 87, 152, ${opacity})`;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        let radius: number;
        let opacity: number;

        if (node.flareActive > 0) {
          radius = FLARE_RADIUS;
          opacity = 1;
        } else {
          radius =
            1.5 +
            2 * (0.5 + 0.5 * Math.sin(frameCount * node.radiusFreq + node.radiusPhase));
          opacity =
            0.3 +
            0.5 * (0.5 + 0.5 * Math.sin(frameCount * node.opacityFreq + node.opacityPhase));
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(125, 149, 224, ${opacity})`;
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
