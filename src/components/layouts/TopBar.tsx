"use client";

import ScrollButton from "@/components/common/ScrollButton";
import { cn } from "@/libs/utils";
import { useState } from "react";

interface TopBarProps {
  className?: string;
}

const TopBar = (props: TopBarProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const itemClassName =
    "cursor-pointer w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-violet-100 transition-colors md:w-auto md:px-2";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-[#1A0B2E]/95 shadow-[0_6px_22px_-3px_rgba(0,0,0,0.25)] backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-wrap items-center justify-between px-4 sm:px-6 md:min-h-20 lg:px-10">
        <ScrollButton
          className="cursor-pointer text-xl font-bold tracking-wide text-white sm:text-2xl"
          targetId="home"
        >
          COLNAT
        </ScrollButton>
        <button
          aria-controls="main-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="grid h-11 w-11 place-items-center rounded-lg text-violet-100 hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>
        <nav
          aria-label="Main navigation"
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-white/10 py-3 md:flex md:w-auto md:flex-row md:items-center md:gap-3 md:border-0 md:py-0 lg:gap-6`}
          id="main-navigation"
        >
          <ScrollButton
            className={itemClassName}
            onClick={closeMenu}
            targetId="home"
          >
            Home
          </ScrollButton>
          <ScrollButton
            className={itemClassName}
            onClick={closeMenu}
            targetId="work-experience"
          >
            About
          </ScrollButton>
          <ScrollButton
            className={itemClassName}
            onClick={closeMenu}
            targetId="projects"
          >
            Projects
          </ScrollButton>
          <a
            className={itemClassName}
            href="/SofwareEngineer_NguyenTanLoc.pdf"
            onClick={closeMenu}
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <ScrollButton
            className={itemClassName}
            onClick={closeMenu}
            targetId="contact"
          >
            Contact
          </ScrollButton>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
