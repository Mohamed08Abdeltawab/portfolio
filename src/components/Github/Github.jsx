import { repositories } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
export default function Github() {
  return (
    <section id="github" className="py-space-2xl">
      <div className="card rounded-2xl p-space-lg md:p-space-xl">
        <div className="mb-space-lg flex flex-col justify-between gap-space-sm sm:flex-row sm:items-center">
          <SectionHeading
            eyebrow="CODE CADENCE"
            title="Open Source & GitHub Contributions"
            className="mb-0"
          />
          <div className="flex items-center gap-space-md">
            <Stat value="450+" label="Annual Commits" />
            <i className="h-8 w-px bg-surface-container-highest" />
            <Stat value="18" label="Repositories" />
            <i className="h-8 w-px bg-surface-container-highest" />
            <Stat value="85+" label="Stars" accent />
          </div>
        </div>
        <div className="mb-space-lg overflow-x-auto pb-space-sm">
          <ContributionChart />
        </div>
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
          {repositories.map(
            ([name, description, language, stars, forks, icon]) => (
              <article
                key={name}
                className="rounded-xl bg-surface-container-low p-space-md transition-colors hover:bg-surface-container"
              >
                <div className="mb-space-xs flex items-center justify-between">
                  <h3 className="font-mono text-headline-sm font-bold">
                    {name}
                  </h3>
                  <Icon className="text-primary">{icon}</Icon>
                </div>
                <p className="mb-space-sm font-body text-body-sm text-on-surface-variant">
                  {description}
                </p>
                <div className="flex items-center gap-space-md font-body text-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-container" />
                    {language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon className="text-body-sm">star</Icon>
                    {stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon className="text-body-sm">fork_right</Icon>
                    {forks}
                  </span>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
function Stat({ value, label, accent }) {
  return (
    <div className="text-right">
      <strong
        className={`block font-headline text-headline-sm ${accent ? "text-primary" : ""}`}
      >
        {value}
      </strong>
      <span className="font-body text-label-sm text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}
function ContributionChart() {
  return (
    <svg
      className="h-24 min-w-[680px] w-full"
      viewBox="0 0 680 90"
      role="img"
      aria-label="Static visualization of GitHub contributions"
    >
      <defs>
        <pattern id="grid" height="16" patternUnits="userSpaceOnUse" width="16">
          <rect fill="#EDF2F7" height="12" rx="3" width="12" />
        </pattern>
      </defs>
      <rect fill="url(#grid)" height="90" width="680" />
      {Array.from({ length: 42 }, (_, i) => (
        <rect
          key={i}
          fill={["#67fcbc", "#00885d", "#00d2ff", "#44dfa1", "#1a73e8"][i % 5]}
          height="12"
          rx="3"
          width="12"
          x={i * 16}
          y={(i % 4) * 16}
        />
      ))}
    </svg>
  );
}
