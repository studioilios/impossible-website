import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import Compare from "@ia/components/sections/Compare";
import CommunityBenefits from "@ia/components/sections/CommunityBenefits";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    description: "See how Impossible AI stacks up against Cult.Fit, HealthifyMe, Fittr, and Strava.",
};

export default function ComparePage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <Compare />
            <CommunityBenefits />
            <Footer />
        </main>
    );
}
