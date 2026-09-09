import { navItems, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-surface-container-highest bg-surface-container-lowest/85 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-portfolio items-center justify-between gap-space-md px-margin-mobile md:px-space-xl lg:px-margin-desktop">
        <a href="#about" className="flex shrink-0 items-center gap-space-xs">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high font-headline text-headline-sm font-bold text-primary">
            D
          </span>
          <span className="flex items-center gap-1.5 font-headline text-headline-sm tracking-tight">
            <strong>David Vance</strong>
            <span className="font-normal text-outline-variant">//</span>
            <span className="hidden font-body text-label-sm font-medium text-on-surface-variant sm:inline">
              .NET &amp; Cloud
            </span>
          </span>
        </a>
        <nav
          className="hidden items-center gap-space-md xl:flex 2xl:gap-space-lg"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-body text-label-md text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-space-sm">
          <Button href="#contact">Get in Touch</Button>
          <img
            className="h-8 w-8 rounded-full object-cover ring-2 ring-surface-container-highest"
            src={profileImage}
            alt="David Vance"
          />
        </div>
      </div>
    </header>
  );
}
