"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

/* =========================================================
   YC.OS — RECRUITER MODE
   Self-contained recruiter briefing page.
========================================================= */

const profile = {
  name: "Yuvrajsinh Chauhan",
  title: "Software Engineer",
  stage: "2027 Graduate",

  education: {
    degree: "B.Tech Computer Engineering",
    institution: "Gandhinagar Institute of Technology",
    university: "Gandhinagar University",
    graduation: "June 2027",
    cgpa: "9.3 / 10",
  },

  summary:
    "Backend-focused software engineering student building scalable web, cloud, microservices, and AI-enabled systems. Strongest areas include Java/Spring Boot, Node.js, REST APIs, distributed workflows, databases, and system-oriented application architecture.",

  focus: [
    "Backend Engineering",
    "Full-Stack Development",
    "Cloud & Distributed Systems",
    "Microservices",
    "System Design",
    "Agentic AI",
  ],

  stack: [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Node.js",
    "JavaScript",
    "React",
    "REST APIs",
    "Microservices",
    "API Gateway",
    "Kafka",
    "Docker",
    "Kubernetes",
    "MySQL",
    "MongoDB",
    "Python",
    "Git",
    "Postman",
  ],

  contact: "yuvichauhan3112005@gmail.com",

  linkedin:
    "https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/",
};

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    period: "Jun 2026 – Jul 2026",
    role: "Java Backend Development Intern",
    company: "Keyanna Technology Private Limited",
    type: "Internship",
    description:
      "Worked on an enterprise digital payment and wallet management platform, contributing to the Ticket Management microservice using Java, Spring Boot, REST APIs, and microservice architecture.",
    technologies: ["Java", "Spring Boot", "REST APIs", "Microservices"],
  },

  {
    period: "Jan 2025 – Apr 2025",
    role: "Backend Developer",
    company: "Gandhinagar University",
    type: "Part-time",
    description:
      "Contributed to the Cultural & Technical Fest 2025 registration platform, focusing on backend workflows, OTP authentication, database-driven user management, and API integration.",
    technologies: ["Node.js", "REST APIs", "SQL", "OTP Authentication"],
  },

  {
    period: "2024 – 2025",
    role: "Team Lead",
    company: "Smart India Hackathon",
    type: "Hackathon",
    description:
      "Led multidisciplinary student teams through SIH 2024 and 2025 internal selections, coordinating technical decisions, architecture, task planning, and prototype development.",
    technologies: ["System Design", "Architecture", "Team Leadership"],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    title: "TaskPilot",
    category: "Agentic AI System",
    status: "Completed",
    timeline: "Aug 2026",

    description:
      "Local agentic AI task management system using Qwen3, Ollama, n8n, and MySQL with controlled tool calling and multi-step workflow execution.",

    highlights: [
      "Natural-language task operations",
      "Controlled Create, Update, Complete & List tools",
      "n8n-based agent orchestration",
      "Multi-step dependent tool execution",
      "MySQL persistent task storage",
      "AI reasoning separated from database execution",
    ],

    stack: [
      "Qwen3",
      "Ollama",
      "n8n",
      "LLM Tool Calling",
      "Agent Orchestration",
      "MySQL",
    ],
  },

  {
    title: "Cloud-Native Microservices Backend System",
    category: "Backend / Cloud",
    status: "Completed",
    timeline: "Jan 2026 – Feb 2026",

    description:
      "Scalable backend architecture built around independently deployable microservices, event-driven communication, service discovery, security, containerization, and observability.",

    highlights: [
      "Domain-oriented microservices architecture",
      "Kafka-based event communication",
      "Eureka service discovery",
      "JWT + OAuth2 security",
      "Docker + Kubernetes deployment",
      "Grafana + Loki observability",
    ],

    stack: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "Docker",
      "Kubernetes",
      "JWT",
      "OAuth2",
    ],
  },

  {
    title: "InternMatchAI",
    category: "Full-Stack / AI",
    status: "Completed",
    timeline: "Aug 2025 – Oct 2025",

    description:
      "End-to-end internship discovery and matching platform combining recommendation logic, structured resume generation, administrative workflows, and analytics.",

    highlights: [
      "AI-powered internship recommendation",
      "Structured resume generation",
      "Admin verification and workflow management",
      "Full-stack platform architecture",
      "Demonstrated during SIH 2025",
    ],

    stack: [
      "Python",
      "Machine Learning",
      "Node.js",
      "React",
      "REST APIs",
      "Database Systems",
    ],
  },

  {
    title: "NutriScan",
    category: "AI / HealthTech",
    status: "Prototype",
    timeline: "Nov 2025 – Dec 2025",

    description:
      "Nutrition intelligence prototype exploring image-based food understanding, structured nutrition data, and AI-ready processing architecture.",

    highlights: [
      "Image-based food identification prototype",
      "Structured nutrition database integration",
      "Daily dietary intake workflow",
      "Backend-driven processing architecture",
      "Designed for future AI and personalization expansion",
    ],

    stack: [
      "Python",
      "Deep Learning",
      "Data Modeling",
      "AI Integration",
    ],
  },
];

