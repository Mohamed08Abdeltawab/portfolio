import { projects } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section id="featured-projects" className="py-space-xl">
      <SectionHeading
        eyebrow="FEATURED WORK"
        title="Enterprise .NET Systems & Applications"
        description="Architectural solutions engineered for scale, transactional reliability, and seamless user interaction across distributed enterprise domains."
      />
      <div className="flex flex-col gap-space-xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
