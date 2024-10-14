import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "../svg-icons";
import playstore from "@/assets/icons/ic_playstore_footer.svg";
import applestore from "@/assets/icons/ic_apple_footer.svg";
import { Link } from "react-router-dom";
import {
  bottomLinks,
  companyLinks,
  platformLinks,
  renderItems,
} from "../footer/utils";
import { IconName } from "../svg-icons/utils";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import SectionItem from "./SectionItem";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";
import qrApp from "@/assets/qr-mobile-app.jpg";

export const Footer = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-customGreen p-6 text-white md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-6">
          <div className="col-span-1 hidden md:col-span-2 md:flex lg:col-span-1">
            <SvgIcons name="ic_footer_logo" size={200} />
          </div>

          <div>
            <div>
              <Label className="mb-4 flex text-xl font-semibold">
                {t(LocalizationKey.footer.followUs)}
              </Label>
              <div className="flex space-x-4">
                {renderItems.follow.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    target={item.path.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <SvgIcons name={item.icon as IconName} size={24} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <SectionItem
            links={platformLinks}
            title={t(LocalizationKey.footer.platforms)}
          />

          <div className="bg-white">
            <img
              src={qrApp}
              alt="QR CODE"
              className="h-[250px] w-[250px] object-contain"
            />
          </div>
          <SectionItem
            links={companyLinks}
            title={t(LocalizationKey.footer.company)}
            onClick={handleClick}
          />

          {/* Newsletter */}
          <div className="col-span-1 text-center md:col-span-2 lg:col-span-1 lg:text-start">
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

            <div className="mt-5 grid grid-cols-1 place-items-center lg:text-start">
              <Label className="mb-1 text-left text-xl font-semibold">
                {t(LocalizationKey.footer.downloadApp)}
              </Label>
              <div className="flex">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.phl.charge"
                  target="_blank"
                  className="mr-1"
                >
                  <img
                    loading="lazy"
                    src={playstore}
                    alt="playstore"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
                <Link
                  to="https://apps.apple.com/us/app/icharge-ph/id6478515634"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={applestore}
                    alt="applestore"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
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
