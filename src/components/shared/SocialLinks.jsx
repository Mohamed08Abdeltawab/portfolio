import { Icon } from "./Icon";
import { socialLinks } from "../../data/portfolio";

export function SocialLinks({ compact = false }) {
  return (
    <div
      className={`flex ${
        compact
          ? "flex-col gap-2.5"
          : "flex-wrap items-center gap-2"
      }`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.label}
          className={
            compact
              ? "social-link group inline-flex items-center justify-between gap-3 rounded-lg border border-transparent px-2.5 py-1.5 font-body text-body-sm text-on-surface-variant hover:border-surface-container-highest hover:bg-surface-container-low hover:text-on-surface"
              : "social-link group inline-flex items-center gap-2 rounded-lg border border-surface-container-highest bg-surface-container-lowest px-3.5 py-2 font-body text-label-sm text-on-surface-variant shadow-sm hover:border-primary/40 hover:bg-surface-container-low hover:text-on-surface"
          }
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span className="inline-flex items-center gap-2">
            <Icon className="text-[16px] text-primary transition-transform duration-200 group-hover:scale-110">
              {link.icon}
            </Icon>
            <span className="font-semibold text-on-surface">{link.label}</span>
          </span>
          {compact && link.handle && (
            <span className="font-mono text-[11px] text-outline group-hover:text-primary">
              ↗
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
