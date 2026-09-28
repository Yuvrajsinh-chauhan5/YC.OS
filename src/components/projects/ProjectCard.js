// import Link from "next/link";

// export default function ProjectCard({ project }) {
//   return (
//     <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition text-left bg-black/40">

//       {/* TITLE */}
//       <h3 className="text-xl font-bold">{project.title}</h3>

//       {/* DESCRIPTION */}
//       <p className="text-gray-400 mt-2 text-sm">
//         {project.shortDescription}
//       </p>

//       {/* TECH STACK */}
//       <div className="mt-4 flex flex-wrap gap-2">
//         {project.techStack?.slice(0, 3).map((t, i) => (
//           <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded">
//             {t}
//           </span>
//         ))}
//       </div>

//       {/* META */}
//       <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
//         <span>{project.timeline}</span>
//         <span className="text-green-400">{project.status}</span>
//       </div>

//       {/* ACTIONS */}
//       <div className="mt-5 flex gap-3">

//         {/* DETAILS PAGE */}
//         <Link
//           href={`/projects/${project.slug}`}
//           className="px-3 py-1 bg-cyan-700 rounded text-xs"
//         >
//           View Details
//         </Link>

//         {/* 🔥 SINGLE UNIFIED DEMO BUTTON */}
//         {(project.demo || project.video) && (
//           <a
//             href={project.demo || project.video}
//             target="_blank"
//             className="px-3 py-1 bg-green-800 rounded text-xs"
//           >
//             Demo
//           </a>
//         )}

//       </div>

//     </div>
//   );
// }


//  new version

// import Link from "next/link";

// export default function ProjectCard({ project }) {
//   const previewUrl = project.preview;
// const previewLabel = project.previewLabel || "Preview";

//   const statusStyles = {
//     Completed:
//       "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
//     Active:
//       "border-amber-400/20 bg-amber-400/[0.05] text-amber-300",
//     Prototype:
//       "border-violet-400/20 bg-violet-400/[0.05] text-violet-300",
//     "Hackathon Project":
//       "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
//   };

//   const statusClass =
//     statusStyles[project.status] ||
//     "border-gray-800 bg-white/[0.02] text-gray-400";

//   return (
//     <article
//       className="
//         group relative h-full overflow-hidden
//         rounded-2xl
//         border border-gray-800/90
//         bg-black/45
//         backdrop-blur-sm

//         transition-all duration-500 ease-out

//         hover:-translate-y-1
//         hover:border-cyan-400/35
//         hover:bg-black/55

//         focus-within:-translate-y-1
//         focus-within:border-cyan-400/35
//       "
//       style={{
//         boxShadow:
//           "0 0 24px rgba(0,191,255,0.045), inset 0 0 20px rgba(255,255,255,0.012)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 16px 48px rgba(0,191,255,0.09), inset 0 0 24px rgba(0,191,255,0.025)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 0 24px rgba(0,191,255,0.045), inset 0 0 20px rgba(255,255,255,0.012)";
//       }}
//     >
//       {/* TOP EDGE GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-x-8 top-0 h-px
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/0
//           to-transparent
//           transition-all duration-500
//           group-hover:via-cyan-400/50
//         "
//       />

//       {/* CORNER AMBIENT GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute -right-24 -top-24
//           h-48 w-48
//           rounded-full
//           bg-cyan-400/[0.025]
//           blur-3xl
//           transition-all duration-700
//           group-hover:bg-cyan-400/[0.075]
//         "
//       />

//       {/* CARD CONTENT / FULL CARD LINK */}
//       <Link
//         href={`/projects/${project.slug}`}
//         aria-label={`View details for ${project.title}`}
//         className="
//           relative z-10
//           flex h-full min-h-[355px]
//           flex-col
//           p-5 sm:p-6
//           outline-none
//         "
//       >
//         {/* =========================
//             TOP META
//         ========================== */}
//         <div className="flex items-start justify-between gap-4">
//           {/* CATEGORY */}
//           <span
//             className="
//               min-w-0
//               pt-1
//               font-mono
//               text-[9px] sm:text-[10px]
//               uppercase
//               tracking-[0.16em]
//               text-gray-500
//               transition-colors duration-300
//               group-hover:text-gray-400
//             "
//           >
//             {project.category}
//           </span>

