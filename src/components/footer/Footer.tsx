import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { IconName } from "../svg-icons/utils";
import LocalizationKey from "@/i18n/key";
import { Label } from "@/components/ui/label";
import { SvgIcons } from "../svg-icons";
import SectionItem from "./SectionItem";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { followUs } from "./utils";

export const Footer = () => {
  const { t } = useTranslation();

  const handleClick = () => window.scrollTo(0, 0);

  const renderSvg = (): ReactElement[] =>
    followUs.map((item, index) => (
      <Avatar key={index} onClick={() => window.open(item.path, "_blank")}>
        <AvatarFallback>
          <SvgIcons name={item.icon as IconName} color="#ffffff" size={30} />
        </AvatarFallback>
      </Avatar>
    ));

  const links = {
    company: [
      { label: t(LocalizationKey.navigation.howTo), path: "how-to" },
      { label: t(LocalizationKey.navigation.partnerwithUs), path: "partner" },
      { label: t(LocalizationKey.navigation.services), path: "/services" },
      { label: "iScreen", path: "/iscreen" },
      { label: t(LocalizationKey.navigation.about), path: "/about" },
      { label: t(LocalizationKey.navigation.faqs), path: "/faqs" },
    ],
    platform: [
      { label: t(LocalizationKey.footer.web), path: "#web" },
      {
        label: "iOS",
        path: "https://apps.apple.com/us/app/icharge-ph/id6478515634",
      },
      {
        label: "Android",
        path: "https://play.google.com/store/apps/details?id=com.phl.charge",
      },
    ],
  };

  const SocialLinks = () => (
    <div className="flex flex-col gap-3 lg:text-start">
      <Label className="text-md mb-1 font-semibold md:text-xl">
        {t(LocalizationKey.footer.stayInTheLoop)}
      </Label>

      <div className="flex justify-evenly gap-5 pt-5 lg:justify-start lg:gap-5">
        {renderSvg()}
      </div>
    </div>
  );

  const renderLogo = () => {
    return (
      <div className="row-span-2 place-items-center md:row-span-1 lg:flex lg:justify-start">
        <div className="ml-3 flex justify-center lg:hidden">
          <SvgIcons name="ic_footer_logo" size={200} />
        </div>
        <div className="hidden lg:block">
          <SvgIcons name="ic_footer_logo" size={220} />
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-700 p-6 text-white md:p-10 lg:to-[#39d431]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {renderLogo()}

          <div className="flex md:justify-center lg:justify-normal">
            <SectionItem
              links={links.platform}
              title={t(LocalizationKey.footer.downloadApp)}
            />
          </div>
          <div className="col-start-2 flex md:col-start-3 md:justify-center lg:justify-normal">
            <SectionItem
              links={links.company}
              title={t(LocalizationKey.footer.company)}
              onClick={handleClick}
            />
          </div>
          <div className="hidden lg:block">
            <SocialLinks />
          </div>
        </div>

        <div className="mt-5 items-center border-t border-white pt-3 lg:hidden" />
        <div className="lg:hidden">
          <SocialLinks />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-white pt-6 sm:flex-row">
          <Label variant="default">
            2018–{new Date().getFullYear()} {t(LocalizationKey.footer.company)}
          </Label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
