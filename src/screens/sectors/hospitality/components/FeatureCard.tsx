import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import { FeatureCardProps } from "../types";
import { Label } from "@/components/ui/label";

const FeatureCard = ({ description, title }: FeatureCardProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-3xl border-0 bg-[#EDF8ED] p-10 backdrop-blur-md md:h-[32rem] md:w-[30rem]">
      <div className="flex h-full flex-col space-y-10 overflow-hidden rounded-2xl border-4 border-green-500 py-5">
        <CardHeader className="flex-grow-0 pb-0 pt-6">
          <div className="mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500 p-5">
            <BriefcaseBusiness className="text-white" size={100} />
          </div>
          <CardTitle className="text-center">
            <Label className="text-3xl font-bold">{title}</Label>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex space-y-4 px-6 pb-6 text-center">
          <Label className="text-md">{description}</Label>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeatureCard;