"use client";

import Image from "next/image";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const PhoneVisual = ({
    delay,
    align,
    children,
}: {
    delay: number;
    align: "left" | "right";
    children?: ReactNode;
}) => (
    <motion.div
        initial={{ opacity: 0, x: align === "left" ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay }}
        className="flex-shrink-0"
    >
        {children}
    </motion.div>
);

const AppShowcase = () => {
    return (
        <section className="relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden border-t border-black/10 bg-[#f3f3f1] px-6 py-12 sm:px-8 lg:h-screen lg:overflow-hidden lg:py-8 lg:px-12 xl:px-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[54vw] min-w-[380px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[34vw] min-w-[260px] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30" />

            <div className="relative mx-auto flex w-full max-w-[100rem] flex-1 flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                >
                    <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold tracking-widest text-white">
                        Product Tour
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="mt-3 text-center font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
                >
                    Inside The <span className="font-serif italic font-normal text-primary">Impossible AI App</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mx-auto mt-3 max-w-lg text-center font-sans text-xs leading-6 text-neutral-600 sm:text-sm"
                >
                    A look at what&apos;s on your screen, from your AI scored morning briefing to live form correction
                    during your workout.
                </motion.p>

                <div className="mt-8 w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white/75 px-4 shadow-sm lg:hidden">
                    <div className="flex items-start gap-3 border-b border-black/10 py-4 text-left">
                        <span className="inline-flex shrink-0 bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">01</span>
                        <p className="font-mono text-[12px] leading-snug text-neutral-800">
                            Your daily AI score, recovery, plan, and streaks in one glance.
                        </p>
                    </div>
                    <div className="flex items-start gap-3 border-b border-black/10 py-4 text-left">
                        <span className="inline-flex shrink-0 bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">02</span>
                        <p className="font-mono text-[12px] leading-snug text-neutral-800">
                            Connect with the global fitness community and build your journey alongside athletes everywhere.
                        </p>
                    </div>
                    <div className="flex items-start gap-3 py-4 text-left">
                        <span className="inline-flex shrink-0 bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">03</span>
                        <p className="font-mono text-[12px] leading-snug text-neutral-800">
                            Live form correction. Every rep tracked as you train.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-8 sm:gap-10 lg:mt-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12 xl:gap-16">
                    {/* Left image */}
                    <div className="relative flex-shrink-0">
                        <PhoneVisual delay={0} align="left">
                            <Image
                                src="/ProductTour1.jpeg?v=2"
                                alt="Impossible AI daily briefing screen"
                                width={800}
                                height={1600}
                                className="h-[60vh] max-h-[520px] w-auto sm:h-[56vh] sm:max-h-[520px] lg:h-[70vh] lg:max-h-[760px]"
                                priority
                            />
                        </PhoneVisual>

                        {/* Mobile caption */}
                        <div className="mt-4 hidden max-w-[240px] text-center">
                            <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">01</span>
                            <p className="mt-2 font-mono text-[12px] leading-snug text-neutral-800">
                                Your daily AI score, recovery, plan, and streaks in one glance.
                            </p>
                        </div>

                        {/* Desktop annotation */}
                        <div className="absolute left-full top-4 hidden w-56 max-w-[190px] pl-4 lg:block">
                            <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">01</span>
                            <p className="mt-2 font-mono text-[12px] leading-snug text-neutral-800">
                                Your daily AI score, recovery, plan, and streaks in one glance.
                            </p>
                        </div>
                    </div>

                    {/* Middle point */}
                    <div className="hidden max-w-[260px] text-center lg:flex lg:min-w-[220px] lg:flex-none lg:flex-col lg:items-center lg:justify-center xl:min-w-[300px]">
                        <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">02</span>
                        <p className="mt-2 font-mono text-[12px] leading-snug text-neutral-800">
                            Connect with the global fitness community and build your journey alongside athletes everywhere.
                        </p>
                    </div>

                    {/* Right image */}
                    <div className="relative flex-shrink-0">
                        <PhoneVisual delay={0.12} align="right">
                            <Image
                                src="/ProductTour2.jpeg?v=2"
                                alt="Impossible AI real time form feedback screen"
                                width={800}
                                height={1600}
                                className="h-[60vh] max-h-[520px] w-auto sm:h-[56vh] sm:max-h-[520px] lg:h-[70vh] lg:max-h-[760px]"
                                priority
                            />
                        </PhoneVisual>

                        {/* Mobile caption */}
                        <div className="mt-4 hidden max-w-[240px] text-center">
                            <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">03</span>
                            <p className="mt-2 font-mono text-[12px] leading-snug text-neutral-800">
                                Live form correction. Every rep tracked as you train.
                            </p>
                        </div>

                        {/* Desktop annotation */}
                        <div className="absolute right-full bottom-4 hidden w-56 max-w-[190px] pr-4 text-right lg:block">
                            <span className="inline-block bg-black px-2 py-1 font-mono text-[11px] font-semibold text-white">03</span>
                            <p className="mt-2 font-mono text-[12px] leading-snug text-neutral-800">
                                Live form correction. Every rep tracked as you train.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;
