"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const STEP_DURATION = 0.25;
const ARROW_DURATION = 0.15;

const steps = [
    { step: "01", title: "Create Athlete Profile" },
    { step: "02", title: "AI Trainer Matching" },
    { step: "03", title: "Continuous AI Coaching" },
    { step: "04", title: "Performance Tracking" },
    { step: "05", title: "Career Growth" },
];

const AthletePlatform = () => {
    return (
        <section id="athletes" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Athlete Platform"
                    title="One Platform."
                    accent="Every Athlete's Path."
                    description="From creating your first profile to getting discovered by national scouts — the complete athlete journey in one platform."
                />

                <div className="relative mt-16 sm:mt-20">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3">
                        {steps.map((s, i) => {
                            const stepDelay = i * (STEP_DURATION + ARROW_DURATION);
                            const arrowDelay = stepDelay + STEP_DURATION;
                            return (
                                <Fragment key={s.step}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-60px" }}
                                        transition={{ duration: STEP_DURATION, delay: stepDelay }}
                                        className="relative flex flex-col items-start"
                                    >
                                        <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-black font-display text-lg font-bold text-primary shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                                            {s.step}
                                        </span>
                                        <p className="mt-4 font-display text-sm font-semibold uppercase leading-tight tracking-wide text-white">
                                            {s.title}
                                        </p>
                                    </motion.div>
                                    {i < steps.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -8 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-60px" }}
                                            transition={{ duration: ARROW_DURATION, delay: arrowDelay }}
                                            className="hidden h-16 w-20 items-center justify-center text-primary/50 lg:flex"
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

export default AthletePlatform;
