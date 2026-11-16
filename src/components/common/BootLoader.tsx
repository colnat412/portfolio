"use client";
import { useEffect, useRef, useState } from "react";
export default function BootLoader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const finish = useRef(false);
  const skipButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches)
      return;
    const content = document.getElementById("site-content");
    const previousFocus = document.activeElement;
    let disposed = false;
    let ready = false;
    let frame = 0;
    let completedAt = 0;
    let displayed = 0;
    const start = performance.now();
    const previousOverflow = document.body.style.overflow;
    content?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
    setVisible(true);
    // Wait for the page font; the percentage represents the intro sequence.
    Promise.allSettled([document.fonts.ready]).then(() => { ready = true; });
    const close = () => {
      if (disposed)
        return;
      disposed = true;
      setVisible(false);
      content?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      if (document.activeElement === skipButton.current) {
        if (previousFocus instanceof HTMLElement && previousFocus !== document.body)
          previousFocus.focus();
        else
          document.getElementById("main-content")?.focus({ preventScroll: true });
      }
    };
    const tick = (now: number) => {
      if (disposed)
        return;
      if (finish.current || media.matches) {
        close();
        return;
      }
      const elapsed = now - start;
      displayed = Math.max(displayed, Math.min(ready || elapsed > 2800 ? 100 : 92, Math.floor(elapsed / 14)));
      setProgress(displayed);
      if (displayed === 100) {
        if (!completedAt)
          completedAt = now;
        if (now - completedAt > 180) {
          close();
          return;
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      content?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  useEffect(() => { if (visible)
    skipButton.current?.focus({ preventScroll: true }); }, [visible]);
  if (!visible)
    return null;
  return (<div className="boot-loader" role="dialog" aria-modal="true" aria-label="Portfolio introduction" onKeyDown={(event) => {
    if (event.key === "Escape") finish.current = true;
    if (event.key === "Tab") {
     event.preventDefault();
     skipButton.current?.focus();
    }
   }}>
   <div className="boot-top"><span>COLNAT / SOFTWARE ENGINEER</span><span>INITIALIZING PORTFOLIO</span></div>
   <div className="boot-center">
    <p className="boot-label">{progress < 35 ? "01 / INITIALIZING INTERFACE" : progress < 75 ? "02 / PREPARING WORKSPACE" : "03 / READY TO EXPLORE"}</p>
    <p className="boot-number" aria-hidden="true">{String(progress).padStart(2, "0")}<span>%</span></p>
    <div className="boot-track" role="progressbar" aria-label="Introduction progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ transform: `scaleX(${progress / 100})` }}/></div>
    <div className="boot-bottom"><span>BACKEND MIND. FULL-STACK HANDS.</span><button ref={skipButton} type="button" onClick={() => { finish.current = true; }}>Skip intro ↗</button></div>
   </div>
   <span className="boot-footnote">THOUGHTFUL SYSTEMS. USEFUL SOFTWARE.</span>
  </div>);
}
