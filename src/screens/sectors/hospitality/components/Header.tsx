import { PageContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="h-[50vh] w-full bg-[url('@/assets/sectorBg.png')] bg-cover bg-no-repeat">
      <div className="h-full bg-black/25">
        <PageContainer>
          <div className="flex flex-col space-y-5 md:w-[50%] h-full justify-center">
            <Label
              variant="title"
              className="text-5xl tracking-wide text-white md:text-9xl"
            >
              HOSPITALITY
            </Label>
            <Label
              variant="default"
              className="text-lg tracking-wide text-white md:text-2xl"
            >
              Elevate the customer experience by offering convenient charging
              options that keep patrons connected while the dine, drink, or
              relax
            </Label>
            <Button className="custom-green flex w-fit space-x-5 rounded-2xl p-7 md:p-10">
              <Label variant="default" className="text-lg md:text-3xl">
                Book a Demo
              </Label>
              <ArrowRight size={50} className="hidden md:block" />
              <ArrowRight size={30} className="block md:hidden" />
            </Button>
          </div>
        </PageContainer>
      </div>
    </div>
  );
};

export default Header;
