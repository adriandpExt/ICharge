import { ReactElement } from "react";
import { SummaryCardAppearance } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const SummaryCard = (stepSum: SummaryCardAppearance): ReactElement => {
    const {
        stepSummary: { header, desc, list },
        sideBg,
        isFlipped = false,
    } = stepSum;

    return (
        <Card
            className={cn(
                "flex rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6]",
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
                <Label variant="title" className="text-transparent bg-clip-text bg-gradient-to-b from-green-900 to-green-600">{header}</Label>
                <Label variant="subtitle">{desc}</Label>
                <div>
                    <Label className="hidden text-2xl font-bold md:flex">Key Features:</Label>
                </div>
                <div className="hidden w-full flex-col items-start space-y-5 lg:flex">
                    {list.map((data, index) => (
                        <div className="gird w-fill grid-cols-12 pl-5" key={index}>
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-t from-green-600 to-green-900`}>
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
    )
}

export default SummaryCard