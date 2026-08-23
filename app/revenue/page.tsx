'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Revenue() {
  const [revenue, setRevenue] = useState<any>(null)

  useEffect(() => {
    fetch('/api/revenue')
      .then(res => res.json())
      .then(data => setRevenue(data))
  }, [])

  if (!revenue) return <p className="p-10">Loading...</p>

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Revenue & ARPU (Simulated)</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Total Simulated Revenue</p>
          <p className="text-3xl font-bold">₹{revenue.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">ARPU (Active Users)</p>
          <p className="text-3xl font-bold">₹{revenue.arpu}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-4">Revenue by Channel</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenue.byChannel}>
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Business Interpretation</p>
        <p>{revenue.insight}</p>
        <p className="text-xs text-gray-400 mt-2">
  ⚠ These numbers are made up for the demo, based on a rough assumed order value — just to
  show how you'd connect user behavior to actual business impact, not real revenue.
</p>
      </div>
    </main>
  )
}