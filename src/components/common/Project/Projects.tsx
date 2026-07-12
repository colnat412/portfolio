import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
      id="projects"
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Projects
      </h2>

      <div className="mt-8 space-y-14 sm:mt-10 sm:space-y-16 lg:space-y-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
