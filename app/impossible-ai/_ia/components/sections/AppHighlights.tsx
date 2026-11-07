"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

type Feature = {
    id: string;
    title: string;
    description: string;
    href: string;
};

const features: Feature[] = [
    {
        id: "01",
        title: "AI Health Coach",
        description: "Conversational coaching that responds in under 3 seconds and remembers your whole journey.",
        href: "/impossible-ai/features",
    },
    {
        id: "02",
        title: "AI Diet Intelligence",
        description: "95,000+ recipes from cuisines around the world, with full macro and micro tracking tailored to you.",
        href: "/impossible-ai/features",
    },
    {
        id: "03",
        title: "Token Rewards",
        description: "Every workout, meal, and good night's sleep is automatically verified and rewarded.",
        href: "/impossible-ai/rewards",
    },
    {
        id: "04",
        title: "Athlete Network",
        description: "Performance tracking, coach matching, and a path to national scouts and sponsors.",
        href: "/impossible-ai/athletes",
    },
    {
        id: "05",
        title: "Community",
        description: "Hyperlocal gyms, running clubs, and challenges with people training near you.",
        href: "/impossible-ai/athletes",
    },
    {
        id: "06",
        title: "Gamification",
        description: "Missions, XP, streaks, and leaderboards that make consistency feel like a game.",
        href: "/impossible-ai/features",
    },
];

const ExploreLink = ({ href }: { href: string }) => (
    <Link
        href={href}
        className="group mt-3 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-primary"
    >
        Explore
        <svg
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
    </Link>
);

const FeatureCallout = ({
    feature,
    delay,
}: {
    feature: Feature;
    delay: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-w-0 flex-col items-start rounded-xl border border-black/[0.07] bg-white/60 p-4 text-left sm:p-5"
    >
        <div className="flex items-center gap-2.5">
            <span className="font-mono text-[11px] font-semibold text-neutral-400">{feature.id}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-tight text-neutral-950">{feature.title}</h3>
        <p className="mt-2 font-sans text-xs leading-5 text-neutral-600 sm:text-[13px]">{feature.description}</p>
        <ExploreLink href={feature.href} />
    </motion.div>
);

const PhoneShowcase = () => (
    <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex justify-center"
    >
        <div className="pointer-events-none absolute inset-x-10 bottom-2 h-8 rounded-full bg-black/15 blur-2xl" />
        <Image
            src="/featuresectionimg.jpeg"
            alt="Impossible AI fitness app feature screen"
            width={800}
            height={1600}
            className="relative h-[380px] w-auto drop-shadow-2xl sm:h-[440px] lg:h-[500px] xl:h-[540px]"
            priority
        />
    </motion.div>
);

const AppHighlights = () => {
    return (
        <section className="relative border-t border-black/10 bg-[#fafaf8] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    title="One App."
                    accent="Every Part of Your Health."
                    description="From your first workout to your next PR, Impossible AI's systems work together as one intelligent platform."
                    align="center"
                />

                <div className="mt-12 grid grid-cols-1 items-start gap-10 sm:mt-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:gap-12">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                        {features.map((feature, i) => (
                            <FeatureCallout key={feature.id} feature={feature} delay={i * 0.08} />
                        ))}
                    </div>

                    <div className="lg:sticky lg:top-24 lg:pt-4">
                        <PhoneShowcase />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppHighlights;
