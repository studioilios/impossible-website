"use client";

import { motion } from "framer-motion";
import SectionHeading from "@ia/components/ui/SectionHeading";

const competitors = ["Impossible AI", "Cult.Fit", "HealthifyMe", "Fittr", "Strava"];

type Mark = "yes" | "no" | "partial";

const rows: { feature: string; marks: Mark[] }[] = [
    { feature: "95K Indian Foods", marks: ["yes", "no", "partial", "partial", "no"] },
    { feature: "AI Real-time Coach", marks: ["yes", "no", "partial", "partial", "no"] },
    { feature: "Blood Test Integration", marks: ["yes", "no", "no", "no", "no"] },
    { feature: "Vernacular Coaching", marks: ["yes", "no", "no", "no", "no"] },
    { feature: "Festival Calendar", marks: ["yes", "no", "no", "no", "no"] },
    { feature: "AQI-Aware Workouts", marks: ["yes", "no", "no", "no", "no"] },
    { feature: "Token Rewards", marks: ["yes", "no", "no", "no", "no"] },
    { feature: "Tier-2 City Pricing", marks: ["yes", "no", "no", "yes", "no"] },
    { feature: "Community Feed", marks: ["yes", "yes", "no", "yes", "yes"] },
    { feature: "Corporate Wellness", marks: ["yes", "yes", "yes", "no", "no"] },
    { feature: "AI Suggestions", marks: ["yes", "partial", "yes", "yes", "no"] },
];

const Mark = ({ mark, highlight }: { mark: Mark; highlight?: boolean }) => {
    if (mark === "yes")
        return (
            <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    highlight ? "bg-primary text-black" : "bg-emerald-500/15 text-emerald-400"
                }`}
            >
                ✓
            </span>
        );
    if (mark === "partial")
        return (
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white/50">
                ~
            </span>
        );
    return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-white/25">
            ✕
        </span>
    );
};

const Compare = () => {
    return (
        <section id="compare" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Why We're Different" title="No One Else" accent="Does This" align="center" />

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mt-14 overflow-x-auto rounded-2xl border border-white/10 sm:mt-16"
                >
                    <table className="w-full min-w-[640px] border-collapse text-left">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/[0.03]">
                                <th className="px-4 py-4 font-display text-xs font-semibold uppercase tracking-widest text-white/50 sm:px-6">
                                    Feature
                                </th>
                                {competitors.map((c, i) => (
                                    <th
                                        key={c}
                                        className={`px-3 py-4 text-center font-display text-xs font-bold uppercase tracking-wide sm:px-4 ${
                                            i === 0 ? "text-primary" : "text-white/60"
                                        }`}
                                    >
                                        {c}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, ri) => (
                                <tr key={row.feature} className={ri % 2 === 0 ? "bg-white/[0.015]" : ""}>
                                    <td className="whitespace-nowrap px-4 py-3.5 font-sans text-sm text-white/80 sm:px-6">
                                        {row.feature}
                                    </td>
                                    {row.marks.map((m, mi) => (
                                        <td key={mi} className="px-3 py-3.5 text-center sm:px-4">
                                            <Mark mark={m} highlight={mi === 0} />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                <div className="mt-5 flex flex-wrap items-center gap-5 font-sans text-xs text-white/50">
                    <span className="flex items-center gap-2">
                        <Mark mark="yes" highlight /> Full Support
                    </span>
                    <span className="flex items-center gap-2">
                        <Mark mark="partial" /> Partial
                    </span>
                    <span className="flex items-center gap-2">
                        <Mark mark="no" /> Not Available
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Compare;
