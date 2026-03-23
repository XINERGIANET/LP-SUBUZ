'use client'

import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { AdvancedProductsSection } from '@/components/AdvancedProductsSection'
import { BenefitsSection } from '@/components/BenefitsSection'
import { StatisticsSection } from '@/components/StatisticsSection'
import { HowItWorks } from '@/components/HowItWorks'
import { TestimonialSection } from '@/components/TestimonialSection'
import { StorySection } from '@/components/StorySection'
import { ClientsSection } from '@/components/ClientsSection'
import { ServiceCoverage } from '@/components/ServiceCoverage'
import { PremiumFeaturesShowcase } from '@/components/PremiumFeaturesShowcase'
import { PrestigeSection } from '@/components/PrestigeSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About / Quiénes Somos Section */}
      <AboutSection />

      {/* Advanced Products Section - Ice & Water */}
      <AdvancedProductsSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Story Section */}
      <StorySection />

      {/* Clients Section */}
      <ClientsSection />

      {/* Service Coverage */}
      <ServiceCoverage />

      {/* Premium Features Showcase */}
      <PremiumFeaturesShowcase />

      {/* Prestige Section - Premium Features */}
      <PrestigeSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
