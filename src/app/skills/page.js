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


// import skills from "@/data/skills";

// export default function Skills() {
//   return (
//     <section className="p-10">
//       <h1 className="text-4xl font-bold mb-10">Skills</h1>

//       <div className="grid md:grid-cols-2 gap-6">
//         {skills.map((group, i) => (
//           <div key={i} className="border border-gray-800 p-6 rounded-xl">
//             <h2 className="text-xl text-cyan-400 mb-4">
//               {group.category}
//             </h2>

//             <div className="flex flex-wrap gap-2">
//               {group.items.map((s, j) => (
//                 <span key={j} className="bg-gray-900 px-3 py-1 rounded">
//                   {s}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// // }
// "use client";

// import skills from "@/data/skills";

// export default function SkillsPreview() {
//   return (
//     <section
//       id="skills"
//       className="
//         relative
//         px-5 py-24
//         sm:px-6 sm:py-28
//       "
//     >
//       {/* =========================
//           SECTION HEADER
//       ========================== */}
//       <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
//         <div className="mb-4 flex items-center justify-center gap-3">
//           <span
//             className="
//               h-px w-10
//               bg-gradient-to-r
//               from-transparent
//               to-cyan-400/40
//             "
//           />

//           <span
//             className="
//               font-mono
//               text-[9px] sm:text-[10px]
//               uppercase
//               tracking-[0.2em]
//               text-gray-600
//             "
//           >
//             Engineering Stack
//           </span>

//           <span
//             className="
//               h-px w-10
//               bg-gradient-to-l
//               from-transparent
//               to-cyan-400/40
//             "
//           />
//         </div>

//         <h2
//           className="
//             text-3xl
//             font-bold
//             tracking-[-0.025em]
//             text-gray-100
//             sm:text-4xl
//           "
//         >
//           Technical Expertise
//         </h2>

//         <p
//           className="
//             mx-auto mt-4
//             max-w-2xl
//             text-sm
//             leading-6
//             text-gray-500
//             sm:text-base
//           "
//         >
//           Technologies and engineering foundations used to design,
//           build, and operate modern software systems.
//         </p>
//       </div>

//       {/* =========================
//           SKILL GRID
//       ========================== */}
//       <div
//         className="
//           mx-auto
//           grid
//           max-w-6xl
//           grid-cols-1
//           gap-5
//           md:grid-cols-2
//           md:gap-6
//         "
//       >
//         {skills.map((group, index) => (
//           <SkillCard
//             key={group.category}
//             group={group}
//             index={index}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


// /* =========================================================
//    SKILL CARD
// ========================================================= */

// function SkillCard({ group, index }) {
//   const skillCount = group.items?.length || 0;

//   return (
//     <article
//       className="
//         group relative
//         h-full
//         overflow-hidden
//         rounded-2xl

//         border border-gray-800/90
//         bg-black/45
//         backdrop-blur-sm

//         transition-all
//         duration-500
//         ease-out

//         hover:-translate-y-1
//         hover:border-cyan-400/30
//         hover:bg-black/55

//         focus-within:-translate-y-1
//         focus-within:border-cyan-400/30
//       "
//       style={{
//         boxShadow:
//           "0 0 22px rgba(0,191,255,0.04), inset 0 0 20px rgba(255,255,255,0.01)",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 14px 42px rgba(0,191,255,0.075), inset 0 0 22px rgba(0,191,255,0.02)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.boxShadow =
//           "0 0 22px rgba(0,191,255,0.04), inset 0 0 20px rgba(255,255,255,0.01)";
//       }}
//     >
//       {/* =========================
//           TOP EDGE
//       ========================== */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-x-8 top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-cyan-400/0
//           to-transparent

//           transition-all
//           duration-500

//           group-hover:via-cyan-400/45
//         "
//       />

//       {/* =========================
//           CORNER AMBIENT GLOW
//       ========================== */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-24
//           -top-24
//           h-48
//           w-48
//           rounded-full
//           bg-cyan-400/[0.02]
//           blur-3xl

//           transition-all
//           duration-700

