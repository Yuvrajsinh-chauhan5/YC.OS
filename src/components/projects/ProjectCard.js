import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-gray-800 p-6 rounded-xl hover:scale-105 transition text-left bg-black/40">

      {/* TITLE */}
      <h3 className="text-xl font-bold">{project.title}</h3>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-2 text-sm">
        {project.shortDescription}
      </p>

      {/* TECH STACK */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack?.slice(0, 3).map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-800 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* META */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <span>{project.timeline}</span>
        <span className="text-green-400">{project.status}</span>
      </div>

      {/* ACTIONS */}
      <div className="mt-5 flex gap-3">

        {/* DETAILS PAGE */}
        <Link
          href={`/projects/${project.slug}`}
          className="px-3 py-1 bg-cyan-700 rounded text-xs"
        >
          View Details
        </Link>

        {/* 🔥 SINGLE UNIFIED DEMO BUTTON */}
        {(project.demo || project.video) && (
          <a
            href={project.demo || project.video}
            target="_blank"
            className="px-3 py-1 bg-green-800 rounded text-xs"
          >
            Demo
          </a>
        )}

      </div>

    </div>
  );
}