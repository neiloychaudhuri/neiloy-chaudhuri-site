"use client";

import { useEffect, useState } from "react";

interface AppLoaderProps {
  children: React.ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    let raf = 0;
    let start = 0;
    let hideTimer = 0;
    const durationMs = 700;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setIsReady(true);
        hideTimer = window.setTimeout(() => {
          setShowOverlay(false);
          const appWindow = window as Window & { __appLoaderDone?: boolean };
          appWindow.__appLoaderDone = true;
          window.dispatchEvent(new Event("app-loader-finished"));
        }, 220);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-200 ${isReady ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>

      {showOverlay && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] transition-opacity duration-200 ${
            isReady ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="w-[min(420px,80vw)]">
            <div className="mb-4 text-center text-earth-200 text-sm tabular-nums">
              {progress}%
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-earth-800/80">
              <div
                className="h-full rounded-full bg-earth-200 transition-[width] duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