//           {/* STATUS */}
//           {project.status && (
//             <span
//               className={`
//                 shrink-0
//                 inline-flex items-center gap-1.5
//                 rounded-full
//                 border
//                 px-2.5 py-1
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.08em]
//                 transition-all duration-300
//                 ${statusClass}
//               `}
//             >
//               <span
//                 className="
//                   h-1.5 w-1.5
//                   rounded-full
//                   bg-current
//                   opacity-75
//                   transition-opacity duration-300
//                   group-hover:opacity-100
//                 "
//               />

//               {project.status}
//             </span>
//           )}
//         </div>

//         {/* =========================
//             TITLE
//         ========================== */}
//         <div className="mt-5">
//           <h3
//             className="
//               max-w-[92%]
//               text-lg sm:text-xl
//               font-semibold
//               leading-snug
//               tracking-[-0.015em]
//               text-gray-100
//               transition-colors duration-300
//               group-hover:text-white
//             "
//           >
//             {project.title}
//           </h3>

//           <div
//             className="
//               mt-2.5
//               h-px
//               w-8
//               bg-gray-700
//               transition-all duration-500
//               group-hover:w-14
//               group-hover:bg-cyan-400/55
//             "
//           />
//         </div>

//         {/* =========================
//             DESCRIPTION
//         ========================== */}
//         <p
//           className="
//             mt-4
//             max-w-2xl
//             text-sm
//             leading-6
//             text-gray-500
//             transition-colors duration-300
//             group-hover:text-gray-400
//             line-clamp-3
//           "
//         >
//           {project.shortDescription}
//         </p>

//         {/* =========================
//             TECH STACK
//         ========================== */}
//         {project.techStack?.length > 0 && (
//           <div className="mt-5">
//             <div
//               className="
//                 mb-2.5
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.14em]
//                 text-gray-700
//               "
//             >
//               Stack
//             </div>

//             <div className="flex flex-wrap gap-1.5">
//               {project.techStack.slice(0, 5).map((tech, index) => (
//                 <span
//                   key={`${tech}-${index}`}
//                   className="
//                     rounded-md
//                     border border-gray-800/90
//                     bg-white/[0.018]
//                     px-2.5 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     text-gray-500
//                     transition-all duration-300
//                     group-hover:border-gray-700
//                     group-hover:bg-white/[0.025]
//                     group-hover:text-gray-400
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}

//               {project.techStack.length > 5 && (
//                 <span
//                   className="
//                     rounded-md
//                     border border-gray-800/70
//                     bg-white/[0.01]
//                     px-2.5 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     text-gray-600
//                   "
//                 >
//                   +{project.techStack.length - 5}
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* =========================
//             BOTTOM ACTION AREA
//         ========================== */}
//         <div
//           className="
//             mt-auto
//             pt-6
//           "
//         >
//           <div
//             className="
//               border-t
//               border-gray-800/70
//               pt-4
//               flex
//               items-center
//               justify-between
//               gap-3
//             "
//           >
//             {/* TIMELINE */}
//             <div className="min-w-0">
//               <div
//                 className="
//                   font-mono
//                   text-[8px] sm:text-[9px]
//                   uppercase
//                   tracking-[0.14em]
//                   text-gray-700
//                 "
//               >
//                 Timeline
//               </div>

//               <div
//                 className="
//                   mt-1
//                   truncate
//                   font-mono
//                   text-[10px] sm:text-[11px]
//                   text-gray-500
//                 "
//               >
//                 {project.timeline || "—"}
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="flex shrink-0 items-center gap-2">
//               {/* VIEW PROJECT */}
//               <span
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   rounded-md
//                   border border-transparent
//                   px-2.5 py-1.5
//                   font-mono
//                   text-[9px] sm:text-[10px]
//                   uppercase
//                   tracking-[0.08em]
//                   text-gray-500
//                   transition-all duration-300
//                   group-hover:text-cyan-300
//                 "
//               >
//                 Details
//                 <span
//                   className="
//                     text-cyan-500/70
//                     transition-transform duration-300
//                     group-hover:translate-x-1
//                     group-hover:text-cyan-400
//                   "
//                 >
//                   →
//                 </span>
//               </span>

