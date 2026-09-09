import { skills } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { TechBadge } from "../shared/TechBadge";
export default function Skills() {
  return (
    <section id="skills" className="py-space-2xl">
      <SectionHeading
        eyebrow="SKILLS"
        title="Skills & Technologies"
        description="Technologies and software engineering foundations listed in the CV."
      />
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([icon, title, color, tags], index) => (
          <article
            key={title}
            className="card scratch-card stagger-item p-space-lg transition-shadow hover:shadow-md"
            style={{
              "--stagger-delay": `${index * 80}ms`,
              "--card-accent":
                color === "primary"
                  ? "#1a73e8"
                  : color === "secondary"
                    ? "#00d2ff"
                    : "#5ff5b5",
            }}
          >
            <div
              className={`mb-space-sm flex items-center gap-space-xs text-${color}`}
            >
              <Icon>{icon}</Icon>
              <h3 className="font-headline text-headline-sm text-on-surface">
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, tagIndex) => (
                <span
                  key={tag}
                  className="stagger-item"
                  style={{
                    "--stagger-delay": `${index * 80 + tagIndex * 35 + 120}ms`,
                  }}
                >
                  <TechBadge>{tag}</TechBadge>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
