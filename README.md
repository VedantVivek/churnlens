# ChurnLens — Customer Churn & Onboarding Intelligence Platform

A platform that identifies where and why users drop off during onboarding, visualizes the
signup-to-retention funnel, and uses AI-assisted insights to suggest operational next steps.

## Live Demo
[(Link will be added after deployment)](https://churnlens-mzc5.vercel.app/)

## The Problem
Most digital products lose a large share of users between signup and meaningful first use.
Without visibility into where and why this happens, growth and product teams can't act on it
in time. This project builds that visibility.

## Features
- Executive dashboard with real-time KPIs (activation rate, churn rate, North Star Metric)
- Filterable, searchable user records table with pagination
- Process/funnel intelligence page showing where users drop off
- Cohort retention (D1/D7/D30) and channel-wise retention comparison
- AI-assisted insights explaining top churn reasons in plain language (labeled, human-review required)
- Simulated A/B experiment design for reducing drop-off
- Revenue/ARPU simulation
- High-risk user flagging for proactive outreach
- Full Business Analyst documentation (BRD, functional/non-functional requirements,
  user stories, Requirements Traceability Matrix, UAT scenarios, risk register)
- Data dictionary and SQL analysis pages

## Testing
- 5 automated end-to-end tests (Playwright) covering landing page, dashboard, search/filter
  functionality, funnel visualization, and BA documentation pages — run across Chromium,
  Firefox, and WebKit.
- Manual UAT scenarios documented in the Requirements Hub, covering positive and negative
  cases for each core feature.

  
## Tech Stack
- Next.js (TypeScript), Tailwind CSS
- Supabase (PostgreSQL) with Row Level Security enabled
- Recharts for data visualization

## Data
A synthetic dataset of 8,000 user records, generated using Python (Faker + NumPy), for
demonstration purposes only. No real user data is used.

## Author
Vedant Vivek — Business Analyst
