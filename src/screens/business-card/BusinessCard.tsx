import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { businessCardInfo } from "./utils";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";
import { IconName } from "@/components/svg-icons/utils";

interface IBusinessCardBtn {
  label: string;
  onClick: () => void;
  icon: IconName;
}

const BusinessCardButton = (props: IBusinessCardBtn) => {
  const { onClick, icon, label } = props;

  return (
    <Button
      className="flex h-[50px] w-[260px] space-x-3 rounded-lg bg-[#078E00] text-white"
      onClick={onClick}
    >
      <div className="grid grid-cols-[20%_80%] w-full items-center gap-2">
        <SvgIcons name={icon} size={40} />
        <Label className="font-poppins font-bold text-white truncate text-start">{label}</Label>
      </div>
    </Button>
  );
};

const BusinessCard = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

  const navigate = useNavigate();

  const isNotStaff: boolean = card?.id === "021" || card?.id === "022";

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
        <Button variant="icon" className="mx-3 mb-8 mt-9 space-x-10">
          <SvgIcons name="s_p_s_c" size={320} />
        </Button>
      </div>

      <div className="flex h-screen w-screen flex-col items-center rounded-lg bg-[url('@/assets/businessCard/social_bg.svg')] p-7">
        <Avatar
          imageUrl={card.imgLink}
          altText={card.name}
          size={isNotStaff ? 324 : 230}
          hideBorder={isNotStaff}
        />
        <Label className="w-full break-words p-2 text-center font-poppins text-2xl font-semibold text-gray-800">
          {card.name}
        </Label>
        <Label className="font-poppins text-lg font-semibold text-gray-800">
          {card.role}
        </Label>

        <div className="mt-6 space-y-6">
          <BusinessCardButton
            label={
              isNotStaff ? "Chat with us on Viber" : "Chat with me on Viber"
            }
            icon="ic_basil_viber_outline"
            onClick={() => window.open(card.viberLink, "_blank")}
          />

          <BusinessCardButton
            label={isNotStaff ? "Partner with us" : "Email me"}
            icon="ic_bc_email"
            onClick={() => (window.location.href = `mailto:${card.email}`)}
          />

          <BusinessCardButton
            label="Visit our website"
            icon="ic_bc_web"
            onClick={() => window.open(`https://icharge.com.ph/`, "_blank")}
          />

          {card.vidLink && (
            <BusinessCardButton
              label="How to use / return iCharge Power Bank"
              icon="ic_youtube"
              onClick={() => navigate('/how-to')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
