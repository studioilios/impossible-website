import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import AthletePlatform from "@ia/components/sections/AthletePlatform";
import AthleteNetwork from "@ia/components/sections/AthleteNetwork";
import Community from "@ia/components/sections/Community";
import Footer from "@ia/components/Footer";

export const metadata: Metadata = {
    description: "A global performance based athlete network, plus local community and social features.",
};

export default function AthletesPage() {
    return (
        <main data-home-theme="true" className="bg-[#f3f3f1]">
            <SiteHeader />
            <AthletePlatform />
            <AthleteNetwork />
            <Community />
            <Footer />
        </main>
    );
}
