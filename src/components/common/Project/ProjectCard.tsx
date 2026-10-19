import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  category: string;
  kind: string;
  teamSize: number;
  description: string;
  technologies: string[];
  contributions: string[];
  href: string;
  linkLabel: string;
  index: number;
  isReverse: boolean;
  screenshots?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
}
function ProjectIllustration({ chat }: { chat: boolean }) {
  return (
    <div
      className={
        "project-illustration " + (chat ? "chat-preview" : "trip-preview")
      }
      aria-hidden="true"
    >
      <div className="preview-window">
        <div className="preview-topbar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>{chat ? "workspace / messages" : "workspace / trips"}</span>
        </div>
        <div className="preview-workspace">
          <aside>
            <span className="preview-logo">
              {chat ? "C" : "T"}
              <b>{chat ? "Connect" : "Trip Plan"}</b>
            </span>
            <span className="preview-nav active">
              {chat ? "# engineering" : "Itinerary"}
            </span>
            <span className="preview-nav">{chat ? "# design" : "Budget"}</span>
            <span className="preview-nav">
              {chat ? "# general" : "Members"}
            </span>
          </aside>
          <div className="preview-content">
            {chat ? (
              <>
                <div className="preview-heading">
                  # engineering <span>&#9679; Live</span>
                </div>
                <div className="message">
                  <i>JD</i>
                  <div>
                    <b>Team workspace</b>
                    <p>A place for the next big idea.</p>
                  </div>
                </div>
                <div className="message">
                  <i>LC</i>
                  <div>
                    <b>Colnat</b>
                    <p>Let&apos;s build something together.</p>
                  </div>
                </div>
                <div className="typing">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="message-input">
                  Message #engineering <span>&#8594;</span>
                </div>
              </>
            ) : (
              <>
                <div className="preview-heading">
                  Plan the trip. Split the bill.
                </div>
                <div className="course-art">
                  <span>A &#8594; B</span>
                  <b>Itinerary / Budget / Settle</b>
                </div>
                <div className="course-bottom">
                  <span>Equal / Exact / % / Shares</span>
                  <span>&#8594;</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <span className="illustration-caption">
        {chat
          ? "REAL-TIME CONNECTION, BY DESIGN"
          : "TRIP PLANNING / SHARED EXPENSES"}
      </span>
    </div>
  );
}
export default function ProjectCard({
  title,
  category,
  kind,
  teamSize,
  description,
  technologies,
  contributions,
  href,
  linkLabel,
  index,
  isReverse,
  screenshots,
}: ProjectCardProps) {
  return (
    <article className={"project-card " + (isReverse ? "project-reverse" : "")}>
      <div className="project-visual">
        {screenshots?.length ? (
          <div className={styles.gallery}>
            {screenshots.map((screenshot) => (
              <figure key={screenshot.src} className={styles.screenshot}>
                <a
                  href={screenshot.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${screenshot.caption} screenshot (opens in a new tab)`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(max-width: 850px) 100vw, 50vw"
                    className={styles.image}
                  />
                </a>
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <ProjectIllustration chat={kind === "chat"} />
            <p className="preview-disclaimer">
              Concept illustration / Not a product screenshot
            </p>
          </>
        )}
      </div>
      <div className="project-copy">
        <p className="eyebrow">
          PROJECT {String(index + 1).padStart(2, "0")} / {category}
        </p>
        <h3>{title}</h3>
        <p className="project-team">
          {teamSize === 1
            ? "Solo project / End-to-end development"
            : "Team of " + teamSize + " / Backend development"}
        </p>
        <p className="body-copy">{description}</p>
        <div className="tech-list">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <a
          className="project-link"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel} <span aria-hidden="true">&#8599;</span>
        </a>
        <details className="project-notes">
          <summary>
            What I built <span aria-hidden="true">+</span>
          </summary>
          <div className="project-notes-body">
            <ul className="contribution-list">
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
}
