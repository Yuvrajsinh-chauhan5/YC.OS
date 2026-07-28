"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "June 2026 – July 2026",
    role: "Java Backend Development Intern",
    company: "Keyanna Technology Private Limited",
    type: "Internship",
    description:
      "Worked on an enterprise digital payment and wallet management platform, contributing to the ticket management microservice using Java, Spring Boot, and microservice architecture.",
  },
  {
    period: "Jan 2025 – Apr 2025",
    role: "Backend Developer",
    company: "Gandhinagar University",
    type: "Part-time",
    description:
      "Contributed to the development of the institute's Cultural & Technical Fest 2025 registration platform, focusing on backend workflows, OTP authentication, and database-driven user management.",
  },
  {
    period: "2024 – 2025",
    role: "Team Lead",
    company: "Smart India Hackathon (SIH)",
    type: "Hackathon",
    description:
      "Led multidisciplinary student teams across SIH 2024 and 2025 project selections, driving technical decisions, system architecture, task planning, and end-to-end prototype development.",
  },
];

export default function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 mb-3">
            Career Timeline
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#e5e5e5] glow-text">
            Experience
          </h2>

          <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#e5e5e5]/60 leading-relaxed">
            A quick overview of my professional experience, backend development
            work, and technical leadership.
          </p>
        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="relative">

          {/* TIMELINE */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cyan-400/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">

            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${experience.company}-${experience.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >

                  {/* TIMELINE DOT */}
                  <div className="absolute left-0 top-7 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div className="w-[15px] h-[15px] rounded-full border-2 border-cyan-400 bg-[#050505] shadow-[0_0_15px_rgba(0,191,255,0.7)]" />
                  </div>

                  {/* PERIOD */}
                  <div
                    className={`
                      hidden md:flex items-center
                      ${
                        isEven
                          ? "justify-end text-right"
                          : "order-2 justify-start text-left"
                      }
                    `}
                  >
                    <div>
                      <p className="text-sm text-cyan-400 font-medium">
                        {experience.period}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/40">
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  {/* CARD */}
                  <div
                    className={`
                      pl-10 md:pl-0
                      ${isEven ? "md:order-2" : "md:order-1"}
                    `}
                  >

                    {/* MOBILE PERIOD */}
                    <div className="md:hidden mb-4">
                      <p className="text-sm text-cyan-400 font-medium">
                        {experience.period}
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/40">
                        {experience.type}
                      </p>
                    </div>

                    <motion.div
                      whileHover={{
                        y: -5,
                        borderColor: "rgba(0,191,255,0.5)",
                        boxShadow:
                          "0 0 30px rgba(0,191,255,0.08)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="
                        relative
                        rounded-2xl
                        border border-cyan-400/15
                        bg-white/[0.02]
                        backdrop-blur-xl
                        p-6 sm:p-8
                      "
                    >

                      {/* TOP ACCENT */}
                      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                      {/* ROLE */}
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#e5e5e5]">
                        {experience.role}
                      </h3>

                      {/* COMPANY */}
                      <p className="mt-2 text-sm text-cyan-400">
                        {experience.company}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-5 text-sm leading-7 text-[#e5e5e5]/60">
                        {experience.description}
                      </p>

                    </motion.div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* FULL EXPERIENCE LINK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/experience"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-cyan-400
              hover:text-white
              transition-colors
            "
          >
            View Full Experience
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}