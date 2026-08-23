export default function DataDictionary() {
  const fields = [
    { name: 'user_id', type: 'Integer', desc: 'Unique identifier for each user' },
    { name: 'signup_date', type: 'Date', desc: 'Date the user signed up' },
    { name: 'signup_channel', type: 'Text', desc: 'Acquisition channel: App, Web, or Referral' },
    { name: 'activation_flag', type: 'Boolean', desc: 'Whether the user completed their first meaningful action' },
    { name: 'activation_date', type: 'Date', desc: 'Date the user was activated (if applicable)' },
    { name: 'last_active_date', type: 'Date', desc: 'Most recent date the user was active' },
    { name: 'total_transactions', type: 'Integer', desc: 'Total number of transactions/orders by the user' },
    { name: 'churn_flag', type: 'Boolean', desc: 'True if the user has been inactive 30+ days' },
    { name: 'feedback_score', type: 'Integer (1-5)', desc: 'Customer satisfaction rating, where available' },
  ]

  return (
    <main className="p-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Data Dictionary</h1>
      <p className="text-gray-500 mb-6">
  Wrote this mainly so anyone poking around the dataset doesn't have to guess what each field means.
</p>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Field</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(f => (
              <tr key={f.name} className="border-t">
                <td className="p-3 font-mono text-sm">{f.name}</td>
                <td className="p-3">{f.type}</td>
                <td className="p-3">{f.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}