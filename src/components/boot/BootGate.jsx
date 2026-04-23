



"use client";

import { useEffect, useState } from "react";
import TerminalBoot from "@/components/boot/TerminalBoot";

export default function BootGate({ children }) {
  const [booted, setBooted] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const bootTime = localStorage.getItem("bootedAt");
    const THIRTY_MIN = 30 * 60 * 1000;

    if (!bootTime) {
      setChecking(false);
      return;
    }

    const diff = Date.now() - Number(bootTime);

    if (diff < THIRTY_MIN) {
      setBooted(true);
    } else {
      localStorage.removeItem("bootedAt");
    }

    setChecking(false);
  }, []);

  const handleBoot = () => {
    localStorage.setItem("bootedAt", Date.now());
    setBooted(true);
  };

  if (checking) return null;

  if (!booted) {
    return <TerminalBoot onComplete={handleBoot} />;
  }

  return children;
}
