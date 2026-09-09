"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const groups = [
    {
        label: "Children (5–15 Years)",
        population: "225 Million children",
        points: [
            "93.4% inadequate calcium intake",
            "Childhood obesity increased 288%",
            "Severe micronutrient gaps from early age",
        ],
    },
    {
        label: "Youth (15–25 Years)",
        population: "390 Million people",
        points: [
            "59.1% teenage girls are anemic",
            "$1 Billion energy drink market",
            "67% report health damage from energy drinks",
        ],
    },
    {
        label: "Working Adults (25–40)",
        population: "350 Million adults",
        points: ["98% Omega-3 deficient", "59–98% Vitamin D deficient", "101M diabetics, 136M pre-diabetics"],
    },
];

const NutritionCrisis = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="India's Nutrition Crisis"
                    title="A Nation Deficient at"
                    accent="Every Age"
                />

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {groups.map((g, i) => (
                        <motion.div
                            key={g.label}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.1 }}
                            className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
                        >
                            <span className="absolute right-6 top-6 font-display text-4xl font-bold text-white/5">
                                0{i + 1}
                            </span>
                            <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                                {g.label}
                            </span>
                            <p className="mt-3 font-display text-2xl font-bold text-white">{g.population}</p>
                            <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                                {g.points.map((p) => (
                                    <li key={p} className="flex items-start gap-2.5 font-sans text-sm leading-6 text-white/65">
                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="relative mt-14 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/15 via-black to-black p-8 text-center sm:p-12"
                >
                    <p className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
                        965 <span className="text-primary">Million</span>
                    </p>
                    <p className="mx-auto mt-3 max-w-xl font-sans text-sm text-white/60 sm:text-base">
                        Indians are deficient in at least one essential nutrient
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl font-sans text-xs uppercase tracking-widest text-white/40 sm:text-sm">
                        Across children, youth, and working adults — a nationwide crisis demanding AI-powered solutions
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NutritionCrisis;
