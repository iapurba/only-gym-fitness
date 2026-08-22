import React from 'react';
import { PEOPLE, DAYS } from '../data';

export default function TeamPage({ onSelect, myProfileId }) {
  const sortedPeople = [...PEOPLE].sort((a, b) => {
    if (a.id === myProfileId) return -1;
    if (b.id === myProfileId) return 1;
    return 0;
  });

  return (
    <div style={{ padding: "16px 16px 90px" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 30, color: "#EAF0FB" }}>The Crew</div>
        <div style={{ fontSize: 13, color: "#5E6E88", marginTop: 2 }}>{PEOPLE.length} members, {PEOPLE.length} routines</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {sortedPeople.map((p) => {
          const daysActive = DAYS.filter((d) => p.plan[d].items.length > 0).length;
          const isMe = p.id === myProfileId;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p.id)}
              style={{
                display: "flex", alignItems: "center", gap: 14, textAlign: "left", cursor: "pointer",
                background: "#0D1826", border: isMe ? `1px solid ${p.color}` : "1px solid #16273B", borderRadius: 14, padding: "13px 14px",
              }}
            >
              <div
                style={{
                  width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
                  background: `${p.color}22`, border: `1.5px solid ${p.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 16, color: p.color,
                }}
              >
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#EAF0FB" }}>
                  {p.name} {isMe && <span style={{ color: "#5E6E88", fontSize: 14, fontWeight: 600 }}>(You)</span>}
                </div>
                <div style={{ fontSize: 12, color: p.color, fontWeight: 600, marginTop: 1 }}>{p.goal}</div>
              </div>
              <div style={{ fontSize: 11, color: "#5E6E88", fontWeight: 600, flexShrink: 0 }}>{daysActive}d/wk</div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M9 6l6 6-6 6" stroke="#445269" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}
