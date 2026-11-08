# GDGoC UGM Hacker Frontend - Fadjrina

This project features a modern, responsive, and dynamic landing page and sub-pages built with Next.js, TypeScript, and Tailwind CSS.

## 📌 Project Overview
This repository houses the frontend for GDGoC UGM. It serves as a central hub for students and developers to learn about learning tracks, upcoming events, organizational background, and inquiry channels.

## ✨ Key Features
- Landing Page (/): Main showcase highlighting GDGoC UGM's mission, tracks, and calls-to-action.
- About Page (/about): Detailed page about the organization with seamless client-side navigation.
- Dynamic Navigation Bar: Fetches menu structures dynamically from API endpoint (/navigation) with intelligent fallback - mechanisms for manual routes.
- Inquiry Categories Integration: Form structure ready for user support/inquiries fetched dynamically via /inquiry-categories.
- Responsive UI/UX: Designed using Google-inspired aesthetics with full responsiveness across desktop and mobile devices.

## 🛠️ Tech Stack & Architecture
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Icons & Assets: Custom SVG & Next.js Image Optimization
- Deployment Platform: Vercel

## 📂 Directory Structure
gdgoc-hacker-frontend/
```bash
├── public/                 # Static assets (logos, images)
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout & global providers
│       ├── page.tsx        # Main Landing Page (Root route '/')
│       ├── globals.css     # Global Tailwind styles
│       ├── about/
│       │   └── page.tsx    # Sub-route page ('/about')
│       └── components/     # Modular UI components
│           ├── navbar.tsx  # Dynamic & Client-side Header
│           └── footer.tsx  # Footer component with internal links
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and script definitions
└── README.md               # Project documentation
```

## 🚀 Getting Started & Local Setup
Follow these instructions to get a copy of the project up and running on your local machine for development and testing.
Prerequisites

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Public URL
https://gdgoc-ugm-hacker-frontend-fadjrina.vercel.app/
