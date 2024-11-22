import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LocalizationKey from "@/i18n/key";

import { Label } from "@/components/ui/label";

import playstore from "@/assets/icons/google_play_store_badge.png";
import applestore from "@/assets/icons/app_store_badge.png";

import VideoComponent from "./VideoComponent";

import { TypeAnimation } from "react-type-animation";
import logo from "@/assets/ic_icharge.svg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="grid h-[90vh] w-full place-items-center lg:grid-cols-2">
      <VideoComponent />

      <div
        className="space-y-5 px-10 text-center lg:pl-52 lg:text-start"
        data-aos="fade-up"
      >
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-center lg:items-start">
            <img src={logo} alt="iCharge" className="h-[70%] w-[70%]" />
          </div>

          <Label
            variant={"default"}
            className="font-eastman text-3xl italic text-white md:text-6xl lg:text-5xl"
          >
            Stay
            <span className="ml-3 inline-block w-fit min-w-[150px] bg-gradient-to-r from-[#44D62C] via-[#54575A] to-[#fff] bg-clip-text pr-3 text-start text-transparent">
              <TypeAnimation
                className="font-eastman italic"
                sequence={["Charged", 4000, "Connected", 4000]}
                wrapper="span"
                cursor={false}
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

        {/*notes:
        1. tried altering their sizes for them to be the same but was unable to do so due
        to differing image dimensions.
        2. conducted further research, found out that for both badges, their height should
        be the only parameter to be changed, but not their width.
        3.proceeded with research regarding guidelines for application badges, found out
        that the width for the Play Store badge should be bigger than the App Store badge, while
        maintaining the same height. must study further procedures on circumventing this issue.*/}
        
        <div className="items-center space-y-4 lg:w-48">
          <div className="flex flex-row lg:items-left justify-center gap-3 lg:flex-col">
            <Link
              to="https://play.google.com/store/apps/details?id=com.phl.charge"
              target="_blank"
            >
              <img
                src={playstore}
                alt="ic_playstore_hero"
                className="w-[178px]"
              />
            </Link>
            <Link
              to={"https://apps.apple.com/us/app/icharge-ph/id6478515634"}
              target="_blank"
            >
              <img
                src={applestore}
                alt="ic_apple_hero"
                className="w-[156px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
