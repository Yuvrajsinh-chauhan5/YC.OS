// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">

//       <div className="max-w-2xl text-center space-y-10">

//         <h1 className="text-5xl font-bold">
//         Get In Touch
//         </h1>

//         <p className="text-gray-400">
//   Software Engineer focused on designing scalable systems and building production-ready applications 
//   with strong backend architecture and clean engineering principles.
// </p>

//         <div className="flex flex-col gap-4 items-center">

//           <a
//             href="mailto:yuvichauhan3112005@gmail.com"
//             className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
//           >
//             Email Me
//           </a>

//           <a
//             href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
//             className="text-gray-300 hover:text-white"
//           >
//             LinkedIn
//           </a>

//         </div>

//         <p className="text-gray-600 text-sm">
//           Response time: usually within 24–48 hours
//         </p>

//       </div>
//     </div>
//   );
// }


// new version  attcched resume

// export default function ContactPage() {
//   return ( <div className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center">
  

//     <div className="w-full max-w-4xl">
  
//       {/* HEADER */}
//       <section className="text-center mb-16">
  
//         <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 mb-4">
//           Connection Interface
//         </p>
  
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
//           Let's Build Something
//           <span className="text-cyan-400"> Meaningful.</span>
//         </h1>
  
//         <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
//           I'm a Software Engineer focused on backend systems, scalable
//           architecture, and production-ready applications. If you have an
//           interesting idea, opportunity, or technical problem to discuss,
//           I'd be happy to connect.
//         </p>
  
//       </section>
  
  
//       {/* CONTACT GRID */}
//       <div className="grid md:grid-cols-2 gap-6">
  
//         {/* CONTACT CARD */}
//         <div className="p-6 sm:p-8 border border-gray-800 rounded-2xl bg-white/[0.02] hover:border-cyan-400/40 transition">
  
//           <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
//             Direct Contact
//           </p>
  
//           <h2 className="text-2xl font-semibold mb-3">
//             Get In Touch
//           </h2>
  
//           <p className="text-sm text-gray-400 leading-relaxed mb-6">
//             The fastest way to reach me is through email. I'm open to
//             discussing software engineering opportunities, backend systems,
//             projects, and interesting technical challenges.
//           </p>
  
//           <a
//             href="mailto:yuvichauhan3112005@gmail.com"
//             className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition font-medium"
//           >
//             Email Me
//           </a>
  
//         </div>
  
  
//         {/* RESUME CARD */}
//         <div className="p-6 sm:p-8 border border-gray-800 rounded-2xl bg-white/[0.02] hover:border-cyan-400/40 transition">
  
//           <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
//             Professional Profile
//           </p>
  
//           <h2 className="text-2xl font-semibold mb-3">
//             Explore My Resume
//           </h2>
  
//           <p className="text-sm text-gray-400 leading-relaxed mb-6">
//             Take a closer look at my experience, technical skills, projects,
//             education, and professional journey.
//           </p>
  
//           <a
//             href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg transition font-medium"
//           >
//             View Resume
//           </a>
  
//         </div>
  
//       </div>
  
  
//       {/* PROFESSIONAL LINKS */}
//       <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
  
//         <a
//           href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-cyan-400 transition"
//         >
//           LinkedIn →
//         </a>
  
//         <span className="hidden sm:block text-gray-700">
//           /
//         </span>
  
//          <a
//           href="mailto:yuvichauhan3112005@gmail.com"
//           className="text-gray-400 hover:text-cyan-400 transition"
//         >
//           yuvichauhan3112005@gmail.com
//         </a> 
   
//       </div>
  
  
//       {/* FOOTER STATUS */}
//       <div className="mt-14 text-center">
  
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-white/[0.02]">
  
//           <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,191,255,0.8)]" />
  
//           <span className="text-xs text-gray-500">
//             Usually responds within 24–48 hours
//           </span>
  
//         </div>
  
//       </div>
  
//     </div>
//   </div>

  
//   );
//   }
  



// optimised enhanced terminal verison

"use client";

import { useEffect, useState } from "react";

