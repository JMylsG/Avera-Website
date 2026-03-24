"use client";

export default function LedgerScene3D() {
  return (
    <div className="ls3d-root">
      <style>{`
        @keyframes ls3d-drift {
          0%   { transform: rotateX(48deg) rotateZ(-16deg) translate(0px, 0px); }
          20%  { transform: rotateX(49deg) rotateZ(-16.5deg) translate(-12px, 8px); }
          40%  { transform: rotateX(47.5deg) rotateZ(-15.5deg) translate(-28px, 18px); }
          60%  { transform: rotateX(48.5deg) rotateZ(-16.8deg) translate(-18px, 24px); }
          80%  { transform: rotateX(47deg) rotateZ(-15deg) translate(-8px, 12px); }
          100% { transform: rotateX(48deg) rotateZ(-16deg) translate(0px, 0px); }
        }
        @keyframes ls3d-breathe {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.92; }
        }
        @keyframes ls3d-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(230,162,60,0.5); }
          50%       { opacity: 0.7; box-shadow: 0 0 0 3px rgba(230,162,60,0); }
        }
        .ls3d-root {
          position: absolute;
          inset: 0;
          overflow: hidden;
          perspective: 1200px;
        }
        .ls3d-board {
          position: absolute;
          width: 1800px;
          height: 1400px;
          top: -200px;
          left: -200px;
          transform: rotateX(48deg) rotateZ(-16deg);
          transform-style: preserve-3d;
          animation: ls3d-drift 12s ease-in-out infinite, ls3d-breathe 6s ease-in-out infinite;
        }
        .ls3d-card {
          position: absolute;
          background: #0d1018;
          border: 0.5px solid rgba(125,149,224,0.22);
          border-radius: 6px;
          padding: 10px 12px;
          box-sizing: border-box;
        }
        .ls3d-card-wide { width: 280px; }
        .ls3d-card-med  { width: 200px; }
        .ls3d-card-slim { width: 150px; }
        .ls3d-card-hash { width: 160px; }
        .ls3d-dev-label {
          font-size: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(125,149,224,0.5);
          margin-bottom: 8px;
        }
        .ls3d-dev-row {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 4px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.04);
        }
        .ls3d-dev-row:last-child { border-bottom: none; }
        .ls3d-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .ls3d-dot-approved { background: #4caf79; }
        .ls3d-dot-pending {
          background: #e6a23c;
          animation: ls3d-pulse 1.8s ease-in-out infinite;
        }
        .ls3d-dot-unknown { background: rgba(255,255,255,0.2); }
        .ls3d-dev-name {
          font-size: 8px;
          font-family: ui-monospace, monospace;
          color: rgba(255,255,255,0.6);
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ls3d-tag {
          font-size: 7px;
          padding: 1px 5px;
          border-radius: 2px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .ls3d-tag-approved { color: rgba(76,175,121,0.9);  background: rgba(76,175,121,0.1); }
        .ls3d-tag-pending  { color: rgba(230,162,60,0.9);  background: rgba(230,162,60,0.1); }
        .ls3d-tag-unknown  { color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.05); }
        .ls3d-ev-label {
          font-size: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(212,167,145,0.5);
          margin-bottom: 8px;
        }
        .ls3d-ev-row {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 3px 0;
          border-bottom: 0.5px solid rgba(255,255,255,0.04);
        }
        .ls3d-ev-row:last-child { border-bottom: none; }
        .ls3d-ev-hash {
          font-size: 8px;
          font-family: ui-monospace, monospace;
          color: rgba(212,167,145,0.5);
          width: 48px;
          flex-shrink: 0;
        }
        .ls3d-ev-hash-bright { color: rgba(212,167,145,0.75); }
        .ls3d-ev-text {
          font-size: 9px;
          color: rgba(255,255,255,0.5);
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ls3d-ev-seq {
          font-size: 8px;
          font-family: ui-monospace, monospace;
          color: rgba(255,255,255,0.18);
          flex-shrink: 0;
        }
        .ls3d-hash-row {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
        .ls3d-hash-block {
          background: #111520;
          border: 0.5px solid rgba(125,149,224,0.2);
          border-radius: 3px;
          padding: 4px 7px;
          font-size: 7px;
          font-family: ui-monospace, monospace;
          color: rgba(125,149,224,0.7);
        }
        .ls3d-hash-block-terra {
          border-color: rgba(212,167,145,0.3);
          color: rgba(212,167,145,0.75);
        }
        .ls3d-hash-arrow {
          font-size: 9px;
          color: rgba(255,255,255,0.15);
        }
        .ls3d-comp-sub {
          font-size: 7px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 6px;
        }
        .ls3d-comp-level {
          font-size: 16px;
          font-weight: 500;
          color: #4caf79;
        }
        .ls3d-comp-bar {
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 1px;
          margin-top: 8px;
          overflow: hidden;
        }
        .ls3d-comp-fill {
          width: 92%;
          height: 100%;
          background: #4caf79;
          border-radius: 1px;
        }
        .ls3d-q-line {
          font-size: 9px;
          font-family: ui-monospace, monospace;
          padding: 3px 7px;
          border-radius: 2px;
          background: rgba(125,149,224,0.08);
          color: rgba(125,149,224,0.85);
          border-left: 1.5px solid rgba(125,149,224,0.45);
          margin-bottom: 4px;
        }
        .ls3d-q-time {
          font-size: 7px;
          color: rgba(255,255,255,0.18);
          padding: 1px 7px;
          font-family: ui-monospace, monospace;
          margin-bottom: 3px;
        }
        .ls3d-q-result {
          font-size: 9px;
          font-family: ui-monospace, monospace;
          padding: 3px 7px;
          border-radius: 2px;
          background: rgba(212,167,145,0.07);
          color: rgba(212,167,145,0.8);
          border-left: 1.5px solid rgba(212,167,145,0.4);
        }
      `}</style>

      <div className="ls3d-board">

        {/* ── Row A ── top: 20px, opacity: 0.10 */}
        <div style={{ position: "absolute", top: "20px", width: "100%", opacity: 0.10 }}>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "20px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "320px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">a3f…091</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#198</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7c2…44d</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#199</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "540px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">b9e…f12</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">2d1…c88</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "720px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">imaging-unit-b2</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">nurse-station-3b</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "940px" }}>
            <div className="ls3d-q-line">devices on Mar 15</div>
            <div className="ls3d-q-time">12 ms · seq #211</div>
            <div className="ls3d-q-result">14 devices · 2 pending</div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "1160px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">8e4…771</span><span className="ls3d-ev-text">Identity correlated across interface change</span><span className="ls3d-ev-seq">#200</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">f3c…bb2</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#201</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">c4d…f01</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#202</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1460px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">9a1…e55</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">4b7…d92</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">e1f…308</span>
            </div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "1640px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#4caf79", lineHeight: 1, marginBottom: "4px" }}>5</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Continuous</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "92%", height: "100%", background: "#4caf79", borderRadius: "1px" }} /></div>
          </div>
        </div>

        {/* ── Row B ── top: 130px, opacity: 0.16 */}
        <div style={{ position: "absolute", top: "130px", width: "100%", opacity: 0.16 }}>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "80px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">7a9…c14</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">b2e…f88</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "260px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">admin-laptop-07</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">ehr-terminal-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">xray-workstation-02</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">billing-pc-north</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "560px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">c1a…339</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#203</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f9b…221</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#204</span></div>
          </div>
          {/* Query slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "780px" }}>
            <div className="ls3d-q-line">devices on Feb 28</div>
            <div className="ls3d-q-time">8 ms · seq #212</div>
            <div className="ls3d-q-result">11 devices · 0 gaps</div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "950px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-printer-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">checkout-kiosk-3</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1170px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">a3f…091</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">7c2…44d</span>
            </div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "1350px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">b9e…f12</span><span className="ls3d-ev-text">Approval workflow triggered</span><span className="ls3d-ev-seq">#205</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">2d1…c88</span><span className="ls3d-ev-text">Device state changed · offline</span><span className="ls3d-ev-seq">#206</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">8e4…771</span><span className="ls3d-ev-text">Timeline continuity confirmed</span><span className="ls3d-ev-seq">#207</span></div>
          </div>
        </div>

        {/* ── Row C ── top: 250px, opacity: 0.24 */}
        <div style={{ position: "absolute", top: "250px", width: "100%", opacity: 0.24 }}>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "0px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f3c…bb2</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#208</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">c4d…f01</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#209</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">9a1…e55</span><span className="ls3d-ev-text">Identity correlated across interface change</span><span className="ls3d-ev-seq">#210</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "300px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">4b7…d92</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">e1f…308</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "480px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-unknown" /><span className="ls3d-dev-name">00:1A:2B:3C:4D:5E</span><span className="ls3d-tag ls3d-tag-unknown">unknown</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">192.168.1.47</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "780px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#4caf79", lineHeight: 1, marginBottom: "4px" }}>5</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Continuous</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "92%", height: "100%", background: "#4caf79", borderRadius: "1px" }} /></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "950px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7a9…c14</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#211</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">b2e…f88</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#212</span></div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1170px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1390px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">c1a…339</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">f9b…221</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">a3f…091</span>
            </div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1570px" }}>
            <div className="ls3d-q-line">Mar 1–15 range</div>
            <div className="ls3d-q-time">15 ms · seq #213</div>
            <div className="ls3d-q-result">28 devices · 1 resolved</div>
          </div>
        </div>

        {/* ── Row D ── top: 370px, opacity: 0.38 */}
        <div style={{ position: "absolute", top: "370px", width: "100%", opacity: 0.38 }}>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "40px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">imaging-unit-b2</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">nurse-station-3b</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "260px" }}>
            <div className="ls3d-q-line">breach scope · Jan 9</div>
            <div className="ls3d-q-time">9 ms · seq #214</div>
            <div className="ls3d-q-result">6 devices · clinical subnet</div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "480px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">7c2…44d</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">b9e…f12</span>
            </div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "660px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">2d1…c88</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#213</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">8e4…771</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#214</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f3c…bb2</span><span className="ls3d-ev-text">Approval workflow triggered</span><span className="ls3d-ev-seq">#215</span></div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "960px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">admin-laptop-07</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">ehr-terminal-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">xray-workstation-02</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-printer-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1260px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">c4d…f01</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">9a1…e55</span>
            </div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "1440px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#4caf79", lineHeight: 1, marginBottom: "4px" }}>5</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Continuous</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "92%", height: "100%", background: "#4caf79", borderRadius: "1px" }} /></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1610px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">4b7…d92</span><span className="ls3d-ev-text">Device state changed · offline</span><span className="ls3d-ev-seq">#216</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">e1f…308</span><span className="ls3d-ev-text">Timeline continuity confirmed</span><span className="ls3d-ev-seq">#217</span></div>
          </div>
        </div>

        {/* ── Row E ── top: 490px, opacity: 0.55 */}
        <div style={{ position: "absolute", top: "490px", width: "100%", opacity: 0.55 }}>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "0px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">7a9…c14</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">b2e…f88</span>
            </div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "180px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">c1a…339</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#198</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">f9b…221</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#199</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">a3f…091</span><span className="ls3d-ev-text">Identity correlated across interface change</span><span className="ls3d-ev-seq">#200</span></div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "480px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">billing-pc-north</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">checkout-kiosk-3</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "700px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">7c2…44d</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">b9e…f12</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">2d1…c88</span>
            </div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "880px" }}>
            <div className="ls3d-q-line">devices on Mar 15</div>
            <div className="ls3d-q-time">12 ms · seq #201</div>
            <div className="ls3d-q-result">14 devices · 2 pending</div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "1100px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-unknown" /><span className="ls3d-dev-name">00:1A:2B:3C:4D:5E</span><span className="ls3d-tag ls3d-tag-unknown">unknown</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1400px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">8e4…771</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#201</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">f3c…bb2</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#202</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1620px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">c4d…f01</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">9a1…e55</span>
            </div>
          </div>
        </div>

        {/* ── Row F ── top: 610px, opacity: 0.72 */}
        <div style={{ position: "absolute", top: "610px", width: "100%", opacity: 0.72 }}>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "60px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">imaging-unit-b2</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">nurse-station-3b</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "360px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#7D95E0", lineHeight: 1, marginBottom: "4px" }}>4</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Verified</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "74%", height: "100%", background: "#7D95E0", borderRadius: "1px" }} /></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "530px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">4b7…d92</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">e1f…308</span>
            </div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "710px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7a9…c14</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#203</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">b2e…f88</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#204</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">c1a…339</span><span className="ls3d-ev-text">Approval workflow triggered</span><span className="ls3d-ev-seq">#205</span></div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1010px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">admin-laptop-07</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">ehr-terminal-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Query slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "1230px" }}>
            <div className="ls3d-q-line">devices on Feb 28</div>
            <div className="ls3d-q-time">8 ms · seq #206</div>
            <div className="ls3d-q-result">11 devices · 0 gaps</div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1400px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">f9b…221</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">a3f…091</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1580px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">xray-workstation-02</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">billing-pc-north</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
          </div>
        </div>

        {/* ── Row G ── top: 730px, opacity: 0.85 */}
        <div style={{ position: "absolute", top: "730px", width: "100%", opacity: 0.85 }}>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "20px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7c2…44d</span><span className="ls3d-ev-text">Device state changed · offline</span><span className="ls3d-ev-seq">#206</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">b9e…f12</span><span className="ls3d-ev-text">Timeline continuity confirmed</span><span className="ls3d-ev-seq">#207</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "240px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">2d1…c88</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">8e4…771</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "420px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-printer-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">checkout-kiosk-3</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">192.168.1.47</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "720px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f3c…bb2</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#208</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">c4d…f01</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#209</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">9a1…e55</span><span className="ls3d-ev-text">Identity correlated across interface change</span><span className="ls3d-ev-seq">#210</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1020px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">4b7…d92</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">e1f…308</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">7a9…c14</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1200px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "1420px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#4caf79", lineHeight: 1, marginBottom: "4px" }}>5</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Continuous</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "92%", height: "100%", background: "#4caf79", borderRadius: "1px" }} /></div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1590px" }}>
            <div className="ls3d-q-line">Mar 1–15 range</div>
            <div className="ls3d-q-time">15 ms · seq #212</div>
            <div className="ls3d-q-result">28 devices · 1 resolved</div>
          </div>
        </div>

        {/* ── Row H ── top: 850px, opacity: 0.80 */}
        <div style={{ position: "absolute", top: "850px", width: "100%", opacity: 0.80 }}>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "80px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">b2e…f88</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">c1a…339</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "260px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">imaging-unit-b2</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">nurse-station-3b</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "480px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f9b…221</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#211</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">a3f…091</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#212</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7c2…44d</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#213</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "780px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">b9e…f12</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">2d1…c88</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "960px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">admin-laptop-07</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">ehr-terminal-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">xray-workstation-02</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1260px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">8e4…771</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#214</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">f3c…bb2</span><span className="ls3d-ev-text">Approval workflow triggered</span><span className="ls3d-ev-seq">#215</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1480px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">c4d…f01</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">9a1…e55</span>
            </div>
          </div>
        </div>

        {/* ── Row I ── top: 970px, opacity: 0.62 */}
        <div style={{ position: "absolute", top: "970px", width: "100%", opacity: 0.62 }}>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "0px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">billing-pc-north</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-printer-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">checkout-kiosk-3</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "300px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">4b7…d92</span><span className="ls3d-ev-text">Device state changed · offline</span><span className="ls3d-ev-seq">#216</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">e1f…308</span><span className="ls3d-ev-text">Timeline continuity confirmed</span><span className="ls3d-ev-seq">#217</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "520px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">7a9…c14</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">b2e…f88</span>
            </div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "700px" }}>
            <div className="ls3d-q-line">breach scope · Jan 9</div>
            <div className="ls3d-q-time">9 ms · seq #198</div>
            <div className="ls3d-q-result">6 devices · clinical subnet</div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "920px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-unknown" /><span className="ls3d-dev-name">00:1A:2B:3C:4D:5E</span><span className="ls3d-tag ls3d-tag-unknown">unknown</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">192.168.1.47</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1140px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">c1a…339</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">f9b…221</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">a3f…091</span>
            </div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "1320px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7c2…44d</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#198</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">b9e…f12</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#199</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">2d1…c88</span><span className="ls3d-ev-text">Identity correlated across interface change</span><span className="ls3d-ev-seq">#200</span></div>
          </div>
        </div>

        {/* ── Row J ── top: 1090px, opacity: 0.42 */}
        <div style={{ position: "absolute", top: "1090px", width: "100%", opacity: 0.42 }}>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "40px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">8e4…771</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">f3c…bb2</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "220px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "440px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">c4d…f01</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#201</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">9a1…e55</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#202</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">4b7…d92</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#203</span></div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "740px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">imaging-unit-b2</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">nurse-station-3b</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1040px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">e1f…308</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">7a9…c14</span>
            </div>
          </div>
          {/* Compliance slim */}
          <div className="ls3d-card ls3d-card-slim" style={{ left: "1220px" }}>
            <div style={{ fontSize: "20px", fontWeight: 600, color: "#7D95E0", lineHeight: 1, marginBottom: "4px" }}>4</div>
            <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.25)", marginBottom: "6px" }}>Verified</div>
            <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}><div style={{ width: "74%", height: "100%", background: "#7D95E0", borderRadius: "1px" }} /></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1390px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">b2e…f88</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#204</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">c1a…339</span><span className="ls3d-ev-text">Approval workflow triggered</span><span className="ls3d-ev-seq">#205</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1610px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">f9b…221</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">a3f…091</span>
            </div>
          </div>
        </div>

        {/* ── Row K ── top: 1210px, opacity: 0.24 */}
        <div style={{ position: "absolute", top: "1210px", width: "100%", opacity: 0.24 }}>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "60px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">7c2…44d</span><span className="ls3d-ev-text">Device state changed · offline</span><span className="ls3d-ev-seq">#206</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">b9e…f12</span><span className="ls3d-ev-text">Timeline continuity confirmed</span><span className="ls3d-ev-seq">#207</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "280px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">2d1…c88</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">8e4…771</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "460px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">admin-laptop-07</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">ehr-terminal-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">xray-workstation-02</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "760px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">f3c…bb2</span><span className="ls3d-ev-text">Device observed on clinical subnet</span><span className="ls3d-ev-seq">#208</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">c4d…f01</span><span className="ls3d-ev-text">Authorization granted · admin@clinic</span><span className="ls3d-ev-seq">#209</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">9a1…e55</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#210</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1060px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">4b7…d92</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">e1f…308</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1240px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-pending" /><span className="ls3d-dev-name">billing-pc-north</span><span className="ls3d-tag ls3d-tag-pending">pending</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-printer-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Query med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1460px" }}>
            <div className="ls3d-q-line">devices on Mar 15</div>
            <div className="ls3d-q-time">12 ms · seq #211</div>
            <div className="ls3d-q-result">14 devices · 2 pending</div>
          </div>
        </div>

        {/* ── Row L ── top: 1330px, opacity: 0.12 */}
        <div style={{ position: "absolute", top: "1330px", width: "100%", opacity: 0.12 }}>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "20px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">7a9…c14</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">b2e…f88</span>
            </div>
          </div>
          {/* Device med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "200px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">checkout-kiosk-3</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">192.168.1.47</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "420px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">c1a…339</span><span className="ls3d-ev-text">Compliance record generated · HIPAA</span><span className="ls3d-ev-seq">#211</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">f9b…221</span><span className="ls3d-ev-text">Ledger integrity verified</span><span className="ls3d-ev-seq">#212</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "640px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block ls3d-hash-block-terra">a3f…091</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block">7c2…44d</span>
            </div>
          </div>
          {/* Device wide */}
          <div className="ls3d-card ls3d-card-wide" style={{ left: "820px" }}>
            <div className="ls3d-dev-label">Devices</div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">dr-smith-laptop</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">reception-pc-01</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
            <div className="ls3d-dev-row"><span className="ls3d-dot ls3d-dot-approved" /><span className="ls3d-dev-name">lab-workstation-a</span><span className="ls3d-tag ls3d-tag-approved">approved</span></div>
          </div>
          {/* Evidence med */}
          <div className="ls3d-card ls3d-card-med" style={{ left: "1120px" }}>
            <div className="ls3d-ev-label">Evidence</div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash">b9e…f12</span><span className="ls3d-ev-text">Policy pack applied</span><span className="ls3d-ev-seq">#213</span></div>
            <div className="ls3d-ev-row"><span className="ls3d-ev-hash ls3d-ev-hash-bright">2d1…c88</span><span className="ls3d-ev-text">New device detected on subnet</span><span className="ls3d-ev-seq">#214</span></div>
          </div>
          {/* Hash */}
          <div className="ls3d-card ls3d-card-hash" style={{ left: "1340px" }}>
            <div className="ls3d-hash-row">
              <span className="ls3d-hash-block">8e4…771</span>
              <span className="ls3d-hash-arrow">→</span>
              <span className="ls3d-hash-block ls3d-hash-block-terra">f3c…bb2</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
