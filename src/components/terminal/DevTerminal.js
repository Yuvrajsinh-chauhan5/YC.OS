"use client";

import { useState, useEffect, useRef } from "react";

const commands = {
  help: `
Available Commands:
help      → show commands
about     → who am i
skills    → tech stack
projects  → open projects
contact   → contact info
clear     → clear terminal
exit      → close terminal
`,

  about: "Cloud Native Software Engineer building scalable distributed systems.",

  skills:
    "Java | Spring Boot | Microservices | Kafka | Docker | Kubernetes | React | Node.js",

  projects: "Navigate to /projects to explore system architecture.",

  contact: "Email: you@example.com | GitHub | LinkedIn",
};

export default function DevTerminal({ onClose }) {

  const [history, setHistory] = useState([
    "Developer Terminal Activated",
    "Type 'help' to begin.",
  ]);

  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const runCommand = (cmd) => {
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "exit") {
      onClose();
      return;
    }

    const response =
      commands[cmd] || "Command not found. Type 'help'.";

    setHistory((prev) => [
      ...prev,
      `yuvraj@portfolio:~$ ${cmd}`,
      response,
    ]);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-6 z-50 overflow-auto">

      {history.map((line, i) => (
        <pre key={i} className="whitespace-pre-wrap">
          {line}
        </pre>
      ))}

      <div className="flex">
        <span>yuvraj@portfolio:~$ </span>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="bg-transparent outline-none flex-1"
        />
      </div>

    </div>
  );
}