import { services } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import { TechBadge } from "../shared/TechBadge";

export default function Services() {
  return (
    <section id="services" className="py-space-2xl">
      <SectionHeading
        index="SYS.03"
        eyebrow="SERVICES & CAPABILITIES"
        title="What I Build & Engineer"
        description="End-to-end backend API engineering, relational database architecture, layered desktop systems, and responsive full-stack web applications."
      />

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-2">
        {services.map((service, idx) => (
          <article
            key={service.id}
            className="card stagger-item flex flex-col justify-between gap-space-md p-space-lg md:p-space-xl"
            style={{ "--stagger-delay": `${idx * 70}ms` }}
          >
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-container-highest bg-surface-container-low text-primary">
                    <Icon className="text-[22px]">{service.icon}</Icon>
                  </span>
                  <span className="font-mono text-label-sm font-semibold text-outline">
                    {service.index}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 rounded-lg border border-surface-container-highest bg-surface-container-low px-2.5 py-1 font-mono text-[11px] font-medium text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span>Inquire</span>
                  <Icon className="text-[13px]">north_east</Icon>
                </a>
              </div>

              <h3 className="mt-1 font-headline text-headline-sm text-on-surface md:text-[22px]">
                {service.title}
              </h3>

              <p className="font-body text-body-md text-on-surface-variant">
                {service.summary}
              </p>

              <ul className="mt-1 grid grid-cols-1 gap-2 border-t border-surface-container-highest pt-space-sm">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body text-body-sm text-on-surface"
                  >
                    <Icon className="mt-0.5 text-[16px] text-primary">
                      check_small
                    </Icon>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-surface-container-highest pt-space-sm">
              {service.stack.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
