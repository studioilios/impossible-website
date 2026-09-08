"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const STEP_DURATION = 0.3;
const ARROW_DURATION = 0.15;

const steps = [
    { step: "01", icon: "⚔️", title: "Complete Challenges" },
    { step: "02", icon: "⭐", title: "Earn XP" },
    { step: "03", icon: "🎁", title: "Unlock Rewards" },
    { step: "04", icon: "👑", title: "Become Legendary" },
];

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="How It Works"
                    title="From Workout to"
                    accent="Legend"
                    description="Four steps from your first rep to top of the leaderboard."
                />

                <div className="relative mt-14 sm:mt-16">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3">
                        {steps.map((s, i) => {
                            const stepDelay = i * (STEP_DURATION + ARROW_DURATION);
                            const arrowDelay = stepDelay + STEP_DURATION;
                            return (
                                <Fragment key={s.step}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 24, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: STEP_DURATION, delay: stepDelay }}
                                        className="relative flex flex-col items-center text-center"
                                    >
                                        <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/15 to-black text-2xl">
                                            {s.icon}
                                        </div>
                                        <span className="mt-3 font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                                            Step {s.step}
                                        </span>
                                        <p className="mt-1.5 font-display text-sm font-semibold uppercase tracking-wide text-white">
                                            {s.title}
                                        </p>
                                    </motion.div>
                                    {i < steps.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-60px" }}
                                            transition={{ duration: ARROW_DURATION, delay: arrowDelay }}
                                            className="hidden h-[4.5rem] w-20 items-center justify-center text-primary/40 lg:flex"
                                        >
                                            <svg viewBox="0 0 44 24" fill="none" className="h-9 w-full">
                                                <path
                                                    d="M2 12h30M26 6l8 6-8 6"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </motion.div>
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
