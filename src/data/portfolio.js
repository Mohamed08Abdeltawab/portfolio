import profileImage from "../../screen.png";
import programmingAdvicesImage from "../../Programming Advices.jpg";
import itiImage from "../../ITI.jpg";

export { profileImage };

export const navItems = [
  ["About", "about"],
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
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamed-abdeltawab-bb26aa316",
    icon: "share",
  },
  { label: "Email", href: "mailto:mohamedzidan0999@gmail.com", icon: "mail" },
];

export const metrics = [
  ["2023", "University Started"],
  ["4", "Projects"],
  ["4", "Training Programs"],
  ["2", "Certificates"],
];

export const profile = {
  name: "Mohamed Abdeltawab",
  title: "Back-end .NET Developer",
  email: "mohamedzidan0999@gmail.com",
  phone: "+201065712366",
  location: "Egypt",
  github: "https://github.com/Mohamed08Abdeltawab",
  linkedin: "https://linkedin.com/in/mohamed-abdeltawab-bb26aa316",
  summary:
    "Junior .NET Backend Developer building RESTful APIs and database-driven applications with C# and ASP.NET Core.",
};

export const about = {
  heading: "Building reliable .NET backend applications.",
  paragraphs: [
    "Junior .NET Backend Developer with hands-on experience building RESTful APIs and database-driven applications using C# and ASP.NET Core.",
    "Experienced with Entity Framework Core, SQL Server, ADO.NET, LINQ, and ASP.NET MVC, with a strong foundation in OOP, SOLID principles, and clean code.",
  ],
  highlights: ["OOP", "SOLID Principles", "Clean Code"],
};

export const projects = [
  {
    category: "ASP.NET Core Web API",
    meta: "// July 2026",
    title: "CRUD Application",
    github: "https://github.com/Mohamed08Abdeltawab/TrainingCenterWebAPI",
    description:
      "Developed a RESTful Web API implementing CRUD operations for a database-driven application.",
    features: [
      "RESTful Web API",
      "Database-driven application",
      "Entity Framework Core and LINQ",
      "SQL Server data access",
    ],
    tags: ["C#", "ASP.NET Core", "Entity Framework Core", "LINQ", "SQL Server"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIu5PuexebZ9KecJuMkXQ_WCsU0XVkguHzkGOBZEwpvQwOPL8paF9nrIv8YF6oNWTv-Yz5sDjggBL8YdQy2JcKEfB5pTezcj9_idvzsdBIw_yVmQatFX2P_O6nZt4Whd32LVm-nLA-IhEQCw8NIddQ0CR1a6Lb3fqicaD7KYdgc-8C96kmHyLBKcOKJ_8tstjSH0M6AFjHh0p0Sh6ywcVuGcn1MDDtG3opvBqTkcZ-6UJGjftb2lKGQ",
    status: "July 2026",
    accent: "primary",
  },
  {
    category: "Windows Forms",
    meta: "// April — May 2026",
    title: "Cashier System (POS)",
    github: "https://github.com/Mohamed08Abdeltawab/Awlad-Ali-Cashier",
    description:
      "Developed a Windows Forms POS application for managing restaurant sales, products, customers, cashier sessions, and administrative reports.",
    features: [
      "Restaurant sales management",
      "Products and customer management",
      "Cashier sessions",
      "Administrative reports",
    ],
    tags: [
      "C#",
      "Windows Forms",
      ".NET Framework 4.8",
      "SQLite",
      "System.Data.SQLite",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIO_MM4zCVt52EuHkW-u8Pny90DKv9UjIOGtQQcrtmpJPiNJmnkKJUZ7EuPWvH_mcpKMa7EBG2xwYmWFrYC5BQ7OpZf4Lm1Hx9NOoTp15k8Qs9yEFEu_4UhbAn6Y9prZt2DxNCpUlpG3CItoFOnhjX-TUcywF3oMMmkoRLT6qNTzeRgWmNfNOBZgxJ_I6WtKnAQV9yH_T2VE6j0Co1b5uRfVX7gz6HipxsbflJ1vt9hrsSe8PS4BqIaA",
    status: "April — May 2026",
    accent: "secondary",
  },
  {
    category: "Desktop Application",
    meta: "// February — April 2026",
    title: "Clinic Management System",
    github:
      "https://github.com/Mohamed08Abdeltawab/Clinic-System-with-Windows-Forms",
    description:
      "Developed a desktop clinic management system for managing patients, doctors, appointments, prescriptions, medical services, and billing.",
    features: [
      "Patients and doctors",
      "Appointments and prescriptions",
      "Medical services",
      "Billing management",
    ],
    tags: [
      "C#",
      "Windows Forms",
      ".NET Framework 4.8",
      "SQL Server",
      "ADO.NET",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOj8tov3qK3F08ugZHIm-NigT14FOpqSBUJc5JlrYmB9DRNxc9zEZ0ZUl_DaFwLOGQ6swqFXxVFPJLhFwAVcxujOdK-hpVxDMdaHPhUE-yK29zQ0DSK2UeN2o-uGG7vD-LnYSIuS_Wy7f9lEfWW5RsbdAlFt4y6wNQxPBtI1S_S6uTcaA8o6gnqyJF0R7GfBDfRGueerVnQgzoo2wc6IYF56EnMBhuhVRVuQ32C8bFZxKa2qsBWrH1lA",
    status: "February — April 2026",
    accent: "primary",
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
    "Link",
    "Programming & Software Development Roadmap",
    "Programming Advices · July 2026",
    "primary",
    "https://drive.google.com/drive/folders/1O4to7A5zC-EiDi4rkkx2MIdMhUqjkXgX",
    programmingAdvicesImage,
  ],
  [
    "verified",
    "Link",
    ".NET Web Development",
    "ITI · September 2025",
    "secondary",
    "https://drive.google.com/file/d/1kYvor8jpHLA-Qu9Az5tAjkUoK49-kc5p/view",
    itiImage,
  ],
];

export const education = {
  degree: "B.Sc. of Computer Science",
  institution: "Fayoum University",
  faculty: "Faculty of Computers and Artificial Intelligence (FCAI)",
  date: "October 2023 — Present",
};

export const languages = ["Arabic — Native", "English — Proficient"];
