import { useEffect, useState } from "react";
import { projects } from "../../data/portfolio";
import { Icon } from "../shared/Icon";
import { SectionHeading } from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";

const FILTERS = ["All Systems", "Web API", "Desktop & POS"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Systems");
  const [lightboxState, setLightboxState] = useState(null);

  const filteredProjects =
    activeFilter === "All Systems"
      ? projects
      : projects.filter((p) => p.filterGroup === activeFilter);

  useEffect(() => {
    if (!lightboxState) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxState(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxState]);

  function openLightbox(project, screenIndex = 0, mode = "image") {
    setLightboxState({ project, screenIndex, mode });
  }

  return (
    <section id="featured-projects" className="py-space-2xl">
      <SectionHeading
        index="SYS.04"
        eyebrow="FEATURED CASE STUDIES"
        title=".NET Applications & Production Systems"
        description="Real applications engineered with C#, ASP.NET Core, Entity Framework Core, ADO.NET, Windows Forms, SQL Server, and SQLite — complete with live execution screenshots and source repositories."
        rightSlot={
          <div
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-surface-container-highest bg-surface-container-low p-1"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter;
              return (
                <button
                  key={filter}
                  id={`project-filter-${filter.toLowerCase().replace(/\W+/g, "-")}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-lg px-3 py-1.5 font-mono text-[11.5px] font-semibold transition-all ${
                    active
                      ? "bg-primary text-white shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        }
      />

      <div className="flex flex-col gap-space-xl">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpenLightbox={openLightbox}
          />
        ))}
      </div>

      {/* Interactive Lightbox & Video Demo Modal */}
      {lightboxState && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxState.project.title} media viewer`}
          onClick={() => setLightboxState(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0d121c] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#131a28] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="rounded bg-primary/20 px-2 py-0.5 font-mono text-[11px] font-bold text-sky-400">
                  {lightboxState.project.category}
                </span>
                <h3 className="font-headline text-body-md font-bold">
                  {lightboxState.project.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {lightboxState.project.videoUrl && (
                  <div className="flex rounded-lg border border-white/10 bg-slate-900 p-0.5">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState((s) => ({ ...s, mode: "image" }))
                      }
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold ${
                        lightboxState.mode === "image"
                          ? "bg-primary text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Screenshots
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState((s) => ({ ...s, mode: "video" }))
                      }
                      className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold ${
                        lightboxState.mode === "video"
                          ? "bg-primary text-white"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Video Demo
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setLightboxState(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white"
                  aria-label="Close modal"
                >
                  <Icon className="text-[18px]">close</Icon>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative flex flex-1 flex-col items-center justify-center overflow-auto bg-slate-950 p-4">
              {lightboxState.mode === "video" &&
              lightboxState.project.videoUrl ? (
                <video
                  src={lightboxState.project.videoUrl}
                  controls
                  autoPlay
                  className="max-h-[68vh] w-full rounded-lg border border-white/10 bg-black"
                >
                  Your browser does not support embedded videos.
                </video>
              ) : (
                <>
                  <img
                    src={
                      lightboxState.project.gallery?.[lightboxState.screenIndex]
                        ?.src || lightboxState.project.image
                    }
                    alt={lightboxState.project.title}
                    className="max-h-[65vh] w-auto rounded-lg object-contain"
                  />
                  <p className="mt-3 max-w-2xl text-center font-body text-body-sm text-slate-300">
                    {
                      lightboxState.project.gallery?.[lightboxState.screenIndex]
                        ?.caption
                    }
                  </p>
                </>
              )}
            </div>

            {/* Modal Footer Thumbnails */}
            {lightboxState.mode === "image" &&
              lightboxState.project.gallery?.length > 1 && (
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#131a28] px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {lightboxState.project.gallery.map((item, idx) => (
                      <button
                        key={item.src}
                        type="button"
                        onClick={() =>
                          setLightboxState((s) => ({ ...s, screenIndex: idx }))
                        }
                        className={`rounded-lg px-3 py-1.5 font-mono text-[11px] font-medium transition ${
                          idx === lightboxState.screenIndex
                            ? "bg-primary text-white"
                            : "bg-white/5 text-slate-300 hover:bg-white/15"
                        }`}
                      >
                        {idx + 1}. {item.label}
                      </button>
                    ))}
                  </div>
                  <a
                    href={lightboxState.project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11.5px] font-semibold text-sky-400 hover:underline"
                  >
                    <span>View GitHub Repo</span>
                    <Icon className="text-[14px]">north_east</Icon>
                  </a>
                </div>
              )}
          </div>
        </div>
      )}
    </section>
  );
}
