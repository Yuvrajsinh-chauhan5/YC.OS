// import Link from "next/link";

// const groups = [
//   "Backend Engineering",
//   "Cloud & DevOps",
//   "System Design",
//   "Frontend",
// ];

// export default function Skills() {

//   return (
//     <section className="p-10">

//       <h1 className="text-4xl mb-10">Skills</h1>

//       <div className="grid md:grid-cols-2 gap-6">

//       {groups.map((g, index) => (
//   <div
//     key={index}
//     className="border p-6 rounded-xl"
//   >
//     {g}
//   </div>
// ))}

//       </div>

//     </section>
//   );
// }


import skills from "@/data/skills";

export default function Skills() {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-10">Skills</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <div key={i} className="border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl text-cyan-400 mb-4">
              {group.category}
            </h2>

            <div className="flex flex-wrap gap-2">
              {group.items.map((s, j) => (
                <span key={j} className="bg-gray-900 px-3 py-1 rounded">
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