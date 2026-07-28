



// "use client";



// import { motion, AnimatePresence } from "framer-motion";

// import { useState } from "react";



// const experiences = [

//   {

//     period: "June 2026 – July 2026",

//     role: "Java Backend Development Intern",

//     company: "Keyanna Technology Private Limited",

//     type: "Internship",

//     summary:

//       "Worked on an enterprise digital payment and wallet management platform, contributing to the ticket management microservice and backend workflows.",

//     description:

//       "Worked as a Java Backend Development Intern on an enterprise digital payment and wallet management platform. My primary contribution was within the ticket management microservice, where I worked on backend functionality, REST APIs, ticket workflows, and service-level integration using Java and Spring Boot.",

//     highlights: [

//       "Developed backend CRUD functionality for the ticket management module.",

//       "Implemented ticket creation, retrieval, filtering, assignment, picking, and unpicking workflows.",

//       "Worked with REST APIs and tested backend services using Postman.",

//       "Worked with JWT-based authentication and backend service integration.",

//       "Implemented and tested ticket-related workflows with pagination and filtering.",

//     ],

//     stack: [

//       "Java",

//       "Spring Boot",

//       "Microservices",

//       "REST APIs",

//       "JWT",

//       "Postman",

//     ],

//   },



//   {

//     period: "Jan 2025 – Apr 2025",

//     role: "Backend Developer",

//     company: "Gandhinagar University",

//     type: "Part-time",

//     summary:

//       "Contributed to the backend development of the university's Cultural & Technical Fest 2025 registration platform.",

//     description:

//       "Contributed as a backend developer for the institute's Cultural & Technical Fest 2025 registration platform, focusing on authentication, user registration, and database-driven backend workflows used during the event.",

//     highlights: [

//       "Designed and implemented OTP-based registration and authentication workflows.",

//       "Implemented user registration and validation functionality.",

//       "Integrated backend services with relational databases.",

//       "Worked on reliable user management and event registration workflows.",

//       "Supported backend functionality for real-world event operations.",

//     ],

//     stack: [

//       "Backend Development",

//       "OTP Authentication",

//       "REST APIs",

//       "Database",

//     ],

//   },



//   {

//     period: "2024 – 2025",

//     role: "Team Lead",

//     company: "Smart India Hackathon (SIH)",

//     type: "Leadership & Hackathons",

//     summary:

//       "Led student teams through national-level hackathon projects, driving technical decisions, system architecture, and end-to-end prototype development.",

//     description:

//       "Led multidisciplinary student teams during Smart India Hackathon projects in 2024 and 2025. Worked across technical planning, system architecture, task coordination, and prototype development while managing project execution under competitive timelines.",

//     highlights: [

//       "Led project teams through SIH 2024 and 2025 project submissions.",

//       "Directed system architecture and technical decision-making.",

//       "Coordinated frontend, backend, and AI development workflows.",

//       "Managed task planning, feature prioritization, and project execution.",

//       "Worked with team members to deliver functional prototypes for evaluation.",

//     ],

//     stack: [

//       "System Architecture",

//       "Team Leadership",

//       "Project Planning",

//       "Backend",

//       "Frontend",

//       "AI/ML",

//     ],

//   },

// ];



// export default function Experience() {

//   const [expandedIndex, setExpandedIndex] = useState(null);



//   const toggleExperience = (index) => {

//     setExpandedIndex((current) =>

//       current === index ? null : index

//     );

//   };



//   return (

//     <section

//       id="experience"

//       className="relative min-h-screen px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"

//     >

//       {/* BACKGROUND GLOW */}

//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />



//       <div className="relative max-w-6xl mx-auto">



//         {/* =========================

//             SECTION HEADER

//         ========================= */}



//         <motion.div

//           initial={{ opacity: 0, y: 30 }}

//           whileInView={{ opacity: 1, y: 0 }}

//           viewport={{ once: true }}

//           transition={{ duration: 0.7 }}

//           className="mb-16"

