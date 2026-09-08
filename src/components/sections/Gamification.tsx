"use client";

import { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const missions = [
    { icon: "🎯", label: "Daily Missions" },
    { icon: "⚔️", label: "Weekly Boss Challenges" },
    { icon: "⭐", label: "Earn XP" },
    { icon: "🎁", label: "Unlock Rewards" },
    { icon: "🔥", label: "Build Streaks" },
    { icon: "🗺️", label: "Explore Live Maps" },
    { icon: "🏋️", label: "Discover Nearby Gyms" },
    { icon: "👥", label: "Battle Friends" },
];

const Gamification = () => {
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Gamification"
                    title="Fitness as a Game"
                    accent="You Want to Play"
                    description="Every workout becomes an adventure. Complete missions. Earn XP. Unlock rewards. Compete with friends. Level up your fitness."
                />

                <div className="mt-14 grid items-center gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-8">
                    {/* Left: mission card */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-start gap-4 rounded-2xl border border-primary/25 bg-primary/[0.06] p-6">
                            <span className="text-3xl">🏆</span>
                            <div>
                                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                                    Fitness as a Game
                                </h3>
                                <p className="mt-1.5 font-sans text-sm leading-6 text-white/60">
                                    Turn every healthy action into a rewarding game experience. Missions, bosses, XP — all tied
                                    to your real fitness goals.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            {missions.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    whileHover={{ y: -3 }}
                                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 transition-colors hover:border-primary/40 hover:bg-primary/[0.06]"
                                >
                                    <span className="text-lg">{m.icon}</span>
                                    <span className="font-display text-xs font-semibold text-white/80 sm:text-sm">
                                        {m.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full border-2 border-transparent bg-white px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_28px_rgba(245,158,11,0.35)]"
                        >
                            Start Playing
                            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                    </motion.div>

                    {/* Right: game HUD image panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative mx-auto w-full max-w-md py-8 sm:max-w-lg lg:py-0"
                        style={{ perspective: 1200 }}
                    >
                        <div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <motion.div
                                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                                className="relative overflow-hidden rounded-[1.75rem] border border-primary/40 bg-black shadow-[0_0_60px_rgba(245,158,11,0.15)]"
                            >
                                <div className="relative">
                                    {/* corner brackets */}
                                    <span className="absolute left-3 top-3 z-10 h-6 w-6 border-l-2 border-t-2 border-primary/80" />
                                    <span className="absolute right-3 top-3 z-10 h-6 w-6 border-r-2 border-t-2 border-primary/80" />
                                    <span className="absolute bottom-3 left-3 z-10 h-6 w-6 border-b-2 border-l-2 border-primary/80" />
                                    <span className="absolute bottom-3 right-3 z-10 h-6 w-6 border-b-2 border-r-2 border-primary/80" />

                                    {/* live badge */}
                                    <div className="absolute left-5 top-5 z-10 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 backdrop-blur-sm">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                                        </span>
                                        <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white/90">
                                            Live
                                        </span>
                                    </div>

                                    {/* level badge */}
                                    <div className="absolute right-5 top-5 z-10 rounded-full border border-primary/40 bg-black/70 px-2.5 py-1 backdrop-blur-sm">
                                        <span className="font-display text-[10px] font-bold uppercase tracking-widest text-primary">
                                            Lvl 12
                                        </span>
                                    </div>

                                    <img
                                        src="/GamePlay.png"
                                        alt="Impossible AI fitness game map"
                                        className="w-full object-contain"
                                    />
                                </div>

                                {/* HUD caption bar */}
                                <div className="border-t border-white/10 bg-black/70 px-5 py-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <p className="font-display text-xs font-bold uppercase tracking-widest text-white">
                                            Fitness Game Map
                                        </p>
                                        <span className="font-display text-[10px] font-semibold uppercase tracking-widest text-primary">
                                            Impossible AI
                                        </span>
                                    </div>
                                    <div className="relative mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "68%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/70 via-primary to-amber-300"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gamification;
