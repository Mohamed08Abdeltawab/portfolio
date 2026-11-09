import { useEffect, useState } from "react";
import { navItems, profile, profileImage } from "../../data/portfolio";
import { Button } from "../shared/Button";
import { Icon } from "../shared/Icon";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 16);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, (currentScroll / docHeight) * 100));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(([, id]) => id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.05, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
      className={`navbar fixed left-0 right-0 top-0 z-50 min-w-full border-b border-surface-container-highest bg-surface-container-lowest/85 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      {/* Top Scroll Progress Bar */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[2px] bg-primary transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-portfolio items-center justify-between gap-3 px-margin-mobile md:px-space-xl lg:px-margin-desktop">
        {/* Brand Identity */}
        <a
          href="#hero"
          id="nav-brand-link"
          className="group flex min-w-0 shrink-0 items-center gap-2.5"
          onClick={closeMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-container-highest bg-surface-container-low font-mono text-body-sm font-bold text-primary shadow-sm transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            MA
          </span>
          <div className="flex flex-col">
            <span className="font-headline text-[15px] font-bold leading-tight tracking-tight text-on-surface">
              {profile.name}
            </span>
            <span className="font-mono text-[11px] font-medium text-on-surface-variant">
              //.NET Backend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 rounded-xl border border-surface-container-highest bg-surface-container-low/70 p-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map(([label, id]) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                id={`nav-link-${id}`}
                href={`#${id}`}
                className={`nav-link whitespace-nowrap rounded-lg px-2.5 py-1.5 font-body text-[12.5px] font-medium transition-all xl:px-3 ${
                  isActive
                    ? "bg-surface-container-lowest font-semibold text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="theme-toggle flex h-9 w-9 items-center justify-center rounded-lg border border-surface-container-highest bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            <Icon className="text-[19px]">
              {isDark ? "light_mode" : "dark_mode"}
            </Icon>
          </button>

          <a
            href="#contact"
            id="nav-cta-desktop"
            className="hidden items-center gap-2 rounded-lg bg-primary px-3.5 py-2 font-body text-[12.5px] font-semibold text-white shadow-sm transition-all hover:bg-primary-container md:inline-flex"
          >
            <span>Hire / Connect</span>
            <Icon className="text-[15px]">north_east</Icon>
          </a>

          <img
            className="hidden h-8 w-8 rounded-lg border border-surface-container-highest object-cover xl:block"
            src={profileImage}
            alt={profile.name}
          />

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-container-highest bg-surface-container-low text-on-surface-variant hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/40 lg:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            <Icon className="text-[20px]">
              {isMenuOpen ? "close" : "menu"}
            </Icon>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${
          isMenuOpen
            ? "max-h-[36rem] border-t opacity-100"
            : "max-h-0 opacity-0"
        } overflow-hidden border-surface-container-highest bg-surface-container-lowest/95 backdrop-blur-xl transition-all duration-300 lg:hidden`}
      >
        <nav
          className="mx-auto flex max-w-portfolio flex-col gap-1 px-margin-mobile py-4"
          aria-label="Mobile navigation"
        >
          <div className="grid grid-cols-2 gap-1.5 pb-3">
            {navItems.map(([label, id]) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-lg border px-3 py-2.5 font-body text-body-sm font-medium transition-colors ${
                    isActive
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-surface-container-highest bg-surface-container-low/60 text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  <span>{label}</span>
                  <Icon className="text-[15px] opacity-60">arrow_forward</Icon>
                </a>
              );
            })}
          </div>
          <Button href="#contact" onClick={closeMenu} icon="mail">
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
}