//               {/* DEMO */}
//               {/* {demoUrl && (
//                 <a
//                   href={demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`Open demo for ${project.title}`}
//                   className="
//                     inline-flex
//                     items-center
//                     gap-1.5
//                     rounded-md
//                     border
//                     border-cyan-400/30
//                     bg-cyan-400/[0.06]
//                     px-3 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     uppercase
//                     tracking-[0.08em]
//                     text-cyan-300/90

//                     transition-all duration-300

//                     hover:-translate-y-0.5
//                     hover:border-cyan-400/55
//                     hover:bg-cyan-400/[0.11]
//                     hover:text-cyan-200

//                     focus-visible:outline-none
//                     focus-visible:ring-1
//                     focus-visible:ring-cyan-400/60
//                   "
//                 >
//                   Demo
//                   <span
//                     className="
//                       text-cyan-400
//                       transition-transform duration-300
//                       hover:translate-x-0.5
//                     "
//                   >
//                     ↗
//                   </span>
//                 </a>
//               )} */}

// {previewUrl && (
//   <a
//     href={previewUrl}
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label={`${previewLabel} for ${project.title}`}
//     className="
//       inline-flex items-center gap-1.5
//       rounded-md
//       border border-cyan-400/30
//       bg-cyan-400/[0.06]
//       px-3 py-1.5
//       font-mono
//       text-[9px] sm:text-[10px]
//       uppercase
//       tracking-[0.08em]
//       text-cyan-300/90
//       transition-all duration-300
//       hover:-translate-y-0.5
//       hover:border-cyan-400/55
//       hover:bg-cyan-400/[0.11]
//       hover:text-cyan-200
//       focus-visible:outline-none
//       focus-visible:ring-1
//       focus-visible:ring-cyan-400/60
//     "
//   >
//     {previewLabel}
//     <span className="text-cyan-400">
//       ↗
//     </span>
//   </a>
// )}
//             </div>
//           </div>
//         </div>
//       </Link>
//     </article>
//   );
// }



// fixed hydration bug

// import Link from "next/link";

// export default function ProjectCard({ project }) {
//   const previewUrl = project.preview;
//   const previewLabel = project.previewLabel || "Preview";

//   const statusStyles = {
//     Completed:
//       "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
//     Active:
//       "border-amber-400/20 bg-amber-400/[0.05] text-amber-300",
//     Prototype:
//       "border-violet-400/20 bg-violet-400/[0.05] text-violet-300",
//     "Hackathon Project":
//       "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
//   };

//   const statusClass =
//     statusStyles[project.status] ||
//     "border-gray-800 bg-white/[0.02] text-gray-400";

//   return (
//     <article
//       className="
//         group relative h-full overflow-hidden
//         rounded-2xl
//         border border-gray-800/90
//         bg-black/45
//         backdrop-blur-sm

//         transition-all duration-500 ease-out

//         hover:-translate-y-1
//         hover:border-cyan-400/35
//         hover:bg-black/55

//         focus-within:-translate-y-1
//         focus-within:border-cyan-400/35
//       "
//       style={{
//         boxShadow:
//           "0 0 24px rgba(0,191,255,0.045), inset 0 0 20px rgba(255,255,255,0.012)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 16px 48px rgba(0,191,255,0.09), inset 0 0 24px rgba(0,191,255,0.025)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 0 24px rgba(0,191,255,0.045), inset 0 0 20px rgba(255,255,255,0.012)";
//       }}
//     >
//       {/* TOP EDGE GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-x-8 top-0 h-px
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/0
//           to-transparent
//           transition-all duration-500
//           group-hover:via-cyan-400/50
//         "
//       />

//       {/* CORNER AMBIENT GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute -right-24 -top-24
//           h-48 w-48
//           rounded-full
//           bg-cyan-400/[0.025]
//           blur-3xl
//           transition-all duration-700
//           group-hover:bg-cyan-400/[0.075]
//         "
//       />

//       {/* =====================================================
//           FULL CARD NAVIGATION
//           This is now a sibling of the preview <a>.
//           No nested anchors.
//       ====================================================== */}
//       <Link
//         href={`/projects/${project.slug}`}
//         aria-label={`View details for ${project.title}`}
//         className="
//           absolute inset-0
//           z-10
//           rounded-2xl
//           outline-none
//           focus-visible:ring-1
//           focus-visible:ring-inset
//           focus-visible:ring-cyan-400/60
//         "
//       />

