import { Icon } from "./Icon";
export function Button({ children, href = "#", icon, secondary = false }) {
  return (
    <a
      className={
        secondary
          ? "interactive-button inline-flex items-center gap-2 rounded-full bg-surface-container-lowest px-space-lg py-3 font-body text-label-md text-on-surface shadow-sm hover:text-primary"
          : "gradient-button"
      }
      href={href}
    >
      {icon && <Icon className="text-body-md">{icon}</Icon>}
      {children}
    </a>
  );
}
