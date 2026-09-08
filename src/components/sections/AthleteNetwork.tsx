"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const columns = [
    {
        title: "Features",
        items: ["National Athlete Graph", "Coach Matching", "Sponsor Matching", "Government Schemes", "Competition Calendar"],
    },
    {
        title: "Benefits",
        items: [
            "Get discovered by national scouts",
            "Apply for government grants",
            "Meet world-class coaches",
            "Receive brand sponsorship",
            "Never miss trials & competitions",
        ],
    },
    {
        title: "Vision",
        items: [
            "Discover hidden talent across India",
            "Reduce athlete dropout rates",
            "Build scientific development pathways",
            "Create an Olympic pipeline",
        ],
    },
];

const AthleteNetwork = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Athlete Network"
                    title="India's First Performance-Based"
                    accent="Athlete Network"
                    align="center"
                />

                <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:mt-16 lg:grid-cols-3">
                    {columns.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                        >
                            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                                {c.title}
                            </h3>
                            <ul className="mt-5 space-y-3">
                                {c.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm leading-6 text-white/70">
                                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AthleteNetwork;
