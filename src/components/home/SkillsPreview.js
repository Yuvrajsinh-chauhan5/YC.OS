"use client";

import skills from "@/data/skills";

export default function SkillsPreview() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20">

      <h2 className="text-3xl font-bold text-center mb-12 glow-text">
      Technical Expertise
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {skills.map((group, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl p-6 bg-black/40 hover:scale-[1.02] transition"
          >

            {/* Category */}
            <h3 className="text-xl font-semibold text-cyan-400">
              {group.category}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-2 mb-4">
              {group.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((s, j) => (
                <span
                  key={j}
                  className="text-xs bg-gray-900 border border-gray-800 px-3 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}