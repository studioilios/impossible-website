"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const groups = [
    {
        label: "Children (5 to 15 Years)",
        population: "Healthy habits start early",
        points: [
            "Growing bodies need balanced nutrition",
            "Daily movement supports lifelong wellbeing",
            "Healthy routines are easier to build early",
        ],
    },
    {
        label: "Youth (15 to 25 Years)",
        population: "Support through change",
        points: [
            "Changing routines can make healthy habits harder",
            "Balanced meals and movement support wellbeing",
            "Good sleep and recovery matter at every age",
        ],
    },
    {
        label: "Working Adults (25 to 40)",
        population: "Health through busy lives",
        points: ["Long workdays can limit time for movement", "Nutrition needs vary from person to person", "Small, consistent habits can support long term health"],
    },
];

const NutritionCrisis = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Global Nutrition Challenges"
                    title="Nutrition Matters at"
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
                        Every <span className="text-primary">Person</span>
                    </p>
                    <p className="mx-auto mt-3 max-w-xl font-sans text-sm text-white/60 sm:text-base">
                        deserves access to practical, personalized nutrition support
                    </p>
                    <p className="mx-auto mt-4 max-w-2xl font-sans text-xs uppercase tracking-widest text-white/40 sm:text-sm">
                        Across children, young people, and adults, thoughtful daily support can make healthy choices easier
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default NutritionCrisis;
