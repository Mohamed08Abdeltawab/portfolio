import { profile } from "../../data/portfolio";
import githubImage from "../../../Github.png";
import { SectionHeading } from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
export default function Github() {
  return (
    <section id="github" className="py-space-2xl">
      <div className="card scratch-card rounded-2xl p-space-lg md:p-space-xl">
        <div className="grid grid-cols-[minmax(0,1fr)_120px] items-center gap-space-sm">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="CODE CADENCE"
              title="GitHub Profile"
              className="mb-space-md [&>h2]:text-headline-sm"
            />
            <div className="rounded-xl bg-surface-container-low p-space-md">
              <p className="font-body text-body-sm text-on-surface-variant">
                Explore Mohamed Abdeltawab&apos;s projects and code on GitHub.
              </p>
            </div>
          </div>
          <div className="flex w-[120px] flex-col items-center gap-space-xs">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Mohamed Abdeltawab's GitHub profile"
            >
              <img
                className="h-20 w-20 rounded-full object-cover transition-transform hover:scale-105"
                src={githubImage}
                alt="GitHub"
              />
            </a>
            <a
              className="inline-flex whitespace-nowrap items-center gap-1 font-body text-label-sm font-semibold text-primary hover:text-secondary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub <Icon className="text-body-sm">north_east</Icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