//         >

//           <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 mb-3">

//             Career Timeline

//           </p>



//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#e5e5e5] glow-text">

//             Experience

//           </h2>



//           <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#e5e5e5]/60 leading-relaxed">

//             A timeline of my professional experience, backend development work,

//             and technical leadership across real-world software projects.

//           </p>

//         </motion.div>



//         {/* =========================

//             TIMELINE

//         ========================= */}



//         <div className="relative">



//           {/* VERTICAL TIMELINE LINE */}



//           <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cyan-400/20 md:left-1/2 md:-translate-x-1/2" />



//           <div className="space-y-12 md:space-y-20">



//             {experiences.map((experience, index) => {

//               const isEven = index % 2 === 0;

//               const isExpanded = expandedIndex === index;



//               return (

//                 <motion.div

//                   key={`${experience.company}-${experience.period}`}

//                   initial={{

//                     opacity: 0,

//                     y: 40,

//                   }}

//                   whileInView={{

//                     opacity: 1,

//                     y: 0,

//                   }}

//                   viewport={{

//                     once: true,

//                     margin: "-100px",

//                   }}

//                   transition={{

//                     duration: 0.7,

//                     delay: index * 0.15,

//                   }}

//                   className="relative md:grid md:grid-cols-2 md:gap-16"

//                 >



//                   {/* =========================

//                       TIMELINE DOT

//                   ========================= */}



//                   <div className="absolute left-0 top-7 z-10 md:left-1/2 md:-translate-x-1/2">

//                     <motion.div

//                       animate={{

//                         scale: isExpanded ? 1.2 : 1,

//                       }}

//                       transition={{ duration: 0.3 }}

//                       className="

//                         w-[15px]

//                         h-[15px]

//                         rounded-full

//                         border-2

//                         border-cyan-400

//                         bg-[#050505]

//                         shadow-[0_0_15px_rgba(0,191,255,0.7)]

//                       "

//                     />

//                   </div>



//                   {/* =========================

//                       PERIOD

//                   ========================= */}



//                   <div

//                     className={`

//                       hidden md:flex items-center

//                       ${

//                         isEven

//                           ? "justify-end text-right"

//                           : "order-2 justify-start text-left"

//                       }

//                     `}

//                   >

//                     <div>

//                       <p className="text-sm text-cyan-400 font-medium">

//                         {experience.period}

//                       </p>



//                       <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/40">

//                         {experience.type}

//                       </p>

//                     </div>

//                   </div>



//                   {/* =========================

//                       EXPERIENCE CARD

//                   ========================= */}



//                   <div

//                     className={`

//                       pl-10 md:pl-0

//                       ${

//                         isEven

//                           ? "md:order-2"

//                           : "md:order-1"

//                       }

//                     `}

//                   >



//                     {/* MOBILE PERIOD */}



//                     <div className="md:hidden mb-4">

//                       <p className="text-sm text-cyan-400 font-medium">

//                         {experience.period}

//                       </p>



//                       <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#e5e5e5]/40">

//                         {experience.type}

//                       </p>

//                     </div>



//                     <motion.div

//                       layout

//                       whileHover={{

//                         y: -4,

//                         borderColor: "rgba(0,191,255,0.4)",

//                         boxShadow:

//                           "0 0 30px rgba(0,191,255,0.08)",

//                       }}

//                       transition={{

//                         duration: 0.3,

//                       }}

//                       className="

//                         relative

//                         rounded-2xl

//                         border border-cyan-400/15

//                         bg-white/[0.02]

//                         backdrop-blur-xl

//                         overflow-hidden

//                       "

//                     >



//                       {/* TOP ACCENT */}



//                       <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />



//                       {/* =========================

//                           COLLAPSED CONTENT

//                       ========================= */}



//                       <button

//                         type="button"

//                         onClick={() => toggleExperience(index)}

//                         className="

//                           w-full

//                           text-left

//                           p-6

//                           sm:p-8

//                           cursor-pointer

