"use client";

import { useEffect, useRef } from "react";

const BREAK_COMPLETE_MS = 2000;
const RESTORE_DELAY_MS = 3500;
const RESTORE_DURATION_MS = 800;

const BG_FILL = "#060912";

const BLOB1_COLOR = "rgba(49, 87, 152, 0.10)";
const BLOB1_CYCLE_MS = 18000;
const BLOB1_RADIUS_W = 0.65;
const BLOB1_ORIGIN_X = 0.2;
const BLOB1_ORIGIN_Y = 0.4;
const BLOB1_SWING_X = 0.12;
const BLOB1_SWING_Y = 0.08;

const BLOB2_COLOR = "rgba(20, 30, 60, 0.35)";
const BLOB2_CYCLE_MS = 24000;
const BLOB2_RADIUS_W = 0.7;
const BLOB2_ORIGIN_X = 0.8;
const BLOB2_ORIGIN_Y = 0.6;
const BLOB2_SWING_X = 0.1;
const BLOB2_SWING_Y = 0.1;

const BLOB3_COLOR = "rgba(212, 167, 145, 0.28)";
const BLOB3_DRIFT_MS = 14000;
const BLOB3_PULSE_MS = 6000;
const BLOB3_RADIUS_MIN_W = 0.4;
const BLOB3_RADIUS_MAX_W = 0.44;
const BLOB3_DRIFT = 0.04;

const GRADIENT_TRANSPARENT = "rgba(0, 0, 0, 0)";

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

interface BreakRuntime {
  pending: boolean;
  startTime: number | null;
  restoreStartTime: number | null;
  brokenDeviceIds: string[];
  brokenEvidenceIds: string[];
  completionFired: boolean;
}

export default function LedgerNetworkBackground({
  triggerBreak = false,
  autoRestore = false,
  onBreakComplete,
}: {
  triggerBreak?: boolean;
  autoRestore?: boolean;
  onBreakComplete?: () => void;
} = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const breakRef = useRef<BreakRuntime>({
    pending: false,
    startTime: null,
    restoreStartTime: null,
    brokenDeviceIds: [],
    brokenEvidenceIds: [],
    completionFired: false,
  });
  const lastTimestampRef = useRef(0);
  const scrollYRef = useRef(0);
  const autoRestoreRef = useRef(autoRestore);
  const onBreakCompleteRef = useRef(onBreakComplete);

  useEffect(() => {
    autoRestoreRef.current = autoRestore;
  }, [autoRestore]);

  useEffect(() => {
    onBreakCompleteRef.current = onBreakComplete;
  }, [onBreakComplete]);

  useEffect(() => {
    if (
      triggerBreak &&
      breakRef.current.startTime === null &&
      !breakRef.current.pending
    ) {
      breakRef.current.pending = true;
    }
  }, [triggerBreak]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;

    const updateScroll = () => {
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      updateScroll();
    };

    const beginBreak = (timestamp: number) => {
      breakRef.current = {
        pending: false,
        startTime: timestamp,
        restoreStartTime: null,
        brokenDeviceIds: [],
        brokenEvidenceIds: [],
        completionFired: false,
      };
    };

    const drawRadialBlob = (
      cx: number,
      cy: number,
      radius: number,
      color: string
    ) => {
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      g.addColorStop(0, color);
      g.addColorStop(1, GRADIENT_TRANSPARENT);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = (timestamp: number) => {
      lastTimestampRef.current = timestamp;

      if (breakRef.current.pending && breakRef.current.startTime === null) {
        beginBreak(timestamp);
      }

      const breakRuntime = breakRef.current;

      if (breakRuntime.startTime !== null) {
        const elapsed = timestamp - breakRuntime.startTime;

        if (!breakRuntime.completionFired && elapsed >= BREAK_COMPLETE_MS) {
          breakRuntime.completionFired = true;
          onBreakCompleteRef.current?.();
        }

        if (
          autoRestoreRef.current &&
          breakRuntime.restoreStartTime === null &&
          elapsed >= RESTORE_DELAY_MS
        ) {
          breakRuntime.restoreStartTime = timestamp;
        }

        if (
          breakRuntime.restoreStartTime !== null &&
          timestamp - breakRuntime.restoreStartTime >= RESTORE_DURATION_MS
        ) {
          breakRef.current = {
            pending: false,
            startTime: null,
            restoreStartTime: null,
            brokenDeviceIds: [],
            brokenEvidenceIds: [],
            completionFired: false,
          };
        }
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = BG_FILL;
      ctx.fillRect(0, 0, width, height);

      const tau = Math.PI * 2;
      const t = timestamp;

      ctx.globalCompositeOperation = "screen";

      const b1Angle = (tau * t) / BLOB1_CYCLE_MS;
      const b1cx =
        width * BLOB1_ORIGIN_X +
        width * BLOB1_SWING_X * Math.cos(b1Angle);
      const b1cy =
        height * BLOB1_ORIGIN_Y +
        height * BLOB1_SWING_Y * Math.sin(b1Angle);
      drawRadialBlob(b1cx, b1cy, width * BLOB1_RADIUS_W, BLOB1_COLOR);

      const b2Angle = (tau * t) / BLOB2_CYCLE_MS;
      const b2cx =
        width * BLOB2_ORIGIN_X +
        width * BLOB2_SWING_X * Math.sin(b2Angle);
      const b2cy =
        height * BLOB2_ORIGIN_Y +
        height * BLOB2_SWING_Y * Math.cos(b2Angle);
      drawRadialBlob(b2cx, b2cy, width * BLOB2_RADIUS_W, BLOB2_COLOR);

      const driftAngle = (tau * t) / BLOB3_DRIFT_MS;
      const b3cx =
        width * 0.5 + width * BLOB3_DRIFT * Math.sin(driftAngle);
      const b3cy =
        height * 0.5 + height * BLOB3_DRIFT * Math.cos(driftAngle);
      const pulse = (Math.sin((tau * t) / BLOB3_PULSE_MS) + 1) * 0.5;
      const b3r = lerp(
        width * BLOB3_RADIUS_MIN_W,
        width * BLOB3_RADIUS_MAX_W,
        pulse
      );
      drawRadialBlob(b3cx, b3cy, b3r, BLOB3_COLOR);

      ctx.globalCompositeOperation = "source-over";

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    updateScroll();
    animationFrame = requestAnimationFrame((ts) => {
      lastTimestampRef.current = ts;
      animationFrame = requestAnimationFrame(draw);
    });

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
