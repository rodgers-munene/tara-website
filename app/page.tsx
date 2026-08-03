import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { PhysicalMobile } from "@/components/sections/physical-mobile";
import { Inventory } from "@/components/sections/inventory";
import { Marketplace } from "@/components/sections/marketplace";
import { Insights } from "@/components/sections/insights";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PhysicalMobile />
      <Inventory />
      <Marketplace />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
}
