import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight, Lightbulb, Rocket, Sprout, Zap } from "lucide-react";
import costEffective from "@/assets/costeffective.png";

const Sustainabilities = () => {
  return (
    <section className="pt-[40vh]">
      <main className="absolute inset-0 h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-6 p-4 text-center">
          <Label variant="title" className="text-white sm:mb-6">
            Quanta Dance Inc.
          </Label>

          <Label
            variant="subtitle"
            className="mb-6 text-start text-white sm:mb-8"
          >
            We believe in a world where staying connected is effortless. With
            our innovative power bank stations, we make sure your customers can
            stay powered and ready for any adventure, anywhere.
          </Label>

          <Button
            variant="custombutton"
            className="h-12 w-52 rounded-md bg-white text-base text-green-600 hover:bg-green-100 sm:text-lg md:h-9"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </main>

      <div className="container mx-auto flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col items-center p-6 lg:flex-row lg:gap-24 lg:p-16">
            <div className="flex w-full justify-center lg:w-1/3">
              <img
                src={costEffective}
                alt="iCharge devices"
                className="h-60 w-60 text-green-600 md:h-96 md:w-96"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <Label className="mb-8 text-5xl font-bold text-green-700 md:text-6xl lg:text-7xl">
                WHO WE ARE
              </Label>
              <div className="space-y-6 text-lg text-gray-700 md:text-xl">
                <p>
                  Quanta Dance Inc. provides on-the-go charging solutions to
                  keep people connected in today's digital world.
                </p>
                <p>
                  Our nationwide network of iCharge powerbank stations ensures
                  that individuals and businesses can access reliable power
                  anytime, anywhere across the Philippines.
                </p>
                <p>
                  We believe that staying powered is essential to staying
                  connected, whether during everyday activities or critical
                  moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next component */}
      <div className="bg-[url('@/assets/timeline/timeline2.png')] bg-cover bg-center">
        <div className="container relative mx-auto min-h-[200px] overflow-hidden">
          <div className="relative z-10 flex min-h-[200px] flex-col justify-center p-4 sm:p-6 md:p-8">
            <div className="mx-auto max-w-md sm:mx-0">
              <h2 className="mb-4 flex items-center justify-center text-2xl font-bold text-black sm:justify-start sm:text-3xl md:text-4xl">
                <Zap
                  className="mr-2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                  aria-hidden="true"
                />
                <span>STAY POWERED</span>
              </h2>
              <h2 className="flex items-center justify-center text-2xl font-bold text-black sm:justify-start sm:text-3xl md:text-4xl">
                <Zap
                  className="mr-2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                  aria-hidden="true"
                />
                <span>STAY CONNECTED</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* next component */}
      <div className="container mx-auto">
        <h2 className="flex items-center text-2xl font-bold text-green-700 md:text-3xl">
          <Rocket className="mr-2" />
          <Label variant="title" className="">
            OUR MISSION
          </Label>
        </h2>
        <section className="bg-green-100">
          <div className="border-t border-green-700 pt-4">
            <p className="text-green-800">
              We aim to deliver convenient and reliable powerbank lending
              stations across the Philippines, with future expansion plans to
              serve global markets. By partnering with businesses, we enhance
              the customer experience in retail, hospitality, transport,
              healthcare, and event venues, offering a seamless solution for
              staying powered on the go.
            </p>
          </div>
        </section>

        <h2 className="flex items-center justify-end text-2xl font-bold text-green-700 md:text-3xl">
          <Label variant="title" className="">
            OUR VISION
          </Label>
          <Lightbulb className="ml-2" />
        </h2>
        <section className="bg-green-100">
          <div className="border-t border-green-700 pt-4">
            <p className="text-green-800">
              To be the leading provider of mobile charging solutions, ensuring
              that everyone, everywhere, remains connected at all times, whether
              locally or globally. Our vision includes scaling our solutions to
              reach high-traffic areas not just in the Philippines, but in major
              cities worldwide.
            </p>
          </div>
        </section>

        <h2 className="flex items-center text-2xl font-bold text-green-700 md:text-3xl">
          <Sprout className="mr-2" />{" "}
          <Label variant="title" className="">
            OUR REACH
          </Label>
        </h2>
        <section className="bg-green-100">
          <div className="border-t border-green-700 pt-4">
            <p className="mb-4 text-green-800">
              Our iCharge stations are rapidly expanding in malls, restaurants,
              hospitals, transport hubs, and event venues across the country.
            </p>
            <p className="mb-4 text-green-800">
              With integrated payment systems such as GCash, GrabPay, Alipay,
              Maya, WeChat Pay, UnionBank and BDO, our stations offer
              convenient, hassle-free access to mobile power, making it easier
              than ever to stay charged.
            </p>
            <p className="text-green-800">
              This flexibility mirrors global charging networks, offering
              customers a seamless experience wherever they go.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Sustainabilities;
