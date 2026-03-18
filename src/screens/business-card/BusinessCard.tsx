import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { businessCardInfo } from "./utils";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";
import { IconName } from "@/components/svg-icons/utils";
import { IButtonContent } from "./type";

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
      <div className="grid w-full grid-cols-[20%_80%] items-center gap-2">
        <SvgIcons name={icon} size={40} />
        <Label className="truncate text-start font-poppins font-bold text-white">
          {label}
        </Label>
      </div>
    </Button>
  );
};

const BusinessCard = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

  const isNotStaff: boolean =
    card?.id === "021" || card?.id === "022";

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

  const renderButtons = (data: IButtonContent, key: string) => {
    switch (data.buttonType) {
      case "Email":
        return (
          <BusinessCardButton
            icon="ic_bc_email"
            key={key}
            onClick={() => (window.location.href = `mailto:${data.link}`)}
            label={!card?.role ? "Partner with us" : "Email me"}
          />
        );
      case "Viber":
        return (
          <BusinessCardButton
            icon="ic_basil_viber_outline"
            key={key}
            label={
              !card?.role ? "Chat with us on Viber" : "Chat with me on Viber"
            }
            onClick={() =>
              window.open(`viber://chat?number=${data.link}`, "_blank")
            }
          />
        );
      default:
        return (
          <BusinessCardButton
            label={data.label as string}
            key={key}
            icon={data.icon ?? "ic_bc_web"}
            onClick={() => window.open(data.link, "_blank")}
          />
        );
    }
  };

  return (
    <div className="flex-col overflow-x-hidden">
      <div className="flex h-[100px] w-full items-center justify-center bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <SvgIcons name="s_p_s_c" size={320} />
      </div>

      <div className="flex min-h-[calc(100vh-100px)] flex-col items-center rounded-lg bg-[url('@/assets/businessCard/social_bg.svg')] p-7">
        <Avatar
          imageUrl={card.img}
          altText={card.name ?? "Person"}
          size={isNotStaff ? 324 : 230}
          hideBorder={!isNotStaff}
        />

        <Label className="w-full break-words p-2 text-center font-poppins text-2xl font-semibold text-gray-800">
          {card.name}
        </Label>

        <Label className="font-poppins text-lg font-semibold text-gray-800">
          {card.role}
        </Label>

        <div className="mt-6 space-y-6">
          {card.buttonContent.map((button, index) => {
            const stringKey = `${button.buttonType}-${index}`;

            return renderButtons(button, stringKey);
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
