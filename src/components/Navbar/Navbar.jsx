import { useState } from "react";
import { navItems, profile, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-surface-container-highest bg-surface-container-lowest/85 shadow-[var(--shadow-navbar)] backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-portfolio items-center justify-between gap-space-md px-margin-mobile md:px-space-xl lg:px-margin-desktop">
        <a href="#about" className="flex shrink-0 items-center gap-space-xs">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high font-headline text-headline-sm font-bold text-primary">
            M
          </span>
          <span className="flex items-center gap-1.5 font-headline text-headline-sm tracking-tight">
            <strong>{profile.name}</strong>
            <span className="font-normal text-outline-variant">//</span>
            <span className="hidden font-body text-label-sm font-medium text-on-surface-variant sm:inline">
              .NET Backend
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
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <Icon className="text-body-md">
              {isDark ? "light_mode" : "dark_mode"}
            </Icon>
          </button>
          <Button href="#contact">Get in Touch</Button>
          <img
            className="h-8 w-8 rounded-full object-cover ring-2 ring-surface-container-highest"
            src={profileImage}
            alt={profile.name}
          />
        </div>
      </div>
    </header>
  );
}
