import React, { useState, useMemo } from 'react';
import { WORKOUTS, MUSCLES } from '../data';
import WorkoutCard from './WorkoutCard';

export default function WorkoutsPage() {
  const [query, setQuery] = useState("");
  const [muscleFilter, setMuscleFilter] = useState("All");

  const filtered = useMemo(() => {
    return WORKOUTS.filter((w) => {
      const matchesQuery =
        query.trim() === "" ||
        w.name.toLowerCase().includes(query.toLowerCase()) ||
        w.muscle.toLowerCase().includes(query.toLowerCase());
      const matchesMuscle = muscleFilter === "All" || w.muscle === muscleFilter;
      return matchesQuery && matchesMuscle;
    });
  }, [query, muscleFilter]);

  return (
    <div style={{ padding: "16px 16px 90px" }}>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 30, color: "#EAF0FB", letterSpacing: "0.01em" }}>
          Workout Library
        </div>
        <div style={{ fontSize: 13, color: "#5E6E88", marginTop: 2 }}>{WORKOUTS.length} exercises across {Object.keys(MUSCLES).length} muscle groups</div>
      </div>

      <div style={{ position: "relative", marginBottom: 12 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }}>
          <circle cx="11" cy="11" r="7" stroke="#5E6E88" strokeWidth="2" />
          <path d="M21 21l-4.3-4.3" stroke="#5E6E88" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search exercise or muscle..."
          style={{
            width: "100%",
            boxSizing: "border-box",
            background: "#0D1826",
            border: "1px solid #16273B",
            borderRadius: 12,
            padding: "12px 14px 12px 38px",
            color: "#EAF0FB",
            fontSize: 14,
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, marginBottom: 14 }}>
        {["All", ...Object.keys(MUSCLES)].map((m) => {
          const active = muscleFilter === m;
          const color = MUSCLES[m] || "#4A91EB";
          return (
            <button
              key={m}
              onClick={() => setMuscleFilter(m)}
              style={{
                flexShrink: 0,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                padding: "7px 13px",
                borderRadius: 999,
                border: `1px solid ${active ? color : "#16273B"}`,
                background: active ? `${color}22` : "transparent",
                color: active ? color : "#8892A6",
              }}
            >
              {m}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0", color: "#5E6E88", fontSize: 14 }}>
          No exercises match "{query}". Try a different search or filter.
        </div>
      ) : (
        filtered.map((w) => <WorkoutCard key={w.id} w={w} />)
      )}
    </div>
  );
}
