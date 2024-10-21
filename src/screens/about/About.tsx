import { ReactElement } from "react";
import { Label } from "@/components/ui/label";
import { PageContainer } from "@/components";
import SummaryCard from "./components/SummaryCard";
import { advancedTechnology, inHouseIt, proprietaryHardware } from "./utils";
import bgSide from "@/assets/modern-man-using-smartphone-city-2.png";
import Certification from "./components/Certification";

const About = (): ReactElement => {
  return (
    <main>
      <section className="h-[65vh] w-full bg-[url('@/assets/bg_green_wave.png')] bg-cover bg-bottom bg-no-repeat">
        <div className="container mx-auto flex h-full flex-col items-center justify-center space-y-2 p-2 px-4 py-8 text-center">
          <Label variant={"heading1"} className="text-white sm:mb-6">
            ABOUT THE COMPANY
          </Label>
        </div>
      </section>
      <PageContainer className="flex flex-col space-y-5">
        <Label variant="title">WHO WE ARE</Label>
        <Label variant="subtitle">
          Quanta Dance Inc. provides on-the-go charging solutions to keep people
          connected in today’s digital world. Our nationwide network of iCharge
          powerbank stations ensures that individuals and businesses can access
          reliable power anytime, anywhere across the Philippines. We believe
          that staying powered is essential to staying connected, whether during
          everyday activities or critical moments.
        </Label>
      </PageContainer>
      <PageContainer className="flex flex-col space-y-5 text-center">
        <Label variant="title">OUR REACH</Label>
        <Label variant="subtitle">
          Our iCharge stations are rapidly expanding in malls, restaurants,
          hospitals, transport hubs, and event venues across the country. With
          integrated payment systems such as GCash, GrabPay, Alipay, Maya,
          WeChat Pay, UnionBank and BDO, our stations offer convenient,
          hassle-free access to mobile power, making it easier than ever to stay
          charged. This flexibility mirrors global charging networks, offering
          customers a seamless experience wherever they go.
        </Label>
      </PageContainer>
      <PageContainer className="space-y-20">
        <SummaryCard stepSummary={advancedTechnology} sideBg={bgSide} />
        <SummaryCard stepSummary={inHouseIt} sideBg={bgSide} flip />
        <SummaryCard stepSummary={proprietaryHardware} sideBg={bgSide} />
      </PageContainer>
      <Certification />
    </main>
  );
};

export default About;
