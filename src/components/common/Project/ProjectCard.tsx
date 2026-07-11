interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  index: number;
  isReverse: boolean;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, category, description, technologies, index, isReverse } =
    props;

  return (
    <article
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        isReverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="flex min-h-64 flex-col overflow-hidden rounded-2xl border border-violet-500/30 bg-[#1A0B2E] shadow-[0_14px_36px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between border-b border-violet-500/20 px-5 py-3 text-xs text-violet-200/70">
          <span>PROJECT PREVIEW</span>
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-8 bg-linear-to-br from-violet-700/35 via-[#1A0B2E] to-fuchsia-700/20 p-6">
          <div className="space-y-3">
            <div className="h-3 w-2/5 rounded-full bg-violet-200/70" />
            <div className="h-2 w-4/5 rounded-full bg-violet-200/20" />
            <div className="h-2 w-3/5 rounded-full bg-violet-200/20" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg bg-violet-200/15" />
            <div className="h-16 rounded-lg bg-violet-200/10" />
            <div className="h-16 rounded-lg bg-violet-200/15" />
          </div>
        </div>
      </div>

      <div className={isReverse ? "text-left lg:text-right" : "text-left"}>
        <p className="text-sm font-medium text-violet-400">{category}</p>
        <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 rounded-xl bg-[#1A0B2E] p-5 text-sm leading-6 text-violet-100/80 shadow-[0_10px_26px_rgba(0,0,0,0.2)] sm:text-base">
          {description}
        </p>
        <div
          className={`mt-5 flex flex-wrap gap-2 ${
            isReverse ? "lg:justify-end" : ""
          }`}
        >
          {technologies.map((technology) => (
            <span
              className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
