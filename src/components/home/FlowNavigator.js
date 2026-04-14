"use client";

import Link from "next/link";

const nodes = [
  { name: "System Architect", x: "50%", y: "50%", type: "core" },

  { name: "About", link: "/about", x: "20%", y: "20%" },
  { name: "Projects", link: "#featured-systems", x: "80%", y: "20%" },
  { name: "Skills", link: "#skills", x: "20%", y: "80%" },
  { name: "Architecture", link: "/architecture", x: "80%", y: "80%" },
  { name: "Lab", link: "/lab", x: "50%", y: "10%" },
  { name: "Contact", link: "/contact", x: "50%", y: "90%" },
];

export default function FlowNavigator() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl mb-10 md:mb-16 glow-text text-center">
        {/* Live System Topology */}

        System Architecture Map
      </h2>

      {/* RESPONSIVE CONTAINER */}
      <div className="relative w-full max-w-[900px] aspect-square md:aspect-[4/3]">

        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#111_1px,transparent_1px)] [background-size:22px_22px] opacity-20 rounded-xl" />

        {/* CORE NODE (YOU) */}
        <div className="absolute left-1/2 top-1/2 w-5 h-5 md:w-6 md:h-6 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full bg-cyan-400 rounded-full animate-ping opacity-60" />
          <div className="absolute inset-1 bg-cyan-300 rounded-full" />
        </div>

        {/* FLOW DOTS */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60" style={{ left: "35%", top: "35%" }} />
          <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40" style={{ left: "65%", top: "25%" }} />
          <div className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-50" style={{ left: "30%", top: "70%" }} />
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40" style={{ left: "70%", top: "70%" }} />
        </div>

        {/* CONNECTION LINES */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="cyan" />
          <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="cyan" />
          <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="cyan" />
          <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="cyan" />
          <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="cyan" />
          <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="cyan" />
        </svg>

        {/* NODES */}
        {nodes.map((n, i) => {
          const isCore = n.type === "core";

          const base = (
            <div
              className={`
                absolute -translate-x-1/2 -translate-y-1/2
                px-3 md:px-5 py-1.5 md:py-2
                rounded-full
                text-[10px] md:text-sm
                border
                transition duration-300
                hover:scale-110 hover:border-cyan-400
                backdrop-blur-md
                text-center whitespace-nowrap
                ${isCore
                  ? "bg-cyan-500 text-black font-bold text-xs md:text-base shadow-lg shadow-cyan-500/30"
                  : "bg-black/60 border-gray-700 text-white"
                }
              `}
              style={{ left: n.x, top: n.y }}
            >
              {n.name}
            </div>
          );

          if (!n.link) return base;

          return (
            <Link key={i} href={n.link}>
              {base}
            </Link>
          );
        })}
      </div>
    </section>
  );
}



