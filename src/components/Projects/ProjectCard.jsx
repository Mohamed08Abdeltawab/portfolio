import { Icon } from "../shared/Icon";
import { TechBadge } from "../shared/TechBadge";
export default function ProjectCard({ project, index }) {
  return (
    <article className="card overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div
        className={`h-1.5 w-full bg-gradient-to-r ${index === 1 ? "from-secondary-container to-tertiary-fixed" : index === 2 ? "from-primary-container to-secondary-container" : "from-primary-container via-secondary-container to-tertiary-fixed"}`}
      />
      <div className="grid grid-cols-1 items-center gap-space-lg p-space-lg md:p-space-xl lg:grid-cols-12">
        <div className="flex flex-col gap-space-sm lg:col-span-7">
          <div className="flex items-center gap-space-xs">
            <span
              className={`rounded-full px-2.5 py-0.5 font-body text-label-sm font-bold ${project.accent === "secondary" ? "bg-tertiary-fixed text-on-tertiary-fixed-variant" : "bg-primary-fixed text-on-primary-fixed-variant"}`}
            >
              {project.category}
            </span>
            <span className="font-body text-label-sm text-outline">
              {project.meta}
            </span>
          </div>
          <h3 className="font-headline text-headline-md">{project.title}</h3>
          <p className="font-body text-body-md text-on-surface-variant">
            {project.description}
          </p>
          <div className="grid grid-cols-1 gap-space-xs pt-space-xs sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Icon className={`text-${project.accent} text-body-md`}>
                  verified
                </Icon>
                <span className="font-body text-body-sm">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 pt-space-sm">
            {project.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <a
              className="inline-flex items-center gap-1 font-body text-label-md font-bold text-primary hover:text-secondary"
              href="#contact"
            >
              Live Demo <Icon className="text-body-sm">north_east</Icon>
            </a>
            <a
              className="inline-flex items-center gap-1 font-body text-label-md font-semibold hover:text-primary"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo <Icon className="text-body-sm">north_east</Icon>
            </a>
            {index < 2 && (
              <a
                className="inline-flex items-center gap-1 font-body text-label-md text-on-surface-variant hover:text-on-surface"
                href="#about"
              >
                Case Study <Icon className="text-body-sm">article</Icon>
              </a>
            )}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
            <img
              className="h-64 w-full object-cover"
              src={project.image}
              alt={`${project.title} dashboard`}
            />
            <span className="absolute bottom-3 left-3 rounded-md bg-surface-container-lowest/90 px-3 py-1 font-mono text-label-sm text-on-surface backdrop-blur-sm">
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
