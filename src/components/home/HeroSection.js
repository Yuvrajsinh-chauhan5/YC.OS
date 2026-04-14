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





"use client";

import { useEffect, useState } from "react";
import Container from "../layout/Container";
import Link from "next/link";

const texts = [
  "Designing Systems That Scale",
  "Engineering Backend & Distributed Architectures",
  "Building AI-Driven Intelligent Systems",
  "From Idea → Architecture → Production",
  "Cloud-Native • Scalable • Production Systems",
];

export default function HeroSection() {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = deleting ? 35 : 55;

    const interval = setInterval(() => {
      if (!deleting) {
        const next = current.substring(0, charIndex + 1);
        setDisplay(next);
        setCharIndex((prev) => prev + 1);

        if (next.length === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.substring(0, charIndex - 1);
        setDisplay(next);
        setCharIndex((prev) => prev - 1);

        if (next.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [charIndex, deleting, index]);

  return (
    <section className="min-h-screen flex items-center">
      <Container>

        {/* NAME */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="text-white">
            YuvrajSinh Chauhan
          </span>
        </h1>

        {/* TYPING ROLE */}
        <p className="mt-6 text-gray-300 font-mono text-lg max-w-3xl leading-relaxed">
          {display}
          <span className="animate-pulse">|</span>
        </p>

        {/* SECONDARY LINE */}
        <p className="mt-6 text-gray-500 max-w-2xl">
          Building systems that power applications beyond the interface.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="#featured-systems"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-medium transition"
          >
            View Projects
          </Link>

          <Link
            href="#skills"
            className="px-6 py-3 border border-gray-700 hover:border-cyan-500 rounded-lg text-sm font-medium transition"
          >
            Explore Skills
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 text-gray-400 hover:text-white text-sm font-medium transition"
          >
            Contact
          </Link>

        </div>

        {/* VISUAL SEPARATOR */}
        <div className="mt-20 flex justify-center">
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>

        {/* SYSTEM HINT */}
        <p className="mt-6 text-center text-gray-600 text-xs tracking-widest">
          INITIALIZING SYSTEM ARCHITECTURE ↓
        </p>

      </Container>
    </section>
  );
}