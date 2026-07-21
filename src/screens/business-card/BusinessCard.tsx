import { ReactElement } from "react";
import { useParams } from "react-router-dom";
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
        "flex h-[50px] w-[260px] space-x-3 rounded-lg",
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

const CardBase = (
  data: ICardInfo,
): { tagline: string; variant: keyof typeof businessCardThemes } => {
  if (data.cardType === "i-screen") {
    return {
      tagline: "Smart Charging Stations - Smarter Advertising",
      variant: "iScreen",
    };
  } else {
    return {
      tagline: "Stay Powered, Stay Connected",
      variant: "iCharge",
    };
  }
};

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

  const { variant, tagline } = CardBase(card);
  const theme = businessCardThemes[variant];

  const renderButtonData = (data: IButtonContent): Partial<IButtonContent> => {
    const isUserCard = !card.role;

    switch (data.buttonType) {
      case "Email":
        return {
          icon: "ic_bc_email",
          label: isUserCard ? "Partner with us" : "Email me",
          link: `mailto:${data.link}`,
        };

      case "Viber":
        return {
          icon: "ic_basil_viber_outline",
          label: isUserCard ? "Chat with us on Viber" : "Chat with me on Viber",
          link: `viber://chat?number=${data.link}`,
        };

      default:
        return {
          icon: data.icon ?? "ic_bc_web",
          label: data.label,
          link: data.link,
        };
    }
  };

  return (
    <div className="flex-col overflow-x-hidden">
      <div
        className={cn(
          "flex h-[100px] w-full items-center justify-center",
          theme.headerBgColor,
        )}
      >
        <p
          className={cn(
            "pr-1 font-eastman italic text-transparent",
            theme.headerTextColor,
          )}
        >
          {tagline}
        </p>
      </div>

      <div
        className={cn(
          "flex min-h-[calc(100vh-100px)] flex-col items-center rounded-lg p-7",
          theme.bodyBg,
          "bg-cover bg-center",
        )}
      >
        <Avatar
          imageUrl={card.img}
          altText={card.name ?? "Person"}
          borderColor={theme.avatarBorder}
        />

        <p className="w-full break-words p-2 text-center font-poppins text-2xl font-semibold text-gray-800">
          {card.name}
        </p>

        <p className="font-poppins text-lg font-semibold text-gray-800">
          {card.role}
        </p>

        <div className="mt-6 space-y-6">
          {card.buttonContent.map((data, index) => {
            const buttonData = renderButtonData(data);

            return (
              <BusinessCardButton
                key={`${data.buttonType}-${index}`}
                icon={buttonData.icon as IconName}
                label={buttonData.label as string}
                onClick={() => window.open(buttonData.link, "_blank")}
                buttonTheme={theme.button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
