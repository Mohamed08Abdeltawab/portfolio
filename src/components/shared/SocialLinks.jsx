import { Icon } from "./Icon";
export function SocialLinks({ compact = false }) {
  const links = [
    { label: "GitHub", href: "https://github.com", icon: "code" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "share" },
    { label: "Email", href: "mailto:david.vance@devmail.io", icon: "mail" },
  ];
  return (
    <div
      className={`flex ${compact ? "flex-col gap-space-xs" : "flex-wrap items-center gap-space-xs"}`}
    >
      {links.map((link) => (
        <a
          key={link.label}
          className={
            compact
              ? "flex items-center gap-space-xs font-body text-body-sm text-on-surface-variant transition-colors hover:text-primary"
              : "inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-1.5 font-body text-label-sm text-on-surface-variant shadow-sm transition-all hover:bg-surface-container-lowest hover:text-primary"
          }
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <Icon className="text-body-sm">{link.icon}</Icon>
          {link.label}
        </a>
      ))}
    </div>
  );
}
