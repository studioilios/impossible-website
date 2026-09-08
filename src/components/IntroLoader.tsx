"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LOGO = "IMPOSSIBLE AI";

const STATUS_MESSAGES = [
    "Calibrating AI Coach...",
    "Syncing Nutrition Engine...",
    "Mapping Athlete Network...",
    "Personalizing Your Plan...",
    "Ready.",
];

const TOTAL_DURATION = 2600;

const IntroLoader = () => {
    const [progress, setProgress] = useState(0);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const start = performance.now();
        let raf: number;

        const tick = (now: number) => {
            const elapsed = now - start;
            const pct = Math.min(100, (elapsed / TOTAL_DURATION) * 100);
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

    return (
        <AnimatePresence>
            {mounted && (
                <motion.div
                    key="intro"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
                >
                    <motion.div
                        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute rounded-full pointer-events-none w-[36rem] h-[36rem] bg-white/5 blur-3xl"
                    />

                    <div className="relative flex flex-col items-center px-6">
                        <svg viewBox="0 0 400 60" className="w-64 sm:w-80 h-10 mb-6 text-primary/80" fill="none">
                            <motion.path
                                d="M0,30 L120,30 L140,10 L160,50 L180,5 L200,55 L220,30 L400,30"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.6, ease: "easeInOut" }}
                            />
                        </svg>

                        <div className="flex overflow-hidden">
                            {LOGO.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block font-display text-4xl font-bold tracking-widest text-white sm:text-6xl"
                                >
                                    {char === " " ? " " : char}
                                </motion.span>
                            ))}
                        </div>

                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="mt-3 font-sans text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-primary"
                        >
                            India&apos;s AI Fitness Platform
                        </motion.span>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="w-56 sm:w-72 mt-10"
                        >
                            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-amber-300 to-primary"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-3 font-sans text-[10px] sm:text-xs tracking-widest uppercase text-white/50">
                                <span>{STATUS_MESSAGES[messageIndex]}</span>
                                <span className="font-mono text-white/70 tabular-nums">{Math.round(progress)}%</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroLoader;
