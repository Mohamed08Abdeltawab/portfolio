import { about, education, languages } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-space-2xl">
      <SectionHeading
        index="SYS.02"
        eyebrow="ENGINEERING PROFILE"
        title={about.heading}
        description="Combining strong computer science fundamentals with practical .NET backend architecture, database design, and clean code discipline."
      />

      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
        {/* Left Narrative Card */}
        <div className="card flex flex-col justify-between gap-space-lg p-space-lg md:p-space-xl lg:col-span-5">
          <div className="flex flex-col gap-space-md">
            <div className="inline-flex w-max items-center gap-2 rounded-lg border border-surface-container-highest bg-surface-container-low px-3 py-1.5 font-mono text-label-sm text-primary">
              <Icon className="text-[16px]">terminal</Icon>
              <span>Architecture &amp; Core Foundations</span>
            </div>

            <div className="flex flex-col gap-space-md font-body text-body-lg leading-relaxed text-on-surface-variant">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {about.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-tertiary/30 bg-tertiary/10 px-3 py-1.5 font-mono text-label-sm font-semibold text-tertiary"
                >
                  <Icon className="text-[15px]">check_circle</Icon>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 border-t border-surface-container-highest pt-space-md sm:grid-cols-2">
            <div className="rounded-xl bg-surface-container-low/70 p-3.5">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-outline">
                Academic Degree
              </span>
              <strong className="mt-0.5 block font-headline text-body-md text-on-surface">
                {education.degree}
              </strong>
              <span className="font-body text-body-sm text-on-surface-variant">
                {education.institution} ({education.date})
              </span>
            </div>
            <div className="rounded-xl bg-surface-container-low/70 p-3.5">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-outline">
                Communication
              </span>
              <div className="mt-1 flex flex-col gap-0.5">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="font-body text-body-sm font-medium text-on-surface"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Architectural Pillars Grid */}
        <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:col-span-7">
          {about.pillars.map((pillar) => (
            <article
              key={pillar.code}
              className="card flex flex-col justify-between gap-space-md p-space-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-container-highest bg-surface-container-low text-primary">
                  <Icon className="text-[20px]">{pillar.icon}</Icon>
                </span>
                <span className="font-mono text-label-sm font-bold text-outline">
                  PILLAR // {pillar.code}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline text-headline-sm text-on-surface">
                  {pillar.title}
                </h3>
                <p className="font-body text-body-sm leading-relaxed text-on-surface-variant">
                  {pillar.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
