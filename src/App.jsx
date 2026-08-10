import React, { useState } from 'react';
import { PEOPLE } from './data';
import WorkoutsPage from './components/WorkoutsPage';
import TeamPage from './components/TeamPage';
import PersonRoutine from './components/PersonRoutine';

export default function App() {
  const [tab, setTab] = useState("workouts"); // 'workouts' | 'team'
  const [personId, setPersonId] = useState(null);

  const person = PEOPLE.find((p) => p.id === personId);

  return (
    <div
      style={{
        maxWidth: 420, margin: "0 auto", minHeight: "100vh",
        background: "#07101C", fontFamily: "'Inter', sans-serif", position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { display: none; }
        input::placeholder { color: #445269; }
        button:focus-visible, input:focus-visible, a:focus-visible { outline: 2px solid #4A91EB; outline-offset: 2px; }
      `}</style>

      {tab === "workouts" && <WorkoutsPage />}
      {tab === "team" && !person && <TeamPage onSelect={setPersonId} />}
      {tab === "team" && person && <PersonRoutine person={person} onBack={() => setPersonId(null)} />}

      <div
        style={{
          position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 420, background: "#0A1524", borderTop: "1px solid #16273B",
          display: "flex", padding: "10px 20px calc(10px + env(safe-area-inset-bottom))",
        }}
      >
        {[
          { key: "workouts", label: "Workouts", icon: "M4 12h4M10 12h4M16 12h4M6 8v8M18 8v8" },
          { key: "team", label: "Team", icon: "M17 20a5 5 0 00-10 0M12 12a4 4 0 100-8 4 4 0 000 8z" },
        ].map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); if (t.key === "workouts") setPersonId(null); }}
              style={{
                flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                color: active ? "#4A91EB" : "#5E6E88",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d={t.icon} stroke={active ? "#4A91EB" : "#5E6E88"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.02em" }}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
