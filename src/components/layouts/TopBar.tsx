import { cn } from "@/libs/utils";

interface TopBarProps {
  className?: string;
}

const TopBar = (props: TopBarProps) => {
  const { className } = props;
  return (
    <header
      className={cn(
        "flex w-full pl-20 pr-50 justify-between items-center bg-[#1A0B2E] shadow-[0_6px_22px_-3px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <a className="cursor-pointer text-2xl text-white" href="#home">
        COLNAT
      </a>
      <nav aria-label="Main navigation" className="flex h-28 items-center gap-25">
        <a className="cursor-pointer text-white" href="#home">
          Home
        </a>
        <a className="cursor-pointer text-white" href="#work-experience">
          About
        </a>
        <a className="cursor-pointer text-white" href="#projects">
          Projects
        </a>
        <a className="cursor-pointer text-white" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default TopBar;
