import { education, languages } from "../../data/portfolio";
import Achievements from "../Achievements/Achievements";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";

export default function Education() {
  return (
    <section id="education" className="py-space-2xl">
      <SectionHeading
        index="SYS.07"
        eyebrow="ACADEMIC & CREDENTIALS"
        title="Education & Verified Certificates"
        description="Computer Science academic foundation at Fayoum University paired with verified software engineering credentials."
      />

      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
        {/* Left: Academic Degree Card */}
        <article className="card flex flex-col justify-between gap-space-lg p-space-lg md:p-space-xl lg:col-span-5">
          <div className="flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-container-highest pb-3">
              <span className="inline-flex items-center gap-1.5 font-mono text-label-sm font-semibold text-primary">
                <Icon className="text-[17px]">school</Icon>
                ACADEMIC DEGREE
              </span>
              <span className="rounded-md border border-surface-container-highest bg-surface-container-low px-2.5 py-1 font-mono text-[11px] font-semibold text-on-surface-variant">
                {education.date}
              </span>
            </div>

            <div>
              <h3 className="font-headline text-headline-md text-on-surface">
                {education.degree}
              </h3>
              <p className="mt-1 font-headline text-body-lg font-semibold text-primary">
                {education.institution}
              </p>
              <p className="mt-1 font-body text-body-md text-on-surface-variant">
                {education.faculty}
              </p>
            </div>

            {education.focusAreas && (
              <div className="rounded-xl border border-surface-container-highest bg-surface-container-low/60 p-4">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-outline">
                  Core Computer Science Focus
                </span>
                <ul className="grid grid-cols-1 gap-1.5">
                  {education.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 font-body text-body-sm text-on-surface"
                    >
                      <Icon className="text-[15px] text-tertiary">
                        check_circle
                      </Icon>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="border-t border-surface-container-highest pt-space-md">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-outline">
              Spoken Languages
            </span>
            <div className="flex flex-wrap gap-2">
              {languages.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </div>
        </article>

        {/* Right: Verified Certificates */}
        <Achievements />
      </div>
    </section>
  );
}
