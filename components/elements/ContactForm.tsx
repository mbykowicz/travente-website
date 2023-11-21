'use client'

import { FormEvent, useRef, useState } from 'react'

import { XMarkIcon } from '@heroicons/react/20/solid'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'

import axios from 'axios'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import i18next from 'i18next'
import { zodI18nMap } from 'zod-i18n-map'
import traslation from 'zod-i18n-map/locales/pl/zod.json'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select'
import Link from 'next/link'
import { InstagramIcon, MailIcon, SmartphoneIcon } from 'lucide-react'

const options = [
  {
    label: 'Zwiedzanie',
    value: 'Zwiedzanie',
  },
  {
    label: 'Odpoczynek',
    value: 'Odpoczynek',
  },
  {
    label: 'Aktywne zwiedzanie',
    value: 'Aktywne zwiedzanie',
  },
  {
    label: 'Inny (Opisz swój cel poniżej )',
    value: 'Inny',
  },
]

export default function ContactForm() {
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false)
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false)

  i18next.init({
    lng: 'pl',
    resources: {
      pl: { zod: traslation },
    },
  })
  z.setErrorMap(zodI18nMap)

  const formSchema = z.object({
    name: z.string().min(1, { message: 'Wymagane' }),
    phone: z.string().min(1, { message: 'Wymagane' }),
    email: z.string().min(1, { message: 'Wymagane' }).email(),
    people: z.string().min(1, { message: 'Wymagane' }),
    target: z.string().min(1, { message: 'Wymagane' }),
    destination: z.string().min(1, { message: 'Wymagane' }),
    description: z.string().min(1, { message: 'Wymagane' }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      people: '',
      target: '',
      destination: '',
      description: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Sending...')
    await axios
      .post('/api/send', JSON.stringify(values))
      .then((res) => {
        console.log('Successful: ' + res.status)
        setIsSuccessAlertOpen(true)
      })
      .catch((err) => {
        console.error(err)
        setIsSuccessAlertOpen(true)
      })
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset
            className="grid grid-cols-1 gap-6 md:grid-cols-2 disabled:opacity-50"
            disabled={form.formState.isSubmitting}
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię i nazwisko</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numer telefonu</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="nazwa@domena.pl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="people"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ilość osób</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="target"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cel podróży</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Jak chesz spędzić swój wyjazd?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kierunek</FormLabel>
                    <FormControl>
                      <Input placeholder="Np. Włochy, Toskania" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opis</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>
          <Button
            type="submit"
            className="w-full mt-6"
            disabled={form.formState.isSubmitting}
          >
            Wyślij zapytanie
          </Button>
        </form>
        {isSuccessAlertOpen && (
          <div className="relative p-6 my-6 text-center text-green-900 bg-green-200">
            <p>Wiadomość została wysłana.</p>
            <button
              className="absolute -translate-y-1/2 right-4 top-1/2"
              onClick={() => setIsSuccessAlertOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 opacity-50" />
            </button>
          </div>
        )}
        {isErrorAlertOpen && (
          <div className="relative p-6 my-6 text-center text-red-900 bg-red-200">
            <p>Wystąpił problem. Wiadomość nie została wysłana.</p>
            <button
              className="absolute -translate-y-1/2 right-4 top-1/2"
              onClick={() => setIsErrorAlertOpen(false)}
            >
              <XMarkIcon className="w-6 h-6 opacity-50" />
            </button>
          </div>
        )}
      </Form>
      <div className="mt-10 space-y-6">
        <div className="space-y-2">
          <p className="font-medium">Masz inne pytanie? Napisz lub zadzwoń:</p>
          <div className="flex items-center gap-2 text-storm-dust-600">
            <MailIcon className="w-4 h-4" />
            <Link href="mailto:biuro@travente.pl">biuro@travente.pl</Link>
          </div>
          <div className="flex items-center gap-2 text-storm-dust-600">
            <SmartphoneIcon className="w-4 h-4" />
            <Link href="tel:+48575392310">+48 575 392 310</Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-medium">Znajdziesz mnie na Instagramie</p>
          <div className="flex items-center gap-2 text-storm-dust-600">
            <InstagramIcon className="w-4 h-4" />
            <Link href="https://www.instagram.com/ewa.travente/">
              @ewa.travente
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
