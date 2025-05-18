import Hero from "@/components/Hero";
import FeatureRow from "@/components/FeatureRow";
import ConfiguratorHero from "@/components/ConfiguratorHero";
import HomeGallery from "@/components/HomeGallery";
import ForecastSpecs from "@/components/ForecastSpecs";
import ReviewStrip from "@/components/ReviewStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeatureRow />
      <ConfiguratorHero />
      <HomeGallery />
      <ForecastSpecs />
      <ReviewStrip />
      <Footer />
    </div>
  );
}
