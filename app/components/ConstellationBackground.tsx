"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT_DEVICE = 68;
const NODE_COUNT_EVIDENCE = 12;
const CONNECTION_DISTANCE_DEVICE = 140;
const CONNECTION_DISTANCE_EVIDENCE = 120;
const CONNECTION_DISTANCE_AVERA = 180;
const EVIDENCE_GRAVITY = 0.0008;
const BREAK_FLICKER_MS = 500;
const BREAK_COLD_MS = 900;
const BREAK_COMPLETE_MS = 2000;
const RESTORE_DELAY_MS = 3500;
const RESTORE_DURATION_MS = 800;

const CORE_RADIUS = 8;
const CORE_PULSE_MIN_RADIUS = 10;
const CORE_PULSE_MAX_RADIUS = 22;
const CORE_PULSE_LOOP_MS = 2500;
const MAX_AVERA_CONNECTIONS = 8;
const BREAK_FREEZE_MS = 1500;
const CONNECTION_FADE_MS = 300;
const EVIDENCE_DIM_MS = 400;
const FLARE_DURATION_FRAMES = 10;
const FLARE_MIN_FRAMES = 180;
const FLARE_MAX_FRAMES = 240;
const EVIDENCE_FLARE_MIN_FRAMES = 150;
const EVIDENCE_FLARE_MAX_FRAMES = 210;
const DEVICE_SCROLL_OFFSET = -0.012;
const EVIDENCE_SCROLL_OFFSET = -0.005;
const FRAME_MS = 1000 / 60;

const DEVICE_RGB: [number, number, number] = [125, 149, 224];
const EVIDENCE_RGB: [number, number, number] = [212, 167, 145];
const COLD_RGB: [number, number, number] = [26, 31, 46];

type NodeKind = "device" | "evidence";

interface NetworkNode {
  id: string;
  kind: NodeKind;
  xPct: number;
  yPct: number;
  vx: number;
  vy: number;
  baseRadius: number;
  flareCountdown: number;
  flareFrames: number;
}

interface BreakRuntime {
  pending: boolean;
  startTime: number | null;
  restoreStartTime: number | null;
  brokenDeviceIds: string[];
  brokenEvidenceIds: string[];
  completionFired: boolean;
}

interface NodeBehavior {
  flickerAlpha: number;
  cold: boolean;
  frozen: boolean;
  restoreProgress: number;
  connectionMultiplier: number;
  averaOpacityMultiplier: number;
}

