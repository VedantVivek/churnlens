'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function ChannelRetention() {
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    fetch('/api/channel-retention')
      .then(res => res.json())
      .then(data => setResult(data))
  }, [])

  if (!result) return <p className="p-10">Loading...</p>

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Channel-wise Retention Comparison</h1>

      <div className="bg-white shadow rounded-xl p-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={result.data}>
            <XAxis dataKey="channel" />
            <YAxis unit="%" />
            <Tooltip />
            <Bar dataKey="retentionRate" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Business Interpretation</p>
        <p>{result.insight}</p>
      </div>
    </main>
  )
}