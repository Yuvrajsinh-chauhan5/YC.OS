import projects from "@/data/projects";

export default function Projects() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      {projects.map((p, i) => (
        <div key={i} className="bg-gray-900 p-6 rounded mb-4">
          <h2 className="text-xl">{p.title}</h2>

          <p className="text-gray-400">
            {p.description}
          </p>
        </div>
      ))}
    </section>
  );
}