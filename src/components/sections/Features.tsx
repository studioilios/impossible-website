"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const features = [
    {
        tag: "AI Coach",
        title: "AI Health Coach",
        description: "Conversational AI coach that knows you personally.",
        items: ["Under 3-second responses", "Permanent memory of your journey", "6 Indian languages supported", "Daily coaching conversations"],
    },
    {
        tag: "Nutrition AI",
        title: "AI Diet Intelligence",
        description: "The most comprehensive Indian food database, powered by AI.",
        items: ["95,000+ Indian recipes", "Full macro & micro tracking", "Regional food support", "Indian phenotype database"],
    },
    {
        tag: "Personal AI",
        title: "AI Personal Agent",
        description: "Your own AI wellness companion, always adapting to you.",
        items: ["AI wellness companion", "Daily coaching & check-ins", "Adaptive fitness plans", "Personalized guidance 24/7"],
    },
    {
        tag: "Community",
        title: "Community",
        description: "Find your tribe. Train together. Grow together.",
        items: ["Running clubs & fitness groups", "Local marathon events", "Accountability partners", "Hyperlocal gym discovery"],
    },
    {
        tag: "Rewards",
        title: "Token Rewards",
        description: "Every healthy action earns you real rewards.",
        items: ["Earn tokens for workouts", "Redeem for gym passes", "Coaching & supplements", "Daily, weekly & monthly challenges"],
    },
    {
        tag: "Gamification",
        title: "Gamification",
        description: "Turn fitness into a game you actually want to play.",
        items: ["XP & leaderboards", "Badges & trophies", "Challenge maps & events", "Fitness avatar system"],
    },
];

const Features = () => {
    return (
        <section id="features" className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
            <div className="relative mx-auto max-w-7xl">
                <SectionHeading eyebrow="Core Features" title="Everything You Need." accent="Nothing You Don't." />

                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <FeatureCard key={f.title} tag={f.tag} title={f.title} description={f.description} items={f.items} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
