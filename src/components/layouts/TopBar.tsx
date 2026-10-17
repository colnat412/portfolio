"use client";
import { RESUME_PATH } from "@/constants/data";
import { useEffect, useState } from "react";
import { cn } from "@/libs/utils";
const links = [
  { id: "home", label: "Overview" },
  { id: "work-experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
export default function TopBar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const update = () => {
      let current = "home";
      for (const { id } of links) {
        const section = document.getElementById(id);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.4
        )
          current = id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 8
      )
        current = "contact";
      setActive(current);
    };
    let frame = 0;
    const scroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const escape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        document
          .getElementById("menu-toggle")
          ?.getAttribute("aria-expanded") === "true"
      ) {
        setIsOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    window.addEventListener("keydown", escape);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      window.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className={cn("site-header", className)}>
      <div className="nav-shell">
        <a href="#home" className="wordmark" onClick={() => setIsOpen(false)}>
          colnat<span>.</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close -" : "Menu +"}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={isOpen ? "navigation is-open" : "navigation"}
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={"#" + link.id}
              aria-current={active === link.id ? "location" : undefined}
              className={active === link.id ? "nav-link active" : "nav-link"}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={RESUME_PATH}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume <span aria-hidden="true">&#8599;</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
