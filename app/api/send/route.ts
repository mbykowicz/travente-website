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
