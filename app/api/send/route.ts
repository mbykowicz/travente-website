// import EmailTemplate from '@/components/emailTemplate'
// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request: Request) {
//   try {
//     const json = await request.json()

//     const data = await resend.emails.send({
//       from: 'Zaplanuj Podróż <onboarding@resend.dev>',
//       to: ['biuro.zaplanujpodroz@gmail.com'],
//       subject: 'Zapytanie ze strony www',
//       react: EmailTemplate(json),
//     })

//     return NextResponse.json(json)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }

import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/mailer'

export async function POST(req: Request) {
  const json = await req.json()
  try {
    await sendEmail(json)

    return NextResponse.json(json)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
