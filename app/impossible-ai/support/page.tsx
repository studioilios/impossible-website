import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import Support from "@ia/components/sections/Support";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    title: "Support | Impossible AI",
    description: "Get help with your Impossible AI account, workouts, tracking, rewards, privacy, and account deletion.",
};

export default function SupportPage() {
    return (
        <main data-home-theme="true" className="bg-[#f3f3f1]">
            <SiteHeader />
            <Support />
            <Footer />
        </main>
    );
}
