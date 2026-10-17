interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
  index: number;
}
export default function ExperienceCard({
  company,
  role,
  period,
  description,
  contributions,
  index,
}: ExperienceCardProps) {
  return (
    <article className="experience-row">
      <div className="experience-date">
        <span className="experience-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p>{period}</p>
      </div>
      <div>
        <h3>{company}</h3>
        <p className="experience-role">{role}</p>
        <p className="body-copy">{description}</p>
        <ul className="contribution-list">
          {contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="experience-arrow" aria-hidden="true">
        &#8599;
      </span>
    </article>
  );
}
