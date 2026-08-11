import React from 'react';
import { MUSCLES } from '../data';
import MuscleBadge from './MuscleBadge';

export default function WorkoutCard({ w, sets, reps }) {
  const color = MUSCLES[w.muscle] || "#8892A6";
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        background: "#0D1826",
        border: "1px solid #16273B",
        borderLeft: `3px solid ${color}`,
        borderRadius: 12,
        padding: "12px 14px",
        marginBottom: 10,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#EAF0FB", letterSpacing: "0.01em", lineHeight: 1.15 }}>
          {w.name}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6, flexWrap: "wrap" }}>
          <MuscleBadge muscle={w.muscle} />
          <span style={{ fontSize: 12, color: "#5E6E88" }}>
            {w.targetMuscle ? `${w.targetMuscle} / ${w.equipment}` : w.equipment}
          </span>
        </div>
        {(sets || reps) && (
          <div style={{ marginTop: 8, fontSize: 13, color: "#B8C4D9", fontWeight: 600 }}>
            {sets} sets <span style={{ color: "#445269" }}>×</span> {reps} reps
          </div>
        )}
      </div>
      <a
        href={w.video}
        target="_blank"
        rel="noreferrer"
        style={{
          alignSelf: "center",
          flexShrink: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          background: "#152438",
          border: `1px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
        aria-label={`Watch ${w.name} video`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M8 5v14l11-7-11-7z" fill={color} />
        </svg>
      </a>
    </div>
  );
}
