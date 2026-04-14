"use client";

import projects from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section className="min-h-screen text-center py-20">

      <h2 className="text-3xl mb-12 glow-text">
        Featured Systems
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">

        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <ProjectCard project={p} />
          </Link>
        ))}

      </div>

    </section>
  );
}