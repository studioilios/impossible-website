"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@ia/lib/nav";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#e9e9e6] text-neutral-950 sm:min-h-screen">
            {/* Grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)",
                    backgroundSize: "90px 90px",
                }}
            />

            {/* Concentric circles */}
            <div className="pointer-events-none absolute left-1/2 top-[48%] z-0 aspect-square w-[42vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 sm:top-[38%] sm:w-[34vw] sm:min-w-[280px]" />
            <div className="pointer-events-none absolute left-1/2 top-[48%] z-0 aspect-square w-[76vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10 sm:top-[38%] sm:w-[58vw] sm:min-w-[480px]" />
            <div className="pointer-events-none absolute left-[8%] top-[8%] z-0 aspect-square w-[26vw] rounded-full border border-black/10 sm:min-w-[220px]" />
            <div className="pointer-events-none absolute right-[6%] top-[52%] z-0 aspect-square w-[22vw] rounded-full border border-black/10 sm:min-w-[200px]" />

            {/* Accent ring */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="pointer-events-none absolute left-1/2 top-[48%] z-0 aspect-square w-[68vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/70 sm:top-[34%] sm:w-[48vw] sm:min-w-[420px] sm:max-w-[720px]"
            />

            {/* Nav */}
            <header className="relative z-30 flex w-full flex-nowrap items-center justify-between gap-2 px-2 pt-5 sm:px-10 sm:pt-8">
                <Link
                    href="/impossible-ai"
                    title="Impossible AI"
                    className="flex h-10 min-w-max shrink-0 items-center gap-1 rounded-full bg-white px-2.5 shadow-sm ring-1 ring-black/5 focus:outline-none sm:gap-2 sm:px-4 sm:py-2"
                >
                    <span className="inline-block whitespace-nowrap font-serif text-xs italic font-normal tracking-wide text-neutral-950 sm:text-base">
                        Impossible <span className="text-primary">AI</span>
                    </span>
                </Link>

                <div className="relative flex shrink-0 items-center gap-1 sm:gap-3">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-expanded={menuOpen}
                        className="inline-flex h-10 min-w-[4.5rem] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-white px-2 font-display text-[9px] font-semibold uppercase tracking-widest text-neutral-800 shadow-sm ring-1 ring-black/5 focus:outline-none sm:gap-1.5 sm:px-4 sm:text-xs"
                    >
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Menu
                    </button>
                    <a
                        href="#get-started"
                        title=""
                        className="inline-flex h-10 min-w-[4.5rem] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-black px-2 font-display text-[9px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-neutral-800 focus:outline-none sm:px-5 sm:text-xs"
                    >
                        <span className="sm:hidden">Get App</span>
                        <span className="hidden sm:inline">Get the App</span>
                    </a>

                    <AnimatePresence>
                        {menuOpen && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setMenuOpen(false)}
                                    className="fixed inset-0 z-30 cursor-default"
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5"
                                >
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center justify-between rounded-xl px-3 py-2.5 font-display text-xs font-semibold uppercase tracking-widest text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-primary"
                                        >
                                            {link.label}
                                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </header>

            {/* Annotations */}
            <div className="absolute left-4 top-[17%] z-30 max-w-[155px] sm:left-10 sm:top-[26%] sm:max-w-[230px]">
                <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">01</span>
                <p className="mt-1.5 font-mono text-[11px] leading-snug text-neutral-800 sm:mt-2 sm:text-[13px]">
                    /AI that flags injury risk before it happens.
                </p>
            </div>

            <div className="absolute bottom-[18%] right-4 z-30 max-w-[155px] text-right sm:bottom-auto sm:right-10 sm:top-[46%] sm:max-w-[230px] sm:text-left">
                <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">02</span>
                <p className="mt-1.5 font-mono text-[11px] leading-snug text-neutral-800 sm:mt-2 sm:text-[13px]">
                    We analyze small movements, stride, heart rate, and reaction time.
                </p>
            </div>

            {/* Side signal lines */}
            <div className="pointer-events-none absolute left-0 top-1/2 z-10 hidden h-px w-[16%] bg-primary/70 sm:block" />
            <div className="pointer-events-none absolute left-[16%] top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 rotate-45 bg-primary sm:block" />
            <svg className="pointer-events-none absolute left-1 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 text-primary sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 19l-7-7 7-7M4 12h16" />
            </svg>
            <div className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-px w-[16%] bg-primary/70 sm:block" />
            <div className="pointer-events-none absolute right-[16%] top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 rotate-45 bg-primary sm:block" />
            <svg className="pointer-events-none absolute right-1 top-1/2 z-10 hidden h-3 w-3 -translate-y-1/2 text-primary sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 5l7 7-7 7M20 12H4" />
            </svg>

            {/* Route arc */}
            <svg
                className="pointer-events-none absolute left-1/2 top-[42%] z-0 hidden h-[42vh] w-[70vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2 opacity-60 sm:block"
                viewBox="0 0 800 400"
                fill="none"
            >
                <defs>
                    <marker id="hero-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                        <path d="M0,0 L8,4 L0,8 Z" className="fill-primary" />
                    </marker>
                </defs>
                <path
                    d="M60,340 C 220,300 260,140 420,110 C 540,90 620,120 730,60"
                    className="stroke-primary/50"
                    strokeWidth="2"
                    strokeDasharray="8 10"
                    strokeLinecap="round"
                    markerEnd="url(#hero-arrowhead)"
                />
            </svg>

            {/* Wordmark */}
            <div className="absolute inset-x-0 bottom-[5%] z-10 flex flex-col items-center gap-1 select-none sm:bottom-[3%]">
                <p className="whitespace-nowrap text-center font-display text-[12.5vw] font-bold leading-[0.82] tracking-tighter text-neutral-950 sm:text-[11.5vw]">
                    IMPOSSIBLE AI
                </p>
                <p className="whitespace-nowrap text-center font-display text-[10px] font-medium tracking-wide text-neutral-800 sm:text-sm">
                    Impossible AI. Make the impossible, possible.
                </p>
            </div>

            {/* Figure — centered inside the rings */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-1/2 top-[49%] z-0 -translate-x-1/2 -translate-y-1/2 sm:top-[40%]"
            >
                <img
                    src="/hero.png"
                    alt="Athlete in motion"
                    className="h-[50svh] w-auto max-w-[78vw] object-contain drop-shadow-2xl sm:h-[58vh] sm:max-w-none"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
