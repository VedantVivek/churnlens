import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const channels = ['App', 'Web', 'Referral']
  const result = channels.map(ch => {
    const channelUsers = data.filter(u => u.signup_channel === ch)
    const retained = channelUsers.filter(u => !u.churn_flag).length
    const total = channelUsers.length
    return {
      channel: ch,
      retentionRate: total > 0 ? +((retained / total) * 100).toFixed(1) : 0
    }
  })

  const best = result.sort((a, b) => b.retentionRate - a.retentionRate)[0]

  return NextResponse.json({
    data: result,
    insight: `${best.channel} has the highest retention rate (${best.retentionRate}%), suggesting it should receive increased acquisition investment relative to other channels.`
  })
}