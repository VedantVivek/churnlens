import { supabase } from '../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '0')
  const pageSize = 50
  const from = page * pageSize
  const to = from + pageSize - 1

  const { data, error } = await supabase.from('users').select('*').range(from, to)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}