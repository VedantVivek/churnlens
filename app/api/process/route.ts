import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const signedUp = data.length
  const activated = data.filter(u => u.activation_flag).length
  const transacted = data.filter(u => u.total_transactions > 0).length
  const retained = data.filter(u => !u.churn_flag).length

  const stages = [
    { stage: 'Signed Up', count: signedUp },
    { stage: 'Activated', count: activated },
    { stage: 'Transacted', count: transacted },
    { stage: 'Retained', count: retained },
  ]

  const dropRate = (((signedUp - activated) / signedUp) * 100).toFixed(1)

  return NextResponse.json({
    stages,
   insight: `The biggest gap is between signup and activation — ${dropRate}% of people never even get past that first step. That's usually the cheapest place to fix things, since you don't need to change the whole product, just that first experience.`
  })
}