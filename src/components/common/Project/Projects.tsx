import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:py-24"
      id="projects"
    >
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Projects
      </h2>

      <div className="mt-10 space-y-16 lg:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
