import React, { useState } from 'react';
import { PEOPLE } from './data';
import WorkoutsPage from './components/WorkoutsPage';
import TeamPage from './components/TeamPage';
import PersonRoutine from './components/PersonRoutine';
import RulesPage from './components/RulesPage';
import logo from './assets/only-gym-brand.png';

function Header() {
  return (
    <div
      style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 420, zIndex: 50,
        background: "rgba(7, 16, 28, 0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #16273B",
        padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}
    >
      <img src={logo} alt="OnlyGym Logo" style={{ height: 42, width: "auto", borderRadius: 8, flexShrink: 0 }} />
      
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 24, color: "#EAF0FB", letterSpacing: "0.02em", flex: 1, textAlign: "center" }}>
        OnlyGym.com
      </div>
      
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, color: "#8892A6", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "right", lineHeight: 1.2, flexShrink: 0 }}>
        <div>Hardwork.</div>
        <div>Discipline.</div>
        <div>Result.</div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("workouts"); // 'workouts' | 'team' | 'rules'
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

      <Header />

      <div style={{ paddingTop: 60 }}>
        {tab === "workouts" && <WorkoutsPage />}
        {tab === "team" && !person && <TeamPage onSelect={setPersonId} />}
        {tab === "team" && person && <PersonRoutine person={person} onBack={() => setPersonId(null)} />}
        {tab === "rules" && <RulesPage />}
      </div>

      <div
        style={{
          position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "100%", maxWidth: 420, background: "#0A1524", borderTop: "1px solid #16273B",
          display: "flex", padding: "10px 20px calc(10px + env(safe-area-inset-bottom))",
        }}
      >
        {[
          { key: "workouts", label: "Workouts", icon: "M5 12h14 M5 8v8 M2 10v4 M19 8v8 M22 10v4" },
          { key: "team", label: "Team", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
          { key: "rules", label: "Rules", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
        ].map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); if (t.key !== "team") setPersonId(null); }}
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
