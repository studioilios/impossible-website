"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const STEP_DURATION = 0.25;
const ARROW_DURATION = 0.15;

const steps = [
    { step: "01", title: "Complete an Activity" },
    { step: "02", title: "AI Verifies via GPS, Phone & Wearables" },
    { step: "03", title: "Tokens Automatically Credited" },
    { step: "04", title: "Redeem Rewards" },
];

const rewards = [
    { icon: "🚶", label: "10,000 steps", tokens: "5 Tokens" },
    { icon: "💪", label: "300 kcal workout", tokens: "15 Tokens" },
    { icon: "🏋️", label: "Gym check-in", tokens: "20 Tokens" },
    { icon: "😴", label: "7–8 hours sleep", tokens: "10 Tokens" },
    { icon: "🔥", label: "30-day streak", tokens: "200 Bonus Tokens" },
    { icon: "🏥", label: "Health checkup", tokens: "50 Tokens" },
];

const redeemables = ["Cash", "Gym Passes", "Supplements", "Coaching Sessions", "Charitable Donations"];

const RewardSystem = () => {
    return (
        <section id="rewards" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="AI Reward System"
                    title="Every Healthy Action"
                    accent="Pays"
                    description="AI verifies your activities using GPS, phone sensors, and wearables — then credits tokens automatically. No cheating, no guessing."
                />

                <div className="relative mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3">
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
                                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-black font-display text-xl font-bold text-primary">
                                        {s.step}
                                    </span>
                                    <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-white">
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

                <div className="mt-16 sm:mt-20">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        Example Rewards
                    </span>
                    <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {rewards.map((r, i) => (
                            <motion.div
                                key={r.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-primary/40"
                            >
                                <span className="text-3xl">{r.icon}</span>
                                <p className="mt-3 font-sans text-xs text-white/60">{r.label}</p>
                                <p className="mt-1 font-display text-sm font-bold text-primary">{r.tokens}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 flex flex-wrap items-center gap-3 sm:mt-16">
                    <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        Redeem For
                    </span>
                    {redeemables.map((r) => (
                        <span
                            key={r}
                            className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-display text-xs font-semibold text-white/80"
                        >
                            {r}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RewardSystem;
