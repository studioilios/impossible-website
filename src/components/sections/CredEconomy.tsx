"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const columns = [
    {
        title: "Earn",
        subtitle: "Turn healthy habits into tokens",
        icon: "⬆️",
        items: ["Workouts & exercise", "Consistency streaks", "Healthy food logging", "Sleep & recovery"],
    },
    {
        title: "Unlock",
        subtitle: "Access premium services with tokens",
        icon: "🔓",
        items: ["Marketplace access", "Coaching sessions", "Health insurance benefits", "Blood tests & diagnostics"],
    },
    {
        title: "Revenue",
        subtitle: "A sustainable fitness economy",
        icon: "💠",
        items: ["Marketplace commission", "Corporate wellness", "Brand partnerships", "Token ecosystem"],
    },
];

const CredEconomy = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Cred Style Economy" title="We Reward" accent="Consistency" />

                <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-3">
                    {columns.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.12 }}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                        >
                            {i < columns.length - 1 && (
                                <svg
                                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-primary lg:block"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            <div className="text-3xl">{c.icon}</div>
                            <h3 className="mt-4 font-display text-2xl font-bold text-white">{c.title}</h3>
                            <p className="mt-1 font-sans text-sm text-white/50">{c.subtitle}</p>
                            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                                {c.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-white/70">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
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

export default CredEconomy;
