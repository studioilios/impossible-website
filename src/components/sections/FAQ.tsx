"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        q: "What makes Impossible AI different?",
        a: "We're built ground-up for Indian bodies, food, languages, and lifestyles — with 95,000+ Indian recipes, vernacular AI coaching, festival-aware plans, and real-money token rewards no other fitness app offers.",
    },
    {
        q: "How does the AI coach work?",
        a: "Your AI coach responds in under 3 seconds, remembers your entire journey permanently, and coaches you daily in 6 Indian languages — adapting your plan as your data evolves.",
    },
    {
        q: "How are tokens earned?",
        a: "AI verifies real activity via GPS, phone sensors, and wearables — steps, workouts, gym check-ins, sleep, and streaks all automatically credit tokens with no manual entry.",
    },
    {
        q: "Can I redeem tokens for cash?",
        a: "Yes. Tokens can be redeemed for cash, gym passes, supplements, coaching sessions, or donated to charity.",
    },
    {
        q: "Does it support Indian food?",
        a: "Yes — a database of 95,000+ Indian recipes with full macro & micro tracking, regional cuisine support, and thali tracking calibrated to Indian phenotype data.",
    },
    {
        q: "Does it work with wearables?",
        a: "Yes, activity and sleep data sync from phone sensors and connected wearables to automatically verify and credit rewards.",
    },
    {
        q: "Can athletes find coaches?",
        a: "Yes — the Athlete Network matches you with world-class coaches, sponsors, and government schemes based on performance data.",
    },
    {
        q: "Is there a community?",
        a: "Yes — find gyms, trainers, yoga studios, running clubs, and CrossFit boxes near you, plus a full social feed with posts, challenges, and leaderboards.",
    },
    {
        q: "Is the app available?",
        a: "The Android app is live today. iOS is in progress, alongside brand partnerships and influencer campaigns.",
    },
    {
        q: "Which languages are supported?",
        a: "Impossible AI coaches in 6 Indian languages, including Hindi, Tamil, and Telugu.",
    },
];

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
            className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-colors duration-300 hover:border-primary/30"
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none sm:px-6 sm:py-5"
            >
                <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-semibold text-neutral-300">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm font-semibold text-neutral-950 sm:text-base">{q}</span>
                </span>
                <motion.svg
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-5 w-5 flex-shrink-0 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
                </motion.svg>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 pl-[3.25rem] font-sans text-sm leading-6 text-neutral-600 sm:px-6 sm:pl-[3.75rem]">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="relative overflow-hidden border-t border-black/10 bg-white px-6 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:self-start">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                            FAQ
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl"
                    >
                        Common <span className="font-serif italic font-normal text-primary">Questions</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-4 max-w-sm font-sans text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7"
                    >
                        Everything you need to know about the platform. Can&apos;t find your answer?
                    </motion.p>

                    <motion.a
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        href="#"
                        className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-black/15 bg-white px-5 py-2.5 font-display text-xs font-bold uppercase tracking-widest text-neutral-800 transition-all hover:border-primary hover:text-primary"
                    >
                        Contact Us
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </motion.a>
                </div>

                <div className="space-y-3">
                    {faqs.map((f, i) => (
                        <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
