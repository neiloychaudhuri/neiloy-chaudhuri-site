"use client";

import { useEffect, useMemo, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  /** Total duration of the decrypt animation in ms */
  duration?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*".split("");

export default function DecryptedText({
  text,
  className,
  duration = 1400,
}: DecryptedTextProps) {
  const [frame, setFrame] = useState(0);
  const [canStart, setCanStart] = useState(false);

  const steps = useMemo(() => {
    const length = text.length;
    if (length === 0) return [];
    const totalFrames = Math.max(length * 4, Math.floor(duration / 16));
    const stepSize = Math.max(1, Math.floor(totalFrames / length));
    return Array.from({ length }, (_, i) => (i + 1) * stepSize);
  }, [text, duration]);

  useEffect(() => {
    const appWindow = window as Window & { __appLoaderDone?: boolean };
    if (appWindow.__appLoaderDone) {
      setCanStart(true);
      return;
    }

    const handleLoaderDone = () => setCanStart(true);
    window.addEventListener("app-loader-finished", handleLoaderDone);
    return () => window.removeEventListener("app-loader-finished", handleLoaderDone);
  }, []);

  useEffect(() => {
    if (!text || !canStart) return;
    setFrame(0);

    let animationFrame: number;
    const loop = () => {
      setFrame((prev) => {
        if (!steps.length || prev >= steps[steps.length - 1]) {
          return steps[steps.length - 1];
        }
        return prev + 1;
      });
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, steps, canStart]);

  const display = useMemo(() => {
    if (!canStart || !steps.length) return text;
    return text
      .split("")
      .map((char, index) => {
        const revealFrame = steps[index];
        if (frame >= revealFrame) return char;
        if (char === " ") return " ";
        const rand = Math.floor(Math.random() * CHARS.length);
        return CHARS[rand];
      })
      .join("");
  }, [text, frame, steps, canStart]);

  return (
    <span className={className} aria-label={text}>
      <span className="relative inline-block whitespace-nowrap align-baseline">
        {/* Reserve final width so scrambling does not cause layout shift */}
        <span className="invisible" aria-hidden="true">
          {text}
        </span>
        <span className="absolute inset-0" aria-hidden="true">
          {display}
        </span>
      </span>
    </span>
  );
}

