// import video from "@/assets/iCharge.mov";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import playstore from "@/assets/icons/ic_playstore.svg";
import applestore from "@/assets/icons/ic_apple.svg";
import { useState } from "react";

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <section className="grid h-[70vh] w-full place-items-start md:grid-cols-2 md:place-items-center">
      <video
        muted
        loop
        autoPlay
        playsInline
        className={`absolute inset-0 h-[75vh] w-full rounded-bl-[5rem] border-b-2 border-white object-cover shadow-2xl brightness-[30%] transition-opacity duration-1000 ${
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
        className="space-y-5 px-10 text-center lg:text-start"
        data-aos="fade-up"
      >
        <div className="text-3xl font-bold md:text-6xl lg:text-5xl">
          <h1 className="inline">
            <span className="text-green-500">i</span>
            <span className="inline text-white">Charge</span>
          </h1>

          <br />

          <h2 className="inline text-white">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#00FF8C] via-[#1fc0f1] to-[#00FBFF] bg-clip-text text-transparent">
              Powered
            </span>
          </h2>

          <br />

          <h2 className="inline text-white">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#00FBFF] via-[#1fc0f1] to-[#00FF8C] bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
        </div>

        <p className="mx-auto font-lexendDeca text-xl text-white md:w-10/12 lg:mx-0">
          icharge offers a one-stop self-service mobile power bank rental
          service, providing a solution for charging your mobile devices while
          on the go.
        </p>

        <div className="items-center space-y-4">
          <Button className="h-14 w-full gap-2 rounded-full bg-opacity-50 bg-gradient-to-l from-[#066C01] to-[#5AFF52] font-lexendDeca text-sm text-primary-foreground md:w-48">
            Get Started <ArrowRight />
          </Button>
          <div className="flex items-center justify-evenly md:block md:space-y-2">
            <img src={playstore} alt="ic_playstore" className="w-32 md:w-40" />

            <img src={applestore} alt="ic_apple" className="w-32 md:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
