"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const pages = [
    {
        icon: "📊",
        title: "The Problem",
        description: "India's metabolic crisis, nutrition gaps, and the market opportunity behind Impossible AI.",
        href: "/impossible-ai/problem",
    },
    {
        icon: "⚙️",
        title: "Features",
        description: "AI coaching, nutrition intelligence, and gamification built for Indian bodies and lifestyles.",
        href: "/impossible-ai/features",
    },
    {
        icon: "🪙",
        title: "Rewards",
        description: "Earn tokens for every healthy action, verified by AI, and redeem them across a real economy.",
        href: "/impossible-ai/rewards",
    },
    {
        icon: "🏅",
        title: "Athletes",
        description: "India's first performance-based athlete network, plus hyperlocal community.",
        href: "/impossible-ai/athletes",
    },
    {
        icon: "⚖️",
        title: "Compare",
        description: "See how Impossible AI stacks up against Cult.Fit, HealthifyMe, Fittr, and Strava.",
        href: "/impossible-ai/compare",
    },
    {
        icon: "💰",
        title: "Pricing",
        description: "Market size, business model, unit economics, and the roadmap behind Impossible AI.",
        href: "/impossible-ai/pricing",
    },
];

const ExplorePages = () => {
    return (
        <section className="relative overflow-hidden border-t border-black/10 bg-[#f3f3f1] px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" />

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
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white pl-7 pr-6 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                            >
                                <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100" />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex bg-black px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-2xl">{p.icon}</span>
                                    </div>
                                    <svg className="h-4 w-4 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <h3 className="mt-4 font-display text-lg font-bold text-neutral-950">{p.title}</h3>
                                <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">{p.description}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExplorePages;
