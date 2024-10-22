import { Industries } from "./types";
import { ReactElement } from "react";
import { Check } from "lucide-react";
import sectorHospitality from "@/assets/sectors/sectorHospitality.png";
import sectorHealthCare from "@/assets/sectors/sectorHealthcare.jpg";
import sectorTransport from "@/assets/sectors/sectorTransport.jpg";
import sectorEvents from "@/assets/sectors/sectorEvents.jpg";
import sectorRetail from "@/assets/sectors/sectorRetail.jpg";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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
      title: "Healthcare",
      subTitle:
        "Offer peace of mind by providing charging stations in hospitals, clinics, gyms, and wellness centers, making the visit more comfortable for patients and visitors.",
      image: sectorHealthCare,
      description: [
        "Improves the patient and visitor experience with convenient charging access.",
        "Reduces stress for visitors who rely on their phones for essential communication.",
        "Shows your facility’s commitment to innovation and customer care.",
      ],
    },
    {
      title: "Transport",
      subTitle:
        "Keep travelers connected in airports, bus terminals, train stations, and other transport hubs by offering convenient charging solutions.",
      image: sectorTransport,
      description: [
        "Provides critical charging services to passengers, reducing stress over low battery levels.",
        "Enhances customer satisfaction and improves perceptions of your transport hub.",
        "Increases dwell time in commercial areas such as airport shops and cafés.",
      ],
    },
    {
      title: "Leisure & Events",
      subTitle:
        "Keep attendees engaged during concerts, festivals, exhibitions, and sports events by offering reliable charging options that ensure they can stay connected.",
      image: sectorEvents,
      description: [
        "Keeps attendees connected, allowing them to share their experiences online.",
        "Reduces frustration over low battery levels, enhancing the overall event experience..",
        "Increases dwell time, especially for multi-day events.",
      ],
    },
    {
      title: "Retail",
      subTitle:
        "Enhance the shopping experience by offering charging stations in malls, supermarkets, department stores, and boutiques, encouraging customers to stay longer.",
      image: sectorRetail,
      description: [
        "Increases dwell time, leading to more purchases.",
        "Customizable branding to align with store aesthetics.",
        "Differentiates your business by offering a unique, customer-focused service.",
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
        >
          <div
            className={cn(
              "flex w-full border-t-4 border-green-500 bg-green-500/25 md:h-[25rem] lg:h-[30rem]",
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
          className={cn(
            "flex w-full flex-col border-b-4 border-green-500 bg-green-500/25 md:hidden",
          )}
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
