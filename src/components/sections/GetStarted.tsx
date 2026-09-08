"use client";

import { motion } from "framer-motion";

const ctas = [
    { label: "Download on Android", primary: true },
    { label: "Join the Waitlist", primary: false },
    { label: "Become a Partner", primary: false },
    { label: "Contact Us", primary: false },
];

const GetStarted = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-4xl text-center">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                >
                    Get Started
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
                >
                    Ready to Transform
                    <br />
                    Your <span className="font-serif italic font-normal text-primary">Fitness Journey?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mx-auto mt-5 max-w-xl font-sans text-sm leading-6 text-white/60 sm:text-base"
                >
                    Experience AI-powered coaching, nutrition, rewards, community, and athlete opportunities — all in one
                    app built for India.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
                >
                    {ctas.map((c) =>
                        c.primary ? (
                            <a
                                key={c.label}
                                href="#"
                                className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-white px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_28px_rgba(245,158,11,0.35)] transition-all hover:bg-opacity-90"
                            >
                                {c.label}
                            </a>
                        ) : (
                            <a
                                key={c.label}
                                href="#"
                                className="inline-flex items-center justify-center rounded-full border-2 border-white/20 px-6 py-3 font-display text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-primary hover:text-primary"
                            >
                                {c.label}
                            </a>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default GetStarted;
