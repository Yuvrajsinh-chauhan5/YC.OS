"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold"
      >
        Yuvraj Chauhan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl text-gray-300"
      >
        Backend Engineer • Distributed Systems Enthusiast
      </motion.p>

      <p className="mt-4 max-w-xl text-gray-400">
        Designing scalable microservices, cloud-native platforms,
        and high-performance backend systems.
      </p>

    </section>
  );
}