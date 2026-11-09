export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  className = "",
  rightSlot = null,
}) {
  return (
    <div
      className={`mb-space-xl flex flex-col justify-between gap-space-md border-b border-surface-container-highest pb-space-lg lg:flex-row lg:items-end ${className}`}
    >
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-2.5">
          {index && (
            <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-semibold tracking-wider text-primary">
              {index}
            </span>
          )}
          <span className="section-kicker">// {eyebrow}</span>
        </div>
        <h2 className="font-headline text-headline-md text-on-surface md:text-headline-lg">
          {title}
        </h2>
        {description && (
          <p className="mt-1 max-w-2xl font-body text-body-md text-on-surface-variant">
            {description}
          </p>
        )}
      </div>
      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
}
