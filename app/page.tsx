import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/sections/hero-section";
import { HowItWorksSection } from "@/sections/how-it-works-section";
import { FeaturesSection } from "@/sections/features-section";
import { TemplateGallerySection } from "@/sections/template-gallery-section";
import { ComparisonSection } from "@/sections/comparison-section";
import { DemoSection } from "@/sections/demo-section";
import { UseCasesSection } from "@/sections/use-cases-section";
import { PricingSection } from "@/sections/pricing-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
import { FinalCtaSection } from "@/sections/final-cta-section";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="app-page space-y-20 md:space-y-24 lg:space-y-28">
        <HeroSection />
        <TemplateGallerySection />
        <HowItWorksSection />
        <FeaturesSection />
        <ComparisonSection />
        <DemoSection />
        <UseCasesSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </div>
    </>
  );
}
