"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = ["Accessible", "Affordable", "Intelligent", "Personalized"];

const Vision = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-5xl text-center">
                <SectionHeading
                    eyebrow="Our Vision"
                    title="Building the Future"
                    accent="of Fitness"
                    description="Making world-class fitness accessible, affordable, intelligent, and personalized for every Indian."
                    align="center"
                />

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
                    {pillars.map((p, i) => (
                        <motion.span
                            key={p}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 font-display text-sm font-bold uppercase tracking-widest text-primary"
                        >
                            {p}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-14 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:mt-16"
                >
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                        Predictive Healthcare Powered by AI
                    </h3>
                    <p className="mt-3 font-sans text-sm leading-6 text-white/60 sm:text-base">
                        We&apos;re building the intelligence layer for India&apos;s next billion-dollar health outcome
                        improvement — catching problems before they happen, personalizing interventions before they&apos;re
                        needed.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
