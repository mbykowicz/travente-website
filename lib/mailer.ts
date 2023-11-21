import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import { TransportOptions } from 'nodemailer'
import { render } from '@react-email/render'
import Email from '@/emails/EmailComponent'

interface Data {
  name: string
  phone: string
  email: string
  people: string
  target: string
  destination: string
  description: string
}

export const sendEmail = async (data: Data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  } as SMTPTransport.Options)

  const emailHtml = render(Email({ ...data }))

  const options = {
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
    subject: '[Travente.pl] Nowe zapytanie klienta',
    html: emailHtml,
  }

  return await transporter.sendMail(options)
}
