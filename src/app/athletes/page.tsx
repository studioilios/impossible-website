import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import AthletePlatform from "@/components/sections/AthletePlatform";
import AthleteNetwork from "@/components/sections/AthleteNetwork";
import Community from "@/components/sections/Community";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    description: "India's first performance-based athlete network, plus hyperlocal community and social features.",
};

export default function AthletesPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <AthletePlatform />
            <AthleteNetwork />
            <Community />
            <Footer />
        </main>
    );
}
