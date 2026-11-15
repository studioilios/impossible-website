"use client";

import SectionHeading from "@ia/components/ui/SectionHeading";
import FeatureCard from "@ia/components/ui/FeatureCard";

const points = [
    { icon: "🍛", title: "Global Cuisines", description: "95,000+ recipes, regional cuisines, and meal tracking" },
    { icon: "🗣️", title: "Multiple Languages", description: "AI coaching in 6 languages for people around the world" },
    { icon: "🏙️", title: "Everyday Lifestyles", description: "Built around varied work schedules, climates, and cultural habits" },
    { icon: "🪔", title: "Cultural Traditions", description: "Plans that can adapt to local festivals, fasting days, and routines" },
    { icon: "🧬", title: "Health Patterns", description: "Personalized insights shaped around your health data and needs" },
    { icon: "🧘", title: "Every Body", description: "Nutrition plans tailored to your goals, preferences, and physiology" },
];

const WhyImpossible = () => {
    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Why Impossible AI"
                    title="Built for Every Body."
                    accent="Global Food. Real Life."
                    description="Impossible AI adapts to the foods, routines, and cultures that shape health around the world."
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
