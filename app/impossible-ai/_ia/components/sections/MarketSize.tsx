"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const funnel = [
    { label: "TAM", value: "$150B–250B+", desc: "Total Addressable Market — Global fitness & health", width: "100%" },
    { label: "SAM", value: "$5B–15B", desc: "Serviceable Addressable Market — India digital fitness", width: "62%" },
    { label: "SOM", value: "$100M–500M", desc: "Serviceable Obtainable Market — Near-term opportunity", width: "30%" },
];

const stats = [
    { value: "820M", label: "Smartphone users in India" },
    { value: "0.8–2%", label: "Current gym penetration" },
    { value: "67%", label: "Never use memberships" },
    { value: "50%", label: "Quit gyms within 6 months" },
];

const MarketSize = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Market Size" title="A Massive" accent="Addressable Market" />

                <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-2">
                    <div className="space-y-4">
                        {funnel.map((f, i) => (
                            <motion.div
                                key={f.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: f.width }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: i * 0.12 + 0.1 }}
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/15 to-transparent"
                                />
                                <div className="relative flex items-baseline justify-between">
                                    <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                                        {f.label}
                                    </span>
                                    <span className="font-display text-2xl font-bold text-white sm:text-3xl">{f.value}</span>
                                </div>
                                <p className="relative mt-2 font-sans text-xs text-white/50 sm:text-sm">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                            >
                                <p className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                                <p className="mt-1.5 font-display text-[10px] font-semibold uppercase tracking-widest text-white/50 sm:text-xs">
                                    {s.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketSize;
