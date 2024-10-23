import { Industries } from "./types";
import { ReactElement, useEffect } from "react";
import { Check } from "lucide-react";
import sectorHospitality from "@/assets/sectors/sectorHospitality.png";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.jpg";
import sectorTransport from "@/assets/sectors/sectorTransport.jpg";
import sectorEvents from "@/assets/sectors/sectorEvents.jpg";
import sectorRetail from "@/assets/sectors/sectorRetail.jpg";
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
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state?.value]);
  const serviceIndustries: Industries[] = [
    {
      title: t(LocalizationKey.sectors.hospitality.label),
      subTitle: t(LocalizationKey.sectors.hospitality.subtitle),
      image: sectorHospitality,
      description: [
        t(LocalizationKey.sectors.description.hospitality[0]),
        t(LocalizationKey.sectors.description.hospitality[1]),
        t(LocalizationKey.sectors.description.hospitality[2]),
      ],
    },
    {
      title: t(LocalizationKey.sectors.healthcare.label),
      subTitle: t(LocalizationKey.sectors.healthcare.subtitle),
      image: sectorHealthCare,
      description: [
        t(LocalizationKey.sectors.description.healthcare[0]),
        t(LocalizationKey.sectors.description.healthcare[1]),
        t(LocalizationKey.sectors.description.healthcare[2]),
      ],
    },
    {
      title: t(LocalizationKey.sectors.transport.label),
      subTitle: t(LocalizationKey.sectors.transport.subtitle),
      image: sectorTransport,
      description: [
        t(LocalizationKey.sectors.description.transport[0]),
        t(LocalizationKey.sectors.description.transport[1]),
        t(LocalizationKey.sectors.description.transport[2]),
      ],
    },
    {
      title: t(LocalizationKey.sectors.events.label2),
      subTitle: t(LocalizationKey.sectors.events.subtitle),
      image: sectorEvents,
      description: [
        t(LocalizationKey.sectors.description.events[0]),
        t(LocalizationKey.sectors.description.events[1]),
        t(LocalizationKey.sectors.description.events[2]),
      ],
    },
    {
      title: t(LocalizationKey.sectors.retail.label),
      subTitle: t(LocalizationKey.sectors.retail.subtitle),
      image: sectorRetail,
      description: [
        t(LocalizationKey.sectors.description.retail[0]),
        t(LocalizationKey.sectors.description.retail[1]),
        t(LocalizationKey.sectors.description.retail[2]),
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
          INDUSTRIES WE SERVE
        </Label>
        <Label variant="subtitle">Powering Anyone, Anytime, Anywhere</Label>
      </div>
      {/* desktop view */}
      {serviceIndustries.map((data, index) => (
        <div
          className={cn("hidden md:flex", index % 2 === 0 ? "pr-10" : "pl-10")}
          key={index}
          id={index === 3 ? "Events" : data.title}
        >
          <div
            className={cn(
              "flex w-full border-t-4 border-green-500 bg-green-500/25 md:h-[25rem] lg:h-[30rem]",
              index % 2 !== 0 && "flex-row-reverse",
            )}
          >
            <img
              src={data.image}
              className={cn(
                "h-full w-[52%] object-cover",
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
            "flex w-full flex-col border-b-4 border-green-500 bg-green-500/25 md:hidden",
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
