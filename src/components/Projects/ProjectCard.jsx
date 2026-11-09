import { useState } from "react";
import { Icon } from "../shared/Icon";
import { TechBadge } from "../shared/TechBadge";

export default function ProjectCard({ project, index, onOpenLightbox }) {
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [detailMode, setDetailMode] = useState("features");

  const gallery = project.gallery || [
    { src: project.image, label: project.title, caption: project.description },
  ];
  const currentScreen = gallery[activeScreenIdx] || gallery[0];
  const isReversed = index % 2 === 1;

  return (
    <article
      id={`project-card-${project.id || index}`}
      className="card project-card border-surface-container-highest bg-surface-container-lowest"
    >
      {/* Top Architectural Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-container-highest bg-surface-container-low/65 px-space-lg py-3.5 md:px-space-xl">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[11px] font-bold text-primary">
            {project.index || `PRJ // 0${index + 1}`}
          </span>
          <span className="rounded-md border border-surface-container-highest bg-surface-container-lowest px-2.5 py-0.5 font-mono text-[11.5px] font-semibold text-on-surface">
            {project.category}
          </span>
          <span className="font-mono text-[11.5px] text-outline">
            {project.meta}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {project.architecture && (
            <span className="hidden items-center gap-1.5 font-mono text-[11px] text-on-surface-variant xl:inline-flex">
              <Icon className="text-[14px] text-primary">account_tree</Icon>
              {project.architecture}
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-surface-container-highest bg-surface-container-lowest px-2.5 py-1 font-mono text-[11px] font-semibold text-on-surface transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Icon className="text-[13px]">code</Icon>
            <span>Source Code</span>
            <Icon className="text-[12px]">north_east</Icon>
          </a>
        </div>
      </div>

      {/* Main Case Study Split Grid */}
      <div className="grid grid-cols-1 items-start gap-space-lg p-space-lg md:p-space-xl lg:grid-cols-12">
        {/* Visual Gallery Column (7 cols on desktop) */}
        <div
          className={`flex flex-col gap-3 lg:col-span-7 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Application Window Frame */}
          <div className="overflow-hidden rounded-xl border border-surface-container-highest bg-[#0b0f17] shadow-md">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-[#111724] px-3.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="ml-2 truncate font-mono text-[11px] text-slate-300">
                  {currentScreen.label}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10.5px] text-slate-400">
                  {activeScreenIdx + 1} / {gallery.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox?.(project, activeScreenIdx, "image")
                  }
                  className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 font-mono text-[10.5px] text-slate-200 transition hover:bg-primary hover:text-white"
                  title="Inspect full-resolution screenshot"
                >
                  <Icon className="text-[13px]">open_in_full</Icon>
                  <span>Expand</span>
                </button>
              </div>
            </div>

            {/* Real Screenshot Viewport */}
            <div
              className="group relative aspect-[16/9.5] w-full cursor-pointer overflow-hidden bg-slate-950"
              onClick={() =>
                onOpenLightbox?.(project, activeScreenIdx, "image")
              }
            >
              <img
                src={currentScreen.src}
                alt={`${project.title} — ${currentScreen.label}`}
                loading="lazy"
                className="project-image h-full w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-3.5 opacity-95 transition-opacity">
                <p className="font-body text-[12px] leading-snug text-slate-200">
                  {currentScreen.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Screen Switcher Strip */}
          {gallery.length > 1 && (
            <div className="flex flex-wrap items-center gap-1.5">
              {gallery.map((screen, sIdx) => {
                const isSelected = sIdx === activeScreenIdx;
                return (
                  <button
                    key={screen.src}
                    type="button"
                    onClick={() => setActiveScreenIdx(sIdx)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono text-[11px] font-medium transition-all ${
                      isSelected
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "border-surface-container-highest bg-surface-container-low text-on-surface-variant hover:border-primary/40 hover:text-on-surface"
                    }`}
                  >
                    <Icon className="text-[13px]">
                      {screen.src.endsWith(".png") ? "schema" : "screenshot_monitor"}
                    </Icon>
                    <span>{screen.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Narrative & Engineering Details Column (5 cols on desktop) */}
        <div
          className={`flex flex-col justify-between gap-space-md lg:col-span-5 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex flex-col gap-space-sm">
            {project.subtitle && (
              <span className="font-mono text-label-sm font-semibold text-primary">
                {project.subtitle}
              </span>
            )}
            <h3 className="font-headline text-headline-md text-on-surface">
              {project.title}
            </h3>
            <p className="font-body text-body-md leading-relaxed text-on-surface-variant">
              {project.description}
            </p>
          </div>

          {/* Toggle between Key Features & Architectural Highlights */}
          <div className="flex flex-col gap-2.5 rounded-xl border border-surface-container-highest bg-surface-container-low/50 p-3.5">
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-2">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setDetailMode("features")}
                  className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors ${
                    detailMode === "features"
                      ? "bg-primary text-white"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Core Capabilities
                </button>
                {project.endpoints && (
                  <button
                    type="button"
                    onClick={() => setDetailMode("architecture")}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors ${
                      detailMode === "architecture"
                        ? "bg-primary text-white"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    System Workflows
                  </button>
                )}
              </div>
              <span className="font-mono text-[10.5px] text-outline">
                {project.status}
              </span>
            </div>

            {detailMode === "features" ? (
              <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Icon className="mt-0.5 text-[16px] text-tertiary">
                      verified
                    </Icon>
                    <span className="font-body text-body-sm text-on-surface">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="flex flex-col gap-1.5 pt-1">
                {project.endpoints?.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-mono text-[11.5px] text-on-surface-variant"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 border-t border-surface-container-highest pt-space-sm">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button !px-4 !py-2.5 !text-label-sm"
            >
              <span>GitHub Repository</span>
              <Icon className="text-[16px]">north_east</Icon>
            </a>
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => onOpenLightbox?.(project, 0, "video")}
                className="secondary-button !px-3.5 !py-2.5 !text-label-sm"
              >
                <Icon className="text-[16px] text-primary">play_circle</Icon>
                <span>Watch Demo Video</span>
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                onOpenLightbox?.(project, activeScreenIdx, "image")
              }
              className="inline-flex items-center gap-1.5 rounded-xl border border-surface-container-highest bg-surface-container-low px-3 py-2.5 font-mono text-[11.5px] font-medium text-on-surface-variant transition-colors hover:border-primary/40 hover:text-on-surface"
            >
              <Icon className="text-[15px]">photo_library</Icon>
              <span>{gallery.length} Screens</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
