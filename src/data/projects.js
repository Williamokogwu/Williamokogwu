// Central project data used by both the home page and the full Work page.
// Keeping content here prevents project copy from being duplicated in components.
export const workProjects = [
  {
    id: "moneymentor",
    title: "MoneyMentor Mobile Finance App",
    meta: "2025 | Cross-platform mobile app",
    role: "Full-Stack Mobile Developer",
    summary:
      "Built a React Native finance app focused on transaction tracking, budgeting workflows, secure authentication, and real-time dashboard updates across mobile devices.",
    tools: "React Native (Expo), TypeScript, Supabase, Node.js",
    href: "https://github.com/MoneyMentor-09/React-Native-AndroidApplication",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    visual: "from-cyan-300 via-sky-500 to-blue-700",
    challenge:
      "Personal finance apps need to make account access, transaction history, and budget visibility feel immediate and trustworthy across different devices and session states.",
    approach:
      "I built the app with React Native and Supabase, added secure auth flows with persistent sessions and token refresh handling, and implemented filtering and visualization features that kept financial activity easy to inspect.",
    outcome:
      "The result was a cross-platform finance experience with responsive layouts, real-time dashboard updates, and smoother day-to-day budgeting and transaction review flows.",
    details: [
      "Implemented Supabase Auth with email/password login, Google OAuth, deep linking, persistent sessions, and token refresh handling.",
      "Built transaction tracking, budgeting logic, and real-time dashboard updates to keep account activity current without manual refresh friction.",
      "Added date-range filtering, financial data visualization, and responsive mobile layouts to improve usability and navigation flows.",
    ],
  },
  {
    id: "expense-platform",
    title: "Full-Stack Personal Expense Tracking Platform",
    meta: "2025 | Full-stack web application",
    role: "Full-Stack Developer",
    summary:
      "Built an expense tracking platform with a React frontend and Node.js backend to support budget management, expense logging, and spending trend analysis.",
    tools: "React, Node.js, PostgreSQL, TypeScript, Playwright",
    href: "https://github.com/MoneyMentor-09/moneymentor-frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    visual: "from-emerald-300 via-teal-400 to-cyan-700",
    challenge:
      "Expense tracking platforms need reliable data flow across the frontend and backend while still being easy to validate and safe to change as features expand.",
    approach:
      "I used a React client with a Node.js and Express API backed by PostgreSQL, then added automated Playwright coverage across multiple browsers to catch regressions early.",
    outcome:
      "The platform delivered budget tracking and spending analysis features with stronger release confidence, and the automated end-to-end coverage reduced regression defects by 30%.",
    details: [
      "Built budget management, expense logging, and spending-trend analysis on top of a typed full-stack architecture.",
      "Designed frontend and backend flows so users could move cleanly between recording expenses, reviewing budgets, and inspecting trends.",
      "Developed Playwright end-to-end tests across multiple browsers, improving release stability and reducing regression defects by 30%.",
    ],
  },
  {
    id: "bookease",
    title: "BookEase Serverless Booking Assistant",
    meta: "2025 | Conversational AWS project",
    role: "Cloud Developer",
    summary:
      "Built a serverless hotel booking assistant that handled reservations, validated user input, and managed multi-turn conversations through AWS services.",
    tools: "Python, AWS Lex, Lambda, DynamoDB",
    href: "https://github.com/Williamokogwu/BookEase",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    visual: "from-fuchsia-300 via-pink-400 to-orange-500",
    challenge:
      "Booking assistants need to collect structured reservation details without losing context between turns or failing when user input is incomplete or inconsistent.",
    approach:
      "I used AWS Lex for conversational flows, Python-based Lambda functions for reservation processing and validation, and DynamoDB for reservation records and session recovery.",
    outcome:
      "The assistant supported reservation handling with reliable state recovery, quick lookups, and cleaner multi-step booking interactions.",
    details: [
      "Built Lambda functions in Python to process reservations, validate fields, and coordinate multi-turn conversation logic.",
      "Designed DynamoDB schemas to store both reservation data and session state for fast lookups and reliable recovery.",
      "Used a serverless AWS architecture to keep the booking workflow lightweight, event-driven, and easy to extend.",
    ],
  },
  {
    id: "cloud-iam",
    title: "Cloud Identity and Access Management Project",
    meta: "May 2025 | AWS infrastructure and security",
    role: "Cloud Security Project",
    summary:
      "Configured AWS identity and infrastructure components with a least-privilege focus, combining IAM controls with practical EC2, S3, and VPC usage.",
    tools: "AWS IAM, EC2, S3, VPC",
    href: "https://github.com/Williamokogwu/BookEase", // Placeholder or direct link if any, using Lex repo or similar
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    visual: "from-amber-200 via-orange-400 to-rose-600",
    challenge:
      "Cloud environments become risky quickly when permissions are overly broad or identity boundaries are not designed with clear operational roles in mind.",
    approach:
      "I configured IAM users, roles, and policies around least-privilege access patterns, paired that with password security controls, and applied role-based permissions for EC2 and S3 access.",
    outcome:
      "The project established a stronger security baseline and reinforced practical IAM design habits around scoped permissions, infrastructure access, and account policy enforcement.",
    details: [
      "Configured AWS IAM users, roles, and policies with least-privilege access principles.",
      "Set role-based permissions for EC2 and S3 to separate responsibilities and reduce unnecessary access.",
      "Applied account-level password security policies to strengthen baseline identity protection.",
    ],
  },
];
