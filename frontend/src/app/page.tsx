// Path: src/app/page.tsx

import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RiskCategories from "@/components/home/RiskCategories";
import MetricsShowcase from "@/components/home/MetricsShowcase";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header active="home" />

      <main className="max-w-[1500px] mx-auto px-1 lg:px-7">
        <Hero />

        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal>
          <RiskCategories />
        </ScrollReveal>

        <ScrollReveal>
          <MetricsShowcase />
        </ScrollReveal>

      </main>

      <Footer showCTA />
    </>
  );
}