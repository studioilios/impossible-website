"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const streams = [
    { title: "Subscription", detail: "₹99/month · ₹999/year" },
    { title: "Corporate Wellness", detail: "₹60 per employee/month" },
    { title: "Marketplace Commission", detail: "15–22% per transaction" },
    { title: "Merchandise & Products", detail: "Fitness gear & token redemption" },
];

const unitEconomics = [
    { value: "₹16,800", label: "LTV" },
    { value: "₹650", label: "CAC" },
    { value: "47 Days", label: "Payback Period" },
    { value: "41%", label: "Gross Margin" },
    { value: "118%", label: "NRR" },
];

const BusinessModel = () => {
    return (
        <section id="pricing" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Business Model" title="Multiple Revenue" accent="Streams" />

                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
                    {streams.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/40"
                        >
                            <h3 className="font-display text-base font-bold text-white">{s.title}</h3>
                            <p className="mt-2 font-sans text-sm text-primary">{s.detail}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-14 sm:mt-16">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        Unit Economics
                    </span>
                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5">
                        {unitEconomics.map((u, i) => (
                            <motion.div
                                key={u.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="rounded-2xl border border-primary/20 bg-primary/[0.05] p-5 text-center"
                            >
                                <p className="font-display text-xl font-bold text-white sm:text-2xl">{u.value}</p>
                                <p className="mt-1 font-display text-[10px] font-semibold uppercase tracking-widest text-primary">
                                    {u.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessModel;
