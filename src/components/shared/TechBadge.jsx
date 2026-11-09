export function TechBadge({ children, active = false, className = "" }) {
  return (
    <span
      className={`tech-badge ${
        active
          ? "!border-primary/50 !bg-primary/10 !text-primary font-semibold"
          : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
