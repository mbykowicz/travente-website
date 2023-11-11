import Button from '@/components/button'
import Container from '@/components/container'
import StepList from '@/components/stepList'
import ContactForm from '@/components/contactForm'
import Section from '@/components/section'
import Link from 'next/link'

function Hero() {
  return (
    <div className="relative max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-brandy-punch-800 sm:text-6xl">
          Ciesz się wakacjami. Resztę pozostaw mnie.
        </h1>
        <p className="mt-6 font-serif text-2xl italic leading-8 text-storm-dust-600">
          Nie martw się organizacją wakacji dla siebie i rodziny. Pomogę
          szczegółowo zaplanować podróż pełną atrakcji.
        </p>
        <div className="flex items-center justify-center mt-10 gap-x-6">
          <Link href="#contact">
            <Button>Zapytaj o szczegóły</Button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-y-0 w-screen -translate-x-1/2 left-1/2 -z-10 bg-circles"></div>
      <div className="absolute inset-y-0 w-screen -translate-x-1/2 left-1/2 -z-10 bg-blend"></div>
    </div>
  )
}

const steps = [
  {
    title: 'Zgłaszasz potrzebę wyjazdu',
    description:
      'W formularzu kontaktowym podaj kierunek, który Cię interesuje, potencjalne daty oraz cel podróży.',
  },
  {
    title: 'Określasz swoje wymagania',
    description:
      'Napisz czego oczekujesz na wyjeździe: aktywnego spędzania czasu, zwiedzania zabytków, obcowania z kulturą czy może wygodnego odopoczynku?',
  },
  {
    title: 'Otrzymujesz wstępną propozycję z wyceną',
    description:
      'Po przeanalizowaniu otrzymanych od Ciebie informacji sprawdzam możliwości transportu, zakwaterowania oraz dostępnych atrakcji w danym terminie. Przygotowuję zestawienie oraz estymację kosztów.',
  },
  {
    title: 'Podpisujesz umowę',
    description:
      'Jeśli akceptujesz przedstawioną przeze mnie ofertę, podpisujesz umowę z biurem podróży, które posiada licencję organizatora podróży.',
  },
  {
    title: 'Otrzymujesz szczegółowy plan podróży, który z Tobą omawiam',
    description:
      'Przygotowuję dla Ciebie szczegółowy plan opisujący każdy dzień Twojej podróży zawierający szczegóły dotyczące przejazdów, lokalnych atrakcji, garstronomii oraz innych aspektów wycieczki. Następnie omawiam z Tobą cały plan i odpowiadam na wszelkie pytania.',
  },
  {
    title: 'Cieszysz się beztroskimi wakacjami!',
    description:
      'Czas udać się w podróż, którą dla Ciebie przygotowałam. Nie musisz zastanawiać się jak spędzić czas oraz czy czegoś zapomniałeś/aś. O wszystko zadbałam. Po prostu ciesz się wakacjami!',
  },
]

export default function Home() {
  return (
    <Container>
      <Hero />
      <Section title="Jak to działa?">
        <StepList steps={steps} />
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
