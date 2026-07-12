import { cn } from "@/libs/utils";

interface FooterProps {
  className?: string;
}

const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer
      className={cn("bg-[#1A0B2E] text-white", className)}
      id="contact"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-medium tracking-[0.2em] text-violet-300">
            CONTACT
          </p>
          <h2 className="text-2xl font-bold sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="text-base leading-7 text-violet-100/80">
            I&apos;m actively seeking remote, hybrid, and on-site Software
            Engineer opportunities where I can apply my experience building
            scalable applications with TypeScript, NestJS, React.js, Next.js.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            aria-label="Email tanlocnguyendev@gmail.com"
            className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-violet-500/10 text-violet-100 transition-colors hover:bg-violet-500 hover:text-white"
            href="mailto:tanlocnguyendev@gmail.com"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <rect height="16" rx="2" width="20" x="2" y="4" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>
          <a
            aria-label="LinkedIn profile"
            className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-violet-500/10 text-violet-100 transition-colors hover:bg-violet-500 hover:text-white"
            href="https://www.linkedin.com/in/tanlocnguyendev/"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.04h3.57V8.98H3.54v11.47Z" />
            </svg>
          </a>
          <a
            aria-label="GitHub profile"
            className="grid h-12 w-12 place-items-center rounded-full border border-violet-400/50 bg-violet-500/10 text-violet-100 transition-colors hover:bg-violet-500 hover:text-white"
            href="https://github.com/colnat412"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.54 9.54 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.91.68 1.84v2.74c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
