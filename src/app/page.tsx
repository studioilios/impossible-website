import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import AppShowcase from "@/components/sections/AppShowcase";
import About from "@/components/sections/About";
import AppHighlights from "@/components/sections/AppHighlights";
import ExplorePages from "@/components/sections/ExplorePages";
import FAQ from "@/components/sections/FAQ";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <IntroLoader />
      <Hero />
      <AppShowcase />
      <About />
      <AppHighlights />
      <ExplorePages />
      <FAQ />
      <GetStarted />
      <Footer />
    </main>
  );
}
