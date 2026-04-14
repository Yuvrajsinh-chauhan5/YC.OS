export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* HEADER */}
        <section className="space-y-4">
          <h1 className="text-5xl font-bold">
            System Architecture Core
          </h1>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            I design scalable backend systems using microservices, event-driven architecture,
            and cloud-native principles. This section represents how I think as a systems engineer.
          </p>
        </section>

        {/* CORE ENGINEERING PRINCIPLES */}
        <section className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Scalability First",
              desc: "Systems designed to handle growth using distributed architecture."
            },
            {
              title: "Event Driven",
              desc: "Kafka-based asynchronous communication between services."
            },
            {
              title: "Cloud Native",
              desc: "Docker + Kubernetes for deployment and scaling."
            },
            {
              title: "Secure Systems",
              desc: "JWT, OAuth2, role-based authentication flows."
            },
            {
              title: "Observability",
              desc: "Logging + monitoring using Grafana & Loki."
            },
            {
              title: "Modular Design",
              desc: "Independent services with clear separation of concerns."
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border border-gray-800 rounded-xl bg-white/5">
              <h3 className="text-cyan-400 font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </section>

        {/* SYSTEM BLUEPRINT */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-cyan-400">
            System Blueprint Thinking
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>▹ User Layer → Frontend (Next.js / React)</p>
            <p>▹ API Layer → Spring Boot / Node.js Services</p>
            <p>▹ Communication → Kafka Event Bus</p>
            <p>▹ Data Layer → SQL / NoSQL Databases</p>
            <p>▹ Infra Layer → Docker + Kubernetes</p>
          </div>
        </section>

        {/* PROJECT MAPPINGS */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-cyan-400">
            Applied in Real Projects
          </h2>

          <div className="space-y-3 text-gray-300">
            <p>▹ InternMatchAI → Recommendation + Admin System</p>
            <p>▹ Microservices Platform → Distributed backend system</p>
            <p>▹ E-Commerce System → REST API architecture</p>
          </div>
        </section>

      </div>
    </div>
  );
}