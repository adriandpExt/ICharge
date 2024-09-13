import { Zap } from "lucide-react";

export const Footer = () => {
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
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-400">
            © 2024 Quanta Dance, Inc
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
