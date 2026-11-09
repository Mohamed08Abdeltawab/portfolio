import { experience } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";

export default function Experience() {
  return (
    <section id="experience" className="py-space-2xl">
      <SectionHeading
        index="SYS.06"
        eyebrow="TRAINING & INTERNSHIPS"
        title="Professional Training & Engineering Tracks"
        description="Intensive software development programs across DEPI, Programming Advices, and the Information Technology Institute (ITI)."
      />

      <div className="grid grid-cols-1 gap-space-md lg:grid-cols-2">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="card stagger-item flex flex-col justify-between gap-space-md p-space-lg md:p-space-xl"
            style={{ "--stagger-delay": `${index * 80}ms` }}
          >
            <div className="flex flex-col gap-space-sm">
              {/* Top Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-highest pb-3">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-bold text-primary">
                    TRK // 0{index + 1}
                  </span>
                  <span className="font-mono text-label-sm font-semibold text-on-surface">
                    {item.company}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-surface-container-highest bg-surface-container-low px-2.5 py-1 font-mono text-[11px] font-medium text-on-surface-variant">
                  <Icon className="text-[13px] text-primary">schedule</Icon>
                  {item.date}
                </span>
              </div>

              {/* Role & Organization */}
              <div>
                <h3 className="font-headline text-headline-sm text-on-surface md:text-[21px]">
                  {item.role}
                </h3>
                {item.fullName && (
                  <p className="mt-0.5 font-mono text-[12px] text-primary">
                    {item.fullName}
                  </p>
                )}
              </div>

              {/* Description / Bullets */}
              {item.bullets ? (
                <ul className="space-y-2 font-body text-body-md leading-relaxed text-on-surface-variant">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Icon className="mt-1 text-[16px] text-tertiary">
                        arrow_right_alt
                      </Icon>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              )}
            </div>

            {item.tags && (
              <div className="flex flex-wrap gap-1.5 border-t border-surface-container-highest pt-space-sm">
                {item.tags.map((tag) => (
                  <TechBadge key={tag}>{tag}</TechBadge>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