//           group-hover:bg-cyan-400/[0.065]
//         "
//       />

//       {/* =========================
//           CARD CONTENT
//       ========================== */}
//       <div
//         className="
//           relative
//           flex
//           h-full
//           min-h-[285px]
//           flex-col
//           p-5
//           sm:p-6
//         "
//       >
//         {/* =========================
//             CARD HEADER
//         ========================== */}
//         <div className="flex items-start justify-between gap-4">
//           {/* CATEGORY */}
//           <div className="min-w-0">
//             <div className="flex items-center gap-2.5">
//               <span
//                 className="
//                   h-1.5
//                   w-1.5
//                   shrink-0
//                   rounded-full
//                   bg-cyan-400/60

//                   transition-all
//                   duration-300

//                   group-hover:bg-cyan-400
//                   group-hover:shadow-[0_0_8px_rgba(0,191,255,0.5)]
//                 "
//               />

//               <h3
//                 className="
//                   text-base
//                   font-semibold
//                   leading-snug
//                   tracking-[-0.01em]
//                   text-gray-200

//                   transition-colors
//                   duration-300

//                   group-hover:text-white
//                 "
//               >
//                 {group.category}
//               </h3>
//             </div>
//           </div>

//           {/* SKILL COUNT */}
//           <div
//             className="
//               shrink-0
//               rounded-md
//               border border-gray-800/80
//               bg-white/[0.015]
//               px-2
//               py-1

//               font-mono
//               text-[9px]
//               uppercase
//               tracking-[0.1em]
//               text-gray-600

//               transition-all
//               duration-300

//               group-hover:border-cyan-400/20
//               group-hover:text-cyan-400/70
//             "
//           >
//             {skillCount} Skills
//           </div>
//         </div>

//         {/* =========================
//             CATEGORY ACCENT
//         ========================== */}
//         <div
//           className="
//             mt-4
//             h-px
//             w-10
//             bg-gray-800

//             transition-all
//             duration-500

//             group-hover:w-16
//             group-hover:bg-cyan-400/50
//           "
//         />

//         {/* =========================
//             DESCRIPTION
//         ========================== */}
//         <p
//           className="
//             mt-4
//             max-w-xl
//             text-sm
//             leading-6
//             text-gray-500

//             transition-colors
//             duration-300

//             group-hover:text-gray-400
//           "
//         >
//           {group.description}
//         </p>

//         {/* =========================
//             SKILLS
//         ========================== */}
//         <div className="mt-6">
//           <div
//             className="
//               mb-2.5
//               font-mono
//               text-[9px]
//               uppercase
//               tracking-[0.15em]
//               text-gray-700
//             "
//           >
//             Technologies
//           </div>

//           <div className="flex flex-wrap gap-1.5">
//             {group.items?.map((skill, skillIndex) => (
//               <span
//                 key={`${skill}-${skillIndex}`}
//                 className="
//                   inline-flex
//                   items-center

//                   rounded-md
//                   border
//                   border-gray-800/90
//                   bg-white/[0.018]

//                   px-2.5
//                   py-1.5

//                   font-mono
//                   text-[9px]
//                   leading-none
//                   text-gray-500

//                   transition-all
//                   duration-300
//                   ease-out

//                   hover:-translate-y-px
//                   hover:border-cyan-400/25
//                   hover:bg-cyan-400/[0.045]
//                   hover:text-cyan-300

//                   sm:text-[10px]
//                 "
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* =========================
//             BOTTOM STATUS
//         ========================== */}
//         <div
//           className="
//             mt-auto
//             pt-6
//           "
//         >
//           <div
//             className="
//               flex
//               items-center
//               justify-between
//               border-t
//               border-gray-800/60
//               pt-4
//             "
//           >
//             <span
//               className="
//                 font-mono
//                 text-[8px]
//                 uppercase
//                 tracking-[0.15em]
//                 text-gray-700
//               "
//             >
//               Technical Domain
//             </span>

//             <span
//               className="
//                 inline-flex
//                 items-center
//                 gap-1.5
//                 font-mono
//                 text-[9px]
//                 uppercase
//                 tracking-[0.1em]
//                 text-gray-600

