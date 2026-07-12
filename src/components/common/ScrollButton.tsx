"use client";

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

interface ScrollButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  targetId: string;
}

const ScrollButton = ({
  children,
  targetId,
  onClick,
  ...props
}: ScrollButtonProps) => {
  const handleScroll = (event: MouseEvent<HTMLButtonElement>) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    onClick?.(event);
  };

  return (
    <button
      className="cursor-pointer"
      {...props}
      onClick={handleScroll}
      type="button"
    >
      {children}
    </button>
  );
};

export default ScrollButton;
