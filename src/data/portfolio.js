import profileImage from "../../screen.png";
import programmingAdvicesImage from "../../Programming Advices.jpg";
import itiImage from "../../ITI.jpg";

export { profileImage };

export const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "featured-projects"],
  ["Skills", "skills"],
  ["Training", "experience"],
  ["Education", "education"],
  ["Certificates", "achievements"],
  ["GitHub", "github"],
  ["Contact", "contact"],
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mohamed08Abdeltawab",
    icon: "code",
    handle: "@Mohamed08Abdeltawab",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-abdeltawab-bb26aa316",
    icon: "share",
    handle: "in/mohamed-abdeltawab",
  },
  {
    label: "Email",
    href: "mailto:mohamedzidan0999@gmail.com",
    icon: "mail",
    handle: "mohamedzidan0999@gmail.com",
  },
];

export const metrics = [
  ["2023", "University Started", "B.Sc. CS @ Fayoum University (FCAI)"],
  ["4", "Projects", "Production-Ready .NET & Database Systems"],
  ["4", "Training Programs", "DEPI, Programming Advices & ITI Tracks"],
  ["2", "Certificates", "Verified Software & .NET Credentials"],
];

export const profile = {
  name: "Mohamed Abdeltawab",
  title: "Back-end .NET Developer",
  roleSubtitle: "Back-End .NET & Full-Stack Software Engineer",
  email: "mohamedzidan0999@gmail.com",
  phone: "+201065712366",
  location: "Egypt",
  availability: "Available for Back-End & Full-Stack .NET Roles",
  github: "https://github.com/Mohamed08Abdeltawab",
  linkedin: "https://linkedin.com/in/mohamed-abdeltawab-bb26aa316",
  summary:
    "Junior .NET Backend Developer building RESTful APIs and database-driven applications with C# and ASP.NET Core.",
  extendedSummary:
    "Focused on clean 3-tier and modular architectures, relational database design with SQL Server & Entity Framework Core, and responsive full-stack experiences with React.",
};

export const about = {
  heading: "Building reliable .NET backend applications.",
  paragraphs: [
    "Junior .NET Backend Developer with hands-on experience building RESTful APIs and database-driven applications using C# and ASP.NET Core.",
    "Experienced with Entity Framework Core, SQL Server, ADO.NET, LINQ, and ASP.NET MVC, with a strong foundation in OOP, SOLID principles, and clean code.",
  ],
  highlights: ["OOP", "SOLID Principles", "Clean Code"],
  pillars: [
    {
      code: "01",
      title: "Relational Schema & Data Modeling",
      detail:
        "Designing normalized SQL Server & SQLite schemas with strict referential integrity, indexing, and transactional consistency.",
      icon: "database",
    },
    {
      code: "02",
      title: "SOLID & Three-Tier Architecture",
      detail:
        "Decoupling presentation, business domain rules, and data access layers using Repository, Unit of Work, and clean OOP patterns.",
      icon: "account_tree",
    },
    {
      code: "03",
      title: "Secure RESTful API Engineering",
      detail:
        "Building ASP.NET Core Web APIs with JWT authentication, Refresh Token rotation, Role-Based Access Control (RBAC), and DTO validation.",
      icon: "api",
    },
    {
      code: "04",
      title: "Full-Stack Client Integration",
      detail:
        "Connecting backend systems with responsive React.js web interfaces and rich Windows Forms desktop workflows.",
      icon: "devices",
    },
  ],
};

