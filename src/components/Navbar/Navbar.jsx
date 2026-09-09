import { useEffect, useState } from "react";
import { navItems, profile, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`navbar fixed left-0 right-0 top-0 z-50 min-w-full border-b border-surface-container-highest bg-surface-container-lowest/85 shadow-[var(--shadow-navbar)] backdrop-blur-md transition-all duration-300 ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="flex h-16 min-w-full items-center gap-space-sm px-3 sm:gap-space-md sm:px-4 lg:px-6">
        <a
          href="#hero"
          className="flex min-w-0 shrink-0 items-center gap-space-xs"
          onClick={closeMenu}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-container-high font-headline text-headline-sm font-bold text-primary">
            M
          </span>
          <span className="flex min-w-0 items-center gap-1.5 whitespace-nowrap font-headline text-headline-sm tracking-tight">
            <strong className="truncate">{profile.name}</strong>
            <span className="hidden font-body text-label-sm font-medium text-on-surface-variant sm:inline">
              .NET Backend
            </span>
          </span>
        </a>
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex xl:gap-4"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link whitespace-nowrap font-body text-label-sm text-on-surface-variant transition-colors hover:text-on-surface xl:text-label-md"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <Icon className="text-body-md">
              {isDark ? "light_mode" : "dark_mode"}
            </Icon>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary lg:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            <Icon className="text-body-md">
              {isMenuOpen ? "close" : "menu"}
            </Icon>
          </button>
          <span className="hidden 2xl:inline-flex">
            <Button href="#contact">Get in Touch</Button>
          </span>
          <img
            className="hidden h-8 w-8 rounded-full object-cover ring-2 ring-surface-container-highest xl:block"
            src={profileImage}
            alt={profile.name}
          />
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0"} overflow-hidden border-surface-container-highest bg-surface-container-lowest/95 transition-all duration-300 lg:hidden`}
      >
        <nav
          className="mx-auto flex w-full flex-col gap-1 px-3 py-3 sm:px-4"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-body text-label-md text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              {label}
            </a>
          ))}
          <Button href="#contact">Get in Touch</Button>
        </nav>
      </div>
    </header>
  );
}
