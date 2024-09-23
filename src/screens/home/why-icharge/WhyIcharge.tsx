import Like from "@/assets/like.png";
import CostEffective from "@/assets/costeffective.svg";
import Convenience from "@/assets/convenience.svg";
import FLexible from "@/assets/flexible.svg";
import { Label } from "@/components/ui/label";
export default function WhyICharge() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-center text-4xl font-bold sm:text-5xl lg:text-6xl">
        WHY{" "}
        <Label variant={"default"} className="text-5xl lg:text-6xl">
          <span className="text-green-500">I</span>
          <span className="text-black">Charge?</span>
        </Label>
      </h1>

      <div className="space-y-24 sm:space-y-36">
        <div
          className="flex flex-col items-center gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={Convenience}
              alt="Convenience"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Convenience
            </h2>
            <p className="text-base sm:text-lg lg:text-xl">
              Offering rentable power banks enhances the convenience of your
              location, which can lead to increased foot traffic, longer and
              frequent visits.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-8 sm:flex-row-reverse"
          data-aos="fade-up"
        >
          <div className="round flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={CostEffective}
              alt="Cost-effective"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-right">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Cost-effective
            </h2>
            <p className="text-base sm:text-lg lg:text-xl">
              At a very low cost of P19.00 per 30 minutes, patrons will be
              encouraged to stay longer and enjoy more of what your venue has to
              offer, thereby boosting overall customer satisfaction.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-8 sm:flex-row"
          data-aos="fade-up"
        >
          <div className="flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <img
              src={FLexible}
              alt="Flexible"
              className="h-full w-full text-green-600"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="mb-4 text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Flexible
            </h2>
            <p className="text-base sm:text-lg lg:text-xl">
              iCharge works to effortlessly and seamlessly integrate with a wide
              range of businesses and venues, offering reliable and flexible
              support no matter the location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