/* =========================================================
   RECOGNITION
========================================================= */

const achievements = [
  {
    title: "Odoo Hackathon 2025",
    detail: "Top 300 teams • 19,000+ participating teams",
    tag: "Finalist",
  },
  {
    title: "Smart India Hackathon",
    detail: "Team Lead • Internal selections • 2024 & 2025",
    tag: "Leadership",
  },
  {
    title: "IIT Kharagpur",
    detail: "Elite + Gold Certification • Java Programming",
    tag: "Certification",
  },
  {
    title: "Dewang Mehta IT Awards",
    detail: "University Nominee • 2025",
    tag: "Recognition",
  },
  {
    title: "Student of the Year",
    detail: "University Nominee • 2026",
    tag: "Recognition",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },

  {
    title: "Full-Stack",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Frontend Integration",
    ],
  },

  {
    title: "Cloud & Distributed",
    items: [
      "Kafka",
      "Docker",
      "Kubernetes",
      "Eureka",
      "Event-Driven Architecture",
      "System Design",
    ],
  },

  {
    title: "AI / Agentic",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Agentic AI",
      "LLM Tool Calling",
      "n8n",
      "Ollama",
      "Qwen3",
    ],
  },

  {
    title: "Databases",
    items: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Database Design",
    ],
  },

  {
    title: "Engineering",
    items: [
      "DSA",
      "Algorithms",
      "OOP",
      "OS",
      "DBMS",
      "Git",
      "Postman",
      "JWT",
      "OAuth2",
      "Grafana",
      "Loki",
    ],
  },
];

/* =========================================================
   TERMINAL
   Compact + deterministic animation.
========================================================= */

