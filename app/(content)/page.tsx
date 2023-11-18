import Hero from '@/components/Hero'
import Container from '@/components/Container'
import StepList from '@/components/StepList'
import ContactForm from '@/components/ContactForm'
import Section from '@/components/Section'
import { getHeroData, getStepsData } from '@/sanity/queries'

export default async function Home() {
  const heroData = await getHeroData()
  const stepsData = await getStepsData()

  return (
    <Container>
      <Hero data={heroData} />
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
