import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurFocus from '@/components/OurFocus'
import SuccessCase from '@/components/SuccessCase'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurTeam from '@/components/OurTeam'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutUs />
      <OurFocus />
      <SuccessCase />
      <WhyChooseUs />
      <OurTeam />
      <ContactSection />
    </div>
  )
}
