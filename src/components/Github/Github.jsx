import { profile } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
export default function Github() {
  return (
    <section id="github" className="py-space-2xl">
      <div className="card rounded-2xl p-space-lg md:p-space-xl">
        <div className="mb-space-lg flex flex-col justify-between gap-space-sm sm:flex-row sm:items-center">
          <SectionHeading
            eyebrow="CODE CADENCE"
            title="GitHub Profile"
            className="mb-0"
          />
          <a
            className="inline-flex items-center gap-1 font-body text-label-md font-semibold text-primary hover:text-secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub <Icon className="text-body-sm">north_east</Icon>
          </a>
        </div>
        <div className="rounded-xl bg-surface-container-low p-space-lg">
          <p className="font-body text-body-md text-on-surface-variant">
            Explore Mohamed Abdeltawab&apos;s projects and code on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}
