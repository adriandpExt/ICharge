import { Industries } from "./types";
import { ReactElement } from "react";
import { Check } from "lucide-react";
import sectorHospitality from "@/assets/sectors/sectorHospitality.png";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const ServiceIndustries = (): ReactElement => {
  const serviceIndustries: Industries[] = [
    {
      title: "HOSPITALITY",
      subTitle:
        "Elevate guest experiences in hotels, restaurants, coffee shops, and bars by offering convenient charging options that allow visitors to stay connected.",
      image: sectorHospitality,
      description: [
        "Enhances guest satisfaction, leading to positive reviews and repeat visits.",
        "Encourages guests to spend more time in common areas.",
        "Differentiates your business by offering a unique, customer-focused service.",
      ],
    },
    {
      title: "HOSPITALITY",
      subTitle:
        "Elevate guest experiences in hotels, restaurants, coffee shops, and bars by offering convenient charging options that allow visitors to stay connected.",
      image: sectorHospitality,
      description: [
        "Enhances guest satisfaction, leading to positive reviews and repeat visits.",
        "Encourages guests to spend more time in common areas.",
        "Differentiates your business by offering a unique, customer-focused service.",
      ],
    },
    {
      title: "HOSPITALITY",
      subTitle:
        "Elevate guest experiences in hotels, restaurants, coffee shops, and bars by offering convenient charging options that allow visitors to stay connected.",
      image: sectorHospitality,
      description: [
        "Enhances guest satisfaction, leading to positive reviews and repeat visits.",
        "Encourages guests to spend more time in common areas.",
        "Differentiates your business by offering a unique, customer-focused service.",
      ],
    },
    {
      title: "HOSPITALITY",
      subTitle:
        "Elevate guest experiences in hotels, restaurants, coffee shops, and bars by offering convenient charging options that allow visitors to stay connected.",
      image: sectorHospitality,
      description: [
        "Enhances guest satisfaction, leading to positive reviews and repeat visits.",
        "Encourages guests to spend more time in common areas.",
        "Differentiates your business by offering a unique, customer-focused service.",
      ],
    },
    {
      title: "HOSPITALITY",
      subTitle:
        "Elevate guest experiences in hotels, restaurants, coffee shops, and bars by offering convenient charging options that allow visitors to stay connected.",
      image: sectorHospitality,
      description: [
        "Enhances guest satisfaction, leading to positive reviews and repeat visits.",
        "Encourages guests to spend more time in common areas.",
        "Differentiates your business by offering a unique, customer-focused service.",
      ],
    },
  ];
  return (
    <section className="space-y-10">
      <div className="flex flex-col space-y-5 text-center">
        <Label variant="heading1">INDUSTRIES WE SERVE</Label>
        <Label variant="subtitle">Powering Anyone, Anytime, Anywhere</Label>
      </div>
      {/* desktop view */}
      {serviceIndustries.map((data, index) => (
        <div
          className={cn("hidden md:flex", index % 2 === 0 ? "pr-10" : "pl-10")}
        >
          <div
            className={cn(
              "flex w-full bg-green-500/25 md:h-[25rem] lg:h-[30rem]",
              index % 2 !== 0 && "flex-row-reverse",
            )}
            key={index}
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
                <div className="flex w-full gap-5">
                  <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                    <Check color="white" />
                  </div>

                  <Label variant="subtitle" key={index} className="w-full">
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
          className={cn("flex w-full flex-col bg-green-500/25 md:hidden")}
          key={index}
        >
          <img
            src={data.image}
            className={cn(
              "h-full w-full object-cover",
              index % 2 === 0 ? "rounded-br-[6rem]" : "rounded-bl-[6rem]",
            )}
          />
          <div className="flex w-full flex-col space-y-5 p-5">
            <Label variant="title">{data.title}</Label>
            <Label variant="subtitle">{data.subTitle}</Label>
            {data.description.map((data, index) => (
              <div className="flex w-full gap-5">
                <div className="flex h-8 w-9 place-content-center items-center rounded-full bg-gradient-to-b from-green-800 via-green-700 to-green-600">
                  <Check color="white" />
                </div>

                <Label variant="subtitle" key={index} className="w-full">
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
