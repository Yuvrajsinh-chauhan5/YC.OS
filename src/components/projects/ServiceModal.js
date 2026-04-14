"use client";

import { motion } from "framer-motion";

export default function ServiceModal({ service, close }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-black border border-cyan-400 p-10 rounded-xl max-w-md"
      >
        <h3 className="text-2xl mb-4 glow-text">
          {service.name}
        </h3>

        <p className="text-gray-400 mb-6">
          {service.desc}
        </p>

        <button
          onClick={close}
          className="border px-4 py-2 hover:bg-white hover:text-black"
        >
          Close
        </button>
      </motion.div>

    </motion.div>
  );
}