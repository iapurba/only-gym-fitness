import React from 'react';

export default function RulesPage() {
  return (
    <div style={{ padding: "16px 16px 90px" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 30, color: "#EAF0FB", letterSpacing: "0.01em" }}>
          Rules & Best Practices
        </div>
        <div style={{ fontSize: 13, color: "#5E6E88", marginTop: 2 }}>Guidelines for the OnlyGym.com crew</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <RuleCard
          icon="🛡️"
          title="Respect the Equipment"
          desc="Always re-rack your weights. Wipe down benches and machines after use. Leave the gym better than you found it."
        />
        <RuleCard
          icon="⏱️"
          title="Be On Time"
          desc="If we plan a group workout, show up on time. Warm up beforehand so we can jump straight into the heavy sets."
        />
        <RuleCard
          icon="💪"
          title="Spotting & Safety"
          desc="Never ego lift. If you're going for a PR, ask a crew member for a spot. Safety comes before numbers."
        />
        <RuleCard
          icon="📝"
          title="Track Your Progress"
          desc="Log your sets and reps. Progressive overload is the key to achieving your goals, whether it's hypertrophy or fat loss."
        />
        <RuleCard
          icon="🤝"
          title="Support the Crew"
          desc="Encourage each other. Everyone is at a different stage of their fitness journey. Celebrate the small wins."
        />
      </div>
    </div>
  );
}

function RuleCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "#0D1826",
        border: "1px solid #16273B",
        borderRadius: 12,
        padding: "16px",
        display: "flex",
        gap: 14,
      }}
    >
      <div style={{ fontSize: 24, flexShrink: 0 }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 18, color: "#EAF0FB", marginBottom: 4 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: "#8892A6", lineHeight: 1.4 }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
