'use client'
import { useEffect, useState } from 'react'

export default function Insights() {
  const [insights, setInsights] = useState<any>(null)

  useEffect(() => {
    fetch('/api/insights')
      .then(res => res.json())
      .then(data => setInsights(data))
  }, [])

  if (!insights) return <p className="p-10">Loading...</p>

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">AI-Assisted Insights</h1>
      <p className="text-sm text-gray-400">
        This page pulls together the churn data and explains it in plain English. I kept it
  rule-based for now instead of hooking up a live LLM, mostly to keep it fast and free
  to run — but marked everything clearly as AI-assisted since that's the honest way to
  present it.
      </p>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Top Churn Reason</p>
        <p className="text-lg">{insights.topReason}</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <p className="text-gray-500 mb-2">Suggested Next Action</p>
        <p className="text-lg">{insights.suggestedAction}</p>
        <span className="inline-block mt-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
          Confidence: Medium — AI-Assisted
        </span>
      </div>
    </main>
  )
}