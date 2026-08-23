export default function CaseStudy() {
  return (
    <main className="p-10 space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Project Case Study</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Business Problem</h2>
        <p>Digital products commonly lose a large share of users between signup and meaningful first use. Without visibility into where and why this happens, growth and ops teams cannot act.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">AS-IS Process</h2>
        <p>Currently, teams often rely on delayed, manual reporting to understand drop-off, with no real-time visibility into churn drivers by channel.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">TO-BE Process</h2>
        <p>ChurnLens provides real-time KPIs, a funnel view, and an AI-assisted explanation of churn drivers — enabling faster, targeted retention action.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">My Role</h2>
        <p>
          I handled this end-to-end, mostly wearing the BA hat — figuring out requirements, deciding
          how the data should be organized, writing user stories, and then checking the build actually
          matched what I wrote down. Took a couple of tries to settle on the churn definition, honestly —
          went back and forth on whether 30 days inactive was the right cutoff.
        </p>
      </section>

      <section className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-3">Simulated Business Impact</h2>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <p className="text-gray-500 text-sm">BEFORE (Baseline)</p>
            <p className="text-2xl font-bold">65.2% Activation</p>
            <p className="text-gray-500 text-sm">49.8% Churn Rate</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">AFTER (Projected, based on A/B test simulation)</p>
            <p className="text-2xl font-bold text-green-600">71.4% Activation</p>
            <p className="text-gray-500 text-sm">Est. 6-8% reduction in churn</p>
          </div>
        </div>
        <p className="text-sm">
          Working off the experiment I designed, pushing activation up by around 6 percentage points
          would translate to roughly <b>₹4-6 lakhs</b> in extra simulated monthly revenue — mostly from
          catching App-channel users before they drop off early.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          ⚠ These are simulated/estimated numbers based on synthetic data, not from a live experiment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Limitations</h2>
        <p>Built on synthetic data for demonstration. AI insights are rule-based for this demo and designed to plug into a real LLM in production. Simulated/estimated metrics are labeled accordingly.</p>
      </section>
    </main>
  )
}