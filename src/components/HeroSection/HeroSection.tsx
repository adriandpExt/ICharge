import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid h-screen w-10/12 place-items-center gap-10 py-20 pb-5 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
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
        </main>
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

      <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
        <div className="absolute -top-[15px] w-[340px] rounded-lg border bg-card text-card-foreground shadow-sm shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <div className="flex flex-row items-center gap-4 space-y-1.5 p-6 pb-2">
            <img
              height="28px"
              alt="icharge 12"
              className="h-[128px] object-cover"
              src="/products/qcdd-0510.png"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold tracking-tight">
                icharge 12
              </h3>
              <p className="text-sm text-muted-foreground">
                12-port charging station
              </p>
            </div>
          </div>
          <div className="p-6 pb-2 pt-0 text-sm">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Maximum power consumption: 0.4KWh/d
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Size: 310x310x355mm
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Weight: 6.12KG
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute right-[20px] top-4 flex w-80 flex-col items-center justify-center rounded-lg border bg-card text-card-foreground shadow-sm shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <div className="mt-20 flex flex-col items-center justify-center space-y-1.5 p-6 pb-2">
            <img
              src="/products/qcddads-0316.png"
              alt="icharge 12 Pro"
              className="absolute -top-24 aspect-square h-48 w-48 rounded-full object-cover grayscale-[0%]"
            />
            <h3 className="text-center text-2xl font-semibold leading-none tracking-tight">
              icharge 12 Pro
            </h3>
            <p className="text-sm font-normal text-primary">
              12-port charging station with advertising
            </p>
          </div>
          <div className="p-6 pb-1 pt-0 text-sm">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Max power consumption: 0.5KWh/d
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Size: 315x293x455mm
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check mr-1 inline size-5 text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                Weight: 5.77KG
              </li>
            </ul>
          </div>
          <div className="flex items-center p-6 pb-2 pt-0">
            <div>
              <a
                rel="noreferrer noopener"
                href="https://www.facebook.com/profile.php?id=61558465776154"
                target="_blank"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="sr-only">Facebook Icon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="tabler-icon tabler-icon-brand-facebook-filled size-5"
                >
                  <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"></path>
                </svg>
              </a>
              <a
                rel="noreferrer noopener"
                href="https://www.tiktok.com/@keep_icharge"
                target="_blank"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="sr-only">TikTok Icon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  className="tabler-icon tabler-icon-brand-tiktok-filled size-5"
                >
                  <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z"></path>
                </svg>
              </a>
              <a
                rel="noreferrer noopener"
                href="https://www.instagram.com/keep_icharge/"
                target="_blank"
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                <span className="sr-only">Instagram Icon</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-instagram size-5"
                >
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-[50px] top-[240px] w-72 rounded-lg border bg-card text-card-foreground shadow-sm shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="item-center flex justify-between text-2xl font-semibold leading-none tracking-tight">
              Payment
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Most popular
              </div>
            </h3>
            <p className="text-sm text-muted-foreground">
              Support popular payment solutions that customers already love
            </p>
          </div>
          <div className="p-6 pt-0">
            <a
              rel="noreferrer noopener"
              href="#cta"
              className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Partner with Us
            </a>
          </div>
          <hr className="m-auto mb-4 w-4/5" />
          <div className="flex items-center p-6 pt-0">
            <div className="space-y-4">
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <h3 className="ml-2">Maya Pay</h3>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <h3 className="ml-2">GCash</h3>
              </span>
              <span className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-check text-green-500"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <h3 className="ml-2">Gray Pay</h3>
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -right-[10px] bottom-[-20px] w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm shadow-black/10 drop-shadow-xl dark:shadow-white/10">
          <div className="flex flex-col items-start justify-start gap-4 space-y-1 p-6 md:flex-row">
            <div className="mt-1 rounded-2xl bg-primary/20 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                className="tabler-icon tabler-icon-bulb-filled size-12 text-green-600"
              >
                <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
                <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"></path>
                <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
                <path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z"></path>
                <path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z"></path>
                <path d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z"></path>
                <path d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Power your shops with icharge
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Wide-ranging charging products to fit your specification. Native
                iOS and Android apps backed by popular payment solutions that
                customers already love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
