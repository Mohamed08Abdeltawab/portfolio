import { certificates } from "../../data/portfolio";
import { Icon } from "../shared/Icon";

export default function Achievements() {
  return (
    <div id="achievements" className="flex flex-col gap-space-md lg:col-span-6">
      <div className="section-heading mb-0">
        <span className="section-kicker">// CERTIFICATES</span>
        <h2 className="font-headline text-headline-md">Certificates</h2>
      </div>
      <div className="grid h-full grid-cols-1 gap-space-sm sm:grid-cols-2">
        {certificates.map(([icon, badge, title, subtitle, color]) => (
          <article
            key={title}
            className="card flex flex-col justify-between p-space-md"
          >
            <div className="flex items-start justify-between">
              <Icon className={`text-${color} text-headline-sm`}>{icon}</Icon>
              <span className="rounded bg-surface-container px-2 py-0.5 font-body text-[11px] font-bold">
                {badge}
              </span>
            </div>
            <div className="mt-space-sm">
              <h3 className="font-body text-label-md font-bold">{title}</h3>
              <p className="font-body text-body-sm text-on-surface-variant">
                {subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
