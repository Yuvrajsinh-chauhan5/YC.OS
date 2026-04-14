export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">

      <div className="max-w-2xl text-center space-y-10">

        <h1 className="text-5xl font-bold">
        Get In Touch
        </h1>

        <p className="text-gray-400">
  Software Engineer focused on designing scalable systems and building production-ready applications 
  with strong backend architecture and clean engineering principles.
</p>

        <div className="flex flex-col gap-4 items-center">

          <a
            href="mailto:yuvichauhan3112005@gmail.com"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/yuvrajsinh-chauhan-762b742b3/"
            className="text-gray-300 hover:text-white"
          >
            LinkedIn
          </a>

        </div>

        <p className="text-gray-600 text-sm">
          Response time: usually within 24–48 hours
        </p>

      </div>
    </div>
  );
}