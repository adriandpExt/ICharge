import { Zap } from "lucide-react";
import { ReactElement } from "react";

import costEffective from "@/assets/about/costeffective.png";
import RocketLogo from "@/assets/about/rocket.png";
import UnionLogo from "@/assets/about/Union.png";
import VectorLogo from "@/assets/about/Vector.png";
import { Label } from "@/components/ui/label";
import { SectionTitleProps, SectionContentProps } from "./types";

const AboutComponent = (): ReactElement => {
  const SectionTitle = ({
    children,
    icon,
    className = "",
  }: SectionTitleProps): ReactElement => (
    <h2
      className={`container mx-auto flex items-center text-2xl font-bold text-green-700 md:text-3xl ${className}`}
    >
      <img src={icon} alt="" className="mr-2 h-16 w-16" />
      <Label variant="title">{children}</Label>
    </h2>
  );

  const SectionContent = ({
    children,
    className = "",
  }: SectionContentProps): ReactElement => (
    <div className={`mt-4 bg-green-100 p-4 ${className}`}>
      <div className="container mx-auto border-t border-green-700 pt-4">
        <p className="text-green-800">{children}</p>
      </div>
    </div>
  );

  return (
    <div>
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
                <Label className="text-base">
                  Quanta Dance Inc. provides on-the-go charging solutions to
                  keep people connected in today's digital world.
                </Label>
                <br />
                <Label className="text-base">
                  Our nationwide network of iCharge powerbank stations ensures
                  that individuals and businesses can access reliable power
                  anytime, anywhere across the Philippines.
                </Label>
                <br />
                <Label className="text-base">
                  We believe that staying powered is essential to staying
                  connected, whether during everyday activities or critical
                  moments.
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('@/assets/about/about-banner.jpg')] bg-cover bg-center">
        <div className="container relative mx-auto min-h-[200px]">
          <div className="relative z-10 flex min-h-[200px] flex-col justify-center p-4 sm:p-6 md:p-8">
            <div className="mx-auto max-w-md sm:mx-0">
              {["STAY POWERED", "STAY CONNECTED"].map((text, index) => (
                <h2
                  key={index}
                  className="mb-4 flex items-center justify-center text-white sm:justify-start sm:text-3xl md:text-4xl"
                >
                  <Zap
                    className="mr-2 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                    aria-hidden="true"
                  />
                  <Label variant={"heading1"}>{text}</Label>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-0">
        <section className="mb-8">
          <SectionTitle icon={RocketLogo}>
            <Label variant={"heading1"}>OUR MISSION</Label>
          </SectionTitle>
          <SectionContent className="md:mr-36">
            <Label>
              We aim to deliver convenient and reliable powerbank lending
              stations across the Philippines, with future expansion plans to
              serve global markets. By partnering with businesses, we enhance
              the customer experience in retail, hospitality, transport,
              healthcare, and event venues, offering a seamless solution for
              staying powered on the go.
            </Label>
          </SectionContent>
        </section>

        <section className="mb-8">
          <SectionTitle icon={UnionLogo} className="justify-end">
            <Label variant={"heading1"}>OUR VISION</Label>
          </SectionTitle>
          <SectionContent className="md:ml-36">
            <Label>
              To be the leading provider of mobile charging solutions, ensuring
              that everyone, everywhere, remains connected at all times, whether
              locally or globally. Our vision includes scaling our solutions to
              reach high-traffic areas not just in the Philippines, but in major
              cities worldwide.
            </Label>
          </SectionContent>
        </section>

        <section className="mb-8">
          <SectionTitle icon={VectorLogo}>
            <Label variant={"heading1"}>OUR REACH</Label>
          </SectionTitle>
          <SectionContent className="md:mr-36">
            <Label className="mb-4">
              Our iCharge stations are rapidly expanding in malls, restaurants,
              hospitals, transport hubs, and event venues across the country.
            </Label>
            <br />
            <Label className="mb-4">
              With integrated payment systems such as GCash, GrabPay, Alipay,
              Maya, WeChat Pay, UnionBank and BDO, our stations offer
              convenient, hassle-free access to mobile power, making it easier
              than ever to stay charged.
            </Label>
            <br />
            <Label>
              This flexibility mirrors global charging networks, offering
              customers a seamless experience wherever they go.
            </Label>
          </SectionContent>
        </section>
      </div>
    </div>
  );
};

export default AboutComponent;
