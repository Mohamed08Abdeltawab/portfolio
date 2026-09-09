export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`}>
      <span className="section-kicker">// {eyebrow}</span>
      <h2 className="font-headline text-headline-lg text-on-surface">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl font-body text-body-md text-on-surface-variant">
          {description}
        </p>
      )}
    </div>
  );
}
