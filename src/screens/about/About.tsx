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
import { Certs, SumVal } from "./utils";
import { ISection, ISummaryCard } from "./types";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const Section = (props: ISection): ReactElement => {
  const { icon, children, title, isFlipped = false } = props;

  return (
    <section data-aos="fade-up">
      <div
        className={cn(
          "container mx-auto flex items-center gap-2 bg-gradient-to-b from-[#044F00] to-[#078E00]",
          "bg-clip-text p-4 text-2xl font-bold text-transparent md:text-3xl",
          isFlipped ? "justify-end" : "justify-start",
        )}
      >
        <img src={icon} alt={icon} className="h-16" />
        <Label variant="banner">{title}</Label>
      </div>

      <div
        className={cn(
          "border-t-2 border-green-700 bg-[#38D430]/10 p-10",
          isFlipped
            ? "md:ml-36 md:rounded-bl-[5rem]"
            : "md:mr-36 md:rounded-br-[5rem]",
        )}
      >
        <div className="container mx-auto max-w-7xl">{children}</div>
      </div>
    </section>
  );
};

const SummaryCard = (props: ISummaryCard): ReactElement => {
  const { t } = useTranslation();

  const { summaryData, isFlipped } = props;
  const { SumImage, SumImageMobile, header, desc, footnote } = summaryData;

  return (
    <Card
      data-aos="zoom-in-up"
      className={cn(
        "rounded-[36px] border-0 bg-gradient-to-b from-[#e0eddf] via-[#d9e3da] to-[#e6e8e6] lg:flex",
        isFlipped && "flex-row-reverse",
      )}
    >
      <img
        src={SumImage}
        alt=""
        height={"100%"}
        className={cn(
          "hidden object-cover lg:flex",
          isFlipped ? "rounded-r-[36px]" : "rounded-l-[36px]",
        )}
      />

      <img
        src={SumImageMobile}
        alt=""
        width={"100%"}
        className="flex-col rounded-t-[36px] object-cover lg:hidden"
      />

      <CardContent className="flex flex-col space-y-5 p-10 lg:w-[60%]">
        <Label
          variant="heading2"
          className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-center text-transparent lg:text-start"
        >
          {t(header)}
        </Label>

        <Separator className="bg-green-700 lg:hidden" />

        <Label variant="subtitle">{t(desc)}</Label>

        <Label variant={"subtitle"} className="font-bold md:flex">
          {t(LocalizationKey.about.keyFeaturesHead)}
        </Label>

        <div className="w-full items-start space-y-5">
          {footnote.map((data, index) => (
            <div className="flex items-start gap-5" key={index}>
              <div className="rounded-full bg-gradient-to-t from-green-600 to-green-900 p-1">
                <Check
                  className="h-3 w-3 text-white md:h-5 md:w-5"
                  strokeWidth={5}
                />
              </div>

              <Label variant={"subtitle"}>{t(data)}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

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
              className="w-72 text-green-600"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Label
              variant="banner"
              className="bg-gradient-to-b from-[#044F00] to-[#078E00] bg-clip-text text-transparent"
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
        <div className="container mx-auto space-y-2 p-4 py-14 sm:p-6 md:p-8">
          {[
            t(LocalizationKey.about.stayPowered),
            t(LocalizationKey.about.stayConnected),
          ].map((text, ids) => (
            <div
              key={ids}
              className="flex items-center justify-center gap-2 text-white sm:justify-start"
            >
              <img src={Lightning} className="h-6 sm:h-8 md:h-16" />
              <Label variant="banner">{text}</Label>
            </div>
          ))}
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

        <PageContainer className="flex flex-col gap-10 px-0 md:px-10">
          {SumVal.map((data, index) => (
            <SummaryCard
              key={index}
              summaryData={data}
              isFlipped={index === 1}
            />
          ))}

          <section className="flex flex-wrap justify-center gap-3">
            {Certs.map((data, index) => (
              <img
                src={data}
                key={index}
                alt={`CertImage ${index + 1}`}
                className="h-[60px] lg:h-[90px] xl:h-[120px]"
              />
            ))}
          </section>
        </PageContainer>
      </div>
    </section>
  );
};

export default Sustainabilities;
