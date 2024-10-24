import { ReactElement } from "react";
import costEffective from "@/assets/about/costeffective.png";
import RocketLogo from "@/assets/about/rocket.png";
import UnionLogo from "@/assets/about/Union.png";
import VectorLogo from "@/assets/about/Vector.png";
import Lightning from "@/assets/about/lightning-fill.png";
import { Label } from "@/components/ui/label";
import { SectionTitleProps, SectionContentProps } from "./types";
import { PageContainer } from "@/components";
import SummaryCard from "../component/SumCard";
import bgSide from "@/assets/modern-man-using-smartphone-city-2.png";
import { SumVal } from "../utils";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";

const AboutComponent = (): ReactElement => {
  const { t } = useTranslation();
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
      <div
        className="container mx-auto flex items-center justify-center p-8 lg:p-12"
        data-aos="fade-up"
      >
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
                {t(LocalizationKey.about.whoWeAre)}
              </Label>
              <div className="space-y-6 text-lg text-gray-700 md:text-xl">
                <Label className="text-base">
                  {t(LocalizationKey.about.whoWeAreDesc1)}
                </Label>
                <br />
                <Label className="text-base">
                  {t(LocalizationKey.about.whoWeAreDesc2)}
                </Label>
                <br />
                <Label className="text-base">
                  {t(LocalizationKey.about.whoWeAreDesc3)}
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('@/assets/about/about-banner.jpg')] bg-cover bg-center">
        <div className="container relative mx-auto min-h-[300px]">
          <div className="relative z-10 flex min-h-[300px] flex-col justify-center p-4 sm:p-6 md:p-8">
            <div className="mx-auto sm:mx-0">
              {[
                t(LocalizationKey.about.stayPowered),
                t(LocalizationKey.about.stayConnected),
              ].map((text, index) => (
                <h2
                  key={index}
                  className="mb-4 flex items-center justify-center text-white sm:justify-start sm:text-3xl md:text-4xl"
                >
                  <img
                    src={Lightning}
                    className="mr-2 h-6 w-6 sm:h-8 sm:w-8 md:h-16 md:w-16"
                    aria-hidden="true"
                  />
                  <Label variant={"banner"}>{text}</Label>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 md:px-0">
        <section className="mb-8" data-aos="fade-up">
          <SectionTitle icon={RocketLogo}>
            <Label variant={"banner"}>
              {" "}
              {t(LocalizationKey.about.ourMission)}
            </Label>
          </SectionTitle>
          <SectionContent className="p-20 md:mr-36">
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourMissionDesc)}
            </Label>
          </SectionContent>
        </section>

        <section className="mb-8" data-aos="fade-up">
          <SectionTitle icon={UnionLogo} className="justify-end">
            <Label variant={"banner"}>
              {" "}
              {t(LocalizationKey.about.ourVision)}
            </Label>
          </SectionTitle>
          <SectionContent className="p-10 md:ml-36">
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourVisionDesc)}
            </Label>
          </SectionContent>
        </section>

        <section className="mb-8" data-aos="fade-up">
          <SectionTitle icon={VectorLogo}>
            <Label variant={"banner"}>
              {" "}
              {t(LocalizationKey.about.ourReach)}
            </Label>
          </SectionTitle>
          <SectionContent className="p-10 md:mr-36">
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourReachDesc1)}
            </Label>
            <br />
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourReachDesc2)}
            </Label>
            <br />
            <Label variant={"subtitle"}>
              {t(LocalizationKey.about.ourReachDesc3)}
            </Label>
          </SectionContent>
        </section>
        <PageContainer className="space-y-20">
          {SumVal.map((data, index) => (
            <SummaryCard
              stepSummary={data}
              sideBg={bgSide}
              key={index}
              isFlipped={index === 1 ? true : false}
            />
          ))}
        </PageContainer>
      </div>
    </div>
  );
};

export default AboutComponent;
