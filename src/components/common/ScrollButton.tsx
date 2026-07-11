"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ScrollButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  targetId: string;
}

const ScrollButton = ({ children, targetId, ...props }: ScrollButtonProps) => {
  const handleScroll = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button {...props} onClick={handleScroll} type="button">
      {children}
    </button>
  );
};

export default ScrollButton;
