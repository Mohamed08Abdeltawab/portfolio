import { projects } from "../../data/portfolio";
import { SectionHeading } from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <section id="featured-projects" className="py-space-xl">
      <SectionHeading
        eyebrow="PROJECTS"
        title=".NET Applications & Systems"
        description="Selected applications developed with C#, .NET, Windows Forms, databases, and RESTful APIs."
      />
      <div className="flex flex-col gap-space-xl">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