const terminalSequences = [
  {
    command: "identity --resolve",
    lines: [
      {
        prefix: "→",
        text: "resolving identity...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "identity .... Yuvrajsinh Chauhan",
        type: "success",
      },
      {
        prefix: "✓",
        text: "role ........ Computer Engineering",
        type: "info",
      },
      {
        prefix: "✓",
        text: "stage ....... 2027 Graduate",
        type: "info",
      },
    ],
  },

  {
    command: "focus --read",
    lines: [
      {
        prefix: "→",
        text: "loading engineering focus...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "primary ..... Backend Engineering",
        type: "success",
      },
      {
        prefix: "✓",
        text: "systems ..... Cloud · Distributed Systems",
        type: "info",
      },
      {
        prefix: "✓",
        text: "design ...... APIs · Microservices",
        type: "info",
      },
    ],
  },

  {
    command: "capabilities --query",
    lines: [
      {
        prefix: "→",
        text: "querying capability registry...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "backend ..... Java · Spring · Node.js",
        type: "success",
      },
      {
        prefix: "✓",
        text: "platform .... Docker · Kubernetes · Kafka",
        type: "info",
      },
      {
        prefix: "✓",
        text: "architecture  APIs · Event-driven Systems",
        type: "info",
      },
    ],
  },

  {
    command: "ai --query",
    lines: [
      {
        prefix: "→",
        text: "loading intelligent systems...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "agentic ..... AI Systems",
        type: "success",
      },
      {
        prefix: "✓",
        text: "learning .... Machine Learning",
        type: "info",
      },
      {
        prefix: "✓",
        text: "deep ........ Deep Learning",
        type: "info",
      },
    ],
  },

  {
    command: "endpoint --resolve",
    lines: [
      {
        prefix: "→",
        text: "resolving communication endpoint...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "email ....... yuvichauhan3112005@gmail.com",
        type: "success",
      },
      {
        prefix: "✓",
        text: "route ....... direct",
        type: "info",
      },
      {
        prefix: "✓",
        text: "channel ..... available",
        type: "success",
      },
    ],
  },

  {
    command: "channel --status",
    lines: [
      {
        prefix: "→",
        text: "checking communication channels...",
        type: "normal",
      },
      {
        prefix: "✓",
        text: "engineering   available",
        type: "success",
      },
      {
        prefix: "✓",
        text: "ai / ml ...... available",
        type: "success",
      },
      {
        prefix: "✓",
        text: "collaboration  available",
        type: "success",
      },
    ],
  },
];

const protocols = [
  {
    number: "01",
    title: "Engineering",
    detail:
      "Software engineering, backend, cloud infrastructure, distributed systems, APIs, microservices, and system design.",
  },
  {
    number: "02",
    title: "AI / ML",
    detail:
      "Agentic AI systems, machine learning, deep learning, intelligent automation, and AI-powered applications.",
  },
  {
    number: "03",
    title: "Collaboration",
    detail:
      "Technical initiatives, open-source projects, hackathons, product ideas, and interesting problems to solve.",
  },
];

const connectionTypes = [
  "Backend Engineering",
  "Cloud Systems",
  "System Design",
  "Agentic AI",
  "Machine Learning",
  "Deep Learning",
  "Technical Collaboration",
];

