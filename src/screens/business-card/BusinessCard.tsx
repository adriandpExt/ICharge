import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "@/components/svg-icons";
import { businessCardInfo, businessCardThemes } from "./utils";
import Lottie from "lottie-light-react";
import NotFound from "@/assets/lottie/404.json";
import { IconName } from "@/components/svg-icons/utils";
import { IButtonContent, ICardInfo } from "./type";
import { cn } from "@/lib/utils";

interface IBusinessCardBtn {
  label: string;
  onClick: () => void;
  icon: IconName;
  buttonTheme: string;
}

const BusinessCardButton = (props: IBusinessCardBtn) => {
  const { onClick, icon, label, buttonTheme } = props;

  return (
    <Button
      variant="custombutton"
      className={cn(
        "flex h-[50px] w-[260px] space-x-3 rounded-lg bg-gradient-to-l",
        buttonTheme,
      )}
      onClick={onClick}
    >
      <div className="grid w-full grid-cols-[20%_80%] items-center gap-2">
        <SvgIcons name={icon} size={40} />

        <p className="truncate text-start font-poppins font-bold text-white">
          {label}
        </p>
      </div>
    </Button>
  );
};

const BusinessCard = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const card = businessCardInfo.find((card) => card.id === id);

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

  const renderTagline = (
    data: ICardInfo,
  ): { tagline: string; variant: keyof typeof businessCardThemes } => {
    switch (data.id) {
      case "023":
        return {
          tagline: "Stay Visible, Stay Connected",
          variant: "iCharge",
        };
      case "024":
        return {
          tagline: "Premium Quality In Every Bite",
          variant: "sunnyFoods",
        };
      default:
        return { tagline: "Stay Powered, Stay Connected", variant: "iCharge" };
    }
  };

  const renderButtons = (data: IButtonContent, key: string) => {
    switch (data.buttonType) {
      case "Email":
        return (
          <BusinessCardButton
            icon="ic_bc_email"
            key={key}
            onClick={() => (window.location.href = `mailto:${data.link}`)}
            label={!card?.role ? "Partner with us" : "Email me"}
            buttonTheme={businessCardThemes[renderTagline(card).variant].button}
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
            buttonTheme={businessCardThemes[renderTagline(card).variant].button}
          />
        );
      default:
        return (
          <BusinessCardButton
            label={data.label as string}
            key={key}
            icon={data.icon ?? "ic_bc_web"}
            onClick={() => window.open(data.link, "_blank")}
            buttonTheme={businessCardThemes[renderTagline(card).variant].button}
          />
        );
    }
  };

  return (
    <div className="flex-col overflow-x-hidden">
      <div
        className={cn(
          "flex h-[100px] w-full items-center justify-center bg-gradient-to-b",
          businessCardThemes[renderTagline(card).variant].headerBgColor,
        )}
      >
        <Label
          variant={"default"}
          className={cn(
            "bg-gradient-to-r bg-clip-text pr-1 font-eastman text-[23px] italic text-transparent",
            businessCardThemes[renderTagline(card).variant].headerTextColor,
          )}
        >
          {renderTagline(card).tagline}
        </Label>
      </div>

      <div
        className={cn(
          "flex min-h-[calc(100vh-100px)] flex-col items-center rounded-lg p-7",
          businessCardThemes[renderTagline(card).variant].bodyBg,
        )}
      >
        <Avatar
          imageUrl={card.img}
          altText={card.name ?? "Person"}
          size={isNotStaff ? 324 : 230}
          hideBorder={isNotStaff}
          borderColor={
            businessCardThemes[renderTagline(card).variant].avatarBorder
          }
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
