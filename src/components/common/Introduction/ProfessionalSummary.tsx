import { Reveal } from "../Motion";
const capabilities = [
  {
    index: "01",
    title: "Frontend development",
    detail: "Responsive applications and clear user workflows.",
    tech: "React.js / Next.js / Tailwind CSS",
    glyph: "[ ]",
  },
  {
    index: "02",
    title: "Backend development",
    detail: "Scalable APIs, permissions and real-time features.",
    tech: "NestJS / Spring Boot / TypeScript / Java",
    glyph: "{ }",
  },
  {
    index: "03",
    title: "Data & real-time systems",
    detail: "Reliable data models and optimized queries.",
    tech: "PostgreSQL / MySQL / Redis",
    glyph: "</>",
  },
];
export default function ProfessionalSummary() {
  return (
    <section className="summary section-shell" aria-labelledby="summary-title">
      <Reveal>
        <div className="summary-intro">
          <p className="eyebrow" id="summary-title">
            A FEW TOOLS I REACH FOR.
            <br />
            FROM BACKEND TO BROWSER.
          </p>
          <p>
            The backend is my starting point.
            <br className="hidden sm:block" />{" "}
            <span>The whole application is my scope.</span>
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.index}>
              <div className="capability-top">
                <span>{item.index} / WHAT I WORK WITH</span>
                <span className="capability-glyph" aria-hidden="true">
                  {item.glyph}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <span className="capability-tech">{item.tech}</span>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
