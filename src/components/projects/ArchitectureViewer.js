"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";

const services = [
  {
    name: "API Gateway",
    desc: "Entry point routing requests to microservices.",
  },
  {
    name: "Auth Service",
    desc: "OAuth2 & JWT authentication service.",
  },
  {
    name: "User Service",
    desc: "Handles user management & profiles.",
  },
  {
    name: "Kafka Broker",
    desc: "Event-driven async communication.",
  },
  {
    name: "Order Service",
    desc: "Business logic & transaction processing.",
  },
  {
    name: "Kubernetes Cluster",
    desc: "Container orchestration & scaling.",
  },
];

export default function ArchitectureViewer() {

  const [active, setActive] = useState(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-4xl mb-16 glow-text">
        Cloud Native Architecture
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {services.map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.08 }}
            onClick={() => setActive(service)}
            className="cursor-pointer p-8 border border-gray-700 rounded-xl hover:border-cyan-400 transition"
          >
            {service.name}
          </motion.div>
        ))}

      </div>

      {active && (
        <ServiceModal
          service={active}
          close={() => setActive(null)}
        />
      )}

    </section>
  );
}