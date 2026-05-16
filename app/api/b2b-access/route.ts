import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, company } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    // Log to console (replace with DB / email service / Google Sheet webhook later)
    console.log(`[B2B Lead] ${new Date().toISOString()} | ${company} | ${email}`)

    // TODO: send to your CRM / Notion / Google Sheet via webhook
    // await fetch(process.env.B2B_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, company, timestamp: new Date().toISOString() }),
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
