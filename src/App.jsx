import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Benefits from "./components/Benefits.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Benefits />
        <WhoWeAre />
        <CTA />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
