export default function SQLAnalysis() {
  const queries = [
    {
      question: "What is the overall churn rate?",
      sql: `SELECT 
  ROUND(100.0 * COUNT(*) FILTER (WHERE churn_flag) / COUNT(*), 1) AS churn_rate
FROM users;`
    },
    {
      question: "Which signup channel has the highest drop-off (never activated)?",
      sql: `SELECT signup_channel,
  ROUND(100.0 * COUNT(*) FILTER (WHERE NOT activation_flag) / COUNT(*), 1) AS drop_off_rate
FROM users
GROUP BY signup_channel
ORDER BY drop_off_rate DESC;`
    },
    {
      question: "What is the average number of transactions for retained vs churned users?",
      sql: `SELECT churn_flag, ROUND(AVG(total_transactions), 1) AS avg_transactions
FROM users
GROUP BY churn_flag;`
    },
    {
      question: "How many users are 'high-risk' (activated, not churned, ≤1 transaction)?",
      sql: `SELECT COUNT(*) AS high_risk_users
FROM users
WHERE activation_flag = true 
  AND churn_flag = false 
  AND total_transactions <= 1;`
    },
    {
      question: "What is the customer satisfaction score distribution by channel?",
      sql: `SELECT signup_channel, ROUND(AVG(feedback_score), 2) AS avg_feedback
FROM users
WHERE feedback_score IS NOT NULL
GROUP BY signup_channel;`
    },
  ]

  return (
    <main className="p-10 max-w-4xl space-y-6">
      <h1 className="text-3xl font-bold mb-2">SQL Analysis</h1>
      <p className="text-gray-500 mb-6">
        Business questions answered using SQL queries against the ChurnLens dataset (run in Supabase SQL Editor).
      </p>

      {queries.map((q, i) => (
        <div key={i} className="bg-white shadow rounded-xl p-6">
          <p className="font-semibold mb-2">{i + 1}. {q.question}</p>
          <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-lg overflow-x-auto">
            {q.sql}
          </pre>
        </div>
      ))}
    </main>
  )
}