import AboutMe from "@/components/common/Introduction/Introduction";
import ProfessionalSummary from "@/components/common/Introduction/ProfessionalSummary";
import WorkExperience from "@/components/common/About/WorkExperience";
import Projects from "@/components/common/Project/Projects";

export default function Home() {
  return (
    <>
      <AboutMe />
      <ProfessionalSummary />
      <WorkExperience />
      <Projects />
    </>
  );
}
