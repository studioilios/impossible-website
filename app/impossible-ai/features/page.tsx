import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import WhyImpossible from "@ia/components/sections/WhyImpossible";
import Features from "@ia/components/sections/Features";
import Gamification from "@ia/components/sections/Gamification";
import HowItWorks from "@ia/components/sections/HowItWorks";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    description: "AI coaching, nutrition intelligence, and gamification designed for people everywhere.",
};

export default function FeaturesPage() {
    return (
        <main data-home-theme="true" className="bg-[#f3f3f1]">
            <SiteHeader />
            <WhyImpossible />
            <Features />
            <Gamification />
            <HowItWorks />
            <Footer />
        </main>
    );
}
