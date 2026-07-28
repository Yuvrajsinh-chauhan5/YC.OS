// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">

//       <div className="max-w-2xl text-center space-y-10">

//         <h1 className="text-5xl font-bold">
//         Get In Touch
//         </h1>

//         <p className="text-gray-400">
//   Software Engineer focused on designing scalable systems and building production-ready applications 
//   with strong backend architecture and clean engineering principles.
// </p>

//         <div className="flex flex-col gap-4 items-center">

//           <a
//             href="mailto:yuvichauhan3112005@gmail.com"
//             className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
//           >
//             Email Me
//           </a>

//           <a
//             href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
//             className="text-gray-300 hover:text-white"
//           >
//             LinkedIn
//           </a>

//         </div>

//         <p className="text-gray-600 text-sm">
//           Response time: usually within 24–48 hours
//         </p>

//       </div>
//     </div>
//   );
// }


// new version  attcched resume

export default function ContactPage() {
  return ( <div className="min-h-screen bg-black text-white px-6 py-24 flex items-center justify-center">
  

    <div className="w-full max-w-4xl">
  
      {/* HEADER */}
      <section className="text-center mb-16">
  
        <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 mb-4">
          Connection Interface
        </p>
  
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Let's Build Something
          <span className="text-cyan-400"> Meaningful.</span>
        </h1>
  
        <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
          I'm a Software Engineer focused on backend systems, scalable
          architecture, and production-ready applications. If you have an
          interesting idea, opportunity, or technical problem to discuss,
          I'd be happy to connect.
        </p>
  
      </section>
  
  
      {/* CONTACT GRID */}
      <div className="grid md:grid-cols-2 gap-6">
  
        {/* CONTACT CARD */}
        <div className="p-6 sm:p-8 border border-gray-800 rounded-2xl bg-white/[0.02] hover:border-cyan-400/40 transition">
  
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
            Direct Contact
          </p>
  
          <h2 className="text-2xl font-semibold mb-3">
            Get In Touch
          </h2>
  
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            The fastest way to reach me is through email. I'm open to
            discussing software engineering opportunities, backend systems,
            projects, and interesting technical challenges.
          </p>
  
          <a
            href="mailto:yuvichauhan3112005@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition font-medium"
          >
            Email Me
          </a>
  
        </div>
  
  
        {/* RESUME CARD */}
        <div className="p-6 sm:p-8 border border-gray-800 rounded-2xl bg-white/[0.02] hover:border-cyan-400/40 transition">
  
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
            Professional Profile
          </p>
  
          <h2 className="text-2xl font-semibold mb-3">
            Explore My Resume
          </h2>
  
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Take a closer look at my experience, technical skills, projects,
            education, and professional journey.
          </p>
  
          <a
            href="/resume/Yuvrajsinh_Chauhan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg transition font-medium"
          >
            View Resume
          </a>
  
        </div>
  
      </div>
  
  
      {/* PROFESSIONAL LINKS */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
  
        <a
          href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          LinkedIn →
        </a>
  
        <span className="hidden sm:block text-gray-700">
          /
        </span>
  
        <a
          href="mailto:yuvichauhan3112005@gmail.com"
          className="text-gray-400 hover:text-cyan-400 transition"
        >
          yuvichauhan3112005@gmail.com
        </a>
  
      </div>
  
  
      {/* FOOTER STATUS */}
      <div className="mt-14 text-center">
  
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-white/[0.02]">
  
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,191,255,0.8)]" />
  
          <span className="text-xs text-gray-500">
            Usually responds within 24–48 hours
          </span>
  
        </div>
  
      </div>
  
    </div>
  </div>

  
  );
  }
  





