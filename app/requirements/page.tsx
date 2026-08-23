export default function RequirementsHub() {
  return (
    <main className="p-10 space-y-8 max-w-4xl">
      <h1 className="text-3xl font-bold">Requirements Hub</h1>
      <p className="text-gray-500">These are the BA documents I put together before building anything — figured it's easier
  to build the right thing once than rebuild the wrong thing twice.</p>

      <section>
        <h2 className="text-xl font-semibold mb-2">Business Objective</h2>
        <p>Reduce user drop-off during onboarding by identifying where and why users disengage, and provide actionable insights to the growth/ops team.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Functional Requirements</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>FR-01: System shall display total users, activation rate, and churn rate on the dashboard.</li>
          <li>FR-02: System shall allow filtering users by channel and churn status.</li>
          <li>FR-03: System shall visualize the signup-to-retention funnel.</li>
          <li>FR-04: System shall generate an AI-assisted churn explanation with a suggested action.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">User Story Example</h2>
        <p className="italic">As an operations manager, I want to see which channel has the highest churn, so that I can prioritize retention efforts.</p>
        <p className="mt-2 text-sm text-gray-600">
          <b>Given</b> churn data exists for multiple channels,<br/>
          <b>When</b> I open the Insights page,<br/>
          <b>Then</b> I see the channel with highest churn and a suggested action.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Additional User Stories</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            As a product manager, I want to see the signup-to-retention funnel,
            so that I can identify the exact stage where users drop off.
          </li>
          <li>
            As a business analyst, I want validation and churn data to be traceable
            to specific requirements, so that stakeholders can verify solution coverage.
          </li>
          <li>
            As a recruiter/interviewer, I want to explore the platform without logging in,
            so that I can quickly evaluate the solution.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Non-Functional Requirements</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>NFR-01: Dashboard must load within 3 seconds on standard broadband.</li>
          <li>NFR-02: Platform must be usable on both desktop and mobile screens.</li>
          <li>NFR-03: No personally identifiable information (PII) is used — all data is synthetic.</li>
        </ul>
      </section>
      <section>
  <h2 className="text-xl font-semibold mb-2">Requirements Traceability Matrix (RTM)</h2>
  <div className="overflow-x-auto">
    <table className="w-full bg-white shadow rounded-xl overflow-hidden text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Req ID</th>
          <th className="p-3 text-left">Requirement</th>
          <th className="p-3 text-left">User Story</th>
          <th className="p-3 text-left">API</th>
          <th className="p-3 text-left">Test Case</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="p-3">FR-01</td>
          <td className="p-3">Display core KPIs</td>
          <td className="p-3">US-01: View activation/churn rate</td>
          <td className="p-3">GET /api/kpis</td>
          <td className="p-3">TC-01: KPIs load correctly</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">FR-02</td>
          <td className="p-3">Filter users by channel/churn</td>
          <td className="p-3">US-02: Filter user records</td>
          <td className="p-3">GET /api/users</td>
          <td className="p-3">TC-02: Filter returns correct subset</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">FR-03</td>
          <td className="p-3">Visualize signup-to-retention funnel</td>
          <td className="p-3">US-03: View funnel stages</td>
          <td className="p-3">GET /api/process</td>
          <td className="p-3">TC-03: Funnel counts match data</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">FR-04</td>
          <td className="p-3">AI-assisted churn explanation</td>
          <td className="p-3">US-04: View top churn reason</td>
          <td className="p-3">GET /api/insights</td>
          <td className="p-3">TC-04: Insight text renders with disclaimer</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">FR-05</td>
          <td className="p-3">Flag high-risk users</td>
          <td className="p-3">US-05: View at-risk user list</td>
          <td className="p-3">GET /api/high-risk</td>
          <td className="p-3">TC-05: Correct users flagged</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section>
  <h2 className="text-xl font-semibold mb-2">UAT Scenarios</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><b>TC-01 (Positive):</b> Dashboard loads and displays correct total user count matching database.</li>
    <li><b>TC-02 (Positive):</b> Filtering users by "Churned = Yes" shows only churned users.</li>
    <li><b>TC-02 (Negative):</b> Selecting an invalid/non-existent channel filter returns an empty table without errors.</li>
    <li><b>TC-03 (Positive):</b> Funnel stage counts decrease monotonically (Signed Up ≥ Activated ≥ Transacted ≥ Retained).</li>
    <li><b>TC-04 (Positive):</b> AI Insights page displays a churn reason and a human-review disclaimer.</li>
    <li><b>TC-04 (Negative):</b> If the API fails, the page shows an error state instead of breaking.</li>
    <li><b>TC-05 (Positive):</b> High-Risk Users list only includes activated, non-churned users with ≤1 transaction.</li>
  </ul>
</section>
<section>
  <h2 className="text-xl font-semibold mb-2">Risk Register</h2>
  <div className="overflow-x-auto">
    <table className="w-full bg-white shadow rounded-xl overflow-hidden text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Risk</th>
          <th className="p-3 text-left">Likelihood</th>
          <th className="p-3 text-left">Impact</th>
          <th className="p-3 text-left">Mitigation</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="p-3">AI insight is inaccurate or misleading</td>
          <td className="p-3">Medium</td>
          <td className="p-3">High</td>
          <td className="p-3">Label all AI output, require human review before action</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Synthetic data doesn't reflect real patterns</td>
          <td className="p-3">Medium</td>
          <td className="p-3">Medium</td>
          <td className="p-3">Clearly disclose synthetic data; validate patterns are realistic</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">API downtime affects demo</td>
          <td className="p-3">Low</td>
          <td className="p-3">Medium</td>
          <td className="p-3">Add error states; use free-tier monitoring</td>
        </tr>
        <tr className="border-t">
          <td className="p-3">Recruiter finds site confusing</td>
          <td className="p-3">Low</td>
          <td className="p-3">High</td>
          <td className="p-3">Add guided tour, tooltips, and clear labels</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
    </main>
  )
}