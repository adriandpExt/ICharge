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

import { bottomLinks, companyLinks, followUs, platformLinks } from "./utils";

import SectionItem from "./SectionItem";

export const Footer = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-customGreen p-6 text-white md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-5">
          <div className="lg:flex lg:items-center lg:justify-center">
            <SvgIcons name="ic_svl_sig" size={100} />
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

            <div className="flex gap-2">
              {followUs.map((item) => (
                <SvgIcons name={item.icon as IconName} size={30} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col text-start lg:hidden">
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
        </div>

        <div className="mt-10 flex flex-col items-center justify-between border-t border-green-800 pt-6 sm:flex-row">
          <Label variant={"default"}>
            {t(LocalizationKey.footer.copyright)}
          </Label>
          <div className="mt-4 flex gap-4 sm:mt-0">
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
