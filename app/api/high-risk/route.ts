import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const highRisk = data
    .filter(u => u.activation_flag && !u.churn_flag && u.total_transactions <= 1)
    .slice(0, 20)
    .map(u => ({
      user_id: u.user_id,
      channel: u.signup_channel,
      transactions: u.total_transactions,
      feedback: u.feedback_score,
      riskReason: u.total_transactions === 0
        ? 'Activated but never transacted — likely to churn soon'
        : 'Only 1 transaction — low engagement, at risk'
    }))

  return NextResponse.json(highRisk)
}