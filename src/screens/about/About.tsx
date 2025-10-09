import { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { Banner } from "@/components";
import LocalizationKey from "@/i18n/key";
import { useTranslation } from "react-i18next";
import costEffective from "@/assets/ichargemodel.png";
import RocketLogo from "@/assets/about/rocket.png";
import UnionLogo from "@/assets/about/Union.png";
import VectorLogo from "@/assets/about/Vector.png";
import Lightning from "@/assets/about/lightning-fill.png";
import { PageContainer } from "@/components";
import SummaryCard from "./component/SumCard";
import {
  Certs,
  CertsMobileBottomRow,
  CertsMobileTopRow,
  SumVal,
} from "./utils";
import { Section } from "./component";

const CertificationSection = (): ReactElement => (
  <>
    <section className="hidden justify-center gap-3 overflow-hidden lg:flex lg:flex-row">
      {Certs.map((data, index) => (
        <img
          src={data.imageName}
          key={index}
          className="h-[90px] xl:h-[120px]"
        />
      ))}
    </section>
    <section className="relative -top-10 flex flex-col items-center -space-x-1 lg:hidden">
      <div className="flex gap-3">
        {CertsMobileTopRow.map((data, index) => (
          <img src={data.imageName} key={index} className="h-[60px]" />
        ))}
      </div>
      <div className="relative top-3 flex gap-3">
        {CertsMobileBottomRow.map((data, index) => (
          <img src={data.imageName} key={index} className="h-[60px]" />
        ))}
      </div>
    </section>
  </>
);

const Sustainabilities = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="">
      <Banner title="QUANTA DANCE INC">
        <Label variant="subtitle" className="font-medium text-white">
          {t(LocalizationKey.about.aboutHeading)}
        </Label>
      </Banner>

      <PageContainer>
        <div
          className="flex max-w-7xl flex-col gap-3 lg:flex-row"
          data-aos="fade-up"
        >
          <div className="flex w-full justify-center">
            <img
              src={costEffective}
              alt="iCharge devices"
              className="h-75 w-72 text-green-600"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Label
              variant="banner"
              className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text font-medium text-transparent"
            >
              {t(LocalizationKey.about.whoWeAre)}
            </Label>

            {LocalizationKey.about.whoWeAreDesc
              .split("\n")
              .map((key, index) => (
                <Label
                  variant="subtitle"
                  className="whitespace-pre-line"
                  key={index}
                >
                  {t(key)}
                </Label>
              ))}
          </div>
        </div>
      </PageContainer>

      <div className="bg-[url('@/assets/about/about-banner.jpg')] bg-cover bg-center">
        <div className="container relative mx-auto min-h-[301px]">
          <div className="relative z-10 flex min-h-[301px] flex-col justify-center p-4 sm:p-6 md:p-8">
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
                  <Label variant="banner">{text}</Label>
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-10 px-4 md:px-0">
        <Section icon={RocketLogo} title={t(LocalizationKey.about.ourMission)}>
          <Label variant="subtitle">
            {t(LocalizationKey.about.ourMissionDesc)}
          </Label>
        </Section>

        <Section
          icon={UnionLogo}
          isFlipped
          title={t(LocalizationKey.about.ourVision)}
        >
          <Label variant="subtitle">
            {t(LocalizationKey.about.ourVisionDesc)}
          </Label>
        </Section>

        <Section icon={VectorLogo} title={t(LocalizationKey.about.ourReach)}>
          <div className="space-y-20">
            {LocalizationKey.about.ourReachDesc.split("\n").map((text, ids) => (
              <Label
                variant="subtitle"
                key={ids}
                className="whitespace-pre-line"
              >
                {t(text)}
              </Label>
            ))}
          </div>
        </Section>

        <PageContainer className="flex flex-col gap-20 px-0 md:px-10">
          {SumVal.map((data, index) => (
            <SummaryCard
              key={index}
              summaryCardContents={data}
              isFlipped={index === 1}
            />
          ))}

          <CertificationSection />
        </PageContainer>
      </div>
    </section>
  );
};

export default Sustainabilities;
