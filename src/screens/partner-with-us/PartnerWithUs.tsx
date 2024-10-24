import { ReactElement } from "react";

import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import LocalizationKey from "@/i18n/key";

import img1 from "@/assets/stayPoweredLogo.png";
import bgImg from "@/assets/modern-man-using-smartphone-city-2.png";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Banner, PageContainer } from "@/components";

import { InquiryForm } from "./components";

const PartnerWithUs = (): ReactElement => {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Banner title={t(LocalizationKey.partnerWithUs.partnerWithUsHeading)}>
        <Label variant="subtitle" className="font-medium text-white">
          {t(LocalizationKey.partnerWithUs.heading1)}
        </Label>
        <Label variant="subtitle" className="font-medium text-white">
          {t(LocalizationKey.partnerWithUs.heading2)}
        </Label>

        <Button
          onClick={() => scrollToSection("inquiryForm")}
          variant={"custombutton"}
          className="group h-10 items-center bg-white text-green-600 hover:text-white"
        >
          {t(LocalizationKey.partnerWithUs.bannerBtn)}
          <ChevronRight className="text-green-600 group-hover:text-white" />
        </Button>
      </Banner>

      <PageContainer className="flex flex-col gap-20">
        <div
          data-aos="fade"
          className="flex flex-col items-center gap-10 lg:flex-row"
        >
          <div>
            <img
              src={img1}
              alt="Convenience"
              className="h-96 w-full text-green-600"
            />
          </div>

          <div>
            <Label
              variant={"banner"}
              className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
            >
              {t(LocalizationKey.partnerWithUs.whyPartnerWithUs)}
            </Label>

            <div className="flex flex-col gap-5">
              <Label className="text-base">
                {t(LocalizationKey.partnerWithUs.whyPartnerWithUsDesc1)}
              </Label>

              <Label className="text-base">
                {t(LocalizationKey.partnerWithUs.whyPartnerWithUsDesc2)}
              </Label>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="3000"
          className="flex flex-col items-center gap-10 lg:flex-row-reverse"
        >
          <div>
            <img
              src={img1}
              alt="Convenience"
              className="h-96 w-full text-green-600"
            />
          </div>

          <div>
            <Label
              variant={"banner"}
              className="bg-gradient-to-b from-green-900 to-green-600 bg-clip-text text-transparent"
            >
              {t(LocalizationKey.partnerWithUs.joinUs)}
            </Label>

            <div className="flex flex-col gap-5">
              <Label className="text-base">
                {t(LocalizationKey.partnerWithUs.joinUsDesc1)}
              </Label>

              <Label className="text-base">
                {t(LocalizationKey.partnerWithUs.joinUsDesc2)}
              </Label>
            </div>
          </div>
        </div>
      </PageContainer>

      <section className="relative h-full w-full pb-16">
        <img
          src={bgImg}
          alt="Background"
          className="absolute inset-0 h-[90vh] w-full bg-cover brightness-50"
        />

        <div className="absolute inset-0 h-[90vh] bg-gradient-to-tr from-[#33E72A] to-transparent" />

        <div className="container relative z-10 mx-auto flex h-full flex-col gap-5 px-10 py-32">
          <Label variant={"banner"} className="text-white">
            {t(LocalizationKey.partnerWithUs.wantToPartner)}
          </Label>
          <Label variant={"banner"} className="text-white">
            {t(LocalizationKey.partnerWithUs.getInTouch)}
          </Label>
        </div>

        <InquiryForm />
      </section>
    </>
  );
};

export default PartnerWithUs;
