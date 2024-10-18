import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

import bgImg from "@/assets/modern-man-using-smartphone-city-2.png";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "@/components";
import { IconName } from "@/components/svg-icons/utils";

interface ServiceCardProps {
  icon: string;
  label: string;
}
const items: ServiceCardProps[] = [
  {
    icon: "ic_free",
    label: "home.freeUseOfEquipment.label",
  },
  {
    icon: "ic_sale",
    label: "home.freeUseOfEquipment.label",
  },
];

const Services = (): ReactElement => {
  const { t } = useTranslation();

  const renderCard = (items: ServiceCardProps, ids: number): ReactElement => {
    return (
      <Card
        key={ids}
        className="relative rounded-3xl border-green-100 bg-green-50 bg-gradient-to-b from-green-100 p-12 shadow-2xl"
      >
        <CardContent className="flex flex-col items-center p-6 pt-12">
          <div className="absolute left-6 top-0 hidden h-16 w-16 -translate-y-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 lg:block" />

          <div className="absolute -bottom-9 right-16 hidden h-24 w-24 translate-x-1/2 transform rounded-lg bg-green-200 bg-gradient-to-r from-green-300 to-transparent lg:block" />

          <div className="z-10 mb-4 rounded-full bg-green-500 p-3">
            <SvgIcons name={items.icon as IconName} size={100} />
          </div>

          <Label className="text-center text-2xl font-semibold">
            {t(items.label)}
          </Label>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="h-fit w-full">
      <section className="relative h-full w-full overflow-hidden lg:h-[80vh]">
        <img
          src={bgImg}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#33E72A] to-transparent" />

        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32 lg:px-0">
          <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
            24/7 SUPPORT
          </Label>
          <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
            REAL-TIME MONITORING
          </Label>
          <Label className="font-staatliches text-5xl tracking-wider text-white md:text-6xl lg:text-8xl">
            EASY TO USE
          </Label>
        </div>
      </section>

      <section className="container relative -top-20 mx-auto w-full space-y-20 rounded-3xl bg-white p-10 text-center shadow-2xl drop-shadow-2xl lg:-top-52 lg:p-32">
        <Label variant={"heading1"} className="text-black">
          {t(LocalizationKey.home.weOfferServicesThatFitsYourNeeds)}
        </Label>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {items.map((item, ids) => renderCard(item, ids))}
        </div>
      </section>
    </section>
  );
};

export default Services;
