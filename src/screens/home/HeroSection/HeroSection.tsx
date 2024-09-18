// import video from "@/assets/iCharge.mov";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import playstore from "@/assets/icons/ic_playstore.svg";
import applestore from "@/assets/icons/ic_apple.svg";

const HeroSection = () => {
  return (
    <section className="mx-auto grid h-screen w-10/12 place-items-center gap-10 lg:grid-cols-2">
      <video
        muted
        loop
        className="absolute inset-0 left-0 top-0 -z-30 h-full w-full object-cover brightness-[30%]"
        autoPlay
      >
        <source
          src="https://joospower.com/wp-content/uploads/2023/10/Joos-Advert-final.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="space-y-5 text-center lg:text-start" data-aos="fade-up">
        <div className="text-3xl font-bold md:text-6xl lg:text-5xl">
          <h1 className="inline">
            <span className="text-green-500">i</span>
            <span className="inline text-gray-600 dark:text-gray-400">
              Charge
            </span>
          </h1>

          <br />

          <h2 className="inline text-gray-600 dark:text-gray-400">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#00FF8C] via-[#1fc0f1] to-[#00FBFF] bg-clip-text text-transparent">
              Powered
            </span>
          </h2>

          <br />

          <h2 className="inline text-gray-600 dark:text-gray-400">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#00FBFF] via-[#1fc0f1] to-[#00FF8C] bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
        </div>

        <p className="mx-auto text-xl text-white md:w-10/12 lg:mx-0">
          icharge offers a one-stop self-service mobile power bank rental
          service, providing a solution for charging your mobile devices while
          on the go.
        </p>

        <div className="items-center space-y-4">
          <Button className="h-14 w-full gap-2 rounded-full bg-opacity-50 bg-gradient-to-l from-[#066C01] to-[#5AFF52] text-sm text-primary-foreground md:w-48">
            Get Started <ArrowRight />
          </Button>
          <img src={playstore} alt="ic_playstore" />
          <img src={applestore} alt="ic_apple" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
