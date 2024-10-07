import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { features } from "./utils";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();
  const banner = () => {
    return (
      <div className="col-start-1 row-start-1 grid h-[50vh] w-full place-items-center border-b-2 border-white">
        <div className="col-start-1 row-start-1 grid h-full w-full bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-bottom bg-no-repeat brightness-[30%]" />

        <div className="container z-10 col-start-1 row-start-1 mx-auto flex flex-col items-center space-y-2 p-2 px-4 py-8">
          <Label variant="title" className="text-white sm:mb-6">
            {t(LocalizationKey.partnerWithUs.partnerWithUsHeading)}
          </Label>
          <Label variant={"subtitle"} className="mb-6 text-white sm:mb-8">
            {t(LocalizationKey.partnerWithUs.partnerWithUsSubHeading)}
          </Label>
          <Button
            variant={"custombutton"}
            className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:px-6 sm:py-3 sm:text-lg md:h-9"
          >
            Inquire
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="flex h-full flex-col">
      {banner()}

      <div className="flex flex-col space-y-20 px-4 py-8">
        <Label variant={"heading1"} className="text-center">
          WHY
          <span className="pl-2 font-staatliches text-4xl font-bold text-green-500 md:text-5xl">
            I
          </span>
          CHARGE?
        </Label>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-3xl bg-green-100"
            >
              <img
                src={feature.image}
                width={400}
                height={200}
                alt={feature.title}
                className="h-[350px] w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Label className="text-muted-foreground">
                  {feature.description}
                </Label>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
