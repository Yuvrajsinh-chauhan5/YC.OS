// import projects from "@/data/projects";

// export default function Projects() {
//   return (
//     <section className="p-10">
//       <h1 className="text-4xl font-bold mb-6">Projects</h1>

//       {projects.map((p, i) => (
//         <div key={i} className="bg-gray-900 p-6 rounded mb-4">
//           <h2 className="text-xl">{p.title}</h2>

//           <p className="text-gray-400">
//             {p.description}
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// }

import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-5 py-24 sm:px-6 sm:py-28">
      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/70" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-400/80">
              Project Registry
            </span>
            <span className="h-px flex-1 max-w-24 bg-gradient-to-r from-cyan-400/50 to-transparent" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Selected Systems
              </h1>

              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
                A collection of engineered systems, backend architectures,
                AI workflows, and full-stack applications built across
                different problem domains.
              </p>
            </div>

            {/* TERMINAL PATH */}
            <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
              <span className="text-cyan-400">~/yc.dev</span>
              <span className="text-gray-700">/</span>
              projects
              <span className="text-cyan-400"> $</span> ls
            </div>
          </div>
        </div>

        {/* PROJECT GRID */}
        <section
          aria-label="Project registry"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </section>

        {/* FOOTER STATUS */}
        <div className="mt-10 flex items-center justify-between border-t border-gray-900 pt-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
            registry / {projects.length} systems
          </span>

          <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
            index ready
          </span>
        </div>
      </div>
    </main>
  );
}