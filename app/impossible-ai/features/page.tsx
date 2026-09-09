import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import WhyImpossible from "@ia/components/sections/WhyImpossible";
import Features from "@ia/components/sections/Features";
import Gamification from "@ia/components/sections/Gamification";
import HowItWorks from "@ia/components/sections/HowItWorks";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    description: "AI coaching, nutrition intelligence, and gamification built for Indian bodies and lifestyles.",
};

export default function FeaturesPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <WhyImpossible />
            <Features />
            <Gamification />
            <HowItWorks />
            <Footer />
        </main>
    );
}
