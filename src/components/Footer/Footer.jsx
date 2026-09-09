import { navItems } from "../../data/portfolio";
import { SocialLinks } from "../shared/SocialLinks";
export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container-highest bg-surface-container-lowest">
      <div className="mx-auto max-w-portfolio px-margin-mobile py-space-3xl md:px-space-xl lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-space-xl md:grid-cols-12">
          <div className="flex flex-col gap-space-sm md:col-span-5">
            <div className="flex items-center gap-space-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface-container-high font-headline text-headline-sm font-bold text-primary">
                D
              </span>
              <strong className="font-headline text-headline-sm">
                David Vance
              </strong>
            </div>
            <p className="max-w-sm font-body text-body-sm text-on-surface-variant">
              Full-Stack .NET Engineer specializing in high-throughput cloud
              architectures, distributed systems, and resilient enterprise
              applications.
            </p>
            <span className="w-max rounded-full bg-tertiary-fixed/30 px-space-sm py-1 font-body text-label-sm">
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-tertiary-container" />
              Available for select opportunities
            </span>
          </div>
          <div className="flex flex-col gap-space-xs md:col-span-4">
            <h3 className="mb-space-2xs font-body text-label-md font-bold uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-x-space-md gap-y-space-xs">
              {navItems.slice(0, 6).map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="font-body text-body-sm text-on-surface-variant hover:text-on-surface"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-space-xs md:col-span-3">
            <h3 className="mb-space-2xs font-body text-label-md font-bold uppercase tracking-wider">
              Connect &amp; Profiles
            </h3>
            <SocialLinks compact />
          </div>
        </div>
        <div className="mt-space-2xl flex flex-col items-center justify-between gap-space-sm border-t border-surface-container-high pt-space-lg font-body text-body-sm text-outline sm:flex-row">
          <p>© 2025 David Vance. All rights reserved.</p>
          <p>Crafted with C#, ASP.NET Core &amp; Modern Web Tech</p>
        </div>
      </div>
    </footer>
  );
}
