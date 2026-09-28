// import projects from "@/data/projects";

// export default async function ProjectPage({ params }) {
//   const { slug } = await params;

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-red-400">
//         Project not found: {slug}
//       </div>
//     );
//   }

//   return (
//     <div className="p-10 max-w-5xl mx-auto space-y-10">

//       {/* TITLE */}
//       <div>
//         <h1 className="text-4xl font-bold">{project.title}</h1>

//         <div className="flex gap-3 mt-2 text-sm text-gray-400">
//           <span>{project.timeline}</span>
//           <span>•</span>
//           <span>{project.category}</span>
//         </div>
//       </div>

//       {/* SHORT DESCRIPTION */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Overview</h2>
//         <p className="text-gray-400">
//           {project.shortDescription}
//         </p>
//       </div>

//       {/* FULL DESCRIPTION */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Details</h2>
//         <p className="text-gray-300 whitespace-pre-line">
//           {project.fullDescription}
//         </p>
//       </div>

//       {/* HIGHLIGHTS */}
//       {project.highlights && (
//         <div>
//           <h2 className="text-xl font-semibold mb-3">Highlights</h2>
//           <ul className="list-disc pl-5 text-gray-400 space-y-1">
//             {project.highlights.map((h, i) => (
//               <li key={i}>{h}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* TECH STACK */}
//       {project.techStack && (
//         <div>
//           <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>

//           <div className="flex flex-wrap gap-2">
//             {project.techStack.map((t, i) => (
//               <span key={i} className="px-3 py-1 bg-gray-800 rounded text-sm">
//                 {t}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* DEMO BUTTON */}
//       {project.demo && (
//         <div>
//           <a
//             href={project.demo}
//             target="_blank"
//             className="px-4 py-2 bg-cyan-700 rounded inline-block"
//           >
//             Live Demo
//           </a>
//         </div>
//       )}

//     </div>
//   );
// }



// import projects from "@/data/projects";

