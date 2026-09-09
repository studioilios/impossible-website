"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";
import StatCard from "@ia/components/ui/StatCard";

const stats = [
    { value: "100M+", label: "Overweight adults" },
    { value: "49–57%", label: "Physically inactive" },
    { value: "1 in 4", label: "Adults have hypertension" },
    { value: "15%", label: "CAGR growth rate" },
];

const MarketOpportunity = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Market Opportunity" title="India's Fitness" accent="Revolution" />

                <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <StatCard key={s.label} value={s.value} label={s.label} index={i} />
                    ))}
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                    >
                        <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                            Market Size
                        </span>
                        <div className="mt-5 flex items-end justify-between gap-4">
                            <div>
                                <p className="font-display text-xs uppercase tracking-widest text-white/40">2025</p>
                                <p className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">₹16,200 Cr</p>
                            </div>
                            <svg className="mb-2 h-6 w-10 flex-shrink-0 text-primary" viewBox="0 0 40 24" fill="none">
                                <path d="M2 20 L20 6 L38 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M30 2 L38 2 L38 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="text-right">
                                <p className="font-display text-xs uppercase tracking-widest text-white/40">2030</p>
                                <p className="mt-1 font-display text-3xl font-bold text-primary sm:text-4xl">₹37,700 Cr</p>
                            </div>
                        </div>
                        <div className="relative mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "43%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/60 to-primary"
                            />
                        </div>
                        <p className="mt-3 text-right font-display text-xs font-semibold uppercase tracking-widest text-primary">
                            15% CAGR
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
                    >
                        <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                            Membership Growth
                        </span>
                        <div className="mt-5 flex items-end justify-between gap-4">
                            <div>
                                <p className="font-display text-xs uppercase tracking-widest text-white/40">2024</p>
                                <p className="mt-1 font-display text-3xl font-bold text-white sm:text-4xl">12.3 Million</p>
                            </div>
                            <span className="mb-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-display text-xs font-bold text-primary">
                                +88%
                            </span>
                            <div className="text-right">
                                <p className="font-display text-xs uppercase tracking-widest text-white/40">2030</p>
                                <p className="mt-1 font-display text-3xl font-bold text-primary sm:text-4xl">23.2 Million</p>
                            </div>
                        </div>
                        <div className="relative mt-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "88%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/60 to-primary"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketOpportunity;
