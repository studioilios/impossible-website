import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Problem from "@/components/sections/Problem";
import NutritionCrisis from "@/components/sections/NutritionCrisis";
import MarketOpportunity from "@/components/sections/MarketOpportunity";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    description: "India's metabolic and nutrition crisis, and the market opportunity behind Impossible AI.",
};

export default function ProblemPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <Problem />
            <NutritionCrisis />
            <MarketOpportunity />
            <Footer />
        </main>
    );
}
