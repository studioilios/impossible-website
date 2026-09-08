import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
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
      <About />
      <AppHighlights />
      <ExplorePages />
      <FAQ />
      <GetStarted />
      <Footer />
    </main>
  );
}
