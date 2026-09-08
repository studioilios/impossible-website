"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
    {
        icon: "🎯",
        title: "Mission",
        description:
            "Make world-class, AI-personalized fitness genuinely accessible to every Indian — in their language, on their budget, around their life.",
    },
    {
        icon: "🧬",
        title: "Approach",
        description:
            "Every model we train starts with Indian data — phenotype, food, climate, and culture — not a Western template we retrofit.",
    },
    {
        icon: "🚀",
        title: "Vision",
        description:
            "A predictive health layer for a billion people — catching problems before they happen, not after.",
    },
];

const About = () => {
    return (
        <section id="about" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="About Us"
                    title="Built to Fix"
                    accent="India's Broken Fitness Story"
                    align="center"
                />

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mx-auto mt-6 max-w-3xl text-center font-sans text-sm leading-6 text-white/60 sm:text-base sm:leading-7"
                >
                    Nearly a billion Indians are deficient in an essential nutrient. Diabetes is showing up in people
                    barely out of their twenties. Global fitness apps were never built for Indian food, biology, or
                    life — so we built the one that is.
                </motion.p>

                <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3">
                    {pillars.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center"
                        >
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-2xl">
                                {p.icon}
                            </div>
                            <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                            <p className="mt-2 font-sans text-sm leading-6 text-white/55">{p.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
