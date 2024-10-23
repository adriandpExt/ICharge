import { ReactElement } from "react";
import { SummaryCardAppearance } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import MobileBg from "@/assets/modern-man-using-smartphone-city.png";
import { useTranslation } from "react-i18next";

const SummaryCard = (stepSum: SummaryCardAppearance): ReactElement => {
    const { t } = useTranslation();
    const {
        stepSummary: { header, desc, list },
        sideBg,
        isFlipped = false,
    } = stepSum;

    return (
        <section className="space-y-10">
            {/*desktop*/}
            <Card className={cn(
                "hidden md:flex rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6]",
                isFlipped && "flex-row-reverse",
            )} >
                <img
                    src={sideBg}
                    alt=""
                    className={cn(
                        "h-full object-cover",
                        isFlipped
                        ? "rounded-br-[36px] rounded-tr-[36px]"
                        : "rounded-bl-[36px] rounded-tl-[36px]",
                    )} />
                <CardContent className="flex w-[60%] flex-col space-y-5 p-10">
                    <Label variant="title" className="text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-600">{t(header)}</Label>
                    <Label variant="subtitle">{t(desc)}</Label>
                    <div>
                        <Label className="text-2xl font-bold md:flex">
                            Key Features:
                        </Label>
                    </div>
                    <div className="w-full flex-col items-start space-y-5 lg:flex">
                        {list.map((data, index) => (
                            <div className="grid w-full grid-cols-12 pl-5" key={index}>
                                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-t from-green-600 to-green-900`}>
                                    <Check className="h-5 w-5 text-white" />
                                </div>
                                <div className="col-start-2 col-end-13 flex-grow">
                                    <Label className="text-lg">{t(data)}</Label>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {/*desktop-end*/}
            {/*mobile*/}
            <Card className={cn("container md:hidden rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6]")}>
                <img
                    src={MobileBg}
                    alt=""
                    className="h-full object-cover rounded-tl-[36px] rounded-tr-[36px] md:hidden" />
                <CardContent className="flex w-full flex-col space-y-5 p-5">
                    <Label className="font-poppins text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-600">{t(header)}</Label>
                    <Label variant="subtitle" className="text-center">
                        <div className="border-t border-green-700 pt-4 md:hidden" />
                        {t(desc)}
                    </Label>
                    <div>
                        <Label className="font-bold">Key Features:</Label>
                    </div>
                    <div className="w-full flex-col items-start space-y-5">
                        {list.map((data, index) => (
                            <div className="grid w-fill grid-cols-12" key={index}>
                                <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t from-green-600 to-green-900`}>
                                    <Check className="text-white" />
                                </div>
                                <div className="col-start-3 col-end-13 flex-grow">
                                    <Label>{t(data)}</Label>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {/*mobile-end*/}
        </section>
    )
}

export default SummaryCard