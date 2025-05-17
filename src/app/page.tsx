import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Category from "@/components/CategoryGrid";
import Teaser from "@/components/ConfiguratorTeaser";
import Gallery from "@/components/Lookbook";
import Tech from "@/components/Materials";
import Reviews from "@/components/Reviews";
import Bar from "@/components/GuaranteeBar";
import SiteFoot from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <Category />
      <Teaser />
      <Gallery />
      <Tech />
      <Reviews />
      <Bar />
      <SiteFoot />
    </>
  );
}
