import styles from "./PersonalCanvas.module.css";
import ScrollButton from "../ScrollButton";
import HeroWorkbench from "./HeroWorkbench";
export default function Introduction() {
  return (
    <section
      className={"section-shell " + styles.hero}
      id="home"
      aria-labelledby="hero-title"
    >
      <div className={styles.copy}>
        <p className={styles.intro + " hero-enter"}>
          <span className={styles.nameMarker} aria-hidden="true" /> NGUYEN TAN
          LOC <span className={styles.introDivider}>/</span> SOFTWARE ENGINEER
        </p>
        <h1 id="hero-title" className={styles.title + " hero-enter"}>
          Hey, I&apos;m Loc.
          <br />
          <span>
            aka Colnat<span className={styles.period}>.</span>
          </span>
          <svg
            className={styles.underline}
            aria-hidden="true"
            viewBox="0 0 390 22"
            fill="none"
          >
            <path
              d="M5 14C70 3 153 8 204 10S316 18 385 5M42 20C153 10 256 11 351 15"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </h1>
        <p className={styles.position + " hero-enter"}>
          Backend mind.
          <br />
          <span>Full-stack hands.</span>
        </p>
        <p className={styles.description + " hero-enter"}>
          I make complex workflows feel a little simpler. Usually with NestJS,
          Spring Boot and React. Always with an eye on how the whole thing fits
          together.
        </p>
        <div className={styles.actions + " hero-enter"}>
          <ScrollButton targetId="projects" className={styles.primary}>
            See what I&apos;ve built <span aria-hidden="true">&#8599;</span>
          </ScrollButton>
        </div>
        <p className={styles.availability + " hero-enter"}>
          <span aria-hidden="true" /> Open to Software Engineer opportunities
        </p>
      </div>
      <HeroWorkbench />
      <a href="#projects" className={styles.scroll}>
        <span aria-hidden="true">&#8627;</span> A few things I&apos;ve put into
        the world
      </a>
    </section>
  );
}
