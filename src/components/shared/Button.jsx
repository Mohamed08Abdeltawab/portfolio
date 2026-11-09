import { Icon } from "./Icon";

export function Button({
  children,
  href = "#",
  icon,
  secondary = false,
  external = false,
  className = "",
  onClick,
  id,
}) {
  const isExternal = external || href.startsWith("http");
  return (
    <a
      id={id}
      onClick={onClick}
      className={`group ${
        secondary ? "secondary-button" : "primary-button"
      } ${className}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {icon && (
        <Icon className="text-[18px] transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </Icon>
      )}
    </a>
  );
}
