import Hero from "@/components/Hero";
import FeatureRow from "@/components/FeatureRow";
import ConfiguratorTeaser from "@/components/ConfiguratorTeaser";
import Lookbook from "@/components/Lookbook";
import ForecastSpecs from "@/components/ForecastSpecs";
import ReviewStrip from "@/components/ReviewStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <Hero />
      <FeatureRow />
      <ConfiguratorTeaser />
      <Lookbook />
      <ForecastSpecs />
      <ReviewStrip />
      <Footer />
    </div>
  );
}