//                           focus:outline-none

//                         "

//                         aria-expanded={isExpanded}

//                       >



//                         {/* ROLE */}



//                         <div className="flex items-start justify-between gap-5">



//                           <div>

//                             <h3 className="text-xl sm:text-2xl font-semibold text-[#e5e5e5]">

//                               {experience.role}

//                             </h3>



//                             <p className="mt-2 text-sm text-cyan-400">

//                               {experience.company}

//                             </p>

//                           </div>



//                           {/* EXPAND ICON */}



//                           <motion.div

//                             animate={{

//                               rotate: isExpanded ? 180 : 0,

//                             }}

//                             transition={{

//                               duration: 0.3,

//                             }}

//                             className="

//                               shrink-0

//                               w-8

//                               h-8

//                               rounded-full

//                               border border-cyan-400/20

//                               flex items-center justify-center

//                               text-cyan-400

//                               text-lg

//                             "

//                           >

//                             ↓

//                           </motion.div>



//                         </div>



//                         {/* SHORT SUMMARY */}



//                         <p className="mt-5 text-sm leading-7 text-[#e5e5e5]/60">

//                           {experience.summary}

//                         </p>



//                         {/* TECH STACK */}



//                         <div className="flex flex-wrap gap-2 mt-6">

//                           {experience.stack.map((technology) => (

//                             <span

//                               key={technology}

//                               className="

//                                 px-3

//                                 py-1.5

//                                 rounded-full

//                                 border border-cyan-400/20

//                                 bg-cyan-400/5

//                                 text-xs

//                                 text-[#e5e5e5]/70

//                               "

//                             >

//                               {technology}

//                             </span>

//                           ))}

//                         </div>



//                         {/* CLICK HINT */}



//                         <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-cyan-400/50">

//                           {isExpanded

//                             ? "Click to collapse"

//                             : "Click to view details"}

//                         </p>



//                       </button>



//                       {/* =========================

//                           EXPANDED CONTENT

//                       ========================= */}



//                       <AnimatePresence initial={false}>

//                         {isExpanded && (

//                           <motion.div

//                             initial={{

//                               height: 0,

//                               opacity: 0,

//                             }}

//                             animate={{

//                               height: "auto",

//                               opacity: 1,

//                             }}

//                             exit={{

//                               height: 0,

//                               opacity: 0,

//                             }}

//                             transition={{

//                               duration: 0.35,

//                               ease: "easeInOut",

//                             }}

//                             className="overflow-hidden"

//                           >

//                             <div className="px-6 pb-7 sm:px-8 sm:pb-8">



//                               {/* DIVIDER */}



//                               <div className="h-px bg-cyan-400/10 mb-7" />



//                               {/* FULL DESCRIPTION */}



//                               <div>

//                                 <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/70 mb-3">

//                                   Overview

//                                 </p>



//                                 <p className="text-sm leading-7 text-[#e5e5e5]/60">

//                                   {experience.description}

//                                 </p>

//                               </div>



//                               {/* HIGHLIGHTS */}



//                               <div className="mt-7">



//                                 <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/70 mb-4">

//                                   Key Contributions

//                                 </p>



//                                 <div className="space-y-3">



//                                   {experience.highlights.map(

//                                     (highlight) => (

//                                       <div

//                                         key={highlight}

//                                         className="

//                                           flex

//                                           gap-3

//                                           text-sm

//                                           text-[#e5e5e5]/70

//                                         "

//                                       >

//                                         <span

//                                           className="

//                                             mt-2

//                                             w-1.5

//                                             h-1.5

//                                             shrink-0

//                                             rounded-full

//                                             bg-cyan-400

//                                             shadow-[0_0_8px_rgba(0,191,255,0.8)]

//                                           "

//                                         />



//                                         <span className="leading-6">

//                                           {highlight}

//                                         </span>

//                                       </div>

//                                     )

//                                   )}



//                                 </div>

//                               </div>



//                               {/* TECHNOLOGIES */}



