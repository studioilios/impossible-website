import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import RewardSystem from "@ia/components/sections/RewardSystem";
import CredEconomy from "@ia/components/sections/CredEconomy";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    description: "Earn tokens for every healthy action, verified by AI, and redeem them across a real economy.",
};

export default function RewardsPage() {
    return (
        <main data-home-theme="true" className="bg-[#f3f3f1]">
            <SiteHeader />
            <RewardSystem />
            <CredEconomy />
            <Footer />
        </main>
    );
}
