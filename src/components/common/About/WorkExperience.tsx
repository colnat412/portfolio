import { experiences } from "@/constants/data";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:py-24"
      id="work-experience"
    >
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Work Experience
      </h2>

      <div className="mt-10 flex flex-col">
        {experiences.map((experience, index) => (
          <div
            className={`flex items-stretch gap-5 sm:gap-7 ${
              index < experiences.length - 1 ? "pb-8" : ""
            }`}
            key={`${experience.company}-${index}`}
          >
            <div className="flex w-6 shrink-0 flex-col items-center sm:w-10">
              <span className="h-6 w-6 shrink-0 rounded-full border-4 border-[#11071F] bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)] sm:h-10 sm:w-10" />
              {index < experiences.length - 1 && (
                <span className="mt-3 w-px flex-1 bg-violet-500/50" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <ExperienceCard {...experience} index={index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
