import { ISummaryCard } from "../types";

import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

import LocalizationKey from "@/i18n/key";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const SummaryCard = (props: ISummaryCard): ReactElement => {
  const { t } = useTranslation();

  const { summaryCardContents, isFlipped } = props;
  const { SumImage, SumImageMobile, header, desc, footnote } =
    summaryCardContents;

  return (
    <Card
      data-aos="zoom-in-up"
      className={cn(
        "rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] lg:flex",
        isFlipped && "flex-row-reverse",
      )}
    >
      <img
        src={SumImage}
        alt=""
        height={"100%"}
        className={cn(
          "hidden object-cover lg:flex",
          isFlipped
            ? "rounded-br-[36px] rounded-tr-[36px]"
            : "rounded-bl-[36px] rounded-tl-[36px]",
        )}
      />

      <img
        src={SumImageMobile}
        alt=""
        width={"100%"}
        className="h-full flex-col rounded-tl-[36px] rounded-tr-[36px] object-cover lg:hidden"
      />

      <CardContent className="flex flex-col space-y-5 p-10 lg:w-[60%]">
        <Label
          variant="heading2"
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:text-start"
        >
          {t(header)}
        </Label>

        <Separator className="bg-green-700 lg:hidden" />

        <Label variant="subtitle">{t(desc)}</Label>

        <div>
          <Label variant={"subtitle"} className="font-bold md:flex">
            {t(LocalizationKey.about.keyFeaturesHead)}
          </Label>
        </div>

        <div className="w-full flex flex-col items-start space-y-5 lg:flex">
          {footnote.map((data, index) => (
            <div className="flex items-start gap-5" key={index}>
              <div className="rounded-full bg-gradient-to-t from-green-600 to-green-900 p-1">
                <Check
                  className="h-3 w-3 text-white md:h-5 md:w-5"
                  strokeWidth={5}
                />
              </div>

              <Label variant={"subtitle"}>{t(data)}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
