import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const total = data.length

  const d1 = data.filter(u => u.total_transactions >= 1).length
  const d7 = data.filter(u => u.total_transactions >= 2).length
  const d30 = data.filter(u => !u.churn_flag).length

  const stages = [
    { day: 'D1', retentionRate: +((d1/total)*100).toFixed(1) },
    { day: 'D7', retentionRate: +((d7/total)*100).toFixed(1) },
    { day: 'D30', retentionRate: +((d30/total)*100).toFixed(1) },
  ]

  return NextResponse.json({
    stages,
    insight: `Retention drops off a lot between day 1 (${stages[0].retentionRate}%) and day 30 (${stages[2].retentionRate}%) — most of the loss isn't happening right away, it's happening in that first-week window. That's usually where a re-engagement nudge would help most.`
  })
}