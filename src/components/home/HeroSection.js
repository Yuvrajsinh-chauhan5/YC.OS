// "use client";

// import { useEffect, useState } from "react";
// import Container from "../layout/Container";
// import Link from "next/link";

// const text =
//   "Software Engineer focused on backend systems, cloud-native applications, and scalable architecture. Passionate about building reliable distributed systems and production-ready platforms.";
  

// export default function HeroSection() {
//   const [display, setDisplay] = useState("");

//   // useEffect(() => {
//   //   let i = 0;

//   //   const interval = setInterval(() => {
//   //     setDisplay(text.slice(0, i));
//   //     i++;
//   //     if (i > text.length) clearInterval(interval);
//   //   }, 20);

//   //   return () => clearInterval(interval);
//   // }, []);



//   useEffect(() => {
//     let typingInterval;
//     let i = 0;
  
//     const startTyping = () => {
//       typingInterval = setInterval(() => {
//         setDisplay(text.slice(0, i));
//         i++;
  
//         if (i > text.length) {
//           clearInterval(typingInterval);
//         }
//       }, 20);
//     };
  
//     // 🔥 delay typing so boot finishes first
//     const delay = setTimeout(startTyping, 8000); // 8 seconds
  
//     return () => {
//       clearTimeout(delay);
//       clearInterval(typingInterval);
//     };
//   }, []);

//   return (
//     <section className="min-h-screen flex items-center">
//       <Container>

//         {/* NAME */}
//         <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
//   <span className="text-white">
//     YuvrajSinh Chauhan
//   </span>
// </h1>

//         {/* TYPING ROLE */}
//         <p className="mt-6 text-gray-300 font-mono text-lg max-w-3xl leading-relaxed">
//           {display}
//         </p>

//         {/* SECONDARY LINE */}
//         <p className="mt-6 text-gray-500 max-w-2xl">
//         Building systems that power applications beyond the interface.
//         </p>

//         {/* CTA SECTION */}
//         <div className="mt-10 flex flex-wrap gap-4">

//           <Link
//             href="#featured-systems"
//             className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-medium transition"
//           >
//             View Projects
//           </Link>

//           <Link
//             href="#skills"
//             className="px-6 py-3 border border-gray-700 hover:border-cyan-500 rounded-lg text-sm font-medium transition"
//           >
//             Explore Skills
//           </Link>

//           <Link
//             href="/contact"
//             className="px-6 py-3 text-gray-400 hover:text-white text-sm font-medium transition"
//           >
//             Contact
//           </Link>

//         </div>

//         {/* VISUAL TRANSITION (fix empty space feeling) */}
//         <div className="mt-20 flex justify-center">
//           <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
//         </div>

//         {/* SYSTEM HINT */}
//         <p className="mt-6 text-center text-gray-600 text-xs tracking-widest">
//           INITIALIZING SYSTEM ARCHITECTURE ↓
//         </p>

//       </Container>
//     </section>
//   );
// }


// stable version


// "use client";

// import { useEffect, useState } from "react";
// import Container from "../layout/Container";
// import Link from "next/link";

// const texts = [
//   "From Idea → Architecture → Production",
//   "Designing Systems That Scale",
//   "Engineering Backend & Distributed Architectures",
//   "Building AI-Driven Intelligent Systems",
//   "Cloud-Native • Scalable • Production Systems",
// ];

// export default function HeroSection() {
//   const [display, setDisplay] = useState("");
//   const [index, setIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const current = texts[index];
//     const speed = deleting ? 35 : 55;

//     const interval = setInterval(() => {
//       if (!deleting) {
//         const next = current.substring(0, charIndex + 1);
//         setDisplay(next);
//         setCharIndex((prev) => prev + 1);

//         if (next.length === current.length) {
//           setTimeout(() => setDeleting(true), 1200);
//         }
//       } else {
//         const next = current.substring(0, charIndex - 1);
//         setDisplay(next);
//         setCharIndex((prev) => prev - 1);

//         if (next.length === 0) {
//           setDeleting(false);
//           setIndex((prev) => (prev + 1) % texts.length);
//           setCharIndex(0);
//         }
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [charIndex, deleting, index]);

//   return (
//     <section className="min-h-screen flex items-center">
//       <Container>

//         {/* NAME */}
//         <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
//           <span className="text-white">
//             YuvrajSinh Chauhan
//           </span>
//         </h1>

//         {/* TYPING ROLE */}
//         <p className="mt-6 text-gray-300 font-mono text-lg max-w-3xl leading-relaxed">
//           {display}
//           <span className="animate-pulse">|</span>
//         </p>

//         {/* SECONDARY LINE */}
//         <p className="mt-6 text-gray-500 max-w-2xl">
//           Building systems that power applications beyond the interface.
//         </p>

//         {/* CTA */}
//         <div className="mt-10 flex flex-wrap gap-4">

//           <Link
//             href="#featured-systems"
//             className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-medium transition"
//           >
//             View Projects
//           </Link>

//           <Link
//             href="#skills"
//             className="px-6 py-3 border border-gray-700 hover:border-cyan-500 rounded-lg text-sm font-medium transition"
//           >
//             Explore Skills
//           </Link>

