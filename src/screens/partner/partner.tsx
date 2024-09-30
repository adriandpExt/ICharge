import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { features } from "./utils";

const Partner = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="col-start-1 row-start-1 grid h-[50vh] w-full place-items-center border-b-2 border-white">
        <div className="col-start-1 row-start-1 grid h-full w-full bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-bottom bg-no-repeat brightness-[30%]" />

        <div className="container z-10 col-start-1 row-start-1 mx-auto flex flex-col items-center space-y-2 p-2 px-4 py-8">
          <Label className="text-3xl font-bold text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            PARTNER WITH US
          </Label>
          <Label className="text-md mb-6 text-white sm:mb-8 lg:text-2xl">
            ICharge is the leading brand in smartphone charging across Western
            markets. Start your scalable business venture today & begin to reap
            the rewards from providing the leading charging solution to your
            chosen market!
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

      <div className="container mx-auto space-y-20 px-4 py-8">
        <Label
          variant={"default"}
          className="flex flex-col text-center text-4xl font-bold"
        >
          WHY ICHARGE?
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
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
