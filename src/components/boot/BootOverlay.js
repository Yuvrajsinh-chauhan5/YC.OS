"use client";

import TerminalBoot from "./TerminalBoot";
import { useBoot } from "./BootProvider";

export default function BootOverlay() {
  const { showBoot, finishBoot } = useBoot();

  if (!showBoot) return null;

  return <TerminalBoot onComplete={finishBoot} />;
}