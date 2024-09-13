import powerbank from "@/assets/Products/powerbank.png";

const HeroSection = () => {
  return (
    <section className="mx-auto grid h-screen w-10/12 place-items-center gap-10 py-20 pb-5 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <div className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="text-green-500">i</span>
            <span className="inline text-gray-600 dark:text-gray-400">
              Charge
            </span>
          </h1>

          <br />

          <h2 className="inline text-gray-600 dark:text-gray-400">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Powered
            </span>
          </h2>

          <br />

          <h2 className="inline text-gray-600 dark:text-gray-400">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
        </div>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          icharge offers a one-stop self-service mobile power bank rental
          service, providing a solution for charging your mobile devices while
          on the go.
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <a
            rel="noreferrer noopener"
            href="#cta"
            className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:w-1/3"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="hidden space-y-6 text-center lg:flex lg:text-start">
        <img src={powerbank} alt="powerbank" className="h-[608px] w-[302px]" />
      </div>
    </section>
  );
};

export default HeroSection;