//           <Link
//             href="/contact"
//             className="px-6 py-3 text-gray-400 hover:text-white text-sm font-medium transition"
//           >
//             Contact
//           </Link>

//         </div>

//         {/* VISUAL SEPARATOR */}
//         <div className="mt-20 flex justify-center">
//           <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
//         </div>

//         {/* SYSTEM HINT */}
//         <p className="mt-6 text-center text-gray-600 text-xs tracking-widest">
//           INITIALIZING SYSTEM ARCHITECTURE ↓
//         </p>

//       </Container>
//     </section>
//   );
// }



// new version enhanced design


"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Link from "next/link";

const texts = [
  "From Idea → Architecture → Production",
  "Designing Systems That Scale",
  "Engineering Backend & Distributed Architectures",
  "Building AI-Driven Intelligent Systems",
  "Cloud-Native • Scalable • Production Systems",
];

export default function HeroSection() {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    const delay =
      !deleting && charIndex === current.length
        ? 1400
        : deleting
        ? 32
        : 52;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, index]);

  useEffect(() => {
    setDisplay(texts[index].substring(0, charIndex));
  }, [charIndex, index]);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
      <Container>
        <div className="w-full max-w-4xl py-16 sm:py-20 md:py-24">

          {/* ROLE / SYSTEM LABEL */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 rounded-full bg-cyan-400"
              style={{
                boxShadow: "0 0 8px rgba(0,191,255,0.45)",
              }}
            />

            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] text-gray-500 uppercase">
              Software Engineer • Backend & Cloud Systems • AI-Driven Applications
            </span>
          </div>

          {/* NAME */}
          <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-[1.05]">
            <span className="text-white">
              Yuvrajsinh Chauhan
            </span>
          </h1>

          {/* TERMINAL-STYLE ANIMATED TEXT */}
          <div className="mt-7 flex items-start font-mono text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="mr-2 shrink-0 text-cyan-500/70">
              ~/yc.dev $
            </span>

            <span className="text-cyan-300/90">
              {display}

              <span
                className="ml-1 text-cyan-400"
                style={{
                  animation: "heroCursor 0.9s step-end infinite",
                }}
              >
                █
              </span>
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-7 text-gray-500">
            Building systems that power applications beyond the interface —
            from backend services and distributed architectures to
            cloud-native and intelligent applications.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap items-center gap-3">

            {/* PRIMARY BUTTON */}
            <Link
              href="#featured-systems"
              className="
                group
                inline-flex items-center gap-2
                rounded-lg
                border border-cyan-400/30
                bg-cyan-400/[0.07]
                px-5 py-2.5
                text-sm font-medium text-gray-200
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-cyan-400/55
                hover:bg-cyan-400/[0.11]
                hover:text-white
                active:translate-y-0
              "
              style={{
                boxShadow: "0 0 16px rgba(0,191,255,0.04)",
              }}
            >
              ~/ View Projects

              <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* SECONDARY BUTTON */}
            <Link
              href="#skills"
              className="
                inline-flex items-center
                rounded-lg
                border border-gray-800
                bg-white/[0.015]
                px-5 py-2.5
                text-sm font-medium text-gray-400
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-gray-700
                hover:bg-white/[0.03]
                hover:text-gray-200
                active:translate-y-0
              "
            >
              ~/ Explore Skills
            </Link>
                      {/* RECRUITER MODE */}
<Link
  href="/recruiter"
  className="
    group
    inline-flex items-center gap-2
    rounded-lg
    border border-purple-400/25
    bg-purple-400/[0.04]
    px-4 py-2.5
    font-mono text-[11px] font-medium
    tracking-wide text-gray-400
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-purple-400/45
    hover:bg-purple-400/[0.08]
    hover:text-gray-200
    active:translate-y-0
  "
>
  <span className="h-1.5 w-1.5 rounded-full bg-purple-400/70 transition-all duration-300 group-hover:bg-purple-300" />

  ~/ Recruiter Mode

  <span className="text-purple-400/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-300">
    →
  </span>
</Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="
                group
                inline-flex items-center gap-1
                px-3 py-2.5
                text-sm font-medium text-gray-500
                transition-all duration-300
                hover:text-gray-200
              "
            >
              ~/ Contact

              <span className="text-gray-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400">
                →
              </span>
            </Link>
  
          </div>

          {/* CENTERED SYSTEM TRANSITION */}
          <div className="mt-16 sm:mt-20 flex flex-col items-center">

            {/* LINE + LABEL */}
            <div className="flex w-full max-w-md items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800" />

              <span className="whitespace-nowrap font-mono text-[10px] sm:text-[11px] tracking-[0.18em] text-gray-600">
                SYSTEM ARCHITECTURE
              </span>

              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800" />
            </div>

            {/* INITIALIZATION */}
            <div className="mt-5 flex flex-col items-center gap-2">
              <span
                className="font-mono text-sm tracking-[0.2em] text-gray-600"
                style={{
                  animation: "heroArrow 1.8s ease-in-out infinite",
                }}
              >
                ↓
              </span>

              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-600">
                INITIALIZING SYSTEM
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* HERO-ONLY ANIMATIONS */}
      <style jsx>{`
        @keyframes heroCursor {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }

        @keyframes heroArrow {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.45;
          }

          50% {
            transform: translateY(4px);
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  );
}

