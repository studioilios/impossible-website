import Hero from "@ia/components/Hero";
import IntroLoader from "@ia/components/IntroLoader";
import AppShowcase from "@ia/components/sections/AppShowcase";
import About from "@ia/components/sections/About";
import AppHighlights from "@ia/components/sections/AppHighlights";
import ExplorePages from "@ia/components/sections/ExplorePages";
import FAQ from "@ia/components/sections/FAQ";
import GetStarted from "@ia/components/sections/GetStarted";
import Footer from "@ia/components/Footer";

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
