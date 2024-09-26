// import video from "@/assets/iCharge.mov";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import playstore from "@/assets/icons/ic_playstore_hero.svg";
import applestore from "@/assets/icons/ic_apple_hero.svg";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { t } = useTranslation();
  return (
    <section className="grid h-[90vh] w-full place-items-center lg:grid-cols-2">
      <video
        muted
        loop
        autoPlay
        playsInline
        className={`absolute inset-0 h-[90vh] w-full rounded-bl-[5rem] border-b-2 border-white object-cover shadow-2xl brightness-[30%] transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source
          src="https://joospower.com/wp-content/uploads/2023/10/Joos-Advert-final.mp4"
          type="video/mp4"
        />
      </video>

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
          className="mx-auto text-sm text-white md:w-10/12 lg:mx-0 lg:text-xl"
        >
          icharge offers a one-stop self-service mobile power bank rental
          service, providing a solution for charging your mobile devices while
          on the go.
        </Label>

        <div className="items-center space-y-4">
          <Button
            type="submit"
            variant={"default"}
            className="h-12 w-40 rounded-xl shadow-xl"
            style={{
              background:
                "radial-gradient(circle, rgba(90, 255, 82, 0.2) 0%, rgba(6, 108, 1, 0.4) 100%)",
            }}
          >
            Continue <ArrowRight />
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
