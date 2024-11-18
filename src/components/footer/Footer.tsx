import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { IconName } from "../svg-icons/utils";

import LocalizationKey from "@/i18n/key";

import qrApp from "@/assets/qr-mobile-app.jpg";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SvgIcons } from "../svg-icons";

import { bottomLinks, followUs } from "./utils";

import SectionItem from "./SectionItem";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const Footer = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const triggerOpenWindow = (url: string) => {
    window.open(url, "_blank");
  };

  const renderSvg = (): ReactElement[] => {
    return followUs.map((item) => (
      <Avatar key={item.path} onClick={() => triggerOpenWindow(item.path)}>
        <AvatarFallback>
          <SvgIcons name={item.icon as IconName} size={30} />
        </AvatarFallback>
      </Avatar>
    ));
  };

  const companyLinks = [
    { label: t(LocalizationKey.navigation.partnerwithUs), path: "partner" },
    { label: t(LocalizationKey.navigation.services), path: "/services" },
    { label: t(LocalizationKey.navigation.about), path: "/about" },
    { label: t(LocalizationKey.navigation.faqs), path: "/faqs" },
  ];

  const platformLinks = [
    { label: t(LocalizationKey.footer.web), path: "#web" },
    {
      label: "iOS",
      path: "https://apps.apple.com/us/app/icharge-ph/id6478515634",
    },
    {
      label: "Android",
      path: "https://play.google.com/store/apps/details?id=com.phl.charge",
    },
  ];

  return (
    <footer className="bg-customGreen p-6 text-white md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
          <div className="lg:flex lg:items-center lg:justify-start">
            <SvgIcons name="ic_footer_logo" size={150} />
          </div>

          <SectionItem
            links={platformLinks}
            title={t(LocalizationKey.footer.platforms)}
          />

          <SectionItem
            links={companyLinks}
            title={t(LocalizationKey.footer.company)}
            onClick={handleClick}
          />

          <div className="flex flex-col gap-1">
            <Label className="text-xl font-semibold">
              {t(LocalizationKey.footer.downloadApp)}
            </Label>
            <img
              src={qrApp}
              alt="QR CODE"
              className="h-28 w-28 rounded-3xl border-4 border-green-600 object-contain lg:h-40 lg:w-40"
            />
          </div>

          <div className="hidden gap-3 text-start lg:flex lg:flex-col">
            <Label className="mb-4 text-2xl font-bold">
              {t(LocalizationKey.footer.stayInTheLoop)}
            </Label>
            <div>
              <Label>{t(LocalizationKey.footer.joinNewsletter)}</Label>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-grow items-center gap-2">
                <Input
                  type="email"
                  placeholder={t(LocalizationKey.footer.emailPlaceholder)}
                  className="flex-grow border-white bg-green-900 text-white placeholder:text-xs"
                />
                <Button
                  variant="default"
                  className="w-24 rounded-xl bg-[#38D430]"
                >
                  {t(LocalizationKey.footer.subscribe)} <ArrowRight />
                </Button>
              </div>
            </div>

            <div className="flex gap-5">{renderSvg()}</div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-start lg:hidden">
          <Label className="mb-4 text-2xl font-bold">
            {t(LocalizationKey.footer.stayInTheLoop)}
          </Label>
          <div>
            <Label className="mb-4">
              {t(LocalizationKey.footer.joinNewsletter)}
            </Label>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-grow items-center">
              <Input
                type="email"
                placeholder={t(LocalizationKey.footer.emailPlaceholder)}
                className="flex-grow border-white bg-green-900 text-white placeholder:text-xs"
              />
              <Button
                variant="default"
                className="ml-2 w-24 rounded-xl bg-[#38D430]"
              >
                {t(LocalizationKey.footer.subscribe)} <ArrowRight />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            {renderSvg()}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-green-800 pt-6 sm:flex-row">
          <Label variant={"default"}>
            {t(LocalizationKey.footer.copyright)}
          </Label>
          <div className="mt-4 hidden gap-4 sm:mt-0 sm:flex">
            {bottomLinks.map((item) => (
              <Link to={item.path} key={item.path} onClick={handleClick}>
                <Label variant={"default"}>{t(item.label)}</Label>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
