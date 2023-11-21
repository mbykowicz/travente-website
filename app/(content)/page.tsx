import Section from '@/components/SectionComponent'
import Container from '@/components/ContainerComponent'
import Hero from '@/components/elements/Hero'
import AboutMe from '@/components/elements/AboutMe'
import StepList from '@/components/elements/StepList'
import ContactForm from '@/components/elements/ContactForm'
import { getHeroData, getStepsData } from '@/sanity/queries'

export default async function Home() {
  const heroData = await getHeroData()
  const stepsData = await getStepsData()

  return (
    <Container>
      <Hero data={heroData} />
      <AboutMe />
      <Section title="Jak to działa?">
        <StepList steps={stepsData} />
      </Section>
      <Section
        title="Formularz kontaktowy"
        className="relative py-6"
        id="contact"
      >
        <div className="absolute inset-y-0 w-screen -translate-x-1/2 left-1/2 bg-sushi-50 -z-10"></div>
        <ContactForm />
      </Section>
    </Container>
  )
}
