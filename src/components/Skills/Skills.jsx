import { useState } from "react";
import { skills } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";

const SKILL_CONTEXT = {
  "C#": "Primary backend & desktop language across TrainingCenterWebAPI, Awlad Ali POS, Clinic System, and DVLD.",
  "ASP.NET Core":
    "Used to build RESTful HTTP pipelines, JWT authentication, middleware, and DI in TrainingCenterWebAPI.",
  "Entity Framework":
    "Code-First migrations, LINQ query composition, and Unit of Work persistence on SQL Server.",
  "SQL Server":
    "Relational database engine for TrainingCenterWebAPI, Clinic Management System, and DVLD.",
  "T-SQL":
    "Writing complex joins, views, constraints, and parameterized queries for data-intensive workflows.",
  "ADO.NET":
    "Low-level, high-speed parameterized database access in 3-Tier Windows Forms enterprise systems.",
  SQLite:
    "Embedded transactional relational storage powering the Awlad Ali Restaurant POS system.",
  "Three-Tier Architecture":
    "Strict separation of Presentation (UI), Business Logic (Domain), and Data Access layers.",
  "SOLID Principles":
    "Applied across service abstractions, repository interfaces, and clean OOP domain models.",
  React:
    "Modern component-based frontend development trained at ITI & DEPI Full-Stack tracks.",
};

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [activeSkill, setActiveSkill] = useState("ASP.NET Core");

  const filteredCategories =
    selectedDomain === "All"
      ? skills
      : skills.filter(([, title]) => title === selectedDomain);

  return (
    <section id="skills" className="py-space-2xl">
      <SectionHeading
        index="SYS.05"
        eyebrow="TECHNICAL ARSENAL"
        title="Skills & Engineering Stack"
        description="Languages, backend frameworks, database engines, and architectural foundations applied across production projects and intensive training tracks."
        rightSlot={
          <div className="flex flex-wrap gap-1 rounded-xl border border-surface-container-highest bg-surface-container-low p-1">
            {["All", ...skills.map(([, title]) => title)].map((domain) => {
              const isSelected = selectedDomain === domain;
              return (
                <button
                  key={domain}
                  type="button"
                  onClick={() => setSelectedDomain(domain)}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {domain}
                </button>
              );
            })}
          </div>
        }
      />

      {/* Interactive Skill Context Bar */}
      <div className="mb-space-lg flex flex-col justify-between gap-2 rounded-xl border border-surface-container-highest bg-surface-container-low/75 px-space-lg py-3.5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Icon className="text-[16px]">memory</Icon>
          </span>
          <div className="font-mono text-body-sm">
            <span className="font-bold text-primary">{activeSkill}</span>
            <span className="mx-2 text-outline">//</span>
            <span className="font-body text-body-sm text-on-surface-variant">
              {SKILL_CONTEXT[activeSkill] ||
                `Applied across Mohamed Abdeltawab's .NET engineering projects and technical training.`}
            </span>
          </div>
        </div>
        <span className="shrink-0 font-mono text-[11px] text-outline">
          Click any technology to inspect
        </span>
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map(([icon, title, , tags], index) => (
          <article
            key={title}
            className="card stagger-item flex flex-col justify-between gap-space-md p-space-lg"
            style={{ "--stagger-delay": `${index * 65}ms` }}
          >
            <div>
              <div className="mb-space-md flex items-center justify-between border-b border-surface-container-highest pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-container-highest bg-surface-container-low text-primary">
                    <Icon className="text-[19px]">{icon}</Icon>
                  </span>
                  <h3 className="font-headline text-headline-sm text-on-surface">
                    {title}
                  </h3>
                </div>
                <span className="rounded bg-surface-container px-2 py-0.5 font-mono text-[11px] font-semibold text-on-surface-variant">
                  {tags.length} items
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                  const isHighlighted = activeSkill === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setActiveSkill(tag)}
                      className={`tech-badge cursor-pointer ${
                        isHighlighted
                          ? "!border-primary !bg-primary !text-white shadow-sm"
                          : ""
                      }`}
                    >
                      <span>{tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-surface-container-highest pt-2.5 font-mono text-[10.5px] text-outline">
              <span>DOMAIN // 0{index + 1}</span>
              <span>VERIFIED IN CV</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
