import { ArrowRight } from "lucide-react";
import stayPoweredLogo from "@/assets/stayPoweredLogo.png";

export default function Component() {
  return (
    <div className="mx-min-h-[600px] w-full overflow-hidden bg-[#006400] px-4 py-8">
      <div className="container mx-auto flex h-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <img
            src={stayPoweredLogo}
            alt="iCharge devices"
            className="mx-auto h-[500px] w-full object-contain"
          />
        </div>

        {/* Text content */}
        <div className="w-full text-center text-white md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            STAY POWERED WITH ICHARGE
          </h2>
          <p className="mb-6 text-base md:text-lg">
            Convenient, reliable charging solutions for all your devices,
            wherever you go.
          </p>
          <button className="mx-auto flex items-center rounded-full bg-white px-6 py-2 font-semibold text-[#006400] transition-colors hover:bg-opacity-90 md:mx-0">
            View Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
