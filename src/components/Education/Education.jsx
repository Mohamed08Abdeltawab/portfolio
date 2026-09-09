import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";
import Achievements from "../Achievements/Achievements";
import { education, languages } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-space-2xl">
      <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
        <div className="flex flex-col gap-space-md lg:col-span-6">
          <SectionHeading
            eyebrow="EDUCATION"
            title="Education"
            className="mb-0"
          />
          <article className="card flex h-full flex-col justify-between gap-space-sm p-space-lg">
            <div>
              <div className="mb-space-xs flex items-center justify-between gap-space-sm">
                <h3 className="font-headline text-headline-sm">
                  {education.degree}
                </h3>
                <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-body text-label-sm font-semibold text-secondary">
                  {education.date}
                </span>
              </div>
              <p className="font-body text-body-md font-medium text-primary">
                {education.institution}
              </p>
              <p className="mt-space-sm font-body text-body-sm text-on-surface-variant">
                {education.faculty}
              </p>
            </div>
            <div className="pt-space-sm">
              <span className="mb-2 block font-body text-label-sm uppercase tracking-wider text-outline">
                Languages:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[...languages].map((item) => (
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            </div>
          </article>
        </div>
        <Achievements />
      </div>
    </section>
  );
}
