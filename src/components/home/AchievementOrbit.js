"use client";

import { motion } from "framer-motion";


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
export default function AchievementOrbit() {

  const radius = 200;
  const total = skills.length;

  return (
    // <section className="min-h-screen flex flex-col items-center justify-center">
    <section className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center px-4">

      <h2 className="text-3xl mb-16 glow-text">
      Engineering Focus
      </h2>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        // className="relative w-[500px] h-[500px]"
        className="relative w-[320px] sm:w-[420px] md:w-[500px] aspect-square"
      >
        {skills.map((skill, i) => {

          const angle = (i / total) * (2 * Math.PI);

          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={skill}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="
                px-4 py-2
                text-xs
                border border-cyan-400
                rounded-full
                whitespace-nowrap
                bg-black/70
              ">
                {skill}
              </div>
            </div>
          );
        })}

        {/* CENTER */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-cyan-400 glow-border flex items-center justify-center font-bold">
            Skills
          </div>
        </div>

      </motion.div>
    </section>
  );
}