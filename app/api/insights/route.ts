import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const churnedByChannel: Record<string, number> = {}
  data.forEach(u => {
    if (u.churn_flag) {
      churnedByChannel[u.signup_channel] = (churnedByChannel[u.signup_channel] || 0) + 1
    }
  })

  const topChannel = Object.entries(churnedByChannel).sort((a, b) => b[1] - a[1])[0]

  return NextResponse.json({
    topReason: `Most churned users signed up via the "${topChannel[0]}" channel (${topChannel[1]} users). This suggests the onboarding experience for this channel may need improvement.`,
    suggestedAction: `Review the first-week experience for ${topChannel[0]}-acquired users and consider a targeted re-engagement email within 3 days of signup.`
  })
}