//                               <div className="mt-7">



//                                 <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/70 mb-4">

//                                   Technologies & Skills

//                                 </p>



//                                 <div className="flex flex-wrap gap-2">



//                                   {experience.stack.map(

//                                     (technology) => (

//                                       <span

//                                         key={technology}

//                                         className="

//                                           px-3

//                                           py-1.5

//                                           rounded-full

//                                           border border-cyan-400/20

//                                           bg-cyan-400/5

//                                           text-xs

//                                           text-[#e5e5e5]/70

//                                         "

//                                       >

//                                         {technology}

//                                       </span>

//                                     )

//                                   )}



//                                 </div>



//                               </div>



//                             </div>

//                           </motion.div>

//                         )}

//                       </AnimatePresence>



//                     </motion.div>



//                   </div>



//                 </motion.div>

//               );

//             })}



//           </div>

//         </div>



//       </div>

//     </section>

//   );

// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    period: "June 2026 – July 2026",
    role: "Java Backend Development Intern",
    company: "Keyanna Technology Private Limited",
    type: "Internship",
    summary:
      "Worked on an enterprise digital payment and wallet management platform, contributing to the ticket management microservice and backend workflows.",
    description:
      "Worked as a Java Backend Development Intern on an enterprise digital payment and wallet management platform. My primary contribution was within the ticket management microservice, where I worked on backend functionality, REST APIs, ticket workflows, and service-level integration using Java and Spring Boot.",
    highlights: [
      "Developed backend CRUD functionality for the ticket management module.",
      "Implemented ticket creation, retrieval, filtering, assignment, picking, and unpicking workflows.",
      "Worked with REST APIs and tested backend services using Postman.",
      "Worked with JWT-based authentication and backend service integration.",
      "Implemented and tested ticket-related workflows with pagination and filtering.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "JWT",
      "Postman",
    ],
  },

  {
    period: "Jan 2025 – Apr 2025",
    role: "Backend Developer",
    company: "Gandhinagar University",
    type: "Part-time",
    summary:
      "Contributed to the backend development of the university's Cultural & Technical Fest 2025 registration platform.",
    description:
      "Contributed as a backend developer for the institute's Cultural & Technical Fest 2025 registration platform, focusing on authentication, user registration, and database-driven backend workflows used during the event.",
    highlights: [
      "Designed and implemented OTP-based registration and authentication workflows.",
      "Implemented user registration and validation functionality.",
      "Integrated backend services with relational databases.",
      "Worked on reliable user management and event registration workflows.",
      "Supported backend functionality for real-world event operations.",
    ],
    stack: [
      "Backend Development",
      "OTP Authentication",
      "REST APIs",
      "Database",
    ],
  },

  {
    period: "2024 – 2025",
    role: "Team Lead",
    company: "Smart India Hackathon (SIH)",
    type: "Leadership & Hackathons",
    summary:
      "Led student teams through national-level hackathon projects, driving technical decisions, system architecture, and end-to-end prototype development.",
    description:
      "Led multidisciplinary student teams during Smart India Hackathon projects in 2024 and 2025. Worked across technical planning, system architecture, task coordination, and prototype development while managing project execution under competitive timelines.",
    highlights: [
      "Led project teams through SIH 2024 and 2025 project submissions.",
      "Directed system architecture and technical decision-making.",
      "Coordinated frontend, backend, and AI development workflows.",
      "Managed task planning, feature prioritization, and project execution.",
      "Worked with team members to deliver functional prototypes for evaluation.",
    ],
    stack: [
      "System Architecture",
      "Team Leadership",
      "Project Planning",
      "Backend",
      "Frontend",
      "AI/ML",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExperience = (index) => {
    setExpandedIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="experience"
      className="
        relative
        min-h-screen
        px-4
        py-24
        sm:px-6
        lg:px-8
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-cyan-500/5
          blur-[100px]
          sm:blur-[120px]
          pointer-events-none
        "
      />

      <div className="relative max-w-6xl mx-auto">

        {/* SECTION HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 mb-3">
            Career Timeline
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-semibold
              tracking-tight
              text-[#e5e5e5]
              glow-text
            "
          >
            Experience
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              sm:text-base
              text-[#e5e5e5]/60
              leading-relaxed
            "
          >
            A timeline of my professional experience, backend development work,
            and technical leadership across real-world software projects.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">

          {/* TIMELINE LINE */}

          <div
            className="
              absolute
              left-[7px]
              top-2
              bottom-2
              w-px
              bg-cyan-400/20
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-12 sm:space-y-16 md:space-y-20">

            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={`${experience.company}-${experience.period}`}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className="
                    relative
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    md:gap-16
                  "
                >

                  {/* TIMELINE DOT */}

                  <div
                    className="
                      absolute
                      left-0
                      top-7
                      z-10
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <motion.div
                      animate={{
                        scale: isExpanded ? 1.2 : 1,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        w-[15px]
                        h-[15px]
                        rounded-full
                        border-2
                        border-cyan-400
                        bg-[#050505]
                        shadow-[0_0_15px_rgba(0,191,255,0.7)]
                      "
                    />
                  </div>

                  {/* DESKTOP PERIOD */}

                  <div
                    className={`
                      hidden
                      md:flex
                      items-center
                      ${
                        isEven
                          ? "justify-end text-right md:order-1"
                          : "justify-start text-left md:order-2"
                      }
                    `}
                  >
                    <div>
                      <p className="text-sm text-cyan-400 font-medium">
                        {experience.period}
                      </p>

                      <p
                        className="
                          mt-2
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-[#e5e5e5]/40
                        "
                      >
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  {/* EXPERIENCE CARD */}

                  <div
                    className={`
                      w-full
                      pl-10
                      md:pl-0
                      min-w-0
                      ${
                        isEven
                          ? "md:order-2"
                          : "md:order-1"
                      }
                    `}
                  >

                    {/* MOBILE PERIOD */}

                    <div className="md:hidden mb-4">

                      <p className="text-sm text-cyan-400 font-medium">
                        {experience.period}
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-[#e5e5e5]/40
                        "
                      >
                        {experience.type}
                      </p>

                    </div>

                    {/* EXPERIENCE CARD */}

                    <motion.div
                      layout
                      whileHover={{
                        y: -4,
                        borderColor:
                          "rgba(0,191,255,0.4)",
                        boxShadow:
                          "0 0 30px rgba(0,191,255,0.08)",
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative
                        w-full
                        rounded-2xl
                        border
                        border-cyan-400/15
                        bg-white/[0.02]
                        backdrop-blur-xl
                        overflow-hidden
                      "
                    >

                      {/* TOP ACCENT */}

                      <div
                        className="
                          absolute
                          top-0
                          left-6
                          right-6
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-cyan-400/50
                          to-transparent
                        "
                      />

                      {/* COLLAPSED CONTENT */}

                      <button
                        type="button"
                        onClick={() =>
                          toggleExperience(index)
                        }
                        className="
                          w-full
                          text-left
                          p-5
                          sm:p-6
                          lg:p-8
                          cursor-pointer
                          focus:outline-none
                        "
                        aria-expanded={isExpanded}
                      >

                        {/* ROLE */}

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >

                          <div className="min-w-0">

                            <h3
                              className="
                                text-lg
                                sm:text-xl
                                lg:text-2xl
                                font-semibold
                                text-[#e5e5e5]
                                leading-snug
                                break-words
                              "
                            >
                              {experience.role}
                            </h3>

                            <p
                              className="
                                mt-2
                                text-sm
                                text-cyan-400
                                break-words
                              "
                            >
                              {experience.company}
                            </p>

                          </div>

                          {/* EXPAND ICON */}

                          <motion.div
                            animate={{
                              rotate: isExpanded
                                ? 180
                                : 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="
                              shrink-0
                              w-8
                              h-8
                              rounded-full
                              border
                              border-cyan-400/20
                              flex
                              items-center
                              justify-center
                              text-cyan-400
                              text-lg
                            "
                          >
                            ↓
                          </motion.div>

                        </div>

                        {/* SHORT SUMMARY */}

                        <p
                          className="
                            mt-5
                            text-sm
                            leading-7
                            text-[#e5e5e5]/60
                          "
                        >
                          {experience.summary}
                        </p>

                        {/* TECH STACK */}

                        <div
                          className="
                            flex
                            flex-wrap
                            gap-2
                            mt-6
                          "
                        >
                          {experience.stack.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="
                                  px-3
                                  py-1.5
                                  rounded-full
                                  border
                                  border-cyan-400/20
                                  bg-cyan-400/5
                                  text-xs
                                  text-[#e5e5e5]/70
                                  max-w-full
                                "
                              >
                                {technology}
                              </span>
                            )
                          )}
                        </div>

                        {/* CLICK HINT */}

                        <p
                          className="
                            mt-5
                            text-[10px]
                            sm:text-[11px]
                            uppercase
                            tracking-[0.15em]
                            sm:tracking-[0.2em]
                            text-cyan-400/50
                          "
                        >
                          {isExpanded
                            ? "Click to collapse"
                            : "Click to view details"}
                        </p>

                      </button>

                      {/* EXPANDED CONTENT */}

                      <AnimatePresence initial={false}>

                        {isExpanded && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >

                            <div
                              className="
                                px-5
                                pb-6
                                sm:px-6
                                sm:pb-7
                                lg:px-8
                                lg:pb-8
                              "
                            >

                              {/* DIVIDER */}

                              <div
                                className="
                                  h-px
                                  bg-cyan-400/10
                                  mb-6
                                  sm:mb-7
                                "
                              />

                              {/* FULL DESCRIPTION */}

                              <div>

                                <p
                                  className="
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-cyan-400/70
                                    mb-3
                                  "
                                >
                                  Overview
                                </p>

                                <p
                                  className="
                                    text-sm
                                    leading-7
                                    text-[#e5e5e5]/60
                                  "
                                >
                                  {experience.description}
                                </p>

                              </div>

                              {/* HIGHLIGHTS */}

                              <div className="mt-7">

                                <p
                                  className="
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-cyan-400/70
                                    mb-4
                                  "
                                >
                                  Key Contributions
                                </p>

                                <div className="space-y-3">

                                  {experience.highlights.map(
                                    (highlight) => (
                                      <div
                                        key={highlight}
                                        className="
                                          flex
                                          gap-3
                                          text-sm
                                          text-[#e5e5e5]/70
                                        "
                                      >

                                        <span
                                          className="
                                            mt-2
                                            w-1.5
                                            h-1.5
                                            shrink-0
                                            rounded-full
                                            bg-cyan-400
                                            shadow-[0_0_8px_rgba(0,191,255,0.8)]
                                          "
                                        />

                                        <span
                                          className="
                                            leading-6
                                            min-w-0
                                          "
                                        >
                                          {highlight}
                                        </span>

                                      </div>
                                    )
                                  )}

                                </div>

                              </div>

                              {/* TECHNOLOGIES */}

                              <div className="mt-7">

                                <p
                                  className="
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-cyan-400/70
                                    mb-4
                                  "
                                >
                                  Technologies & Skills
                                </p>

                                <div
                                  className="
                                    flex
                                    flex-wrap
                                    gap-2
                                  "
                                >

                                  {experience.stack.map(
                                    (technology) => (
                                      <span
                                        key={technology}
                                        className="
                                          px-3
                                          py-1.5
                                          rounded-full
                                          border
                                          border-cyan-400/20
                                          bg-cyan-400/5
                                          text-xs
                                          text-[#e5e5e5]/70
                                        "
                                      >
                                        {technology}
                                      </span>
                                    )
                                  )}

                                </div>

                              </div>

                            </div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}