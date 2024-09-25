import CostEffective from "@/assets/costeffective.svg";
import Convenience from "@/assets/convenience.svg";
import FLexible from "@/assets/flexible.svg";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import { PageContainer } from "@/components";
export default function WhyICharge() {
  const { t } = useTranslation();

  return (
    <PageContainer className="flex flex-col sm:px-6 lg:px-8">
      <Label className="mb-12 text-center text-4xl sm:text-5xl lg:text-6xl">
        {t(LocalizationKey.home.whyIcharge)}
        <span className="font-poppins text-4xl text-green-500 sm:text-5xl lg:text-6xl">
          I
        </span>
        Charge
      </Label>

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
            <Label className="mb-4 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Convenience
            </Label>
            <Label
              variant="default"
              className="text-base sm:text-lg lg:text-xl"
            >
              {t(LocalizationKey.home.convenience)}
            </Label>
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
            <Label className="mb-4 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Cost-effective
            </Label>
            <Label className="text-base sm:text-lg lg:text-xl">
              {t(LocalizationKey.home.costEffective)}
            </Label>
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
            <Label className="mb-4 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Flexible
            </Label>
            <Label className="text-base sm:text-lg lg:text-xl">
              {t(LocalizationKey.home.flexible)}
            </Label>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
