import { navItems, profile } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SocialLinks } from "../shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest bg-surface-container-lowest">
      <div className="mx-auto max-w-portfolio px-margin-mobile py-space-2xl md:px-space-xl lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl md:grid-cols-12">
          <div className="flex flex-col gap-space-sm md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-container-highest bg-surface-container-low font-mono text-body-sm font-bold text-primary">
                MA
              </span>
              <strong className="font-headline text-headline-sm text-on-surface">
                {profile.name}
              </strong>
            </div>
            <p className="max-w-sm font-body text-body-sm leading-relaxed text-on-surface-variant">
              {profile.title} building RESTful APIs, relational database
              architectures, and desktop/web applications with C# and ASP.NET
              Core.
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-surface-container-highest bg-surface-container-low px-3 py-1 font-mono text-[11px] font-medium text-on-surface-variant">
                <span className="h-2 w-2 rounded-full bg-tertiary" />
                Based in {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-surface-container-highest bg-surface-container-low px-3 py-1 font-mono text-[11px] font-medium text-on-surface-variant">
                C# • ASP.NET Core • SQL Server
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-space-xs md:col-span-4">
            <h3 className="mb-1 font-mono text-label-sm font-semibold uppercase tracking-wider text-outline">
              System Directory
            </h3>
            <nav
              className="grid grid-cols-2 gap-x-space-md gap-y-2"
              aria-label="Footer navigation"
            >
              {navItems.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="font-body text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-space-xs md:col-span-3">
            <h3 className="mb-1 font-mono text-label-sm font-semibold uppercase tracking-wider text-outline">
              Connect &amp; Profiles
            </h3>
            <SocialLinks compact />
          </div>
        </div>

        <div className="mt-space-xl flex flex-col items-center justify-between gap-space-sm border-t border-surface-container-highest pt-space-md font-mono text-[12px] text-outline sm:flex-row">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Engineered with React, Tailwind &amp; .NET Identity</span>
            <a
              href="#hero"
              id="footer-back-to-top"
              className="inline-flex items-center gap-1 rounded-lg border border-surface-container-highest bg-surface-container-low px-2.5 py-1 text-on-surface-variant transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span>Top</span>
              <Icon className="text-[14px]">arrow_upward</Icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
