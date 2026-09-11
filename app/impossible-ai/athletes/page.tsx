import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import AthletePlatform from "@ia/components/sections/AthletePlatform";
import AthleteNetwork from "@ia/components/sections/AthleteNetwork";
import Community from "@ia/components/sections/Community";
import Footer from "@ia/components/Footer";


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
