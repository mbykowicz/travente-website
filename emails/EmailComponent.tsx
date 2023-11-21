import { Body } from '@react-email/body'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Hr } from '@react-email/hr'
import { Html } from '@react-email/html'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Tailwind } from '@react-email/tailwind'
import { Row } from '@react-email/row'
import { Column } from '@react-email/column'

import * as React from 'react'

interface Data {
  name: string
  phone: string
  email: string
  people: string
  target: string
  destination: string
  description: string
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <Text className="font-medium tracking-wide uppercase text-[10px] text-gray-600 -mb-4">
    {children}
  </Text>
)

function Email(data: Data) {
  return (
    <Html lang="pl">
      <Head />
      <Preview>[Travente.pl] Nowe zapytanie ze strony internetowej</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {},
          },
        }}
      >
        <Body className="bg-gray-300">
          <Container className="p-6 font-sans bg-white rounded shadow-md">
            <Section>
              <Text className="text-lg text-gray-800">
                Zapytanie od klienta ze strony internetowej:
              </Text>
            </Section>
            <Hr />
            <Section>
              <Row>
                <Column>
                  <Label>Imię i nazwisko</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.name}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Label>Numer telefonu</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.phone}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Label>Email</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.email}
                  </Text>
                </Column>
              </Row>
              <Hr />
              <Row>
                <Column>
                  <Label>Ilość osób</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.people}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Label>Cel podróży</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.target}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Label>Kierunek</Label>
                  <Text className="text-lg font-medium text-gray-900">
                    {data.destination}
                  </Text>
                </Column>
              </Row>
              <Hr />
              <Row>
                <Column>
                  <Label>Opis</Label>
                  <Text className="font-medium text-gray-900">
                    {data.description}
                  </Text>
                </Column>
              </Row>
            </Section>
            <Section>
              <Hr />
              <Text className="mx-auto my-6 text-xs text-center text-gray-400">
                Wiadomość wysłana poprzez formularz kontaktowy na stronie
                internetowej <Link href="https://travente.pl">travente.pl</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email
