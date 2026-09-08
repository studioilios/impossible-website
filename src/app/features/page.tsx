import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import WhyImpossible from "@/components/sections/WhyImpossible";
import Features from "@/components/sections/Features";
import Gamification from "@/components/sections/Gamification";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/Footer";

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
