import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import RewardSystem from "@/components/sections/RewardSystem";
import CredEconomy from "@/components/sections/CredEconomy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    description: "Earn tokens for every healthy action, verified by AI, and redeem them across a real economy.",
};

export default function RewardsPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <RewardSystem />
            <CredEconomy />
            <Footer />
        </main>
    );
}