// export default async function ProjectPage({ params }) {
//   const { slug } = await params;

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return (
//       <div className="p-10 text-center text-red-400">
//         Project not found: {slug}
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

//       {/* HERO SECTION */}
//       <section className="space-y-4">
//         <h1 className="text-4xl md:text-6xl font-bold glow-text">
//           {project.title}
//         </h1>

//         <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
//           {project.shortDescription}
//         </p>

//         <div className="flex flex-wrap gap-3 text-sm mt-4">
//           <span className="px-3 py-1 bg-green-900 rounded">
//             {project.status}
//           </span>
//           <span className="px-3 py-1 bg-gray-800 rounded">
//             {project.timeline}
//           </span>
//           <span className="px-3 py-1 bg-gray-800 rounded">
//             {project.category}
//           </span>
//         </div>
//       </section>

//       {/* STORY / WHY BUILT */}
//       <section className="space-y-3">
//         <h2 className="text-2xl font-semibold text-cyan-400">
//           Why This Project?
//         </h2>

//         <p className="text-gray-300 leading-relaxed whitespace-pre-line">
//           {project.fullDescription}
//         </p>
//       </section>

//       {/* HIGHLIGHTS */}
//       <section>
//         <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
//           Key Highlights
//         </h2>

//         <div className="grid md:grid-cols-2 gap-3">
//           {project.highlights?.map((h, i) => (
//             <div
//               key={i}
//               className="border border-gray-800 bg-black/40 p-4 rounded-lg hover:border-cyan-500 transition"
//             >
//               ▹ {h}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TECH STACK */}
//       <section>
//         <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
//           Technology Stack
//         </h2>

//         <div className="flex flex-wrap gap-2">
//           {project.techStack?.map((t, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 bg-gray-900 border border-gray-800 rounded text-sm hover:border-cyan-500 transition"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* IMPACT SECTION (NEW PREMIUM ADDITION) */}
//       <section className="space-y-3">
//         <h2 className="text-2xl font-semibold text-cyan-400">
//           Impact & Outcome
//         </h2>

//         <div className="text-gray-300 leading-relaxed space-y-3">
//           <p>
//             This project demonstrates practical engineering skills including system design,
//             backend architecture, and real-world problem solving under constraints.
//           </p>

//           <p>
//             It reflects my ability to move from idea → architecture → implementation while
//             following clean development practices.
//           </p>
//         </div>
//       </section>

//       {/* LINKS */}
//       <section>
//         <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
//           Live Project & Resources
//         </h2>

//         <div className="flex flex-wrap gap-4">
//           {project.demo && (
//             <a
//               href={project.demo}
//               target="_blank"
//               className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded transition"
//             >
//               Live / Demo
//             </a>
//           )}

//           {project.video && (
//             <a
//               href={project.video}
//               target="_blank"
//               className="px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded transition"
//             >
//               Video Walkthrough
//             </a>
//           )}
//         </div>
//       </section>

//       {/* FOOTER NOTE */}
//       <section className="border-t border-gray-800 pt-6 text-gray-500 text-sm">
//         Built with a focus on scalability, clean architecture, and real-world engineering practices.
//       </section>

//     </div>
//   );
// }



// stable version

// import projects from "@/data/projects";

// export default async function ProjectPage({ params }) {
//   const { slug } = await params;

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-400">
//         Project not found: {slug}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-20">
//       <div className="max-w-5xl mx-auto space-y-16">

//         {/* HERO */}
//         <section className="space-y-4">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             {project.title}
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
//             {project.shortDescription}
//           </p>

//           <div className="flex flex-wrap gap-3 text-sm mt-4">
//             <span className="px-3 py-1 bg-green-900/40 border border-green-700 rounded-full">
//               {project.status}
//             </span>
//             <span className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full">
//               {project.timeline}
//             </span>
//             <span className="px-3 py-1 bg-cyan-900/40 border border-cyan-700 rounded-full">
//               {project.category}
//             </span>
//           </div>
//         </section>

//         {/* OVERVIEW */}
//         <section className="space-y-3">
//           <h2 className="text-2xl font-semibold text-cyan-400">
//             Overview
//           </h2>
//           <p className="text-gray-300 leading-relaxed whitespace-pre-line">
//             {project.fullDescription}
//           </p>
//         </section>

//         {/* HIGHLIGHTS */}
//         {project.highlights?.length > 0 && (
//           <section className="space-y-4">
//             <h2 className="text-2xl font-semibold text-cyan-400">
//               Key Highlights
//             </h2>

//             <div className="grid gap-3">
//               {project.highlights.map((h, i) => (
//                 <div
//                   key={i}
//                   className="flex items-start gap-3 text-gray-300"
//                 >
//                   <span className="text-cyan-400 mt-1">▹</span>
//                   <p>{h}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* TECH STACK */}
//         {project.techStack?.length > 0 && (
//           <section className="space-y-4">
//             <h2 className="text-2xl font-semibold text-cyan-400">
//               Tech Stack
//             </h2>

//             <div className="flex flex-wrap gap-2">
//               {project.techStack.map((t, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-1 text-sm bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-600 transition"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* CTA / LINKS */}
//         {(project.demo || project.video) && (
//           <section className="space-y-4">
//             <h2 className="text-2xl font-semibold text-cyan-400">
//               Live / Demo
//             </h2>

//             <div className="flex flex-wrap gap-4">
//               {project.demo && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition font-medium"
//                 >
//                   Live Demo
//                 </a>
//               )}

//               {project.video && (
//                 <a
//                   href={project.video}
//                   target="_blank"
//                   className="px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition font-medium"
//                 >
//                   Watch Demo
//                 </a>
//               )}
//             </div>
//           </section>
//         )}

//       </div>
//     </div>
//   );
// }

// new theme matching version

import Link from "next/link";
import projects from "@/data/projects";

const statusStyles = {
  Completed:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Active:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  Prototype:
    "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  "Hackathon Project":
    "border-purple-500/30 bg-purple-500/10 text-purple-300",
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white px-5 py-24 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-900/50 bg-red-950/10 p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-red-400">
              system.error
            </div>

            <h1 className="mt-4 text-2xl font-semibold">
              Project not found
            </h1>

            <p className="mt-2 font-mono text-xs text-gray-600">
              ~/yc.dev/projects/{slug}
            </p>

            <Link
              href="/#featured-systems"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-800 bg-black/60 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <span className="text-cyan-400">←</span>
              Back to Featured Systems
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const statusClass =
    statusStyles[project.status] ||
    "border-gray-700 bg-gray-900/50 text-gray-300";

  /*
   * Keep terminal content intentionally compact.
   * This prevents long descriptions/highlights from breaking
   * the fixed terminal layout.
   */
  const terminalHighlights = (project.highlights || []).slice(0, 3);

  const terminalStack = (project.techStack || []).slice(0, 6);

  return (
    <main className="min-h-screen bg-black text-white px-5 py-24 sm:px-6 sm:py-28">
      <style>{`
        @keyframes projectTerminalReveal {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes projectCursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: 0;
          }
        }

        .project-terminal-line {
          display: block;
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          animation:
            projectTerminalReveal 0.7s steps(48, end) forwards;
        }

        .project-terminal-cursor {
          display: inline-block;
          width: 6px;
          height: 12px;
          margin-left: 3px;
          vertical-align: -2px;
          background: rgba(34, 211, 238, 0.9);
          animation: projectCursorBlink 0.9s steps(1) infinite;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">

        {/* BACK NAVIGATION */}
        <div className="mb-7">
          <Link
            href="/#featured-systems"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 transition duration-300 hover:text-cyan-300"
          >
            <span className="text-cyan-400 transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            <span>Back to Featured Systems</span>
          </Link>
        </div>

        {/* PROJECT HEADER */}
        <section className="relative overflow-hidden rounded-2xl border border-gray-800/90 bg-black/70 shadow-[0_0_35px_rgba(0,191,255,0.045),inset_0_0_25px_rgba(255,255,255,0.012)] backdrop-blur-sm">

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-cyan-500/[0.035] blur-3xl" />

          {/* WINDOW HEADER */}
          <div className="flex h-11 items-center justify-between border-b border-gray-900 px-5 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-gray-600">
              project.system
            </span>
          </div>

          <div className="relative px-5 py-8 sm:px-7 sm:py-9">

            {/* PATH */}
            <div className="mb-5 font-mono text-[10px] tracking-[0.12em]">
              <span className="text-cyan-400/80">~/yc.dev</span>
              <span className="text-gray-700">/</span>
              <span className="text-gray-500">projects</span>
              <span className="text-gray-700">/</span>
              <span className="text-gray-400">{project.slug}</span>
            </div>

            {/* META */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-cyan-500/20 bg-cyan-500/[0.05] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-cyan-300">
                {project.category}
              </span>

              <span
                className={`rounded-md border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] ${statusClass}`}
              >
                {project.status}
              </span>

              <span className="rounded-md border border-gray-800 bg-gray-950/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-gray-500">
                {project.timeline}
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
              {project.shortDescription}
            </p>
          </div>
        </section>

        {/* PROJECT TERMINAL */}
        <section className="relative mt-6 overflow-hidden rounded-2xl border border-gray-800/90 bg-black/75 shadow-[0_0_35px_rgba(0,191,255,0.045),inset_0_0_25px_rgba(255,255,255,0.012)] backdrop-blur-sm">

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* TERMINAL HEADER */}
          <div className="flex h-11 items-center justify-between border-b border-gray-900 px-5 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            </div>

            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">
              <span className="text-gray-600">YC.OS</span>
              <span className="text-cyan-400/50">inspect</span>
            </div>
          </div>

          {/* TERMINAL BODY */}
          <div className="h-[300px] overflow-hidden px-5 py-5 sm:h-[320px] sm:px-6">

            {/* COMMAND */}
            <div className="flex min-w-0 items-center font-mono text-[10px] leading-6">
              <span className="shrink-0 text-cyan-400/80">
                ~/yc.dev/projects
              </span>

              <span className="mx-1.5 shrink-0 text-gray-700">$</span>

              <span className="text-gray-400">
                inspect {project.slug}
              </span>

              <span className="project-terminal-cursor" />
            </div>

            {/* SYSTEM */}
            <div
              className="project-terminal-line mt-3 font-mono text-[10px] leading-6 text-gray-400 sm:text-[11px]"
              style={{ animationDelay: "0.45s" }}
            >
              <span className="text-cyan-400/70">~/yc.dev</span>
              <span className="text-gray-700"> $ </span>
              system:{" "}
              <span className="text-gray-300">{project.title}</span>
            </div>

            {/* OBJECTIVE */}
            <div
              className="project-terminal-line font-mono text-[10px] leading-6 text-gray-500 sm:text-[11px]"
              style={{ animationDelay: "1.1s" }}
            >
              <span className="text-cyan-400/70">~/yc.dev</span>
              <span className="text-gray-700"> $ </span>
              objective:{" "}
              <span className="text-gray-400">
                {project.shortDescription}
              </span>
            </div>

            {/* KEY ASPECTS */}
            {terminalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="project-terminal-line font-mono text-[10px] leading-6 text-gray-500 sm:text-[11px]"
                style={{
                  animationDelay: `${1.8 + index * 0.7}s`,
                }}
              >
                <span className="text-cyan-400/70">~/yc.dev</span>
                <span className="text-gray-700"> $ </span>
                <span className="text-cyan-400/80">
                  aspect_{String(index + 1).padStart(2, "0")}:
                </span>{" "}
                <span className="text-gray-400">
                  {highlight}
                </span>
              </div>
            ))}

            {/* STACK */}
            <div
              className="project-terminal-line font-mono text-[10px] leading-6 text-gray-500 sm:text-[11px]"
              style={{
                animationDelay: `${1.8 + terminalHighlights.length * 0.7}s`,
              }}
            >
              <span className="text-cyan-400/70">~/yc.dev</span>
              <span className="text-gray-700"> $ </span>
              stack:{" "}
              <span className="text-gray-400">
                {terminalStack.join(" / ")}
              </span>
            </div>

            {/* READY */}
            <div
              className="project-terminal-line mt-1 font-mono text-[10px] leading-6 sm:text-[11px]"
              style={{
                animationDelay: `${2.35 + terminalHighlights.length * 0.7}s`,
              }}
            >
              <span className="text-cyan-400/70">~/yc.dev</span>
              <span className="text-gray-700"> $ </span>
              <span className="text-emerald-400/80">
                inspection complete
              </span>

              <span className="project-terminal-cursor" />
            </div>
          </div>

          {/* TERMINAL FOOTER */}
          <div className="flex h-10 items-center justify-between border-t border-gray-900 px-5 sm:px-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-700">
              project registry
            </span>

            <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
              ready
            </span>
          </div>
        </section>

        {/* CONTENT */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.8fr)]">

          {/* LEFT */}
          <div className="space-y-6">

            {/* OVERVIEW */}
            <section className="relative overflow-hidden rounded-2xl border border-gray-800/90 bg-black/60 p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
                  01 / Overview
                </span>

                <span className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
              </div>

              <p className="whitespace-pre-line text-sm leading-7 text-gray-400 sm:text-base">
                {project.fullDescription}
              </p>
            </section>
          </div>

          {/* RIGHT */}
          <aside className="space-y-6">

            {/* TECH STACK */}
            {project.techStack?.length > 0 && (
              <section className="relative overflow-hidden rounded-2xl border border-gray-800/90 bg-black/60 p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
                    02 / Stack
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-gray-800 bg-gray-950/70 px-3 py-2 font-mono text-[10px] text-gray-400 transition hover:border-cyan-500/30 hover:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* PREVIEW */}
            {project.preview && (
              <section className="relative overflow-hidden rounded-2xl border border-gray-800/90 bg-black/60 p-6">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-400/70">
                  ~/yc.dev/projects $ open-preview
                </div>

                <p className="mb-5 text-sm leading-6 text-gray-500">
                  Access the available architecture, demo, or project
                  preview.
                </p>

                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.previewLabel || "Preview"} for ${project.title}`}
                  className="group flex w-full items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/[0.04] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/[0.08]"
                >
                  <span>
                    {project.previewLabel || "Preview"}
                  </span>

                  <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </section>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}