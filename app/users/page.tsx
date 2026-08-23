'use client'
import { useEffect, useState } from 'react'

export default function UsersTable() {
  const [users, setUsers] = useState<any[]>([])
  const [page, setPage] = useState(0)
  const [channelFilter, setChannelFilter] = useState('All')
  const [churnFilter, setChurnFilter] = useState('All')
  const [searchId, setSearchId] = useState('')

  useEffect(() => {
    fetch(`/api/users?page=${page}`)
      .then(res => res.json())
      .then(data => setUsers(prev => (page === 0 ? data : [...prev, ...data])))
  }, [page])

  const filtered = users.filter(u => {
    const channelMatch = channelFilter === 'All' || u.signup_channel === channelFilter
    const churnMatch =
      churnFilter === 'All' ||
      (churnFilter === 'Yes' && u.churn_flag) ||
      (churnFilter === 'No' && !u.churn_flag)
    const searchMatch = searchId === '' || u.user_id.toString().includes(searchId)
    return channelMatch && churnMatch && searchMatch
  })

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">User Records</h1>

      <div className="flex gap-4 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by User ID..."
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={channelFilter}
          onChange={e => setChannelFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>App</option>
          <option>Web</option>
          <option>Referral</option>
        </select>

        <select
          value={churnFilter}
          onChange={e => setChurnFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center text-gray-500">
          No users match your current filters. Try adjusting the search or filter criteria.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow rounded-xl overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Channel</th>
                <th className="p-3 text-left">Activated</th>
                <th className="p-3 text-left">Churned</th>
                <th className="p-3 text-left">Transactions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.user_id} className="border-t">
                  <td className="p-3">{u.user_id}</td>
                  <td className="p-3">{u.signup_channel}</td>
                  <td className="p-3">{u.activation_flag ? 'Yes' : 'No'}</td>
                  <td className="p-3">{u.churn_flag ? 'Yes' : 'No'}</td>
                  <td className="p-3">{u.total_transactions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={() => setPage(p => p + 1)}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        Load More
      </button>
    </main>
  )
}