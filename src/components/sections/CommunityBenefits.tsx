"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";

const stats = [
    { value: "3.4×", label: "More Active — Community users vs solo users" },
    { value: "54%", label: "Retention Rate — vs only 6% for solo users" },
    { value: "25.8×", label: "LTV:CAC Ratio — Exceptional unit economics" },
];

const CommunityBenefits = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Community Benefits" title="The Numbers" accent="Don't Lie" align="center" />

                <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:mt-14 sm:grid-cols-3">
                    {stats.map((s, i) => (
                        <StatCard key={s.value} value={s.value} label={s.label} index={i} tone="warning" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CommunityBenefits;
