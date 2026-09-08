import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import MarketSize from "@/components/sections/MarketSize";
import BusinessModel from "@/components/sections/BusinessModel";
import Roadmap from "@/components/sections/Roadmap";
import Vision from "@/components/sections/Vision";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    description: "Market size, business model, unit economics, and the roadmap behind Impossible AI.",
};

export default function PricingPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <MarketSize />
            <BusinessModel />
            <Roadmap />
            <Vision />
            <Footer />
        </main>
    );
}
