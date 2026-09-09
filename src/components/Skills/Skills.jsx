import { skills } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { TechBadge } from "../shared/TechBadge";
export default function Skills() {
  return (
    <section id="skills" className="py-space-2xl">
      <SectionHeading
        eyebrow="CAPABILITIES"
        title="Skills & Technical Ecosystem"
        description="A deeply curated stack centered around the Microsoft .NET universe, cloud primitives, and modern web application ergonomics."
      />
      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-3">
        {skills.map(([icon, title, color, tags]) => (
          <article
            key={title}
            className="card p-space-lg transition-shadow hover:shadow-md"
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
              {tags.map((tag) => (
                <TechBadge key={tag}>{tag}</TechBadge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
