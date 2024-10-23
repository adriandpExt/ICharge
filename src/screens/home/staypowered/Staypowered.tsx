import { ArrowRight } from "lucide-react";
import stayPoweredLogo from "@/assets/stayPoweredLogo.png";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="mx-min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-green-900 to-green-600 px-4 py-8">
      <div className="container mx-auto flex h-full flex-col items-center justify-between gap-10 md:flex-row">
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <img
            src={stayPoweredLogo}
            alt="iCharge devices"
            className="mx-auto h-[300px] w-full object-contain lg:h-[500px]"
          />
        </div>
        <div className="w-full text-center text-white md:w-1/2 md:text-left">
          <Label className="mb-4 text-3xl font-bold md:text-4xl">
            STAY POWERED WITH ICHARGE
          </Label>
          <br />
          <Label className="mb-6 text-base md:text-lg">
            Convenient, reliable charging solutions for all your devices,
            wherever you go.
          </Label>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center rounded-md bg-white px-4 py-2 font-semibold text-green-500 transition-colors duration-300 hover:bg-green-500 hover:text-white">
              <Label>View Products</Label>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
