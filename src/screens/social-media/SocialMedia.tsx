import { ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "@/components/svg-icons";
import { IconName } from "@/components/svg-icons/utils";

const socialLinks = [
  {
    icon: "ic_facebook",
    label: "icharge.official",
    url: "https://www.facebook.com/icharge.official/",
    iconSize: 35,
  },
  {
    icon: "ic_instagram",
    label: "icharge_ph",
    url: "https://www.instagram.com/icharge_ph/",
    iconSize: 30,
  },
  {
    icon: "ic_tiktok",
    label: "@icharge_ph",
    url: "https://www.tiktok.com/@icharge_ph",
    iconSize: 30,
  },
];

const SocialMedia = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex h-[100px] w-full items-center justify-center bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <div className="flex space-x-10">
          <SvgIcons name="ic_icharge_white" size={130} />
          <SvgIcons name="stay_powered_stay_connected" size={130} />
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center bg-[url('@/assets/businessCard/social_bg.svg')]">
        <Label className="mt-12 bg-gradient-to-b from-[#5CE65C] to-[#078E00] bg-clip-text text-center font-poppins text-2xl font-extrabold text-transparent">
          FOLLOW US ON
        </Label>
        <div className="mt-12 flex flex-col items-center justify-center space-y-6 pb-12">
          {socialLinks.map(({ icon, label, url, iconSize }) => (
            <Button
              key={label}
              className="flex h-[50px] w-[260px] items-center justify-center space-x-3 rounded-lg bg-[#078E00] text-white"
              onClick={() => window.open(url, "_blank")}
            >
              <SvgIcons name={icon as IconName} size={iconSize} />
              <Label className="font-poppins text-white">{label}</Label>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