export default function ContactPage() {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentSequence = terminalSequences[sequenceIndex];

  useEffect(() => {
    const currentLine = currentSequence.lines[lineIndex];

    /*
     * SEQUENCE COMPLETE
     */

    if (!currentLine) {
      setIsTyping(false);
      return;
    }

    /*
     * TYPE CURRENT LINE
     */

    if (charIndex < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCurrentText(
          currentLine.text.slice(0, charIndex + 1)
        );

        setCharIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timer);
    }

    /*
     * PAUSE AFTER LINE
     */

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [
        ...prev,
        {
          ...currentLine,
          text: currentLine.text,
        },
      ]);

      setCurrentText("");
      setCharIndex(0);

      /*
       * NEXT LINE
       */

      if (lineIndex < currentSequence.lines.length - 1) {
        setLineIndex((prev) => prev + 1);
        return;
      }

      /*
       * SEQUENCE COMPLETE
       */

      setIsTyping(false);
    }, 420);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    lineIndex,
    sequenceIndex,
    currentSequence,
  ]);

  /*
   * RESET AFTER COMPLETED SEQUENCE
   */

  useEffect(() => {
    if (isTyping) return;

    const timer = setTimeout(() => {
      setVisibleLines([]);
      setCurrentText("");
      setCharIndex(0);
      setLineIndex(0);
      setIsTyping(true);

      setSequenceIndex(
        (prev) => (prev + 1) % terminalSequences.length
      );
    }, 2400);

    return () => clearTimeout(timer);
  }, [isTyping]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* =====================================================
            BACKGROUND ATMOSPHERE
        ===================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-3xl" />

        <div className="pointer-events-none absolute right-[-120px] top-[35%] h-80 w-80 rounded-full bg-cyan-400/[0.018] blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 left-[-100px] h-72 w-72 rounded-full bg-cyan-400/[0.015] blur-3xl" />

        <div className="relative space-y-20 sm:space-y-24">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <section>
            <div className="mb-5 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                style={{
                  boxShadow:
                    "0 0 10px rgba(0,191,255,0.55)",
                }}
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-[11px]">
                05 / Connection
              </span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

              {/* =================================================
                  IDENTITY
              ================================================= */}

              <div>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-500/60">
                  contact.interface
                </div>

                <h1 className="text-[2.8rem] font-bold leading-[1.02] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                  <span className="text-white">
                    Open a Connection.
                  </span>

                  <br />

                  <span className="text-gray-500">
                    Start Something.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                  The communication layer is open. Whether it is
                  a software engineering opportunity, an AI/ML
                  initiative, a technical discussion, or an
                  interesting problem worth solving, choose a
                  channel and connect.
                </p>

                {/* =================================================
                    TECHNICAL AREAS
                ================================================= */}

                <div className="mt-7 flex flex-wrap gap-2">
                  {connectionTypes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-800 bg-white/[0.02] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-gray-500 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  COMMUNICATION TERMINAL
              ================================================= */}

              <div
                className="relative overflow-hidden rounded-2xl border border-gray-800/90 bg-black/70 backdrop-blur-sm"
                style={{
                  boxShadow:
                    "0 0 35px rgba(0,191,255,0.045), inset 0 0 25px rgba(255,255,255,0.012)",
                }}
              >

                {/* Top glow */}

                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />

                {/* Terminal header */}

                <div className="flex items-center justify-between border-b border-gray-800/70 px-5 py-3.5">

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-gray-600">
                    connection.shell
                  </span>

                  <span className="font-mono text-[8px] text-gray-700">
                    YC.OS
                  </span>
                </div>

                {/* =================================================
                    FIXED TERMINAL BODY
                ================================================= */}

                <div className="h-[300px] overflow-hidden px-5 py-5 sm:px-6">

                  <div className="mb-5 font-mono text-[9px] text-gray-700">
                    ~/yc.dev/contact $
                  </div>

                  <div className="space-y-2 font-mono text-[10px] leading-5 sm:text-[11px]">

                    {/* Current command */}

                    <div className="mb-3 flex gap-2">
                      <span className="text-gray-500">
                        &gt;
                      </span>

                      <span className="text-cyan-300/90">
                        {currentSequence.command}
                      </span>
                    </div>

                    {/* Previous output */}

                    {visibleLines.map((line, index) => (
                      <div
                        key={`${sequenceIndex}-${line.text}-${index}`}
                        className="flex gap-2"
                      >
                        <span
                          className={
                            line.type === "success"
                              ? "text-cyan-400/80"
                              : line.type === "info"
                              ? "text-cyan-300"
                              : "text-gray-600"
                          }
                        >
                          {line.prefix}
                        </span>

                        <span
                          className={
                            line.type === "success"
                              ? "text-gray-400"
                              : line.type === "info"
                              ? "text-cyan-300/80"
                              : "text-gray-500"
                          }
                        >
                          {line.text}
                        </span>
                      </div>
                    ))}

                    {/* Current typing line */}

                    {isTyping &&
                      currentSequence.lines[lineIndex] && (
                        <div className="flex gap-2">
                          <span
                            className={
                              currentSequence.lines[lineIndex]
                                .type === "success"
                                ? "text-cyan-400/80"
                                : currentSequence.lines[lineIndex]
                                    .type === "info"
                                ? "text-cyan-300"
                                : "text-gray-600"
                            }
                          >
                            {
                              currentSequence.lines[lineIndex]
                                .prefix
                            }
                          </span>

                          <span className="text-cyan-300/90">
                            {currentText}

                            <span className="ml-1 inline-block h-3.5 w-[5px] translate-y-[2px] animate-pulse bg-cyan-400/80" />
                          </span>
                        </div>
                      )}

                    {/* Final prompt */}

                    {!isTyping && (
                      <div className="mt-3 text-cyan-400">
                        <span className="text-gray-600">
                          ~/yc.dev/contact $
                        </span>{" "}
                        <span className="animate-pulse">
                          █
                        </span>
                      </div>
                    )}

                  </div>
                </div>

                {/* Terminal footer */}

                <div className="flex items-center justify-between border-t border-gray-800/70 px-5 py-3.5 sm:px-6">

                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-gray-700">
                    communication layer
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-gray-600">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                      style={{
                        boxShadow:
                          "0 0 7px rgba(0,191,255,0.65)",
                      }}
                    />

                    ready
                  </span>

                </div>
              </div>
            </div>

            {/* Explore indicator */}

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-gray-800" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-700">
                Available channels
              </span>

              <span className="animate-bounce font-mono text-xs text-gray-700">
                ↓
              </span>
            </div>
          </section>

          {/* =====================================================
              COMMUNICATION CHANNELS
          ===================================================== */}

          <section>
            <div className="mb-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-500/70">
                01 / Channels
              </span>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl">
                Establish a Connection
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                Select the communication interface that matches
                what you want to discuss.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href="mailto:yuvichauhan3112005@gmail.com"
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.025] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.018] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.055]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
                      01 Email Channel
                    </span>

                    <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-gray-600">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        style={{
                          boxShadow:
                            "0 0 7px rgba(0,191,255,0.55)",
                        }}
                      />

                      Primary
                    </span>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-xl font-semibold text-gray-100 sm:text-2xl">
                      Direct Communication
                    </h3>

                    <p className="mt-3 break-all font-mono text-xs text-cyan-300/80 sm:text-sm">
                      yuvichauhan3112005@gmail.com
                    </p>

                    <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                      The direct channel for engineering
                      opportunities, AI/ML projects, technical
                      discussions, collaboration, and interesting
                      problems.
                    </p>

                  </div>

                  <div className="mt-8 flex items-center gap-3">

                    <span className="h-px w-8 bg-gray-800 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-400/50" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-600 transition-colors duration-300 group-hover:text-cyan-300">
                      Initialize Connection
                    </span>

                    <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>
              </a>

              {/* =================================================
                  RESUME
              ================================================= */}

              <a
                href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.025] sm:p-8"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.015] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.045]" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
                      02 Professional Node
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-gray-700">
                      Available
                    </span>

                  </div>

                  <div className="mt-8">

                    <h3 className="text-xl font-semibold text-gray-100 sm:text-2xl">
                      Professional Profile
                    </h3>

                    <p className="mt-3 font-mono text-xs text-cyan-300/70 sm:text-sm">
                      /professional/resume
                    </p>

                    <p className="mt-5 max-w-md text-sm leading-6 text-gray-500">
                      Experience, technical skills, backend and
                      cloud systems, AI/ML projects, education,
                      achievements, and engineering background.
                    </p>

                  </div>

                  <div className="mt-8 flex items-center gap-3">

                    <span className="h-px w-8 bg-gray-800 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-400/50" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-gray-600 transition-colors duration-300 group-hover:text-cyan-300">
                      Open Resource
                    </span>

                    <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>
              </a>

            </div>
          </section>

          {/* =====================================================
              CONNECTION PROTOCOL
          ===================================================== */}

          <section>

            <div className="mb-9">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-500/70">
                02 / Protocol
              </span>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-100 sm:text-3xl">
                Connection Protocol
              </h2>
            </div>

            <div className="relative ml-2 sm:ml-4">

              <div className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-cyan-400/40 via-gray-800 to-transparent" />

              <div className="space-y-9">

                {protocols.map((item) => (
                  <div
                    key={item.number}
                    className="group relative pl-8 sm:pl-10"
                  >

                    <div className="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center">

                      <span className="h-2.5 w-2.5 rounded-full border border-cyan-400/50 bg-black transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400" />

                    </div>

                    <div className="grid gap-2 sm:grid-cols-[160px_1fr] sm:gap-6">

                      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-700">
                        {item.number} / {item.title}
                      </span>

                      <div>

                        <h3 className="text-base font-semibold text-gray-200 transition-colors duration-300 group-hover:text-cyan-200">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                          {item.detail}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            </div>
          </section>

          {/* =====================================================
              EXTERNAL INTERFACES
          ===================================================== */}

          <section>

            <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/[0.018] px-6 py-8 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.025] sm:px-8">

              <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.018] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.035]" />

              <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

                <div>

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    03 / External Interfaces
                  </span>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-gray-200">
                    Professional Network
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-gray-600">
                    Connect through professional channels,
                    technical discussions, and engineering
                    opportunities.
                  </p>

                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">

                  <a
                    href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span>/social/linkedin</span>

                    <span className="text-cyan-500 transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                  <span className="hidden h-4 w-px bg-gray-800 sm:block" />

                  <a
                    href="mailto:yuvichauhan3112005@gmail.com"
                    className="group/link flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500 transition-colors duration-300 hover:text-cyan-300"
                  >
                    <span>/channel/email</span>

                    <span className="text-cyan-500 transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>

                </div>

              </div>
            </div>
          </section>

          {/* =====================================================
              CONNECTION STATUS
          ===================================================== */}

          <section>

            <div
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-white/[0.018] px-6 py-10 text-center transition-all duration-300 hover:border-emerald-400/10 hover:bg-white/[0.025] sm:px-10 sm:py-12"
              style={{
                boxShadow:
                  "0 0 40px rgba(0,191,255,0.025), inset 0 0 30px rgba(255,255,255,0.01)",
              }}
            >

              <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

              <div className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-emerald-400/[0.012] blur-3xl transition-all duration-500 group-hover:bg-emerald-400/[0.025]" />

              <div className="relative">

                <div className="flex items-center justify-center gap-3">

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    connection.status
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-emerald-400/65">
                    <span
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
                      style={{
                        boxShadow:
                          "0 0 8px rgba(52,211,153,0.65)",
                      }}
                    />

                    Online
                  </span>

                </div>

                <div className="mt-7 grid gap-6 sm:grid-cols-3">

                  {/* EMAIL */}

                  <div className="rounded-xl border border-white/[0.035] bg-white/[0.012] px-4 py-4 transition-all duration-300 hover:border-cyan-400/10 hover:bg-white/[0.02]">

                    <div className="flex items-center justify-center gap-2">

                      <span
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        style={{
                          boxShadow:
                            "0 0 7px rgba(0,191,255,0.65)",
                        }}
                      />

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-gray-600">
                        Email
                      </span>

                    </div>

                    <p className="mt-2 font-mono text-xs font-medium tracking-wide text-emerald-400/75">
                      AVAILABLE
                    </p>

                  </div>

                  {/* LINKEDIN */}

                  <div className="rounded-xl border border-white/[0.035] bg-white/[0.012] px-4 py-4 transition-all duration-300 hover:border-cyan-400/10 hover:bg-white/[0.02]">

                    <div className="flex items-center justify-center gap-2">

                      <span
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        style={{
                          boxShadow:
                            "0 0 7px rgba(0,191,255,0.65)",
                        }}
                      />

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-gray-600">
                        LinkedIn
                      </span>

                    </div>

                    <p className="mt-2 font-mono text-xs font-medium tracking-wide text-emerald-400/75">
                      AVAILABLE
                    </p>

                  </div>

                  {/* RESPONSE */}

                  <div className="rounded-xl border border-white/[0.035] bg-white/[0.012] px-4 py-4 transition-all duration-300 hover:border-gray-700 hover:bg-white/[0.02]">

                    <div className="flex items-center justify-center gap-2">

                      <span className="h-1.5 w-1.5 rounded-full bg-gray-600" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-gray-600">
                        Response
                      </span>

                    </div>

                    <p className="mt-2 font-mono text-xs font-medium tracking-wide text-gray-400">
                      ~24–48H
                    </p>

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-center gap-3">

                  <span className="h-px w-10 bg-gray-800 transition-all duration-300 group-hover:w-14" />

                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cyan-400/70"
                    style={{
                      boxShadow:
                        "0 0 7px rgba(0,191,255,0.45)",
                    }}
                  />

                  <span className="h-px w-10 bg-gray-800 transition-all duration-300 group-hover:w-14" />

                </div>

              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}


