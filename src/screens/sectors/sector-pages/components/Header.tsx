import { PageContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { FeatureCardProps } from "../types";

const Header = ({ title }: Omit<FeatureCardProps, "description">) => {
  return (
    <div className="h-[50vh] w-full bg-[url('@/assets/sectorBg.png')] bg-cover bg-no-repeat">
      <div className="h-full bg-black/25">
        <PageContainer>
          <div className="flex h-full flex-col justify-center space-y-5 md:w-[50%]">
            <Label
              variant="title"
              className="text-5xl tracking-wide text-white md:text-9xl"
            >
              {title}
            </Label>
            <Label
              variant="default"
              className="text-lg tracking-wide text-white md:text-2xl"
            >
              Elevate the customer experience by offering convenient charging
              options that keep patrons connected while the dine, drink, or
              relax
            </Label>
            <Button className="custom-green flex h-fit w-fit rounded-2xl py-5 text-3xl md:px-10">
              BOOK A DEMO
              <ArrowRight size={50} className="ml-5 hidden md:block" />
              <ArrowRight size={30} className="ml-5 block md:hidden" />
            </Button>
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default Header;
