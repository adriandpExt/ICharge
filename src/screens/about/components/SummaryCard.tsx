import { Summary } from "../types";
import { ReactElement } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const SummaryCard = (stepSum: Summary): ReactElement => {
  const {
    stepSummary: { title, subTitle, description },
    sideBg,
    flip = false,
  } = stepSum;
  return (
    <Card
      className={cn(
        "flex rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6]",
        flip && "flex-row-reverse",
      )}
    >
      <img
        src={sideBg}
        alt=""
        className={cn(
          "h-full object-cover",
          flip
            ? "rounded-br-[36px] rounded-tr-[36px]"
            : "rounded-bl-[36px] rounded-tl-[36px]",
        )}
      />
      <CardContent className="flex w-[60%] flex-col space-y-5 p-10">
        <Label variant="title">{title}</Label>
        <Label variant="subtitle">{subTitle}</Label>

        <div>
          <Label className="hidden text-2xl font-bold md:flex">
            Key Features :
          </Label>
        </div>
        <div className="hidden w-full flex-col items-start space-y-5 lg:flex">
          {description.map((data, index) => (
            <div className="grid w-full grid-cols-12 pl-5" key={index}>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-t from-green-600 to-green-900`}
              >
                <Check className="h-5 w-5 text-white" />
              </div>
              <div className="col-start-2 col-end-13 flex-grow">
                <Label data-aos="fade-left">{data}</Label>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
