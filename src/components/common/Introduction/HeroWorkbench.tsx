"use client";

import { useState, type CSSProperties } from "react";
import styles from "./PersonalCanvas.module.css";

const files = [
  {
    name: "profile.ts",
    language: "TypeScript",
    symbol: "TS",
    lines: [
      "// A little introduction, in code.",
      "export const engineer = {",
      '  name: "Nguyen Tan Loc",',
      '  alias: "Colnat",',
      '  role: "Software Engineer",',
      "",
      '  focus: ["Backend", "Full-stack"],',
      '  currentlyAt: "Hanbiro Vietnam",',
      "  openToOpportunities: true,",
      "};",
    ],
  },
  {
    name: "stack.json",
    language: "JSON",
    symbol: "{ }",
    lines: [
      "{",
      '  "backend": [',
      '    "NestJS", "Spring Boot"',
      "  ],",
      '  "frontend": ["React", "Next.js"],',
      '  "languages": ["TypeScript", "Java"],',
      '  "data": [',
      '    "PostgreSQL", "MySQL", "Redis"',
      "  ]",
      "}",
    ],
  },
  {
    name: "approach.md",
    language: "Markdown",
    symbol: "M↓",
    lines: [
      "# From problem to product",
      "",
      "01  Understand the workflow.",
      "02  Design the data and APIs.",
      "03  Build the experience.",
      "04  Test the important paths.",
      "05  Refine the details.",
      "",
      "> Keep learning. Keep building.",
      "",
    ],
  },
];

function highlight(line: string) {
  return line.split(/("[^"]*"|\/\/.*|\b(?:export|const|true)\b)/g).map((part, index) => {
    const className = part.startsWith("//")
      ? styles.comment
      : part.startsWith('"')
        ? styles.string
        : /^(export|const|true)$/.test(part)
          ? styles.keyword
          : undefined;
    return <span key={index} className={className}>{part}</span>;
  });
}

export default function HeroWorkbench() {
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const file = files[selected];

  return (
    <div className={styles.canvas} data-paused={paused}>
      <div className={styles.editorChrome}>
        <span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span>
        <span>colnat / workspace</span>
        <button
          type="button"
          aria-pressed={paused}
          aria-label={paused ? "Resume animation" : "Pause animation"}
          onClick={() => setPaused(!paused)}
        >
          {paused ? "Play ▷" : "Pause Ⅱ"}
        </button>
      </div>
      <div className={styles.fileTabs} role="group" aria-label="Explore my developer profile">
        {files.map((item, index) => (
          <button key={item.name} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>
            <span aria-hidden="true">{item.symbol}</span>{item.name}
          </button>
        ))}
      </div>
      <div className={styles.breadcrumb} aria-hidden="true">portfolio <span>/</span> about <span>/</span> {file.name}</div>
      <div className={styles.codeViewport} role="region" aria-label={`${file.name} code preview`} tabIndex={0}>
        <pre className={styles.code} key={file.name}><code>
          {file.lines.map((line, index) => (
            <span className={styles.codeLine} key={index} style={{ "--line-delay": `${index * 65}ms` } as CSSProperties}>
              <span className={styles.lineNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span>{highlight(line)}{index === file.lines.length - 1 && <span className={styles.caret} aria-hidden="true" />}{"\n"}</span>
            </span>
          ))}
        </code></pre>
      </div>
      <div className={styles.editorStatus}><span><i aria-hidden="true" /> Code sketch</span><span>{file.language} <span aria-hidden="true">·</span> UTF-8</span></div>
      <div className={styles.workspaceFooter}>
        <div><span className={styles.footerLabel}>BEHIND THE CODE</span><p>Backend mind. Full-stack hands.</p></div>
        <a href="https://github.com/colnat412" target="_blank" rel="noreferrer" aria-label="Explore Colnat on GitHub (opens in a new tab)">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  );
}
