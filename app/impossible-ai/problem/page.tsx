import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import Problem from "@ia/components/sections/Problem";
import NutritionCrisis from "@ia/components/sections/NutritionCrisis";
import MarketOpportunity from "@ia/components/sections/MarketOpportunity";
import Footer from "@ia/components/Footer";

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