//                 transition-colors
//                 duration-300

//                 group-hover:text-cyan-400/70
//               "
//             >
//               <span
//                 className="
//                   h-1
//                   w-1
//                   rounded-full
//                   bg-gray-700

//                   transition-all
//                   duration-300

//                   group-hover:bg-cyan-400
//                 "
//               />

//               Active
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }


// enhanced version with added terminal

"use client";

import { useEffect, useState } from "react";
import skills from "@/data/skills";

/* =========================================================
   SKILLS TERMINAL
========================================================= */

function SkillsTerminal() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [visibleLines, setVisibleLines] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  const currentCategory = skills[categoryIndex];

  const terminalLines = [
    {
      prefix: "→",
      text: `domain ...... ${currentCategory.category}`,
      type: "success",
    },
    {
      prefix: "→",
      text: `scope ....... ${currentCategory.description}`,
      type: "normal",
    },
    ...currentCategory.items.map((skill) => ({
      prefix: "✓",
      text: `skill ....... ${skill}`,
      type: "info",
    })),
  ];

  const currentLine = terminalLines[lineIndex];

  /*
   * TYPE CURRENT LINE
   */

  useEffect(() => {
    if (!isTyping || !currentLine) return;

    if (charIndex < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCurrentText(
          currentLine.text.slice(0, charIndex + 1)
        );

        setCharIndex((prev) => prev + 1);
      }, 28);

      return () => clearTimeout(timer);
    }

    /*
     * PAUSE BEFORE NEXT LINE
     */

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [
        ...prev,
        {
          ...currentLine,
          text: currentLine.text,
        },
      ]);

      setCurrentText("");
      setCharIndex(0);

      /*
       * NEXT LINE
       */

      if (lineIndex < terminalLines.length - 1) {
        setLineIndex((prev) => prev + 1);
      } else {
        /*
         * CATEGORY COMPLETE
         */

        setIsTyping(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [
    charIndex,
    lineIndex,
    categoryIndex,
    isTyping,
    currentLine,
    terminalLines.length,
  ]);

  /*
   * ERASE + LOAD NEXT CATEGORY
   */

  useEffect(() => {
    if (isTyping) return;

    const timer = setTimeout(() => {
      setVisibleLines([]);
      setCurrentText("");
      setCharIndex(0);
      setLineIndex(0);
      setIsTyping(true);

      setCategoryIndex(
        (prev) => (prev + 1) % skills.length
      );
    }, 2200);

    return () => clearTimeout(timer);
  }, [isTyping]);

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-gray-800/90
        bg-black/70
        backdrop-blur-sm
      "
      style={{
        boxShadow:
          "0 0 35px rgba(0,191,255,0.045), inset 0 0 25px rgba(255,255,255,0.012)",
      }}
    >
      {/* =====================================================
          TOP GLOW
      ===================================================== */}

      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />

      {/* =====================================================
          TERMINAL HEADER
      ===================================================== */}

      <div className="flex items-center justify-between border-b border-gray-800/70 px-5 py-3.5">

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />
        </div>

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-gray-600">
          skills.shell
        </span>

        <span className="font-mono text-[8px] text-gray-700">
          YC.OS
        </span>
      </div>

      {/* =====================================================
          FIXED TERMINAL BODY

          IMPORTANT:
          h-[300px] prevents the terminal from expanding.
      ===================================================== */}

      <div className="h-[400px] overflow-hidden px-5 py-5 sm:px-6">

        <div className="mb-5 font-mono text-[9px] text-gray-700">
          ~/yc.dev/skills $
        </div>

        <div className="space-y-2 font-mono text-[10px] leading-5 sm:text-[11px]">

          {/* =================================================
              CURRENT COMMAND
          ================================================= */}

          <div className="mb-3 flex gap-2">
            <span className="text-gray-500">
              &gt;
            </span>

            <span className="text-cyan-300/90">
              skills --inspect
            </span>
          </div>

          {/* =================================================
              PREVIOUS OUTPUT
          ================================================= */}

          {visibleLines.map((line, index) => (
            <div
              key={`${categoryIndex}-${line.text}-${index}`}
              className="flex gap-2"
            >
              <span
                className={
                  line.type === "success"
                    ? "text-cyan-400/80"
                    : line.type === "info"
                    ? "text-cyan-300"
                    : "text-gray-600"
                }
              >
                {line.prefix}
              </span>

              <span
                className={
                  line.type === "success"
                    ? "text-gray-300"
                    : line.type === "info"
                    ? "text-cyan-300/80"
                    : "text-gray-500"
                }
              >
                {line.text}
              </span>
            </div>
          ))}

          {/* =================================================
              CURRENT TYPING LINE
          ================================================= */}

          {isTyping && currentLine && (
            <div className="flex gap-2">
              <span
                className={
                  currentLine.type === "success"
                    ? "text-cyan-400/80"
                    : currentLine.type === "info"
                    ? "text-cyan-300"
                    : "text-gray-600"
                }
              >
                {currentLine.prefix}
              </span>

              <span className="text-cyan-300/90">
                {currentText}

                <span className="ml-1 inline-block h-3.5 w-[5px] translate-y-[2px] animate-pulse bg-cyan-400/80" />
              </span>
            </div>
          )}

          {/* =================================================
              FINAL PROMPT
          ================================================= */}

          {!isTyping && (
            <div className="mt-3 text-cyan-400">
              <span className="text-gray-600">
                ~/yc.dev/skills $
              </span>{" "}
              <span className="animate-pulse">
                █
              </span>
            </div>
          )}

        </div>
      </div>

      {/* =====================================================
          TERMINAL FOOTER
      ===================================================== */}

      <div className="flex items-center justify-between border-t border-gray-800/70 px-5 py-3.5 sm:px-6">

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-gray-700">
          technical registry
        </span>

        <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-gray-600">
          <span
            className="h-1.5 w-1.5 rounded-full bg-cyan-400"
            style={{
              boxShadow:
                "0 0 7px rgba(0,191,255,0.65)",
            }}
          />

          {isTyping ? "scanning" : "ready"}
        </span>

      </div>
    </div>
  );
}


