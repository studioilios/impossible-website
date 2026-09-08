"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const pages = [
    {
        icon: "📊",
        title: "The Problem",
        description: "India's metabolic crisis, nutrition gaps, and the market opportunity behind Impossible AI.",
        href: "/problem",
    },
    {
        icon: "⚙️",
        title: "Features",
        description: "AI coaching, nutrition intelligence, and gamification built for Indian bodies and lifestyles.",
        href: "/features",
    },
    {
        icon: "🪙",
        title: "Rewards",
        description: "Earn tokens for every healthy action, verified by AI, and redeem them across a real economy.",
        href: "/rewards",
    },
    {
        icon: "🏅",
        title: "Athletes",
        description: "India's first performance-based athlete network, plus hyperlocal community.",
        href: "/athletes",
    },
    {
        icon: "⚖️",
        title: "Compare",
        description: "See how Impossible AI stacks up against Cult.Fit, HealthifyMe, Fittr, and Strava.",
        href: "/compare",
    },
    {
        icon: "💰",
        title: "Pricing",
        description: "Market size, business model, unit economics, and the roadmap behind Impossible AI.",
        href: "/pricing",
    },
];

const ExplorePages = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Explore"
                    title="Everything In"
                    accent="One Platform"
                    description="Six systems, one app. Dive into any part of Impossible AI."
                    align="center"
                />

                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {pages.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                        >
                            <Link
                                href={p.href}
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl">{p.icon}</span>
                                    <svg className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                                <p className="mt-2 font-sans text-sm leading-6 text-white/55">{p.description}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExplorePages;
