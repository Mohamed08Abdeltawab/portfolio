import { about } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
export default function About() {
  return (
    <section id="about" className="py-space-2xl">
      <div className="card about-card rounded-2xl p-space-lg md:p-space-2xl">
        <div className="grid grid-cols-1 items-center gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col gap-space-sm lg:col-span-5">
            <span className="section-kicker">// PROFILE</span>
            <h2 className="font-headline text-headline-lg leading-tight">
              {about.heading}
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
          <div className="flex flex-col gap-space-md font-body text-body-lg text-on-surface-variant lg:col-span-7">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap items-center gap-space-lg pt-space-xs font-body text-body-md font-semibold text-on-surface">
              {about.highlights.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Icon className="text-tertiary">check_circle</Icon>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
