"use client";

import React from "react";

interface FigPanelProps {
  figLabel: string;
  copyTitle: string;
  copyBody: string;
  children: React.ReactNode;
  noBorderRight?: boolean;
}

export default function FigPanel({
  figLabel,
  copyTitle,
  copyBody,
  children,
  noBorderRight,
}: FigPanelProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#08090f",
        borderRight: noBorderRight
          ? "none"
          : "0.5px solid rgba(255,255,255,0.07)",
        overflow: "hidden",
        minHeight: "400px",
      }}
    >
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.18)",
          padding: "14px 18px 0",
          letterSpacing: "0.08em",
        }}
      >
        {figLabel}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 32px",
        }}
      >
        {children}
      </div>
      <div
        style={{
          padding: "20px 24px 28px",
          borderTop: "0.5px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            marginBottom: "5px",
          }}
        >
          {copyTitle}
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.3)",
            lineHeight: 1.65,
          }}
        >
          {copyBody}
        </div>
      </div>
    </div>
  );
}
