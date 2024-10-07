import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import applestore from "@/assets/icons/ic_apple_hero.svg";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import playstore from "@/assets/icons/ic_playstore_hero.svg";

import VideoComponent from "./VideoComponent";
import LocalizationKey from "@/i18n/key";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="grid h-[90vh] w-full place-items-center lg:grid-cols-2">
      <VideoComponent />

      <div
        className="space-y-5 px-10 text-center lg:pl-52 lg:text-start"
        data-aos="fade-up"
      >
        <div className="font-bold">
          <Label variant={"default"} className="text-5xl lg:text-6xl">
            <span className="text-green-500">i</span>
            <span className="text-white">Charge</span>
          </Label>
          <br />

          <Label
            variant={"default"}
            className="text-4xl text-white md:text-6xl lg:text-5xl"
          >
            Stay
            <span className="ml-3 bg-gradient-to-r from-[#00FF8C] via-[#1fc0f1] to-[#00FBFF] bg-clip-text text-transparent">
              {t("charge")}
            </span>
          </Label>

          <br />

          <Label
            variant={"default"}
            className="text-4xl text-white md:text-6xl lg:text-5xl"
          >
            Stay
            <span className="ml-3 bg-gradient-to-r from-[#00FBFF] via-[#1fc0f1] to-[#00FF8C] bg-clip-text text-transparent">
              Connected
            </span>
          </Label>
        </div>

        <Label
          variant={"subtitle"}
          className="mx-auto text-white md:w-10/12 lg:mx-0"
        >
          {t(LocalizationKey.home.ichargeSubheader)}
        </Label>

        <div className="items-center space-y-4 lg:w-48">
          <Button
            type="submit"
            variant={"default"}
            className="h-12 w-40 rounded-xl shadow-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(90, 255, 82, 0.2) 0%, rgba(6, 108, 1, 0.4) 100%)",
            }}
          >
            {t(LocalizationKey.home.ichargeContinue)} <ArrowRight />
          </Button>
          <div className="flex items-center justify-center lg:block lg:space-y-2">
            <Link
              to="https://play.google.com/store/apps/details?id=com.phl.charge"
              target="_blank"
            >
              <img src={playstore} alt="ic_playstore_hero" className="w-48" />
            </Link>
            <Link
              to={"https://apps.apple.com/us/app/icharge-ph/id6478515634"}
              target="_blank"
            >
              <img src={applestore} alt="ic_apple_hero" className="w-48" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