/* =========================================================
   MAIN SKILLS PREVIEW
========================================================= */

export default function SkillsPreview() {
  return (
    <section
      id="skills"
      className="
        relative
        px-5 py-24
        sm:px-6 sm:py-28
      "
    >

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">

        <div className="mb-4 flex items-center justify-center gap-3">

          <span
            className="
              h-px w-10
              bg-gradient-to-r
              from-transparent
              to-cyan-400/40
            "
          />

          <span
            className="
              font-mono
              text-[9px] sm:text-[10px]
              uppercase
              tracking-[0.2em]
              text-gray-600
            "
          >
            Engineering Stack
          </span>

          <span
            className="
              h-px w-10
              bg-gradient-to-l
              from-transparent
              to-cyan-400/40
            "
          />

        </div>

        <h2
          className="
            text-3xl
            font-bold
            tracking-[-0.025em]
            text-gray-100
            sm:text-4xl
          "
        >
          Technical Expertise
        </h2>

        <p
          className="
            mx-auto mt-4
            max-w-2xl
            text-sm
            leading-6
            text-gray-500
            sm:text-base
          "
        >
          Technologies and engineering foundations used to design,
          build, and operate modern software systems.
        </p>

      </div>


      {/* =====================================================
          SKILLS TERMINAL
      ===================================================== */}

      <div className="mx-auto mb-12 max-w-6xl">

        <SkillsTerminal />

      </div>


      {/* =====================================================
          SKILL GRID
      ===================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          gap-5
          md:grid-cols-2
          md:gap-6
        "
      >

        {skills.map((group, index) => (
          <SkillCard
            key={group.category}
            group={group}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ group, index }) {
  const skillCount = group.items?.length || 0;

  return (
    <article
      className="
        group relative
        h-full
        overflow-hidden
        rounded-2xl

        border border-gray-800/90
        bg-black/45
        backdrop-blur-sm

        transition-all
        duration-500
        ease-out

        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-black/55

        focus-within:-translate-y-1
        focus-within:border-cyan-400/30
      "
      style={{
        boxShadow:
          "0 0 22px rgba(0,191,255,0.04), inset 0 0 20px rgba(255,255,255,0.01)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 14px 42px rgba(0,191,255,0.075), inset 0 0 22px rgba(0,191,255,0.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 22px rgba(0,191,255,0.04), inset 0 0 20px rgba(255,255,255,0.01)";
      }}
    >

      {/* =====================================================
          TOP EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-x-8 top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/0
          to-transparent

          transition-all
          duration-500

          group-hover:via-cyan-400/45
        "
      />

      {/* =====================================================
          CORNER AMBIENT GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-cyan-400/[0.02]
          blur-3xl

          transition-all
          duration-700

          group-hover:bg-cyan-400/[0.065]
        "
      />

      {/* =====================================================
          CARD CONTENT
      ===================================================== */}

      <div
        className="
          relative
          flex
          h-full
          min-h-[285px]
          flex-col
          p-5
          sm:p-6
        "
      >

        {/* =================================================
            CARD HEADER
        ================================================= */}

        <div className="flex items-start justify-between gap-4">

          {/* CATEGORY */}

          <div className="min-w-0">

            <div className="flex items-center gap-2.5">

              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-cyan-400/60

                  transition-all
                  duration-300

                  group-hover:bg-cyan-400
                  group-hover:shadow-[0_0_8px_rgba(0,191,255,0.5)]
                "
              />

              <h3
                className="
                  text-base
                  font-semibold
                  leading-snug
                  tracking-[-0.01em]
                  text-gray-200

                  transition-colors
                  duration-300

                  group-hover:text-white
                "
              >
                {group.category}
              </h3>

            </div>

          </div>


          {/* SKILL COUNT */}

          <div
            className="
              shrink-0
              rounded-md
              border border-gray-800/80
              bg-white/[0.015]
              px-2
              py-1

              font-mono
              text-[9px]
              uppercase
              tracking-[0.1em]
              text-gray-600

              transition-all
              duration-300

              group-hover:border-cyan-400/20
              group-hover:text-cyan-400/70
            "
          >
            {skillCount} Skills
          </div>

        </div>


        {/* =================================================
            CATEGORY ACCENT
        ================================================= */}

        <div
          className="
            mt-4
            h-px
            w-10
            bg-gray-800

            transition-all
            duration-500

            group-hover:w-16
            group-hover:bg-cyan-400/50
          "
        />


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-4
            max-w-xl
            text-sm
            leading-6
            text-gray-500

            transition-colors
            duration-300

            group-hover:text-gray-400
          "
        >
          {group.description}
        </p>


        {/* =================================================
            SKILLS
        ================================================= */}

        <div className="mt-6">

          <div
            className="
              mb-2.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-gray-700
            "
          >
            Technologies
          </div>

          <div className="flex flex-wrap gap-1.5">

            {group.items?.map((skill, skillIndex) => (
              <span
                key={`${skill}-${skillIndex}`}
                className="
                  inline-flex
                  items-center

                  rounded-md
                  border
                  border-gray-800/90
                  bg-white/[0.018]

                  px-2.5
                  py-1.5

                  font-mono
                  text-[9px]
                  leading-none
                  text-gray-500

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-px
                  hover:border-cyan-400/25
                  hover:bg-cyan-400/[0.045]
                  hover:text-cyan-300

                  sm:text-[10px]
                "
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM STATUS
        ================================================= */}

        <div className="mt-auto pt-6">

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-gray-800/60
              pt-4
            "
          >

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-gray-700
              "
            >
              Technical Domain
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1.5
                font-mono
                text-[9px]
                uppercase
                tracking-[0.1em]
                text-gray-600

                transition-colors
                duration-300

                group-hover:text-cyan-400/70
              "
            >

              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-gray-700

                  transition-all
                  duration-300

                  group-hover:bg-cyan-400
                "
              />

              Active

            </span>

          </div>

        </div>

      </div>

    </article>
  );
}