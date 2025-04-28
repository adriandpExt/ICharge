import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { businessCardInfo } from "./utils";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";

const BusinessCard = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

  if (!card) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Lottie
          animationData={NotFound}
          loop={true}
          alt="404 Not Found"
          className="h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]"
        />
      </div>
    );
  }

  return (
    <div className="flex-col overflow-x-hidden">
      <div className="flex h-[100px] w-full items-center justify-center bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <Button variant="icon" className="mx-3 mt-8 space-x-10">
          <SvgIcons name="ic_icharge_white" size={140} />
          <SvgIcons name="stay_powered_stay_connected" size={140} />
        </Button>
      </div>

      <div className="flex h-screen w-screen flex-col items-center rounded-lg bg-white bg-[url('@/assets/businessCard/social_bg.svg')] p-7">
        <Avatar imageUrl={card.imgLink} altText={card.name} size={200} />
        <Label className="w-full break-words p-2 text-center font-poppins text-2xl font-semibold text-gray-800">
          {card.name}
        </Label>
        <Label className="font-poppins text-lg font-semibold text-gray-800">
          {card.role}
        </Label>

        <div className="mt-6 space-y-6">
          <Button
            className="flex h-[50px] w-[260px] items-center justify-center space-x-3 rounded-lg bg-[#078E00] text-white"
            onClick={() => window.open(card.viberLink, "_blank")}
          >
            <SvgIcons name="ic_basil_viber_outline" size={35} />
            <Label className="font-poppins text-white">
              Chat with me on Viber
            </Label>
          </Button>

          <Button
            className="flex h-[50px] w-[260px] items-center justify-center space-x-3 rounded-lg bg-[#078E00] text-white"
            onClick={() => (window.location.href = `mailto:${card.email}`)}
          >
            <SvgIcons name="ic_bc_email" size={30} />
            <Label className="font-poppins text-white">Email me</Label>
          </Button>

          <Button
            className="flex h-[50px] w-[260px] items-center justify-center space-x-3 rounded-lg bg-[#078E00] text-white"
            onClick={() => window.open(`https://chr.gg/`, "_blank")}
          >
            <SvgIcons name="ic_bc_web" size={30} />
            <Label className="font-poppins text-white">Visit our website</Label>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
