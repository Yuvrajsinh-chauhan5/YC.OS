"use client";

import { motion } from "framer-motion";

const services = [
  "Auth Service",
  "Order Service",
  "Payment Service",
  "Analytics Service",
];

export default function ArchitectureSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">

      <h2 className="text-4xl mb-20">
        Engineering Architecture
      </h2>

      <div className="flex flex-col items-center gap-10">

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="px-6 py-3 border border-cyan-400 rounded-lg"
        >
          Users
        </motion.div>

        <div className="h-10 w-[2px] bg-cyan-400" />

        <div className="px-8 py-4 border border-cyan-400 rounded-lg">
          API Gateway
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {services.map((s) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 border border-cyan-400 rounded-lg"
            >
              {s}
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}