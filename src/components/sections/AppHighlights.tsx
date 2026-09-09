"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

type Feature = {
    id: string;
    icon: string;
    title: string;
    description: string;
    href: string;
};

const leftFeatures: Feature[] = [
    {
        id: "01",
        icon: "🤖",
        title: "AI Health Coach",
        description: "Conversational coaching that responds in under 3 seconds and remembers your whole journey.",
        href: "/features",
    },
    {
        id: "02",
        icon: "🍛",
        title: "AI Diet Intelligence",
        description: "95,000+ Indian recipes with full macro & micro tracking, calibrated to your body.",
        href: "/features",
    },
    {
        id: "03",
        icon: "🪙",
        title: "Token Rewards",
        description: "Every workout, meal, and good night's sleep — automatically verified and rewarded.",
        href: "/rewards",
    },
];

const rightFeatures: Feature[] = [
    {
        id: "04",
        icon: "🎮",
        title: "Gamification",
        description: "Missions, XP, streaks, and leaderboards that make consistency feel like a game.",
        href: "/features",
    },
    {
        id: "05",
        icon: "🧑‍🤝‍🧑",
        title: "Community",
        description: "Hyperlocal gyms, running clubs, and challenges with people training near you.",
        href: "/athletes",
    },
    {
        id: "06",
        icon: "🏅",
        title: "Athlete Network",
        description: "Performance tracking, coach matching, and a path to national scouts and sponsors.",
        href: "/athletes",
    },
];

const ExploreLink = ({ href, align }: { href: string; align: "left" | "right" }) => (
    <Link
        href={href}
        className={`group mt-3 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-widest text-primary ${
            align === "right" ? "lg:flex-row-reverse" : ""
        }`}
    >
        Explore
        <svg
            className={`h-3 w-3 transition-transform duration-300 ${
                align === "right" ? "lg:group-hover:-translate-x-1" : "group-hover:translate-x-1"
            }`}
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
    align,
    delay,
    withDivider,
}: {
    feature: Feature;
    align: "left" | "right";
    delay: number;
    withDivider: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`flex max-w-[260px] flex-col text-center lg:text-left ${
            align === "right" ? "lg:items-end lg:text-right" : "lg:items-start"
        } ${withDivider ? "border-t border-black/[0.07] pt-6" : ""}`}
    >
        <div className={`flex items-center gap-2.5 ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white text-sm shadow-sm">
                {feature.icon}
            </span>
            <span className="font-mono text-[11px] font-semibold text-neutral-400">{feature.id}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-bold leading-tight text-neutral-950">{feature.title}</h3>
        <p className="mt-2 font-sans text-xs leading-5 text-neutral-600 sm:text-[13px]">{feature.description}</p>
        <ExploreLink href={feature.href} align={align} />
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
            src="/appimg3.png"
            alt="Impossible AI progress and streaks screen"
            width={1024}
            height={1536}
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
                    eyebrow="The App"
                    title="One App."
                    accent="Every Part of Your Health."
                    description="From your first workout to your next PR, Impossible AI's systems work together as one intelligent platform."
                    align="center"
                />

                <div className="mt-12 grid grid-cols-1 items-center gap-14 sm:mt-14 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8 xl:gap-14">
                    <div className="order-2 flex flex-col items-center gap-8 lg:order-none lg:items-end lg:justify-self-end lg:pt-10">
                        {leftFeatures.map((feature, i) => (
                            <FeatureCallout key={feature.id} feature={feature} align="left" delay={i * 0.08} withDivider={i > 0} />
                        ))}
                    </div>

                    <div className="order-1 lg:order-none lg:justify-self-center">
                        <PhoneShowcase />
                    </div>

                    <div className="order-3 flex flex-col items-center gap-8 lg:order-none lg:items-start lg:justify-self-start lg:pt-10">
                        {rightFeatures.map((feature, i) => (
                            <FeatureCallout key={feature.id} feature={feature} align="right" delay={i * 0.08} withDivider={i > 0} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppHighlights;
