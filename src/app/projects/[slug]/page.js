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





import projects from "@/data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        Project not found: {slug}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* HERO */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3 text-sm mt-4">
            <span className="px-3 py-1 bg-green-900/40 border border-green-700 rounded-full">
              {project.status}
            </span>
            <span className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full">
              {project.timeline}
            </span>
            <span className="px-3 py-1 bg-cyan-900/40 border border-cyan-700 rounded-full">
              {project.category}
            </span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-cyan-400">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {project.fullDescription}
          </p>
        </section>

        {/* HIGHLIGHTS */}
        {project.highlights?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-400">
              Key Highlights
            </h2>

            <div className="grid gap-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-cyan-400 mt-1">▹</span>
                  <p>{h}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TECH STACK */}
        {project.techStack?.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-400">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-900 border border-gray-800 rounded-full hover:border-cyan-600 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA / LINKS */}
        {(project.demo || project.video) && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-400">
              Live / Demo
            </h2>

            <div className="flex flex-wrap gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition font-medium"
                >
                  Live Demo
                </a>
              )}

              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  className="px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition font-medium"
                >
                  Watch Demo
                </a>
              )}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}