import { Label } from "@/components/ui/label";
import SustainablityCard from "./component/SustainablityCard";

const Sustainabilities = () => {
  return (
    <section className="pt-[43vh]">
      <main className="absolute inset-0 h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label className="text-3xl font-bold text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            Sustainability shiTTTTTTTTTTTT
          </Label>

          <Label className="md:text-md mb-6 text-start text-sm text-white sm:mb-8 lg:text-2xl">
            At ICharge, we are all about doing business the right way. Beyond
            offering a cutting-edge power bank sharing service, we are on a
            mission to use our influence for good. Our commitment to
            sustainability is not just a tagline; it's about making sure we run
            things responsibly and ethically in our day-to-day operations.
          </Label>
        </div>
      </main>

      <main className="relative mt-20 px-5 pb-10 sm:mt-24 md:mt-32 lg:mt-36 xl:mt-40">
        <div className="container mx-auto grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          <SustainablityCard />
          <SustainablityCard />
          <SustainablityCard />
          <SustainablityCard />
          <SustainablityCard />
          <SustainablityCard />
        </div>
      </main>
    </section>
  );
};

export default Sustainabilities;
