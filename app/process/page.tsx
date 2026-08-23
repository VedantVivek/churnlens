'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function ProcessIntelligence() {
  const [funnel, setFunnel] = useState<any>(null)

  useEffect(() => {
    fetch('/api/process')
      .then(res => res.json())
      .then(data => setFunnel(data))
  }, [])

  if (!funnel) return <p className="p-10">Loading...</p>

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Process Intelligence — Signup Funnel</h1>
      <div className="bg-white shadow rounded-xl p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={funnel.stages} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="stage" width={120} />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Business Interpretation</p>
        <p>{funnel.insight}</p>
      </div>
    </main>
  )
}