interface DrawNode {
  node: NetworkNode;
  x: number;
  y: number;
  radius: number;
  opacity: number;
  fillStyle: string;
  connectionMultiplier: number;
  averaOpacityMultiplier: number;
  distanceToCore: number;
  flareActive: boolean;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function randomRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function distanceBetween(ax: number, ay: number, bx: number, by: number) {
  return Math.hypot(bx - ax, by - ay);
}

function nextFlareCountdown(kind: NodeKind) {
  return kind === "evidence"
    ? randomRange(EVIDENCE_FLARE_MIN_FRAMES, EVIDENCE_FLARE_MAX_FRAMES)
    : randomRange(FLARE_MIN_FRAMES, FLARE_MAX_FRAMES);
}

function toRgba(rgb: readonly [number, number, number], alpha = 1) {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

function mixRgb(
  from: readonly [number, number, number],
  to: readonly [number, number, number],
  progress: number
): [number, number, number] {
  return [
    Math.round(lerp(from[0], to[0], progress)),
    Math.round(lerp(from[1], to[1], progress)),
    Math.round(lerp(from[2], to[2], progress)),
  ];
}

function getNodeBehavior(
  node: NetworkNode,
  breakRuntime: BreakRuntime,
  timestamp: number
): NodeBehavior {
  if (breakRuntime.startTime === null) {
    return {
      flickerAlpha: 1,
      cold: false,
      frozen: false,
      restoreProgress: 0,
      connectionMultiplier: 1,
      averaOpacityMultiplier: 1,
    };
  }

  const elapsed = timestamp - breakRuntime.startTime;
  const restoring = breakRuntime.restoreStartTime !== null;
  const restoreProgress = restoring
    ? clamp((timestamp - breakRuntime.restoreStartTime!) / RESTORE_DURATION_MS, 0, 1)
    : 0;
  const brokenDevice = breakRuntime.brokenDeviceIds.includes(node.id);
  const brokenEvidence = breakRuntime.brokenEvidenceIds.includes(node.id);

  if (!brokenDevice && !brokenEvidence) {
    return {
      flickerAlpha: 1,
      cold: false,
      frozen: false,
      restoreProgress,
      connectionMultiplier: 1,
      averaOpacityMultiplier: 1,
    };
  }

  let flickerAlpha = 1;
  if (brokenDevice && !restoring && elapsed < BREAK_FLICKER_MS) {
    const flickerProgress = clamp(elapsed / BREAK_FLICKER_MS, 0, 1);
    flickerAlpha = 0.35 + 0.65 * Math.abs(Math.sin(flickerProgress * Math.PI * 3));
  }

  const coldStart = brokenDevice ? BREAK_FLICKER_MS : BREAK_COLD_MS;
  const coldAge = elapsed - coldStart;
  const cold = coldAge >= 0 && restoreProgress < 1;

  let connectionMultiplier = 1;
  if (cold) {
    if (restoring) {
      connectionMultiplier = restoreProgress;
    } else {
      connectionMultiplier = clamp(1 - coldAge / CONNECTION_FADE_MS, 0, 1);
    }
  }

  let averaOpacityMultiplier = 1;
  if (brokenDevice && cold) {
    averaOpacityMultiplier = connectionMultiplier;
  } else if (brokenEvidence && cold) {
    if (restoring) {
      averaOpacityMultiplier = lerp(0.125, 1, restoreProgress);
    } else {
      const dimProgress = clamp(coldAge / EVIDENCE_DIM_MS, 0, 1);
      averaOpacityMultiplier = lerp(1, 0.125, dimProgress);
    }
  }

  return {
    flickerAlpha,
    cold,
    frozen: cold && elapsed >= BREAK_FREEZE_MS && !restoring,
    restoreProgress,
    connectionMultiplier,
    averaOpacityMultiplier,
  };
}

function createNetworkNodes(width: number, height: number) {
  const nodes: NetworkNode[] = [];
  const centerX = width * 0.5;
  const centerY = height * 0.5;
  const evidenceRadiusLimit = Math.min(width, height) * 0.25;

  for (let index = 0; index < NODE_COUNT_EVIDENCE; index += 1) {
    const angle = randomRange(0, Math.PI * 2);
    const radius = evidenceRadiusLimit * Math.sqrt(Math.random());
    const speed = randomRange(0.15, 0.25);
    const velocityAngle = randomRange(0, Math.PI * 2);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    nodes.push({
      id: `evidence-${index}`,
      kind: "evidence",
      xPct: clamp(x / width, 0.02, 0.98),
      yPct: clamp(y / height, 0.02, 0.98),
      vx: Math.cos(velocityAngle) * speed,
      vy: Math.sin(velocityAngle) * speed,
      baseRadius: randomRange(2.5, 3.5),
      flareCountdown: nextFlareCountdown("evidence"),
      flareFrames: 0,
    });
  }

  for (let index = 0; index < NODE_COUNT_DEVICE; index += 1) {
    const speed = randomRange(0.3, 0.7);
    const velocityAngle = randomRange(0, Math.PI * 2);

    nodes.push({
      id: `device-${index}`,
      kind: "device",
      xPct: randomRange(0.02, 0.98),
      yPct: randomRange(0.02, 0.98),
      vx: Math.cos(velocityAngle) * speed,
      vy: Math.sin(velocityAngle) * speed,
      baseRadius: randomRange(1.5, 3),
      flareCountdown: nextFlareCountdown("device"),
      flareFrames: 0,
    });
  }

  return nodes;
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
  const nodesRef = useRef<NetworkNode[]>([]);
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

      if (nodesRef.current.length === 0) {
        nodesRef.current = createNetworkNodes(width, height);
      }

      updateScroll();
    };

    const startBreak = (timestamp: number) => {
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const outerThreshold = Math.min(width, height) * 0.35;
      const devices = nodesRef.current.filter((node) => node.kind === "device");
      const eligibleDevices = devices.filter((node) => {
        const x = node.xPct * width;
        const y = node.yPct * height;
        return distanceBetween(x, y, centerX, centerY) > outerThreshold;
      });

      const brokenDevices = (
        eligibleDevices.length >= 3
          ? shuffle(eligibleDevices)
          : [...devices].sort((a, b) => {
              const ax = a.xPct * width;
              const ay = a.yPct * height;
              const bx = b.xPct * width;
              const by = b.yPct * height;
              return (
                distanceBetween(bx, by, centerX, centerY) -
                distanceBetween(ax, ay, centerX, centerY)
              );
            })
      )
        .slice(0, 3)
        .map((node) => node.id);

      const evidenceNodes = nodesRef.current.filter((node) => node.kind === "evidence");
      const brokenEvidence = [...evidenceNodes]
        .sort((a, b) => {
          const ax = a.xPct * width;
          const ay = a.yPct * height;
          const bx = b.xPct * width;
          const by = b.yPct * height;

          const distanceA = Math.min(
            ...brokenDevices.map((deviceId) => {
              const device = devices.find((item) => item.id === deviceId)!;
              return distanceBetween(ax, ay, device.xPct * width, device.yPct * height);
            })
          );
          const distanceB = Math.min(
            ...brokenDevices.map((deviceId) => {
              const device = devices.find((item) => item.id === deviceId)!;
              return distanceBetween(bx, by, device.xPct * width, device.yPct * height);
            })
          );

          return distanceA - distanceB;
        })
        .slice(0, 2)
        .map((node) => node.id);

      breakRef.current = {
        pending: false,
        startTime: timestamp,
        restoreStartTime: null,
        brokenDeviceIds: brokenDevices,
        brokenEvidenceIds: brokenEvidence,
        completionFired: false,
      };
    };

    const draw = (timestamp: number) => {
      const dtMs = Math.min(timestamp - lastTimestampRef.current, 50);
      const dtFrames = dtMs / FRAME_MS;
      lastTimestampRef.current = timestamp;

      if (breakRef.current.pending && breakRef.current.startTime === null) {
        startBreak(timestamp);
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

      const coreX = width * 0.5;
      const coreY = height * 0.5;
      const drawNodes: DrawNode[] = [];

      for (const node of nodesRef.current) {
        const behavior = getNodeBehavior(node, breakRef.current, timestamp);
        const baseX = node.xPct * width;
        const baseY = node.yPct * height;

        if (!behavior.frozen) {
          let nextX = baseX;
          let nextY = baseY;

          if (node.kind === "evidence") {
            const dx = coreX - nextX;
            const dy = coreY - nextY;
            const distanceToCore = Math.hypot(dx, dy);

            if (distanceToCore > 0.001) {
              const acceleration = EVIDENCE_GRAVITY * distanceToCore * dtFrames;
              node.vx += (dx / distanceToCore) * acceleration;
              node.vy += (dy / distanceToCore) * acceleration;

              const speed = Math.hypot(node.vx, node.vy);
              if (speed > 0.4) {
                node.vx = (node.vx / speed) * 0.4;
                node.vy = (node.vy / speed) * 0.4;
              }
            }
          }

          nextX += node.vx * dtFrames;
          nextY += node.vy * dtFrames;

          const edgeRadius = Math.max(node.baseRadius, 2);
          if (nextX <= edgeRadius) {
            nextX = edgeRadius;
            node.vx = Math.abs(node.vx);
          } else if (nextX >= width - edgeRadius) {
            nextX = width - edgeRadius;
            node.vx = -Math.abs(node.vx);
          }

          if (nextY <= edgeRadius) {
            nextY = edgeRadius;
            node.vy = Math.abs(node.vy);
          } else if (nextY >= height - edgeRadius) {
            nextY = height - edgeRadius;
            node.vy = -Math.abs(node.vy);
          }

          node.xPct = clamp(nextX / width, 0, 1);
          node.yPct = clamp(nextY / height, 0, 1);
        }

        if (!behavior.cold) {
          if (node.flareFrames > 0) {
            node.flareFrames = Math.max(0, node.flareFrames - dtFrames);
          } else {
            node.flareCountdown -= dtFrames;
            if (node.flareCountdown <= 0) {
              node.flareFrames = FLARE_DURATION_FRAMES;
              node.flareCountdown = nextFlareCountdown(node.kind);
            }
          }
        } else {
          node.flareFrames = 0;
        }

        const parallaxOffset =
          node.kind === "device"
            ? scrollYRef.current * DEVICE_SCROLL_OFFSET
            : scrollYRef.current * EVIDENCE_SCROLL_OFFSET;
        const drawX = node.xPct * width;
        const drawY = node.yPct * height + parallaxOffset;
        const baseColor = node.kind === "device" ? DEVICE_RGB : EVIDENCE_RGB;
        const fillRgb = behavior.cold
          ? mixRgb(COLD_RGB, baseColor, behavior.restoreProgress)
          : baseColor;
        const flareActive = node.flareFrames > 0;
        const coldRadius = node.kind === "device" ? 1.5 : node.baseRadius;
        const baseRadius = behavior.cold
          ? lerp(coldRadius, node.baseRadius, behavior.restoreProgress)
          : node.baseRadius;
        const radius = flareActive ? Math.max(baseRadius, 4) : baseRadius;
        const opacity =
          (flareActive ? 1 : 0.75) *
          (behavior.cold ? 1 : 1) *
          behavior.flickerAlpha;

        drawNodes.push({
          node,
          x: drawX,
          y: drawY,
          radius,
          opacity,
          fillStyle: toRgba(fillRgb),
          connectionMultiplier: behavior.connectionMultiplier,
          averaOpacityMultiplier: behavior.averaOpacityMultiplier,
          distanceToCore: distanceBetween(drawX, drawY, coreX, coreY),
          flareActive,
        });
      }

      ctx.clearRect(0, 0, width, height);

      for (let index = 0; index < drawNodes.length; index += 1) {
        const from = drawNodes[index];

        for (let innerIndex = index + 1; innerIndex < drawNodes.length; innerIndex += 1) {
          const to = drawNodes[innerIndex];
          const distance = distanceBetween(from.x, from.y, to.x, to.y);

          if (from.node.kind === "device" && to.node.kind === "device") {
            if (distance >= CONNECTION_DISTANCE_DEVICE) continue;
            const alpha =
              (1 - distance / CONNECTION_DISTANCE_DEVICE) *
              0.3 *
              Math.min(from.connectionMultiplier, to.connectionMultiplier);
            if (alpha <= 0.002) continue;
            ctx.beginPath();
            ctx.strokeStyle = toRgba([49, 87, 152], alpha);
            ctx.lineWidth = 0.5;
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
            continue;
          }

          if (from.node.kind === "evidence" && to.node.kind === "evidence") {
            if (distance >= CONNECTION_DISTANCE_EVIDENCE) continue;
            const alpha =
              (1 - distance / CONNECTION_DISTANCE_EVIDENCE) *
              0.35 *
              Math.min(from.connectionMultiplier, to.connectionMultiplier);
            if (alpha <= 0.002) continue;
            ctx.beginPath();
            ctx.strokeStyle = toRgba(EVIDENCE_RGB, alpha);
            ctx.lineWidth = 0.6;
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
            continue;
          }

          if (distance >= 100) continue;
          const alpha =
            (1 - distance / 100) *
            0.2 *
            Math.min(from.connectionMultiplier, to.connectionMultiplier);
          if (alpha <= 0.002) continue;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(180, 155, 180, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.stroke();
        }
      }

      const averaCandidates = drawNodes
        .filter((node) => node.distanceToCore < CONNECTION_DISTANCE_AVERA)
        .map((node) => {
          const isEvidence = node.node.kind === "evidence";
          const alpha = isEvidence
            ? 0.4 * node.averaOpacityMultiplier
            : 0.25 * node.connectionMultiplier;

          return { node, alpha };
        })
        .filter((item) => item.alpha > 0.005)
        .sort((left, right) => left.node.distanceToCore - right.node.distanceToCore)
        .slice(0, MAX_AVERA_CONNECTIONS);

      for (const candidate of averaCandidates) {
        ctx.beginPath();
        ctx.strokeStyle =
          candidate.node.node.kind === "evidence"
            ? toRgba(EVIDENCE_RGB, candidate.alpha)
            : toRgba(DEVICE_RGB, candidate.alpha);
        ctx.lineWidth = candidate.node.node.kind === "evidence" ? 1 : 0.8;
        ctx.moveTo(coreX, coreY);
        ctx.lineTo(candidate.node.x, candidate.node.y);
        ctx.stroke();
      }

      for (const drawNode of drawNodes) {
        if (drawNode.flareActive) {
          ctx.shadowBlur = drawNode.node.kind === "evidence" ? 16 : 12;
          ctx.shadowColor =
            drawNode.node.kind === "evidence"
              ? toRgba(EVIDENCE_RGB, 0.65)
              : toRgba(DEVICE_RGB, 0.5);
        } else if (drawNode.node.kind === "evidence" && drawNode.connectionMultiplier > 0.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = toRgba(EVIDENCE_RGB, 0.28);
        } else if (drawNode.node.kind === "device" && drawNode.connectionMultiplier > 0.2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = toRgba(DEVICE_RGB, 0.22);
        } else {
          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        }

        ctx.globalAlpha = clamp(drawNode.opacity, 0, 1);
        ctx.beginPath();
        ctx.fillStyle = drawNode.fillStyle;
        ctx.arc(drawNode.x, drawNode.y, drawNode.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "transparent";
      }

      const pulseProgress = (timestamp % CORE_PULSE_LOOP_MS) / CORE_PULSE_LOOP_MS;
      const pulseRadius = lerp(CORE_PULSE_MIN_RADIUS, CORE_PULSE_MAX_RADIUS, pulseProgress);
      const pulseOpacity = lerp(0.4, 0, pulseProgress);

      ctx.beginPath();
      ctx.strokeStyle = toRgba(EVIDENCE_RGB, pulseOpacity);
      ctx.lineWidth = 1;
      ctx.arc(coreX, coreY, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.shadowBlur = 18;
      ctx.shadowColor = toRgba(EVIDENCE_RGB, 0.45);
      ctx.beginPath();
      ctx.fillStyle = "#D4A791";
      ctx.arc(coreX, coreY, CORE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    updateScroll();
    animationFrame = requestAnimationFrame((timestamp) => {
      lastTimestampRef.current = timestamp;
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
