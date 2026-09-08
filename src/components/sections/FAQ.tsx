"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

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
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none sm:px-6 sm:py-5"
            >
                <span className="font-display text-sm font-semibold text-white sm:text-base">{q}</span>
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
                        <p className="px-5 pb-5 font-sans text-sm leading-6 text-white/60 sm:px-6">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-4xl">
                <SectionHeading eyebrow="FAQ" title="Common" accent="Questions" align="center" />

                <div className="mt-12 space-y-3 sm:mt-14">
                    {faqs.map((f, i) => (
                        <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