//       {/* =====================================================
//           CARD CONTENT
//           pointer-events-none lets clicks pass through to
//           the full-card Link.

//           The preview action below explicitly restores
//           pointer-events-auto.
//       ====================================================== */}
//       <div
//         className="
//           relative z-20
//           flex h-full min-h-[355px]
//           flex-col
//           p-5 sm:p-6
//           pointer-events-none
//         "
//       >
//         {/* =========================
//             TOP META
//         ========================== */}
//         <div className="flex items-start justify-between gap-4">
//           {/* CATEGORY */}
//           <span
//             className="
//               min-w-0
//               pt-1
//               font-mono
//               text-[9px] sm:text-[10px]
//               uppercase
//               tracking-[0.16em]
//               text-gray-500
//               transition-colors duration-300
//               group-hover:text-gray-400
//             "
//           >
//             {project.category}
//           </span>

//           {/* STATUS */}
//           {project.status && (
//             <span
//               className={`
//                 shrink-0
//                 inline-flex items-center gap-1.5
//                 rounded-full
//                 border
//                 px-2.5 py-1
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.08em]
//                 transition-all duration-300
//                 ${statusClass}
//               `}
//             >
//               <span
//                 className="
//                   h-1.5 w-1.5
//                   rounded-full
//                   bg-current
//                   opacity-75
//                   transition-opacity duration-300
//                   group-hover:opacity-100
//                 "
//               />

//               {project.status}
//             </span>
//           )}
//         </div>

//         {/* =========================
//             TITLE
//         ========================== */}
//         <div className="mt-5">
//           <h3
//             className="
//               max-w-[92%]
//               text-lg sm:text-xl
//               font-semibold
//               leading-snug
//               tracking-[-0.015em]
//               text-gray-100
//               transition-colors duration-300
//               group-hover:text-white
//             "
//           >
//             {project.title}
//           </h3>

//           <div
//             className="
//               mt-2.5
//               h-px
//               w-8
//               bg-gray-700
//               transition-all duration-500
//               group-hover:w-14
//               group-hover:bg-cyan-400/55
//             "
//           />
//         </div>

//         {/* =========================
//             DESCRIPTION
//         ========================== */}
//         <p
//           className="
//             mt-4
//             max-w-2xl
//             text-sm
//             leading-6
//             text-gray-500
//             transition-colors duration-300
//             group-hover:text-gray-400
//             line-clamp-3
//           "
//         >
//           {project.shortDescription}
//         </p>

//         {/* =========================
//             TECH STACK
//         ========================== */}
//         {project.techStack?.length > 0 && (
//           <div className="mt-5">
//             <div
//               className="
//                 mb-2.5
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.14em]
//                 text-gray-700
//               "
//             >
//               Stack
//             </div>

//             <div className="flex flex-wrap gap-1.5">
//               {project.techStack.slice(0, 5).map((tech, index) => (
//                 <span
//                   key={`${tech}-${index}`}
//                   className="
//                     rounded-md
//                     border border-gray-800/90
//                     bg-white/[0.018]
//                     px-2.5 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     text-gray-500
//                     transition-all duration-300
//                     group-hover:border-gray-700
//                     group-hover:bg-white/[0.025]
//                     group-hover:text-gray-400
//                   "
//                 >
//                   {tech}
//                 </span>
//               ))}

//               {project.techStack.length > 5 && (
//                 <span
//                   className="
//                     rounded-md
//                     border border-gray-800/70
//                     bg-white/[0.01]
//                     px-2.5 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     text-gray-600
//                   "
//                 >
//                   +{project.techStack.length - 5}
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* =========================
//             BOTTOM ACTION AREA
//         ========================== */}
//         <div className="mt-auto pt-6">
//           <div
//             className="
//               border-t
//               border-gray-800/70
//               pt-4
//               flex
//               items-center
//               justify-between
//               gap-3
//             "
//           >
//             {/* TIMELINE */}
//             <div className="min-w-0">
//               <div
//                 className="
//                   font-mono
//                   text-[8px] sm:text-[9px]
//                   uppercase
//                   tracking-[0.14em]
//                   text-gray-700
//                 "
//               >
//                 Timeline
//               </div>

