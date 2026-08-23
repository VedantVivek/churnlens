'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Retention() {
  const [retention, setRetention] = useState<any>(null)

  useEffect(() => {
    fetch('/api/retention')
      .then(res => res.json())
      .then(data => setRetention(data))
  }, [])

  if (!retention) return <p className="p-10">Loading...</p>

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Cohort Retention</h1>
      <p className="text-gray-500">D1 / D7 / D30 retention across signup cohorts.</p>

      <div className="bg-white shadow rounded-xl p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={retention.stages}>
            <XAxis dataKey="day" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="retentionRate" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Business Interpretation</p>
        <p>{retention.insight}</p>
      </div>
    </main>
  )
}