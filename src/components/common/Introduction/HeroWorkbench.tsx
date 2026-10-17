"use client";
import { useState } from "react";
import Me from "./Me";
import styles from "./PersonalCanvas.module.css";
const specialties = [
  {
    id: "backend",
    name: "Backend",
    tools: "NestJS / Spring Boot",
    detail:
      "APIs, application services and permissions. The part that keeps everything connected.",
    glyph: "{ }",
  },
  {
    id: "frontend",
    name: "Frontend",
    tools: "React.js / Next.js",
    detail:
      "Dashboards and business workflows, shaped into interfaces people can actually use.",
    glyph: "[ ]",
  },
  {
    id: "data",
    name: "Data",
    tools: "MySQL / PostgreSQL / Redis",
    detail:
      "Queries, persistence and real-time features. Making the data work as hard as the interface.",
    glyph: "</>",
  },
] as const;
export default function HeroWorkbench() {
  const [selected, setSelected] = useState<(typeof specialties)[number]>(
    specialties[0],
  );
  return (
    <div className={styles.canvas}>
      <div className={styles.art}>
        <svg
          className={styles.doodles}
          aria-hidden="true"
          viewBox="0 0 540 410"
          fill="none"
        >
          <path
            d="M37 174C2 115 32 67 93 85M75 71L96 85L75 97M441 49L448 66L468 68L452 80L455 100L440 88L423 96L429 77L417 63L437 66ZM470 288C507 263 522 294 492 311C468 323 480 339 507 337M35 318L60 339M37 341L61 316"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M105 370C180 387 364 394 425 356"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 8"
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.sticky}>
          behind the code,
          <br />
          <strong>there&apos;s a person.</strong>
        </span>
        <div className={styles.portrait}>
          <Me aria-hidden="true" />
          <span className={styles.signature}>
            Colnat<span aria-hidden="true">&#10022;</span>
          </span>
        </div>
        <span className={styles.sideNote}>
          a work in progress.
          <br />
          always building.
        </span>
        <span className={styles.codeSticker} aria-hidden="true">
          &lt;/&gt;
        </span>
        <span className={styles.smallStar} aria-hidden="true">
          &#10022;
        </span>
      </div>
      <div className={styles.notes}>
        <span className={styles.tape} aria-hidden="true" />
        <div className={styles.noteHeader}>
          <span>A PEEK INTO MY TOOLBOX</span>
          <span aria-hidden="true">&#8600;</span>
        </div>
        <div
          className={styles.specialties}
          role="group"
          aria-label="Explore engineering specialties"
        >
          {specialties.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected.id === item.id}
              aria-label={item.name + " specialty"}
              onClick={() => setSelected(item)}
            >
              <span aria-hidden="true">{item.glyph}</span>
              {item.name}
            </button>
          ))}
        </div>
        <div className={styles.focus} aria-live="polite">
          <h2>{selected.tools}</h2>
          <p>{selected.detail}</p>
        </div>
        <a className={styles.currentRole} href="#work-experience">
          <span>Currently building at</span> Hanbiro Vietnam{" "}
          <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </div>
  );
}
