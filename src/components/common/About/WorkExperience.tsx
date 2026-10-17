import { experiences } from "@/constants/data";
import ExperienceCard from "./ExperienceCard";
import { Reveal } from "../Motion";
export default function WorkExperience() {
  return (
    <section
      className="section-shell section-space"
      id="work-experience"
      aria-labelledby="experience-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / WHERE I HAVE BEEN BUILDING</p>
            <h2 id="experience-title">
              Experience,
              <br />
              <span>earned in production.</span>
            </h2>
          </div>
          <p className="section-note">
            CRM/BI, asset management
            <br />
            and logistics applications.
          </p>
        </div>
      </Reveal>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <Reveal key={experience.company} delay={index * 80}>
            <ExperienceCard {...experience} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
