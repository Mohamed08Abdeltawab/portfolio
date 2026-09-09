import profileImage from "../../screen.png";

export { profileImage };

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "featured-projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Achievements", "achievements"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "code" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "share" },
  { label: "Email", href: "mailto:david.vance@devmail.io", icon: "mail" },
];

export const metrics = [
  ["5+", "Years Experience"],
  ["500k+", "Daily Transactions"],
  ["99.9%", "API Uptime SLA"],
  ["sub-15ms", "Core Latency"],
];

export const projects = [
  {
    category: "Fintech Architecture",
    meta: "// High Volume",
    title: "OmniPay // Core Financial Clearing Engine",
    description:
      "Re-architected high-volume payment processing from a legacy monolithic pipeline to asynchronous, event-driven .NET 8 microservices handling high concurrency with zero loss.",
    features: [
      "Transactional Outbox for absolute idempotency",
      "Sub-15ms p99 transaction authorization",
      "Circuit Breakers & retries via Polly",
      "Distributed locks powered by Redis",
    ],
    tags: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "RabbitMQ",
      "SQL Server",
      "Redis",
      "Docker",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIu5PuexebZ9KecJuMkXQ_WCsU0XVkguHzkGOBZEwpvQwOPL8paF9nrIv8YF6oNWTv-Yz5sDjggBL8YdQy2JcKEfB5pTezcj9_idvzsdBIw_yVmQatFX2P_O6nZt4Whd32LVm-nLA-IhEQCw8NIddQ0CR1a6Lb3fqicaD7KYdgc-8C96kmHyLBKcOKJ_8tstjSH0M6AFjHh0p0Sh6ywcVuGcn1MDDtG3opvBqTkcZ-6UJGjftb2lKGQ",
    status: "Throughput: 14,200 req/s",
    accent: "primary",
  },
  {
    category: "HealthTech & IoT",
    meta: "// HIPAA Compliant",
    title: "HealthPulse // Clinical Telemetry & EHR Platform",
    description:
      "HIPAA-compliant real-time patient monitoring platform unifying medical telemetry streams for intensive care units, delivering instantaneous biometric alerts to medical staff.",
    features: [
      "SignalR WebSockets for real-time vitals",
      "Granular RBAC with hardened JWT tokens",
      "Clean Architecture with MediatR CQRS",
      "Sub-second hospital telemetry alerts",
    ],
    tags: [
      "C#",
      ".NET 8 Web API",
      "React",
      "TypeScript",
      "SQL Server",
      "Azure App Services",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIO_MM4zCVt52EuHkW-u8Pny90DKv9UjIOGtQQcrtmpJPiNJmnkKJUZ7EuPWvH_mcpKMa7EBG2xwYmWFrYC5BQ7OpZf4Lm1Hx9NOoTp15k8Qs9yEFEu_4UhbAn6Y9prZt2DxNCpUlpG3CItoFOnhjX-TUcywF3oMMmkoRLT6qNTzeRgWmNfNOBZgxJ_I6WtKnAQV9yH_T2VE6j0Co1b5uRfVX7gz6HipxsbflJ1vt9hrsSe8PS4BqIaA",
    status: "SignalR Live Stream: Connected",
    accent: "secondary",
  },
  {
    category: "Supply Chain & Logistics",
    meta: "// Multi-tenant",
    title: "LogiTrack // Supply Chain Inventory Orchestrator",
    description:
      "Multi-tenant warehouse management system tracking 2M+ SKU inventory shifts across 14 regional fulfillment centers with automated replenishment scheduling and fleet dispatching.",
    features: [
      "Optimistic concurrency controls for SKU safety",
      "High-speed LINQ aggregations over indexed sets",
      "Automated background workers with Quartz.NET",
      "Comprehensive audit logging & event capture",
    ],
    tags: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "Tailwind CSS",
      "Docker",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOj8tov3qK3F08ugZHIm-NigT14FOpqSBUJc5JlrYmB9DRNxc9zEZ0ZUl_DaFwLOGQ6swqFXxVFPJLhFwAVcxujOdK-hpVxDMdaHPhUE-yK29zQ0DSK2UeN2o-uGG7vD-LnYSIuS_Wy7f9lEfWW5RsbdAlFt4y6wNQxPBtI1S_S6uTcaA8o6gnqyJF0R7GfBDfRGueerVnQgzoo2wc6IYF56EnMBhuhVRVuQ32C8bFZxKa2qsBWrH1lA",
    status: "Active SKUs: 2,148,090",
    accent: "primary",
  },
];

export const skills = [
  [
    "terminal",
    "Languages",
    "primary",
    ["C# (.NET 8/9)", "TypeScript", "JavaScript (ES6+)", "SQL / T-SQL"],
  ],
  [
    "dns",
    "Backend & API",
    "secondary",
    [
      "ASP.NET Core",
      "RESTful Web APIs",
      "Entity Framework Core",
      "Minimal APIs",
      "SignalR WebSockets",
    ],
  ],
  [
    "devices",
    "Frontend",
    "tertiary",
    ["React", "Vite", "Next.js", "Tailwind CSS", "HTML5 & CSS3"],
  ],
  [
    "database",
    "Database & Caching",
    "primary",
    [
      "Microsoft SQL Server",
      "PostgreSQL",
      "Redis Distributed Cache",
      "T-SQL Optimization",
    ],
  ],
  [
    "build",
    "Tools & DevOps",
    "secondary",
    [
      "Git & GitHub",
      "GitHub Actions",
      "Docker Containers",
      "Azure DevOps",
      "Postman",
      "IIS Web Server",
    ],
  ],
  [
    "architecture",
    "Architecture & Core",
    "tertiary",
    [
      "Clean Architecture",
      "CQRS & MediatR",
      "SOLID Principles",
      "LINQ Query Optimization",
      "Dependency Injection",
      "JWT & OAuth2",
    ],
  ],
];

export const experience = [
  {
    role: "Senior Full-Stack .NET Engineer",
    date: "2022 — Present",
    company: "TechLogix Solutions",
    color: "primary",
    bullets: [
      "Led comprehensive architectural migration of legacy ASP.NET MVC monolithic backends to decoupled ASP.NET Core Web APIs and modular frontends.",
      "Established Clean Architecture paradigms, code review standards, and automated unit testing suites adopted across a squad of 6 engineers.",
      "Decreased mission-critical API response latencies by 42% through structured query optimization and Redis memory caching.",
      "Designed automated CI/CD deployment pipelines on Azure with zero downtime rollouts and robust rollback hooks.",
    ],
    tags: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "React", "Docker"],
  },
  {
    role: ".NET Backend Developer",
    date: "2020 — 2022",
    company: "Apex Financial Systems",
    color: "secondary",
    bullets: [
      "Implemented hardened, high-throughput REST APIs secured with JWT auth, managing payment feeds exceeding 500k+ daily transactions.",
      "Partnered directly with DBAs to optimize complex EF Core LINQ queries, indexes, and high-frequency transactions with Dapper.",
      "Engineered zero-downtime database schema migrations and data sanitization routines across production nodes.",
    ],
    tags: ["C#", "Web API", "SQL Server", "Redis", "Git"],
  },
  {
    role: "Full-Stack .NET Apprenticeship & Training",
    date: "2019 — 2020",
    company: "Enterprise Software Institute",
    color: "tertiary",
    description:
      "Intensive, project-driven immersive training focusing on object-oriented programming in C#, relational schema modeling, Clean Code practices, and modern client-side architectures.",
  },
];

export const repositories = [
  [
    "DotNet-CleanArchitecture-Boilerplate",
    "Production-ready enterprise starter template implementing Clean Architecture, MediatR, FluentValidation, and EF Core multitenancy.",
    "C# 89%",
    "56",
    "14",
    "terminal",
  ],
  [
    "FastLinq-Extensions",
    "Zero-allocation extension methods for high-frequency LINQ queries and memory-conscious struct enumerations in .NET 8.",
    "C# 98%",
    "29",
    "7",
    "speed",
  ],
];