//               <div
//                 className="
//                   mt-1
//                   truncate
//                   font-mono
//                   text-[10px] sm:text-[11px]
//                   text-gray-500
//                 "
//               >
//                 {project.timeline || "—"}
//               </div>
//             </div>

//             {/* ACTIONS */}
//             <div className="relative z-30 flex shrink-0 items-center gap-2">
//               {/* VIEW PROJECT */}
//               <span
//                 className="
//                   inline-flex
//                   items-center
//                   gap-1.5
//                   rounded-md
//                   border border-transparent
//                   px-2.5 py-1.5
//                   font-mono
//                   text-[9px] sm:text-[10px]
//                   uppercase
//                   tracking-[0.08em]
//                   text-gray-500
//                   transition-all duration-300
//                   group-hover:text-cyan-300
//                 "
//               >
//                 Details

//                 <span
//                   className="
//                     text-cyan-500/70
//                     transition-transform duration-300
//                     group-hover:translate-x-1
//                     group-hover:text-cyan-400
//                   "
//                 >
//                   →
//                 </span>
//               </span>

//               {/* PREVIEW */}
//               {previewUrl && (
//                 <a
//                   href={previewUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={`${previewLabel} for ${project.title}`}
//                   className="
//                     pointer-events-auto
//                     inline-flex
//                     items-center
//                     gap-1.5
//                     rounded-md
//                     border
//                     border-cyan-400/30
//                     bg-cyan-400/[0.06]
//                     px-3 py-1.5
//                     font-mono
//                     text-[9px] sm:text-[10px]
//                     uppercase
//                     tracking-[0.08em]
//                     text-cyan-300/90

//                     transition-all duration-300

//                     hover:-translate-y-0.5
//                     hover:border-cyan-400/55
//                     hover:bg-cyan-400/[0.11]
//                     hover:text-cyan-200

//                     focus-visible:outline-none
//                     focus-visible:ring-1
//                     focus-visible:ring-cyan-400/60
//                   "
//                 >
//                   {previewLabel}

//                   <span
//                     className="
//                       text-cyan-400
//                       transition-transform duration-300
//                     "
//                   >
//                     ↗
//                   </span>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }



// fixed build with switch to tailwind 

import Link from "next/link";

