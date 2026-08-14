import React, { useState } from 'react';
import { DAYS } from '../data';
import WorkoutCard from './WorkoutCard';

export default function PersonRoutine({ person, onBack }) {
  const [day, setDay] = useState(() => {
    const todayIndex = new Date().getDay();
    const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;
    return DAYS[adjustedIndex] || DAYS[0];
  });
  const dayPlan = person.plan[day];
  const isRest = dayPlan.items.length === 0;

  const generateShareText = () => {
    let text = `🏋️‍♂️ *${person.name}'s Routine* - ${person.goal}\n\n`;
    DAYS.forEach(d => {
      const p = person.plan[d];
      text += `*${d}* - ${p.focus}\n`;
      if (p.items.length === 0) {
        text += `  🌙 Rest day\n`;
      } else {
        p.items.forEach(w => {
          text += `  • ${w.name}: ${w.sets} sets x ${w.reps}\n`;
        });
      }
      text += `\n`;
    });
    return text;
  };

  const handleShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(generateShareText())}`;
    window.open(url, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateShareText()).then(() => {
      alert("Routine copied to clipboard!");
    });
  };

  return (
    <div style={{ padding: "16px 16px 90px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <button
          onClick={onBack}
          style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#8892A6", fontSize: 13, fontWeight: 600, cursor: "pointer", padding: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#8892A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Team
        </button>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={handleCopy}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "#16273B", border: "none", color: "#B8C4D9", fontSize: 13, fontWeight: 700, cursor: "pointer", padding: "6px 12px", borderRadius: 16 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button
            onClick={handleShare}
            style={{ display: "flex", alignItems: "center", gap: 6, background: "#25D366", border: "none", color: "#000", fontSize: 13, fontWeight: 700, cursor: "pointer", padding: "6px 12px", borderRadius: 16 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Share
          </button>
        </div>
      </div>

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
