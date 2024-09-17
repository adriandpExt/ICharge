// import video from "@/assets/iCharge.mov";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="mx-auto grid h-screen w-10/12 place-items-center gap-10 py-20 pb-5 md:py-32 lg:grid-cols-2">
      <motion.div
        className="absolute -z-20 h-[25rem] w-[25rem] rounded-3xl bg-green-500 bg-opacity-25"
        initial={"-40vw"}
        animate={{
          x: ["-40vw", "35vw", "-40vw", "35vw"],
          rotate: [90, 180, 270, -270, -180, 90],
          y: ["30%", "-100%"],
          scale: [1, 0.5],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute -z-20 h-[15rem] w-[15rem] rounded-3xl bg-blue-500 bg-opacity-25"
        initial={{ x: "35vw", y: "20vh" }}
        animate={{
          x: ["35vw", "-40vw", "35vw", "40vw"],
          rotate: [90, 180, 270, -270, -180, 90],
          y: ["30%", "-100%"],
          scale: [1.2, 0.2],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>

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
      <div className="space-y-6 text-center lg:text-start">
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
            <span className="ml-3 inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Powered
            </span>
          </h2>

          <br />

          <h2 className="inline text-gray-600 dark:text-gray-400">
            Stay
            <span className="ml-3 inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Connected
            </span>
          </h2>
        </div>

        <p className="mx-auto text-xl text-white md:w-10/12 lg:mx-0">
          icharge offers a one-stop self-service mobile power bank rental
          service, providing a solution for charging your mobile devices while
          on the go.
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Button className="inline-flex h-10 w-40 place-items-center bg-green-500 bg-opacity-50 text-sm text-primary-foreground hover:bg-green-600">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
