import React, { useState } from 'react';
import { DAYS } from '../data';
import WorkoutCard from './WorkoutCard';

export default function PersonRoutine({ person, onBack }) {
  const [day, setDay] = useState(DAYS[0]);
  const dayPlan = person.plan[day];
  const isRest = dayPlan.items.length === 0;

  return (
    <div style={{ padding: "16px 16px 90px" }}>
      <button
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8892A6", fontSize: 13, fontWeight: 600, cursor: "pointer", padding: 0, marginBottom: 16 }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#8892A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Team
      </button>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <div
          style={{
            width: 48, height: 48, borderRadius: "50%",
            background: `${person.color}22`, border: `1.5px solid ${person.color}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: person.color,
          }}
        >
          {person.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 26, color: "#EAF0FB", lineHeight: 1 }}>{person.name}</div>
          <div style={{ fontSize: 12.5, color: person.color, fontWeight: 600, marginTop: 2 }}>{person.goal}</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4, marginBottom: 16 }}>
        {DAYS.map((d) => {
          const active = d === day;
          const rest = person.plan[d].items.length === 0;
          return (
            <button
              key={d}
              onClick={() => setDay(d)}
              style={{
                flexShrink: 0, width: 64, cursor: "pointer", textAlign: "center",
                padding: "9px 4px", borderRadius: 12,
                border: `1px solid ${active ? person.color : "#16273B"}`,
                background: active ? `${person.color}22` : "#0D1826",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: active ? person.color : "#B8C4D9" }}>{d}</div>
              <div style={{ fontSize: 9.5, color: rest ? "#445269" : "#5E6E88", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                {rest ? "Rest" : person.plan[d].focus}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 20, color: "#EAF0FB", marginBottom: 10 }}>
        {day} · {dayPlan.focus}
      </div>

      {isRest ? (
        <div style={{ textAlign: "center", padding: "48px 20px", background: "#0D1826", border: "1px solid #16273B", borderRadius: 14, color: "#5E6E88" }}>
          <div style={{ fontSize: 34, marginBottom: 8 }}>🌙</div>
          Rest day. Recovery is part of the program.
        </div>
      ) : (
        dayPlan.items.map((w, i) => <WorkoutCard key={w.id + i} w={w} sets={w.sets} reps={w.reps} />)
      )}
    </div>
  );
}
