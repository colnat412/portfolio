import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";
import { Reveal } from "../Motion";
export default function Projects() {
  return (
    <section
      className="section-shell section-space"
      id="projects"
      aria-labelledby="projects-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / THINGS I HAVE BUILT</p>
            <h2 id="projects-title">
              Built it.
              <br />
              <span>Here&apos;s how.</span>
            </h2>
          </div>
          <p className="section-note">
            Backend and frontend roles
            <br />
            across application projects.
          </p>
        </div>
      </Reveal>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectCard {...project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
