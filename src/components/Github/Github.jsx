import { githubRepositories, profile } from "../../data/portfolio";
import githubImage from "../../../Github.png";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";

export default function Github() {
  return (
    <section id="github" className="py-space-2xl">
      <SectionHeading
        index="SYS.08"
        eyebrow="CODE CADENCE & OPEN SOURCE"
        title="GitHub Repositories & Engineering Labs"
        description="Explore production applications, 3-Tier enterprise desktop systems, RESTful APIs, and software architecture implementations on GitHub."
        rightSlot={
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="primary-button !px-4 !py-2.5 !text-label-sm"
          >
            <img
              src={githubImage}
              alt="GitHub"
              className="h-4 w-4 rounded-full object-cover"
            />
            <span>@Mohamed08Abdeltawab</span>
            <Icon className="text-[15px]">north_east</Icon>
          </a>
        }
      />

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 lg:grid-cols-4">
        {githubRepositories.map((repo, idx) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="card stagger-item group flex flex-col justify-between gap-space-md p-space-lg transition-all hover:-translate-y-1"
            style={{ "--stagger-delay": `${idx * 50}ms` }}
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-primary">
                  <Icon className="text-[15px]">folder_code</Icon>
                  {repo.category}
                </span>
                <Icon className="text-[16px] text-outline transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">
                  north_east
                </Icon>
              </div>

              <h3 className="truncate font-mono text-body-md font-bold text-on-surface group-hover:text-primary">
                {repo.name}
              </h3>

              <p className="font-body text-body-sm leading-relaxed text-on-surface-variant">
                {repo.description}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 border-t border-surface-container-highest pt-3">
              <div className="flex flex-wrap gap-1">
                {repo.highlights.map((tag) => (
                  <TechBadge key={tag} className="!px-2 !py-0.5 !text-[10.5px]">
                    {tag}
                  </TechBadge>
                ))}
              </div>
              <div className="flex items-center justify-between font-mono text-[11px] text-outline">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-tertiary" />
                  {repo.language}
                </span>
                <span>Public Repo</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
