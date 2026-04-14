"use client";

import { useEffect, useState } from "react";

export default function TerminalIntro() {
  const text =
    "Initializing Portfolio...\nLoading Backend Systems...\nLaunching Interface...";

  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center">
      <pre className="text-green-400 font-mono text-lg whitespace-pre-wrap">
        {display}
      </pre>
    </section>
  );
}