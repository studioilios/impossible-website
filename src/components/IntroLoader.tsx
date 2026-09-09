"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STATUS_MESSAGES = [
    "Calibrating AI Coach...",
    "Syncing Nutrition Engine...",
    "Mapping Athlete Network...",
    "Personalizing Your Plan...",
    "Systems Online.",
];

const TOTAL_DURATION = 2800;
const STRIPS = 8;

const IntroLoader = () => {
    const [progress, setProgress] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const start = performance.now();
        let raf: number;

        const tick = (now: number) => {
            const el = now - start;
            const pct = Math.min(100, (el / TOTAL_DURATION) * 100);
            setElapsed(el);
            setProgress(pct);
            if (pct < 100) {
                raf = requestAnimationFrame(tick);
            } else {
                setTimeout(() => {
                    setMounted(false);
                    document.body.style.overflow = "";
                }, 500);
            }
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            document.body.style.overflow = "";
        };
    }, []);

    const messageIndex = Math.min(
        STATUS_MESSAGES.length - 1,
        Math.floor((progress / 100) * STATUS_MESSAGES.length)
    );

    // Deterministic (non-random) jitter + glitch pulse, driven by elapsed time —
    // identical on server (elapsed = 0) and first client paint, so no hydration mismatch.
    const jitterX = Math.sin(elapsed / 90) * 3;
    const jitterSkew = Math.sin(elapsed / 140) * 1.1;
    const isGlitching = elapsed % 900 < 90 && elapsed > 200;

    const content = (
        <>
            {/* Terminal status line */}
            <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[11px] text-primary sm:left-10 sm:top-10">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>&gt; {STATUS_MESSAGES[messageIndex]}</span>
                <span className="animate-pulse">_</span>
            </div>

            {/* Percentage — bottom-right */}
            <div className="absolute bottom-6 right-6 font-mono text-[11px] text-white/40 sm:bottom-10 sm:right-10">
                SYS.BOOT / {String(Math.round(progress)).padStart(3, "0")}
            </div>

            <div className="flex h-full w-full flex-col items-center justify-center px-6">
                {/* Giant counting number */}
                <div
                    className="relative select-none font-display text-[16vw] font-black leading-none tracking-tighter text-white sm:text-[12vw]"
                    style={{
                        transform: `translateX(${jitterX}px) skewX(${jitterSkew}deg)`,
                        textShadow: isGlitching
                            ? "-3px 0 rgba(59,130,246,0.7), 3px 0 rgba(245,158,11,0.7)"
                            : "none",
                    }}
                >
                    {Math.round(progress)}
                    <span className="text-primary">%</span>
                </div>

                {/* Wordmark */}
                <div className="mt-2 flex items-center gap-3 sm:mt-4">
                    <span className="h-px w-8 bg-primary/60 sm:w-12" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.4em] text-white/80 sm:text-sm">
                        Impossible AI
                    </span>
                    <span className="h-px w-8 bg-primary/60 sm:w-12" />
                </div>
                <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 sm:text-[11px]">
                    India&apos;s AI Fitness Platform
                </span>
            </div>

            {/* Full-bleed progress bar */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
                <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
        </>
    );

    return (
        <AnimatePresence>
            {mounted && (
                <div className="fixed inset-0 z-[100] flex overflow-hidden">
                    {Array.from({ length: STRIPS }).map((_, i) => (
                        <motion.div
                            key={i}
                            exit={{ y: "-110%" }}
                            transition={{ duration: 0.65, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                            className="relative h-full overflow-hidden bg-black"
                            style={{ width: `${100 / STRIPS}%` }}
                        >
                            {/* Scanline texture */}
                            <div
                                className="pointer-events-none absolute inset-0 z-10 opacity-[0.05]"
                                style={{
                                    backgroundImage:
                                        "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
                                }}
                            />

                            <div
                                className="absolute inset-y-0"
                                style={{
                                    width: `${STRIPS * 100}%`,
                                    left: `${-i * 100}%`,
                                }}
                            >
                                {content}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </AnimatePresence>
    );
};

export default IntroLoader;
