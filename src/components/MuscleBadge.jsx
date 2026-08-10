import React from 'react';
import { MUSCLES } from '../data';

export default function MuscleBadge({ muscle }) {
  const color = MUSCLES[muscle] || "#8892A6";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color,
        background: `${color}1a`,
        border: `1px solid ${color}40`,
        borderRadius: 999,
        padding: "3px 9px",
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
      {muscle}
    </span>
  );
}
