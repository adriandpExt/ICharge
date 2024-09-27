import { PageContainer } from "@/components";
import { Label } from "@/components/ui/label";
import FeatureCard from "./FeatureCard";
import { featureCardValue } from "../utils";

const Benefits = () => {
  return (
    <PageContainer className="flex flex-col items-center space-y-20">
      <div className="flex w-[70%] flex-col space-y-5 text-center">
        <Label variant="title" className="text-5xl lg:text-7xl">
          BENEFITS
        </Label>
        <Label className="text-lg lg:text-2xl">
          Mobile wallets will be the standard form of payment by 2025. Icharge
          keeps your customers spending and saves your staff the hassle and
          security risks charging devices behind the bar
        </Label>
      </div>
      <div className="padding-5 flex w-full flex-col items-center space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
        {featureCardValue.map(({ description, title }) => {
          return <FeatureCard description={description} title={title} />;
        })}
      </div>
    </PageContainer>
  );
};

export default Benefits;
