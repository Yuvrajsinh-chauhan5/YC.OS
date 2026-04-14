export default function LabPage() {
  const experiments = [
    {
      title: "Frontend Systems Lab",
      description:
        "UI/UX experimentation with modern web interfaces and motion systems.",
      items: [
        "Netflix UI Clone (Component Architecture Study)",
        "Spotify UI Player (State + Audio Handling)",
        "Glassmorphism & Cyber UI Systems",
        "Advanced Scroll & Hover Animations",
      ],
    },
    {
      title: "Backend Systems Lab",
      description:
        "Testing scalable backend logic, authentication flows, and APIs.",
      items: [
        "JWT Authentication Flow Experiments",
        "REST API Stress Testing",
        "Microservice Communication Mocking",
        "Secure Session Handling Patterns",
      ],
    },
    {
      title: "AI & Intelligence Lab",
      description:
        "Exploration of ML, recommendation systems, and intelligent tools.",
      items: [
        "Resume Scoring Prototype (AI-based logic)",
        "Recommendation System Experiments",
        "Chatbot Flow Design",
        "Smart Travel Itinerary Engine (Early Prototype)",
      ],
    },
  ];

  const recent = [
    "Real-time chat system using WebSockets",
    "Particle-based interactive hero UI engine",
    "Microservice authentication architecture simulation",
    "AI-based resume evaluator prototype",
    "Dashboard analytics UI system design",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <section className="space-y-5">
          <h1 className="text-5xl font-bold">
            Engineering Lab
          </h1>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            A controlled experimentation environment where I design, test, and refine
            frontend systems, backend architectures, and AI-powered prototypes before
            integrating them into production-level projects.
          </p>
        </section>

        {/* EXPERIMENT CARDS */}
        <section className="grid md:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-gray-800 bg-white/5 hover:border-cyan-500 transition"
            >
              <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                {exp.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {exp.description}
              </p>

              <ul className="space-y-2 text-gray-300 text-sm">
                {exp.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-cyan-400">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* RECENT SYSTEM EXPERIMENTS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Recent System Experiments
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {recent.map((r, i) => (
              <div
                key={i}
                className="p-4 border border-gray-800 rounded-lg bg-white/5 text-gray-300"
              >
                ▹ {r}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="text-center text-gray-600 text-sm">
          Every experiment here is isolated, iterative, and designed for system-level learning before production use.
        </section>

      </div>
    </div>
  );
}