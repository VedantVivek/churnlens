import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase.from('users').select('*').range(0, 7999)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const avgOrderValue = 220
  const totalOrders = data.reduce((sum, u) => sum + (u.total_transactions || 0), 0)
  const totalRevenue = totalOrders * avgOrderValue
  const activeUsers = data.filter(u => u.total_transactions > 0).length
  const arpu = (totalRevenue / activeUsers).toFixed(0)

  const byChannel = ['App', 'Web', 'Referral'].map(ch => {
    const channelUsers = data.filter(u => u.signup_channel === ch)
    const orders = channelUsers.reduce((sum, u) => sum + (u.total_transactions || 0), 0)
    return { channel: ch, revenue: orders * avgOrderValue }
  })

  return NextResponse.json({
    totalRevenue,
    arpu,
    byChannel,
    insight: `Simulated revenue is ₹${totalRevenue.toLocaleString()} with an ARPU of ₹${arpu} per active user (assumed avg order value: ₹${avgOrderValue}). This is a simulated figure for demonstration.`
  })
}