import Me from "./Me";

const AboutMe = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-12 text-white sm:gap-10 sm:px-6 sm:py-16 lg:flex-row lg:gap-20 lg:px-10 lg:py-24"
      id="home"
    >
      <div className="shrink-0">
        <Me className="h-auto w-44 sm:w-56 lg:w-64" />
      </div>

      <div className="w-full space-y-5 text-center lg:text-left">
        <p className="text-sm font-medium tracking-[0.2em] text-violet-300">
          Hello I'm
        </p>
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          LOC NGUYEN TAN (Colnat)
        </h1>
        <h2 className="text-xl font-medium text-violet-200 sm:text-2xl">
          SOFTWARE ENGINEER
        </h2>
        <p className="max-w-2xl text-base leading-7 text-violet-100/80">
          Software Engineer building clean and scalable web applications.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
