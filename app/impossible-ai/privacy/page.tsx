import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import LegalDocument from "@ia/components/LegalDocument";
import Footer from "@ia/components/Footer";
import { privacyPolicy } from "@ia/lib/legal";

export const metadata: Metadata = {
    title: "Privacy Policy | Impossible AI",
    description: "How Impossible AI collects, uses, and protects your personal, fitness, and health data.",
};

export default function PrivacyPage() {
    return (
        <main data-home-theme="true" className="bg-[#f3f3f1]">
            <SiteHeader />
            <LegalDocument doc={privacyPolicy} />
            <Footer />
        </main>
    );
}
