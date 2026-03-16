Self Introduction Webpage
A personal self-introduction webpage built with Next.js.

Project Overview
This project is built on the default Next.js boilerplate. Core files such as globals.css have not been modified. All custom changes are contained within the app/ folder and the default page.tsx. The only modification made to a core file is in layout.tsx, where the Navbar component was implemented so it appears across all pages.

Project Structure
app/
├── layout.tsx          → Core layout file (Navbar added here)
├── page.tsx            → Home page (About Me)
├── globals.css         → Global styles (unchanged)
├── experience/
│   └── page.tsx        → Experience page
├── Contact/
│   └── page.tsx        → Contact page
└── components/
    └── Navbar.tsx      → Navbar component

Navbar
The Navbar is implemented inside layout.tsx so it persists across all pages without needing to be imported individually into each one.
The Navbar has three parts:

Name Text — Displays the developer's name on the left side of the navbar
Drop Menu — A collapsible navigation menu containing links to all three pages (Home, Experience, Contact)
Toggle Button (☰) — A hamburger button on the right that opens and closes the drop menu


Pages
1. Home — app/page.tsx
The default landing page. Contains a personal self-introduction with an About Me heading and a brief paragraph about the developer.
2. Experience — app/experience/page.tsx
A dedicated page displaying professional experience, internships, and project work.
3. Contact — app/Contact/page.tsx
A contact information page with links to GitHub, LinkedIn, and email.

Getting Started
Install dependencies:
bashnpm install
Run the development server:
bashnpm run dev
Open http://localhost:3000 in your browser to view the project.

Tech Stack

Next.js
Tailwind CSS
React Icons