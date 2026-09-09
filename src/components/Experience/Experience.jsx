import { experience } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";
export default function Experience() {
  return (
    <section id="experience" className="py-space-2xl">
      <SectionHeading
        eyebrow="TRAINING & INTERNSHIPS"
        title="Training & Internships"
      />
      <div className="relative space-y-space-xl border-l-2 border-surface-container-highest pl-6 md:pl-8">
        {experience.map((item) => (
          <article key={item.role} className="relative">
            <span
              className={`absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-surface-container-lowest ring-4 ring-${item.color}`}
            >
              <span className={`h-2 w-2 rounded-full bg-${item.color}`} />
            </span>
            <div className="card p-space-lg">
              <div className="mb-space-xs flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <h3 className="font-headline text-headline-sm">{item.role}</h3>
                <span className="w-max rounded-full bg-surface-container px-3 py-1 font-body text-label-sm font-medium">
                  {item.date}
                </span>
              </div>
              <p className="mb-space-sm font-body text-body-md font-semibold text-secondary">
                {item.company}
              </p>
              {item.bullets ? (
                <ul className="mb-space-md list-disc space-y-space-xs pl-5 font-body text-body-md text-on-surface-variant">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-body-md text-on-surface-variant">
                  {item.description}
                </p>
              )}
              {item.tags && (
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag}>{tag}</TechBadge>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
