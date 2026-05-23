import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

const PIXEL_ID = '1671127360673666'
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN

function hashSHA256(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!ACCESS_TOKEN) {
    return res.status(500).json({ error: 'META_CAPI_ACCESS_TOKEN not configured' })
  }

  const { event_name, event_id, email, source_url, fbc, fbp } = req.body

  const userData: Record<string, string | string[]> = {}
  if (email) userData.em = [hashSHA256(email)]
  if (fbc) userData.fbc = fbc
  if (fbp) userData.fbp = fbp
  userData.client_ip_address = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket.remoteAddress || ''
  userData.client_user_agent = req.headers['user-agent'] || ''

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url: source_url,
        action_source: 'website',
        user_data: userData,
      },
    ],
  }

  try {
    const response = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    return res.status(200).json(data)
  } catch {
    return res.status(500).json({ error: 'Failed to send event to Meta' })
  }
}
