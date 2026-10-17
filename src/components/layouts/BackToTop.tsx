import ScrollButton from "@/components/common/ScrollButton";

const BackToTop = () => {
  return (
    <ScrollButton
      aria-label="Back to top"
      className="back-to-top"
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
