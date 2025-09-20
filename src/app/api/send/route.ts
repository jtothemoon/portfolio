/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactEmailTemplate } from '@/components/contact/email-template'
import { type ContactEmailTemplateProps } from '@/types'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple rate limiting (in production, consider using Redis or external service)
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const userRequests = rateLimitMap.get(ip) || []

  // Clean old requests
  const recentRequests = userRequests.filter((time: number) => now - time < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  return false
}

function validateInput(data: any): data is ContactEmailTemplateProps {
  return (
    typeof data.firstName === 'string' &&
    typeof data.lastName === 'string' &&
    typeof data.email === 'string' &&
    typeof data.message === 'string' &&
    data.firstName.trim().length > 0 &&
    data.lastName.trim().length > 0 &&
    data.email.includes('@') &&
    data.message.trim().length > 0 &&
    data.message.length <= 500
  )
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown'

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Validate request method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
      )
    }

    // Parse and validate input
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON' },
        { status: 400 }
      )
    }

    if (!validateInput(body)) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, message } = body

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }
    const { data, error } = await resend.emails.send({
      from: 'LIM HYUN JIN <contact@limhyunjin.com>',
      to: 'jtothemoon1987@gmail.com',
      subject: `Contact Form: Message from ${firstName} ${lastName}`,
      react: ContactEmailTemplate({
        firstName,
        lastName,
        email,
        message
      })
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
