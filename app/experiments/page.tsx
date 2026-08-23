export default function Experiments() {
  return (
    <main className="p-10 space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Experiment Design — Checkout Simplification</h1>
      <p className="text-gray-500">
  Once I saw where people were dropping off, the natural next question was — what would you
  actually test to fix it? So I sketched this out the way I'd pitch it to a product team.
</p>

      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Hypothesis</h2>
        <p>Simplifying the first-action (activation) flow will reduce drop-off among App-channel users, since App shows the highest churn concentration.</p>
      </section>

      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Test Design</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Split: 50% Control (current flow) / 50% Variant (simplified flow)</li>
          <li>Primary metric: Activation rate</li>
          <li>Guardrail metric: Churn rate (should not worsen)</li>
          <li>Sample size: ~4,000 users (2,000 per group)</li>
          <li>Duration: 2 weeks</li>
        </ul>
      </section>

      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Simulated Result</h2>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <div className="border rounded-lg p-4">
            <p className="text-gray-500">Control — Activation Rate</p>
            <p className="text-3xl font-bold">65.2%</p>
          </div>
          <div className="border rounded-lg p-4 border-green-500">
            <p className="text-gray-500">Variant — Activation Rate</p>
            <p className="text-3xl font-bold text-green-600">71.4%</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          ⚠ Simulated/estimated result for demonstration. Not based on a live experiment.
        </p>
      </section>

      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Recommendation</h2>
        <p>Roll out the simplified activation flow to 100% of App-channel users, with continued monitoring of churn as a guardrail metric.</p>
      </section>
    </main>
  )
}