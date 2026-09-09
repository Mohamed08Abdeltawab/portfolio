import { Icon } from "./Icon";
import { socialLinks } from "../../data/portfolio";
export function SocialLinks({ compact = false }) {
  return (
    <div
      className={`flex ${compact ? "flex-col gap-space-xs" : "flex-wrap items-center gap-space-xs"}`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          className={
            compact
              ? "social-link flex items-center gap-space-xs font-body text-body-sm text-on-surface-variant hover:text-primary"
              : "social-link inline-flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-1.5 font-body text-label-sm text-on-surface-variant shadow-sm hover:bg-surface-container-lowest hover:text-primary"
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