export default function ProjectCard({ project }) {
  const previewUrl = project.preview;
  const previewLabel = project.previewLabel || "Preview";

  const statusStyles = {
    Completed:
      "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
    Active:
      "border-amber-400/20 bg-amber-400/[0.05] text-amber-300",
    Prototype:
      "border-violet-400/20 bg-violet-400/[0.05] text-violet-300",
    "Hackathon Project":
      "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
  };

  const statusClass =
    statusStyles[project.status] ||
    "border-gray-800 bg-white/[0.02] text-gray-400";

  return (
    <article
      className="
        group relative h-full overflow-hidden
        rounded-2xl
        border border-gray-800/90
        bg-black/45
        backdrop-blur-sm

        shadow-[0_0_24px_rgba(0,191,255,0.045),inset_0_0_20px_rgba(255,255,255,0.012)]

        transition-all duration-500 ease-out

        hover:-translate-y-1
        hover:border-cyan-400/35
        hover:bg-black/55
        hover:shadow-[0_16px_48px_rgba(0,191,255,0.09),inset_0_0_24px_rgba(0,191,255,0.025)]

        focus-within:-translate-y-1
        focus-within:border-cyan-400/35
      "
    >
      {/* TOP EDGE GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-x-8 top-0 h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/0
          to-transparent
          transition-all duration-500
          group-hover:via-cyan-400/50
        "
      />

      {/* CORNER AMBIENT GLOW */}
      <div
        className="
          pointer-events-none
          absolute -right-24 -top-24
          h-48 w-48
          rounded-full
          bg-cyan-400/[0.025]
          blur-3xl
          transition-all duration-700
          group-hover:bg-cyan-400/[0.075]
        "
      />

      {/* FULL CARD NAVIGATION */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View details for ${project.title}`}
        className="
          absolute inset-0
          z-10
          rounded-2xl
          outline-none
          focus-visible:ring-1
          focus-visible:ring-inset
          focus-visible:ring-cyan-400/60
        "
      />

      {/* CARD CONTENT */}
      <div
        className="
          relative z-20
          flex h-full min-h-[355px]
          flex-col
          p-5 sm:p-6
          pointer-events-none
        "
      >
        {/* TOP META */}
        <div className="flex items-start justify-between gap-4">
          <span
            className="
              min-w-0
              pt-1
              font-mono
              text-[9px] sm:text-[10px]
              uppercase
              tracking-[0.16em]
              text-gray-500
              transition-colors duration-300
              group-hover:text-gray-400
            "
          >
            {project.category}
          </span>

          {project.status && (
            <span
              className={`
                shrink-0
                inline-flex items-center gap-1.5
                rounded-full
                border
                px-2.5 py-1
                font-mono
                text-[9px]
                uppercase
                tracking-[0.08em]
                transition-all duration-300
                ${statusClass}
              `}
            >
              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-current
                  opacity-75
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {project.status}
            </span>
          )}
        </div>

        {/* TITLE */}
        <div className="mt-5">
          <h3
            className="
              max-w-[92%]
              text-lg sm:text-xl
              font-semibold
              leading-snug
              tracking-[-0.015em]
              text-gray-100
              transition-colors duration-300
              group-hover:text-white
            "
          >
            {project.title}
          </h3>

          <div
            className="
              mt-2.5
              h-px
              w-8
              bg-gray-700
              transition-all duration-500
              group-hover:w-14
              group-hover:bg-cyan-400/55
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            max-w-2xl
            text-sm
            leading-6
            text-gray-500
            transition-colors duration-300
            group-hover:text-gray-400
            line-clamp-3
          "
        >
          {project.shortDescription}
        </p>

        {/* TECH STACK */}
        {project.techStack?.length > 0 && (
          <div className="mt-5">
            <div
              className="
                mb-2.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-gray-700
              "
            >
              Stack
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 5).map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="
                    rounded-md
                    border border-gray-800/90
                    bg-white/[0.018]
                    px-2.5 py-1.5
                    font-mono
                    text-[9px] sm:text-[10px]
                    text-gray-500
                    transition-all duration-300
                    group-hover:border-gray-700
                    group-hover:bg-white/[0.025]
                    group-hover:text-gray-400
                  "
                >
                  {tech}
                </span>
              ))}

              {project.techStack.length > 5 && (
                <span
                  className="
                    rounded-md
                    border border-gray-800/70
                    bg-white/[0.01]
                    px-2.5 py-1.5
                    font-mono
                    text-[9px] sm:text-[10px]
                    text-gray-600
                  "
                >
                  +{project.techStack.length - 5}
                </span>
              )}
            </div>
          </div>
        )}

        {/* BOTTOM ACTION AREA */}
        <div className="mt-auto pt-6">
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              border-t
              border-gray-800/70
              pt-4
            "
          >
            {/* TIMELINE */}
            <div className="min-w-0">
              <div
                className="
                  font-mono
                  text-[8px] sm:text-[9px]
                  uppercase
                  tracking-[0.14em]
                  text-gray-700
                "
              >
                Timeline
              </div>

              <div
                className="
                  mt-1
                  truncate
                  font-mono
                  text-[10px] sm:text-[11px]
                  text-gray-500
                "
              >
                {project.timeline || "—"}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="relative z-30 flex shrink-0 items-center gap-2">
              {/* VIEW PROJECT */}
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  border border-transparent
                  px-2.5 py-1.5
                  font-mono
                  text-[9px] sm:text-[10px]
                  uppercase
                  tracking-[0.08em]
                  text-gray-500
                  transition-all duration-300
                  group-hover:text-cyan-300
                "
              >
                Details

                <span
                  className="
                    text-cyan-500/70
                    transition-transform duration-300
                    group-hover:translate-x-1
                    group-hover:text-cyan-400
                  "
                >
                  →
                </span>
              </span>

              {/* PREVIEW */}
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${previewLabel} for ${project.title}`}
                  className="
                    pointer-events-auto
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-cyan-400/30
                    bg-cyan-400/[0.06]
                    px-3 py-1.5
                    font-mono
                    text-[9px] sm:text-[10px]
                    uppercase
                    tracking-[0.08em]
                    text-cyan-300/90

                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:border-cyan-400/55
                    hover:bg-cyan-400/[0.11]
                    hover:text-cyan-200

                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-cyan-400/60
                  "
                >
                  {previewLabel}

                  <span
                    className="
                      text-cyan-400
                      transition-transform duration-300
                    "
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}