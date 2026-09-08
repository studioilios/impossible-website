"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
    {
        icon: "🤖",
        title: "AI Health Coach",
        description: "Conversational coaching that responds in under 3 seconds and remembers your whole journey.",
        href: "/features",
    },
    {
        icon: "🍛",
        title: "AI Diet Intelligence",
        description: "95,000+ Indian recipes with full macro & micro tracking, calibrated to your body.",
        href: "/features",
    },
    {
        icon: "🪙",
        title: "Token Rewards",
        description: "Every workout, meal, and good night's sleep — automatically verified and rewarded.",
        href: "/rewards",
    },
    {
        icon: "🎮",
        title: "Gamification",
        description: "Missions, XP, streaks, and leaderboards that make consistency feel like a game.",
        href: "/features",
    },
    {
        icon: "🧑‍🤝‍🧑",
        title: "Community",
        description: "Hyperlocal gyms, running clubs, and challenges with people training near you.",
        href: "/athletes",
    },
    {
        icon: "🏅",
        title: "Athlete Network",
        description: "Performance tracking, coach matching, and a path to national scouts and sponsors.",
        href: "/athletes",
    },
];

const AppHighlights = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="The App"
                    title="One App."
                    accent="Every Part of Your Health."
                    description="From your first workout to your next PR, Impossible AI's systems work together as one intelligent platform."
                    align="center"
                />

                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={h.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                        >
                            <Link
                                href={h.href}
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.05]"
                            >
                                <div className="text-3xl">{h.icon}</div>
                                <h3 className="mt-4 font-display text-lg font-bold text-white">{h.title}</h3>
                                <p className="mt-2 flex-1 font-sans text-sm leading-6 text-white/55">{h.description}</p>
                                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-widest text-primary opacity-70 transition-opacity group-hover:opacity-100">
                                    Explore
                                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 flex justify-center sm:mt-14"
                >
                    <Link
                        href="/features"
                        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary hover:text-black"
                    >
                        See All Features
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default AppHighlights;
