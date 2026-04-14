"use client";

import { useEffect, useState } from "react";

const logs = [
  "[SYSTEM] Boot sequence initiated...",
  "[KERNEL] Loading core runtime modules...",
  "[MEMORY] Initializing execution environment...",
  "[NETWORK] Establishing secure connection...",
  "[SECURITY] Applying authentication layer (JWT / session control)...",
  "[SERVICE] Starting application services...",
  "[DATABASE] Connecting to data layer...",
  "[BUILD] Compiling project modules...",
  "[INDEX] Mapping system architecture...",
  "[STATUS] System integrity verified",
  "[ACCESS GRANTED] System ready for execution — Welcome, Engineer."
];

export default function TerminalBoot({ onComplete }) {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let i = 0;
    let mounted = true;

    function pushLine() {
      if (!mounted) return;

      setLines((prev) => [...prev, logs[i]]);
      i++;

      if (i < logs.length) {
        setTimeout(pushLine, 350 + Math.random() * 500);
      } else {
        setTimeout(() => {
          onComplete?.();
        }, 1200);
      }
    }

    pushLine();

    return () => {
      mounted = false;
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-8 flex flex-col">

      {/* SYSTEM HEADER */}
      <p className="text-gray-500 text-xs tracking-widest mb-4">
        YC.OS SYSTEM v3.1.0 :: BOOT SEQUENCE
      </p>

      <p className="text-gray-400 text-sm">
        yuvrajsinh@portfolio:~$ boot --init
      </p>

      {/* LOG OUTPUT */}
      <div className="mt-4 space-y-1 text-sm leading-relaxed">
        {lines.map((line, index) => (
          <p key={index} className="opacity-90">
            {line}
          </p>
        ))}
      </div>

      {/* CURSOR */}
      <p className="mt-3 animate-pulse text-green-300">█</p>

      {/* COMPLETION STATE FEEL */}
      {lines.length === logs.length && (
        <p className="mt-4 text-cyan-400 text-sm animate-pulse">
          SYSTEM READY █
        </p>
      )}

    </div>
  );
}