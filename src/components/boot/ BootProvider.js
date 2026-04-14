"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BootContext = createContext();

export function BootProvider({ children }) {
  const [showBoot, setShowBoot] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const done = sessionStorage.getItem("boot_done");

    if (!done) {
      setShowBoot(true);
    }

    setReady(true);
  }, []);

  const finishBoot = () => {
    sessionStorage.setItem("boot_done", "true");
    setShowBoot(false);
  };

  return (
    <BootContext.Provider value={{ showBoot, finishBoot }}>
      {ready && children}
    </BootContext.Provider>
  );
}

export const useBoot = () => useContext(BootContext);