'use client'
import { useState } from 'react'

export default function Landing() {
  const [showTour, setShowTour] = useState(false)

  const tourSteps = [
    "Start at the Dashboard — see core KPIs and the North Star Metric.",
    "Check the Process page — view the signup-to-retention funnel and where users drop off.",
    "Visit Insights — see an AI-assisted explanation of the top churn reason.",
    "Look at Experiments — see a simulated A/B test to improve activation.",
    "Review Requirements — full BA documentation including RTM and UAT.",
  ]

  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
          BUSINESS ANALYST PORTFOLIO PROJECT
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          ChurnLens
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Understand exactly where and why users drop off — and what to do about it.
        </p>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          I kept noticing the same problem across apps I used — people sign up, poke around a bit,
  then disappear. Companies usually find out too late to do anything about it. I built this
  to see what it'd look like if you could catch that early instead. It tracks the whole
  journey from signup to churn, shows exactly where people drop off, and even sketches out
  what an A/B test to fix it might look like.
        </p>

        <div className="flex gap-4 flex-wrap pt-2">
          <a href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200">
            Explore Live Demo →
          </a>
          <a href="/case-study" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition px-7 py-3 rounded-xl font-semibold">
            View Case Study
          </a>
          <button
            onClick={() => setShowTour(!showTour)}
            className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 transition px-7 py-3 rounded-xl font-semibold"
          >
            {showTour ? 'Hide Tour' : '60-Second Tour'}
          </button>
        </div>

        {showTour && (
          <div className="bg-white border border-indigo-200 rounded-xl p-6 space-y-2 shadow-sm">
            <p className="font-semibold text-indigo-700">Suggested walkthrough:</p>
            <ol className="list-decimal pl-6 space-y-1 text-gray-700">
              {tourSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}


        <div className="border-t pt-6 mt-6 space-y-2">
          <p className="text-sm text-gray-400">
            ⚠ This platform uses 100% synthetic data for demonstration purposes only.
          </p>
          <p className="text-gray-600 font-semibold pt-4">About this project</p>
          <p className="text-gray-500 text-sm">
            Built by Vedant Vivek as a Business Analyst portfolio project. Feedback and questions are welcome.
          </p>
          <p className="text-sm mt-1">
            <a href="mailto:vedantvivek496@gmail.com" className="text-indigo-600 underline">Contact me</a>
            {' · '}
            <a href="https://github.com/VedantVivek/churnlens.git" className="text-indigo-600 underline">GitHub Repository</a>
          </p>
        </div>
      </div>
    </main>
  )
}