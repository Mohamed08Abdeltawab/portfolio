import { certificates } from "../../data/portfolio";
import { Icon } from "../shared/Icon";

export default function Achievements() {
  return (
    <div id="achievements" className="grid grid-cols-1 gap-space-md sm:grid-cols-2 lg:col-span-7">
      {certificates.map(
        ([icon, badge, title, subtitle, , href, image, summary], idx) => (
          <article
            key={title}
            className="card flex flex-col justify-between gap-space-md p-space-lg"
          >
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b border-surface-container-highest pb-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                  <Icon className="text-[16px]">{icon}</Icon>
                  CERT // 0{idx + 1}
                </span>
                <a
                  className="inline-flex items-center gap-1 rounded-md border border-surface-container-highest bg-surface-container-low px-2.5 py-1 font-mono text-[11px] font-semibold text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{badge}</span>
                  <Icon className="text-[13px]">north_east</Icon>
                </a>
              </div>

              <a
                className="group relative flex h-36 items-center justify-center overflow-hidden rounded-xl border border-surface-container-highest bg-surface-container-low/70 p-4"
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${title} certificate`}
              >
                <img
                  className="h-24 w-24 shrink-0 rounded-2xl object-contain shadow-sm transition-transform duration-300 group-hover:scale-105"
                  src={image}
                  alt={`${title} certificate logo`}
                />
              </a>

              <div>
                <span className="font-mono text-[11.5px] font-medium text-primary">
                  {subtitle}
                </span>
                <h3 className="mt-1 font-headline text-headline-sm text-on-surface">
                  {title}
                </h3>
                {summary && (
                  <p className="mt-2 font-body text-body-sm leading-relaxed text-on-surface-variant">
                    {summary}
                  </p>
                )}
              </div>
            </div>

            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between rounded-xl border border-surface-container-highest bg-surface-container-low/60 px-3.5 py-2.5 font-mono text-[11.5px] font-semibold text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span>Inspect Credential on Google Drive</span>
              <Icon className="text-[15px]">open_in_new</Icon>
            </a>
          </article>
        ),
      )}
    </div>
  );
}
