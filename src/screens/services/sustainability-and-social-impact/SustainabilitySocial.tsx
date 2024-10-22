import { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

const SustainabilitySocial = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col space-y-10 px-20 text-center">
      <div className="flex flex-col space-y-5 border border-solid border-[#78e996] p-8 text-center">
        <Label variant="title" className="text-[#2C7A3B]">
          Sustainability and Social Impact
        </Label>
        <Label
          variant="subtitle"
          className="overflow-hidden text-ellipsis text-center"
        >
          {t(LocalizationKey.serviceSustainabilitySocial.body)}
        </Label>
      </div>
    </section>
  );
};

export default SustainabilitySocial;
