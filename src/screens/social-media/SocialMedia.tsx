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
    iconSize: 35,
  },
  {
    icon: "ic_tiktok",
    label: "@icharge_ph",
    url: "https://www.tiktok.com/@icharge_ph",
    iconSize: 35,
  },
];

const SocialMedia = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className="flex h-[100px] w-full items-center justify-center bg-gradient-to-b from-[#044F00] to-[#078E00]">
        <Button variant="icon" className="mx-3 mb-8 mt-9 space-x-10">
          <SvgIcons name="s_p_s_c" size={320} />
        </Button>
      </div>
      <div className="flex h-screen w-screen flex-col items-center bg-[url('@/assets/businessCard/social_bg.svg')]">
        <Label className="mt-10 bg-gradient-to-b from-[#5CE65C] to-[#078E00] bg-clip-text text-center font-poppins text-2xl font-extrabold text-transparent">
          FOLLOW US ON
        </Label>
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
          {socialLinks.map(({ icon, label, url, iconSize }) => (
            <Button
              key={label}
              className="h-[50px] w-[260px] justify-start bg-[#078E00]"
              onClick={() => window.open(url, "_blank")}
            >
              <div className="flex w-full translate-x-[11%] items-center gap-2">
                <SvgIcons name={icon as IconName} size={iconSize} />
                <Label className="text-lg font-bold">{label}</Label>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
