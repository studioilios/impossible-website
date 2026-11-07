import type { Metadata } from "next";
import SiteHeader from "@ia/components/SiteHeader";
import LegalDocument from "@ia/components/LegalDocument";
import Footer from "@ia/components/Footer";
import { termsOfUse } from "@ia/lib/legal";

export const metadata: Metadata = {
    title: "Terms of Use | Impossible AI",
    description: "The terms that govern your use of the Impossible AI app and website.",
};

export default function TermsPage() {
    return (
        <main className="bg-black">
            <SiteHeader />
            <LegalDocument doc={termsOfUse} />
            <Footer />
        </main>
    );
}