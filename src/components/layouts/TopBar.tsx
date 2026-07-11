import { cn } from "@/libs/utils";
import ScrollButton from "@/components/common/ScrollButton";

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
      <ScrollButton className="cursor-pointer text-2xl text-white" targetId="home">
        COLNAT
      </ScrollButton>
      <nav
        aria-label="Main navigation"
        className="flex h-28 items-center gap-25"
      >
        <ScrollButton className="cursor-pointer text-white" targetId="home">
          Home
        </ScrollButton>
        <ScrollButton
          className="cursor-pointer text-white"
          targetId="work-experience"
        >
          About
        </ScrollButton>
        <ScrollButton className="cursor-pointer text-white" targetId="projects">
          Projects
        </ScrollButton>
        <a
          className="cursor-pointer text-white"
          href="/SofwareEngineer_NguyenTanLoc.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Resume
        </a>
        <ScrollButton className="cursor-pointer text-white" targetId="contact">
          Contact
        </ScrollButton>
      </nav>
    </header>
  );
};

export default TopBar;
