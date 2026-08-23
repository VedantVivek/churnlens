'use client'
import { useEffect, useState } from 'react'

export default function HighRisk() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/high-risk')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-2">High-Risk Users</h1>
      <p className="text-gray-500 mb-6">
        Active users showing early signs of disengagement — recommended for proactive outreach.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Channel</th>
              <th className="p-3 text-left">Transactions</th>
              <th className="p-3 text-left">Risk Reason</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.user_id} className="border-t">
                <td className="p-3">{u.user_id}</td>
                <td className="p-3">{u.channel}</td>
                <td className="p-3">{u.transactions}</td>
                <td className="p-3">
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                    {u.riskReason}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}