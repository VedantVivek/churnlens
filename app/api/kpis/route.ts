import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const total = data.length
  const activated = data.filter(u => u.activation_flag).length
  const churned = data.filter(u => u.churn_flag).length
  const avgTxn = (data.reduce((sum, u) => sum + (u.total_transactions || 0), 0) / total).toFixed(1)

  const channelBreakdown = ['App', 'Web', 'Referral'].map(ch => ({
    channel: ch,
    count: data.filter(u => u.signup_channel === ch).length
  }))

  return NextResponse.json({
    totalUsers: total,
    activationRate: (activated / total * 100).toFixed(1),
    churnRate: (churned / total * 100).toFixed(1),
    avgTransactions: avgTxn,
    channelBreakdown,
    northStarMetric: `${(activated / total * 100 * 0.6).toFixed(1)}%`,
    northStarLabel: "Weekly Active Repeat Users (simulated)",
  })
}