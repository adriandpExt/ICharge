import { Label } from "@/components/ui/label";
import SustainablityCard from "./component/SustainablityCard";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const Sustainabilities = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-[43vh]">
      <main className="absolute inset-0 h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label variant={"title"} className="text-white sm:mb-6">
            {t(LocalizationKey.sustainability.sustainabilityHeading)}
          </Label>

          <Label
            variant={"subtitle"}
            className="mb-6 text-start text-white sm:mb-8"
          >
            {t(LocalizationKey.sustainability.sustainabilitySubHeading)}
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
