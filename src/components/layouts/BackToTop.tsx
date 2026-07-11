import ScrollButton from "@/components/common/ScrollButton";

const BackToTop = () => {
  return (
    <ScrollButton
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-[#1A0B2E]/95 text-violet-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-colors hover:bg-violet-500 hover:text-white sm:bottom-8 sm:right-8"
      targetId="home"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </ScrollButton>
  );
};

export default BackToTop;
