import { Industries } from "./types";
import { ReactElement, useEffect } from "react";
import { Check } from "lucide-react";
import sectorHospitality from "@/assets/sectors/sectorHospitality.png";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.png";
import sectorTransport from "@/assets/sectors/sectorTransport.png";
import sectorEvents from "@/assets/sectors/sectorEvents.png";
import sectorRetail from "@/assets/sectors/sectorRetail.png";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import { useLocation } from "react-router-dom";

const ServiceIndustries = (): ReactElement => {
  const { t } = useTranslation();
  const location = useLocation();
  useEffect(() => {
    const passedId = location.state?.value;
    const element = document.getElementById(passedId);
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  }, [location.state?.value]);
  const serviceIndustries: Industries[] = [
    {
      title: t(LocalizationKey.services.retail.title),
      subTitle: t(LocalizationKey.services.retail.subtitle),
      image: sectorRetail,
      description: [
        t(LocalizationKey.services.description.retail[0]),
        t(LocalizationKey.services.description.retail[1]),
        t(LocalizationKey.services.description.retail[2]),
        t(LocalizationKey.services.description.retail[3]),
      ],
    },
    {
      title: t(LocalizationKey.services.hospitality.title),
      subTitle: t(LocalizationKey.services.hospitality.subtitle),
      image: sectorHospitality,
      description: [
        t(LocalizationKey.services.description.hospitality[0]),
        t(LocalizationKey.services.description.hospitality[1]),
        t(LocalizationKey.services.description.hospitality[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.healthcare.title),
      subTitle: t(LocalizationKey.services.healthcare.subtitle),
      image: sectorHealthCare,
      description: [
        t(LocalizationKey.services.description.healthcare[0]),
        t(LocalizationKey.services.description.healthcare[1]),
        t(LocalizationKey.services.description.healthcare[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.transport.title),
      subTitle: t(LocalizationKey.services.transport.subtitle),
      image: sectorTransport,
      description: [
        t(LocalizationKey.services.description.transport[0]),
        t(LocalizationKey.services.description.transport[1]),
        t(LocalizationKey.services.description.transport[2]),
      ],
    },
    {
      title: t(LocalizationKey.services.events.title2),
      subTitle: t(LocalizationKey.services.events.subtitle),
      image: sectorEvents,
      description: [
        t(LocalizationKey.services.description.events[0]),
        t(LocalizationKey.services.description.events[1]),
        t(LocalizationKey.services.description.events[2]),
      ],
    },
  ];

  return (
    <section className="space-y-10">
      <div className="flex flex-col space-y-5 text-center">
        <Label
          variant="banner"
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
        >
          {t(LocalizationKey.services.sectorHeading)}
        </Label>
        <Label variant="subtitle">
          {t(LocalizationKey.services.sectorSubHeading)}
        </Label>
      </div>
      {/* desktop view */}
      {serviceIndustries.map((data, index) => (
        <div
          className={cn("hidden lg:flex", index % 2 === 0 ? "pr-10" : "pl-10")}
          key={index}
          id={index === 3 ? "Events" : data.title}
        >
          <div
            className={cn(
              "flex w-full border-t-4 border-green-500 bg-green-500/25",
              index % 2 !== 0 && "flex-row-reverse",
            )}
          >
            <img
              src={data.image}
              className={cn(
                "min-h-[35rem] w-[52%] object-cover",
                index % 2 === 0 ? "rounded-br-[15rem]" : "rounded-tl-[15rem]",
              )}
            />
            <div className="flex w-[48%] flex-col space-y-5 p-5">
              <Label variant="title">{data.title}</Label>
              <Label variant="subtitle">{data.subTitle}</Label>
              {data.description.map((data, index) => (
                <div className="flex w-full gap-5" key={index}>
                  <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                    <Check color="white" />
                  </div>

                  <Label variant="subtitle" className="w-full">
                    {data}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {/* desktop view */}
      {/* mobile view */}
      {serviceIndustries.map((data, index) => (
        <div
          className={cn(
            "flex w-full flex-col border-b-4 border-green-500 bg-green-500/25 lg:hidden",
          )}
          key={index}
          id={index === 3 ? "Events" : data.title}
        >
          <img
            src={data.image}
            className={cn(
              "h-full w-full object-cover",
              index % 2 === 0 ? "rounded-br-[6rem]" : "rounded-bl-[6rem]",
            )}
          />
          <div className="flex w-full flex-col space-y-5 p-5">
            <Label variant="title" className="text-center">
              {data.title}
            </Label>
            <Separator
              orientation="horizontal"
              className="border-2 border-green-500"
            />
            <Separator orientation="vertical" className="" />
            <Label variant="subtitle">{data.subTitle}</Label>
            {data.description.map((data, index) => (
              <div className="flex w-full gap-5" key={index}>
                <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                  <Check color="white" />
                </div>

                <Label variant="subtitle" className="w-full">
                  {data}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* mobile view */}
    </section>
  );
};

export default ServiceIndustries;
