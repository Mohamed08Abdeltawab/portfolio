import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";
import Achievements from "../Achievements/Achievements";

export default function Education() {
  return (
    <section id="education" className="py-space-2xl">
      <div className="grid grid-cols-1 gap-space-xl lg:grid-cols-12">
        <div className="flex flex-col gap-space-md lg:col-span-6">
          <SectionHeading
            eyebrow="ACADEMICS"
            title="Education"
            className="mb-0"
          />
          <article className="card flex h-full flex-col justify-between gap-space-sm p-space-lg">
            <div>
              <div className="mb-space-xs flex items-center justify-between gap-space-sm">
                <h3 className="font-headline text-headline-sm">
                  B.S. in Computer Science
                </h3>
                <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-body text-label-sm font-semibold text-secondary">
                  Honors
                </span>
              </div>
              <p className="font-body text-body-md font-medium text-primary">
                State University Faculty of Engineering &amp; Informatics
              </p>
              <p className="mt-space-sm font-body text-body-sm text-on-surface-variant">
                Rigorous four-year curriculum focused on theoretical computer
                science foundations, systems programming, algorithmic
                complexity, and scalable network architectures.
              </p>
            </div>
            <div className="pt-space-sm">
              <span className="mb-2 block font-body text-label-sm uppercase tracking-wider text-outline">
                Key Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures & Algorithms",
                  "Distributed Systems",
                  "DBMS & Query Optimization",
                  "Computer Networks",
                ].map((item) => (
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