function RecruiterTerminal({ onEnter }) {
  const lines = [
    "loading candidate profile...",
    "loading experience registry...",
    "loading project registry...",
    "loading technical stack...",
    "✓ candidate profile ready",
  ];
  

  const [completedLines, setCompletedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (lineIndex >= lines.length) {
      if (!cancelled) {
        setReady(true);
      }
      return;
    }

    const target = lines[lineIndex];
    let character = 0;

    const typingTimer = setInterval(() => {
      if (cancelled) return;

      character += 1;
      setCurrentLine(target.slice(0, character));

      if (character >= target.length) {
        clearInterval(typingTimer);

        setTimeout(() => {
          if (cancelled) return;

          setCompletedLines((previous) => [
            ...previous,
            target,
          ]);

          setCurrentLine("");

          if (lineIndex === lines.length - 1) {
            setReady(true);
          } else {
            setLineIndex((previous) => previous + 1);
          }
        }, 180);
      }
    }, 17);

    return () => {
      cancelled = true;
      clearInterval(typingTimer);
    };
  }, [lineIndex]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800/90 bg-black/75 shadow-2xl shadow-black/30">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-gray-800/80 bg-gray-950/80 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </div>

        <div className="font-mono text-[10px] tracking-[0.18em] text-gray-600 sm:text-xs">
          YC.OS / RECRUITER
        </div>
      </div>

      {/* Terminal content */}
      <div className="px-5 py-5 font-mono text-xs sm:px-7 sm:py-6 sm:text-sm">
        <div className="mb-4 text-gray-500">
          ~/yc.dev/recruiter $
          <span className="ml-2 text-cyan-300">
            recruiter --init
          </span>
        </div>

        <div className="space-y-2 text-gray-400">
          {completedLines.map((line, index) => (
            <div
              key={`${line}-${index}`}
              className={
                line.startsWith("✓")
                  ? "text-green-400"
                  : "text-gray-400"
              }
            >
              <span className="mr-2 text-cyan-500/80">
                {line.startsWith("✓") ? "✓" : "→"}
              </span>

              {line.replace("✓ ", "")}
            </div>
          ))}

          {!ready && currentLine && (
            <div className="text-gray-400">
              <span className="mr-2 text-cyan-500/80">
                →
              </span>
              {currentLine}
              <span className="ml-0.5 animate-pulse text-cyan-400">
                ▋
              </span>
            </div>
          )}
        </div>

        {/* Dedicated CTA area.
            This is intentionally outside the animated line stack
            so it can never be clipped or pushed below the terminal. */}
        <div className="mt-5 min-h-[78px] border-t border-gray-900 pt-4">
          {ready ? (
            <>
              <div className="mb-3 text-gray-500">
                ~/yc.dev/recruiter $
                <span className="ml-2 text-cyan-300">
                  profile --open
                </span>
              </div>

              <button
  type="button"
  onClick={onEnter}
  className="inline-flex min-h-[42px] cursor-pointer items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 font-mono text-xs font-semibold tracking-wide text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/15 hover:text-cyan-200 sm:text-sm"
>
                Enter Recruiter Mode
                <span className="ml-2">→</span>
              </button>
            </>
          ) : (
            <div className="text-gray-700">
              ~/yc.dev/recruiter $
              <span className="ml-2 animate-pulse">
                ▋
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SNAPSHOT
========================================================= */

function RecruiterSnapshot() {
  return (
    <section className="mb-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
            01 / snapshot
          </p>

          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Candidate Overview
          </h2>
        </div>

        <span className="hidden rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1 font-mono text-[10px] text-green-400 sm:block">
          OPEN TO OPPORTUNITIES
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-2xl border border-gray-800/80 bg-gray-950/60 p-5 sm:p-6">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 font-mono text-[10px] text-cyan-300">
              {profile.title}
            </span>

            <span className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 font-mono text-[10px] text-gray-400">
              {profile.stage}
            </span>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-gray-400 sm:text-[15px]">
            {profile.summary}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-800/80 bg-gray-950/60 p-5 sm:p-6">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
            Education
          </div>

          <div className="text-sm font-semibold leading-6 text-white">
            {profile.education.degree}
          </div>

          <div className="mt-1 text-sm text-gray-400">
            {profile.education.institution}
          </div>

          <div className="text-sm text-gray-500">
            {profile.education.university}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-gray-800 pt-4 font-mono text-[11px]">
            <span className="text-gray-600">
              {profile.education.graduation}
            </span>

            <span className="text-cyan-300">
              CGPA {profile.education.cgpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOCUS
========================================================= */

function FocusSection() {
  return (
    <section className="mb-12">
      <div className="mb-5">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
          02 / engineering profile
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Primary Technical Focus
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {profile.focus.map((item, index) => (
          <div
            key={item}
            className="rounded-xl border border-gray-800/80 bg-gray-950/60 px-4 py-4 transition hover:border-gray-700 hover:bg-gray-900/70"
          >
            <div className="mb-2 font-mono text-[10px] text-gray-700">
              0{index + 1}
            </div>

            <div className="text-sm font-medium leading-5 text-gray-200 sm:text-[15px]">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE TIMELINE
========================================================= */

function ExperienceTimeline() {
  return (
    <section className="mb-12">
      <div className="mb-7">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
          03 / experience registry
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute bottom-4 left-[8px] top-4 w-px bg-gradient-to-b from-cyan-400/50 via-gray-700 to-gray-900 sm:left-[11px]" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline node */}
              <div className="absolute left-0 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-cyan-400/40 bg-gray-950">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="rounded-2xl border border-gray-800/80 bg-gray-950/60 p-5 sm:p-6">
                {/* Top row */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="mb-1 font-mono text-[11px] font-medium tracking-wide text-cyan-300">
                      {experience.period}
                    </div>

                    <h3 className="text-lg font-semibold leading-6 text-white sm:text-xl">
                      {experience.role}
                    </h3>

                    <div className="mt-1 text-sm text-gray-400">
                      {experience.company}
                    </div>
                  </div>

                  <span className="w-fit shrink-0 rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-gray-400">
                    {experience.type}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-500">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-800/80 pt-4">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-gray-800 bg-black/30 px-2.5 py-1 font-mono text-[10px] text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
========================================================= */

function ProjectsSection() {
  return (
    <section className="mb-12">
      <div className="mb-7">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
          04 / project registry
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Selected Projects
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Selected systems that demonstrate backend engineering,
          full-stack development, cloud architecture, and
          AI-enabled workflows.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-gray-800/80 bg-gray-950/60 p-5 transition hover:border-gray-700 hover:bg-gray-950/90 sm:p-6"
          >
            {/* Project header */}
            <div className="flex min-w-0 items-start justify-between gap-4">
              <div className="min-w-0 pr-2">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-400/70">
                  {project.category}
                </div>

                <h3 className="break-words text-lg font-semibold leading-6 text-white sm:text-xl">
                  {project.title}
                </h3>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2">
                <span className="whitespace-nowrap rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 font-mono text-[10px] text-gray-400">
                  {project.timeline}
                </span>

                <span className="whitespace-nowrap rounded-md border border-green-400/20 bg-green-400/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-green-400">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 text-sm leading-6 text-gray-500">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-5 flex-1">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-700">
                System highlights
              </div>

              <ul className="space-y-2">
                {project.highlights.slice(0, 5).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-xs leading-5 text-gray-400 sm:text-sm"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="mt-6 border-t border-gray-800/80 pt-4">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-700">
                Stack
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-800 bg-black/30 px-2.5 py-1 font-mono text-[10px] text-gray-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 font-mono text-[10px] text-gray-700">
              PROJECT_ID: YC-{String(index + 1).padStart(2, "0")}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS
========================================================= */

function SkillsSection() {
  return (
    <section className="mb-12">
      <div className="mb-7">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
          05 / technical stack
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Skills
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-gray-800/80 bg-gray-950/60 p-5"
          >
            <h3 className="mb-4 text-sm font-semibold text-gray-200">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-gray-800 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] leading-none text-gray-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   RECOGNITION
========================================================= */

function RecognitionSection() {
  return (
    <section className="mb-12">
      <div className="mb-7">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
          06 / recognition registry
        </p>

        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Recognition
        </h2>
      </div>

      <div className="space-y-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="flex flex-col gap-3 rounded-xl border border-gray-800/80 bg-gray-950/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
          >
            <div className="min-w-0">
              <h3 className="text-sm font-semibold leading-5 text-gray-200 sm:text-[15px]">
                {achievement.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                {achievement.detail}
              </p>
            </div>

            <span className="w-fit shrink-0 rounded-md border border-gray-700 bg-gray-900 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-gray-500">
              {achievement.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function ContactSection() {
  return (
    <section className="mb-8">
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-6 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
              07 / contact
            </p>

            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Interested in the profile?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
              Connect directly for software engineering,
              backend, cloud, full-stack, or related
              opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.contact}`}
              className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 font-mono text-xs font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/15 sm:text-sm"
            >
              Email
              <span className="ml-2">↗</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-gray-700 bg-gray-900 px-5 py-2.5 font-mono text-xs font-semibold text-gray-300 transition hover:border-gray-500 hover:text-white sm:text-sm"
            >
              LinkedIn
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function RecruiterPage() {
  const [entered, setEntered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!entered) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [entered]);

  if (!entered) {
    return (
      <main className="min-h-screen bg-[#050505] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col justify-center">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-600 sm:text-xs">
              <span className="h-px w-8 bg-cyan-400/40" />
              YC.OS
              <span>/</span>
              RECRUITER
            </div>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Recruiter Mode
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              A focused candidate briefing containing the
              experience, technical focus, selected systems,
              skills, and recognition most relevant to a
              software engineering evaluation.
            </p>
          </div>

          {/* Terminal */}
          <RecruiterTerminal
            onEnter={() => setEntered(true)}
          />

          <div className="mt-5 text-center font-mono text-[9px] tracking-[0.18em] text-gray-700">
            FAST PROFILE ACCESS / YC.OS RECRUITER INTERFACE
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* =====================================================
            Recruiter Header
        ===================================================== */}

        <header className="mb-10 border-b border-gray-800/80 pb-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400/70">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Recruiter Mode Active
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {profile.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span>{profile.title}</span>
                <span className="text-gray-700">•</span>
                <span>{profile.stage}</span>
                <span className="text-gray-700">•</span>
                <span>Ahmedabad, Gujarat</span>
              </div>
            </div>

            {/* Properly visible exit button */}
            {/* <button
              type="button"
              onClick={() => setEntered(false)}
              className="inline-flex min-h-[40px] cursor-pointer shrink-0 items-center justify-center rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 font-mono text-xs font-semibold tracking-wide text-red-400 transition hover:border-red-400 hover:bg-red-500/15 hover:text-red-300"
            > */}
            <button
  type="button"
  onClick={() => router.push("/")}
  className="inline-flex min-h-[40px] cursor-pointer shrink-0 items-center justify-center rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 font-mono text-xs font-semibold tracking-wide text-red-400 transition hover:border-red-400 hover:bg-red-500/15 hover:text-red-300"
>
              <span className="mr-2">×</span>
              Exit Recruiter Mode
            </button>
          </div>
        </header>

        {/* =====================================================
            Content
        ===================================================== */}

        <RecruiterSnapshot />

        <FocusSection />

        <ExperienceTimeline />

        <ProjectsSection />

        <SkillsSection />

        <RecognitionSection />

        <ContactSection />

        {/* =====================================================
            Footer
        ===================================================== */}

        <footer className="border-t border-gray-900 py-6">
          <div className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-gray-700 sm:flex-row sm:items-center sm:justify-between">
            <span>
              YC.OS / RECRUITER_INTERFACE
            </span>

            <span>
              Candidate Profile v2026.09
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}