export const services = [
  {
    id: "backend-apis",
    index: "SRV // 01",
    icon: "dns",
    title: "RESTful API & Backend Development",
    summary:
      "Designing and building structured, maintainable HTTP APIs with C# and ASP.NET Core engineered for reliability and security.",
    deliverables: [
      "ASP.NET Core Web API & MVC endpoints",
      "JWT Bearer authentication & Role-Based Access Control",
      "DTO mapping with AutoMapper & request validation",
      "Global exception handling & Swagger/OpenAPI documentation",
    ],
    stack: ["C#", "ASP.NET Core", "Web API", "ASP.NET MVC", "RESTful APIs"],
  },
  {
    id: "database-engineering",
    index: "SRV // 02",
    icon: "database",
    title: "Database Design & Data Access Layers",
    summary:
      "Architecting relational databases and high-efficiency data access pipelines using both modern ORMs and low-level ADO.NET.",
    deliverables: [
      "Normalized ERD modeling & relational schema design",
      "Entity Framework Core migrations & complex LINQ queries",
      "Parameterized ADO.NET & T-SQL stored procedures",
      "Generic Repository & Unit of Work implementations",
    ],
    stack: ["SQL Server", "T-SQL", "Entity Framework Core", "LINQ", "ADO.NET", "SQLite"],
  },
  {
    id: "desktop-pos-systems",
    index: "SRV // 03",
    icon: "desktop_windows",
    title: "Enterprise Desktop & POS Applications",
    summary:
      "Developing complete multi-layered Windows Forms desktop systems for healthcare clinics, retail point-of-sale, and operations.",
    deliverables: [
      "Strict 3-Tier Architecture (UI, Business Logic, Data Access)",
      "Live cashier session tracking & transactional order commits",
      "Role-based staff permissions & audit workflows",
      "Thermal receipt printing & administrative reporting dashboards",
    ],
    stack: ["C#", "Windows Forms", ".NET Framework 4.8", "Three-Tier Architecture"],
  },
  {
    id: "fullstack-web",
    index: "SRV // 04",
    icon: "layers",
    title: "Full-Stack Web Interfaces",
    summary:
      "Creating modern, responsive client-side web applications in React.js and Tailwind CSS that integrate cleanly with .NET backends.",
    deliverables: [
      "Component-driven React.js user interfaces",
      "Responsive layouts across desktop, tablet, and mobile",
      "REST API state integration & form validation",
      "Semantic HTML5, modern CSS3, and accessible UI states",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
];

export const projects = [
  {
    id: "training-center-api",
    index: "PRJ // 01",
    category: "ASP.NET Core Web API",
    filterGroup: "Web API",
    meta: "// July 2026",
    title: "CRUD Application — Training Center Web API",
    shortTitle: "CRUD Application",
    subtitle: "Role-Based Training Center Management RESTful API",
    github: "https://github.com/Mohamed08Abdeltawab/TrainingCenterWebAPI",
    videoUrl:
      "https://raw.githubusercontent.com/Mohamed08Abdeltawab/TrainingCenterWebAPI/main/11.mp4",
    description:
      "Developed a RESTful Web API implementing CRUD operations for a database-driven application with JWT authentication, role-based access control (Admin, Instructor, Student), and Unit of Work data access.",
    architecture:
      "Controllers → Generic Repository & Unit of Work → EF Core DbContext → SQL Server",
    features: [
      "RESTful Web API with Swagger/OpenAPI",
      "JWT & Refresh Token authentication + RBAC",
      "Entity Framework Core, LINQ & AutoMapper DTOs",
      "SQL Server data access & security audit logging",
    ],
    endpoints: [
      "POST /api/Account/login — JWT & Refresh Token issuance",
      "GET /api/Courses — Public & filtered course catalog",
      "POST /api/Enrollments — Student course enrollment workflow",
      "PUT /api/Students/{id}/profile — Role-guarded student profile",
    ],
    tags: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "LINQ",
      "SQL Server",
      "JWT Auth",
      "AutoMapper",
    ],
    image: "/projects/api-swagger.jpg",
    gallery: [
      {
        src: "/projects/api-swagger.jpg",
        label: "POST /api/Courses & EF Core SQL Execution",
        caption:
          "Live side-by-side execution showing Swagger UI POST request alongside Kestrel & Entity Framework Core parameterized SQL logs.",
      },
      {
        src: "/projects/api-execution.jpg",
        label: "Role-Based Authorization Guard (403 / 200)",
        caption:
          "Role-based access control verifying JWT claims and protecting administrative DELETE endpoints with security audit logging.",
      },
    ],
    status: "July 2026",
    accent: "primary",
  },
  {
    id: "cashier-pos-system",
    index: "PRJ // 02",
    category: "Windows Forms",
    filterGroup: "Desktop & POS",
    meta: "// April — May 2026",
    title: "Cashier System (POS) — Awlad Ali Restaurant",
    shortTitle: "Cashier System (POS)",
    subtitle: "3-Tier Point-of-Sale, Shift Management & Receipt Engine",
    github: "https://github.com/Mohamed08Abdeltawab/Awlad-Ali-Cashier",
    videoUrl:
      "https://raw.githubusercontent.com/Mohamed08Abdeltawab/Awlad-Ali-Cashier/main/AAC%20V3.0.mp4",
    description:
      "Developed a Windows Forms POS application for managing restaurant sales, products, customers, cashier sessions, and administrative reports with transactional SQLite persistence.",
    architecture:
      "AwladAli (WinForms UI) → AwladAli_Business → AwladAli_Data (SQLite 3)",
    features: [
      "Restaurant sales, sizes (S/M/L/XL) & add-ons",
      "Products and customer delivery CRM",
      "Live cashier sessions with recovery timer",
      "Thermal receipt printing & admin analytics",
    ],
    endpoints: [
      "Session Engine — Live shift timer, sales total & crash recovery",
      "Order Transaction — Atomic header + line-item SQLite commit",
      "Delivery CRM — Instant phone/name search & delivery fee calc",
      "Admin Reports — Revenue analytics, top products & shift audits",
    ],
    tags: [
      "C#",
      "Windows Forms",
      ".NET Framework 4.8",
      "SQLite",
      "System.Data.SQLite",
      "Three-Tier Architecture",
    ],
    image: "/projects/pos-main.jpg",
    gallery: [
      {
        src: "/projects/pos-main.jpg",
        label: "Main Cashier POS Terminal",
        caption:
          "Active cashier shift interface showing categorized items, multi-size pricing (S/M/L/XL), add-on extras, and live session timer.",
      },
      {
        src: "/projects/pos-customers.jpg",
        label: "Customer Search & Delivery CRM",
        caption:
          "Customer lookup and delivery assignment dialog with instant filtering by phone number or customer name.",
      },
      {
        src: "/projects/pos-receipt.jpg",
        label: "Thermal Invoice Print Preview",
        caption:
          "Generated Arabic thermal order receipt displaying itemized quantities, sizes, delivery status, and customer details.",
      },
    ],
    status: "April — May 2026",
    accent: "secondary",
  },
  {
    id: "clinic-management-system",
    index: "PRJ // 03",
    category: "Desktop Application",
    filterGroup: "Desktop & POS",
    meta: "// February — April 2026",
    title: "Clinic Management System",
    shortTitle: "Clinic Management System",
    subtitle: "Layered Healthcare Operations, Appointments & Billing Suite",
    github:
      "https://github.com/Mohamed08Abdeltawab/Clinic-System-with-Windows-Forms",
    videoUrl:
      "https://raw.githubusercontent.com/Mohamed08Abdeltawab/Clinic-System-with-Windows-Forms/main/ClinicSystemProject_speed1.5.mp4",
    description:
      "Developed a desktop clinic management system for managing patients, doctors, appointments, prescriptions, medical services, and billing using a 3-tier architecture and SQL Server.",
    architecture:
      "Clinic (WinForms UI) → ClinicBusiness (Domain) → ClinicData (ADO.NET / SQL Server)",
    features: [
      "Patients, doctors & specialization tracking",
      "Appointments, visits & clinical prescriptions",
      "Role-based access (Admin, Doctor, Receptionist)",
      "Medical services & billing management",
    ],
    endpoints: [
      "RBAC Security — Role-gated workflows for Admin, Doctor & Receptionist",
      "Clinical Workflow — Appointment → Visit Record → Prescription → Bill",
      "Data Layer — Parameterized ADO.NET queries against SQL Server",
      "Relational Schema — Complete normalized ERD & backup restoration",
    ],
    tags: [
      "C#",
      "Windows Forms",
      ".NET Framework 4.8",
      "SQL Server",
      "ADO.NET",
      "Three-Tier Architecture",
    ],
    image: "/projects/clinic-appointments.jpg",
    gallery: [
      {
        src: "/projects/clinic-appointments.jpg",
        label: "Appointments Management Dashboard",
        caption:
          "Central clinic workspace displaying scheduled, follow-up, and completed patient appointments with doctor assignments and fees.",
      },
      {
        src: "/projects/clinic-booking.jpg",
        label: "Appointment Scheduling & Fee Engine",
        caption:
          "Multi-tab appointment booking screen calculating doctor consultation fees, appointment type fees, and working days.",
      },
      {
        src: "/projects/clinic-patients.jpg",
        label: "Patient & Person Registration",
        caption:
          "Layered person and patient registration modal with real-time validation and profile record linking.",
      },
      {
        src: "/projects/clinic-erd.png",
        label: "Database ERD Architecture",
        caption:
          "Complete Entity-Relationship Diagram modeling People, Users, Doctors, Patients, Appointments, Visits, Prescriptions, and Bills.",
      },
    ],
    status: "February — April 2026",
    accent: "primary",
  },
];

export const githubRepositories = [
  {
    name: "TrainingCenterWebAPI",
    category: "ASP.NET Core Web API",
    language: "C#",
    description:
      "RESTful API for managing courses, instructors, students, and enrollments with JWT auth, refresh tokens, RBAC, EF Core, and Unit of Work.",
    url: "https://github.com/Mohamed08Abdeltawab/TrainingCenterWebAPI",
    highlights: ["EF Core", "JWT & RBAC", "AutoMapper", "SQL Server"],
  },
  {
    name: "Awlad-Ali-Cashier",
    category: "3-Tier WinForms POS",
    language: "C#",
    description:
      "Restaurant Point-of-Sale system with live shift timers, session recovery, takeaway/delivery workflows, SQLite database, and receipt printing.",
    url: "https://github.com/Mohamed08Abdeltawab/Awlad-Ali-Cashier",
    highlights: ["WinForms", "SQLite", "3-Tier", "POS Reports"],
  },
  {
    name: "Clinic-System-with-Windows-Forms",
    category: "Healthcare Desktop ERP",
    language: "C#",
    description:
      "Layered clinic management application for patients, doctors, appointments, prescriptions, medical services, and billing on SQL Server.",
    url: "https://github.com/Mohamed08Abdeltawab/Clinic-System-with-Windows-Forms",
    highlights: ["ADO.NET", "SQL Server", "RBAC", "WinForms"],
  },
  {
    name: "Driving-License-Management-System",
    category: "3-Tier Government System",
    language: "C#",
    description:
      "Full DVLD system managing people, drivers, local & international license applications, vision/written/street tests, and detained licenses.",
    url: "https://github.com/Mohamed08Abdeltawab/Driving-License-Management-System",
    highlights: ["C#", ".NET 4.8", "ADO.NET", "SQL Server"],
  },
  {
    name: "TravelTracking",
    category: "Desktop CRM Application",
    language: "C#",
    description:
      "3-Tier travel agency client management system supporting passport validation, country & visa filtering, and GUID profile image storage.",
    url: "https://github.com/Mohamed08Abdeltawab/TravelTracking",
    highlights: ["C#", "WinForms", "SQLite", "3-Tier"],
  },
  {
    name: "Secure-Your-APIs",
    category: "API Security Patterns",
    language: "C#",
    description:
      "Implementation of JWT authentication, custom roles, claims-based authorization policies, and endpoint protection in ASP.NET Core.",
    url: "https://github.com/Mohamed08Abdeltawab/Secure-Your-APIs",
    highlights: ["ASP.NET Core", "JWT", "Roles & Policies"],
  },
  {
    name: "Solid-Principles",
    category: "Software Architecture",
    language: "C#",
    description:
      "Practical C# implementations and refactoring case studies for Single Responsibility, Open/Closed, Liskov, Interface Segregation, and DI.",
    url: "https://github.com/Mohamed08Abdeltawab/Solid-Principles",
    highlights: ["OOP", "SOLID", "Clean Code", "C#"],
  },
  {
    name: "Fundamentals-EF-Core-",
    category: "ORM & Data Access",
    language: "C#",
    description:
      "Deep-dive implementations of Entity Framework Core configurations, fluent API relationships, migrations, and LINQ query optimization.",
    url: "https://github.com/Mohamed08Abdeltawab/Fundamentals-EF-Core-",
    highlights: ["EF Core", "LINQ", "Migrations", "SQL Server"],
  },
];

export const skills = [
  ["terminal", "Languages", "primary", ["C#", "SQL", "T-SQL", "C++"]],
  [
    "dns",
    "Backend & API",
    "secondary",
    [
      "ASP.NET Core",
      "ASP.NET MVC",
      "Web API",
      "RESTful APIs",
      "Entity Framework",
      "ADO.NET",
    ],
  ],
  [
    "devices",
    "Frontend",
    "tertiary",
    ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  ],
  [
    "database",
    "Database & Caching",
    "primary",
    ["SQL Server", "SQLite", "PostgreSQL"],
  ],
  ["build", "Tools", "secondary", ["Git", "GitHub"]],
  [
    "architecture",
    "Architecture & Core",
    "tertiary",
    [
      "OOP",
      "Data Structures & Algorithms",
      "System Design",
      "Three-Tier Architecture",
      "SOLID Principles",
      "Clean Code",
    ],
  ],
];

export const experience = [
  {
    role: "Full-Stack .NET Web Developer",
    date: "July 2026 — Present",
    company: "DEPI",
    fullName: "Digital Egypt Pioneers Initiative (DEPI)",
    status: "Active Track",
    color: "primary",
    bullets: [
      "Full-Stack .NET Web Development training focused on C#, ASP.NET Core, Entity Framework Core, SQL Server, RESTful APIs, and React.js.",
    ],
    tags: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "RESTful APIs",
      "React.js",
    ],
  },
  {
    role: "Programming Advices — Software Development Training",
    date: "September 2024 — July 2026",
    company: "Programming Advices",
    fullName: "Programming Advices Roadmap (Dr. Mohammed Abu-Hadhoud)",
    status: "Completed Roadmap",
    color: "secondary",
    bullets: [
      "Programming training covering programming fundamentals, problem-solving, software development principles, SOLID principles, and clean code practices through practical exercises and projects.",
    ],
    tags: [
      "Programming Fundamentals",
      "Problem Solving",
      "SOLID",
      "Clean Code",
    ],
  },
  {
    role: "Web Development using React JS",
    date: "August 2026 — September 2026",
    company: "ITI",
    fullName: "Information Technology Institute (ITI)",
    status: "Completed",
    color: "tertiary",
    description:
      "Web Development training focused on React.js, JavaScript, HTML, CSS, and responsive web development.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Web Development",
    ],
  },
  {
    role: ".NET Web Development",
    date: "August 2025 — September 2025",
    company: "ITI",
    fullName: "Information Technology Institute (ITI)",
    status: "Completed",
    color: "primary",
    description:
      ".NET Web Development training focused on C#, ASP.NET Core, Entity Framework Core, SQL Server, and RESTful APIs.",
    tags: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "RESTful APIs",
    ],
  },
];

export const certificates = [
  [
    "school",
    "Verify Link",
    "Programming & Software Development Roadmap",
    "Programming Advices · July 2026",
    "primary",
    "https://drive.google.com/drive/folders/1O4to7A5zC-EiDi4rkkx2MIdMhUqjkXgX",
    programmingAdvicesImage,
    "Comprehensive multi-course foundation in algorithms, data structures, C#, OOP, database design, T-SQL, 3-tier desktop architecture, and SOLID principles.",
  ],
  [
    "verified",
    "Verify Certificate",
    ".NET Web Development",
    "ITI · September 2025",
    "secondary",
    "https://drive.google.com/file/d/1kYvor8jpHLA-Qu9Az5tAjkUoK49-kc5p/view",
    itiImage,
    "Intensive Information Technology Institute credential covering C#, ASP.NET Core, Entity Framework Core, SQL Server, and RESTful API development.",
  ],
];

export const education = {
  degree: "B.Sc. of Computer Science",
  institution: "Fayoum University",
  faculty: "Faculty of Computers and Artificial Intelligence (FCAI)",
  date: "October 2023 — Present",
  focusAreas: [
    "Object-Oriented Programming",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering & System Design",
  ],
};

export const languages = ["Arabic — Native", "English — Proficient"];
