import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

import { Label } from "@/components/ui/label";

import playstore from "@/assets/icons/ic_playstore_hero.svg";
import applestore from "@/assets/icons/ic_apple_hero.svg";

import VideoComponent from "./VideoComponent";

import { TypeAnimation } from "react-type-animation";

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
            <span className="font-lexendDeca text-green-500">i</span>
            <span className="font-lexendDeca text-white">Charge</span>
          </Label>
          <br />

          <Label
            variant={"default"}
            className="font-lexendDeca text-3xl text-white md:text-6xl lg:text-5xl"
          >
            Stay
            <span className="ml-3 bg-gradient-to-r from-[#00FF8C] via-[#1fc0f1] to-[#00FBFF] bg-clip-text text-transparent">
              <TypeAnimation
                className="font-lexendDeca"
                sequence={["Charge", 4000, "Connected", 4000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
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
