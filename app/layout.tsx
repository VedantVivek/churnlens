import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChurnLens - Customer Churn Intelligence Platform",
  description: "AI-assisted platform for identifying user drop-off and churn patterns",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <nav className="bg-indigo-600 text-white p-4 flex flex-wrap gap-4 md:gap-6 items-center">
          <a href="/" className="font-bold">ChurnLens</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/process">Process</a>
          <a href="/insights">Insights</a>
          <a href="/requirements">Requirements</a>
          <a href="/experiments">Experiments</a>

          <details className="relative">
            <summary className="cursor-pointer list-none px-2 py-1 hover:bg-indigo-500 rounded">
              More ▾
            </summary>
            <div className="absolute bg-white text-gray-800 rounded-lg shadow-lg mt-2 p-2 flex flex-col gap-1 z-10 min-w-[180px]">
              <a href="/users" className="px-3 py-1 hover:bg-gray-100 rounded">Users</a>
              <a href="/case-study" className="px-3 py-1 hover:bg-gray-100 rounded">Case Study</a>
              <a href="/retention" className="px-3 py-1 hover:bg-gray-100 rounded">Retention</a>
              <a href="/high-risk" className="px-3 py-1 hover:bg-gray-100 rounded">High Risk</a>
              <a href="/channel-retention" className="px-3 py-1 hover:bg-gray-100 rounded">Channel Retention</a>
              <a href="/revenue" className="px-3 py-1 hover:bg-gray-100 rounded">Revenue</a>
              <a href="/data-dictionary" className="px-3 py-1 hover:bg-gray-100 rounded">Data Dictionary</a>
              <a href="/sql-analysis" className="px-3 py-1 hover:bg-gray-100 rounded">SQL Analysis</a>
            </div>
          </details>

          <span
            title="Start at Dashboard → Process → Insights → Requirements → Experiments for the best walkthrough"
            className="ml-auto cursor-help bg-indigo-500 rounded-full w-6 h-6 flex items-center justify-center text-sm"
          >
            ?
          </span>
        </nav>
        {children}
      </body>
    </html>
  );
}