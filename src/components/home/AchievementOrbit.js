// "use client";

// import { motion } from "framer-motion";


// const skills = [
//   "Backend",
//   "Systems",
//   "Cloud",
//   "APIs",
//   "Design",
//   "Scale",
//   "DevOps",
//   "Security",
//   "Data",
//   "AI Systems",
// ];
// export default function AchievementOrbit() {

//   const radius = 200;
//   const total = skills.length;

//   return (
//     // <section className="min-h-screen flex flex-col items-center justify-center">
//     <section className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center px-4">

//       <h2 className="text-3xl mb-16 glow-text">
//       Engineering Focus
//       </h2>

//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: 40,
//           ease: "linear",
//         }}
//         // className="relative w-[500px] h-[500px]"
//         className="relative w-[320px] sm:w-[420px] md:w-[500px] aspect-square"
//       >
//         {skills.map((skill, i) => {

//           const angle = (i / total) * (2 * Math.PI);

//           const x = radius * Math.cos(angle);
//           const y = radius * Math.sin(angle);

//           return (
//             <div
//               key={skill}
//               className="absolute"
//               style={{
//                 left: "50%",
//                 top: "50%",
//                 transform: `translate(${x}px, ${y}px)`,
//               }}
//             >
//               <div className="
//                 px-4 py-2
//                 text-xs
//                 border border-cyan-400
//                 rounded-full
//                 whitespace-nowrap
//                 bg-black/70
//               ">
//                 {skill}
//               </div>
//             </div>
//           );
//         })}

//         {/* CENTER */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-24 h-24 rounded-full border border-cyan-400 glow-border flex items-center justify-center font-bold">
//             Skills
//           </div>
//         </div>

//       </motion.div>
//     </section>
//   );
// }





// version 2



"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "Backend",
  "Systems",
  "Cloud",
  "APIs",
  "Design",
  "Scale",
  "DevOps",
  "Security",
  "Data",
  "AI Systems",
];

/* =========================
   ORBIT RING
========================= */

function OrbitRing({ skills, radius, duration, reverse = false }) {
  const total = skills.length;

  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      className="absolute inset-0"
    >
      {skills.map((skill, i) => {
        const angle = (360 / total) * i;
        const rad = (angle * Math.PI) / 180;

        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <div
            key={skill}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="
                px-4 py-2
                text-xs
                whitespace-nowrap
                rounded-full
                border border-[var(--accent)]/30
                bg-black/40
                backdrop-blur-md
                text-[var(--foreground)]
              "
            >
              {skill}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

/* =========================
   PARTICLE BACKGROUND
========================= */

function ParticleGalaxy() {
  const particles = Array.from({ length: 70 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 1;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "var(--accent)",
              opacity: 0.2,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 6,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function AchievementOrbit() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;

      setIsMobile(w < 768);

      if (w < 360) setScale(0.8);
      else if (w < 480) setScale(0.9);
      else setScale(1);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-[var(--foreground)]">

      {/* BACKGROUND */}
      <ParticleGalaxy />

      {/* SCALE WRAPPER */}
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center",
        }}
      >

        <div className="relative w-[320px] sm:w-[420px] md:w-[520px] lg:w-[700px] aspect-square">

          {/* ORBIT RINGS */}
          <motion.div
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-[110px] rounded-full border border-[var(--accent)]/30"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-[60px] rounded-full border border-[var(--accent)]/30"
          />
          <motion.div
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0 rounded-full border border-[var(--accent)]/40"
          />

          {/* CENTER CORE */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              w-28 h-28 sm:w-32 sm:h-32
              rounded-full
              flex items-center justify-center
              border border-[var(--accent)]/40
              bg-[var(--accent)]/10
              backdrop-blur-xl
              shadow-[0_0_70px_rgba(0,191,255,0.3)]
            "
          >
            <div className="text-center">
              <p className="text-xs text-[var(--accent)]/70">ENGINEERING</p>
              <h3 className="text-sm sm:text-lg font-semibold tracking-widest text-[var(--foreground)]">
                SKILLS
              </h3>
            </div>
          </motion.div>

          {/* ORBITS */}
          <OrbitRing
            skills={skills.slice(0, 4)}
            radius={isMobile ? 100 : 140}
            duration={35}
          />

          <OrbitRing
            skills={skills.slice(4, 7)}
            radius={isMobile ? 160 : 240}
            duration={55}
            reverse
          />

          <OrbitRing
            skills={skills.slice(7, 10)}
            radius={isMobile ? 220 : 320}
            duration={75}
          />

        </div>
      </div>
    </section>
  );
}
