"use client";

import { motion } from "framer-motion";

const domains = [
  "Backend",
  "Cloud",
  "DevOps",
  "System Design",
  "Security",
  "Performance",
  "Observability",
];

export default function OrbitDomains() {
  const radius = 200;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-3xl mb-20">
        Engineering Domains
      </h2>

      <div className="relative w-[500px] h-[500px]">

        {domains.map((domain, i) => {
          const angle = (360 / domains.length) * i;

          return (
            <motion.div
              key={domain}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `rotate(${angle}deg) translateX(${radius}px)`
              }}
            >
              <div className="px-4 py-2 border border-cyan-400 rounded-full text-sm whitespace-nowrap bg-black">
                {domain}
              </div>
            </motion.div>
          );
        })}

        {/* CENTER */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border border-cyan-400 flex items-center justify-center font-bold">
            YC
          </div>
        </div>

      </div>
    </section>
  );
}