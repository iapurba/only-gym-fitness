export const MUSCLES = {
  Chest: "#4A91EB",
  Back: "#9B6DFF",
  Legs: "#34C87A",
  Shoulders: "#F5A623",
  Arms: "#FF6B9D",
  Core: "#4DD9E8",
  Cardio: "#FF7A59",
};

const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q + " proper form")}`;

export const WORKOUTS = [
  { id: "bench_press", name: "Barbell Bench Press", muscle: "Chest", equipment: "Barbell", video: yt("barbell bench press") },
  { id: "incline_db_press", name: "Incline Dumbbell Press", muscle: "Chest", equipment: "Dumbbell", video: yt("incline dumbbell press") },
  { id: "pushups", name: "Push-ups", muscle: "Chest", equipment: "Bodyweight", video: yt("pushups") },
  { id: "cable_fly", name: "Cable Fly", muscle: "Chest", equipment: "Cable", video: yt("cable fly") },
  { id: "dips", name: "Chest Dips", muscle: "Chest", equipment: "Dip bars", video: yt("chest dips") },

  { id: "pullups", name: "Pull-ups", muscle: "Back", equipment: "Bodyweight", video: yt("pull ups") },
  { id: "barbell_row", name: "Barbell Row", muscle: "Back", equipment: "Barbell", video: yt("barbell row") },
  { id: "lat_pulldown", name: "Lat Pulldown", muscle: "Back", equipment: "Cable", video: yt("lat pulldown") },
  { id: "seated_row", name: "Seated Cable Row", muscle: "Back", equipment: "Cable", video: yt("seated cable row") },
  { id: "deadlift", name: "Deadlift", muscle: "Back", equipment: "Barbell", video: yt("deadlift") },

  { id: "squat", name: "Barbell Squat", muscle: "Legs", equipment: "Barbell", video: yt("barbell squat") },
  { id: "rdl", name: "Romanian Deadlift", muscle: "Legs", equipment: "Barbell", video: yt("romanian deadlift") },
  { id: "leg_press", name: "Leg Press", muscle: "Legs", equipment: "Machine", video: yt("leg press") },
  { id: "lunges", name: "Walking Lunges", muscle: "Legs", equipment: "Dumbbell", video: yt("walking lunges") },
  { id: "leg_curl", name: "Leg Curl", muscle: "Legs", equipment: "Machine", video: yt("leg curl") },
  { id: "calf_raise", name: "Standing Calf Raise", muscle: "Legs", equipment: "Machine", video: yt("standing calf raise") },

  { id: "ohp", name: "Overhead Press", muscle: "Shoulders", equipment: "Barbell", video: yt("overhead press") },
  { id: "lateral_raise", name: "Lateral Raise", muscle: "Shoulders", equipment: "Dumbbell", video: yt("lateral raise") },
  { id: "front_raise", name: "Front Raise", muscle: "Shoulders", equipment: "Dumbbell", video: yt("front raise") },
  { id: "face_pull", name: "Face Pull", muscle: "Shoulders", equipment: "Cable", video: yt("face pull") },
  { id: "arnold_press", name: "Arnold Press", muscle: "Shoulders", equipment: "Dumbbell", video: yt("arnold press") },

  { id: "barbell_curl", name: "Barbell Curl", muscle: "Arms", equipment: "Barbell", video: yt("barbell curl") },
  { id: "hammer_curl", name: "Hammer Curl", muscle: "Arms", equipment: "Dumbbell", video: yt("hammer curl") },
  { id: "tricep_pushdown", name: "Tricep Pushdown", muscle: "Arms", equipment: "Cable", video: yt("tricep pushdown") },
  { id: "skull_crusher", name: "Skull Crushers", muscle: "Arms", equipment: "Barbell", video: yt("skull crushers") },
  { id: "cgbp", name: "Close-Grip Bench Press", muscle: "Arms", equipment: "Barbell", video: yt("close grip bench press") },

  { id: "hanging_leg_raise", name: "Hanging Leg Raise", muscle: "Core", equipment: "Bodyweight", video: yt("hanging leg raise") },
  { id: "plank", name: "Plank", muscle: "Core", equipment: "Bodyweight", video: yt("plank") },
  { id: "cable_crunch", name: "Cable Crunch", muscle: "Core", equipment: "Cable", video: yt("cable crunch") },
  { id: "russian_twist", name: "Russian Twist", muscle: "Core", equipment: "Bodyweight", video: yt("russian twist") },

  { id: "incline_walk", name: "Treadmill Incline Walk", muscle: "Cardio", equipment: "Treadmill", video: yt("treadmill incline walk fat loss") },
  { id: "jump_rope", name: "Jump Rope", muscle: "Cardio", equipment: "Rope", video: yt("jump rope workout") },
  { id: "cycling", name: "Stationary Cycling", muscle: "Cardio", equipment: "Bike", video: yt("stationary bike cardio") },
];

export const W = Object.fromEntries(WORKOUTS.map((w) => [w.id, w]));
export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const item = (id, sets, reps) => ({ ...W[id], sets, reps });

export const PEOPLE = [
  {
    id: "avirup",
    name: "Avirup",
    goal: "Hybrid Athlete",
    color: "#9B6DFF",
    plan: {
      Mon: { focus: "Upper Heavy", items: [item("bench_press", 5, "3-5"), item("barbell_row", 5, "3-5"), item("ohp", 4, "5")] },
      Tue: { focus: "Lower Heavy", items: [item("squat", 5, "3-5"), item("rdl", 4, "5"), item("calf_raise", 3, "10")] },
      Wed: { focus: "Rest", items: [] },
      Thu: { focus: "Upper Volume", items: [item("incline_db_press", 4, "6-8"), item("pullups", 4, "6-8"), item("cgbp", 3, "6-8")] },
      Fri: { focus: "Lower Volume", items: [item("deadlift", 4, "4-6"), item("leg_press", 4, "8"), item("leg_curl", 3, "8-10")] },
      Sat: { focus: "Accessory", items: [item("face_pull", 3, "15"), item("barbell_curl", 3, "8"), item("plank", 3, "60s")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "apurba",
    name: "Apurba",
    goal: "V Taper Aestetic",
    color: "#4A91EB",
    plan: {
      Mon: { focus: "Push", items: [item("bench_press", 4, "6-8"), item("incline_db_press", 3, "8-10"), item("ohp", 3, "8-10"), item("lateral_raise", 4, "12-15"), item("tricep_pushdown", 3, "10-12")] },
      Tue: { focus: "Pull", items: [item("pullups", 4, "6-10"), item("barbell_row", 4, "8-10"), item("lat_pulldown", 3, "10-12"), item("face_pull", 3, "15"), item("barbell_curl", 3, "10-12")] },
      Wed: { focus: "Legs", items: [item("squat", 4, "6-8"), item("rdl", 3, "8-10"), item("leg_press", 3, "10-12"), item("calf_raise", 4, "15")] },
      Thu: { focus: "Push", items: [item("dips", 3, "8-10"), item("cable_fly", 3, "12-15"), item("arnold_press", 3, "8-10"), item("lateral_raise", 4, "15")] },
      Fri: { focus: "Pull", items: [item("deadlift", 3, "5"), item("seated_row", 3, "10-12"), item("hammer_curl", 3, "10-12"), item("plank", 3, "45s")] },
      Sat: { focus: "Legs + Core", items: [item("lunges", 3, "12/leg"), item("leg_curl", 3, "12"), item("hanging_leg_raise", 3, "12"), item("cable_crunch", 3, "15")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "popy",
    name: "Popy",
    goal: "Muscle Building",
    color: "#F5A623",
    plan: {
      Mon: { focus: "Chest", items: [item("bench_press", 4, "8-10"), item("incline_db_press", 4, "10"), item("cable_fly", 3, "12-15"), item("dips", 3, "10")] },
      Tue: { focus: "Back", items: [item("deadlift", 4, "6-8"), item("barbell_row", 4, "8-10"), item("lat_pulldown", 3, "10-12"), item("seated_row", 3, "12")] },
      Wed: { focus: "Legs", items: [item("squat", 4, "8-10"), item("leg_press", 4, "10-12"), item("lunges", 3, "12/leg"), item("calf_raise", 4, "15")] },
      Thu: { focus: "Shoulders", items: [item("ohp", 4, "8-10"), item("lateral_raise", 4, "12-15"), item("front_raise", 3, "12"), item("face_pull", 3, "15")] },
      Fri: { focus: "Arms", items: [item("barbell_curl", 4, "10"), item("skull_crusher", 4, "10"), item("hammer_curl", 3, "12"), item("tricep_pushdown", 3, "12")] },
      Sat: { focus: "Core + Cardio", items: [item("hanging_leg_raise", 3, "12"), item("cable_crunch", 3, "15"), item("cycling", 1, "20 min")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "kushal",
    name: "Kushal",
    goal: "Fat burning & Recomposition",
    color: "#4DD9E8",
    plan: {
      Mon: { focus: "Power + Push", items: [item("bench_press", 4, "5"), item("ohp", 3, "6"), item("dips", 3, "10")] },
      Tue: { focus: "Speed + Legs", items: [item("squat", 4, "5"), item("lunges", 3, "10/leg"), item("jump_rope", 1, "6 min")] },
      Wed: { focus: "Pull + Core", items: [item("pullups", 4, "8"), item("barbell_row", 3, "8"), item("hanging_leg_raise", 3, "12")] },
      Thu: { focus: "Conditioning", items: [item("cycling", 1, "20 min"), item("jump_rope", 1, "8 min"), item("plank", 3, "50s")] },
      Fri: { focus: "Full Body Strength", items: [item("deadlift", 4, "5"), item("incline_db_press", 3, "8"), item("face_pull", 3, "15")] },
      Sat: { focus: "Mobility + Core", items: [item("russian_twist", 3, "20"), item("cable_crunch", 3, "15")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "madhusree",
    name: "Madhusree",
    goal: "Weight Loss",
    color: "#34C87A",
    plan: {
      Mon: { focus: "Full Body Circuit", items: [item("squat", 3, "15"), item("pushups", 3, "12-15"), item("seated_row", 3, "15"), item("jump_rope", 1, "5 min")] },
      Tue: { focus: "Cardio", items: [item("incline_walk", 1, "30 min"), item("plank", 3, "40s")] },
      Wed: { focus: "Full Body Circuit", items: [item("lunges", 3, "12/leg"), item("lat_pulldown", 3, "15"), item("lateral_raise", 3, "15"), item("cable_crunch", 3, "15")] },
      Thu: { focus: "Rest", items: [] },
      Fri: { focus: "Full Body Circuit", items: [item("leg_press", 3, "15"), item("cable_fly", 3, "15"), item("hammer_curl", 3, "12"), item("russian_twist", 3, "20")] },
      Sat: { focus: "Cardio", items: [item("cycling", 1, "30 min"), item("hanging_leg_raise", 3, "10")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "sayani",
    name: "Sayani",
    goal: "Weight Loss & Lower Fat burning",
    color: "#FF6B9D",
    plan: {
      Mon: { focus: "Full Body", items: [item("squat", 3, "10-12"), item("bench_press", 3, "10"), item("seated_row", 3, "12"), item("plank", 3, "45s")] },
      Tue: { focus: "Cardio + Mobility", items: [item("incline_walk", 1, "25 min")] },
      Wed: { focus: "Full Body", items: [item("lunges", 3, "10/leg"), item("lat_pulldown", 3, "12"), item("ohp", 3, "10"), item("russian_twist", 3, "15")] },
      Thu: { focus: "Rest", items: [] },
      Fri: { focus: "Full Body", items: [item("rdl", 3, "10"), item("pushups", 3, "10-12"), item("hammer_curl", 3, "12"), item("cable_crunch", 3, "12")] },
      Sat: { focus: "Cardio", items: [item("cycling", 1, "25 min"), item("jump_rope", 1, "3 min")] },
      Sun: { focus: "Rest", items: [] },
    },
  },
  {
    id: "sanjukta",
    name: "Sanjukta",
    goal: "weight Loss & Upper Fat burning",
    color: "#FF7A59",
    plan: {
      Mon: { focus: "Full Body Circuit", items: [item("squat", 3, "15"), item("pushups", 3, "12-15"), item("seated_row", 3, "15"), item("jump_rope", 1, "5 min")] },
      Tue: { focus: "Cardio", items: [item("incline_walk", 1, "30 min"), item("plank", 3, "40s")] },
      Wed: { focus: "Full Body Circuit", items: [item("lunges", 3, "12/leg"), item("lat_pulldown", 3, "15"), item("lateral_raise", 3, "15"), item("cable_crunch", 3, "15")] },
      Thu: { focus: "Rest", items: [] },
      Fri: { focus: "Full Body Circuit", items: [item("leg_press", 3, "15"), item("cable_fly", 3, "15"), item("hammer_curl", 3, "12"), item("russian_twist", 3, "20")] },
      Sat: { focus: "Cardio", items: [item("cycling", 1, "30 min"), item("hanging_leg_raise", 3, "10")] },
      Sun: { focus: "Rest", items: [] },
    },
  }
];
