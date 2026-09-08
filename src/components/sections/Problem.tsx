"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const stats = [
    { value: "101M", label: "Diabetics in India" },
    { value: "136M", label: "Pre-diabetics" },
    { value: "52%", label: "Urban obesity growth" },
    { value: "20–30 Yrs", label: "Younger disease onset" },
    { value: "₹37K Cr", label: "Economic burden" },
    { value: "820M", label: "Affected by pollution" },
];

const causes = [
    {
        icon: "🪑",
        title: "Sedentary Jobs",
        description:
            "Long office hours and commuting reduce physical activity to near zero for millions of urban Indians.",
    },
    {
        icon: "🍟",
        title: "Ultra Processed Food",
        description:
            "Cheap processed food dominates daily diets, causing metabolic damage across every age group.",
    },
    {
        icon: "😰",
        title: "Stress & Sleep Loss",
        description:
            "Poor sleep and chronic stress accelerate health decline, compounding all other risk factors.",
    },
];

const facts = [
    "26% of adolescents have unhealthy cholesterol levels.",
    "20–25% of young adults have hypertension.",
    "Lifestyle diseases are mostly preventable through exercise, nutrition, and healthy habits.",
];

const Problem = () => {
    return (
        <section id="problem" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="The Problem"
                    title="India is Facing a Metabolic &"
                    accent="Environmental Tsunami"
                    description="Urban India's health crisis is accelerating. Lifestyle diseases are hitting younger and younger — and the numbers demand urgent action."
                />

                <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
                    {stats.map((s, i) => (
                        <StatCard key={s.label} value={s.value} label={s.label} index={i} tone="warning" />
                    ))}
                </div>

                <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-3">
                    {causes.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
                        >
                            <div className="mb-4 text-4xl">{c.icon}</div>
                            <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                            <p className="mt-2 font-sans text-sm leading-6 text-white/55">{c.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 sm:mt-20 sm:p-8"
                >
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                        Health Facts
                    </span>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-3 sm:gap-6">
                        {facts.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 font-sans text-sm leading-6 text-white/75">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                {f}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
