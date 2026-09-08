"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const points = [
    { icon: "🍛", title: "Indian Food", description: "95,000+ Indian recipes, regional cuisines, and thali tracking" },
    { icon: "🗣️", title: "Indian Languages", description: "AI coaching in 6 Indian languages including Hindi, Tamil, Telugu" },
    { icon: "🏙️", title: "Indian Lifestyle", description: "Built around Indian work schedules, climate, and cultural habits" },
    { icon: "🪔", title: "Indian Festivals", description: "Festival calendar for Diwali, Navratri, fasting days and more" },
    { icon: "🧬", title: "Indian Health Patterns", description: "Trained on Indian phenotype data and metabolic disease patterns" },
    { icon: "🧘", title: "Indian Bodies", description: "Diet plans calibrated for South Asian physiology and insulin response" },
];

const WhyImpossible = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Why Impossible AI"
                    title="Built for Indian Bodies."
                    accent="Indian Food. Indian Lives."
                    description="Unlike western fitness apps, Impossible AI truly understands what it means to live, eat, and exercise in India."
                />

                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {points.map((p, i) => (
                        <FeatureCard key={p.title} icon={p.icon} title={p.title} description={p.description} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyImpossible;
