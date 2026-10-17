"use client";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    // Keep content visible without JS and when already inside the viewport.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const show = () => {
      if (media.matches) {
        element.dataset.reveal = "visible";
        observer.disconnect();
      }
    };
    const focus = () => {
      element.dataset.reveal = "visible";
      observer.disconnect();
    };
    media.addEventListener("change", show);
    element.addEventListener("focusin", focus);
    return () => {
      element.dataset.reveal = "visible";
      observer.disconnect();
      media.removeEventListener("change", show);
      element.removeEventListener("focusin", focus);
    };
  }, []);
  return (
    <div
      ref={ref}
      className={"reveal " + className}
      style={{ "--reveal-delay": delay + "ms" } as CSSProperties}
    >
      {children}
    </div>
  );
}
export function ReadingProgress() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance =
          document.documentElement.scrollHeight - window.innerHeight;
        if (progress.current)
          progress.current.style.transform =
            "scaleX(" +
            Math.min(
              1,
              Math.max(0, distance > 0 ? window.scrollY / distance : 0),
            ) +
            ")";
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const resize = new ResizeObserver(update);
    resize.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
