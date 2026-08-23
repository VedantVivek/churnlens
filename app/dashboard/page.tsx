'use client'
import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const [kpis, setKpis] = useState<any>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/kpis')
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(true)
        else setKpis(data)
      })
      .catch(() => setError(true))
  }, [])

  if (error) return (
    <main className="p-10">
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
        Unable to load dashboard data. Please refresh the page or try again later.
      </div>
    </main>
  )

  if (!kpis) return (
    <main className="p-10">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => <div key={i} className="h-24 bg-gray-200 rounded-xl"></div>)}
        </div>
      </div>
    </main>
  )

  return (
    <main className="p-10 space-y-6">
      <p className="text-gray-500 text-sm -mt-4">Numbers I check first whenever I'm trying to understand how the product is doing.</p>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
        <p className="text-indigo-600 text-sm font-semibold">NORTH STAR METRIC</p>
        <p className="text-4xl font-bold text-indigo-700">{kpis.northStarMetric}</p>
        <p className="text-gray-500">{kpis.northStarLabel}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6" title="Total number of users in the dataset">
          <p className="text-gray-500">Total Users</p>
          <p className="text-3xl font-bold">{kpis.totalUsers}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6" title="% of users who completed their first meaningful action after signup">
          <p className="text-gray-500">Activation Rate</p>
          <p className="text-3xl font-bold">{kpis.activationRate}%</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6" title="% of users who became inactive for 30+ days">
          <p className="text-gray-500">Churn Rate</p>
          <p className="text-3xl font-bold">{kpis.churnRate}%</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6" title="Average number of transactions per user">
          <p className="text-gray-500">Avg Transactions/User</p>
          <p className="text-3xl font-bold">{kpis.avgTransactions}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-6 mt-6">
        <p className="text-gray-500 mb-4">Signups by Channel</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={kpis.channelBreakdown}>
            <XAxis dataKey="channel" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  )
}