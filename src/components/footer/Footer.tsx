import { Zap } from "lucide-react";

export const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <footer className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8 sm:flex-row sm:items-start sm:justify-between sm:space-x-8 sm:space-y-0">
          <div className="flex flex-col items-center sm:items-start">
            <Zap className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-2xl font-bold text-gray-800">
              icharge
            </span>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Follow US
            </h3>
            <ul className="flex flex-col items-center space-y-2 sm:items-start">
              {["Facebook", "TikTok", "Instagram"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Platforms
            </h3>
            <ul className="flex flex-col items-center space-y-2 sm:items-start">
              {["Web", "iOS", "Android"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              About
            </h3>
            <ul className="flex flex-col items-center space-y-2 sm:items-start">
              {["Features", "FAQ"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 text-center md:col-span-2 lg:col-span-1 lg:text-start">
            <Label className="mb-4 text-2xl font-bold">
              Stay in the loop with everything you need to know.
            </Label>
            <div>
              <Label className="mb-4">Join our newsletter</Label>
            </div>
            <div className="grid-col grid gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="border-green-700 bg-white text-black"
              />
              <Button variant={"default"}>
                Subscribe <ArrowRight />
              </Button>
            </div>
            <div className="al mt-5 grid grid-cols-1 place-items-center lg:text-start">
              <Label className="mb-1 text-left text-xl font-semibold">
                Download the App
              </Label>
              <div className="flex">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.phl.charge"
                  target="_blank"
                  className="mr-1"
                >
                  <img
                    src={playstore}
                    alt="Google Play"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
                <Link
                  to="https://apps.apple.com/us/app/icharge-ph/id6478515634"
                  target="_blank"
                >
                  <img
                    src={applestore}
                    alt="App Store"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-400">
            © 2024 Quanta Dance, Inc
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p>&copy; 2024 Quanta Dance, Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
