import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import MarketSize from "@ia/components/sections/MarketSize";
import BusinessModel from "@ia/components/sections/BusinessModel";
import Roadmap from "@ia/components/sections/Roadmap";
import Vision from "@ia/components/sections/Vision";
import Footer from "@ia/components/Footer";

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
