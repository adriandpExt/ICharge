import { PageContainer } from "@/components";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { FeatureCardProps } from "../types";
import banner from "@/assets/sectorBg.png";

const Header = ({ title }: Omit<FeatureCardProps, "description">) => {
  return (
    <div className="h-[65vh]">
      <img
        src={banner}
        className="absolute -z-50 h-[65vh] w-full rounded-bl-[5rem] bg-no-repeat object-cover brightness-50"
      />
      <div className="absolute h-[65vh] w-full rounded-bl-[5rem] bg-gradient-to-b from-black/85 via-black/25 to-black/25 -z-40" />
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
            options that keep patrons connected while the dine, drink, or relax
          </Label>
          <Button
            className="custom-green flex h-fit w-fit rounded-2xl py-5 text-3xl md:px-10"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("bookDemo")?.offsetTop,
                behavior: "smooth",
              })
            }
          >
            BOOK A DEMO
            <ArrowRight size={50} className="ml-5 hidden md:block" />
            <ArrowRight size={30} className="ml-5 block md:hidden" />
          </Button>
        </div>
      </PageContainer>
    </div>
  );
};

export default Header;
