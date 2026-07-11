import { cardAccents } from "@/constants/color";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  index: number;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, role, period, description, index } = props;
  const accent = cardAccents[index % cardAccents.length];

  return (
    <article className="overflow-hidden rounded-2xl border-t-2 border-violet-600/70 bg-[#1A0B2E] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-violet-500/15 shadow-[0_0_32px_rgba(125,52,218,0.35)]">
          <div
            className={`grid h-16 w-16 place-items-center rounded-2xl bg-linear-to-br ${accent} text-xl font-bold text-white shadow-lg ring-1 ring-white/20`}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="min-w-0 space-y-2">
          <p className="text-sm font-medium text-violet-300">{period}</p>
          <h3 className="text-2xl font-bold text-white">{company}</h3>
          <p className="font-medium text-violet-200">{role}</p>
          <p className="max-w-md text-sm leading-6 text-violet-100/75">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
